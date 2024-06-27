import { useAppSelector, useAppDispatch } from "../../lib/hooks";
import Image from "next/image";
import Link from "next/link";
import { invisible } from "@/lib/features/visiblity/visiblitySlice";

export default function OpenSideNav() {
  const visiblity = useAppSelector((state) => state.sidevisiblity.value);
  const dispatch = useAppDispatch();
  return (
    <>
      <div
        className={`absolute top-0 left-0 h-screen w-44 ${visiblity}  z-20  bg-violet-400 border-r-2 border-b-2 border-black `}
        onMouseLeave={() => dispatch(invisible())}
      >
        <div className="flex items-center h-12 bg-slate-600 px-2 gap-2">
          <Image
            alt="menulogo"
            src="cancel.svg"
            width={25}
            height={25}
            style={{ objectFit: "contain" }}
            onClick={() => dispatch(invisible())}
          />
          <Link href="/" className="border-r-2 rounded-lg pr-2">
            <p className="text-nowrap">Baker&apos;s Edge</p>
          </Link>
        </div>
        <div className="flex flex-col gap-6 opacity-40">
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
