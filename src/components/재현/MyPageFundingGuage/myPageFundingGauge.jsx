import React from 'react';
import "./myPageFundingGaugeStyle.scss";  


export default function MyPageFundingGauge () {
    return (
        <div className="MyPageFundingGaugeBox">
        <div className="MyPageFundingGaugeView">
          <div className="wholeGauage">전체 진행률</div>
          <div className="gauagePercent">50%</div>
          <div className="gauageBar">
            <div className="rectangle-wrapper">
              {/* <Rectangle className="rectangle-30" /> */}
            </div>
          </div>
          
        </div>
      </div>
    );
};
