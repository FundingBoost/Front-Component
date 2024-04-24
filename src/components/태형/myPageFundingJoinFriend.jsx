import React from 'react';
import img from "../MyFundingPage/MyFundingItem/image-25.png";

export default function MyPageFundingJoinFriend () {
    return (
        <div className="box">
        <div className="view">
          <img className="ellipse" alt="Ellipse" src={img} />
          <div className="div">현세미</div>
          <div className="text-wrapper">30,000 원</div>
        </div>
      </div>
    );
};