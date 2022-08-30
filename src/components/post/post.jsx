import "./post.css";
import { useEffect, useState } from "react";
import { MdMoreVert } from "react-icons/md";
import girlFriend from "../../assets/girlFriend.jpg";
import garden from "../../assets/garden.jpg";
import likeImg from "../../assets/like.png";
import heart from "../../assets/heart.png";
import { Users } from "../../data/data";

export default function Post({ post }) {  
  const [like, setLike] = useState(post.like);
  const [isLiked, setIslaked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIslaked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div c lassName="postTop">
          <div className="postTopLeft">
            <img
              src={
                Users.filter((user) => user.id === post.userId)[0]
                  .profilePictures
              }
              alt=""
              className="postProfileImg"
            />
            <span className="postUserName">
              {Users.filter((user) => user.id === post.userId)[0].username}
            </span>
            <span className="postUserDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MdMoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img src={garden} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src={likeImg}
              alt=""
              onClick={likeHandler}
            />
            <img className="likeIcon" src={heart} alt="" />
            <span className="postLikeCounter">{like} peop le like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments </span>
          </div>
        </div>
      </div>
    </div>
  );
}
