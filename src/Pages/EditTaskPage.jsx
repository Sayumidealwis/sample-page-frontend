import React from 'react'
import '../Styles/EditTaskPage.css'
import Header from '../Components/Header'
import { useState } from 'react'

const EditTaskPage = () => {
  const [assignedto, setAssignedTo] = useState('')
  const [status, setStatus] = useState('')
  const [comment, setComment] = useState('')

  const [errors, setErrors] = useState({
    Comment: '',
  })

  const validateForm = () => {
    let valid = true
    const newErrors = {
      Comment: '',
    }

    if (!comment.trim()) {
      newErrors.Comment = 'Please enter a comment'
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handlesubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      window.alert('Successfully saved...')
      setComment('')
      setErrors({
        Comment: '',
      })
    } else {
      window.alert('Save unsuccess. Give a comment...')
    }
  }

  return (
    <div>
      <Header currentPage="Edit Task" />
      <div className="edit-task-page">
        <form>
          <label className="form-label">Description:</label>
          <input type="text" disabled />
          <br />
          <br />

          <label className="form-label">Category:</label>
          <select disabled>
            <option>option 1</option>
            <option>option 2</option>
            <option selected>option 3</option>
          </select>
          <br />
          <br />

          <label className="form-label">Project Regarding:</label>
          <select disabled>
            <option>option 1</option>
            <option selected>option 2</option>
          </select>
          <br />
          <br />

          <label className="form-label">Requested By:</label>
          <select disabled>
            <option selected>option 1</option>
            <option>option 2</option>
          </select>
          <br />
          <br />

          <label className="form-label">Assigned To:</label>
          <select
            name="assignedto"
            value={assignedto}
            onChange={(e) => setAssignedTo(e.target.value)}
          >
            <option>option 1</option>
            <option>option 2</option>
          </select>
          <br />
          <br />

          <label className="form-label">Status:</label>
          <select
            name="status"
            value={status}
            onChange={(e) => {
              setStatus(e.target.value)
            }}
          >
            <option>option 1</option>
            <option>option 2</option>
          </select>
          <br />
          <br />

          <label className="form-label">Comment:</label>
          <textarea
            name="comment"
            rows={10}
            cols={30}
            value={comment}
            onChange={(e) => {
              setComment(e.target.value)
              setErrors({ ...errors, Comment: '' })
            }}
          ></textarea>

          <br />
          {errors.Comment && <p className="error">{errors.Comment}</p>}
          <br />

          <button className="form-button" type="submit" onClick={handlesubmit}>
            Save
          </button>
        </form>
      </div>
    </div>
  )
}

export default EditTaskPage
