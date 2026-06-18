import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="parent">
      <Card
        user="Anandita"
        age={21}
        img="https://images.unsplash.com/photo-1781084819510-d401a1e77a7c?q=80&w=767&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        user="John"
        age={30}
        img="https://images.unsplash.com/photo-1770341990092-6a5b0e1b61c2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card user="Jane" age={25} />
    </div>
  );
};

export default App;
