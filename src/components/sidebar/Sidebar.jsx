import "./sidebar.css";
import { MdRssFeed, MdGroup, MdWorkOutline } from "react-icons/md";
import {
  BsFillChatLeftFill,
  BsQuestionCircle,
  BsFillBookmarksFill,
  BsCalendarEvent,
} from "react-icons/bs";
import { AiFillPlayCircle, AiFillDatabase } from "react-icons/ai";
import Friend from "../../assets/girlFriend.jpg";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <MdRssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <BsFillChatLeftFill className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <AiFillPlayCircle className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <MdGroup className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <BsFillBookmarksFill className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <BsQuestionCircle className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <MdWorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <BsCalendarEvent className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <AiFillDatabase className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
          <button className="sidebarBUtton">Show more</button>
          <hr className="sidebarHr" />
          <ul className="sidebarFriendList">
            <li className="sidebarListItem">
              <img src={Friend} alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Luise Jane</span>
            </li>
            <li className="sidebarListItem">
              <img src={Friend} alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Luise Jane</span>
            </li>
            <li className="sidebarListItem">
              <img src={Friend} alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Luise Jane</span>
            </li>
            <li className="sidebarListItem">
              <img src={Friend} alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Luise Jane</span>
            </li>
            <li className="sidebarListItem">
              <img src={Friend} alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Luise Jane</span>
            </li>
            <li className="sidebarListItem">
              <img src={Friend} alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Luise Jane</span>
            </li>
            <li className="sidebarListItem">
              <img src={Friend} alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Luise Jane</span>
            </li>
            <li className="sidebarListItem">
              <img src={Friend} alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Luise Jane</span>
            </li>
            <li className="sidebarListItem">
              <img src={Friend} alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Luise Jane</span>
            </li>
            <li className="sidebarListItem">
              <img src={Friend} alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Luise Jane</span>
            </li>
            <li className="sidebarListItem">
              <img src={Friend} alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Luise Jane</span>
            </li>
            <li className="sidebarListItem">
              <img src={Friend} alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Luise Jane</span>
            </li>
            <li className="sidebarListItem">
              <img src={Friend} alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Luise Jane</span>
            </li>
            <li className="sidebarListItem">
              <img src={Friend} alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Luise Jane</span>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
}
