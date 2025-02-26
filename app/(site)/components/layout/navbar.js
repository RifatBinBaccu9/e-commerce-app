"use client";
import React, { useState } from "react";
import Button from "../common/button";
import {
  FaArrowRightLong,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { CiHeart, CiLocationOn } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaSearch, FaUser } from "react-icons/fa";
import { GoGitCompare } from "react-icons/go";
import { FaBagShopping } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import { Input } from "@/components/ui/input";
import MyTooltip from "../common/tooltip";
import Navigationmenu from "@/components/ui/navigationmenu";
import Link from "next/link";
import Shoppingcart from "@/components/ui/shoppingcart";
const Navbar = () => {
  
  const [shoppingCardModalOpen, setShoppingCardModalOpen] = useState(false);

  return (
    <header>
      <div className="md:py-4 py-2 bg-black/90 public-sans">
        <div className="container flex justify-between items-center">
          <div className="flex md:gap-2 gap-1 items-center">
            <Button name="Black" className="bg-yellow-300 -rotate-3" />
            <h3 className="text-white md:text-lg text-base font-bold">
              Friday
            </h3>
          </div>
          <div className="flex items-center sm:gap-2 gap-1">
            <span className="text-white sm:text-lg text-sm">Upto</span>
            <span className="text-yellow-500 sm:text-[40px] text-base font-bold">
              59%
            </span>
            <span className="text-white sm:text-[26px] text-sm font-medium">
              Off
            </span>
          </div>
          <div>
            <Button
              name={
                <span className="flex gap-2 items-center ">
                  Book Now <FaArrowRightLong />
                </span>
              }
              className="bg-yellow-500 cursor-pointer hover:bg-yellow-600"
            />
          </div>
        </div>
      </div>

      <div className=" bg-[#1b6392] md:py-4 py-2 border-b border-b-white border-opacity-30">
        <div className="flex sm:flex-row flex-col items-center justify-between container">
          <p className="text-white md:text-base text-sm">
            Welcome to Clicon online eCommerce store.{" "}
          </p>
          <div>
            <div className="flex items-center gap-2 text-white">
              <p>Follow us: </p>
              <FaFacebook className=" cursor-pointer"/>
              <FaTwitter className=" cursor-pointer"/>
              <FaPinterest className=" cursor-pointer"/>
              <FaYoutube className=" cursor-pointer"/>
              <FaInstagram className=" cursor-pointer"/>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-[#1b6392] md:py-4 py-2 border-b border-b-white">
        <div className="flex items-center justify-between container gap-4">
          <Link href={'/'} className="flex items-center gap-2 text-white font-bold text-3xl">
            <FaBagShopping className="text-yellow-500" />
            <span>Normal Shop</span>
          </Link>
          <div className="bg-white sm:flex hidden items-center gap-2 px-2 w-[653px] rounded-[4px]">
            <Input
              onChange={(e) => console.log(e.target.value)}
              placeholder="Search for anything..."
              className="border-none"
            />
            <div className="h-full cursor-pointer">
              <FaSearch className="" size={20} />
            </div>
          </div>

          <div className="z-50 relative flex items-center gap-2 text-white md:text-xl text-lg font-semibold ">
            <FaSearch className=" sm:hidden cursor-pointer" />
            <FiShoppingCart className="cursor-pointer " onClick={()=>setShoppingCardModalOpen(!shoppingCardModalOpen)}/>
            <CiHeart className="cursor-pointer text-2xl" />
            <Link href={"/loginsignup"} className=" "><FaUser className="cursor-pointer " />
            </Link>
            {
              shoppingCardModalOpen && <div  className={`absolute top-9 -right-[2px] z-40`}>
              <Shoppingcart />
            </div> 
            }

          </div>
      
        </div>
      </div>
      <div className="  md:py-4 py-2 border-b border-b-gray-500 border-opacity-15">
        <div className="flex justify-between items-center flex-wraps container gap-4">
          <div className="flex gap-4 justify-between  flex-wrap">
            {/* <SingleCategoryMenu /> */}
            <Navigationmenu />
            <div className="flex lg:gap-4 gap-4 items-center">
              <div className="bottom_nav_item">
                <MyTooltip
                  title={<CiLocationOn className="md:text-lg text-2xl" />}
                  content={"Track Order"}
                />
                <p className="md:flex hidden">Track Order</p>
              </div>
              <div className="bottom_nav_item">
                <MyTooltip
                  title={<GoGitCompare className="md:text-lg text-2xl" />}
                  content={"Compare"}
                />
                <p className="md:flex hidden">Compare</p>
              </div>
              <Link href={'/customersupport'} className="bottom_nav_item">
                <MyTooltip
                  title={
                    <MdOutlineSupportAgent className="md:text-lg text-2xl" />
                  }
                  content={"Customer Support"}
                />
                <p className="md:flex hidden">Customer Support</p>
              </Link>
               <Link href={"/fags"}>
              <div className="bottom_nav_item">
               <MyTooltip
                  title={
                    <IoIosInformationCircleOutline className="md:text-lg text-2xl" />
                  }
                  content={"Need Help?"}
                />
                <p className="md:flex hidden">Need Help?</p>
               
              </div>
               </Link>
            </div>
          </div>
          <div className="bottom_nav_item sm:!flex !hidden">
            <LuPhoneCall />
            <p>+8801998311602</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
