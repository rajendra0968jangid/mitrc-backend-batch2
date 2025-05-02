import React, { useEffect, useState } from 'react'

function Home() {
    let [productData, setProductData] = useState([]);
    useEffect(() => {
        apiFetch();
    }, [])
    let apiFetch = async () => {
        let response = await fetch("http://localhost:5000/product/get-all-product")
        let jsonResponse = await response.json();
        setProductData(jsonResponse?.data)
    }
    console.log(productData);

    return (
        <>
            <div className='container'>
                <div className='row'>
                    {productData.map((item) => (
                        <div className='col-12 col-sm-6 col-lg-3 mb-4'>
                            <div className="card" style={{ width: "100%" }}>
                                <img src={`http://localhost:5000/image/${item?.image}`} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item?.title}</h5>
                                    <h5 className="card-title">Price:{item?.price}</h5>
                                    <p className="card-text">
                                       {item?.description}
                                    </p>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </>
    )
}

export default Home
