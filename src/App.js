import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    // 1.
    userInput: ''
}



// 1.
inputChangedHandler = (event) => {
  // 1. update the state by setstate and the component that is doing the updating which in this case is userInput
  // evemt.target.value is what the user inputed
  this.setState({userInput: event.target.value});
}


//  6. update the userInput
deleteCharHandler = (index) => {
  // bring in the inputted string and then converts into array by split
  const text = this.state.userInput.split('');
  // removes 1 character from selected index from array
  text.splice(index, 1); 
  // converts array into a string again 
  const updatedText = text.join('');
  // userInput = updatedText
  this.setState({userInput: updatedText});

}
  



  render() {
    // 5. bring in the inputted string and then converts into array by split. split converts the string into js array .map to convert into another array
    // index argument/{key} fixes key error in console, not optimal, but will use in this exercise
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char 
      character={ch} 
      key={index}
      // 6. clicked is prop of Char and clicked has anonymous func to make deleteCharhandler execute when called at index
      clicked={() => this.deleteCharHandler(index)} />;
    });

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <hr/>
        {/* 1. */}
        <input type="text" 
        // two-way binding, reflects latest value in the input in value =
        onChange={this.inputChangedHandler}
        value={this.state.userInput}/>
        {/* makes the inputed text appear under the input box */}
        <p>{this.state.userInput}</p>
        {/* 2. inputLength is the prop here */}
        <Validation inputLength={this.state.userInput.length}/>
        {/* 5. charlist is the variable tht is rendered here, which is defined above*/}
        {charList}
      </div>
    );
  }
}

export default App;
