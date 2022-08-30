import "./feed.css";
import Share from "../share/share";
import Post from "../post/post";
import { Posts } from "../../data/data";

export default function Feed() {
  return (
    <div className="fidebar">
      <div className="fidebarWrapper">
        <Share />
        {Posts.map((p) => {
         return <Post key={p.id} post={p} />;
        })}
      </div>
    </div>
  );
}
