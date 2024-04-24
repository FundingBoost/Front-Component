/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Clear } from "../Clear";
import { Month } from "../Month";
import { Week } from "../Week";
import { Weekday } from "../Weekday";
import "./style.css";

export const Calendar = ({ showClear = true, className, clearDivClassName, clearClearClassName }) => {
  return (
    <div className={`calendar ${className}`}>
      <div className="div-2">
        <Month className="design-component-instance-node-2" />
        <Weekday
          className="design-component-instance-node-2"
          dayDateClassName="weekday-instance"
          dayDateClassName1="weekday-instance"
          dayDateClassNameOverride="weekday-2"
          dayDivClassName="weekday-3"
          dayDivClassNameOverride="design-component-instance-node-3"
          dayWeekdayClassName="weekday-3"
          dayWeekdayClassNameOverride="weekday-2"
        />
        <Week
          className="week-instance"
          dayDate="1"
          dayDate1="2"
          dayDate2="3"
          dayDate3="4"
          dayDate4="5"
          dayDate5="1"
          dayDate6="2"
        />
        <Week
          className="week-instance"
          dayDate="8"
          dayDate1="9"
          dayDate2="10"
          dayDate3="11"
          dayDate4="12"
          dayDate5="6"
          dayDate6="7"
          dayDateClassName="design-component-instance-node-3"
          dayDateClassNameOverride="design-component-instance-node-3"
          dayWeekdayClassName="design-component-instance-node-3"
        />
        <Week
          className="week-instance"
          dayDate="15"
          dayDate1="16"
          dayDate2="17"
          dayDate3="18"
          dayDate4="19"
          dayDate5="13"
          dayDate6="14"
          dayDateClassName="design-component-instance-node-3"
          dayDateClassName1="design-component-instance-node-3"
          dayDateClassNameOverride="design-component-instance-node-3"
          dayDivClassName="design-component-instance-node-3"
          dayDivClassNameOverride="design-component-instance-node-3"
          dayWeekdayClassName="design-component-instance-node-3"
          dayWeekdayClassNameOverride="design-component-instance-node-3"
        />
        <Week
          className="week-instance"
          dayDate="22"
          dayDate1="23"
          dayDate2="24"
          dayDate3="6"
          dayDate4="26"
          dayDate5="20"
          dayDate6="21"
          dayDateClassName="design-component-instance-node-3"
          dayDateClassName1="design-component-instance-node-3"
          dayDivClassName="design-component-instance-node-3"
          dayDivClassNameOverride="design-component-instance-node-3"
          dayWeekdayClassName="design-component-instance-node-3"
          dayWeekdayClassNameOverride="design-component-instance-node-3"
        />
        <Week
          className="week-instance"
          dayDate="29"
          dayDate1="30"
          dayDate2="5"
          dayDate3="6"
          dayDate4="7"
          dayDate5="27"
          dayDate6="28"
          dayDateClassName1="design-component-instance-node-3"
          dayDivClassName="design-component-instance-node-3"
          dayDivClassNameOverride="design-component-instance-node-3"
          dayWeekdayClassNameOverride="design-component-instance-node-3"
        />
      </div>
      {showClear && <Clear className={clearClearClassName} divClassName={clearDivClassName} />}
    </div>
  );
};

Calendar.propTypes = {
  showClear: PropTypes.bool,
};
