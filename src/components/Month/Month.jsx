/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { IconCalendarNext } from "../../icons/IconCalendarNext";
import { IconCalendarPrev3 } from "../../icons/IconCalendarPrev3";
import "./style.css";

export const Month = ({ className }) => {
  return (
    <div className={`month ${className}`}>
      <IconCalendarPrev3 className="icon-instance-node" />
      <div className="text-wrapper">November 2022</div>
      <IconCalendarNext className="icon-instance-node" />
    </div>
  );
};
