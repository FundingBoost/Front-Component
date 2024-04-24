/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Day } from "../Day";
import "./style.css";

export const Weekday = ({
  className,
  dayDateClassName,
  dayDateClassNameOverride,
  dayWeekdayClassName,
  dayWeekdayClassNameOverride,
  dayDivClassName,
  dayDivClassNameOverride,
  dayDateClassName1,
}) => {
  return (
    <div className={`weekday ${className}`}>
      <Day className="day-instance" dateClassName={dayDateClassName} stateProp="default" type="weekday" weekday="Su" />
      <Day
        className="day-instance"
        dateClassName={dayDateClassNameOverride}
        stateProp="default"
        type="weekday"
        weekday="Mo"
      />
      <Day
        className="day-instance"
        dateClassName={dayWeekdayClassName}
        stateProp="default"
        type="weekday"
        weekday="Tu"
      />
      <Day
        className="day-instance"
        dateClassName={dayWeekdayClassNameOverride}
        stateProp="default"
        type="weekday"
        weekday="We"
      />
      <Day className="day-instance" dateClassName={dayDivClassName} stateProp="default" type="weekday" weekday="Th" />
      <Day
        className="day-instance"
        dateClassName={dayDivClassNameOverride}
        stateProp="default"
        type="weekday"
        weekday="Fr"
      />
      <Day className="day-instance" dateClassName={dayDateClassName1} stateProp="default" type="weekday" weekday="Sa" />
    </div>
  );
};
