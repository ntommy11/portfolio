import React, { useState } from 'react';
import SimpleImageSlider from "react-simple-image-slider";

import logo from './logo.svg';
import './App.css';
import PDF from './PDF';

const images = [
  {url: "6.jpg"},
  {url: "7.jpg"},
  {url: "8.jpg"},
  {url: "9.jpg"},
  {url: "1.jpg"},
  {url: "5.jpg"},
  {url: "10.jpg"},

]

function App() {
  return (
    <div style={{backgroundColor:"#242424"}}>
    <div className="App">
      <div className="App-header">
        <h1>NAVER FINANCIAL</h1>
        <div style={{paddingBottom:"20px"}}>
          <div style={{color: "white"}}>지원 PORTFOLIO</div>
        </div>
        <div style={{display:"flex", flexDirection:"row"}}>
          <div style={{flex:1, paddingRight:"30px"}}>
            <div className="Sub-section" >
              <div>.intro</div>
            </div>
            <div className="div">
              안녕하세요! 행복이 가득한 신입개발자 남세현입니다. 
              저의 프론트엔드 경력은 결코 길지 않습니다. 
              그러나 프로젝트 진행과정에서 프론트엔드 파트를 맡아 일하면서 큰 의미를 찾았습니다. 
              대학교에 들어와 다양한 프로그래밍을 해왔지만 프론트엔드 프로젝트를 하면서 밤낮없이 즐겁게 몰입했던 경험은 저에게 큰 이정표가 되었습니다. 
              이 분야에 프라이드를 갖고 좋은 동료가 되고 싶은 간절한 마음을 담아 네이버 파이낸셜에 지원합니다.
            </div>
          </div>
          <div style={{flex:1}}>
            <div className="Sub-section">
              <div>.personal_info</div>
            </div>
            <div>
            <div className="subtitle">이름/생년월일</div>
            <div className="div"> 남세현 1995.11.25</div>
            </div>           
            <div>
            <div className="subtitle">학력</div>
            <div className="div"> 홍익대학교 컴퓨터공학과 4학년</div>
            </div>
            <div>
              <div className="subtitle">성적</div>
              <div className="div"> 전체평점: 3.80/4.5 &nbsp;&nbsp;&nbsp;전공평점: 4.01/4.5</div>
            </div>
            <div>
              <div className="subtitle">어학</div>
              <div className="div"> <b>OPIc</b> IM2 &nbsp;&nbsp;&nbsp; <b>JLPT</b> 3급</div>
            </div>
            <div>
              <div className="subtitle">활동</div>
              <div className="div"> 학과 내 인공지능 연구실 PEM에서 학부연구생으로 활동 (2019.12~현재)</div>
            </div>
          </div>
        </div>

        <div className="Sub-section">
          <div>.project</div>
        </div>
        <div>
          <div className="subtitle">프로젝트 주제</div>
          <div className="div"> 서울과학기술대학교 학교생활 도우미 어플리케이션 제작</div>
        </div>     
        <div>
          <div className="subtitle">프로젝트 참여 인원</div>
          <div className="div"> 3명</div>
        </div> 
        <div>
          <div className="subtitle">프로젝트 개발 기간</div>
          <div className="div"> 2021.1.22~2021.2.1 (약 2주)</div>
        </div>  
        <div>
          <div className="subtitle">개요</div>
          <div className="div"> 서울과학기술대학교 미래융합대학의 시간표 등록, 편집, 수업 알림 등의 일정관리 기능과 학생들과 학교 간 소통을 위한 커뮤니티 기능을 포함하는 종합 어플리케이션</div>
        </div>  
        <div>
          <div className="subtitle">기술 스택</div>
          <div className="div"> <b>OS</b> Android, ios; <b>PL</b> Javascript; <b>DB</b> MySQL with GraphQL; <b>Framework</b> React Native (EXPO), Prisma;</div>
        </div>  
        <div>
          <div className="subtitle">Key Features</div>
          <div className="div"><br/>&nbsp;&nbsp;1. 동적으로 변하는 시간표 관리. 수업을 등록하거나 삭제할 수 있고, 유저의 수업 구성에 따라 동적으로 다음 수업 및 일정표를 생성</div>
          <div className="div"><br/>&nbsp;&nbsp;2. 유저의 커스텀 푸시알림 기능. ON/OFF가 가능하고 수업, 공지 등에 대한 알림을 원하는 텀으로 설정할 수 있다.</div>
          <div className="div"><br/>&nbsp;&nbsp;3. 커뮤니티. 다양한 게시판에서 학생들끼리 소통하고, 학교의 공지도 확인할 수 있다.</div>        
          <div className="div"><br/>&nbsp;&nbsp;4. 메모 기능. G사의 KEEP 과 유사한 메모 기능이 있다.</div>
        </div> 
        <div>
          <div className="subtitle">기여(33%)</div>
          <div className="div"> 인증 flow와 더불어 위의 Key Features에서 1,2번을 중점적으로 구현. 수업 검색, 등록, 삭제 및 시간표 생성로직. 푸시알림 설정과 ICS 스케쥴 연동기능 </div>
        </div>  
        <div>
          <div className="subtitle">느낀점</div>
          <div className="div"> <br/>&nbsp;&nbsp;<b>1 어려웠던 점.</b> 개발 기간이 가장 큰 난관이었습니다. 자바스크립트라는 언어에 대한 경험이 없었고, React의 구조라던가 어플리케이션 개발의 전체적인 프로세스를 몰랐던 터라 2주라는 짧은 기간동안 이를 숙지하고 개발하는 것은 결코 만만치 않았습니다.
          그러나, 이때까지 제가 컴퓨터공학도로서 키워왔던 핵심 역량 두가지 덕분에 이를 돌파할 수 있었습니다. 바로 <b>침착하게 이해하기</b>와 어찌됐건 해결해내는 <b>돌파력</b>입니다.
          제가 공부하면서 깨달은 것은 "어려운 것이 아니라 낯선 것이다"라는 것입니다. 차분하게 낯섦을 받아들이고 빨리 익숙해지자!는 마인드는 이번 프로젝트에서 정말 큰 힘이 되었습니다.</div>
          <div className="div"><br/>&nbsp;&nbsp;<b>2 최적화에 대하여.</b> 프론트엔드 부분을 맡고 개발을 진행하면서 느낀 것은, 생각보다 자료구조나 최적화 방법에 대한 많은 고민이 필요하다는 것이었습니다.
          단순이 DB의 데이터를 예쁘게 디스플레이하는 것이 아닌, 데이터를 최소한으로 fetch하고 잘 전처리해야 하며, 또한 적절한 컴포넌트 레벨에서 쿼리를 사용하므로써 서버의 부하를 최소화할 수 있다는 것이었습니다.
          평소에 온라인 채점사이트에서 꾸준히 Problem Solving을 해왔던 것이 정말 도움이 되었습니다. </div>
        </div>  
        <div className="subtitle">스크린샷</div>
        <Slider/>
        <div className="Sub-section">
          <div>.paper</div>
        </div>
        <div>
          <div className="subtitle">주제</div>
          <div className="div"> Improving Trajectory Pattern Prediction Model Using Bayesian Optimization(베이지안최적화를 이용한 이동경로예측 모델의 성능 개선)</div>
        </div>  
        <div>
          <div className="subtitle">개요</div>
          <div className="div"> 딥러닝 모델의 하이퍼파라미터 자동 탐색을 통해 예측 모델의 성능을 개선하는 법을 연구</div>
        </div>  
        <div>
          <div className="subtitle">주요 기술</div>
          <div className="div"> <b>PL</b> Python <b>Tech</b> 딥러닝, AutoML <b>Platform</b> Microsoft Azure</div>
        </div>  
        <div>
          <div className="subtitle">성과</div>
          <div className="div"> 한국정보처리학회 학술대회 은상 수상</div>
        </div>  
        <div>
          <div className="subtitle">느낀점</div>
          <div className="div"> 비록 제가 지원하는 직무(Front-End)와 직접적으로 연관된 경험은 아니지만, 인공지능 분야의 연구를 하면서 개발자로서의 역량이 크게 발전했음을 느꼈습니다. 다양한 디버깅 경험과 새로운 지식에 대한 접근법 및 구현력을 업그레이드했던 경험은 저의 프론트엔드 프로젝트를 진행할 때도 크나큰 힘이 되었습니다.</div>
        </div>  
        <div>
          <div className="subtitle">링크</div>
          <a href="https://drive.google.com/file/d/1t1luMcqzNXsqjBazC1Q0CZrG_2n413cs/view?usp=sharing" className="div" > 다운로드</a>
        </div> 
        <div style={{alignSelf:"center"}}>
          <img src="award.jpeg" width={300} height={400} alt="award"/>
        </div>
        <div className="Sub-section">
          <div>.end</div>
        </div>
        <div className="div"> 읽어주셔서 감사합니다.</div>
        </div>

      <div>
        
      </div>
    </div>
    </div>
  );
}

export default App;

const Slider = () => {
  return (
    <div style={{alignSelf:"center"}}>
      <SimpleImageSlider
        width={144*2}
        height={296*2}
        images={images}
        showNavs={true}
        showBullets={true}
        
      />
    </div>
  );
}
