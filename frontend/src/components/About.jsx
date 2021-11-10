import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function About() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    _initialFunction();
  }, []);

  const _initialFunction = async () => {
    const { data } = await axios.get("/api/getData");
    setUserList(data.users);
  };

  return (
    <div>
      <h1>About</h1>
      <Link to="/">Home</Link>
      <h1>Database - Data</h1>
      {userList.map((user) => (
        <p>
          {user.name}-{user.email}
        </p>
      ))}
    </div>
  );
}

export default About;
