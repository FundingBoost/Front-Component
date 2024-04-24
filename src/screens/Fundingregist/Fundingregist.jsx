import React from "react";
import { CalendarDefault } from "../../components/CalendarDefault";
import { SearchBar } from "../../components/SearchBar";
import { IconFieldCalendar1 } from "../../icons/IconFieldCalendar1";
import { IconFieldClear1 } from "../../icons/IconFieldClear1";
import "./style.css";

export default function Fundingregist () {
  return (
    <div className="FUNDINGREGIST">
      <div className="div-3">
        <div className="overlap">
          <div className="overlap">
            <img className="image" alt="Image" src="/img/image-28.png" />
            <div className="rectangle" />
            <div className="text-wrapper-5">4</div>
            <div className="rectangle-2" />
            <div className="group">
              <div className="rectangle-3" />
            </div>
            <img className="element" alt="Element" src="/img/001-1-1.png" />
            <div className="rectangle-4" />
            <div className="text-wrapper-6"># 생일</div>
            <div className="rectangle-5" />
            <div className="text-wrapper-7"># 졸업</div>
            <div className="rectangle-6" />
            <div className="text-wrapper-8"># 기타</div>
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <div className="text-wrapper-9">펀딩 등록하기</div>
              </div>
            </div>
            <CalendarDefault className="calendar-default-instance" />
            <div className="text-wrapper-10">📌 펀딩 종료일</div>
            <div className="text-wrapper-11">🔗 펀딩 태그</div>
            <p className="p">
              <span className="text-wrapper-12">📜 펀딩 메세지 </span>
              <span className="text-wrapper-13">(선택)</span>
              <span className="text-wrapper-12">&nbsp;</span>
            </p>
            <div className="field-content">
              <IconFieldCalendar1 className="icon-instance-node-2" />
              <div className="text-wrapper-14">25/11/2022</div>
              <IconFieldClear1 className="icon-instance-node-2" />
            </div>
            <div className="group-2" />
            <div className="text-wrapper-15">오늘 생일입니다ㅎㅎ 펀딩해주세요 🎂</div>
            <div className="text-wrapper-16">11/20</div>
            <div className="rectangle-7" />
            <div className="div-wrapper">
              <div className="text-wrapper-17">친구 펀딩</div>
            </div>
            <div className="group-3">
              <div className="text-wrapper-17">쇼핑하기</div>
            </div>
            <div className="group-4">
              <div className="text-wrapper-17">MY</div>
            </div>
            <div className="group-5">
              <div className="text-wrapper-17">홈</div>
            </div>
            <SearchBar
              className="search-bar-instance"
              clearIcon={false}
              mic={false}
              placeholderLabelClassName="search-bar-2"
              state="default"
              topbar={false}
            />
            <img className="image-2" alt="Image" src="/img/image-38.png" />
            <img className="image-3" alt="Image" src="/img/image-9.png" />
            <div className="group-6">
              <div className="text-wrapper-18">양혜인 ▽</div>
            </div>
          </div>
          <p className="text-wrapper-19">
            [단독] [꾸미기 스티커 증정] 플레저 LED 블루투스 스피커 마이크 레트로 포터블 여행선물
          </p>
          <div className="overlap-2">
            <div className="rectangle-8" />
            <div className="text-wrapper-20">1</div>
            <div className="rectangle-9" />
            <div className="view">
              <div className="overlap-3">
                <img className="image-4" alt="Image" src="/img/image-25.png" />
                <div className="text-wrapper-21">죠르디 피규어 LED 무드등</div>
                <div className="text-wrapper-22">옵션</div>
                <div className="text-wrapper-23">옵션선택어쩌고저쩌고</div>
                <div className="text-wrapper-24">9,900 원</div>
              </div>
            </div>
            <div className="ellipse" />
          </div>
          <div className="overlap-4">
            <div className="rectangle-10" />
            <div className="text-wrapper-25">2</div>
          </div>
          <p className="text-wrapper-26">Apple 2024 맥북에어 13 M3 (8C CPU 8C GPU)/8GB/256GB</p>
          <div className="overlap-5">
            <div className="rectangle-10" />
            <div className="text-wrapper-27">3</div>
          </div>
          <p className="text-wrapper-28">아이패드 에어/4/5세대 10.9 인치 클리어 애플펜슬 수납 스마트커버</p>
          <div className="overlap-6">
            <div className="text-wrapper-29">옵션</div>
          </div>
          <div className="text-wrapper-30">옵션선택어쩌고저쩌고</div>
          <div className="text-wrapper-31">1,510,500 원</div>
          <div className="overlap-7">
            <div className="text-wrapper-29">옵션</div>
            <div className="text-wrapper-32">옵션선택어쩌고저쩌고</div>
            <div className="group-7">
              <div className="overlap-8">
                <div className="text-wrapper-33">옵션</div>
              </div>
              <div className="text-wrapper-34">옵션선택어쩌고저쩌고</div>
            </div>
          </div>
          <div className="group-8">
            <div className="overlap-8">
              <div className="text-wrapper-33">옵션</div>
            </div>
            <div className="text-wrapper-34">옵션선택어쩌고저쩌고</div>
          </div>
          <div className="text-wrapper-35">20,900 원</div>
        </div>
        <div className="group-9">
          <img className="shadow-dark" alt="Shadow dark" src="/img/shadow-dark-2dp.png" />
          <div className="text-wrapper-36">펀딩 생성하기</div>
        </div>
        <img className="rectangle-11" alt="Rectangle" src="/img/rectangle-7.png" />
      </div>
    </div>
  );
};
