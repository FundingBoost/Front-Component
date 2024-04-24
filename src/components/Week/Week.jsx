/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Day } from "../Day";
import "./style.css";

export const Week = ({
  className,
  dayDate = "3",
  dayDate1 = "4",
  dayDate2 = "5",
  dayDate3 = "6",
  dayDate4 = "7",
  dayDate5 = "1",
  dayDate6 = "2",
  dayDateClassName,
  dayDateClassNameOverride,
  dayWeekdayClassName,
  dayWeekdayClassNameOverride,
  dayDivClassName,
  dayDivClassNameOverride,
  dayDateClassName1,
}) => {
  return (
    <div className={`week ${className}`}>
      <Day
        className="design-component-instance-node"
        date={dayDate5}
        dateClassName={dayWeekdayClassNameOverride}
        stateProp="default"
        type="day"
      />
      <Day
        className="design-component-instance-node"
        date={dayDate6}
        dateClassName={dayDivClassName}
        stateProp="default"
        type="day"
      />
      <Day
        className="design-component-instance-node"
        date={dayDate}
        dateClassName={dayDivClassNameOverride}
        stateProp="default"
        type="day"
      />
      <Day
        className="design-component-instance-node"
        date={dayDate1}
        dateClassName={dayDateClassName1}
        stateProp="default"
        type="day"
      />
      <Day
        className="design-component-instance-node"
        date={dayDate2}
        dateClassName={dayDateClassName}
        stateProp="default"
        type="day"
      />
      <Day
        className="design-component-instance-node"
        date={dayDate3}
        dateClassName={dayDateClassNameOverride}
        stateProp="default"
        type="day"
      />
      <Day
        className="design-component-instance-node"
        date={dayDate4}
        dateClassName={dayWeekdayClassName}
        stateProp="default"
        type="day"
      />
    </div>
  );
};

Week.propTypes = {
  dayDate: PropTypes.string,
  dayDate1: PropTypes.string,
  dayDate2: PropTypes.string,
  dayDate3: PropTypes.string,
  dayDate4: PropTypes.string,
  dayDate5: PropTypes.string,
  dayDate6: PropTypes.string,
};
