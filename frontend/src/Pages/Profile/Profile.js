import React from "react";
import Styles from "./Profile.module.scss";
import Page from "../Page";

function Profile() {
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
              <img
                src="https://images.pexels.com/photos/4009599/pexels-photo-4009599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="profile"
              />
            </div>
            <div className={Styles.ProfileDetail}>
              <h2>John Doe</h2>
              <p>I'm a UI/UX Designer based in Bangalore</p>
            </div>
          </div>
          <div className={Styles.Action}>
            <button className={Styles.Secondary}>
              <i className="fa-solid fa-envelope"></i>
            </button>
            <button className={Styles.Secondary}>Hire Me</button>
            <button className={Styles.Primary}>
              <i className="fa-solid fa-plus"></i> Follow
            </button>
          </div>
        </div>

        <div className={Styles.Profile_Data}>
          <div className={Styles.About_Container}>
            <h3>About Me</h3>
            <p>
              UI designer with a true passion for creating visually stunning and
              user-centered digital experiences. With over a decade of industry
              experience, Jason has honed his skills in crafting intuitive
              interfaces that seamlessly blend functionality and aesthetics
            </p>
          </div>
          <div className={Styles.Contact_Container}>
            <h3>Location</h3>
            <p>Bangalore, India</p>

            <h3>Website</h3>
            <p>www.johndoe.com</p>

            <h3>Phone</h3>
            <p>+91 9876543210</p>

            <h3>Email</h3>
            <p>hello@john.com</p>

            <div className={Styles.Btn_Container}>
              <button className={Styles.Secondary}>Add to list</button>
              <button className={Styles.Primary}>Message</button>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default Profile;
