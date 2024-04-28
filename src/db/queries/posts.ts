import type { Post } from "@prisma/client";
import { db } from "..";
import { nullable } from "zod";

export type PostWithData = (
    Post & {
        topic: {slug: string};
        user: {name: string | null};
        _count: { comments: number}
    }
)

export function fetchPostsByTopicSlug(slug: string): Promise<PostWithData[]>{
    return(
        db.post.findMany({
            where: {topic: {slug}},
            include: {
                topic: { select: {slug: true}},
                user: { select: {name: true}},
                _count: {select: {comments: true}}
            }
        })
    )
}