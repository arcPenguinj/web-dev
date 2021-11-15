import React, {useState} from "react";
import {useDispatch} from "react-redux";

export const EditProfile = ({profile_date, onSave}) => {
  let [tempProfile, setTempProfile] = useState(profile_date);
  const dispatch = useDispatch();
  const saveClickHandler = () => {
    dispatch({type: 'save-profile', save: tempProfile});
    onSave();
  }


  return(
    <>
      <div className="wd-row">
        <i className="fas fa-times wd-close-button" onClick={() => onSave()}></i>
        <div className="wd-edit-profile-text">Edit Profile</div>
        <button className="btn btn-primary pull-right rounded-pill w-20 mt-2 wd-save-profile-button" onClick={saveClickHandler}>Save</button>
      </div>
      <div className= "wd-banner">
        <img src = {tempProfile.bannerPicture} alt="" width = "100%" height= "300"/>
        <div className= "wd-profile-image">
          <img src = {tempProfile.profilePicture} alt="" className={"rounded-circle"} width="200" height="200" />
        </div>
      </div>

      <div className="wd-input-area">
        <div>First Name</div>
        <input
            value={tempProfile.firstName}
            onChange={(event => {setTempProfile({
              ...tempProfile,
              firstName: event.target.value
            })})}
            type={'text'}
            className="wd-input-typing-area w-100 rounded-2 mx-1">
        </input>
      </div>

      <div className="wd-input-area">
        <div>Last Name</div>
        <input
            value={tempProfile.lastName}
            onChange={event => {setTempProfile({
              ...tempProfile,
              lastName: event.target.value
            })}}
            type={'text'}
            className="wd-input-typing-area w-100 rounded-2 mx-1">
        </input>
      </div>

      <div className="wd-input-area">
        <div>Bio</div>
        <textarea
            value={tempProfile.bio}
            onChange={(event => {
              setTempProfile({
                ...tempProfile,
                bio: event.target.value
              })
            })}
            type={'text'}
            className="wd-input-typing-area w-100 h-500 rounded-2 mx-1">
        </textarea>
      </div>

      <div className="wd-input-area">
        <div>Location</div>
        <textarea
            value={tempProfile.location}
            onChange={(event => {
              setTempProfile({
                ...tempProfile,
                location: event.target.value
              })
            })}
            type={'text'}
            className="wd-input-typing-area w-100 rounded-2 mx-1">
        </textarea>
      </div>

      <div className="wd-input-area">
        <div>Location</div>
        <textarea
            value={tempProfile.website}
            onChange={(event => {
              setTempProfile({
                ...tempProfile,
                website: event.target.value
              })
            })}
            type={'text'}
            className="wd-input-typing-area w-100 rounded-2 mx-1">
        </textarea>
      </div>

      <div className="wd-input-area">
        <div>Birth Date</div>
        <input
            value={tempProfile.dateOfBirth}
            onChange={(event => {setTempProfile({
              ...tempProfile,
              dateOfBirth: event.target.value
            })})}
            type={'text'}
            className="wd-input-typing-area w-100 rounded-2 mx-1">
        </input>
      </div>

    </>
  );
};