<style lang="less" scoped>
  .home-container {
    width: 100%;
    background-color: #202225;
  }
  .make-info {
    display: flex;
    flex-direction: column;
    margin: 80px auto;
    margin-bottom: 240px;
    text-align: center;
    width: 588px;
  }
  .make-title-info {
    font-size: 48px;
    font-weight: 900;
    color: #EDF4FF;
    margin:0 0 40px 0;
    letter-spacing: -0.06em;
  }
  .make-content-info {
    font-size: 24px;
    color: #C9D0DA;
    line-height: 42px;
    margin: 0 0 16px 0;
    letter-spacing: -0.1em;
  }
  .make-subcontent-info {
    font-size: 24px;
    color: #EDF4FF;
    line-height: 42px;
    margin: 0 0 0 0;
    letter-spacing: -0.1em;
  }
  @media (max-width: 1023px) {
    .make-info {
      width: 548px;
      text-align: center;
    }
    .make-title-info {
      font-size: 32px;
      line-height: 52px;
    }
    .make-content-info {
      font-size: 21px;
      line-height: 36px;
    }
    .make-subcontent-info {
      font-size: 21px;
      line-height: 32px;
    }
  }
  @media (max-width: 767px) {
    .make-info {
      width: auto;
      margin-top: 60px;
      margin-bottom: 140px;
      padding: 0 36px;
    }
    .make-title-info {
      font-size: 24px;
      line-height: 42px;
      margin:0 0 30px 0;
    }
    .make-content-info {
      font-size: 16px;
      line-height: 28px;
      margin-bottom: 16px;
    }
    .make-subcontent-info {
        font-size: 16px;
        line-height: 28px;
      }
    .section-contents {
      width: 1000px;
      &.full-width {
        width: 100%;
      }
    }
  }

  @media (min-width: 1366px) {
    .section {
      width: 100%;
      padding: 0 231px;
    }
  }
  @media (max-width: 1365px) and (min-width: 1024px) {
    .section {
      padding: 0 60px;
    }
  }
  @media (max-width: 1024px) and (min-width: 768px) {
    .section {
      padding: 0 40px;
    }
  }
  @media (max-width: 767px) and (min-width: 375px) {
    .section {
      padding: 0 16px;
    }
  }
</style>
<template lang="pug">
  article.home-container
    homeNav
    section.section
      mainText
    card
    section.section
      recommendation
    section.section
      cycle
    section.section
      .make-info
        .make-title-info 크게 만들지 않아도#[br] 멋진 제품을 만들 수 있습니다.
        .make-content-info 처음부터 거대한 서비스를 만들어 오픈하면 사용자들의 마음에 쏙 들 확률은 얼마나 될까요? 반응이 좋지 않다는 것을 알았을 때는 이미 많은 비용을 지출한 후 일수도 있습니다.
        .make-subcontent-info 우선, 작게 만들어 사용자를 만나고, 피드백을 반영하여 개선, 반복해 나간다면 더 적은 비용으로 멋진 제품을 만들수 있을 겁니다
    section.section
      evidence
    section.section
      waste
    section.section
      portfolio
    section.section
      review
    request
    footerf
</template>
<script>
import homeNav from './.components/home-nav';
import mainText from './.components/main-text';
import card from './.components/card';
import recommendation from './.components/recommendation';
import cycle from './.components/cycle';
import evidence from './.components/evidence';
import waste from './.components/waste';
import portfolio from './.components/portfolio';
import review from './.components/review';
import request from './.components/request';
import footerf from './.components/footer';

export default {
  components: {
    homeNav,
    mainText,
    card,
    recommendation,
    cycle,
    evidence,
    waste,
    portfolio,
    review,
    request,
    footerf,
  },
};
</script>
