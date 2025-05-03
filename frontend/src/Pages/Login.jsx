import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
function Login() {
  let navigate = useNavigate();
  let [formData, setFormData] = useState(
    { email: "admin@gmail.com", password: "234" }
  );

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
    console.log(formData);
    //api 
    let response = await fetch("http://localhost:5000/user/login-user", {
      method: "post",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    let jsonResponse = await response.json();
    localStorage.setItem("token", jsonResponse?.data?.token)
  }

  return (
    <>
      <div className='container m-4'>
        <h1>Login form</h1>
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
          {/* 2 column grid layout for inline styling */}
          <div className="row mb-4">
            <div className="col">
              {/* Simple link */}
              <a href="#!">Forgot password?</a>
            </div>
          </div>
          {/* Submit button */}
          <button
            type="submit"
            data-mdb-button-init=""
            data-mdb-ripple-init=""
            className="btn btn-primary btn-block mb-4"

          >
            Sign in
          </button>
          {/* Register buttons */}
          <div className="text-center">
            <p>
              Not a member? <Link to="/signup">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login
