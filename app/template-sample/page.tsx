import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const SamplePage = () => {
  return (
    <div>
      <div className="bg-black pb-[100vh] text-white relative">
        <Image
          src={
            "https://uploads-ssl.webflow.com/62e945e61af79e625a6940f0/634453bc81acc8f4396b1c3f_zachmel2.jpg"
          }
          fill
          className="object-cover"
          alt="image"
        />
        <div className="absolute top-0 left-0 right-0 w-full h-full bg-black opacity-30 z-40" />
        {/* header section  */}
        <div className="absolute top-0 left-0 right-0 w-full h-full z-50">
          {/* navbar  */}
          <div className="max-w-7xl mx-auto flex justify-between items-center py-8 z-50">
            <div>
              <p>Mica x Cody</p>
            </div>
            <div>
              <ul className="flex space-x-4 font-bold text-xs uppercase">
                <li>Our Story</li>
                <li>Run of the show</li>
                <li>Q+A</li>
                <li>RSVP</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold px-4 py-1 border-2 border-white rounded-xl">
                RSVP BY 8/1
              </p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto text-center mt-[350px]">
            <p className="text-5xl font-extralight uppercase">ZAC & MEL</p>
            <p className="text-sm font-light uppercase">
              Saturday, September 21 2024
            </p>
            <div className="mt-8">
              <Button className="bg-[#cda26f] font-semibold ">
                <p>RSVP NOW BY AUGUST 1</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SamplePage;
