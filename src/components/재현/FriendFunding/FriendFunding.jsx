import React from 'react';
import "./FriendFundingStyle.scss";  
import img from "./image-25.png";

export default function FriendFunding () {
    return (
        <div className="friendFunding">
            <div className="friendInfo">
                <img className="friendProfileImg" alt="friendProfileImg" src={img} />
                <div className="friendNameAndTag">
                    <div className="friendName">구태형</div>
                    <div className="friendTag">#생일</div>
                </div>
                <div className="dDay">D-20</div>
            </div>
           
            <div className="img">
              <img className="fundingItem1" alt="Rectangle" src= {img} />
            <div className="fundingItemSub">
              <img className="fundingItem2" alt="Rectangle" src= {img} />
              <img className="fundingItem3" alt="Rectangle" src= {img} />
            </div>
            </div>

            <div className="MyPageFundingGaugeView">
                <div className="gauagePercent">50%</div>
                <div className="gauageBar">
                    <div className="rectangle-wrapper">
                        {/* <Rectangle className="rectangle-30" /> */}
                    </div>
                </div>
            </div>

            {/* <div className="group">
                <img className="polygon" alt="Polygon" src= {img} />
            </div>*/}
          </div> 
    );
};

