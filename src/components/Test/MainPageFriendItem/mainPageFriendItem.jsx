import React from 'react';
import "./mainPageFriendItemStyle.scss";
import img from "./rectangle-7.png";
import img2 from "./image-25.png";

export default function MainPageFriendItem () {
    return (

          <div className="overlap">
            <img className="img" alt="Rectangle" src={img} />
            <img className="ellipse" alt="Ellipse" src={img2} />
            <div className="group">
              <div className="overlap-group">
                <div className="group-2">
                  <div className="text-wrapper-2">구태형</div>
                  <div className="text-wrapper-3">D - 14</div>
                  <div className="text-wrapper">#생일</div>
                </div>
                <div className="rectangle-wrapper">
                    {/* <Rectangle className="rectangle-30" /> */}
                  </div>
              </div>
            </div>
          </div>

    );
};

