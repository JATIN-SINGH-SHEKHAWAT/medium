import { Appbar } from "../components/Appbar";
import { BlogSkeleton, FullBlogSkeleton } from "../components/BlogSkelton";
import { FullBlog } from "../components/FullBlog";
import { useBlog } from "../hooks"
import { useParams } from "react-router-dom";

export const Blog = () => {
    const { id } = useParams();
    const {loading , post} = useBlog({
        id: id || ""
    });

     console.log("Loading:", loading);  // Add this
    console.log("Post:", post);  

    if(loading || !post) { //we can either use here the laoding skelton
        return <div>
         <div>
            <FullBlogSkeleton />
        </div>
        </div>
    }
    return <div>
        <FullBlog post={post} />
    </div>
}