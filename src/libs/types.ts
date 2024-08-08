// You can define interfaces for all React components here.
// Do not forget to export properly.

interface ReplyProps {
    ImagePath: any; 
    username: string; 
    replyTitle : string; 
    likes: string;
}
export type { ReplyProps };

interface PostProps {
    username: string;
    ImagePath: any;
    postTitle: string;
    likes: string;

}
export type {PostProps};

interface CommentProps {
    ImagePath: any;
    username: string;
    commentTitle: string;
    likes: string;
    replies: any;
}
export type {CommentProps};