<style lang="less" scoped>
  .evidence {
    width: 904px;
    display: flex;
    justify-content: center;
    padding: 0 0 240px;
    margin: 0 auto;

  }
  .evidence-frame {
    display: flex;
  }
  .evidence-text {
    margin: 0 121px 0 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .evidence-title {
    font-weight: 900;
    font-size: 48px;
    color: #EDF4FF;
    line-height: 76px;
    margin-bottom: 40px;
  }
  .evidence-content {
    font-size: 24px;
    color: #C9D0DA;
    margin-bottom: 16px;
    letter-spacing: -0.1em;
    line-height: 42px;
  }
  .evidence-subcontent {
    color: #EDF4FF;
    font-size: 24px;
    letter-spacing: -0.1em;
    line-height: 42px;
    font-weight: bold;
  }
  .evidence-img {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .image {
    width: 340px;
    height: 340px;
    background-image: url('~/assets/main-section-4@3x.png');
    background-size: cover;
  }
  @media (max-width: 1023px) {
    .evidence {
      width: 100%;
    }
    .evidence-frame {
      display: flex;
      text-align: center;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;
    }
    .evidence-text {
      width: 100%;
      padding: 0 74px;
      margin: 0;
  }
    .evidence-img {
      width: 340px;
      margin-bottom: 80px;
      justify-content: center;
    }
    .evidence-title {
      width: 422px;
      letter-spacing: -0.04em;
      font-size: 32px;
      line-height: 52px;
    }
    .evidence-content {
      font-size: 21px;
      line-height: 36px;
    }
    .evidence-subcontent {
      font-size: 21px;
      line-height: 36px;
    }
  }
  @media (max-width: 767px) {
    .evidence {
      width: 100%;
    }
    .evidence-img {
      margin-bottom: 60px;
    }
    .evidence-text {
      padding: 0 35px;
    }
    .evidence-title {
      width: 256px;
      margin-bottom: 30px;
      letter-spacing: -0.04em;
      font-size: 24px;
    }
    .evidence-content {
      font-size: 16px;
      line-height: 28px;
    }
    .evidence-subcontent {
      font-size: 16px;
      line-height: 28px;
    }
  }
</style>
<template lang="pug">
    section.evidence
      .evidence-frame
        .evidence-text
          .evidence-title.
            가설보다 사실에 집중
            하면 위험을 줄일 수
            있습니다.
          .evidence-content.
            멋진 아이디어와 두꺼운 사업계획서, 철저한 시장
            조사에 따른 완벽한 가설에 막대한 비용을 투입해
            거대한 제품을 만든다면 위험해 질 수도 있습니다.
            예상치 못한 반응을 얻을 수 있기 때문이죠.
          .evidence-subcontent.
            아이디어, 즉 핵심가치를 서비스 순환이 가능한 최소
            기능 제품으로 만들어 시장에 내놓고, 검증과 사실에
            집중해 제품을 개선 한다면 위험을 최소화 하여 당신
            의 IT 사업을 발전 시킬수 있을 겁니다.
        .evidence-img
          .image
</template>
