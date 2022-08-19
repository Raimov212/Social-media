import "./feed.css";
import Share from "../share/share";
import Post from "../post/post";

export default function Feed() {
  return (
    <div className="fidebar">
      <div className="fidebarWrapper">
        <Share />
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  );
}
