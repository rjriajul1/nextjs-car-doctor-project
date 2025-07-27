import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Services = async () => {
  const res = await fetch("http://localhost:3000/services.json");
  const data = await res.json();
  return (
    <div>
      <h4 className="text-red-500 text-center font-bold py-5">Service</h4>
      <h1 className="font-bold text-5xl text-center py-5">Our Services Area</h1>
      <p className="text- text-center mb-12">
        the majority have suffered alteration in some form, by injected humour,
        or randomised <br /> words which don't look even slightly believable.{" "}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-6">
        {data.map((item) => (
          <div key={item._id}>
            <div className="border p-6 rounded-md border-gray-300 ">
              <img
                className="rounded-2xl w-full h-45 object-cover"
                src={item.img}
                alt="does not support this image"
              />
              <h1 className="font-bold text-2xl py-4">{item.title}</h1>
              <div className="flex justify-between items-center">
                <p className="text-red-500">price: ${item.price}</p>
                <p><FaLongArrowAltRight color="red" size={20}/></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
