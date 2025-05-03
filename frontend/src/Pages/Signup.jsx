import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  let navigate = useNavigate();
  let [formData, setFormData] = useState({ email: "admin@gmail.com", name: "admin", phone: "39845948354", password: "234", isVerified: true });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    //api
    let response = await fetch("http://localhost:5000/user/create-user", {
      method: "post",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    let jsonResponse = await response.json();
    alert(jsonResponse?.message)
    navigate("/login")

  }
  return (
    <>
      <div className='container m-4'>
        <h1>Signup form</h1>
        <form onSubmit={handleSubmit}>
          {/* Email input */}
          <div data-mdb-input-init="" className="form-outline mb-4">
            <input type="email" id="form2Example1" className="form-control"
              value={formData.email} name='email' onChange={(e) => handleChange(e)} />
            <label className="form-label" htmlFor="form2Example1">
              Email address
            </label>
          </div>
          {/* Password input */}
          <div data-mdb-input-init="" className="form-outline mb-4">
            <input type="password" id="form2Example2" className="form-control" value={formData.password} name='password' onChange={(e) => handleChange(e)} />
            <label className="form-label" htmlFor="form2Example2">
              Password
            </label>
          </div>
          <div data-mdb-input-init="" className="form-outline mb-4">
            <input type="number" id="form2Example2" className="form-control" value={formData.phone} name='phone' onChange={(e) => handleChange(e)} />
            <label className="form-label" htmlFor="form2Example2">
              Phone
            </label>
          </div>
          <div data-mdb-input-init="" className="form-outline mb-4">
            <input type="text" id="form2Example2" className="form-control" value={formData.name} name='name' onChange={(e) => handleChange(e)} />
            <label className="form-label" htmlFor="form2Example2">
              Name
            </label>
          </div>
          {/* 2 column grid layout for inline styling */}
          {/* Submit button */}
          <button
            type="submit"
            data-mdb-button-init=""
            data-mdb-ripple-init=""
            className="btn btn-primary btn-block mb-4"
          >
            Sign up
          </button>
          {/* Register buttons */}
          <div className="text-center">
            <p>
              Already a member? <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  )
}

export default Signup
