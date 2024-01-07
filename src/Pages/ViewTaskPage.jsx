import React from 'react'
import '../Styles/ViewTaskPage.css'
import Header from '../Components/Header'
import { useParams } from 'react-router-dom'

const ViewTaskPage = () => {
  const { taskid } = useParams()

  return (
    <div>
      <Header currentPage="View Task" />
      <p style={{ textAlign: 'center', fontSize: '25px' }}>
        View Task Page of Task ID {taskid}
      </p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button className="button-class" type="button">
          View History
        </button>
        <button className="button-class" type="button">
          Edit Task
        </button>
      </div>
    </div>
  )
}

export default ViewTaskPage
