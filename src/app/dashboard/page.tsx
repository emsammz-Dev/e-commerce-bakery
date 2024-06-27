import createProduct from "@/actions/createProduct";
import prisma from "@/db/prismadb";
import Image from "next/image";
export default async function Dashboard() {
  const products = await prisma.product.findMany();
  console.log(products);
  return (
    <>
      <div className="flex mt-8 p-8">
        <div className="border-r-2 border-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          qui quisquam enim voluptate ea accusamus omnis blanditiis molestias in
          perspiciatis iusto, inventore sit eveniet laborum nobis voluptatum
          illum sequi. Similique!
        </div>

        <form action={createProduct} className="max-sm:mt-14 w-[300px]">
          <div className="flex flex-col gap-2 ">
            <h1 className="text-center">Create Product Item</h1>

            <div className="flex flex-row gap-4">
              <label className="block">
                <span className="text-gray-300 text-nowrap">
                  Name Of Product
                </span>
                <input
                  name="name"
                  type="text"
                  className="mt-1 block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Name"
                />
              </label>

              <label className="block">
                <span className="text-gray-300">Weight</span>
                <select
                  name="weight"
                  className="block w-full mt-1 rounded-md text-black border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  <option>1Kg</option>
                  <option>500g</option>
                  <option>250g</option>
                  <option>ALL</option>
                </select>
              </label>
            </div>

            <div className="flex flex-col">
              <label className="block">
                <span className="text-gray-300">Additional details</span>
              </label>
              <textarea
                name="description"
                className="mt-1 block text-black rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              ></textarea>
            </div>

            <div className="flex flex-col gap-3">
              <label>
                <span className="text-gray-300 mr-8">Price</span>
                <input
                  name="price"
                  type="number"
                  className="mt-1  block text-black  w-20 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </label>
              <label>
                <span className="text-gray-300  mr-8">Upload PNG Image</span>
                <input
                  type="file"
                  className="mt-1  block rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  accept="image/png"
                />
              </label>
            </div>
            <button
              type="submit"
              className="bg-gray-600 w-24 mt-3 rounded-md p-1 mx-auto"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
