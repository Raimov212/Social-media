import "./topbar.css";
import { BiSearch } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { BsFillChatFill } from "react-icons/bs";
import { MdOutlineNotificationsNone } from "react-icons/md";
import GirlFriend from "../../assets/girlFriend.jpg";

const Topbar = () => {
  return (
    <div>
      <div className="topbarContainer">
        <div className="topbarLeft">
          <div className="logo">User</div>
        </div>
        <div className="topbarCenter">
          <div className="searchBar">
            <BiSearch className="searchIcon"/>
            <input
              type="text"
              placeholder="Search friend"
              className="searchInput"
            />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Hompage</span>
            <span className="topbarLink">TimeLine</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <FaUserAlt />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <BsFillChatFill />
              <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
              <MdOutlineNotificationsNone />
              <span className="topbarIconBadge">1</span>
            </div>
            <img src={GirlFriend} alt="" className="topbarImg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
