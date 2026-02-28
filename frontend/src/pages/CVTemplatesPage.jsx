// CVTemplatesPage.jsx
import React from "react";

const templates = [
  {
    name: "Modern",
    price: "KES 345",
    features: [
      "Color design with optional photo",
      "Choose what information to show",
      "Edit the font, color, text size etc.",
      "Unlimited editing and downloads for 12 months",
    ],
    premium: true,
  },
  {
    name: "Classic",
    price: "KES 345",
    features: [
      "Color design with optional photo",
      "Choose what information to show",
      "Edit the font, color, text size etc.",
      "Unlimited editing and downloads for 12 months",
    ],
    premium: true,
  },
  {
    name: "International",
    price: "KES 345",
    features: [
      "Color design with optional photo",
      "Choose what information to show",
      "Edit the font, color, text size etc.",
      "Unlimited editing and downloads for 12 months",
    ],
    premium: true,
  },
  {
    name: "Plain",
    price: "Free",
    features: [
      "Black & white, text only",
      "Fuzu watermark",
      "No customisation options",
      "Unlimited downloads",
    ],
    premium: false,
  },
];

function CVTemplatesPage() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", padding: "50px 20px" }}>
      <h1>Select your CV design</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        {templates.map((template) => (
          <div
            key={template.name}
            style={{
              background: "#1c1c1c",
              color: "white",
              width: "220px",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            {template.premium && (
              <div
                style={{
                  position: "absolute",
                  background: "teal",
                  padding: "5px 10px",
                  borderRadius: "0 5px 5px 0",
                  top: "0",
                  left: "0",
                  fontWeight: "bold",
                }}
              >
                PREMIUM
              </div>
            )}
            <div style={{ marginTop: template.premium ? "30px" : "10px" }}>
              <h2>{template.name}</h2>
              <p>{template.price}</p>
              <ul style={{ textAlign: "left", paddingLeft: "20px" }}>
                {template.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              <button
                style={{
                  marginTop: "10px",
                  padding: "10px 15px",
                  backgroundColor: "#FFD700",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Select {template.name} CV
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CVTemplatesPage;