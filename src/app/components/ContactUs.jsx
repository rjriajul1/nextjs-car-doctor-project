import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";

const ContactUs = () => {
  return (
    <div className="bg-black rounded-2xl text-white mt-30 mb-30">
      <div className="flex flex-wrap gap-6 md:justify-around lg:p-20 p-12">
        <div className="flex items-center gap-4">
          <p>
            <FaCalendarAlt size={28} />
          </p>
          <div>
            <p className="text-gray-300 md:text-center">We are open monday-friday</p>
            <p className="font-bold text-2xl">7:00 am - 9:00 pm</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p>
            <MdAddIcCall size={28}/>
          </p>
          <div>
            <p className="text-gray-300 md:text-center">Have a question?</p>
            <p className="font-bold text-2xl">+2546 251 2658 </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p>
            <FaMapMarkerAlt size={28} />
          </p>
          <div>
            <p className="text-gray-300 md:text-center ">Need a repair? our address</p>
            <p className="font-bold text-2xl">Liza Street, New York</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
