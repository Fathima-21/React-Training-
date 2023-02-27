import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setName } from "./store";

const Profile = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.name);

  const handleNameChange = (event) => {
    dispatch(setName(event.target.value));
  };

  return (
    <div>
      <h1>Profile</h1>
      <label>Name:</label>
      <input type="text" value={name} onChange={handleNameChange} />
    </div>
  );
};

export default Profile;
