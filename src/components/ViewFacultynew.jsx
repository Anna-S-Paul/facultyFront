import React, { useEffect, useState } from 'react'
import NavFaculty from './NavFaculty'
import axios from 'axios'

const ViewFacultynew = () => {
        const [data, changeData] = useState([])
        const fetchData = () => {
            axios.get("http://localhost:8089/viewall").then(
                (response) => {
                    changeData(response.data)
                }
            ).catch().finally()
        }
        useEffect(() => { fetchData() }, [])
  return (
    <div>
<NavFaculty/>
<div className="container">
    <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

        <table class="table">
  <thead>
    <tr>
      <th scope="col">NAME</th>
      <th scope="col">AGE</th>
      <th scope="col">VENUE</th>
      <th scope="col">YEAR OF JOINING</th>
      <th scope="col">SUBJECT</th>
    </tr>
  </thead>
  <tbody>
  {
                                    data.map(
                                        (value, index) => {
                                            return <tr>
                                                <td>{value.name}</td>
                                                <td>{value.age}</td>
                                                <td>{value.venue}</td>
                                                <td>{value.yearofjoining}</td>
                                                <td>{value.subject}</td>

                                            </tr>
                                        }
                                    )
                                }

  </tbody>
</table>

        </div>
    </div>
</div>

    </div>
  )
}

export default ViewFacultynew