// UserProfile.js

import React, { Component } from 'react';
import './UserProfile.css';

class UserProfile extends Component {
  render() {
    return (
      <div className="user-profile">
        <h2>User Profile</h2>
        <div className="user-details">
          <p>Name: Randeep Singh</p>
          <p>Email: randeep@example.com</p>
          <p>Location: New York</p>
        </div>
      </div>
    );
  }
}

export default UserProfile;