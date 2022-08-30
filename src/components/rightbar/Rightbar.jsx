import "./rightbar.css";
import gift from "../../assets/gift.png";
import smooth from "../../assets/smooth.jpg";
import girlfriend from "../../assets/girlFriend.jpg";
import { Users } from "../../data/data";
import Online from "../online/Online.jsx";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src={gift} alt="" />
          <span className="birthdayText">
            There are <b>3 birthdays</b> today
          </span>
        </div>
        <img src={smooth} alt="" className="rightbarGift" />
        <h4 className="rightbarTitle">Online friends</h4>
        <ul className="rightbarFriendsList">
          {Users.map((u) => (
            <Online user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
