import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor(){
    super();

    this.state={
      characters: [],
      searchField:''
    };


  }
  componentDidMount(){
    fetch('http://demo2893726.mockable.io/')
  .then(response => response.json())
  .then(characters=>this.setState({characters:characters}));
  }

  handleChange  = (e) =>{
    this.setState({searchField: e.target.value});
  }


  render(){
    const {characters,searchField } = this.state;
    const filteredCharacters =characters.filter(character =>  
      character.name.toLowerCase().includes(searchField.toLowerCase())
      );
  return (

    <div className="App">
     <h1>Dragon ball universe</h1>
      <SearchBox
      placeholder='Search any Dragon ball Character'
      handleChange={this.handleChange} />
      <CardList characters={filteredCharacters}/>


 
  </div>
  );
}
}
export default App;
