import React from 'react';
import "./FriendFundingDetailInputMoneyStyle.scss";  
import img from "./image-25.png";

export default function FriendFundingDetailMyProfile () {
    return (
      <div className="FriendFundingDetailMyProfile">
      <div className="fundingToFriendText">친구에게 펀딩하기</div>
      <input type="text" className="textBox" placeholder="펀딩할 금액을 입력해 주세요." />
        <div className="buttonGroup">
          <div className="money">
            <button className="moneyButton">+ 1만</button>
          </div>
          <div className="money">
            <button className="moneyButton">+ 5만</button>
          </div>
          <div className="money">
            <button className="moneyButton">+ 10만</button>
          </div>
          <div className="money">
            <button className="moneyButton">+ 전액</button>
          </div>
        </div>


        <div className="fundingInfo">
            <div className='dDayGroup'>
              <div className="dDay">D - 3</div>            
              <div className="deadLine">2024-04-08까지</div>
            </div> 
            <div className="percent">50%</div>
         </div>
          <div className="rectangle-wrapper">
            {/* <Rectangle className="rectangle-30" /> */}
          </div>

          <div className="payButton">
              <button className="fundingButton">펀딩하기</button>
              <img className="free-icon-share" alt="Free icon share" src={img} />
          </div>
        </div>
    );
};
