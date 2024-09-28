"use client";

import { PostProps } from "@/libs/types";

/*export default function PostOwnner({}) {
  return <div>Your code for PostOwner component ...</div>;
}*/

export default function PostOwnner({
  ImagePath,
  username,
  postTitle,
  likes,
}: PostProps) {
  return <div>
    <div className="card">
      <div className="card-header">
        <img className="profile-pic" src="profile-pic.jpg" alt="Profile Pic" />
        <span>{username}</span>
      </div>
      <div className="card-body">
        <img className="post-img" src={ImagePath} alt="Post Image" />
        <p>{postTitle}</p>
        <div className="likes-comments">
          <span>{likes} likes</span>
          <span>0 comments</span>
        </div>
      </div>
  </div>;
  </div>
}

{/*"use client";
export default function PostOwnner(props : any) {
  return <div className="vstack gap-3">
  <div className="d-flex align-items-center gap-3">
    <img
      src={props.ImagePath}
      width="48"
      height="48"
      className="rounded-circle"
      style={{ objectFit: "cover" }}
    />
    <span className="fw-semibold fs-5">{props.name}</span>
  </div>

  <span>{props.massages}</span>

  <div className="d-flex align-items-center gap-1">
    <img src="/like.svg" width={20}></img>
    <span className="text-muted">{props.likes} คน</span>
  </div>
  <hr className="m-0 border" />
</div>
}*/}