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

  return (
    <div>
      <div>
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
                  }}
                ></textarea>
              </td>
            </tr>
            <tr>
              <td>
                Catergory
                <span style={{ color: 'red', fontWeight: 'bold' }}> * </span> :
              </td>
              <td>
                <select
                  name="category"
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value)
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
                  }}
                ></textarea>
              </td>
            </tr>
            <tr>
              <td></td>
              <td className="button-class">
                <button type="button">Clear</button>
                <button type="submit">Save</button>
              </td>
            </tr>
          </form>
        </tabel>
      </div>
    </div>
  )
}

export default AddTaskPage
