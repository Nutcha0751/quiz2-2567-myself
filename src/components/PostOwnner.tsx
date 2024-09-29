"use client";
interface PostComponent {
  content:string;
  profilePic:string;
  PostTitle:string;
  likes:number
}
export default function PostOwnner({
  content,
  profilePic,
  PostTitle,
  likes,
}:PostComponent) {
  return (
    <div className="vstack gap-3">
      <div className="d-flex align-items-center gap-3">
        <img
          src= {profilePic}
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <span className="fw-semibold fs-5"> {PostTitle } </span>
      </div>

      <span>{content}</span>

      <div className="d-flex align-items-center gap-1">
        <img src="/like.svg" width={20}></img>
        <span className="text-muted">{likes} คน</span>
      </div>
<<<<<<< HEAD
      <hr className="m-0 border" />
    </div>
  );
}
=======
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
>>>>>>> 7c5a7c9a84f60637813f72676faa5978f710e34a
