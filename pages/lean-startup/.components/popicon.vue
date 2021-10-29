<style lang="less" scoped>
.popicon {
  margin: 0 auto;
  padding-bottom: 240px;
  max-width: 892px;
  text-align: center;
  background-color: #202225;
}
.pop-frame {
  margin: 0 auto;
  max-width: 1024px;
  width: 100%;
  height: 342px;
  position: relative;
}
.pop-img {
  padding-top: calc((342/892) * 100%);
  width: 100%;
  position: absolute;
  left: 0;
  background-image: url(src=~/assets/pc-lean-startup-section5.png);
  background-size: cover;
  background-position: center;
}
.pop-main-title {
  margin-bottom: 20px;
  font-weight: 900;
  font-size: 48px;
  line-height: 76px;
  letter-spacing: -0.06em;
  color: #EDF4FF;
}
.pop-first-sub-title {
  font-size: 24px;
  line-height: 42px;
  letter-spacing: -0.08em;
  color: #CBD3DE;
  margin-bottom: 20px;
}
.pop-second-sub-title {
  font-size: 24px;
  line-height: 42px;
  letter-spacing: -0.1em;
  color: #EDF4FF;
}
.width-1023 {
  display: none;
}
.width-375 {
  display: none;
}
@media (max-width: 1023px) {
  .pop-frame {
    max-width: 768px;
    width: 100%;
  }
  .pop-img {
    padding-top: calc((342/768) * 100%);
    width: 100%;
    background-image: url(src=~/assets/tablet-lean-startup-section5.png);
  }
  .pop-main-title {
    font-size: 32px;
    line-height: 52px;
  }
  .pop-first-sub-title {
    font-size: 24px;
    line-height: 42px;
  }
  .pop-second-sub-title {
    font-size: 24px;
    line-height: 42px;
  }
  .width-1023 {
    display: block;
  }
  .width-375 {
    display: none;
  }
}
@media (max-width: 767px) {
  .pop-frame {
    max-width: 540px;
    width: 100%;
  }
  .pop-img {
    padding-top: calc((342/540) * 100%);
    width: 100%;
    background-image: url(src=~/assets/width540-lean-startup-section5@3x.png);
  }
}
@media (max-width: 540px) {
  .pop-frame {
    padding: 38px 0;
    max-width: 429px;
    width: 100%;
  }
  .pop-img {
    padding-top: calc((322/375) * 100%);
    width: 100%;
    background-image: url(src=~/assets/m-lean-startup-section5.png);
  }
  .pop-main-title {
    padding: 18px 0 0 0;
    margin: 0 0 20px 0;
    font-size: 32px;
    line-height: 52px;
  }
  .pop-first-sub-title {
    font-size: 16px;
    line-height: 28px;
  }
  .pop-second-sub-title {
    font-size: 16px;
    line-height: 28px;
  }
  .width-1023 {
    display: none;
  }
  .width-375 {
    display: block;
  }
}
</style>
<template lang="pug">
  section.popicon
    .pop-frame
      .pop-img
      h1.pop-main-title 우리는 이런#[br] 린스타트업을 합니다.
      .pop-first-sub-title 계획과 현실의 괴리는 정말 크기에,#[br.width-1023]예상치#[br.width-375] 못했던 결과로 다가올 수 있습니다.
      .pop-second-sub-title 스타셸 스튜디오는 그 결과가 당신에게#[br.width-1023] 큰 리스크로#[br.width-375] 다가오지 않도록 도울겁니다.
</template>
