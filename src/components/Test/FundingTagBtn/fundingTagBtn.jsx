import React from "react";
import "./fundingTagBtnStyle.scss";

export default function FundingTagBtn () {
  return (
      <div className="fundingOpenBtnBox">
          <div className="fundingOpenBtnView">
              <div className="fundingOpenBtnTitle">🔗 펀딩 태그</div>
              <div className="fundingOpenBtnOverlap">
                <button className="fundingOpenBtn"># 생일</button>
              </div>
              <div className="fundingOpenBtnOverlap">
                <button className="fundingOpenBtn"># 졸업</button>
              </div>
              <div className="fundingOpenBtnOverlap">
                <button className="fundingOpenBtn"># 기타</button>
              </div>
          </div>
      </div>
  );
};