

import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px", fontFamily: "Arial, sans-serif" }}>
      <h1>Welcome to CV Builder</h1>
      <p>Create professional resumes in minutes!</p>
      <div style={{ marginTop: "30px" }}>
        <Link
          to="/create"
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            borderRadius: "5px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Create Your CV
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;