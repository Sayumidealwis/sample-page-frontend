import React from 'react'
import Header from '../Components/Header'
import '../Styles/EditTaskPage.css'

export default function EditTaskPage() {
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
          <select>
            <option>option 1</option>
            <option>option 2</option>
          </select>
          <br />
          <br />

          <label className="form-label">Status:</label>
          <select>
            <option>option 1</option>
            <option>option 2</option>
          </select>
          <br />
          <br />

          <label className="form-label">Comment:</label>
          <textarea
            name="comment" rows={10} cols={30}>

          </textarea>

          <br />
          <br />

          <button className="form-button" type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
    
  )
}

