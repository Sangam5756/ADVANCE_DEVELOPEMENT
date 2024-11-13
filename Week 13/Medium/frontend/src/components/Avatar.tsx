
const Avatar = ({ name, size="small"}: { name: string; size?: "small" | "big" }) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${
        size === "small" ? "w-6 h-6" : "w-10 h-10"
      } overflow-hidden bg-gray-500 rounded-full dark:bg-gray-600`}
    >
      <span
        className={`${
          size === "small" ? "font-sm" : "font-md"
        } font-extralight text-black dark:text-gray-300`}
      >
        {name[0]}
      </span>
    </div>
  );
};

export default Avatar;
