import React, { useState } from 'react'
import '../Styles/AddTaskPage.css'

const AddTaskPage = () => {
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [addedby, setAddedBy] = useState('')
  const [addeddate, setAddedDate] = useState('')
  const [requestedby, setRequestedBy] = useState('')
  const [assignedto, setAssignedTo] = useState('')
  const [project, setProject] = useState('')
  const [status, setStatus] = useState('')
  const [comment, setComment] = useState('')

  const [errors, setErrors] = useState({
    Description: '',
    Category: '',
    Requested_By: '',
    Status: '',
    Comment: '',
  })

  const validateForm = () => {
    let valid = true
    const newErrors = {
      Description: '',
      Category: '',
      Requested_By: '',
      Status: '',
      Comment: '',
    }

    if (!description.trim()) {
      newErrors.Description = 'Please enter a description'
      valid = false
    }

    if (!category) {
      newErrors.Category = 'Please select a category'
      valid = false
    }

    if (!requestedby) {
      newErrors.Requested_By = 'Please select the customer'
      valid = false
    }

    if (!status) {
      newErrors.Status = 'Please select the status'
      valid = false
    }

    if (!comment.trim()) {
      newErrors.Comment = 'Please enter a comment'
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      window.alert('Validation success...')
    } else {
      window.alert('Validation Failed. Fill all the required fields...')
    }
  }

  const handleClear = (e) => {
    e.preventDefault()

    setDescription('')
    setCategory('')
    setAddedBy('')
    setAddedDate('')
    setRequestedBy('')
    setAssignedTo('')
    setProject('')
    setStatus('')
    setComment('')

    setErrors({
      Description: '',
      Category: '',
      Requested_By: '',
      Status: '',
      Comment: '',
    })
  }

  return (
    <div>
      <div className="addtaskpage_container">
        <tabel>
          <form className="addtaskpage_details">
            <tr>
              <td>
                Description
                <span style={{ color: 'red', fontWeight: 'bold' }}> * </span> :
              </td>
              <td>
                <textarea
                  name="description"
                  rows={5}
                  cols={80}
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value)
                    setErrors({ ...errors, Description: '' })
                  }}
                ></textarea>
              </td>
              {errors.Description && (
                <p className="error">{errors.Description}</p>
              )}
            </tr>
            <tr>
              <td>
                {' '}
                Catergory
                <span style={{ color: 'red', fontWeight: 'bold' }}> * </span> :
              </td>
              <td>
                <select
                  name="category"
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value)
                    setErrors({ ...errors, Category: '' })
                  }}
                >
                  <option disabled hidden value="">
                    Select an option
                  </option>
                  <option value="complaint">Complaint</option>
                  <option value="inquiry">Inquiry</option>
                  <option value="activity">Activity</option>
                </select>
              </td>
              {errors.Category && <p className="error">{errors.Category}</p>}
            </tr>
            <tr>
              <td>AddedBy :</td>
              <td>
                <select
                  name="addedby"
                  value={addedby}
                  onChange={(e) => setAddedBy(e.target.value)}
                >
                  <option disabled hidden value="">
                    Select an option
                  </option>
                  <option value="user_1">User 1</option>
                  <option value="user_2">User 2</option>
                  <option value="user_3">User 3</option>
                  <option value="user_4">User 4</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>AddedDate :</td>
              <td>
                <input
                  type="date"
                  name="addeddate"
                  value={addeddate}
                  onChange={(e) => setAddedDate(e.target.value)}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                Requested By
                <span style={{ color: 'red', fontWeight: 'bold' }}> * </span> :
              </td>
              <td>
                <select
                  name="requestedby"
                  value={requestedby}
                  onChange={(e) => {
                    setRequestedBy(e.target.value)
                    setErrors({ ...errors, Requested_By: '' })
                  }}
                >
                  <option disabled hidden value="">
                    Select an option
                  </option>
                  <option value="customer_1">Customer 1</option>
                  <option value="customer_2">Customer 2</option>
                  <option value="customer_3">Customer 3</option>
                  <option value="customer_4">Customer 4</option>
                </select>
              </td>
              {errors.Requested_By && (
                <p className="error">{errors.Requested_By}</p>
              )}
            </tr>

            <tr>
              <td>Assigned To :</td>
              <td>
                <select
                  name="assignedto"
                  value={assignedto}
                  onChange={(e) => setAssignedTo(e.target.value)}
                >
                  <option disabled hidden value="">
                    Select an option
                  </option>
                  <option value="user_n">None</option>
                  <option value="user_1">User 1</option>
                  <option value="user_2">User 2</option>
                  <option value="user_3">User 3</option>
                  <option value="user_4">User 4</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Project Regarding :</td>
              <td>
                <select
                  name="projectregarding"
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                >
                  <option disabled hidden value="">
                    Select an option
                  </option>
                  <option value="project_n">None</option>
                  <option value="project_1">Project 1</option>
                  <option value="project_2">Project 2</option>
                  <option value="project_3">Project 3</option>
                  <option value="project_4">Project 4</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                Status
                <span style={{ color: 'red', fontWeight: 'bold' }}> * </span> :
              </td>
              <td>
                <select
                  name="status"
                  value={status}
                  onChange={(e) => {
                    setStatus(e.target.value)
                    setErrors({ ...errors, Status: '' })
                  }}
                >
                  <option disabled hidden value="">
                    Select an option
                  </option>
                  <option value="active">Active</option>
                  <option value="onhold">On Hold</option>
                  <option value="waitingfor">Waiting For</option>
                  <option value="invalid">Invaid</option>
                  <option value="rejected">Rejected</option>
                  <option value="done">Done</option>
                </select>
              </td>
              {errors.Status && <p className="error">{errors.Status}</p>}
            </tr>

            <tr>
              <td>
                Comment
                <span style={{ color: 'red', fontWeight: 'bold' }}> * </span> :
              </td>
              <td>
                <textarea
                  name="comment"
                  rows={10}
                  cols={80}
                  value={comment}
                  onChange={(e) => {
                    setComment(e.target.value)
                    setErrors({ ...errors, Comment: '' })
                  }}
                ></textarea>
              </td>
              {errors.Comment && <p className="error">{errors.Comment}</p>}
            </tr>
            <tr>
              <td></td>
              <td className="button-class">
                <button type="button" onClick={handleClear}>
                  Clear
                </button>
                <button type="submit" onClick={handleSubmit}>
                  Save
                </button>
              </td>
            </tr>
          </form>
        </tabel>
      </div>
    </div>
  )
}

export default AddTaskPage
