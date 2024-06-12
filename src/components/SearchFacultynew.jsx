import React from 'react'
import NavFaculty from './NavFaculty'
import axios from 'axios'

const SearchFaculty = () => {
    const [data, setData] = useState(
        {
          "name": ""
        }
      )
      const [result, setResult] = useState(
        []
      )
    
      const deleteCourse = (id) => {
        let input = { "_id": id }
        axios.post("http://localhost:8089/delete",input).then(
          (response)=>{
            console.log(response.data)
            if (response.data.status=="success") {
              alert("successfully deleted")
            } else {
              alert("error in deletion")
            }
          }
        ).catch().finally()
      }
    
      const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
      }
    
      const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8084/search", data).then(
          (response) => {
            setResult(response.data)
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        ).finally()
      }
  return (
    <div>
      <NavFaculty/>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<label htmlFor="" className="form-label">Name of Faculty:</label>
<input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>

                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<button className="btn btn-info" onClick={readValue}>Search</button>

                </div>
                <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Age</th>
                  <th scope="col">Venue</th>
                  <th scope="col">Year of joining</th>
                  <th scope="col">Subject</th>
                 
                </tr>
              </thead>
              <tbody>
                {
                  result.map(
                    (value, index) => {
                      return <tr>
                        <td>{value.name}</td>
                        <td>{value.age}</td>
                        <td>{value.venue}</td>
                        <td>{value.yearofjoining}</td>
                        <td>{value.subject}</td>
                        <td>
                          <button className="btn btn-danger" onClick={()=>{deleteCourse(value._id)}}>Delete</button>
                        </td>
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
    </div>
  )
}
export default SearchFaculty