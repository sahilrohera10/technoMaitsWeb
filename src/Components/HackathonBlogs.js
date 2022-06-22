import React from "react";
import { Link } from "react-router-dom";

export default function HackathonBlogs() {
  return (
    <>
      <div className="py-24 flex-col items-center justify-center  px-4">
        <h1
          role="heading"
          className="text-center xl:text-5xl md:text-4xl text-2xl font-bold text-gray-800"
        >
          Read About Our Latest Hackathons
        </h1>
        {/* <p
          role="contentinfo"
          className="text-base leading-normal text-center text-gray-600 mt-4"
        >
          Whether article spirits new her covered hastily sitting her. Money
          witty books nor son
        </p> */}
        <div className="2xl:container 2xl:mx-auto flex flex-wrap items-start justify-center pt-6 gap-6">
          <div className="flex lg:flex-col sm:flex-row flex-col items-start lg:gap-0 gap-6 lg:w-96 w-auto">
            <div>
              <img src="campusConnect.png" alt="woman smiling" />
              <h2 className="text-xl font-semibold leading-5 mt-8 text-gray-800">
                Hackoverflow 4.0 offline Hackathon , Chandigarh University
              </h2>
              <div className="mt-6 flex items-center cursor-pointer">
                <Link to="hack3">
                  <p className="pr-3 text-base font-medium leading-4 underline text-gray-800">
                    5 min read
                  </p>
                </Link>
                <Link to="hack3">
                  <svg
                    width={16}
                    height={10}
                    viewBox="0 0 16 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5H15"
                      stroke="#1F2937"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11 9L15 5"
                      stroke="#1F2937"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11 1L15 5"
                      stroke="#1F2937"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
              <p className="text-base mt-4 italic font-italic leading-4 text-gray-600">
                23, Feburary 2021
              </p>
            </div>
            {/* <div className="lg:mt-10">
              <img
                src="https://i.ibb.co/WkCydhJ/blog-4.png"
                alt="coffe pouring"
              />
              <h2 className="text-xl font-semibold leading-5 mt-8 text-gray-800">
                1st ever Offline Hackathon, MITS
              </h2>
              <div className="mt-6 flex items-center cursor-pointer">
                <p className="pr-3 text-base font-medium leading-4 underline text-gray-800">
                  5 min read
                </p>
                <svg
                  width={16}
                  height={10}
                  viewBox="0 0 16 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5H15"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 9L15 5"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 1L15 5"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-base mt-4 italic font-italic leading-4 text-gray-600">
                23, Feburary 2021
              </p>
            </div> */}
          </div>
          <div className="flex lg:flex-col sm:flex-row flex-col items-start lg:gap-0 gap-6 lg:w-96 w-auto">
            <div>
              <img src="Alumni.png" alt="plant held by a man" />
              <h2 className="text-xl font-semibold leading-5 mt-8 text-gray-800">
                1st Ever Offline Hackathon , MITS Gwalior
              </h2>
              <div className="mt-6 flex items-center cursor-pointer">
                <Link to="hack2">
                  <p className="pr-3 text-base font-medium leading-4 underline text-gray-800">
                    5 min read
                  </p>
                </Link>
                <Link to="hack2">
                  <svg
                    width={16}
                    height={10}
                    viewBox="0 0 16 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5H15"
                      stroke="#1F2937"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11 9L15 5"
                      stroke="#1F2937"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11 1L15 5"
                      stroke="#1F2937"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
              <p className="text-base mt-4 italic font-italic leading-4 text-gray-600">
                23, Feburary 2021
              </p>
            </div>
            {/* <div className="lg:mt-10">
              <img
                src="https://i.ibb.co/3pMc5WS/blog-5.png"
                alt="lady with plant"
              />
              <h2 className="text-xl font-semibold leading-5 mt-8 text-gray-800">
                Busting myths about hair
              </h2>
              <div className="mt-6 flex items-center cursor-pointer">
                <p className="pr-3 text-base font-medium leading-4 underline text-gray-800">
                  5 min read
                </p>
                <svg
                  width={16}
                  height={10}
                  viewBox="0 0 16 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5H15"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 9L15 5"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 1L15 5"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-base mt-4 italic font-italic leading-4 text-gray-600">
                23, Feburary 2021
              </p>
            </div> */}
          </div>
          <div className="flex xl:flex-col sm:flex-row flex-col items-start xl:gap-0 gap-6 xl:w-96 w-auto">
            <div>
              <img src="make4thon.png" alt="Delighful breakfast" />
              <h2 className="text-xl font-semibold leading-5 mt-8 text-gray-800">
                1st Hackathon (Online) , Thappar Patiala
              </h2>
              <div className="mt-6 flex items-center cursor-pointer">
                <Link to="hack1">
                  <p className="pr-3 text-base font-medium leading-4 underline text-gray-800">
                    5 min read
                  </p>
                </Link>
                <Link to="hack1">
                  <svg
                    width={16}
                    height={10}
                    viewBox="0 0 16 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5H15"
                      stroke="#1F2937"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11 9L15 5"
                      stroke="#1F2937"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11 1L15 5"
                      stroke="#1F2937"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
              <p className="text-base mt-4 italic font-italic leading-4 text-gray-600">
                23, Feburary 2021
              </p>
            </div>
            {/* <div className="xl:mt-10">
              <img
                src="https://i.ibb.co/c8dPSYB/blog-6.png"
                alt="hats with image frame in middle"
              />
              <h2 className="text-xl font-semibold leading-5 mt-8 text-gray-800">
                Busting myths about hair
              </h2>
              <div className="mt-6 flex items-center cursor-pointer">
                <p className="pr-3 text-base font-medium leading-4 underline text-gray-800">
                  5 min read
                </p>
                <svg
                  width={16}
                  height={10}
                  viewBox="0 0 16 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5H15"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 9L15 5"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 1L15 5"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-base mt-4 italic font-italic leading-4 text-gray-600">
                23, Feburary 2021
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
