import React from "react";
import { useNavigate } from "react-router-dom";
import SingleEventBox from "../SingleEventBox";

export default function Day2() {
  const navigate = useNavigate();
  return (
    <div className="eventpage single-component">
      <h1>
        #Day 2 (<i class="fa-solid fa-sun" style={{ color: "#fab005" }}></i> Day
        Events)
      </h1>
      <div className="single-event-box">
        <SingleEventBox />
        <SingleEventBox />
        <SingleEventBox />
        <SingleEventBox />
        <SingleEventBox />
      </div>
      <div
        onClick={() => {
          navigate("/events/night-2");
        }}
        class="arrow-container"
      >
        <div class="arrow-down my-2"></div>
        <div class="arrow-down my-2"></div>
      </div>
    </div>
  );
}
