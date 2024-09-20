import Image from "next/image";
import React from "react";

const SamplePage = () => {
  return (
    <div>
      <div className="bg-black pb-[95vh] text-white relative">
        <Image
          src={
            "https://micahandcody.com/wp-content/uploads/2024/05/Exterior-Main.jpg"
          }
          fill
          alt="image"
        />
        <div className="absolute top-0 left-0 right-0 w-full h-full bg-black opacity-50 z-40" />
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

          <div className="max-w-2xl mx-auto text-center mt-[250px]">
            <p className="text-xl font-semibold uppercase">Save Our Date</p>
            <p className="text-7xl font-bold">We are Getting Married!</p>
            <p className="text-xl font-semibold uppercase">
              Saturday, September 21 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SamplePage;
