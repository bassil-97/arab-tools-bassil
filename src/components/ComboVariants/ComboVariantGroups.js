import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';

import { IconButton, Tooltip } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import InfoIcon from '@material-ui/icons/Info';
import AddIcon from '@material-ui/icons/Add';

import axios from 'axios';
import _ from 'lodash';

export default function ComboVariantGroups() {

    const [comboGroups, setComboGroups] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [showValue, setShowValue] = useState(10);
    const history = useHistory();

    useEffect(()=> {
        axios.get("http://arabtools.techtsy.tech/api/v1/inventory/variant/group/", {
            headers: {
                'Authorization': 'Token ebb9ad8858809915f403b1f262d3d3f8095fc1f1'
            }
        })
            .then(response => {
                console.log(response.data['data']['results']);
                setComboGroups(response.data['data']['results']);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const pageCount = comboGroups ? Math.ceil(comboGroups.length/showValue) : 0;
    const pages = _.range(1, 1 + 1);

    const redirectToVariantGruop = (groupId) => {
        history.push(`/combo-group?${groupId}`);
    }

    const addComboGroup = () => {
        history.push('/add-combo-group');
    }

    const deleteVariantGroup = (groupId) => {
        axios.delete(`http://arabtools.techtsy.tech/api/v1/inventory/variant/group/${groupId}`, {
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
                                <div className="page-header-title d-flex justify-content-between align-items-center">
                                    <h5 className="m-b-10">Combo Variant Groups</h5>
                                </div>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html"><i className="feather icon-home"></i></a></li>
                                    <li className="breadcrumb-item"><a href="#!">Groups</a></li>
                                    <li className="breadcrumb-item"><a href="/combo-variant-groups">Combo Variant Groups</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                    <span className="d-block m-t-5">
                                        Please use the table below to navigate or filter
                                        the results.
                                    </span>
                                    <IconButton>
                                        <AddIcon onClick={addComboGroup} />
                                    </IconButton>
                                </div>
                                <div className="card-body table-border-style">
                                    <div className="form-inline d-flex justify-content-between align-items-center">
                                        <div className="form-group">
                                            <label htmlFor="search-input">Show</label>
                                            <select style={{border: '1px solid lightgray'}} className="form-control ml-4 mb-2" onChange={(e)=>setShowValue(e.target.value)}>
                                                <option value={10}>10</option>
                                                <option value={25}>25</option>
                                                <option value={50}>50</option>
                                                <option value={100} selected>100</option>
                                                <option value="all">All</option>
                                            </select>
                                        </div>
                                        <div className="form-group d-flex justify-content-center align-items-center">
                                            <label htmlFor="search-input">Search</label>
                                            <input style={{border: '1px solid lightgray'}} type="text" className="form-control ml-2 mb-2" value={searchInput} onChange={(e)=> setSearchInput(e.target.value)} id="search-input" />
                                        </div>
                                    </div>
                                    
                                    <div className="table-responsive">
                                        <table className="table table-bordered">
                                            <thead className="thead-primary">
                                                <tr>
                                                    <th className="text-center">Combo Groups</th>
                                                    <th className="text-center">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    comboGroups && comboGroups.filter((val) => {
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
                                                                <Tooltip title="view combo variants">
                                                                    <IconButton onClick={()=> redirectToVariantGruop(group.id)}>
                                                                        <InfoIcon />
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
                    <div className="d-flex justify-content-between">
                        <span>Showing {(comboGroups.length > 0) ? "1" : "0"} to {comboGroups.length} of {comboGroups.length} entries</span>
                        <nav>
                            <ul className="pagination">
                                {
                                    pages.map((page) => (
                                        <li className="page-link">{page}</li>
                                    ))
                                }
                            </ul>
                        </nav>
                    </div>
                </div>
        </section>
    )
}
