import React from "react";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  function jumpBy5() {
    setCount(count + 5);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={jumpBy5}>Jump by 5</button>
    </div>
  );
};

export default App;

// const App = () => {
//   const [a, setA] = useState(0);
//   const [userName, setUserName] = useState("Anandita");
//   const [users, setUsers] = useState([10, 20, 30]);
//   function changeNum() {
//     setA(30);
//     setUserName("Saksham");
//     setUsers([30, 40, 50]);
//   }

//   return (
//     <div>
//       <h1>
//         Value of a is {a} <br /> {users} <br /> value of user is {userName}
//       </h1>
//       <button onClick={changeNum}>Click</button>
//     </div>
//   );
// };

// export default App;
