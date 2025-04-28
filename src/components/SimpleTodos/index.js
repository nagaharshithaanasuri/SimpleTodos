import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
class SimpleTodos extends Component {
  state = {todoList: initialTodosList, addInput: ''}

  onSavingTodo = (id, title) => {
    const {todoList} = this.state
    const newList = todoList.map(each => {
      if (each.id === id) {
        return {...each, title}
      }
      return each
    })
    this.setState({todoList: newList})
  }

  deleteTodo = id => {
    const {todoList} = this.state
    const filteredTodoList = todoList.filter(each => each.id !== id)
    this.setState({
      todoList: filteredTodoList,
    })
  }

  onChangeInput = event => {
    this.setState({addInput: event.target.value})
  }

  onAdding = () => {
    const {addInput} = this.state
    const newTodo = {id: uuidv4(), title: addInput}
    this.setState(prev => ({
      todoList: [...prev.todoList, newTodo],
      addInput: '',
    }))
  }

  render() {
    const {todoList, addInput} = this.state
    return (
      <div className="bgm">
        <div className="card">
          <h1 className="head">Simple Todos</h1>
          <div className="inputCont">
            <input
              type="text"
              className="input"
              placeholder="Add Task"
              value={addInput}
              onChange={this.onChangeInput}
            />
            <button onClick={this.onAdding} className="addbtn">
              Add
            </button>
          </div>
          <div className="card2">
            {todoList.map(eachTodo => (
              <TodoItem
                eachTodo={eachTodo}
                key={eachTodo.id}
                deleteTodo={this.deleteTodo}
                onEditedTodo={this.onSavingTodo}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
