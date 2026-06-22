import React from "react";
import Section1 from "./components/Section1/section1";
import Section2 from "./components/Section2/Section2";

const App = () => {
  const users = [
    {
      img: " https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "heey",
      tag: "Satisfied",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "hello",
      tag: "Underserved",
    },
    {
      img: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
      intro: "",
      tag: "Underbanked",
    },
  ];

  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};
export default App;
