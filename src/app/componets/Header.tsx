"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import OpenSideNav from "./OpenSideNav";
import { useAppSelector, useAppDispatch } from "../../lib/hooks";
import { visible } from "@/lib/features/visiblity/visiblitySlice";
import { addtocart } from "@/lib/features/order/orderSlice";
import { useRef } from "react";

export default function TopHeader() {
  const pathname = usePathname();
  const str = pathname.replace("/", ""); //regex
  // console.log(str);
  // console.log(pathname);
  const initialized = useRef(false);
  initialized.current = true;
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.order.value);

  console.log(cartItems);

  return (
    <>
      {/* //large than md screen */}
      <div className="hidden max-md:block max-lg:block max-xl:block max-2xl:block max-sm:hidden ">
        <header className="text-white flex flex-row gap-4 fixed top-0 left-0 right-0 h-12 bg-slate-700 z-10">
          <div className="flex gap-1 justify-center items-center border-r-2 rounded-lg p-2">
            <div
              className="cursor-pointer "
              onClick={() => dispatch(visible())}
            >
              <Image
                alt="mlogo"
                src="cake-logo.svg"
                width={25}
                height={25}
                style={{ objectFit: "contain" }}
              />
            </div>
            <Link href="/" className="font-bold text-xl">
              <div>Baker&apos;s Edge</div>
            </Link>
          </div>

          <nav className="flex items-center justify-end ">
            <Link
              href="/"
              className={clsx("px-2 hover:bg-blue-900", {
                "font-bold hover:bg-blue-900": str == "",
              })}
            >
              Home
            </Link>
            {/* <Link
              href="/Profile"
              className={clsx("px-2  hover:bg-blue-900", {
                "font-bold hover:bg-blue-900": str === "Profile",
              })}
            >
              Profile
            </Link>
            <Link
              href="/Activity"
              className={clsx("px-2  hover:bg-blue-900", {
                " font-bold hover:bg-blue-900": str === "Activity",
              })}
            >
              Activity
            </Link> */}
          </nav>
          {/* Search Icon */}
          <div className="flex-auto gap-1 flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="form-input rounded-full text-black h-8 flex-1"
            />
            <button>
              <Image
                src="search-icon.svg"
                alt="search-mic"
                width={18}
                height={18}
                style={{ objectFit: "contain" }}
              />
            </button>
            <button>
              <Image
                src="mic.svg"
                alt="search-mic"
                width={18}
                height={18}
                style={{ objectFit: "contain" }}
              />
            </button>
          </div>
          <div className="flex gap-2 items-center mr-2">
            <Link href="/cart" className="relative">
              <Image
                src="cart-icon.svg"
                alt="cart-icon"
                width={25}
                height={25}
                style={{ objectFit: "contain" }}
              />
              <div className="absolute -top-2 right-0 rounded-full">
                {cartItems.length}
              </div>
            </Link>
            <Link href="/account">
              <Image
                src="profile-photo-icon.svg"
                alt="profile-icon"
                width={25}
                height={25}
                style={{ objectFit: "contain" }}
              />
            </Link>
          </div>
        </header>
      </div>
      {/* //small sm */}
      <div className="hidden max-sm:block ">
        <header className="text-white flex justify-between fixed top-0 left-0 right-0 h-12 items-center gap-1 z-10 bg-slate-600 px-2">
          {/* logo in sm */}
          <div className="cursor-pointer flex-initial w-[140px] flex flex-row gap-2  mr-2 border-r-2 rounded-lg">
            <Image
              alt="menulogo"
              src="menu.svg"
              width={25}
              height={25}
              style={{ objectFit: "contain" }}
              onClick={() => dispatch(visible())}
            />
            <Link href="/">
              <p className="text-nowrap">Baker&apos;s Edge</p>
            </Link>
          </div>

          {/* header left in sm */}
          <div className="flex-initial w-18 flex gap-4 items-center">
            <Link href="/cart" className="relative">
              <Image
                src="cart-icon.svg"
                alt="search-mic"
                width={25}
                height={25}
                style={{ objectFit: "contain" }}
              />
              <div className="absolute -top-2 right-0 rounded-full">
                {cartItems.length}
              </div>
            </Link>
            <Link href="/account">
              <Image
                src="profile-photo-icon.svg"
                alt="profile-photo"
                width={25}
                height={25}
                style={{ objectFit: "contain" }}
              />
            </Link>
          </div>
        </header>

        {/* bottom Navbar in sm */}
        <nav className="flex items-center justify-around fixed bottom-0 left-0 right-0 z-10 h-12 bg-slate-600">
          <Link
            href="/"
            className={clsx("px-2 hover:bg-blue-700", {
              "font-bold bg-blue-700": str == "",
            })}
          >
            Home
          </Link>
          <Link
            href="/cart"
            className={clsx("px-2 hover:bg-blue-900", {
              "font-bold bg-blue-700": str === "cart",
            })}
          >
            Cart
          </Link>
          <Link
            href="/order"
            className={clsx("px-2 hover:bg-blue-900", {
              " font-bold bg-blue-700": str === "order",
            })}
          >
            Order
          </Link>
          <Link
            href="/account"
            className={clsx("px-2 hover:bg-blue-900", {
              " font-bold bg-blue-700": str === "account",
            })}
          >
            Account
          </Link>
        </nav>
      </div>
      <OpenSideNav />
      {/* <SideNav /> */}
    </>
  );
}

{
  /* search input btn mic header in sm */
}
//  <div className="flex-auto justify-center flex items-center">
//  <div className="flex flex-row gap-1">
//    <input
//      type="text"
//      placeholder="Search"
//      className="form-input rounded-full text-black h-8 flex-auto w-28"
//    />
//    <button className="flex-none">
//      <Image
//        className="hover:border-[1px] border-gray-100"
//        src="search-icon.svg"
//        alt="search-icon"
//        width={25}
//        height={18}
//        style={{ objectFit: "contain" }}
//      />
//    </button>
//    {/* <button className="flex-none">
//      <Image
//        className="hover:animate-ping"
//        src="mic.svg"
//        alt="search-mic"
//        width={25}
//        height={18}
//        style={{ objectFit: "contain" }}
//      />
//    </button> */}
//  </div>
// </div>
