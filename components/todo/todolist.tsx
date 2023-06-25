import React from "react";


const Todolist = ({a,setA}) => {
  return (
    <>
    <p></p>
    <div className="flex flex-col gap-10 mt-[20px] p-12 w-[50vw] mx-auto">
      <button
        type="button"

        onClick={() =>{ setA((prev) => prev + 1) 
        console.log("first")
        }
      }
        className="bg-[#530000] outline-none text-white w-[60%] mx-auto p-2 rounded-md placeholder:text-center"
        >
        {" "}
        Clear list
      </button>
      <p className="text-black text-18">{a}</p>
    </div>
        </>
  );
};

export default Todolist;
