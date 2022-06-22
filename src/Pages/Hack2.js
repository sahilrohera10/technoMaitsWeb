import React from "react";

export default function Hack2() {
  return (
    <div>
      <div className="bg-gray-100 overflow-y-hidden">
        <div className="mx-auto container py-12 px-4">
          <div className="w-full flex justify-center">
            <div
              style={{ borderRadius: "20px" }}
              className="w-full md:w-11/12 xl:w-10/12 bg-gradient-to-r from-indigo-500 to-indigo-700 md:py-8 md:px-8 px-5 py-4 xl:px-12 xl:py-16"
            >
              <div>
                <div className="flex flex-wrap items-center md:flex-row flex-col-reverse">
                  <div className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-6 flex-col md:block flex items-center justify-center md:pt-0 pt-4">
                    <div>
                      <h1
                        role="heading"
                        className="text-xl md:text-2xl lg:text-4xl xl:text-4xl lg:w-10/12 text-white font-black leading-6 lg:leading-10 md:text-left text-center"
                      >
                        1st Ever Offline Hackathon , MITS Gwalior
                      </h1>
                    </div>
                    {/* <button
                      role="button"
                      aria-label="Join the community"
                      className="mt-5 lg:mt-8 py-3 lg:py-4 px-4 lg:px-8 bg-white font-bold text-indigo-700 rounded-lg text-sm lg:text-lg xl:text-xl hover:bg-opacity-90  focus:ring-2 focus:ring-offset-2 focus:ring-white focus:outline-none"
                    >
                      Join the community
                    </button> */}
                  </div>
                  <div className="md:w-1/3 w-2/3">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/CTA.png"
                      alt="cartoon avatars"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:mx-auto md:container px-4">
        <div className="pt-10 md:pt-40">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center pb-12">
              <div className="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
                <div className="py-2 text-color">
                  <h1 className="text-2xl lg:text-6xl md:leading-snug tracking-tighter f-f-l font-black">
                    New Experiences
                  </h1>
                  <h2 className="text-lg lg:text-3xl lg:leading-7 md:leading-10 f-f-r py-4 md:py-8">
                    We got selected for our first ever offline hackathon at MITS
                    GWALIOR. And yes this came totally unexpected. We made an
                    Alumni Connect Portal based on MERN stack development in the
                    first round under the problem statement of Microsoft IDC
                    which got a perfect rating of 10/10. After which we were
                    invited to Gwalior for the final round. We were on the moon
                    as soon as we got their mail. And by fate, our last end sem
                    was on 13th and so scheduled the train on 15th April. So we
                    just packed up everything n reached there with full zeal on
                    the 15th. Explored the campus and the locals the first day.
                    And here came our first mistake where we compromised with
                    our sleep to get the above one done., which resulted in us
                    running on low energy the following day. On 16th, began the
                    main event which expected us to build a full working project
                    under a desired tech stack in 15-20 straight hrs. It was
                    like a nightmare for us in the beginning, competing with
                    best 21 teams and that too all senior ones but soon we just
                    got totally busy with the work, brainstorming for the
                    creative ideas, clearing the checkpoints, constant review
                    rounds and stuff. Spent that sleepless night , we just don't
                    know how but credits to the event management team for
                    handling the daunting tasks so well and perfectly. Finally
                    ended up making this project called CAMPUS CONNECT, an e-
                    commerce website aimed at bridging the supply-demand gap by
                    the students and for the students at college with powerful
                    backend and a decent frontend. Though it faced some glitches
                    in the integration part but we were just fully exhausted and
                    felt sick to even present that, far is the thought of
                    debugging that . Finally gathered some strength and gave the
                    final presentation with constant motivation given to us by
                    the awesome seniors and mentors there. At the end, though
                    the result was not in our favour owing to the some glitches
                    and the tough competition given by the senior teams. But we
                    won something much more than the prize money. It's nothing
                    but the rich experience and attitude of not giving up.
                  </h2>
                  <div className="flex items-center cursor-pointer pb-4 md:pb-0">
                    {/* <h3 className="f-f-r text-lg lg:text-2xl font-semibold underline text-indigo-700">
                      L
                    </h3> */}
                    <div className="pl-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z"
                          fill="#D53F8C"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                <img
                  className="absolute  inset-0 object-cover object-center rounded-md"
                  src="2hackSecond.jpeg"
                  alt
                />
                {/* <div className="relative z-10 bg-white rounded shadow p-6 w-10/12 -mb-20">
                  <div className="flex items-center justify-between w-full sm:w-full mb-8">
                    <div className="flex items-center">
                      <div className="p-4 bg-yellow-200 rounded-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-discount"
                          width={32}
                          height={32}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <line x1={9} y1={15} x2={15} y2={9} />
                          <circle cx="9.5" cy="9.5" r=".5" />
                          <circle cx="14.5" cy="14.5" r=".5" />
                          <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7a2.2 2.2 0 0 0 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1a2.2 2.2 0 0 0 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55 v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55 v-1" />
                        </svg>
                      </div>
                      <div className="ml-6">
                        <h3 className="mb-1 leading-5 text-gray-800 font-bold text-2xl">
                          2,330
                        </h3>
                        <p className="text-gray-600 text-sm tracking-normal font-normal leading-5">
                          Avg Sales
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center pl-3 text-green-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-trending-up"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <polyline points="3 17 9 11 13 15 21 7" />
                          <polyline points="14 7 21 7 21 14" />
                        </svg>
                        <p className="text-green-400 text-xs tracking-wide font-bold leading-normal pl-1">
                          7.2%
                        </p>
                      </div>
                      <p className="font-normal text-xs text-right leading-4 text-green-400 tracking-normal">
                        Increase
                      </p>
                    </div>
                  </div>
                  <div className="relative mb-3">
                    <hr className="h-1 rounded-sm bg-gray-200" />
                    <hr className="absolute top-0 h-1 w-7/12 rounded-sm bg-indigo-700" />
                  </div>
                  <h4 className="text-base text-gray-600 font-normal tracking-normal leading-5">
                    Yearly Goal
                  </h4>
                </div>*/}
              </div>
            </div>
          </div>
        </div>
        <div className="pb-32 pt-16">
          <div className="mx-auto">
            <div className="flex flex-wrap flex-row-reverse items-center">
              <div className="md:w-1/2 lg:w-2/3 w-full lg:pl-20 md:pl-10 sm:pl-0 pl-0">
                <div className="py-2 text-color">
                  <h1 className="text-2xl lg:text-6xl tracking-tighter md:leading-snug f-f-l font-black">
                    Learnings
                  </h1>
                  <h2 className="text-lg lg:text-3xl leading-7 md:leading-10 f-f-r py-8">
                    Major learning was - not to compromise with our sleep during
                    the hackathon period. And other important thing that we
                    should develop each and every thing by ourselves and
                    shouldn't anyone's project.
                  </h2>
                  <div className="flex items-center cursor-pointer pb-4 md:pb-0">
                    <h3 className="f-f-r text-lg lg:text-2xl font-semibold underline text-indigo-700"></h3>
                    <div className="pl-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z"
                          fill="#D53F8C"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                <img
                  className="absolute inset-0 object-cover object-center rounded-md"
                  src="2hackOne.jpeg"
                  alt
                />
                {/* <div className="relative z-10 p-4 bg-white shadow rounded mx-auto w-9/12 -mb-20">
                  <h4 className="text-gray-800 font-normal text-md leading-4 tracking-normal mb-2">
                    Invoice # 35RD87
                  </h4>
                  <p className="text-gray-600 text-xs leading-3 font-normal">
                    Assigned to: Josh Rollins
                  </p>
                  <div className="mt-4 flex items-center">
                    <span className="text-gray-600">
                      <svg
                        className="feather feather-user"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx={12} cy={7} r={4} />
                      </svg>
                    </span>
                    <p className="ml-1 text-sm text-gray-800 leading-3 tracking-normal font-normal">
                      Specter Consultancy
                    </p>
                  </div>
                  <div className="mt-3 flex items-center">
                    <span className="text-gray-600">
                      <svg
                        className="feather feather-dollar-sign"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1={12} y1={1} x2={12} y2={23} />
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    </span>
                    <p className="ml-1 text-sm text-gray-800 leading-3 tracking-normal font-normal">
                      2,354 USD
                    </p>
                  </div>
                  <button className="relative focus:outline-none mt-4 py-2 pr-10 bg-indigo-700 text-white tracking-normal text-xs pl-3 cursor-pointer hover:opacity-90">
                    View Invoice
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 m-auto mr-3 icon icon-tabler icon-tabler-arrow-right"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1={5} y1={12} x2={19} y2={12} />
                      <line x1={13} y1={18} x2={19} y2={12} />
                      <line x1={13} y1={6} x2={19} y2={12} />
                    </svg>
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
