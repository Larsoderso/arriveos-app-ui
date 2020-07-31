import React, { useState } from "react";

function RegionOnboardingTap(props) {
  return (
    <div
      style={{
        width: "25%",
        height: "60px" /* background: '#8a9cf517', */,
        display: "flex",
        flexDirection: "row",
        paddingLeft: "12px",
        transition: ".5s",
        borderBottom:
          props.activeTab == props.StepNr
            ? "1px solid #BF1FCD"
            : "1px solid transparent"
      }}
      onClick={() => props.expClick(props.StepNr)}
    >
      <div
        style={{
          width: "28px",
          height: "28px",
          background:
            props.activeTab == props.StepNr
              ? "rgba(191, 31, 205, 0.31)"
              : "#d1d0d49c",

          borderRadius: "50%",
          alignSelf: "center",
          textAlign: "center",
          lineHeight: "28px",
          marginLeft: "auto",
          color: props.activeTab == props.StepNr ? "#BF1FCD" : "#d1d0d49c"
        }}
      >
        {props.StepNr}
      </div>
      <div
        style={{
          textAlign: "center",
          lineHeight: "28px",
          color: props.activeTab == props.StepNr ? "#BF1FCD" : "#d1d0d49c",
          marginTop: "16px",
          marginLeft: "12px",
          marginRight: "auto"
        }}
      >
        {props.StepName}{" "}
      </div>
    </div>
  );
}

export default RegionOnboardingTap;
