"use client";
import { invisible, visible } from "@/lib/features/visiblity/visiblitySlice";
import { useAppDispatch } from "@/lib/hooks";
import { useRef } from "react";
import Image from "next/image";
import OpenSideNav from "./OpenSideNav";
export default function SideNav() {
  // Per-route state imp**
  const initialized = useRef(false);
  initialized.current = true;
  const dispatch = useAppDispatch();

  return (
    <>
      <div
        className="fixed top-10 bottom-0 left-0 max-sm:top-[75px] max-sm:hidden bg-lime-900"
        onMouseEnter={() => dispatch(visible())}
      >
        <div className="flex flex-col gap-6">
          <div className="text-center flex flex-row justify-center gap-2 p-2 border-b-[1px] border-black">
            <p>Filter</p>
            <Image
              src="filter.svg"
              alt="filter"
              height={20}
              width={20}
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="price.svg"
              alt="filter"
              height={25}
              width={25}
              style={{ objectFit: "contain" }}
            />
            <p>Price</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="colors.svg"
              alt="color"
              height={25}
              width={25}
              style={{ objectFit: "contain" }}
            />
            <p>Color</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="weight.svg"
              alt="weight"
              height={25}
              width={25}
              style={{ objectFit: "contain" }}
            />
            <p>Weight</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="shapes.svg"
              alt="shape"
              height={25}
              width={25}
              style={{ objectFit: "contain" }}
            />
            <p>Shape</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="stars.svg"
              alt="stars"
              height={25}
              width={25}
              style={{ objectFit: "contain" }}
            />
            <p>Stars</p>
          </div>
        </div>
      </div>
    </>
  );
}
