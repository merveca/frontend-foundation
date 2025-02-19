import React from 'react';
import Profile from "../components/profile/Profile";
const ProfilePage = () => {
  return (
    <div>
      <Profile
        avatar="assets/img/photo-02.jpg"
        name="Ali Gel"
        location="Bağcılar, İstanbul"
        shot="21"
        followers="10K"
        following="1"
      />
    </div>
  );
};

export default ProfilePage;
