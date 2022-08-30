import "./online.css";

export default function Online({ user }) {
  return (
    <div key={user.id}>
      <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
          <img
            src={user.profilePictures}
            alt=""
            className="rightbarProfileImg"
          />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUsername">Luise Jane</span>
      </li>
    </div>
  );
}
