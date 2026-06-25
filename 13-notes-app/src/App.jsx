import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, details });

    setTask(copyTask);

    setTitle("");
    setDetails("");
  };

  return (
    <div className="h-screen lg:flex bg-black text-white ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex gap-4 lg:w-1/2 p-10 flex-col  items-start"
      >
        <h1 className="text-4xl font-bold">Add Notes</h1>
        {/*  1st input title of note */}
        <input
          type="text"
          placeholder="Enter your note"
          className="px-5 w-full  py-2 border-2 outline-none rounded font-medium"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* 2nd input details of note */}
        <textarea
          type="text"
          className="px-5 w-full h-30 py-2 flex items-start flex-row  border-2 outline-none rounded font-medium"
          placeholder="Enter details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
        <button className="bg-white active:scale-95 w-full outline-none text-black px-5  py-2  rounded font-medium">
          Add notes
        </button>
      </form>
      <div className=" lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-3xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap items-start gap-5 mt-6 h-full overflow-auto">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="h-52 w-40 rounded-xl text-black p-3 bg-white"
              >
                <h3 className="leading-tight text-xl font-bold">
                  {elem.title}
                </h3>
                <p className="mt-2 leading-tight font-medium text-gray-700">
                  {elem.details}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
