import React from 'react';

import { Link } from 'react-router-dom';
import avatar2 from '../../images/user/avatar-2.jpg';

export default function Sidebar() {
    return (
        <nav className="pcoded-navbar menu-light">
            <div className="navbar-wrapper">
                <div className="navbar-content scroll-div">
                    
                    <div className="">
                        <div className="main-menu-header">
                            <img className="img-radius" src={avatar2} alt="User-Profile" />
                            <div className="user-details">
                                <div id="more-details">
                                    Arab Tools
                                </div>
                            </div>
                        </div>
                        <div className="collapse" id="nav-user-link">
                            <ul className="list-inline">
                                <li className="list-inline-item"><a href="user-profile.html" data-toggle="tooltip" title="View Profile"><i className="feather icon-user"></i></a></li>
                                <li className="list-inline-item"><a href="email_inbox.html"><i className="feather icon-mail" data-toggle="tooltip" title="Messages"></i><small className="badge badge-pill badge-primary">5</small></a></li>
                                <li className="list-inline-item"><a href="auth-signin.html" data-toggle="tooltip" title="Logout" className="text-danger"><i className="feather icon-power"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    
                    <ul className="nav pcoded-inner-navbar">
                        <li className="nav-item pcoded-menu-caption">
                            <label>Navigation</label>
                        </li>
                        <li className="nav-item">
                            <a href="#!" className="nav-link"><span className="pcoded-micon"><i className="feather icon-home"></i></span><span className="pcoded-mtext">Products</span></a>
                            <ul className="pcoded-submenu">
                                <li><Link to="/add-combo-group">Add Combo Group</Link></li>
                                <li><Link to="/add-combo-variants">Add Combo Variant</Link></li>
                                <li><Link to="/combo-variant-groups">Combo Variant Groups</Link></li>
                            </ul>
                        </li>
                    </ul>
                    
                    <div className="card text-center">
                        <div className="card-block">
                            <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                            <i className="feather icon-sunset f-40"></i>
                            <h6 className="mt-3">Help?</h6>
                            <p>Please contact us on our email for need any support</p>
                            <a href="#!" target="_blank" className="btn btn-primary btn-sm text-white m-0">Support</a>
                        </div>
                    </div> 
                </div>
            </div>
        </nav>
    )
}
