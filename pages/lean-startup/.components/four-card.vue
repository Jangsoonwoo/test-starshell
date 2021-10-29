<style lang="less" scoped>
  .four-cards-container {
    padding-bottom: 240px;
    background-color: #202225;
  }
  .title-frame {
    text-align: center;
  }
  .main-title-box {
    display: inline-block;
    margin: 0 0 60px 0;
    padding: 36px 45px;
    border-radius: 48px;
    box-shadow: inset -4px -3px 10px #464a54, inset 4px 4px 10px #030303;
  }
  .sub-title {
    margin: 80px 100px 100px;
    font-size: 24px;
    line-height: 42px;
    letter-spacing: -0.08em;
    color: #cbd3de;
  }
  .main-title {
    width: 297px;
    height: auto;
  }
  .cards-frame {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
  }
  .cards-top {
    display: flex;
  }
  .cards-bottom {
    display: flex;
  }
  .card1-1 {
    margin: 0 22px 22px 0;
  }
  .card2-1 {
    margin: 0 22px 0 0;
  }
  .cards {
    padding: 40px;
    width: 442px;
    height: 404px;
    border-radius: 48px;
    box-shadow: inset -4px -3px 10px #464a54, inset 4px 4px 10px #030303;
    background: linear-gradient(141.28deg, #202225 0.68%, #1E2023 92.23%);
  }
  .card1-1-img {
    background-image: url(src=~/assets/thumbs-up@3x.png);
    background-size: cover;
    background-position: center;
  }
  .card1-2-img {
    background-image: url(src=~/assets/arrow-down@3x.png);
    background-size: cover;
    background-position: center;
  }
  .card2-1-img {
    background-image: url(src=~/assets/tools@3x.png);
    background-size: cover;
    background-position: center;
  }
  .card2-2-img {
    background-image: url(src=~/assets/wrench@3x.png);
    background-size: cover;
    background-position: center;
  }
  .icon {
    margin-bottom: 30px;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    box-shadow: -3px -2px 16px #525560, 2px 4px 12px #000000;
    background: linear-gradien;
  }
  .card-title {
    font-size: 32px;
    line-height: 52px;
    font-weight: 900;
    letter-spacing: -0.04em;
    color: #EDF4FF;
    margin-bottom: 10px;
  }
  .card-description {
    font-size: 21px;
    line-height: 36px;
    letter-spacing: -0.07em;
    color: #CBD3DE;
  }
@media (max-width: 1023px) {
  .main-title-box {
    padding: 20px 45px;
  }
  .main-title {
    width: 229px;
    border-radius: 36px;
  }
  .cards {
    max-width: 334px;
    width: 100%;
    height: 344px;
  }
  .icon {
    margin-bottom: 20px;
  }
  .card-title {
    font-size: 24px;
    line-height: 42px;
    letter-spacing: -0.01em;
  }
  .card-description {
    font-size: 16px;
    line-height: 28px;
    letter-spacing: -0.06em;
  }
}
@media (max-width: 767px) {
  .four-cards-container {
    padding-bottom: 140px;
  }
  .sub-title {
    margin:0 0 60px 0;
  }
  .cards-top {
    flex-direction: column;
  }
  .cards-bottom {
    flex-direction: column;
  }
  .card1-1, .card1-2, .card2-1, .card2-2{
    margin: 0 0 20px 0;
  }
}
</style>
<template lang="pug">
  section.four-cards-container
    .title-frame
      .main-title-box
        img.main-title(src="~/assets/SoWhat@3x.png")
      .sub-title 린스타트업이 당신의 IT 사업에#[br] 적용 될 수 있는 방법과 장점
    .cards-frame
      .cards-top
        .card1-1.cards
          .card1-1-img.icon
          .card-title 성공 확률을높입니다.
          .card-description.
            가설이 아닌, 최소기능 제품을 시장에 내놓고
            얻은 검증과 사실로 제품이 개선 되거나 방향을
            전환 하기에  자원을 모두 소진하기 전에 안정
            적으로 IT 사업을 발전 시킬 수 있습니다.
        .card1-2.cards
          .card1-2-img.icon
          .card-title 낭비를 줄일 수 있습니다.
          .card-description.
            모든 개발에는 자원이 소모 됩니다. 제품을 크
            게 만들수록 거품이 생길수 있고, 자주 쓰지않
            는 기능이 생길수 있습니다. 고객 검증을 통해
            꼭 필요한 기능만 조금씩 개발한다면 불필요한
            낭비를 줄일 수 있습니다.
      .cards-bottom
        .card2-1.cards
          .card2-1-img.icon
          .card-title 유지보수에 용이합니다.
          .card-description.
            출시시점 부터 제품을 크게 만들면, 안정적이지
             않은 매출과 운영에 비해 유지보수에 드는 비용
             과 난이도는 굉장히 높을 수 있습니다. 제품을
             작게 만들면 유지보수가 쉬워 집니다.
        .card2-2.cards
          .card2-2-img.icon
          .card-title 빠르게 개선 합니다.
          .card-description.
            린스타트업의 특징중 하나로 '빠르게 만들기'
            를 통해 빠르게 만들고 검증하여 개선하기에 고
            객이 원하는 제품을 만들 확률이 높아집니다.
</template>
