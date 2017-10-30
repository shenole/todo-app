import React from 'react';
import './App.css';

// Create component (component below is written in ES6. The class "TodoComponent" is stated and "extends" or is a child of the class "Component".

class TodoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['buy milk', 'fill up gas tank', 'pay bills', 'pick up Alyssa']
    }
  }

//Updates the list (array) that is the state
  addItem(e) {
    e.preventDefault();
    const {items} = this.state;
    const newItem = this.newItem.value;

    this.setState ({
      items: [...this.state.items, newItem]
    })
//resets form after each new entry
    this.addForm.reset();
  }

  render() {
    return(
      <div class="container">
        <div>
          <h1>To Do List</h1>
//Adds another item row to the list, once a new item is inputed and the submits it (take note of the "onSubmit" function syntax)
          <form ref={(input) => {this.addForm = input}} onSubmit = {(e) => {this.addItem(e)}}>
            <div>
//Adds a new item to list, in this case, via a text input
              <input ref={(input) => {this.newItem = input}} type="text" placeholder="note" className="form-control" id="newItemInput"/>
            </div>
            <button type="submit" className="btn">Add</button>
          </form>
          <table>
          <thead>
            <th class="id">#</th>
            <th class="todo">Item</th>
            <th class="button1">Action</th>
          </thead>
          <tbody>
            {
//This method loops through the array of "items" and returns individual interations of each {item}.
              this.state.items.map(item => {
                return(
                <tr key={item}>
                  <th scope="row">1</th>
                  <td class="toDo">{item}</td>
                  <td class="button">Button</td>
                </tr>
              )
              })
            }
          </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default TodoComponent;
