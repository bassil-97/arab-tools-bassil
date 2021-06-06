import React, {useEffect, useState} from 'react';

import axios from 'axios';

export default function Products() {

    const [products, setProducts] = useState([]);
   
    useEffect(()=> {
        axios.get("http://arabtools.techtsy.tech/api/v1/inventory/product", {
            headers: {
                'Authorization': 'Token ebb9ad8858809915f403b1f262d3d3f8095fc1f1'
            }
        })
            .then(response => {
                console.log(response.data['data']['results']);
                setProducts(response.data['data']['results']);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <section class="pcoded-main-container">
            <div class="pcoded-content">
                <div class="page-header">
                    <div class="page-block">
                        <div class="row align-items-center">
                            <div class="col-md-12">
                                <div class="page-header-title">
                                    <h5 class="m-b-10">Products</h5>
                                </div>
                                <ul class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="index.html"><i class="feather icon-home"></i></a></li>
                                    <li class="breadcrumb-item"><a href="#!">Products</a></li>
                                    <li class="breadcrumb-item"><a href="#!">All Warehouses</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-sm-12">
                        <div class="card">
                                <div class="card-header">
                                    <h5>Basic Table</h5>
                                    <span class="d-block m-t-5">
                                        Please use the table below to navigate or filter
                                         the results.
                                    </span>
                                </div>
                                <div class="card-body table-border-style">
                                    <div class="table-responsive">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Image</th>
                                                    <th>Code</th>
                                                    <th>Name</th>
                                                    <th>Brand</th>
                                                    <th>Category</th>
                                                    <th>Cost</th>
                                                    <th>Price</th>
                                                    <th>Quantity</th>
                                                    <th>Status</th>
                                                    <th>Showcase</th>
                                                    <th>Seller</th>
                                                    <th>Added Date</th>
                                                    <th>Approve Date</th>
                                                    <th>A/R</th>
                                                    <th>Approved By</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    products && products.map(product => (
                                                        <tr>
                                                            <td>id</td>
                                                            <td>
                                                                <img src={product.image} style={{width: '50px', height: "50px"}} />
                                                            </td>
                                                            <td>{product.product_code}</td>
                                                            <td>{product.name}</td>
                                                            <td>@mdo</td>
                                                            <td></td>
                                                            <td></td>
                                                            <td>{product.price}</td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}
