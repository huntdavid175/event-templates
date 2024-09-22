import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

import Image from "next/image";
import React from "react";

const SamplePage = () => {
  return (
    <div>
      <div className="bg-black pb-[100vh] text-white relative ">
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
          {/* <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-8 z-50 ">
            <div>
              <p>Mica x Cody</p>
            </div>
            <div>
              <ul className="flex space-x-4 font-bold text-xs uppercase">
                <li className=" cursor-pointer hover:text-[#cda26f]">
                  Our Story
                </li>
                <li className=" cursor-pointer hover:text-[#cda26f]">
                  Run of the show
                </li>
                <li className=" cursor-pointer hover:text-[#cda26f]">Q+A</li>
                <li className=" cursor-pointer hover:text-[#cda26f]">RSVP</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold px-4 py-1 border-2 cursor-pointer border-white rounded-xl hover:border-[#cda26f] hover:text-[#cda26f]">
                RSVP BY 8/1
              </p>
            </div>
          </div> */}

          <div className="max-w-2xl mx-auto text-center mt-[350px]">
            <p className="text-5xl font-extralight font-tanker uppercase">
              ZAC & MEL
            </p>
            <p className="text-md text-gray-400 font-tanker font-light uppercase mt-8">
              AUGUST 1, 2024
            </p>
            <div className="mt-8">
              <Button className="bg-[#cda26f] font-semibold ">
                <p>RSVP NOW BY AUGUST 1</p>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* body section */}

      <div className="w-full bg-[#fcfcfc] py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row lg:space-x-24  py-8 ">
          <div className="w-full h-[450px] lg:flex-1 lg:h-[800px] relative border border-white rounded-2xl">
            <Image
              src={
                "https://uploads-ssl.webflow.com/62e945e61af79e625a6940f0/634453bc81acc8f4396b1c3f_zachmel2.jpg"
              }
              fill
              className="object-cover rounded-2xl "
              alt="image"
            />
          </div>
          <div className="w-full flex-1">
            {/* When section */}
            <div className="mb-12">
              <div className="flex flex-col gap-y-4 lg:gap-y-0 lg:flex-row lg:gap-x-8 mb-8">
                <div className="w-[3.5rem] h-auto text-[#cda26f]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 37 41"
                    fill="none"
                  >
                    <path
                      d="M32.1909 40.8131H4.19092C1.98178 40.8131 0.190918 39.0223 0.190918 36.8131V8.81311C0.190918 6.60397 1.98178 4.81311 4.19092 4.81311H8.19092V0.81311H12.1909V4.81311H24.1909V0.81311H28.1909V4.81311H32.1909C34.4001 4.81311 36.1909 6.60397 36.1909 8.81311V36.8131C36.1909 39.0223 34.4001 40.8131 32.1909 40.8131ZM4.19092 16.8131V36.8131H32.1909V16.8131H4.19092ZM4.19092 8.81311V12.8131H32.1909V8.81311H4.19092Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <p className="text-2xl lg:text-5xl font-tanker font-bold uppercase text-[#093308]">
                  WHEN
                </p>
              </div>
              <div className="space-y-8 text-[#222] font-bitter">
                <p>August 1, 2024 at 4:30PM</p>
                <p>
                  *Yes-we left this to the last minute. We know. We are sorry.
                  Please RSVP by June 24th!
                </p>
              </div>
            </div>

            {/* Location section */}
            <div className="mb-12 text-[#222]">
              <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-y-0 lg: gap-x-8 mb-8">
                <div className="w-[3.5rem] h-auto text-[#cda26f]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 40 41"
                    fill="none"
                  >
                    <path
                      d="M14.2681 40.8131L0.192871 36.1181V4.22103L13.8404 8.77549L27.7632 0.81311L39.7968 5.62697V37.6151L28.0681 32.922L14.2701 40.8131H14.2681ZM4.15327 9.724V33.2626L12.0741 35.9022V12.3537L4.15327 9.724ZM23.9552 7.54578L16.0345 12.0765V35.2448L23.9552 30.7141V7.54578ZM28.0681 5.19727L27.9156 5.28836V28.5973L35.8364 31.7656V8.30618L28.0681 5.19727Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <p className="text-2xl lg:text-5xl font-tanker font-bold uppercase text-[#093308]">
                  LOCATION
                </p>
              </div>
              <div className="space-y-8 text-[#222] font-bitter">
                <p>The Popham Family&apos;s Property near Fairplay, Colorado</p>
                <p>
                  2900 Highway 285 <br />
                  Fairplay, CO 80465
                </p>
                <p>
                  The property is located approximately 20 minutes from downtown
                  Denver. Parking is limited and shuttle will be provided.Please
                  read more details below
                </p>
              </div>
            </div>

            {/* Schedule section */}
            <div className="mb-12">
              <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 lg:gap-x-8 mb-8">
                <div className="w-[3.5rem] h-auto text-[#cda26f]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 78 70"
                    fill="none"
                  >
                    <path
                      d="M34.6917 0.31311H77.7738V8.92952H34.6917V0.31311ZM34.6917 17.5459H60.541V26.1624H34.6917V17.5459ZM34.6917 43.3952H77.7738V52.0116H34.6917V43.3952ZM34.6917 60.628H60.541V69.2444H34.6917V60.628ZM0.226074 0.31311H26.0753V26.1624H0.226074V0.31311ZM8.84249 8.92952V17.5459H17.4589V8.92952H8.84249ZM0.226074 43.3952H26.0753V69.2444H0.226074V43.3952ZM8.84249 52.0116V60.628H17.4589V52.0116H8.84249Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <p className="text-2xl lg:text-5xl font-tanker font-bold uppercase text-[#093308]">
                  SCHEDULE
                </p>
              </div>
              <div className="space-y-8 text-[#222] font-bitter">
                <p>Feel free to cime at any point past 2 PM</p>
                <div>
                  <ul className="list-disc list-inside space-y-3">
                    <li>3:30PM Hors Doevres</li>
                    <li>4:00PM All guests are asked to arrive</li>
                    <li>4:30PM Ceremony</li>
                    <li>6:00PM Reception w/live music</li>
                    <li>12::30AM - until your heart desires</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* FAQs  */}
        <div className="w-full mt-12 mb-12">
          <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl lg:text-5xl text-[#093308] text-center font-tanker font-bold mb-8">
              Get In Touch!
            </h3>
            <p className="max-w-3xl mx-auto text-center text-lg text-[#222] font-bitter">
              If you have any questions, comments, or concerns (or just want to
              get in touch!), then please do not hesitate to reach out.
            </p>

            <div className="flex flex-col lg:flex-row gap-y-16 lg:gap-y-0 lg:justify-between lg:gap-x-8 mt-16">
              <div className="flex flex-col items-center flex-1 justify-center space-y-3">
                <p className="text-2xl lg:text-5xl text-green-900 font-bold font-tanker">
                  Zana
                </p>
                <div className="flex space-x-3 items-center">
                  <Mail className="text-[#093308]" />
                  <p className="text-base lg:text-xl text-[#8c3d20] font-semibold font-bitter underline">
                    zana.pavlovic92@gmail.com
                  </p>
                </div>
                <div className="flex space-x-3 items-center">
                  <Phone className="text-[#093308]" />
                  <p className="text-base lg:text-xl text-[#8c3d20] font-semibold font-bitter underline">
                    (720)448-3172
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center flex-1 justify-center space-y-3">
                <p className="text-2xl lg:text-5xl text-green-900 text-center font-tanker font-bold">
                  JERROD
                </p>
                <div className="flex space-x-3 items-center">
                  <Mail className="text-[#093308]" />
                  <p className="text-base lg:text-xl text-[#8c3d20] font-semibold font-bitter underline">
                    jkpopham@gmail.com
                  </p>
                </div>

                <div className="flex space-x-3 items-center">
                  <Phone className="text-[#093308]" />
                  <p className="text-base lg:text-xl text-[#8c3d20] font-semibold font-bitter underline">
                    (303)448-3172
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SamplePage;
