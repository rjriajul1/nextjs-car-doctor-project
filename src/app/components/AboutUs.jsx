import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="mt-30 mb-30 flex-row lg:flex ">
      <div className="flex-1 mb-20 relative lg:mb-0">
        <div >
          <Image
            className="rounded-2xl"
            width={460}
            height={473}
            src="/assets/images/about_us/person.jpg"
          />
        </div>
        <div className="absolute -bottom-14 right-30">
           <Image
            className="rounded-2xl"
            width={327}
            height={332}
            src="/assets/images/about_us/parts.jpg"
          />
        </div>
      </div>
      <div className="flex-1">
        <p className="text-red-500 font-bold">About Us</p>
        <h1 className="font-bold text-5xl py-2">We are qualified <br /> & of experience <br /> in this field</h1>
        <p className="text-xs text-gray-500 py-4 w-3/4">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <p className="text-xs text-gray-500 py-4 w-3/4">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <button className="btn bg-red-500 rounded-md text-white">Get More Info</button>
      </div>
    </div>
  );
};

export default AboutUs;
