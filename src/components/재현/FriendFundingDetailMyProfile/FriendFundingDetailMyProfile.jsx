import React from 'react';
import "./FriendFundingDetailMyProfileStyle.scss";  
import img from "./image-25.png";
import img2 from "./airplane.png";

export default function FriendFundingDetailMyProfile () {
    return (
        <div className="MyPageFundingRecordItem">
            <div className='myProfileInfo'>
                <img className="myProfileImage" alt="MyProfile" src= {img}/>
                <div className="myName">구정은</div>
                <div className="fundingTag">#생일</div>
            </div>
            <div className="fundingMessageBackSpace">
                <div className="fundingMessage">생일이에요~ 축하해 주세요 :&gt;</div>
            </div>
            <div className='fundingFriendsTitle'>
                <img className="paperAirplane" alt="paperAirplane" src={img2} />
                <div className="fundingFriendsIntro">구정은님에게 펀딩한 친구들</div>
            </div>
            <div className="fundingFriends">
                <img className="img" alt="Ellipse" src={img} />
                <img className="img" alt="Ellipse" src={img} />
                <img className="img" alt="Ellipse" src={img} />
                <img className="img" alt="Ellipse" src={img} />
                <img className="img" alt="Ellipse" src={img} />
                <button className="nextFriends">&gt;</button>
            </div>
            
        </div>
    );
};