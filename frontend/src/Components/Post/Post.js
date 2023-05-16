import React from "react";
import Styles from "./Post.module.scss";
import moment from "moment/moment";

function Post({ data, user }) {
  return (
    <div className={Styles.Post}>
      <div className={Styles.Profile}>
        <img src={user?.profilePic} alt="profile" />
      </div>
      <div className={Styles.Content}>
        <h4>
          {user?.name}
          <span>
            {/* tick */}
            <i className="fa-solid fa-check"></i>
          </span>
        </h4>
        <h6>{moment(data?.createdAt).fromNow()}</h6>
        <p>{data?.body}</p>
        <div className={Styles.Reaction_Container}>
          <div className={Styles.Reaction}>
            <span className={Styles.Like}>
              <i className="fa-solid fa-thumbs-up"></i>
            </span>
            <span className={Styles.Love}>
              <i className="fa-solid fa-heart"></i>
            </span>
            <span className={Styles.Laugh}>
              <i className="fa-solid fa-laugh"></i>
            </span>
            <h6>{Math.ceil(Math.random() * 100)}K</h6>
          </div>
          <div className={Styles.Comment}>
            <h6>{Math.ceil(Math.random() * 100)}K Comments</h6>
          </div>
        </div>

        <div className={Styles.Btn_Container}>
          <button>
            <i className="fa-solid fa-thumbs-up"></i>
            Like
          </button>
          <button>
            <i className="fa-solid fa-comment"></i>
            Comment
          </button>
          <button>
            <i className="fa-solid fa-share"></i>
            Share
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;
