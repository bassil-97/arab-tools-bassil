import React, {useState, useEffect} from 'react';

import axios from 'axios';

export default function AddComboGroup(props) {

    const [groups, setGroups] = useState([]);

    useEffect(()=> {
        const fetchGroups = async ()=> axios.get("http://arabtools.techtsy.tech/api/v1/inventory/variant/group", {
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

        axios.post("http://arabtools.techtsy.tech/api/v1/inventory/variant/group/", groups, {
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
        <section class="pcoded-main-container">
            <div class="pcoded-content">
                <div class="page-header">
                    <div class="page-block">
                        <div class="row align-items-center">
                            <div class="col-md-12">
                                <div class="page-header-title">
                                    <h5 class="m-b-10">Add Combo Variant Group</h5>
                                </div>
                                <ul class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="index.html"><i class="feather icon-home"></i></a></li>
                                    <li class="breadcrumb-item"><a href="#!">Variants Group</a></li>
                                    <li class="breadcrumb-item"><a href="#!">Add Group</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-sm-12">
                    <div class="card">
                            <div class="card-header">
                                <h5>Please select Groups.</h5>
                            </div>
                            <div class="card-body">
                                <form>
                                    <div class="form-group w-100">
                                        <select multiple data-role="tagsinput" autoComplete="yes" onChange={(e)=>setGroups(e.target.value)}>
                                            {groups && groups.map( group => (
                                                <option value={group.id}>{group.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="row w-100 d-flex justify-content-end">
                                        <button type="button" class="btn btn-primary" onClick={handlAddComboGroup}>Add Combo Group</button>
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
