import React from "react";
import "./FundingRegistItemStyle.scss";

export default function FundingRegistItem () {
    
  return (
        <div className="FundingRegistItem">
            <div className="sequenceGroup">
            <div className="itemSequence" />
            <div className="sequenceNumber">1</div>
            </div>
            <div className="title">죠르디 피규어 LED 무드등</div>
            <div className="optionGroup">
            <div className="option">옵션</div>
            </div>
            <div className="optionName">옵션선택어쩌고저쩌고</div>
            <div className="price">9,900 원</div>
        </div>
  );
};