import React from "react";

export default function Stats() {
  return (
    <div className="dark:bg-gray-900">
      <div className="pb-20">
        <div className="mx-auto bg-gradient-to-l from-indigo-600 to-indigo-700 h-96">
          <div className="mx-auto container w-full flex flex-col justify-center items-center">
            <div className="flex justify-center items-center flex-col">
              <div className="mt-20">
                <h2 className="lg:text-6xl md:text-5xl text-4xl font-black leading-10 text-white">
                  By the numbers
                </h2>
              </div>
              <div className="mt-6 mx-2 md:mx-0 text-center">
                <p className="lg:text-lg md:text-base leading-6 text-sm  text-white">
                  Hackathons attended by the team
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto container md:-mt-28 -mt-20 flex justify-center items-center">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-x-2 gap-y-2 lg:gap-x-6 md:gap-x-6 md:gap-y-6 md:gap-y-6">
            <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
              <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">
                2
              </h2>
              <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">
                Offline Hackathons
              </p>
            </div>
            <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
              <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">
                1
              </h2>
              <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">
                Online Hackathon
              </p>
            </div>
            <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
              <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">
                1
              </h2>
              <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">
                Offline Hackathon wins
              </p>
            </div>
            <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
              <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">
                0
              </h2>
              <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">
                Online Hackathon Wins
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
