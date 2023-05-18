import React, { useEffect } from "react";
import Styles from "./Profile.module.scss";
import Page from "../Page";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Post from "../../Components/Post/Post";

function Profile() {
  // REDUX
  const Dispatch = useDispatch();
  const { following } = useSelector((state) => state?.App);

  // NAVIGATION
  const { id } = useParams();

  // STATE
  const [user, setUser] = React.useState({});
  const [posts, setPosts] = React.useState([]);

  // FUNCTIONS
  const fetchData = async () => {
    try {
      const user = await axios.get(`http://54.164.179.221:4000/user/${id}`);
      setUser(user?.data);

      const post = await axios.get(`http://54.164.179.221:4000/post/${id}`);
      Array.isArray(post?.data) && setPosts(post?.data);
    } catch (error) {
      console.log(error);
    }
  };

  // USE EFFECT
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Page>
      <div className={Styles.Profile_Container}>
        <div className={Styles.Profile_Header}>
          <img
            src="https://images.pexels.com/photos/911738/pexels-photo-911738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="profile"
          />
        </div>
        <div className={Styles.Profile_Content}>
          <div className={Styles.Bio}>
            <div className={Styles.ProfileImg}>
              <img src={user?.profilePic} alt="profile" />
            </div>
            <div className={Styles.ProfileDetail}>
              <h2>{user?.name}</h2>
              <p>{user?.bio}</p>
            </div>
          </div>
          <div className={Styles.Action}>
            <button className={Styles.Secondary}>
              <i className="fa-solid fa-envelope"></i>
            </button>
            <button className={Styles.Secondary}>Hire Me</button>
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

        <div className={Styles.Profile_Data}>
          <div className={Styles.About_Container}>
            <h3>About Me</h3>
            <p>{user?.about}</p>
          </div>
          <div className={Styles.Contact_Container}>
            <h3>Location</h3>
            <p>{user?.location}</p>

            <h3>Website</h3>
            <p>{user?.website}</p>

            <h3>Phone</h3>
            <p>{user?.phone}</p>

            <h3>Email</h3>
            <p>{user?.email}</p>

            <div className={Styles.Btn_Container}>
              <button className={Styles.Secondary}>Add to list</button>
              <button className={Styles.Primary}>Message</button>
            </div>
          </div>
        </div>

        <div className={Styles.Post_Container}>
          {posts?.map((post, index) => (
            <Post key={index} data={post} user={user} />
          ))}
        </div>
      </div>
    </Page>
  );
}

export default Profile;
