"use client";

import HomeCard from "@/components/HomeCard";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <>
      {/* wrap konten */}
      <div className="px-[160px] py-[70px] bg-gradient-to-b from-gray-300 to-white w-full h-full">
        {/* konten 1 */}
        <div className="relative flex flex-row">
          {/* Tulisan AUDI di belakang */}
          <div className="absolute top-0 left-0 w-full h-full z-10 flex justify-center items-start">
            <Image
              src="/Audi.png"
              alt="logo"
              width={500}
              height={500}
              className="w-auto"
            />
          </div>

          {/* kiri */}
          <div className=" w-2/5 relative z-10 py-[48px]">
            <h1 className="text-[52px] font-bold text-black flex justify-start items-center">
              Find Your Dream
            </h1>
            <div className="flex flex-row gap-[41px] justify-start ">
              <h2 className="text-[72px] font-bold text-red-700">CAR</h2>
              <div className="flex justify-center items-center">
                <button
                  onClick={() => (window.location.href = "/home/explore")}
                  className="flex items-center justify-center px-4 py-2 bg-indigo-900 text-white rounded-full shadow-md hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50
                "
                >
                  Click Now
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* kanan */}
          <div className="relative w-3/5 z-10 py-[20px]">
            <Image
              src="/home.png"
              width={500}
              height={400}
              alt="gambar"
              className="w-full h-full object-contain overflow-hidden z-20"
            />
          </div>
        </div>

        {/* konten 2 */}
        <div className=" flex flex-row justify-center items-center">
          <hr className="border-1 border-slate-500 w-full" />
          <h1 className="text-[64px] font-bold text-black">Brand`s</h1>
          <hr className="border-1 border-slate-500 w-full" />
        </div>
        {/* konten 3 */}
        <div className="flex flex-row gap-[49px] justify-center items-center">
          <Image src="/logo-honda.png" alt="" width={152} height={130} />
          <Image src="/logo-ferari.png" alt="" width={152} height={130} />
          <Image src="/logo-tesla.png" alt="" width={152} height={130} />
          <Image src="/logo-toyota.png" alt="" width={152} height={130} />
          <Image src="/logo-honda.png" alt="" width={152} height={130} />
        </div>
      </div>
      {/* konten 1-2 */}
      <div className="px-[210px] py-[80px]">
        <div className="flex flex-col gap-[40px]">
          <div className=" flex flex-row justify-center items-center">
            <hr className="border-1 border-slate-500 w-1/12" />
            <h1 className="text-[36px] font-bold text-gray-500 text-nowrap">
              About Us
            </h1>
            <hr className="border-1 border-slate-500 w-1/12" />
          </div>
          <div className="flex justify-center items-center text-gray-500">
            we Provide many of the best servises for you and you will get the
            best benefits here
          </div>
        </div>
        {/* card */}
        <div className="flex flex-row gap-[27px] mt-[80px]">
          <HomeCard />
          <HomeCard />
          <HomeCard />
        </div>
      </div>
    </>
  );
}
