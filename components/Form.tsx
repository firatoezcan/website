import { FunctionComponent } from "react";

type InputProps = {
  label: string;
  id: string;
  placeholder: string;
  required?: boolean;
};

export const Input: FunctionComponent<InputProps> = ({ label, id, placeholder, required }) => {
  return (
    <>
      <label className="block font-semibold my-2" htmlFor={id}>
        {label}
      </label>
      <input
        className="bg-black-400 px-2 py-3 w-full border-2 border-opacity-50 border-gray-400 focus:outline-none focus:border-opacity-100"
        id={id}
        type="text"
        placeholder={placeholder}
        required={required}
      />
    </>
  );
};

export const Textarea: FunctionComponent<InputProps> = ({ label, id, placeholder, required }) => {
  return (
    <>
      <label className="block font-semibold my-2" htmlFor={id}>
        {label}
      </label>
      <textarea
        className="bg-black-400 px-2 py-3 w-full border-2 border-opacity-50 border-gray-400 focus:outline-none focus:border-opacity-100"
        id={id}
        placeholder={placeholder}
        rows={6}
        required={required}
      />
    </>
  );
};
