import Image from "next/image";
import styles from "./page.module.css";
import { comments } from "@/libs/comments";
import PostOwnner from "@/components/PostOwnner";
import Comment from "@/components/Comment";
<<<<<<< HEAD
import { ReplyProps } from "../libs/types";
=======
import { comments } from "@/libs/comments";
import { CommentProps } from "@/libs/types";
import Reply from "@/components/Reply";
>>>>>>> 7c5a7c9a84f60637813f72676faa5978f710e34a

interface CommentComponent {
  userImagePath: string;
  username: string;
  commentText: string;
  likeNum: number;
  replies: ReplyProps[];
}

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
        <PostOwnner
          PostTitle="Nutcha Khampoung 660610751"
          content="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #26120"
          profilePic="/profileImages/nutcha.jpg"
          likes={0}
        ></PostOwnner>

        {/* map-loop render Comment component here */}
<<<<<<< HEAD
        {comments.map((cmd: CommentComponent) => (
          <Comment
            key={cmd.username}
            ImagePath={cmd.userImagePath}
            username={cmd.username}
            commentTitle={cmd.commentText}
            likes={cmd.likeNum}
            replies={cmd.replies}
          />
        ))}
=======
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
>>>>>>> 7c5a7c9a84f60637813f72676faa5978f710e34a
      </div>
    </div>
  );
}