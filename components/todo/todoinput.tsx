import React, { useState } from "react";
import { Pencil } from "./pencil";
import { Bin } from "./bin";

const Todoinput = () => {
  const [input, setInput] = useState("");
  const [arr, setArr] = useState<string[]>([]);
//   const [showList, setShowList] = useState(false);

  return (
    <div className="flex flex-col gap-10 mt-[100px] p-12 w-[50vw] mx-auto">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add A Todo Item"
        className="bg-white outline-double w-[60%] mx-auto p-2 rounded-md placeholder:text-center"
      />

      <button
        className="bg-[#190281] text-white  w-[60%] mx-auto p-2 rounded-md"
        onClick={() => {
          input && setArr((prev) => [...prev, input]);
          setInput("");
        }}
      >
        Add Item
      </button>

      {arr.map((item, idx) => (
        <div className="flex items-center justify-between p-3 w-[40%]  rounded-lg mx-auto border border-double border-[#190281]">
          <p key={idx}>{item}</p>

          <div className="flex gap-2 ">
            <Pencil />
            <Bin className="hover:bg-[#530000] hover:text-white" />
          </div>
        </div>
      ))}

        <button
          type="button"
          onClick={()=>setArr([])}
          className="bg-[#530000] outline-none text-white w-[60%] mx-auto p-2 rounded-md placeholder:text-center"
        >
          Clear list
        </button>
      </div>
  );
};

export default Todoinput;
