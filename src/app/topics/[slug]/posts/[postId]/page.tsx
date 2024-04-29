import CommentCreateForm from "@/components/comments/comment-create-form"
import CommentList from "@/components/comments/comment-list"
import PostShow from "@/components/posts/post-show"
import paths from "@/paths"
import Link from "next/link"
import { fetchCommentsByPostId } from "@/db/queries/comments"

interface ShowPostPageProps{
    params: {
        slug: string
        postId: string
    }
}

export default async function ShowPostPage({params}: ShowPostPageProps){
    const { slug, postId} = params
    
    return(
        <div>
            <Link className="underline decoration-solid" href={paths.showTopicPath(slug)}>
                {'<'} Back to {slug}
            </Link>
            <PostShow postId={postId} />
            <CommentCreateForm postId={postId} />
            <CommentList postId={postId} />
        </div>
    )
}