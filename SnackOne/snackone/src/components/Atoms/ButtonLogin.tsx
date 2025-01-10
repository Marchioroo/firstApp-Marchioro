import React from "react";

interface ButtonProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title }) => {
  return (
    <button className="mt-2 w-full p-1.5 bg-white text-[#47011C] font-bold rounded-lg hover:bg-slate-100 ">
      {title}
    </button>
  );
};

export default Button;
