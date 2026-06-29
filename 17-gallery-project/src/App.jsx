import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=30",
    );

    setUserData(response.data);
  };

  useEffect(function () {
    getData();
  }, []);

  let printUserData = (
    <h3 className="text-gray-400 text-xs">No user available</h3>
  );

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <a href={elem.url} target="_blank">
            <div className="h-40 w-44 overflow-hidden bg-white rounded-xl">
              <img
                className="h-full w-full object-cover"
                src={elem.download_url}
                alt=""
              ></img>
            </div>
            <h2>{elem.author}</h2>
          </a>
        </div>
      );
    });
  }

  return (
    <div className="bg-black overflow-auto h-screen p-4 text-white">
      <div className="flex flex-wrap gap-4">{printUserData}</div>

      <div className="flex justify-center items-center p-4 gap-4 ">
        <button
          className="bg-amber-400 active:scale-95 mb-3 px-5 py-2 rounded text-white "
          onClick={() => {
            setIndex(index - 1);
          }}
        >
          Prev
        </button>
        <button
          className="bg-amber-400 active:scale-95 mb-3 px-5 py-2 rounded text-white "
          onClick={() => {
            if (index > 1) {
              setIndex(index + 1);
            }
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
