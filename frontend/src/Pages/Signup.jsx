import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  let navigate = useNavigate();
  let [formData, setFormData] = useState({ email: "admin@gmail.com", name: "admin", phone: "39845948354", password: "234" });

  const handleSubmit = async () => {
    e.preventDefault();
  }
  return (
    <>
      <div className='container m-4'>
        <h1>Signup form</h1>
        <form>
          {/* Email input */}
          <div data-mdb-input-init="" className="form-outline mb-4">
            <input type="email" id="form2Example1" className="form-control"
              value={formData.email} />
            <label className="form-label" htmlFor="form2Example1">
              Email address
            </label>
          </div>
          {/* Password input */}
          <div data-mdb-input-init="" className="form-outline mb-4">
            <input type="password" id="form2Example2" className="form-control" value={formData.password} />
            <label className="form-label" htmlFor="form2Example2">
              Password
            </label>
          </div>
          <div data-mdb-input-init="" className="form-outline mb-4">
            <input type="number" id="form2Example2" className="form-control" value={formData.phone} />
            <label className="form-label" htmlFor="form2Example2">
              Phone
            </label>
          </div>
          <div data-mdb-input-init="" className="form-outline mb-4">
            <input type="text" id="form2Example2" className="form-control" value={formData.name} />
            <label className="form-label" htmlFor="form2Example2">
              Name
            </label>
          </div>
          {/* 2 column grid layout for inline styling */}
          {/* Submit button */}
          <button
            type="button"
            data-mdb-button-init=""
            data-mdb-ripple-init=""
            className="btn btn-primary btn-block mb-4"
            onClick={() => handleSubmit()}
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
