import Image from "next/image";
import styles from "./page.module.css";

import PostOwnner from "@/components/PostOwnner";
import Comment from "@/components/Comment";
import { comments } from "@/libs/comments";
import { CommentProps } from "@/libs/types";
import Reply from "@/components/Reply";


export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        {/* Post Owner Example*/}
        <div className="vstack gap-3">
          <div className="d-flex align-items-center gap-3">
            <img
              src="/profileImages/nutcha.jpg"
              width="48"
              height="48"
              className="rounded-circle"
              style={{ objectFit: "cover" }}
            />
            <span className="fw-semibold fs-5">Nutcha Khampoung 660610751</span>
          </div>

          <span>Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207</span>

          <div className="d-flex align-items-center gap-1">
            <img src="/profileImages/like.svg" width={20}></img>
            <span className="text-muted" >100 คน</span>
          </div>
          <hr className="m-0 border" />
        </div>

        {/* Comment Example */}
        <div className="d-flex gap-2 my-2">
          <img
            src="/profileImages/lisa.jpg"
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#E5E7EB" }}
          >
            <span className="fw-semibold">Lisa</span>
            <br />
            <span>จริงค่า</span>
            <div className="d-flex align-items-center gap-1">
              <img src="/profileImages/like.svg" width={20}></img>
              <span className="text-muted">999 คน</span>
            </div>
          </div>
        </div>

        {/* Reply Example */}
        <div className="d-flex gap-2 my-2 ps-5">
          <img
            src="/profileImages/puppy.jpg"
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#E5E7EB" }}
          >
            <span className="fw-semibold">หมาน้อย</span>
            <br />
            <span>จริงค้าบบบบบบบบ</span>
            <div className="d-flex align-items-center gap-1">
              <img src="/profileImages/like.svg" width={20}></img>
              <span className="text-muted">2 คน</span>
            </div>
          </div>
        </div>

        {/* map-loop render Comment component here */}
        {/*{comments.map((comment: CommentProps) => (
        <Comment key={comment.id} id={comment.id} text={comment.text} />
        ))}*/}

<div>
  {comments.map((comment, index) => (
    <Comment
      key={index}
      ImagePath={comment.userImagePath}  // ใช้ 'userImagePath' จากข้อมูลของคุณ
      username={comment.username}        // ใช้ 'username' จากข้อมูลของคุณ
      commentTitle={comment.commentText} // ใช้ 'commentText' สำหรับเนื้อหาความคิดเห็น
      likes={comment.likeNum}            // ใช้ 'likeNum' สำหรับจำนวนไลค์
      replies={comment.replies}          // ใช้ 'replies' สำหรับการตอบกลับ
    />
  ))}
</div>        
      </div>
    </div>
  );
}
