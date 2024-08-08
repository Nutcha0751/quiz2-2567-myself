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