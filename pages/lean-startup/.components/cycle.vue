<style lang="less" scoped>
  @media (max-width:3000px) {
    .cycle {
      margin: 0 auto;
      padding: 180px 0 240px 0;
      text-align: center;
      background-color: #202225;
    }
    .cycle-title {
      margin-bottom: 152px;
    }
    .main-title {
      margin:0 0 30px 0;
      font-weight: 900;
      font-size: 48px;
      line-height: 76px;
      color: #edf4ff;
    }
    .sub-title {
      margin: 0;
      font-size: 24px;
      line-height: 42px;
      color: #cbd3de;
    }
    .cycle-content {
      width: 794px;
      height: 714px;
      margin: 0 auto;
      position: relative;
    }
    .touch-icon{
      width: 70px;
      height: 70px;
      position: absolute;
      background-image: url(src=~/assets/tap-icon@3x.png);
      background-size: cover;
    }
    .speech-bubble {
      display: flex;
      position: absolute;
      z-index: 1;
      width: 100%;
      margin-left:110px;
      top: -70px;
      justify-content: right;
    }
    .bubble-img {
      width: 399px;
      height: 221px;
      position: absolute;
      background-size: cover;
      background-image: url(src=~/assets/speech-bubble@x3.png);
      padding: 30px;
    }
    .bubble-text {
      height: 124px;
      text-align: left;
    }
    .bubble-main-title {
      color: #EDF4FF;
      font-size: 24px;
      line-height: 42px;
      margin: 0 0 10px;
      letter-spacing: -0.1em;
    }
    .bubble-sub-title {
      color: #CBD3DE;
      font-size: 21px;
      line-height: 36px;
      letter-spacing: -0.07em;
    }
    .cycle-outline{
      margin: 0 auto;
      width: 660px;
      height: 660px;
      position: relative;
      border-radius: 50%;
      box-shadow: inset -4px -4px 12px #313439, inset 4px 4px 12px #131416;
      background: linear-gradient(141.28deg, #202225 0.68%, #1E2023 92.23%);
    }
    .cycle-arrow{
      width: 660px;
      height: 660px;
      background-image: url(src=~/assets/cycle@3x.png);
      position: absolute;
      background-size: 570px 550px;
      background-position: 40% 50%;
      animation-name: rotation;
      animation-duration: 5s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      background-repeat: no-repeat;
    }
    @keyframes rotation {
    0% {
      transform: rotate(0deg)
    }
    100% {
      transform: rotate(359deg)
    }
    }
    .cycle-inline{
      width: 330px;
      height: 330px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      box-shadow: -8px -7px 10px #3f414a, 8px 7px 10px #000000;
      background: linear-gradient(141.28deg, #202225 0.68%, #1E2023 92.23%);
    }
    .cycles {
      width: 327px;
      height: 327px;
      border-radius: 50%;
      position: absolute;
      box-shadow: -8px -7px 10px #3f414a, 8px 7px 10px #000000;
      background: linear-gradient(141.28deg, #202225 0.68%, #1E2023 92.23%);
    }
    .cycle-first {
      top: -30px;
      left: 50%;
      transform: translate(-50%, 0);
    }
    .cycle-second {
      bottom: 0;
      right: -67px;
    }
    .cycle-third {
      bottom: 0;
      left: -67px;
    }
    .cycle-in-text {
      padding-top: 57px;
      text-align: center;
    }
    .count {
      font-size: 24px;
      line-height: 46px;
      color: #5FFFDA;
    }
    .in-main-title {
      margin-bottom: 16px;
      font-weight: bold;
      font-size: 32px;
      line-height: 42px;
      color: #EDF4FF;
    }
    .in-sub-title {
      font-size: 21px;
      line-height: 36px;
      letter-spacing: -0.07em;
      color: #cbd3de;
    }
    .mobile-cycle-content {
      display: none;
    }
  }
  @media (max-width:1365px) {
    .cycle-content {
      display: flex;
      align-items: center;
      width: 705px;
      height: 705px;
    }
    .touch-icon {
      left: 50px;
      top: -30px;
    }
  }
  @media (max-width:1023px) {
    .main-title {
      margin:0 0 30px 0;
      font-weight: 900;
      font-size: 32px;
      line-height: 52px;
      color: #edf4ff;
    }
    .sub-title {
      margin: 0;
      font-size: 21px;
      line-height: 36px;
      color: #cbd3de;
    }
    .cycle-content {
      width: 572px;
      height: 572px;
      position: relative;
    }
    .touch-icon {
      width: 53px;
      height: 43px;
      left: 100px;
      top: -40px;
    }
    .speech-bubble {
      top: -120px;
      margin-left: 60px;
    }
    .bubble-img {
      width: 312px;
      height: 175px;
      padding: 20px;
    }
    .bubble-text {
      height: 98px;
    }
    .bubble-main-title {
      font-weight: 700;
      font-size: 21px;
      line-height: 32px;
      letter-spacing: -0.04em;
    }
    .bubble-sub-title {
      font-size: 16px;
      line-height: 28px;
      letter-spacing: -0.06em;
    }
    .cycle-outline {
      width: 572px;
      height: 572px;
    }
    .cycle-arrow {
      width: 500px;
      height: 500px;
      left: 31px;
      top: 32px;
      background-size: 482px 462px;
      background-position: 35% 50%;
    }
    .cycle-inline {
      width: 286px;
      height: 286px;
    }
    .cycles {
      width: 220px;
      height: 220px;
    }
    .cycle-first {
      top: -29px;
    }
    .cycle-second {
      bottom: 56px;
      right: 0;
    }
    .cycle-third {
      bottom: 56px;
      left: 0;
    }
    .cycle-in-text {
      padding-top: 36px;
    }
    .count {
      font-size: 16px;
      line-height: 30px;
    }
    .in-main-title {
      margin-bottom: 8px;
      font-size: 21px;
      line-height: 30px;
    }
    .in-sub-title {
      font-size: 16px;
      line-height: 28px;
    }
  }
  @media (max-width:767px) {
    .cycle-content {
      display: none;
    }
    .mobile-cycle-content {
      display: block;
    }
    .cycle-title {
      margin-bottom: 100px;
    }
    .second-speech-bubble {
      width: 332px;
      height: 196px;
      margin: 0 auto;
      padding: 30px;
      text-align: center;
      border-radius: 24px;
      border: 5px solid transparent;
      background-image: linear-gradient(#202225, #202225), linear-gradient(95.66deg, #5EFFD8 2.36%, rgba(122, 247, 255, 0.79) 104.39%);
      background-clip: padding-box, border-box;
    }
    .second-cycle-container {
      overflow: hidden;
    }
    .second-cycle-frame {
      display: flex;
      padding: 40px 0 60px 0;
      width: 544px;
      overflow:hidden;
      margin: 0 auto;
    }
    .arrow-direction {
      margin: 0 0 0 10px;
      width: 288px;
      background-image: url(src=~/assets/mobile-swiper-arrow.png);
      background-size: 54px 54px;
      background-position: right center;
      background-repeat: no-repeat;
      // justify-content: center;
    }
    .small-slide {
      width: 308px;
      position: relative;
    }
    .cycles {
      position: unset;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
<template lang="pug">
  section.cycle
    .cycle-title
      h1.main-title 린스타트업?
      .sub-title 단기간에 최소 기능 제품을 만들고 성과를 측정해#[br] 제품 개선에 반영하는 것을 반복하는 전략
    .cycle-content
      .touch-icon
      .speech-bubble
        .bubble-img
          .bubble-text
            h2.bubble-main-title 최소기능이란?
            .bubble-sub-title 예산, 개발배경, 핵심가치, 서비스 목표 등을 고려한 서비스 순환에 필요한 필수적인 기능
      .cycle-outline
        .cycle-arrow
        .cycle-inline
        .cycle-first.cycles
          .cycle-in-text
            .count 첫째
            .in-main-title 만들기
            .in-sub-title 핵심 가치와 최소 기능#[br]으로 구성된 제품을#[br] 빠르게 출시합니다.
        .cycle-second.cycles
          .cycle-in-text
            .count 둘째
            .in-main-title 축정하기
            .in-sub-title 출시 후 문제와#[br]실수, 성공, 실패를#[br] 측정합니다.
        .cycle-third.cycles
          .cycle-in-text
            .count 셋째
            .in-main-title 학습하기
            .in-sub-title 측정값을 토대로#[br]제품을 개선하거나#[br] 다른 시도를 합니다.

    .mobile-cycle-content
        .second-speech-bubble
          .bubble-text
            h2.bubble-main-title 최소기능이란?
            .bubble-sub-title 예산, 개발배경, 핵심가치, 서비스 목표 등을 고려한 서비스 순환에 필요한 필수적인 기능
        .second-cycle-container
          .second-cycle-frame
            .small-slide
              .arrow-direction
                .second-cycle-first.cycles
                  .cycle-in-text
                    .count 첫째
                    .in-main-title 만들기
                    .in-sub-title 핵심 가치와 최소 기능#[br]으로 구성된 제품을#[br] 빠르게 출시합니다.
            .small-slide
              .arrow-direction
                .second-cycle-second.cycles
                  .cycle-in-text
                    .count 둘째
                    .in-main-title 축정하기
                    .in-sub-title 출시 후 문제와#[br]실수, 성공, 실패를#[br] 측정합니다.
            .small-slide
              .arrow-direction
                .second-cycle-third.cycles
                  .cycle-in-text
                    .count 셋째
                    .in-main-title 학습하기
                    .in-sub-title 측정값을 토대로#[br]제품을 개선하거나#[br] 다른 시도를 합니다.

</template>
