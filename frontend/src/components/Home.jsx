import { useState, useEffect } from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";

function Home() {
  const [appID, setAppID] = useState(null);

  useEffect(() => {
    _initialFunction();
  }, []);

  const _initialFunction = async () => {
    const { data } = await axios.get("/api/appID");
    setAppID(data.message);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {appID && <p>{appID}</p>}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/about">About</Link>
      </header>
    </div>
  );
}

export default Home;
