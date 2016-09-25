import React from 'react';
import { Link } from 'react-router';

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'NavigationBar';
    }
    render() {
        return (
        	<nav className="navbar navbar-default">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <Link to='/' className="navbar-brand">TITLE</Link>
			      <Link to='/signup' className="btn btn-default navbar-btn">Sign in</Link>
			    </div> 
			  </div>
			</nav>
        );
    }
}

export default NavigationBar;
