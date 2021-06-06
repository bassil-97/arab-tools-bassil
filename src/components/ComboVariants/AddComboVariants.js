import React, {useState} from 'react';

import axios from 'axios';

export default function AddComboVariants() {

    const [coverCap, setCoverCap] = useState("");
    const [collisionMeasurement, setCollisionMeasurement] = useState("");
    const [mountingPlate, setMountingPlate] = useState("");
    const [bossAssembly, setBossAssembly] = useState("");
    const [ColourFinish, setColourFinish] = useState("");

    const handleAddComboVariants = (e) => {
        e.preventDefault();

        axios.post("http://arabtools.techtsy.tech/api/v1/inventory/variant/group/", {
            coverCap,
            collisionMeasurement,
            mountingPlate,
            bossAssembly,
            ColourFinish
        }, {
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
                                    <h5 class="m-b-10">Add Combo Variants</h5>
                                </div>
                                <ul class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="index.html"><i class="feather icon-home"></i></a></li>
                                    <li class="breadcrumb-item"><a href="#!">Combo Variants</a></li>
                                    <li class="breadcrumb-item"><a href="#!">Add Combo Variants</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-sm-12">
                    <div class="card">
                            <div class="card-header">
                                <h5>Please select Variant from each section.</h5>
                            </div>
                            <div class="card-body">
                                <form>
                                    <div class="form-row">
                                        <div class="form-group col-md-4">
                                            <label htmlFor="cover-cap">Cover cap set</label>
                                            <select class="form-control" id="cover-cap" value={coverCap} onChange={(e)=> setCoverCap(e.target.value)} required>
                                                <option selected>Light grey</option>
                                                <option>Silk white</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4">
                                            <div class="form-group">
                                                <label htmlFor="mounting-plate">Mounting plate Fixing method</label>
                                                <select class="form-control" id="mounting-plate" onChange={(e)=> setMountingPlate(e.target.value)} value={mountingPlate} required>
                                                    <option selected>Screw-on</option>
                                                    <option>EXPANDO</option>
                                                    <option>Knock-in</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div class="form-group">
                                                <label htmlFor="color-finish">Mounting plate Colour / finidh</label>
                                                <select class="form-control" id="color-finish" onChange={(e)=> setColourFinish(e.target.value)} value={ColourFinish} required>
                                                    <option selected>Nickel plated</option>
                                                    <option>Onyx black</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-4">
                                            <label htmlFor="collision measurement">CLIP top standard hinge 120° - collision measurement</label>
                                            <select class="form-control" id="collision measurement" onChange={(e)=> setCollisionMeasurement(e.target.value)} value={collisionMeasurement} required>
                                                <option selected>19</option>
                                                <option>20.5</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label htmlFor="boss-assembly">CLIP top centre hinge - Boss <br /> assembly*</label>
                                            <select class="form-control" id="boss-assembly" onChange={(e)=> setBossAssembly(e.target.value)} value={bossAssembly} required>
                                                <option selected>EXPANDO</option>
                                                <option>Screw-on</option>
                                            </select>
                                        </div>
                                    </div>
                                    <button type="button" class="btn  btn-primary" onClick={handleAddComboVariants}>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
