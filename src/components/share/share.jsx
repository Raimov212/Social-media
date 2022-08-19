import React from "react";
import "./share.css";
import { MdPermMedia, MdOutlineLabelImportant, MdRoom } from "react-icons/md";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import girlFriend from "../../assets/girlFriend.jpg";

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src={girlFriend} alt="" className="shareProfileImg" />
          <input
            type="text"
            className="shareInput"
            placeholder="what is your mind"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <MdPermMedia  className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <MdOutlineLabelImportant className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <MdRoom className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <BsFillEmojiSmileFill className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
