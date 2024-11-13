import  { ChangeEvent } from "react";

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type?: string;
}

const LabelInput = ({
  label,
  placeholder,
  onChange,
  name,
  type,
}: LabelledInputType) => {
  return (
    <div className="pt-4">
      <label
        htmlFor={name}
        className="block mb-2 text-md font-bold text-black dark:text-white"
      >
        {label}
      </label>
      <input
        type={type || "text"}
        id={name}
        name={name}
        className="bg-gray-50 border border-gray-300
         text-gray-900 text-sm rounded-lg focus:ring-blue-500
          focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
        onChange={onChange}
      />
    </div>
  );
};

export default LabelInput;
