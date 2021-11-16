import React from "react";
import './profile.css';


const Profile = ({
      profile_data,
      editCallback,
    }
) => {
  return (
      <>
        <div className= "row mt-2">
          <div className="col-1 col-md-1 col-lg-1 col-xl-1 wd-middle">
            <i className= "fas fa-arrow-left wd-pointer"></i>
          </div>
          <div className="col-4 col-md-4 col-lg-4 col-xl-4">
            <div className="wd-name-margin">
              {profile_data.firstName} {profile_data.lastName}
            </div>
          </div>
        </div>
        <img src = {profile_data.bannerPicture} alt="" width = "100%" height= "300"/>
        <div className="wd-row">
          <div className= "wd-profile-image">
            <img src = {profile_data.profilePicture} alt="" className={"rounded-circle"} width="200" height="200" />
          </div>
          <div>
            <button className="btn btn-primary pull-right rounded-pill w-20 mt-2 wd-edit-profile-button"
              onClick={() => editCallback()}
            >Edit Profile</button>
          </div>
        </div>
        <div className="wd-profile-name">
          <strong>{profile_data.firstName} {profile_data.lastName}</strong>
          <div className= "wd-grey-names">{profile_data.handle}</div>
          <div className= "wd-bio">{profile_data.bio}</div>
          <div className= "wd-profile-other-info">
            <div className="wd-profile-other-element fas fa-map-marker-alt">
              <span className={"wd-space"}></span>
              {profile_data.location}
            </div>
            <div className="wd-profile-other-element fas fa-birthday-cake">
              <span className={"wd-space"}></span>
              {profile_data.dateOfBirth}
            </div>
            <div className="wd-profile-other-element fas fa-calendar-alt">
              <span className={"wd-space"}></span>
              {profile_data.dateJoined}
            </div>
          </div>
          <div className="wd-follow-and-followers">
            <div className="wd-follow">{profile_data.followingCount} <span className={"wd-grey-names"}>Following</span></div>
            <div className="wd-follow">{profile_data.followersCount} <span className={"wd-grey-names"}>Followers</span></div>
          </div>
        </div>
      </>
  );
}
export default Profile;