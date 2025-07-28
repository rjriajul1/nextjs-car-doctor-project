import Image from "next/image";
import React from "react";
import { IoStarOutline } from "react-icons/io5";

const OurProducts = () => {
  return (
    <div>
      <h4 className="text-red-500 text-center font-bold py-5">
        Popular Products
      </h4>
      <h1 className="font-bold text-5xl text-center mb-5">
        Browse Our Products{" "}
      </h1>
      <p className="text-xs text-center mb-12">
        the majority have suffered alteration in some form, by injected humour,
        or randomised <br /> words which don't look even slightly believable.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-6">
        {/* card 1 */}
        <div className="border border-gray-400 rounded-2xl">
          <figure className="p-6 w-full">
            <img
              className="mx-auto  bg-gray-300 p-3  rounded-md max-w-[215px]"
              src="/assets/images/products/1.png"
            />
          </figure>
          <div className="text-center">
            <p className="flex justify-center gap-2">
              <IoStarOutline color="orange " size={24} />
              <IoStarOutline color="orange " size={24} />
              <IoStarOutline color="orange " size={24} />
              <IoStarOutline color="orange " size={24} />
              <IoStarOutline color="orange " size={24} />
            </p>
            <h2 className="font-bold text-2xl py-4">Car Engine Plug</h2>
            <p className="text-red-500 font-bold mb-4">$20.00</p>
          </div>
        </div>
        {/* card 2 */}
        <div className="border border-gray-400 rounded-2xl">
          <figure className="p-6">
            <img
              className="mx-auto w-full bg-gray-300 p-3  rounded-md max-w-[215px]"
              src="/assets/images/products/2.png"
            />
          </figure>
          <div className="text-center">
            <p className="flex justify-center gap-2">
              <IoStarOutline color="orange " size={24} />
              <IoStarOutline color="orange " size={24} />
              <IoStarOutline color="orange " size={24} />
              <IoStarOutline color="orange " size={24} />
              <IoStarOutline color="orange " size={24} />
            </p>
            <h2 className="font-bold text-2xl py-4">Car Air Filter</h2>
            <p className="text-red-500 font-bold mb-4">$20.00</p>
          </div>
        </div>
        {/* card 3 */}
        <div className="border border-gray-400 rounded-2xl">
          <figure className="p-6">
            <img
              className="mx-auto w-full bg-gray-300 p-3  rounded-md max-w-[215px]"
              src="/assets/images/products/3.png"
            />
          </figure>
          <div className="text-center">
            <p className="flex justify-center gap-2">
              <IoStarOutline color="orange " size={24} />
              <IoStarOutline color="orange " size={24} />
              <IoStarOutline color="orange " size={24} />
              <IoStarOutline color="orange " size={24} />
              <IoStarOutline color="orange " size={24} />
            </p>
            <h2 className="font-bold text-2xl py-4">Cools Led Light</h2>
            <p className="text-red-500 font-bold mb-4">$20.00</p>
          </div>
        </div>
        {/* card 4 */}
        <div className="border border-gray-400 rounded-2xl">
          <figure className="p-6 ">
            <img
              className="mx-auto w-full bg-gray-300  rounded-md max-w-[215px]"
              src="/assets/images/products/4.png"
            />
          </figure>
          <div className="text-center">
            <p className="flex justify-center gap-2">
              <IoStarOutline color="orange " size={24} />
              <IoStarOutline color="orange " size={24} />
              <IoStarOutline color="orange " size={24} />
              <IoStarOutline color="orange " size={24} />
              <IoStarOutline color="orange " size={24} />
            </p>
            <h2 className="font-bold text-2xl py-4">Cools Led Light</h2>
            <p className="text-red-500 font-bold mb-4">$20.00</p>
          </div>
        </div>
        {/* card 5 */}
        <div className="border border-gray-400 rounded-2xl">
          <figure className="p-6 min-h-[215px]">
            <img
              className="mx-auto w-full bg-gray-300 p-3  rounded-md max-w-[215px]"
              src="/assets/images/products/5.png"
            />
          </figure>
          <div className="text-center">
            <p className="flex justify-center gap-2">
              <IoStarOutline color="orange " size={24} />
              <IoStarOutline color="orange " size={24} />
              <IoStarOutline color="orange " size={24} />
              <IoStarOutline color="orange " size={24} />
              <IoStarOutline color="orange " size={24} />
            </p>
            <h2 className="font-bold text-2xl py-4">Cools Led Light</h2>
            <p className="text-red-500 font-bold mb-4">$20.00</p>
          </div>
        </div>
        {/* card 6 */}
        <div className="border border-gray-400 rounded-2xl">
          <figure className="p-6 ">
            <img
              className="mx-auto w-full bg-gray-300 p-3  rounded-md max-w-[215px]"
              src="/assets/images/products/6.png"
            />
          </figure>
          <div className="text-center">
            <p className="flex justify-center gap-2">
              <IoStarOutline color="orange " size={24} />
              <IoStarOutline color="orange " size={24} />
              <IoStarOutline color="orange " size={24} />
              <IoStarOutline color="orange " size={24} />
              <IoStarOutline color="orange " size={24} />
            </p>
            <h2 className="font-bold text-2xl py-4">Cools Led Light</h2>
            <p className="text-red-500 font-bold mb-4">$20.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
