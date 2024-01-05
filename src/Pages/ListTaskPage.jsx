import React from 'react'
import '../Styles/ListTaskPage.css'
import DataTable from 'react-data-table-component'
import { useState } from 'react'

const getColor = (status) => {
  switch (status.toLowerCase()) {
    case 'active':
      return '#1d9148'
    case 'on hold':
      return '#c47225'
    default:
      return '#000000'
  }
}

const column = [
  {
    name: 'Task Id',
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: 'Category',
    selector: (row) => row.category,
    sortable: true,
  },
  {
    name: 'Requested By',
    selector: (row) => row.requestedBy,
  },
  {
    name: 'Added By',
    selector: (row) => row.addedBy,
  },
  {
    name: 'Added Date',
    selector: (row) => row.addedDate,
    sortable: true,
  },
  {
    name: 'Status',
    selector: (row) => row.status,
    cell: (row) => (
      <div
        style={{
          color: getColor(row.status),
        }}
      >
        {row.status}
      </div>
    ),
  },
  {
    name: 'Assign To',
    selector: (row) => row.assignTo,
  },
]

const data = [
  {
    id: 1,
    category: 'Complain',
    requestedBy: 'Requested By 1',
    addedBy: 'Added By 1',
    addedDate: '2023-02-26',
    status: 'Active',
    assignTo: 'Assign To 1',
  },
  {
    id: 2,
    category: 'Inquairy',
    requestedBy: 'Requested By 2',
    addedBy: 'Added By 2',
    addedDate: '2023-01-03',
    status: 'Active',
    assignTo: 'Assign To 2',
  },
  {
    id: 3,
    category: 'Complain',
    requestedBy: 'Requested By 3',
    addedBy: 'Added By 3',
    addedDate: '2023-11-25',
    status: 'On Hold',
    assignTo: 'Assign To 3',
  },
  {
    id: 4,
    category: 'Inquairy',
    requestedBy: 'Requested By 4',
    addedBy: 'Added By 4',
    addedDate: '2019-10-08',
    status: 'Active',
    assignTo: 'Assign To 4',
  },
  {
    id: 5,
    category: 'Complain',
    requestedBy: 'Requested By 5',
    addedBy: 'Added By 5',
    addedDate: '2020-03-24',
    status: 'Active',
    assignTo: 'Assign To 5',
  },
  {
    id: 6,
    category: 'Inquairy',
    requestedBy: 'Requested By 6',
    addedBy: 'Added By 6',
    addedDate: '2022-05-06',
    status: 'On Hold',
    assignTo: 'Assign To 6',
  },
  {
    id: 7,
    category: 'Complain',
    requestedBy: 'Requested By 7',
    addedBy: 'Added By 7',
    addedDate: '2019-03-31',
    status: 'Active',
    assignTo: 'Assign To 7',
  },
  {
    id: 8,
    category: 'Inquairy',
    requestedBy: 'Requested By 8',
    addedBy: 'Added By 8',
    addedDate: '2022-12-31',
    status: 'Active',
    assignTo: 'Assign To 8',
  },
  {
    id: 9,
    category: 'Complain',
    requestedBy: 'Requested By 9',
    addedBy: 'Added By 9',
    addedDate: '2020-01-17',
    status: 'Active',
    assignTo: 'Assign To 9',
  },
  {
    id: 10,
    category: 'Inquairy',
    requestedBy: 'Requested By 10',
    addedBy: 'Added By 10',
    addedDate: '2022-09-22',
    status: 'On Hold',
    assignTo: 'Assign To 10',
  },
  {
    id: 11,
    category: 'Complain',
    requestedBy: 'Requested By 11',
    addedBy: 'Added By 11',
    addedDate: '2020-01-01',
    status: 'Active',
    assignTo: 'Assign To 11',
  },
]

const ListTaskPage = () => {

  const [records, setRecords] = useState(data)

  function handleFilter(event) {
    const Newdata = data.filter((row) => {
      return row.addedDate
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    })
    setRecords(Newdata)
  }

  return (
    <div>
      <DataTable
        columns={column}
        data={records}
        pagination
        paginationPerPage={5}
        highlightOnHover
        pointerOnHover
      />
    </div>
  )  
}

export default ListTaskPage
