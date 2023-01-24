import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
function Home() {
  return (
    <table className="box">
      <tr className="small-box">
        <td>
          <img src="./admin.png" alt="admin" />
          <br />
          <button style={{ marginTop: "22px" }}>
            <Link to="/login">
              <span>Admin Login</span>
            </Link>
          </button>
        </td>
        <td>
          <img src="./student.png" alt="admin" style={{ marginTop: "30px" }} />
          <br />
          <button>
            <Link to="/login">
              <span>Student Login</span>
            </Link>
          </button>
        </td>
      </tr>
    </table>
  );
}

export default Home;
