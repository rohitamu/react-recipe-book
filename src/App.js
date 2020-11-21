import React, { Component } from "react";
import Modal from "./components/Modal";
import "./App.css";
import { recipeLists } from "./Data/data";

class App extends Component {
  state = {
    showModal: false,
    recipes: recipeLists,
    title: undefined,
    instruction: undefined,
    ingredients: undefined,
    search: "",
    mode: -1,
  };

  handleModal = () => {
    
  };

  handleCancel = () => {
    
  };

  handleOnChange = (e) => {
    
  };

  //add recipe
  handleAdd = () => {
    
  };

  //view recipe
  handleView = (i) => {
    
  };

  render() {
    return (
      <div>
        //display the title ,search bar,add recipe button
        //display the recipe cards
        //display modal 
      </div>
    );
  }
}

export default App;
