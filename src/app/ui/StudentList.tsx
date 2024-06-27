export default function StudentList() {
  return (
    <div className="flex flex-col w-full ">
      <div>
        <label>
          <span>Choose The Class For Attendance:</span>
          <select className="block w-full text-black bg-gray-500 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            <option>class 1</option>
            <option>class 2</option>
            <option>class 3</option>
            <option>class 4</option>
            <option>class 5</option>
            <option>class 6</option>
            <option>class 7</option>
            <option>class 8</option>
          </select>
        </label>
      </div>
      <div className="overflow-y-auto relative flex justify-center top-0 bottom-0">
        <table className="table-auto border-separate border-spacing-x-24 max-md:border-spacing-x-8 max-sm:border-spacing-x-[0.1px]  max-lg:border-spacing-x-12 min-xl:border-spacing-x-[80px]  border border-slate-500">
          <caption className="caption-top">
            Table 3.1: Professional wrestlers and their signature moves.
          </caption>
          <thead>
            <tr>
              <td>Roll No</td>
              <td>Name</td>
              <td>1's </td>
              <td>2's </td>
              <td>4's </td>
              <td>4's </td>
              <td>Today's Attendance</td>
            </tr>
          </thead>
          <tbody className="divide-y-2">
            <tr className="hover:bg-gray-600">
              <td>1</td>
              <td className="text-nowrap">mark henry</td>
              <td className="flex justify-end">
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>mark henry</td>
              <td className="flex justify-end">
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>mark henry</td>
              <td className="flex justify-end">
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>mark henry</td>
              <td className="flex justify-end">
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>mark henry</td>
              <td className="flex justify-end">
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>mark henry</td>
              <td className="flex justify-end">
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>mark henry</td>
              <td className="flex justify-end">
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>mark henry</td>
              <td className="flex justify-end">
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>mark henry</td>
              <td className="flex justify-end">
                <input type="checkbox" />
              </td>
            </tr>{" "}
            <tr>
              <td>1</td>
              <td>mark henry</td>
              <td className="flex justify-end">
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>mark henry</td>
              <td className="flex justify-end">
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>mark henry</td>
              <td className="flex justify-end">
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>mark henry</td>
              <td className="flex justify-end">
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>mark henry</td>
              <td className="flex justify-end">
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>mark henry</td>
              <td className="flex justify-end">
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>10</td>
              <td>mark henry</td>
              <td className="flex justify-end">
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>11</td>
              <td>mark henry</td>
              <td className="flex justify-end">
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>12</td>
              <td>mark henry</td>
              <td className="flex justify-end">
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>13</td>
              <td>mark henry</td>
              <td className="flex justify-end">
                <input type="checkbox" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
