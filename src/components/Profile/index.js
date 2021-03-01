import React from "react";
import "./style.css";
import fire from "../../fire.js";

function Profile() {
  // const [userID, setUserID] = useState("");
  // setUserID(fire.auth().currentUser.uid);

  return (
    <div>
      <div className="basic-info">
        <img
          id="profile_pic_img"
          src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
        ></img>
        <h2 id="user_name">asdasd</h2>
      </div>
    </div>
  );
}

export default Profile;
