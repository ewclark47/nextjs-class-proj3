import { redirect } from "next/navigation";
import PostList from "@/components/posts/post-list";
import { searchPosts } from "@/db/queries/posts";

interface SearchPageProps{
    searchParams: {
        term: string;
    }
}

export default async function SearchPage({searchParams}: SearchPageProps){
    const { term } = searchParams

    if(!term){
        redirect('/')
    }
    
    return(
        <div>
            <PostList fetchData={()=> searchPosts(term)} />
        </div>

    )
}