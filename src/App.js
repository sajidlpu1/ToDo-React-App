import React from 'react';
import logo from './logo.png';
import './App.css';

class App extends React.Component
{

  constructor(props)
  {
    super(props);
    this.state={
      newItem: "",
      list : [],

    }
  }

  addItem(todoValue)
  {
    if(todoValue !== "")
    {
      const newItem = {
        id : Date.now(),
        value : todoValue,
        isDone : false,
      };
      const list = [...this.state.list];
      // ... - Means append all the values into the list
      list.push(newItem);

      // Update the list
      this.setState({
        list , //Update list with new list
        newItem: "",
        // As the list get update with todoValue we make newItem empty for adding new item
      });
    }
  }

  deleteItem(id)
  {
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);
    // updatedItem filter all the item and skips the item that matches the id
    this.setState({list : updatedList}) //to update we use setState
  }

  updateInput(input)
  {
    this.setState({newItem : input});
  }


  render()
  {
    return(
      <div>
      <img src={logo} width="100" height="100" className="logo"/>
      <h1 className="app-title center-text monospace">ToDo App</h1>
      <div className="container center-text">
      <b className="monospace">ADD ITEM ToDo : </b>&nbsp;
      <input
          type="text" ClassName="input-text"
          placeholder="Enter the Task ToDo"
          required
          value={this.state.newItem}
          //this helps us what ever we enter in input get reached to the methods that add it
          onChange={e => this.updateInput(e.target.value)}
          //e for any update
          />
      <button
      className="add-btn button1"
      onClick={() => this.addItem(this.state.newItem)}
      disabled={!this.state.newItem.length}
      >Add ToDo</button>

      <div className="list">
      <ul className="Bullets">
      {this.state.list.map(item =>{
        return(
          <li key={item.id}>
          <input
          type="checkbox"
          name="idDone"
          checked={item.isDone}
          onChange={() => {}} />
          {item.value}
          <button
          className="btn"
          onClick={() => this.deleteItem(item.id)}>
          Delete
          </button>

          </li>
        )
      })}

      </ul>
      </div>
      </div>
      </div>
    );
  }

}

export default App;