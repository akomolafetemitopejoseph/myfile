import React from "react";

const Button = ({label, classname}) => {
  return (
    <div>
      <button className={`px-9 py-2 font-extrabold rounded-md w-[100%] ${classname}`}>{label}</button>
    </div>
  );
};

export default Button;
