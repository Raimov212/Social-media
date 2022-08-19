import "./post.css";
import { MdMoreVert } from "react-icons/md";
import girlFriend from "../../assets/girlFriend.jpg";
import garden from "../../assets/garden.jpg";
import like from "../../assets/like.png";
import heart from "../../assets/heart.png";

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={girlFriend} alt="" className="postProfileImg" />
            <span className="postUserName">Luise Jane</span>
            <span className="postUserDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MdMoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">!My first post</span>
          <img src={garden} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={like} alt="" />
            <img className="likeIcon" src={heart} alt="" />
            <span className="postLikeCounter">32 like people it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">10 likes</span>
          </div>
        </div>
      </div>
    </div>
  );
}
