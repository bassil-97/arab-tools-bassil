import React, {useState, useEffect} from 'react';

import { Typeahead } from 'react-bootstrap-typeahead'; 
import 'react-bootstrap-typeahead/css/Typeahead.css';

import axios from 'axios';

export default function AddComboGroup(props) {

    const [groups, setGroups] = useState([]);
    const [multiSelections, setMultiSelections] = useState([]);

    useEffect(()=> {
        const fetchGroups = async ()=> axios.get("https://arabtools.techtsy.tech/api/v1/inventory/variant/group", {
            headers: {
                'Authorization': 'Token ebb9ad8858809915f403b1f262d3d3f8095fc1f1'
            }
        }).then(response => {
            console.log(response.data['data']['results']);
            setGroups(response.data['data']['results']);
        }).catch(err => {
            console.log(err);
        });

        fetchGroups();
    }, []);

    

    const handlAddComboGroup = (e) => {
        
        e.preventDefault();

        axios.post("http://arabtools.techtsy.tech/api/v1/inventory/variant/group/", multiSelections, {
            headers: {
                'Authorization': 'Token ebb9ad8858809915f403b1f262d3d3f8095fc1f1'
            }
        })
        .then(response => {
            console.log(response.data);
        }).catch(err => {
            console.log(err);
        });
    }

    
    return (
        <section className="pcoded-main-container">
            <div className="pcoded-content">
                <div className="page-header">
                    <div className="page-block">
                        <div className="row align-items-center">
                            <div className="col-md-12">
                                <div className="page-header-title">
                                    <h5 className="m-b-10">Add Combo Variant Group</h5>
                                </div>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html"><i className="feather icon-home"></i></a></li>
                                    <li className="breadcrumb-item"><a href="#!">Variants Group</a></li>
                                    <li className="breadcrumb-item"><a href="#!">Add Group</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-sm-12">
                    <div className="card">
                            <div className="card-header">
                                <h5>Please select Groups.</h5>
                            </div>
                            <div className="card-body">
                                <form>
                                    <Typeahead
                                        id="basic-typeahead-multiple"
                                        labelKey="name"
                                        multiple
                                        onChange={setMultiSelections}
                                        options={groups}
                                        selected={multiSelections}
                                    />
                                    <div className="row w-100 mt-2 d-flex justify-content-end">
                                        <button type="button" className="btn btn-primary" onClick={handlAddComboGroup}>Add Combo Group</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
