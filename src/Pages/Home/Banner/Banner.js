import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
      <div className="banner flex relative text-white">
        <div className=" flex">
          <div className="flex items-center absolute  top-2 left-2">
            <div>
              <p className=" font-serif normal-case text-xl tracking-widest font-bold">
                ATTORNA
              </p>
              <p className=" text-[10px] font-medium tracking-widest text-[#e1dcdc]">
                ATTORNEY AT LAW
              </p>
            </div>
          </div>
          <div>
            <img
              className=" absolute bottom-0 w-[350px] h-[430px] banner-img"
              src="https://img.freepik.com/free-photo/picture-elegant-young-fashion-man_158595-546.jpg?w=826&t=st=1668061907~exp=1668062507~hmac=893037c799311eff15e2226ba186a79b74833d800ee6cf667c169cef6baa7c93"
              alt=""
            />
          </div>
          <div className=" absolute bottom-[30%] right-5">
            <p className=" text-7xl font-mono font-semibold">We Enforce</p>
            <h1 className=" text-6xl font-serif font-semibold">
              Justice For You
            </h1>
            <h3 className="text-2xl uppercase text-black font-medium bg-[#D9A86D] p-2 my-3 rounded-lg">
              I Am Always Prepared For Any Case{" "}
            </h3>
            <p className=" text-justify">
              A lawyer is a professional who is qualified to offer advice about{" "}
              <br />
              the law or represent someone in legal matters. A lawyer can also{" "}
              <br />
              be called an attorney, a solicitor, a counselor, a barrister, or —{" "}
              <br />
              pejoratively — an ambulance chaser.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Banner;