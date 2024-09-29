"use client";
import { ReplyProps } from "../libs/types";

<<<<<<< HEAD
export default function Reply({ ImagePath, username, replyTitle, likeNum }:any) {
  return(
  <div className="d-flex gap-2 my-2 ps-5">
    <img
      src={ImagePath}
      width="48"
      height="48"
      className="rounded-circle"
      style={{ objectFit: "cover" }}
    />
    <div
      className="rounded rounded-3 p-2"
      style={{ backgroundColor: "#E5E7EB" }}
    >
      <span className="fw-semibold">{username}</span>
      <br />
      <span>{replyTitle}</span>
      <div className="d-flex align-items-center gap-1">
      { likeNum > 0 && <img src="/like.svg" width={20}></img> }
        { likeNum > 0 && <span className="text-muted">{likeNum} คน</span>}
      </div>
    </div>
  </div>);
=======
export default function Reply({ ImagePath, username, replyTitle, likes } : any) {
  return <div className="d-flex gap-2 my-2 ps-5">
  <img
    src={ImagePath}
    width="48"
    height="48"
    className="rounded-circle"
    style={{ objectFit: "cover" }}
  />
  <div
    className="rounded rounded-3 p-2"
    style={{ backgroundColor: "#E5E7EB" }}
  >
    <span className="fw-semibold">{username}</span>
    <br />
    <span>{replyTitle}</span>
    <div className={ "d-flex align-items-center gap-1"}>
      <img src="/like.svg" width={20}></img>
      <span className= {"text-muted"}>{likes} คน</span>
    </div>
  </div>
</div>
>>>>>>> 7c5a7c9a84f60637813f72676faa5978f710e34a
}