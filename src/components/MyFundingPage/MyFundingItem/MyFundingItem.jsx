import React from "react";
// import { Rectangle } from "./Rectangle";
import "./MyFundingItemStyle.scss";
import image from "./image-25.png"


export const MyFundingItem = () => {
  return (
    <div className="box">
      <div className="view">
        <img className="image" alt="Image" src={image} />
        <div className="text-wrapper-2">100%</div>
        <div className="rectangle-wrapper">
          {/* <Rectangle className="rectangle-30" /> */}
        </div>
        <div className="text-wrapper-3">죠르디 피규어 LED 무드등</div>
        <div className="group">
          <div className="overlap-group">
            <div className="text-wrapper">옵션</div>
          </div>
          <div className="div">옵션선택어쩌고저쩌고</div>
        </div>
        <div className="text-wrapper-4">9,900원</div>
      </div>
    </div>
  );
};