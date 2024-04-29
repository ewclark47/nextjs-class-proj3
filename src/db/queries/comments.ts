import type { Comment } from "@prisma/client";
import { db } from "..";
import { cache } from "react";

export type CommentWithAuthor = (
    Comment & {
        user: {name: string | null
        image: string | null
        }
    }
)

export const fetchCommentsByPostId = cache((postId: string): Promise<CommentWithAuthor[]> => {
    console.log('making a query ')
    
    return(
        db.comment.findMany({
            where: {postId},
            include: {
                user: { select: {name: true, image: true}}
            }
        })
    )
}
)

// wrapping this in a 'cache' function allows react to use request memoization as if we were using the built in
// fetch function. This request memoization only allows ONE instance of an exact same DB query to run and then
// passes the data to all places the query is placed in the code. So the duplicate queries we have in comment-show
// and comment-list that would cause the query to run FOUR times normally for 3 existing comments only runs ONCE