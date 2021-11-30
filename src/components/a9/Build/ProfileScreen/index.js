import React, {useEffect, useState} from "react";
import './profile.css';
import Profile from "./profile";
import {EditProfile} from "./editprofile";
import NavigationSidebar from "../NavigationSidebar";
import {useDispatch, useSelector} from "react-redux";
import {fetchProfile} from "../../../../services/profileServices";


const ProfileScreen = () => {
  const profile_data = useSelector(state => state.profile);
  const dispatch = useDispatch();
  useEffect(() => {fetchProfile(dispatch);}, [dispatch]);
  const [isEdit, setIsEdit] = useState(false);
  return (
      <>
        <div className="row mt-2">
          <div className="col-2 col-md-2 col-lg-1 col-xl-2">
            <NavigationSidebar current="profile"/>
          </div>
          <div className="col-10" style={{"position": "relative"}}>
            {!isEdit && <Profile profile_data={profile_data} editCallback={() => setIsEdit(true)}></Profile>}
            {isEdit && <EditProfile profile_date={profile_data} onSave={() => setIsEdit(false)}></EditProfile>}
          </div>
        </div>
      </>
  );
}
export default ProfileScreen;