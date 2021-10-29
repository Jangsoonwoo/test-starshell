<style lang="less" scoped>
  .main-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    padding: 100px 0 80px 0;
  }
  .main-hero-title{
    color: #EDF4FF;
    font-size: 48px;
    margin: 0 0 30px 0;
    text-align: center;
    font-weight: 900;
    line-height: 76px;
    letter-spacing: -0.06em;
  }
  .main-sub-title {
    width: 100%;
    color: #CBD3DE;
    font-size: 24px;
    line-height: 42px;
    letter-spacing: -0.08em;
    text-align: center;
  }
  @media (max-width: 1023px) {
    .main-text {
      padding: 100px 0;
    }
    .main-hero-title {
      margin: 0 0 20px 0;
      font-size: 32px;
      line-height: 52px;
    }
    .main-sub-title {
      font-size: 21px;
      line-height: 32px;
    }
  }
  @media (max-width: 767px) {
    .main-text {
      padding: 80px 0;
    }
    .main-hero-title {
      font-size: 24px;
      line-height: 42px;
    }
    .main-sub-title {
      font-size: 16px;
      line-height: 28px;
    }
  }
</style>
<template lang="pug">
  section.main-text
    .main-hero-title 스타셸 스튜디오#[br] 린스타트업 개발 서비스
    .main-sub-title 우리는 당신의 IT 사업이 낭비 없이,#[br] 효율적으로 성장할 수 있도록 돕는 일을 합니다.
</template>
