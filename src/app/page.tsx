"use client";
import Link from "next/link";
import StudentList from "./ui/StudentList";
import Image from "next/image";
import { useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addtocart } from "@/lib/features/order/orderSlice";

export default function Home() {
  const initialized = useRef(false);
  initialized.current = true;
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.order.value);

  return (
    <>
      <div className="text-gray-600 body-font  z-0">
        <div className="container px-5 py-24 mx-auto">
          <div className="grid grid-cols-4 max-sm:grid-cols-2 -m-4">
            <div className="p-4 w-full">
              <Link
                href="/products/1"
                className="h-48 rounded overflow-hidden relative"
              >
                <Image
                  src="/image.png"
                  alt="image"
                  width={420}
                  height={260}
                  priority
                />
                <div className="absolute bottom-2 right-2 bg-slate-600 text-white text-center text-xs font-thin w-10">
                  1Kg
                </div>
              </Link>
              <div className="mt-4">
                <h2 className="text-gray-100 text-sm tracking-widest title-font mb-1">
                  Pine Apple Forest
                </h2>
                <p className="text-xs text-pretty font-light truncate">
                  Lorem ipsum dolor adipisicing elit. Lorem ipsum, dolor sit
                  amet consectetur
                </p>
                <Image
                  src="rating-five.svg"
                  alt="rating"
                  width={50}
                  height={10}
                />
                <div className="flex flex-row justify-between items-center ">
                  <p>$16.00</p>
                  <button
                    className="text-sm font-medium border-2 border-red-500 bg-red-700 text-white px-2 hover:bg-red-500"
                    onClick={() => dispatch(addtocart("Pine Apple Forest"))}
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4 w-full">
              <Link href="/" className="h-48 rounded overflow-hidden relative">
                <Image
                  src="/image.png"
                  alt="image"
                  width={420}
                  height={260}
                  priority
                />
                <div className="absolute bottom-2 right-2 bg-slate-600 text-white text-center text-xs font-thin w-10">
                  500g
                </div>
              </Link>
              <div className="mt-4">
                <h2 className="text-gray-100 text-sm tracking-widest title-font mb-1">
                  Black Forest
                </h2>
                <p className="text-xs text-pretty font-light truncate">
                  Lorem ipsum dolor adipisicing elit. Lorem ipsum, dolor sit
                  amet consectetur
                </p>
                <Image
                  src="rating-five.svg"
                  alt="rating"
                  width={50}
                  height={10}
                />
                <div className="flex flex-row justify-between items-center ">
                  <p>$16.00</p>
                  <button
                    className="text-sm font-medium border-2 border-red-500 bg-red-700 text-white px-2 hover:bg-red-500"
                    onClick={() => dispatch(addtocart("Black Forest"))}
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4 w-full">
              <a className="h-48 rounded overflow-hidden relative">
                <Image
                  src="/image.png"
                  alt="image"
                  width={420}
                  height={260}
                  priority
                />
                <div className="absolute bottom-2 right-2 bg-slate-600 text-white text-center text-xs font-thin w-10">
                  1Kg
                </div>
              </a>
              <div className="mt-4">
                <h2 className="text-gray-100 text-sm tracking-widest title-font mb-1">
                  Fruit Cake
                </h2>
                <p className="text-xs text-pretty font-light truncate">
                  Lorem ipsum dolor adipisicing elit. Lorem ipsum, dolor sit
                  amet consectetur
                </p>
                <Image
                  src="rating-five.svg"
                  alt="rating"
                  width={50}
                  height={10}
                />
                <div className="flex flex-row justify-between items-center ">
                  <p>$16.00</p>
                  <button
                    className="text-sm font-medium border-2 border-red-500 bg-red-700 text-white px-2 hover:bg-red-500"
                    onClick={() => dispatch(addtocart("Fruit Cake"))}
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4 w-full">
              <a className="h-48 rounded overflow-hidden relative">
                <Image
                  src="/image.png"
                  alt="image"
                  width={420}
                  height={260}
                  priority
                />
                <div className="absolute bottom-2 right-2 bg-slate-600 text-white text-center text-xs font-thin w-10">
                  250g
                </div>
              </a>
              <div className="mt-4">
                <h2 className="text-gray-100 text-sm tracking-widest title-font mb-1">
                  Pine Apple Forest
                </h2>
                <p className="text-xs text-pretty font-light truncate">
                  Lorem ipsum dolor adipisicing elit. Lorem ipsum, dolor sit
                  amet consectetur
                </p>
                <Image
                  src="rating-five.svg"
                  alt="rating"
                  width={50}
                  height={10}
                />
                <div className="flex flex-row justify-between items-center ">
                  <p>$16.00</p>
                  <button className="text-sm font-medium border-2 border-red-500 bg-red-700 text-white px-2 hover:bg-red-500">
                    Order
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4 w-full">
              <a className="h-48 rounded overflow-hidden relative">
                <Image
                  src="/image.png"
                  alt="image"
                  width={420}
                  height={260}
                  priority
                />
                <div className="absolute bottom-2 right-2 bg-slate-600 text-white text-center text-xs font-thin w-10">
                  500g
                </div>
              </a>
              <div className="mt-4">
                <h2 className="text-gray-100 text-sm tracking-widest title-font mb-1">
                  Cheese Cake
                </h2>
                <p className="text-xs text-pretty font-light truncate">
                  Lorem ipsum dolor adipisicing elit. Lorem ipsum, dolor sit
                  amet consectetur
                </p>
                <Image
                  src="rating-five.svg"
                  alt="rating"
                  width={50}
                  height={10}
                />
                <div className="flex flex-row justify-between items-center ">
                  <p>$16.00</p>
                  <button
                    className="text-sm font-medium border-2 border-red-500 bg-red-700 text-white px-2 hover:bg-red-500"
                    onClick={() => dispatch(addtocart("Cheese Cake"))}
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4 w-full">
              <a className="h-48 rounded overflow-hidden relative">
                <Image
                  src="/image.png"
                  alt="image"
                  width={420}
                  height={260}
                  priority
                />
                <div className="absolute bottom-2 right-2 bg-slate-600 text-white text-center text-xs font-thin w-10">
                  1Kg
                </div>
              </a>
              <div className="mt-4">
                <h2 className="text-gray-100 text-sm tracking-widest title-font mb-1">
                  Mango Cake
                </h2>
                <p className="text-xs text-pretty font-light truncate">
                  Lorem ipsum dolor adipisicing elit. Lorem ipsum, dolor sit
                  amet consectetur
                </p>
                <Image
                  src="rating-five.svg"
                  alt="rating"
                  width={50}
                  height={10}
                />
                <div className="flex flex-row justify-between items-center ">
                  <p>$16.00</p>
                  <button
                    className="text-sm font-medium border-2 border-red-500 bg-red-700 text-white px-2 hover:bg-red-500"
                    onClick={() => dispatch(addtocart("Mango Cake"))}
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4 w-full">
              <a className="h-48 rounded overflow-hidden relative">
                <Image
                  src="/image.png"
                  alt="image"
                  width={420}
                  height={260}
                  priority
                />
                <div className="absolute bottom-2 right-2 bg-slate-600 text-white text-center text-xs font-thin w-10">
                  1Kg
                </div>
              </a>
              <div className="mt-4">
                <h2 className="text-gray-100 text-sm tracking-widest title-font mb-1">
                  Rasmalai Cake
                </h2>
                <p className="text-xs text-pretty font-light truncate">
                  Lorem ipsum dolor adipisicing elit. Lorem ipsum, dolor sit
                  amet consectetur
                </p>
                <Image
                  src="rating-five.svg"
                  alt="rating"
                  width={50}
                  height={10}
                  style={{ objectFit: "contain" }}
                />
                <div className="flex flex-row justify-between items-center ">
                  <p>$10.00</p>
                  <button
                    className="text-sm font-medium border-2 border-red-500 bg-red-700 text-white px-2 hover:bg-red-500"
                    onClick={() => dispatch(addtocart("Rasmalai Cake"))}
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4 w-full">
              <a className="h-48 rounded overflow-hidden relative">
                <Image
                  src="/image.png"
                  alt="image"
                  width={420}
                  height={260}
                  priority
                />
                <div className="absolute bottom-2 right-2 bg-slate-600 text-white text-center text-xs font-thin w-10">
                  1Kg
                </div>
              </a>
              <div className="mt-4">
                <h2 className="text-gray-100 text-sm tracking-widest title-font mb-1">
                  Choco-Chips Cake
                </h2>
                <p className="text-xs text-pretty font-light truncate">
                  Lorem ipsum dolor adipisicing elit. Lorem ipsum, dolor sit
                  amet consectetur
                </p>
                <Image
                  src="rating-five.svg"
                  alt="rating"
                  width={50}
                  height={10}
                />
                <div className="flex flex-row justify-between items-center ">
                  <p>$16.00</p>
                  <button
                    className="text-sm font-medium border-2 border-red-500 bg-red-700 text-white px-2 hover:bg-red-500"
                    onClick={() => dispatch(addtocart("Choco-Chips Cake"))}
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4 w-full">
              <a className="h-48 rounded overflow-hidden relative">
                <Image
                  src="/image.png"
                  alt="image"
                  width={420}
                  height={260}
                  priority
                />
                <div className="absolute bottom-2 right-2 bg-slate-600 text-white text-center text-xs font-thin w-10">
                  1Kg
                </div>
              </a>
              <div className="mt-4">
                <h2 className="text-gray-100 text-sm tracking-widest title-font mb-1">
                  Chocolate Cake
                </h2>
                <p className="text-xs text-pretty font-light truncate">
                  Lorem ipsum dolor adipisicing elit. Lorem ipsum, dolor sit
                  amet consectetur
                </p>
                <Image
                  src="rating-five.svg"
                  alt="rating"
                  width={50}
                  height={10}
                />
                <div className="flex flex-row justify-between items-center ">
                  <p>$16.00</p>
                  <button
                    className="text-sm font-medium border-2 border-red-500 bg-red-700 text-white px-2 hover:bg-red-500"
                    onClick={() => dispatch(addtocart("Chocolate Cake"))}
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4 w-full">
              <a className="h-48 rounded overflow-hidden relative">
                <Image
                  src="/image.png"
                  alt="image"
                  width={420}
                  height={260}
                  priority
                />
                <div className="absolute bottom-2 right-2 bg-slate-600 text-white text-center text-xs font-thin w-10">
                  250g
                </div>
              </a>
              <div className="mt-4">
                <h2 className="text-gray-100 text-sm tracking-widest title-font mb-1">
                  Khova Cake
                </h2>
                <p className="text-xs text-pretty font-light truncate">
                  Lorem ipsum dolor adipisicing elit. Lorem ipsum, dolor sit
                  amet consectetur
                </p>
                <Image
                  src="rating-five.svg"
                  alt="rating"
                  width={50}
                  height={10}
                />
                <div className="flex flex-row justify-between items-center ">
                  <p>$16.00</p>
                  <button
                    className="text-sm font-medium border-2 border-red-500 bg-red-700 text-white px-2 hover:bg-red-500"
                    onClick={() => dispatch(addtocart("Khova Cake"))}
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4 w-full">
              <a className="h-48 rounded overflow-hidden relative">
                <Image
                  src="/image.png"
                  alt="image"
                  width={420}
                  height={260}
                  priority
                />
                <div className="absolute bottom-2 right-2 bg-slate-600 text-white text-center text-xs font-thin w-10">
                  1Kg
                </div>
              </a>
              <div className="mt-4">
                <h2 className="text-gray-100 text-sm tracking-widest title-font mb-1">
                  Vanila Cake
                </h2>
                <p className="text-xs text-pretty font-light truncate">
                  Lorem ipsum dolor adipisicing elit. Lorem ipsum, dolor sit
                  amet consectetur
                </p>
                <Image
                  src="rating-five.svg"
                  alt="rating"
                  width={50}
                  height={10}
                />
                <div className="flex flex-row justify-between items-center ">
                  <p>$16.00</p>
                  <button
                    className="text-sm font-medium border-2 border-red-500 bg-red-700 text-white px-2 hover:bg-red-500"
                    onClick={() => dispatch(addtocart("Vanila Cake"))}
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4 w-full">
              <a className="h-48 rounded overflow-hidden relative">
                <Image
                  src="/image.png"
                  alt="image"
                  width={420}
                  height={260}
                  priority
                />
                <div className="absolute bottom-2 right-2 bg-slate-600 text-white text-center text-xs font-thin w-10">
                  1Kg
                </div>
              </a>
              <div className="mt-4">
                <h2 className="text-gray-100 text-sm tracking-widest title-font mb-1">
                  Forest Cake
                </h2>
                <p className="text-xs text-pretty font-light truncate">
                  Lorem ipsum dolor adipisicing elit. Lorem ipsum, dolor sit
                  amet consectetur
                </p>
                <Image
                  src="rating-five.svg"
                  alt="rating"
                  width={50}
                  height={10}
                />
                <div className="flex flex-row justify-between items-center ">
                  <p>$16.00</p>
                  <button
                    className="text-sm font-medium border-2 border-red-500 bg-red-700 text-white px-2 hover:bg-red-500"
                    onClick={() => dispatch(addtocart("Forest Cake"))}
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4 w-full">
              <a className="h-48 rounded overflow-hidden relative">
                <Image
                  src="/image.png"
                  alt="image"
                  width={420}
                  height={260}
                  priority
                />
                <div className="absolute bottom-2 right-2 bg-slate-600 text-white text-center text-xs font-thin w-10">
                  500g
                </div>
              </a>
              <div className="mt-4">
                <h2 className="text-gray-100 text-sm tracking-widest title-font mb-1">
                  Dry Fruit Cake
                </h2>
                <p className="text-xs text-pretty font-light truncate">
                  Lorem ipsum dolor adipisicing elit. Lorem ipsum, dolor sit
                  amet consectetur
                </p>
                <Image
                  src="rating-five.svg"
                  alt="rating"
                  width={50}
                  height={10}
                />
                <div className="flex flex-row justify-between items-center ">
                  <p>$16.00</p>
                  <button
                    className="text-sm font-medium border-2 border-red-500 bg-red-700 text-white px-2 hover:bg-red-500"
                    onClick={() => dispatch(addtocart("Dry Fruit Cake"))}
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4 w-full">
              <a className="h-48 rounded overflow-hidden relative">
                <Image
                  src="/image.png"
                  alt="image"
                  width={420}
                  height={260}
                  priority
                />
                <div className="absolute bottom-2 right-2 bg-slate-600 text-white text-center text-xs font-thin w-10">
                  250g
                </div>
              </a>
              <div className="mt-4">
                <h2 className="text-gray-100 text-sm tracking-widest title-font mb-1">
                  Apple Cake
                </h2>
                <p className="text-xs text-pretty font-light truncate">
                  Lorem ipsum dolor adipisicing elit. Lorem ipsum, dolor sit
                  amet consectetur
                </p>
                <Image
                  src="rating-five.svg"
                  alt="rating"
                  width={50}
                  height={10}
                />
                <div className="flex flex-row justify-between items-center ">
                  <p>$16.00</p>
                  <button
                    className="text-sm font-medium border-2 border-red-500 bg-red-700 text-white px-2 hover:bg-red-500"
                    onClick={() => dispatch(addtocart("Apple Cake"))}
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4 w-full">
              <a className="h-48 rounded overflow-hidden relative">
                <Image
                  src="/image.png"
                  alt="image"
                  width={420}
                  height={260}
                  priority
                />
                <div className="absolute bottom-2 right-2 bg-slate-600 text-white text-center text-xs font-thin w-10">
                  1Kg
                </div>
              </a>
              <div className="mt-4">
                <h2 className="text-gray-100 text-sm tracking-widest title-font mb-1">
                  Pine Forest
                </h2>
                <p className="text-xs text-pretty font-light truncate">
                  Lorem ipsum dolor adipisicing elit. Lorem ipsum, dolor sit
                  amet consectetur
                </p>
                <Image
                  src="rating-five.svg"
                  alt="rating"
                  width={50}
                  height={10}
                />
                <div className="flex flex-row justify-between items-center ">
                  <p>$16.00</p>
                  <button
                    className="text-sm font-medium border-2 border-red-500 bg-red-700 text-white px-2 hover:bg-red-500"
                    onClick={() => dispatch(addtocart("Pine Forest"))}
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4 w-full">
              <a className="h-48 rounded overflow-hidden relative">
                <Image
                  src="/image.png"
                  alt="image"
                  width={420}
                  height={260}
                  priority
                />
                <div className="absolute bottom-2 right-2 bg-slate-600 text-white text-center text-xs font-thin w-10">
                  1Kg
                </div>
              </a>
              <div className="mt-4">
                <h2 className="text-gray-100 text-sm tracking-widest title-font mb-1">
                  Strawberry Cake
                </h2>
                <p className="text-xs text-pretty font-light truncate">
                  Lorem ipsum dolor adipisicing elit. Lorem ipsum, dolor sit
                  amet consectetur
                </p>
                <Image
                  src="rating-five.svg"
                  alt="rating"
                  width={50}
                  height={10}
                />
                <div className="flex flex-row justify-between items-center ">
                  <p>$16.00</p>
                  <button
                    className="text-sm font-medium border-2 border-red-500 bg-red-700 text-white px-2 hover:bg-red-500"
                    onClick={() => dispatch(addtocart("Straberry Cake"))}
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4 w-full">
              <a className="h-48 rounded overflow-hidden relative">
                <Image
                  src="/image.png"
                  alt="image"
                  width={420}
                  height={260}
                  priority
                />
                <div className="absolute bottom-2 right-2 bg-slate-600 text-white text-center text-xs font-thin w-10">
                  1Kg
                </div>
              </a>
              <div className="mt-4">
                <h2 className="text-gray-100 text-sm tracking-widest title-font mb-1">
                  Tutty Fruti Cake
                </h2>
                <p className="text-xs text-pretty font-light truncate">
                  Lorem ipsum dolor adipisicing elit. Lorem ipsum, dolor sit
                  amet consectetur
                </p>
                <Image
                  src="rating-five.svg"
                  alt="rating"
                  width={50}
                  height={10}
                />
                <div className="flex flex-row justify-between items-center ">
                  <p>$16.00</p>
                  <button
                    className="text-sm font-medium border-2 border-red-500 bg-red-700 text-white px-2 hover:bg-red-500"
                    onClick={() => dispatch(addtocart("Tutty Fruit Cake"))}
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
