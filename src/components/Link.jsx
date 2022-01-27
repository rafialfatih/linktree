import React from "react";

const Link = ({ url, title }) => {
  return (
    <>
      <a
        href={url}
        className="flex min-h-[3rem] w-full cursor-pointer items-center justify-center rounded-xl border-[3.6px] border-violet-500 font-semibold transition duration-200 ease-in-out hover:border-violet-600 hover:bg-violet-600 hover:text-white"
      >
        {title}
      </a>
    </>
  );
};

export default Link;
