import Avatar from "./Avatar";
import Dot from "./Dot";
import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id:string
}

const BlogCard = ({
    id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
    <div className="p-4 border-b border-gray-200 w-screen max-w-screen-md cursor-pointer">
      <div className="flex">
        <div className="flex font-extralight flex-col justify-center">
          <Avatar name={authorName} />
        </div>

        <div className="font-extralight pl-2">{authorName}</div>

        <div className="flex flex-col justify-center pl-2">
          <Dot />
        </div>

        <div className="pl-1 font-thin text-slate-400">{publishedDate}</div>
      </div>

      <div className="text-xl font-bold pt-2">{title}</div>

      <div className="text-ellipsis line-clamp-1 font-thin text-md">
        {content}
      </div>

      <div className="text-sm text-slate-500 font-thin pt-4">{`${Math.ceil(
        content.length / 100
      )} minute(s) read`}</div>
    </div></Link>
  );
};

export default BlogCard;
