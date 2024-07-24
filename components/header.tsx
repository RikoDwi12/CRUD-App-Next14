"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = React.useState<boolean>(false); //state
  const sideBarClick = () => {
    if (sidebarOpen === false) {
      setSidebarOpen(true);
    } else {
      setSidebarOpen(false);
    }
  };

  const [lang, setLang] = React.useState<boolean>(false);
  const changeLang = () => {
    if (lang === false) {
      setLang(true);
    } else {
      setLang(false);
    }
  };

  const [menu, setMenu] = React.useState<boolean>(false);
  const changeMenu = () => {
    if (menu === false) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };

  return (
    <>
      {/* header */}
      <header className="bg-[#2C2C2C] px-[64px] h-[72px]  justify-between lg:flex hidden fixed w-full z-50">
        <div className="flex items-center gap-2">
          <div className="bg-white rounded-full">
            <Image src="/logo.png" alt="logo" width={50} height={50} />
          </div>
          <div className="text-white">Mobil`Ins</div>
        </div>
        <div className=" flex flex-row gap-4 justify-center items-center">
          <div className="  text-nowrap cursor-pointer">
            <Link href={"/explore"}>
              <p className="text-nowrap text-[16px]">Explore</p>
            </Link>
          </div>
          <div className=" text-nowrap text-[16px]">
            <p>About</p>
          </div>
          <div className="text-nowrap text-[16px]">
            <Link
              href="http://wa.me/6287887997888"
              target="_blank"
              className="text-white cursor-pointer"
            >
              Contact Us
            </Link>
          </div>
          <div className=" text-nowrap flex justify-center items-center rounded-full object-cover overflow-hidden">
            <div className="bg-white"></div>
          </div>

          {/* <div className=" rounded-full object-cover overflow-hidden w-[40px] h-[40px] ">
            <Image
              src="https://akcdn.detik.net.id/community/media/visual/2021/04/22/zaitaku-iyada-2_11.jpeg"
              alt="image"
              width={40}
              height={40}
              className="w-full h-full"
            />
          </div> */}
        </div>
      </header>

      <header className="bg-[#2C2C2C]  flex lg:hidden fixed w-full h-[54px] z-50">
        <div className="flex flex-grow  px-[8px] justify-between items-center gap-4">
          <div className=""></div>
          <div className=" flex flex-grow justify-center rounded-full object-cover overflow-hidden w-full ">
            <div className="bg-white rounded-full w-full"></div>
          </div>
          <div className=" flex object-cover ">
            <button>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 7.62367C0.0312451 7.36669 0.0574233 7.10888 0.0941574 6.85275C0.296831 5.37359 0.918783 3.98387 1.8861 2.84873C3.07046 1.44533 4.56262 0.52836 6.36175 0.173595C8.86684 -0.321722 11.1363 0.242177 13.1098 1.87969C14.5268 3.0549 15.4152 4.57218 15.7914 6.37521C15.8999 6.89678 15.9308 7.43358 16.0025 7.99494H15.7454H0.204782C0.137225 7.99494 0.0700903 7.99833 0.00253338 8.00002L0 7.62367Z"
                  fill="#ED1C24"
                />
                <path
                  d="M16 8.37636C15.9688 8.63333 15.9426 8.89115 15.9058 9.14727C15.7033 10.6265 15.0812 12.0163 14.1135 13.1513C12.9312 14.5551 11.4374 15.4717 9.63783 15.8269C7.13105 16.3217 4.86198 15.7578 2.88848 14.1208C1.47316 12.9451 0.584789 11.4304 0.211115 9.62481C0.102602 9.10324 0.0717792 8.56644 0 8.00508H0.257138H15.7978C15.8653 8.00508 15.9324 8.00169 16 8V8.37636Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <div className=" flex object-cover ">{/* <DownIcon /> */}</div>
        </div>
      </header>

      {sidebarOpen === true && (
        <div className="fixed bg-[#2C2C2C] sm:w-1/3 left-0 top-[54px] h-full lg:hidden z-50 ">
          <div className="bg-[#2C2C2C] flex flex-col ">
            <div className="p-[20px] gap-[20px] "></div>
            <div className="bg-[#2C2C2C]">
              <Link href={"/explore"}>
                <p className="text-white p-[24px] text-[16px] ">Explore</p>
              </Link>
            </div>
            <div className="bg-[#2C2C2C]">
              <p className="text-white p-[24px] text-[16px]">Contact Us</p>
            </div>
          </div>
        </div>
      )}

      {lang === true && (
        <div className="fixed bg-[#2C2C2C] w-[125px] right-[120px] top-[54px] h-[70px] hidden lg:flex justify-start items-center gap-[8px]">
          <Image
            src="/englosh.svg"
            alt="logo"
            width={16}
            height={16}
            className="w-[16px] h-[16px] ml-2"
          />
          <div className="flex justify-center">English</div>
        </div>
      )}

      {lang === true && (
        <div className="fixed flex pl-3 bg-[#2C2C2C] w-[70px] right-[5px] top-[54px] h-[30px] lg:hidden">
          <Image
            src="/englosh.svg"
            alt="logo"
            width={16}
            height={16}
            className="w-[16px] h-[16px] ml-2"
          />
        </div>
      )}
    </>
  );
}
