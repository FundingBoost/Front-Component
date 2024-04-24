import React from 'react';
import "./myPageFundingRecordStyle.scss";  
import img from "./image-25.png";
import MyPageFundingRecordItem from "../MyPageFundingRecordItem/myPageFundingRecordItem";

export default function MyPageFundingRecord () {
    return (
        <div className="MyPageFundingRecord">
            <div className='title'>
                <div className="fundingRecordTitle">지난 펀딩 이력</div>
                <div className='detailed'>
                    <img className="detailedInquiryImg" alt="Line" src={img} />
                    <div className="detailedInquiry">상세조회</div>
                </div>
            </div>
            <div className="horizontalLine"></div>
                <div className="fundingRecordItem">
                        <MyPageFundingRecordItem />
                        <MyPageFundingRecordItem />
                        <MyPageFundingRecordItem />
                        <MyPageFundingRecordItem />
                        <MyPageFundingRecordItem />
                </div>
        </div>
    );
};