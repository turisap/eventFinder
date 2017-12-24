/**
 * Created by HP on 09-Dec-17.
 */
import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

export const Header = (props) => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-right">
            <NavLink className="navbar-brand" to="/">Revent</NavLink>
            <div className="collapse navbar-collapse" id="navbarColor03">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/browse">Browse</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/create">Create</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/signup">SignUp</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/signin">SignIn</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
);

const mapStateToProps = (state) => ({
    fuzz : 'buzz'
});

export default connect(undefined, undefined)(Header);