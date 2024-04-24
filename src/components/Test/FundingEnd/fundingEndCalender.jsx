import React from "react";
import { CalendarWrapper } from "./CalendarWrapper";
import "./fundingEndCalenderStyle.scss";

export const CalendarDefault = ({ className }) => {
  return (
    <div className={`calendar-default ${className}`}>
      <CalendarWrapper
        className="calendar-instance"
        clearWrapperClearClassName="calendar-4"
        clearWrapperDivClassName="calendar-3"
      />
    </div>
  );
};
