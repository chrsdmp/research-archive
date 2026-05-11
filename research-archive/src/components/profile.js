import React, { useState } from 'react';
import './profile.css';
import profileImg from './components/profile-acc.png';

const AccountCard = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="page-container">
      {/* Profile Card */}
      <div className="card-container">
        <div className="profile-section">
          <div className="profile-image-wrapper">
            <img src={profileImg} alt="Profile" className="profile-image" />
          </div>
          <div className="profile-info">
            <h2 className="user-name">Anonymous</h2>
            <p className="user-email">anon@gmail.com</p>
            <button className="btn primary-btn">My Account</button>
          </div>
        </div>

        <hr className="divider" />

        <div className="action-section">
          <button className="btn secondary-btn" onClick={() => setShowModal(true)}>
            Add Account
          </button>
          <button className="btn secondary-btn">Sign Out</button>
        </div>
      </div>

      {/* Add Account Feature */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Add Account</h3>
            
            <div className="input-group">
              <label>Account Name</label>
              <input type="text" placeholder="Username" />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input type="password" placeholder="Enter password" />
            </div>

            <div className="modal-actions">
              <button className="btn secondary-btn" onClick={() => setShowModal(false)}>Save</button>
              <button className="btn cancel-btn" onClick={() => setShowModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountCard;