import React, { useEffect, useState } from "react";
import Page from "../Page";
import axios from "axios";
import Styles from "./Users.module.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Post from "../../Components/Post/Post";

function Users() {
  return (
    <Page>
      <div className={Styles.User_Container}>
        {/* RENDERING USER FEED */}
        <MyFeed />

        {/* RENDERING USER LIST */}
        <UserList />
      </div>
    </Page>
  );
}

export default Users;

function MyFeed() {
  // STATE
  const [posts, setPosts] = useState([]);

  // FUNCTIONS
  const fetchUserData = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/post");
      Array.isArray(data) && setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  // USE EFFECT
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className={Styles.Post_Container}>
      <h3>People you may know</h3>
      <div className={Styles.Form_Container}>
        <input type="text" placeholder="What's happening?" />

        <div className={Styles.Button_Container}>
          {/* Photos */}
          <button>
            <i className="fas fa-image"></i>
            Photos
          </button>
          {/* Videos */}
          <button>
            <i className="fas fa-video"></i>
            Videos
          </button>
          {/* Schedule */}
          <button>
            <i className="fas fa-calendar-alt"></i>
            Schedule
          </button>
        </div>
      </div>
      {posts?.map((post, index) => (
        <Post data={post} user={post?.user} />
      ))}
    </div>
  );
}

function UserList() {
  // REDUX
  const Dispatch = useDispatch();
  const { following } = useSelector((state) => state?.App);

  // NAVIGATION
  const navigate = useNavigate();

  // STATE
  const [userList, setUserList] = useState([]);

  // FUNCTION
  const fetchUserData = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/user");
      Array.isArray(data) && setUserList(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  // USE EFFECT
  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <div className={Styles.List_Container}>
      <h3>People you may know</h3>
      {userList?.map((user, index) => (
        <div className={Styles.User}>
          <div className={Styles.User_Image}>
            <img src={user?.profilePic} alt="user" />
            <p>{user?.name}</p>
          </div>

          <div className={Styles.Button_Container}>
            <button
              className={Styles.Secondary}
              onClick={() => navigate(`/${user._id}`)}
            >
              Profile
            </button>
            <button
              className={Styles.Primary}
              onClick={() =>
                Dispatch({ type: "SET_FOLLOWING", payload: user._id })
              }
            >
              {following?.includes(user._id) ? "Unfollow" : "Follow"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
