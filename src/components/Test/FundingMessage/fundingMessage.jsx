import React from 'react';
import './fundingMessageStyle.scss';


export default function FundingMessage () {
    return (
        <div className="fundingMessageBox">
            <div className="fundingMessageView">
                <div className="fundingMessageTitle">
                    <span className="fundingMessageTitleText1">📜 펀딩 메세지 </span>
                    <span className="fundingMessageTitleText2">(선택)</span>
                </div>
                <input type='text' placeholder=" 오늘 생일입니다ㅎㅎ 펀딩해주세요 🎂" className="fundingMessage" />
            </div>
        </div>
    );
};

