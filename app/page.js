"use client";
import React, { useState } from "react";

const page = () => {
  const [list, setlist] = useState([]);
  const [exp, setexp] = useState("");
  const [title, settitle] = useState("");

  const handlesubmit = (e)=>{
    e.preventDefault();
    if(exp && title){
      setlist([...list, { exp: parseFloat(exp), title}])
      setexp("")
      settitle("")
    }
  }

  const totalExpense = list.reduce((acc, curr) => acc + curr.exp, 0)

  return (
    <div>
      <form className="flex justify-center items-center text-center mt-7" onSubmit={handlesubmit}>
        <input
          type="number"
          className="bg-black p-2 text-white rounded"
          placeholder="Enter amount"
          value={exp}
          onChange={(e) => setexp(e.target.value)}
        />
        <input
          type="text"
          className="bg-black p-2 text-white ml-4 rounded"
          placeholder="Enter category"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <button type="submit"className="bg-blue-500 text-white p-2 font-bold ml-4 rounded border-none">
          Add
        </button>
        <p className="ml-3">Total:{totalExpense}</p>
      </form>
      {list.length > 0 && (
        <div className="mt-6">
          <table className="table-auto w-full text-center">
            <thead>
              <tr className="bg-gray-700 text-white">
                <th className="px-4 py-2">Expenses</th>
                <th className="px-4 py-2">Category</th>
              </tr>
            </thead>
            <tbody>
              {list.map((money, index) => (
                <tr key={index} className="bg-gray-200">
                  <td className="border px-4 py-2">{money.exp}</td>
                  <td className="border px-4 py-2">{money.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default page;
