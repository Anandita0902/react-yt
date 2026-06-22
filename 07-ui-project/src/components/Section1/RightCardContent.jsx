import React from "react";
import { MoveRight } from "lucide-react";

const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
      <h2 className="bg-white text-xl font-semibold rounded-full h-11 w-11 flex justify-center items-center">
        {props.id + 1}
      </h2>
      <div>
        <p className="text-shadow-2xs text-lg leading-relaxed text-white mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore
        </p>
        <div className="flex justify-between">
          <button className="bg-blue-400 text-white font-medium px-8 py-1 rounded-full ">
            {props.tag}
          </button>
          <button className="bg-blue-400 text-white font-medium px-3 py-3 rounded-full ">
            <MoveRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
