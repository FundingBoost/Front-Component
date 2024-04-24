import React from 'react';
import img from "../MyFundingPage/MyFundingItem/image-25.png";

export default function MyPageFundingJoinFriendGroup () {
    return (
        <div className="box">
      <div className="view">
        <div className="text-wrapper">내 펀딩에 참여한 친구</div>
        <div className="div">
          <img className="ellipse" alt="Ellipse" src={img} />
          <div className="text-wrapper-2">30,000 원</div>
          <div className="text-wrapper-3">구태형</div>
        </div>
        <div className="group">
          <img className="ellipse" alt="Ellipse" src={img} />
          <div className="text-wrapper-4">50,000 원</div>
          <div className="text-wrapper-5">맹인호</div>
        </div>
        <div className="view-2">
          <img className="ellipse" alt="Ellipse" src={img} />
          <div className="text-wrapper-4">30,000 원</div>
          <div className="text-wrapper-6">현세미</div>
        </div>
      </div>
    </div>
    );
};
