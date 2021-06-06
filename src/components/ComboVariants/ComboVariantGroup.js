import React, {useEffect, useState} from 'react';

import { IconButton, Tooltip } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import InfoIcon from '@material-ui/icons/Info';

import axios from 'axios';

export default function ComboVariantGroup() {

    const [comboGroup, setComboGroup] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [showValue, setShowValue] = useState("100");

    const urlParams = new URLSearchParams(queryString);
    const groupId = urlParams.get('groupId');

    useEffect(()=> {
        axios.get(`http://arabtools.techtsy.tech/api/v1/inventory/variant/group/${groupId}`, {
            headers: {
                'Authorization': 'Token ebb9ad8858809915f403b1f262d3d3f8095fc1f1'
            }
        })
            .then(response => {
                console.log(response.data['data']['results']);
                setComboGroup(response.data['data']['results']);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const deleteVariantGroup = (groupId) => {
        axios.delete(`https://arabtools.techtsy.tech/api/v1/inventory/variant/group/${groupId}`, {
            headers: {
                'Authorization': 'Token ebb9ad8858809915f403b1f262d3d3f8095fc1f1'
            }
        })
    }

    return (
        <section className="pcoded-main-container">
            <div className="pcoded-content">
                <div className="page-header">
                    <div className="page-block">
                        <div className="row align-items-center">
                            <div className="col-md-12">
                                <div className="page-header-title">
                                    <h5 className="m-b-10">Combo Variant Groups</h5>
                                </div>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html"><i className="feather icon-home"></i></a></li>
                                    <li className="breadcrumb-item"><a href="#!">Combo Variant Groups</a></li>
                                    <li className="breadcrumb-item"><a href="#!">Combo Variants</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                                <div className="card-header">
                                    <span className="d-block m-t-5">
                                       Combo Variant of ({comboGroup.name})
                                    </span>
                                </div>
                                <div className="card-body table-border-style">
                                    <div className="form-inline d-flex justify-content-between align-items-center">
                                        <div className="form-group">
                                            <label htmlFor="search-input">Show</label>
                                            <select style={{border: '1px solid lightgray'}} classNameName="form-control ml-2 mb-2" onChange={(e)=>setShowValue(e.target.value)}>
                                                <option value={10}>10</option>
                                                <option value={25}>25</option>
                                                <option value={50}>50</option>
                                                <option value={100} selected>100</option>
                                                <option value="all">All</option>
                                            </select>
                                        </div>
                                        <div className="form-group d-flex justify-content-center align-items-center">
                                            <label htmlFor="search-input">Search</label>
                                            <input style={{border: '1px solid lightgray'}} type="text" className="form-control w-50 ml-2 mb-2" value={searchInput} onChange={(e)=> setSearchInput(e.target.value)} id="search-input" />
                                        </div>
                                    </div>
                                    
                                    <div className="table-responsive">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th className="text-center">Combo Variants</th>
                                                    <th className="text-center">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    comboGroup && comboGroup.filter((val) => {
                                                        if(searchInput == "") {
                                                            return val;
                                                        } else if(val.name.toLowerCase().includes(searchInput.toLowerCase())) {
                                                            return val;
                                                        }
                                                    }).map(group => (
                                                        <tr>
                                                            <td className="text-center">{group.name}</td>
                                                            <td className="d-flex justify-content-center">
                                                                <Tooltip title="delete variant group">
                                                                    <IconButton onClick={()=> deleteVariantGroup(group.id)}>
                                                                        <DeleteForeverIcon />
                                                                    </IconButton>
                                                                </Tooltip>
                                                            </td>
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
                    <div classNameName="">
                        <span>Showing 1 to {comboGroup.length} of {comboGroup.length} entries</span>
                    </div>
                </div>
        </section>
    )
}
