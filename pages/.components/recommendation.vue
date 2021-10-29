`<style lang="less" scoped>
  .recommendation {
    background-color: #202225;
    text-align: center;
    padding-bottom: 240px;
  }
  .recommendation-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    width: 931px;
    height: 365px;
    position: relative;
    color: #EDF4FF;
  }
  .recommendation-thumbs-up {
    padding-top: calc((365/931) * 100%);
    width: 100%;
    position: absolute;
    left: 0;
    background-image: url('~@/assets/pc-main-section2-thumbsup@3x.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .recommendation-sub-title {
    margin-bottom: 18px;
    font-size: 24px;
    line-height: 42px;
    letter-spacing: -0.08em;
  }
  .recommendation-hero-title {
    font-weight: 900;
    font-size: 48px;
    line-height: 76px;
    letter-spacing: -0.06em;
  }
  @media (max-width: 1023px) {
    .recommendation-text {
      width: 701px;
      height: 365px;
    }
    .recommendation-thumbs-up {
      padding-top: calc((372/701) * 100%);
      width: 100%;
      background-image: url('~/assets/tablet-main-section2-thumbsup.png');
    }
    .recommendation-sub-title {
      font-size: 21px;
      line-height: 36px;
    }
    .recommendation-hero-title {
      font-size: 32px;
      line-height: 52px;
    }
  }
  @media (max-width: 767px) {
    .recommendation-text {
      max-width: 375px;
      width: 100%;
      height: 294px;
    }
    .recommendation-thumbs-up {
      padding-top: calc((294/375) * 100%);
      width: 100%;
      background-image: url('~/assets/m-main-section2-thumbsup.png');
    }
    .recommendation-sub-title {
      font-size: 16px;
      line-height: 28px;
    }
    .recommendation-hero-title {
      font-size: 24px;
      line-height: 42px;
    }
  }
</style>
<template lang="pug">
  section.recommendation
      .recommendation-text
        .recommendation-thumbs-up
        .recommendation-sub-title #애플리케이션 #웹사이트 #프로그램 #[br]#소프트웨어 #IT사업
        .recommendation-hero-title 스타셸 스튜디오는 #[br]린스타트업을 추천합니다.
</template>
