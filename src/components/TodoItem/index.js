// Write your code here
import './index.css'

const TodoItem = props => {
  const {eachTodo, deleteTodo} = props
  const {id, title} = eachTodo

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="todoCard">
      <p className="para">{title}</p>
      <button className="button" onClick={onDelete} type="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
