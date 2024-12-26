import React from 'react';
import { useParams } from 'react-router-dom';


function User() {
  const { userId } = useParams();


  const userData = {
    id: "24G-BCS-032",
    name: "Shamoeel Ali",
    title: "Gu Tech",
    about: "Student of Alghazali University",
    department: "Gu Tech",
    quote: "Believe in what you prayed for",
    status: "Single",
    profileImage: "https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/436442732_456119820090756_2614890655932959607_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=SQAE7CDFZmoQ7kNvgHHKEN5&_nc_oc=Adgy5Uqr_e2bGUMcD_Y5SzqC_FOtSCtLKhbIJVmlVqSC45UPQ4Olrq5BHFbx4p0DF-A&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&_nc_gid=ADS1STtUtl0OnVku1UZ6INK&oh=00_AYDfie7F8_bsXz8R-1JTp-8jSQ18qVkxnxrfGEL7XhzA-w&oe=67736F24", 
  };

  return (
    <div className="user-profile">
      <div className="profile-header">
        <img src={userData.profileImage} alt={userData.name} className="profile-image" />
        <div className="profile-info">
          <h1>{userData.name}</h1>
          <h2>{userData.title}</h2>
         
        </div>
      </div>

      <div className="about-section">
        <h3>About Me</h3>
        <p>{userData.about}</p>
      </div>

      <div className="tabs">
        
      </div>

      <div className="additional-info">
        <p><strong>Employee ID:</strong> {userData.id}</p>
        <p><strong>Department:</strong> {userData.department}</p>
        <p><strong>Quote:</strong> '{userData.quote}'</p>
        <p><strong>Status:</strong> {userData.status}</p>
      </div>
    </div>
  );
}

export default User;
