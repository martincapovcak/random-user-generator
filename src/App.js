import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    // this code runs ONCE when the component loads..
    //Here im going to fetch a random user from random-user-generator API

    const fetchData = async () => {
      const data = await fetch("https://randomuser.me/api/");

      if (data.ok) {
        const json = await data.json();
        console.log(json);
      } else {
        console.log("HTTP-Error: " + data.status);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Random user generator</h1>
    </div>
  );
}

export default App;
