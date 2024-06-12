import React from 'react'
import NavFaculty from './NavFaculty'

const SearchFaculty = () => {
  return (
    <div>
      <NavFaculty/>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<label htmlFor="" className="form-label">Name of Faculty:</label>
<input type="text" className="form-control" />

                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<button className="btn btn-info">Search</button>

                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchFaculty