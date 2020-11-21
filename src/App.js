import React, { Component } from "react";
import Modal from "./components/Modal";
import "./App.css";
import { recipeLists } from "./Data/data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      recipes: recipeLists,
      title: undefined,
      instruction: undefined,
      ingredients: undefined,
      search: "",
      mode: -1,
    };
  }

  handleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  handleCancel = () => { this.setState({mode: -1})};

  handleOnChange = (e) => {
    this.setState({ search: e.target.value });
  };

  //add recipe
  handleAdd = () => {
    if (
      this.state.title?.length > 0 &&
      this.state.instruction?.length > 0 &&
      this.state.instruction?.length > 0
    ) {
      const rc = this.state.recipes;
      rc.push({
        title: this.state.title,
        ingredients: this.state.ingredients,
        instruction: this.state.instruction,
      });

      this.setState({
        recipes: rc,
        title: "",
        ingredients: "",
        instruction: "",
        showModal: false,
      });
    }
  };

  //view recipe
  handleView = (i) => {
    this.setState({mode: i})
  };

  render() {
    return (
      <div>
        <div className="headContent">
          <h1>Recipe Book</h1>
          <input className="searchBar" onChange={this.handleOnChange}></input>
          <button className="addbutton" onClick={this.handleModal}>
            Add Recipe
          </button>
          {this.state.showModal && (
            <Modal className="modalBg">
              <div className="pop">
                <h1>Add Your Recipe</h1>
                <h2>Title</h2>
                <input
                  className="inputFields"
                  onChange={(e) => this.setState({ title: e.target.value })}
                ></input>

                <h2>Ingredients</h2>
                <input
                  className="inputFields"
                  onChange={(e) =>
                    this.setState({ ingredients: e.target.value.split(",") })
                  }
                ></input>

                <h2>Instruction</h2>
                <textarea
                  className="textarea"
                  onChange={(e) =>
                    this.setState({ instruction: e.target.value })
                  }
                ></textarea>
                <button className="add" onClick={this.handleAdd}>
                  Add
                </button>
                <button className="add" onClick={this.handleModal}>
                  Cancel
                </button>
              </div>
            </Modal>
          )}
        </div>
        <div className="recipeContainer">
          { this.state.mode !== -1 && (
                  <Modal className="modalBg">
                    <div className="pop">
                      <h1>{this.state.recipes[this.state.mode].title}</h1>
                      <h2>Ingredients</h2>
                      <ul>
                        {this.state.recipes[this.state.mode].ingredients.map((ing) => (
                          <li>{ing}</li>
                        ))}
                      </ul>
                      <h2>Instruction</h2>
                        <p>{this.state.recipes[this.state.mode].instruction}</p>
                      <button onClick={this.handleCancel} className="add">Cancel</button>
                    </div>
                  </Modal>
                )} 
          {this.state.recipes
            .filter((rec) => {
              let search = this.state.search;
              if (search.length > 0) {
                
                return rec.title.startsWith(search);
              }
              return rec;
            })
            .map((recipe, index) => (
               <div className="recipeCard">
                <div>
                  <h2>{recipe.title}</h2>
                </div>
                <div>
                  <button onClick={() => this.handleView(index)}>
                    View more
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default App;
