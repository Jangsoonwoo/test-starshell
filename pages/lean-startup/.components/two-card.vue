<style lang="less" scoped>
.two-card-container {
  padding-bottom: 240px;
}
.title-frame {
  margin-bottom: 100px;
  text-align: center;
}
.main-title {
  font-size: 48px;
  font-weight: 900;
  line-height: 76px;
  letter-spacing: 0.06em;
  margin: 0 0 30px 0;
  color: #EDF4FF;
}
.sub-title {
  font-size: 24px;
  line-height: 42px;
  letter-spacing: -0.08em;
  color: #5FFFDA;
}
.cards-frame {
  display: flex;
  justify-content: center;
}
.card1{
  margin-right: 54px;
}
.cards {
  padding: 40px;
  width: 426px;
  border-radius: 48px;
  box-shadow: -8px -7px 20px #3f414a, 8px 7px 20px #000000;
  background: linear-gradient(141.28deg, #202225 0.68%, #1E2023 92.23%);
}
.card1-img {
  background-image: url(src=~/assets/card1-image@3x.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.card2-img {
  background-image: url(src=~/assets/card2-image@3x.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.card-img {
  margin-bottom: 30px;
  padding-top: calc((286 / 346) * 100%);
  max-width: 346px;
  width: 100%;
}
.card-title {
  font-weight: 900;
  font-size: 32px;
  line-height: 52px;
  letter-spacing: -0.04em;
  color: #EDF4FF;
  margin:0 0 20px 0;
}
.card-description {
  font-size: 21px;
  line-height: 36px;
  letter-spacing: 0.07em;
  color: #CBD3DE;
}
.width-540 {
  display: none;
}
@media (max-width: 1023px) {
  .main-title {
    font-size: 32px;
    line-height: 52px;
  }
  .sub-title {
    font-size: 21px;
    line-height: 36px;
  }
  .cards-frame {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .card1{
    margin:0 0 60px 0;
  }
}
@media (max-width: 767px) {
  .two-card-container {
    padding-bottom: 140px;
  }
  .cards {
    padding: 30px;
    width: 343px;
  }
  .card-img {
    margin-bottom: 20px;
    width: 283px;
    height: 236px;
  }
  .card-title {
    font-size: 21px;
    line-height: 32px;
  }
  .card-description {
    font-size: 16px;
    line-height: 28px;
  }
}
@media (max-width:540px) {
  .width-540 {
    display: block;
  }
}
</style>
<template lang="pug">
  section.two-card-container
    .title-frame
      h1.main-title 린스타트업은 왜#[br.width-540] 필요할까요
      .sub-title 빠르게 변하는 트랜드와 불확실한 사업 환경 속에서#[br]리스크를 최소화 하고, 성공 확률을 높이기 위함
    .cards-frame
      .card1.cards
        .card1-img.card-img
        h3.card-title 가설에 의존 하는것은 위험 합니다.
        .card-description 멋진 아이디어와 두꺼운 사업계획서, 시장조사를 통해 완벽한 가설을 세워 막대한 비용과 시간을 투입하려 하지만, 실제 결과는 불확실 하기에 위험해 질 수 있습니다.
      .card2.cards
        .card2-img.card-img
        h3.card-title 시장의 반응은 생각보다 다를 수 있습니다.
        .card-description 제품은 출시 후 고객의 냉정한 평가와 검증을 받습니다. 제품을 크게 만들고 고객이 원하지 않는 제품이라는 사실을 알아 차렸을땐, 이미 많은 비용과 시간이 투입된 후일겁니다.
</template>
