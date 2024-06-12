import axios from 'axios'
import React, { useState } from 'react'
import NavFaculty from './NavFaculty'

const AddFacultyNew = () => {
    const [data, setData] = useState(
        {

            "name": "",
            "age": "",
            "venue": "",
            "yearofjoining": "",
            "subject": ""

        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
            }
            const readValue=()=>{
                console.log(data)
                axios.post("http://localhost:8089/add",data).then(
                    (response)=>{
                        console.log(response.data)
                        if (response.data.status=="success") {
                            alert("successfully added")
                        } else {
                            alert("error")
                        }
                    }
                ).catch().finally()
            }
    return (
        <div>

           <NavFaculty/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Name of Faculty:</label>
                                <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Age:</label>
                                <input type="text" className="form-control" name='age' value={data.age} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Venue</label>
                                <textarea type="text" className="form-control" name='venue' value={data.venue} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Year of joining:</label>
                                <input type="text" className="form-control" name='yearofjoining' value={data.yearofjoining} onChange={inputHandler}/>

                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Subject:</label>
                                <input type="text" className="form-control" name='subject' value={data.subject} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"> <br />

                                <button className="btn btn-success" onClick={readValue}>Add</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddFacultyNew