import React, { Component } from 'react';
import NavBar from './navbar';

class Layout extends Component {
  render() {
    return (
      <div>
				<NavBar />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;