import React, { useState } from 'react'
import { Link } from 'react-router-dom';
function Product() {
  let [product, setProduct] = useState(
    { title: '', description: '', price: '' }
  );
  let [imagefile, setImageFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  const handleFileChange = (e) => {
    setImageFile(e.target.files[0])
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    let token = localStorage.getItem("token");
    //api 
    let formdata = new FormData();
    formdata.append("title", product?.title)
    formdata.append("price", product?.price)
    formdata.append("description", product?.description)
    formdata.append("image", imagefile)
    let response = await fetch("http://localhost:5000/product/create-product", {
      method: "post",
      headers: {
        "token": token
      },
      body: formdata
    })
    let jsonResponse = await response.json();
    console.log(jsonResponse)
  }

  return (
    <>
      <div className='container m-4'>
        <h1>Product form</h1>
        <form onSubmit={handleSubmit}>
          {/* Email input */}
          <div data-mdb-input-init="" className="form-outline mb-4">
            <input type="text" id="form2Example1" className="form-control"
              value={product.title} name='title' onChange={(e) => handleChange(e)} />
            <label className="form-label" htmlFor="form2Example1">
              Title
            </label>
          </div>
          <div data-mdb-input-init="" className="form-outline mb-4">
            <input type="number" id="form2Example1" className="form-control"
              value={product.price} name='price' onChange={(e) => handleChange(e)} />
            <label className="form-label" htmlFor="form2Example1">
              Price
            </label>
          </div>
          <div data-mdb-input-init="" className="form-outline mb-4">
            <input type="file" id="form2Example1" className="form-control"
              name='image' onChange={(e) => handleFileChange(e)} />
            <label className="form-label" htmlFor="form2Example1">
              Image
            </label>
          </div>
          {/* Password input */}
          <div data-mdb-input-init="" className="form-outline mb-4">
            <input type="text" id="form2Example2" className="form-control" value={product.description} name='description' onChange={(e) => handleChange(e)} />
            <label className="form-label" htmlFor="form2Example2">
              Description
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
            Create product
          </button>
        </form>
      </div>
    </>
  )
}

export default Product
