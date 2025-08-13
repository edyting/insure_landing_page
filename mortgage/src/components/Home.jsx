import React from 'react'
import image1 from "../assets/illustration-empty.svg";
const Home = () => {
  return (
    <div>
      {/* image */}
      <div className="flex justify-center items-center flex-col">
        <img src={image1} className="w-2/4" alt="side image" />
        <h2 className="text-white py-2 font-semibold text-xl">
          Results shown here
        </h2>
        <p className="text-center text-slate-400 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          accusamus maiores{" "}
        </p>
      </div>
    </div>
  );
}

export default Home
