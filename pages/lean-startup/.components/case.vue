<style lang="less" scoped>
.case {
  margin: 0 auto;
  padding-bottom: 240px;
  max-width: 1024px;
  background-color: #202225;
}
.case-title {
  margin-bottom: 100px;
  padding: 0 60px;
}
.main-title {
  margin: 0;
  font-weight: 900;
  font-size: 48px;
  line-height: 76px;
  letter-spacing: -0.06em;
  color: #EDF4FF;
}
.case-content {
  padding: 0 60px;
}
.top {
  display: flex;
  margin-bottom: 100px;
  width: 100%;
}
.description {
  display: flex;
  flex-direction: column;
  padding: 64px 58px 64px 0;
  width: 50%;
}
.description-title {
  margin-bottom: 10px;
  font-weight: 900;
  font-size: 32px;
  line-height: 52px;
  letter-spacing: -0.04em;
  color: #EDF4FF;
}
.description-content {
  font-size: 24px;
  line-height: 42px;
  letter-spacing: -0.08em;
  color: #CBD3DE;
}
.image {
  display: flex;
  align-items: center;
  max-width: 427px;
  width: 100%;
}
.first-img {
  background-size: cover;
  background-position: center;
  background-image: url(src=~/assets/lean-startup-section4-illust1@3x.png);
}
.imgs {
  padding-top: 100%;
  max-width: 427px;
  width: 100%;
}
.bottom {
  display: flex;
  align-items: center;
  text-align: right;
  width: 100%;
}
.second-img {
  margin-right: 27px;
  background-image: url(src=~/assets/lean-startup-section4-illust2.png);
  background-size: cover;
  background-position: center;
}
.second-description {
  width: 50%;
}
@media (max-width: 1023px) {
  .case {
    max-width: 517px;
    text-align: center;
  }
  .main-title {
    font-size: 32px;
    line-height: 52px;
  }
  .case-content {
    padding: 0;
  }
  .top {
    flex-direction: column;
    align-items: center;
  }
  .description {
    width: 100%;
    padding: 0;
    margin-bottom: 80px;
  }
  .description-title {
    margin-bottom: 20px;
  }
  .description-content {
    text-align: center;
  }
  .bottom {
    flex-direction: column-reverse;
    align-items: center;
  }
  .second-img {
    margin: 0;
  }
  .second-description {
    width: 100%;
    margin-bottom: 80px;
  }
}
@media (max-width:767px) {
  .main-title {
    padding: 0 37px;
  }
  .top {
    margin-bottom: 60px;
  }
}
@media (max-width:540px) {
  .case {
    max-width: 335px;
  }
  .case-title {
    padding: 0;
  }
  .main-title {
    padding: 0;
  }
  .description {
    margin-bottom: 20px;
  }
  .description-title {
    font-size: 21px;
    line-height: 32px;
    text-align: left;
  }
  .description-content {
    font-size: 16px;
    line-height: 28px;
    text-align: left;
  }
  .second-img {
    width: 100%;
  }
  .second-description {
    margin-bottom: 20px;
    text-align: center;
  }
}
</style>
<template lang="pug">
  section.case
    .case-title
      h2.main-title 린스타트업은 꽤#[br] 가까이에 있습니다.
    .case-content
      .top
        .description
          .description-title 배달의 민족
          .description-content.
            전화번호부 앱으로 좋은 반응을 기대해 시작했
            으나 이용률이 적어, 전화가 많이 일어나는 배달
            사업으로 전환. 사업 초기엔 전단지를 직접 수거
            하여 업체를 등록 하거나, 앱으로 주문시 앱 관리
            자가 업체에 직접 전화해 주문을 넣는 등 최소 기
            능으로 시작 및 검증받아 대표 배달앱으로 발전.
        .image
          .first-img.imgs
      .bottom
        .image
          .second-img.imgs
        .second-description
          .description-content.
            전화번호부 앱을 만들때 모든 비용과 시간을 투입 했
            다면 지금의 배달의 민족은 없었을 겁니다. 제품의
            핵심 가치를 우선적으로 검증받기 위해 최소기능 제
            품으로 만들어 비용과 시간을 절약하고  검증을 통해
             제품을 개선하거나, 다른 시도를 하는 것에 집중하여
              지금의 대표 적인 서비스로 발전 되었습니다.
</template>
