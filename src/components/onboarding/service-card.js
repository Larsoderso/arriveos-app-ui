import React, { useState, Image } from "react";

function MobilityServiceCard(props) {
  const [isactive, setisactive] = useState(0);
  return (
    <div
      style={{
        padding: "12px",
        width: "280px",
        display: "flex",
        flexDirection: "row"
      }}
    >
      <div
        style={{
          background: props.brandColor,
          width: "60px",
          height: "61px",
          borderRadius: "50%",
          textAlign: "center",
          lineHeight: "60px",
          flexShrink: 0
        }}
      />
      <div style={{ paddingLeft: "12px" }}>
        <div
          style={{
            fontSize: "14px" /* paddingTop: '6px', */,
            /* paddingLeft: '12px', */
            fontWeight: 500
          }}
        >
          {" "}
          {props.ServiceName}{" "}
        </div>

        <div
          style={{
            fontSize: "12px",
            fontWeight: 500,
            color: "grey",
            marginTop: "6px",
            marginBottom: "6px"
          }}
        >
          {props.secondLine}{" "}
        </div>
        <div
          onClick={() => setisactive(1)}
          style={{
            width: "80px",
            height: "32px",
            background: isactive == 0 ? "#28333a" : "#2025cd",
            borderRadius: "8px",
            marginTop: "4px",
            color: "white",
            textAlign: "center",
            lineHeight: "32px",
            fontWeight: 300,
            fontSize: "12px"
          }}
        >
          {isactive == 0 && "Integrate"}
          {isactive == 1 && "Integrated"}
        </div>
      </div>
    </div>
  );
}

export default MobilityServiceCard;
