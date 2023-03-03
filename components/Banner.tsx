import React from "react";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="text-center lg:text-left space-y-10 text-gray-800 flex flex-col lg:flex-row lg:justify-evenly lg:gap-4 lg:items-start px-4">
      <div className="space-y-4">
        <h1 className="text-3xl md:text-6xl">Gorkem{"`"}s Weekly Blog</h1>
        <h2 className="text-xs md:text-base font-bold lg:italic">
          Welcome to Every Developers favorite Blog! in the whole{" "}
          <span className=" decoration-4 underline decoration-blue-500">
            {" "}
            DevWorld
          </span>
        </h2>
      </div>
      <p className="mt-5 md:mt-2 lg:mt-0 text-gray-400 lg:max-w-sm text-xs md:text-base">
        New producut features | The latest in technology | The weekly debugging
        nightmares & More!
      </p>
    </div>
  );
};

export default Banner;
