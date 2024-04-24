import React from 'react';
import "./myPageFundingRecordItemStyle.scss";  
import img from "./image-25.png";

export default function MyPageFundingRecordItem () {
    return (
        <div className="myPageFundingRecordItem">
            <img className="image" alt="Image" src={img} />
            <div className= "myPageFundingRecordText">
                <div className='showFunding'>
                    <div className="fundingTag"># 생일</div>
                    <div className='lookingDetail'>
                        <div className="showDetail">자세히 보기</div>
                        <button className="showDetailButton">&gt;</button>
                    </div>
                </div>
                <p className="fundingDateTime">
                    펀딩 시작일 : 2024.01.23
                    <br />
                    펀딩 종료일 : 2024.04.05
                </p>
            
            <div className='showFundingGauge'>
                    <div className="participatePeople">2001명 참여</div>
                    <div className="fundingGaugePercent">98%</div>
            </div>
            
            {/* 게이지 바 */}
                <div className="gauageBar">
                    <div className="rectangle-wrapper">
                    {/* <Rectangle className="rectangle-30" /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};