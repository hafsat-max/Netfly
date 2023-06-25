import Todoinput from "@/components/todo/todoinput";
import Todoitem from "@/components/todo/todoitem";
import Todolist from "@/components/todo/todolist";
import React, { useState } from "react";



const Todo = () => {
  const [a, setA] = useState(0);
  return (
    <div className="w-[70vw]  mx-auto  shadow-hamburger bg-white rounded-lg overflow-auto ">
      <Todoinput />
      <h2 className="text-center text-white text-20">Todo List</h2>
      {/* <Todoitem /> */}

      <Todolist setA={setA} a={a} />
    </div>
  );
};

export default Todo;
