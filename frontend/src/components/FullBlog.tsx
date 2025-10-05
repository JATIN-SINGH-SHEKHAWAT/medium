import type { Post } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";

export const FullBlog = ({ post }: { post: Post }) => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-20 max-w-screen-xl pt-12">
          <div className="col-span-8">
            <div className="text-5xl font-extrabold">{post.title}</div>
            <div className="text-slate-500 pt-4">Post on 2nd December 2025</div>

            <div className=" pt-2 text-slate-900">{post.content}</div>
          </div>
          <div className="col-span-4 ">
            Author
            <div className="flex">
                <div className="flex justify-center flex-col">
                    <Avatar name={post.author.name || "Anonyms"}  />
                </div>
                <div className="ml-3">
                    <div className="font-bold text-xl">
                        {(post.author.name || "Anonyms").toUpperCase()}
                    </div>
                    <div className="pt-2 text-slate-500">
                        Random catch phrases about the author's ability to grab the user
                        attention
                    </div>
                </div>
            </div> 
            
          </div>
         
        </div>
      </div>
    </div>
  );
};
