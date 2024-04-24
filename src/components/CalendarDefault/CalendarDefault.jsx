/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Calendar } from "../Calendar";
import "./style.css";

export const CalendarDefault = ({ className }) => {
  return (
    <div className={`calendar-default ${className}`}>
      <Calendar className="calendar-instance" clearClearClassName="calendar-3" clearDivClassName="calendar-2" />
    </div>
  );
};
