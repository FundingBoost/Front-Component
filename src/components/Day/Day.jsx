/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Day = ({ weekday = "Su", date = "0", stateProp, type, className, dateClassName }) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
    type: type || "day",
  });

  return (
    <div
      className={`day ${state.state} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className={`date state-${state.state} type-${state.type} ${dateClassName}`}>
        {state.type === "day" && <>{date}</>}

        {state.type === "weekday" && <>{weekday}</>}
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "default",
      };
  }

  return state;
}

Day.propTypes = {
  weekday: PropTypes.string,
  date: PropTypes.string,
  stateProp: PropTypes.oneOf([
    "range-end",
    "default",
    "range-in-between",
    "selected",
    "range-start",
    "hover",
    "disabled",
  ]),
  type: PropTypes.oneOf(["weekday", "day"]),
};
