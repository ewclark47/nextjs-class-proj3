const paths = {
    homePath(){
        return "/"
    },
    showTopicPath(topicSlug: string){
        return `/topics/${topicSlug}`
    },
    createPostPath(topicSlug: string){
        return `/topics/${topicSlug}/posts/new`
    },
    showPostPath(topicSlug: string, postId: string){
        return `/topics/${topicSlug}/posts/${postId}`
    }
}

export default paths;