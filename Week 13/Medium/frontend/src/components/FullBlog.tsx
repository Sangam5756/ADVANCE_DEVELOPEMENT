import { Blogs } from "../hooks/useBlog";
import Avatar from "./Avatar";

const FullBlog = ({ blog }: { blog: Blogs }) => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="grid lg:grid-cols-12 pt-10 grid-cols-1    px-10 w-full max-w-screen-xl ">
          <div className="col-span-8 ">
            <div className="lg:hidden mb-8">
              <div className="text-slate-600 text-sm">Author</div>
              <div className="pt-2 font-bold text-xl">
                {blog?.author?.name || "Anonymous"}
              </div>
            </div>

            <div className="text-5xl font-semibold">{blog?.title}</div>
            <div className="text-slate-500 pt-2">Post on 7th Nov 2024</div>
            <div className="pt-4 ">{blog?.content}</div>
          </div>
          <div className="col-span-4 hidden lg:block">
            <div className="text-slate-600">Author</div>
            <div className="flex">
              <div className="pr-4 flex flex-col justify-center">
                <Avatar size="big" name={blog?.author?.name || "Anonymous"} />
              </div>
              <div>
                <div className="pt-2 font-bold text-2xl">
                  {blog?.author?.name || "Anonymous"}
                </div>

                <div className="pt-2 text-slate-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugiat, quas!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullBlog;
