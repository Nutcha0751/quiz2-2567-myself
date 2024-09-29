import { CommentComponent } from "./types";

export const comments:any= [
  {
    username: "Lisa",
    userImagePath: "/profileImages/lisa.jpg",
    commentText: "จริงค่าาาาา",
    likeNum: 555,
    replies: [
      {
        username: "Cat Meme",
        userImagePath: "/profileImages/popcat.png",
        replyText: "ลิซ่าาาาาาา",
        likeNum: 20,
      },
      {
        username: "หมาน้อย",
        userImagePath: "/profileImages/puppy.jpg",
        replyText: "จริงค้าบบบ",
        likeNum: 0,
      },
      ,
    ],
  },
  {
    username: "Charlie Brown",
    userImagePath: "/profileImages/charliebrown.jpg",
    commentText: "อาจารย์ใจดีกับผมหน่อยค้าบบ 😢",
    likeNum: 0,
    replies: [],
  },
];