
import Dot from "./Dot";
import Avatar from "./Avatar";

const Shimmer = () => {
  let arrays = new Array(10).fill(null);

  return (
    <div className="flex justify-center">
      <div>
        {arrays.map(() => (
          <div className="p-4 border-b border-gray-200 animate-pulse w-screen max-w-screen-md cursor-pointer">
            <div className="flex">
              <div className="flex font-extralight flex-col justify-center">
                <Avatar name={""} />
              </div>

              <div className="font-extralight pl-2 bg-slate-200 py-1 rounded-md ml-2 w-24">
                {""}
              </div>

              <div className="flex flex-col justify-center pl-2">
                <Dot />
              </div>

              <div className="pl-1 font-thin text-slate-400 bg-slate-200 rounded-md w-10 ">
                {""}
              </div>
            </div>

            <div className="text-xl font-bold pt-2 bg-slate-200 mt-2 py-4 rounded-md">
              {""}
            </div>

            <div className="text-ellipsis  bg-slate-200 h-12 mt-2 rounded-md line-clamp-1 font-thin text-md">
              {""}
            </div>

            <div className="text-sm text-slate-500 font-thin pt-4 py-1 w-10 rounded-md bg-slate-200 mt-5"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
