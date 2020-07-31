import React, { useState, Image } from "react";

function AnalyticsCard(props) {
  const [isactive, setisactive] = useState(0);
  return (
    <div
      style={{
        width: "100%",
        height: "120px",
        background: "#F5F9FA",
        border: "1px solid #94B9CA",
        borderRadius: "4px"
      }}
    >
      <div
        style={{
          paddingTop: "8px",
          paddingRight: "8px",
          display: "flex",
          flexDirection: "row"
        }}
      >
        <svg
          width={2}
          height={8}
          viewBox="0 0 2 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginLeft: "auto" }}
        >
          <circle cx={1} cy={1} r={1} fill="#025B81" />
          <circle cx={1} cy={4} r={1} fill="#025B81" />
          <circle cx={1} cy={7} r={1} fill="#025B81" />
        </svg>
      </div>
      <div
        style={{
          color: "#003B54",
          marginTop: "14px",
          padding: "12px",
          fontSize: "20px",
          paddingBottom: "6px"
        }}
      >
        Beispieldaten
      </div>
      <div
        style={{
          color: "#003b54ad" /* marginTop: '14px', */,
          padding: "12px",
          paddingTop: "0px",
          fontSize: "14px"
        }}
      >
        aktiv
      </div>
    </div>
  );
}

export default AnalyticsCard;
