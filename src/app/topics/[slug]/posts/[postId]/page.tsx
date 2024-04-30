import CommentCreateForm from "@/components/comments/comment-create-form"
import CommentList from "@/components/comments/comment-list"
import PostShow from "@/components/posts/post-show"
import paths from "@/paths"
import Link from "next/link"
import { Suspense } from "react"
import ShowPostLoading from "@/components/posts/show-post-loading"
import ShowCommentLoading from "@/components/posts/show-comment-loading"

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
            <Suspense fallback={<ShowPostLoading />}>
                <PostShow postId={postId} />
            </Suspense>
            <CommentCreateForm postId={postId} />
            <Suspense fallback={<ShowCommentLoading />}>
                <CommentList postId={postId} />
            </Suspense>
        </div>
    )
}