import './index.css'
import {useState} from 'react'

const TodoItem = props => {
  const {eachTodo, deleteTodo, onEditedTodo} = props
  const {id, title} = eachTodo

  const onDelete = () => {
    deleteTodo(id)
  }

  const [isEdited, editTodo] = useState(false)
  const [isChecked, checkTodo] = useState(false)
  const [taskTitle, setTaskTitle] = useState(title)

  const onChangeTitle = event => {
    setTaskTitle(event.target.value)
  }

  const onSaveEditTask = () => {
    editTodo(false)
    onEditedTodo(id, taskTitle)
  }

  const onClickCheckInput = event => {
    checkTodo(event.target.checked)
  }

  const onClickEdit = () => {
    editTodo(true)
  }

  const isCheckedTrue = isChecked ? 'checked-title' : ''
  return (
    <li className="todoCard">
      {isEdited ? (
        <div className="text-btn-div">
          <input
            className="edit-input"
            type="text"
            value={taskTitle}
            onChange={onChangeTitle}
          />
          <button className="save-edit-btn" onClick={onSaveEditTask}>
            Save
          </button>
        </div>
      ) : (
        <div className="text-btn-div">
          <div className="input-label-div">
            <input
              className="check-box"
              checked={isChecked}
              onChange={onClickCheckInput}
              type="checkbox"
              id={id}
            />
            <p htmlFor={id} className={`para ${isCheckedTrue}`}>
              {title}
            </p>
          </div>
          <button className="save-edit-btn" onClick={onClickEdit}>
            Edit
          </button>
        </div>
      )}

      <button className="button" onClick={onDelete} type="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
