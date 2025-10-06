import { Link } from "react-router-dom";

interface BlogCardProps {
  id: string;
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

export const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="p-4 border-b border-slate-200 pb-4 w-full max-w-2xl mx-auto cursor-pointer">
        <div className="flex items-center">
          <Avatar name={authorName} />
          <div className="font-normal pl-2 text-sm text-slate-700">
            {authorName}
          </div>
          <div className="flex items-center px-2">
            <Circle />
          </div>
          <div className="text-sm text-slate-500">
            {publishedDate}
          </div>
        </div>
        <div className="text-xl font-bold pt-2 text-slate-900">{title}</div>
        <div className="text-base text-slate-700 pt-1 font-normal">
          {content.slice(0, 100) + "..."}
        </div>
        <div className="text-slate-500 text-sm pt-4">
          {`${Math.ceil(content.length / 100)} minute(s) read`}
        </div>
      </div>
    </Link>
  );
};

export function Circle() {
  return <div className="h-1 w-1 rounded-full bg-slate-400"></div>;
}

export function Avatar({ name }: { name: string }) {
  return (
    <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-slate-200 rounded-full">
      <span className="text-sm font-medium text-slate-600">
        {name[0].toUpperCase()}
      </span>
    </div>
  );
}