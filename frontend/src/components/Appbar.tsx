import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

export const Appbar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-4">
      <Link to={"/"}>
        <div className="flex flex-col justify-center cursor-pointer font-bold text-md">
          Medium
        </div>
      </Link>
      <div>
        <Link to={'/publish'}>
          <button
            type="button"
            className="focus:outline-none text-white bg-green-700 font-medium rounded-full text-sm px-5 py-1.5 me-2 mb-2 mr-8 ">
            New
          </button>
        </Link>
        <Avatar name={"harkirat"} />
      </div>
    </div>
  );
};
