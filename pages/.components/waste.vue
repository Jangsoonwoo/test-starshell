<style lang="less" scoped>
.waste {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-bottom: 240px;
}
.waste-img {
  margin-right: 23px;
}
.image {
  width: 469px;
  height: 494px;
  background-image: url('~/assets/main-section-5@3x.png');
  background-size: cover;
  background-position: center;
}
.waste-text {
  width: 411px;
  text-align: right;
}
.waste-title {
  font-weight: 900;
  font-size: 48px;
  line-height: 76px;
  margin-bottom: 40px;
  color: #EDF4FF;
}
.waste-content {
  font-size: 24px;
  line-height: 42px;
  color: #CBD3DE;
  letter-spacing: -0.1em;
  margin-bottom: 16px;
}
.waste-subcontent {
  font-weight: bold;
  font-size: 24px;
  line-height: 42px;
  letter-spacing: -0.1em;
  color: #EDF4FF;
  margin-bottom: 60px;
}
.lean-startup-btn {
  width: 303px;
  height: 72px;
  margin-left: auto;
}
.lean-startup {
  width: 303px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #202225;
  border: 0;
  box-shadow: -3px -2px 16px #525560, 2px 4px 12px #000000;
  border-radius: 20px;
  font-size: 21px;
  font-weight: bold;
  color: #CBD3DE;
}
.btn-img {
  width: 32px;
  height: 32px;
}
@media (max-width: 1023px){
  .waste {
    flex-direction: column;
    align-items: center;
  }
  .waste-img {
    margin-bottom: 80px;
  }
  .waste-text {
    width: 100%;
    text-align: center;
  }
  .waste-title {
    padding: 0 61px;
    font-size: 32px;
    line-height: 52px;
  }
  .waste-content {
    font-size: 24px;
    line-height: 42px;
  }
  .waste-subcontent {
    font-size: 24px;
    line-height: 42px;
  }
  .lean-startup-btn {
    margin-right: auto;
    justify-content: center;
  }
}
@media (max-width: 767px){
  .waste {
    padding-bottom: 140px;
  }
  .waste-img {
    margin-bottom: 80px;
  }
  .image {
    width: 290px;
    height: 306px;
  }
  .waste-text {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 30px;
  }
  .waste-title {
    padding: 0;
    font-size: 24px;
  }
  .waste-content {
    font-size: 16px;
    line-height: 28px;
  }
  .waste-subcontent {
    font-size: 16px;
    line-height: 28px;
  }
  .lean-startup {
    font-size: 16px;
    line-height: 28px;
  }
  @media (max-width:375px) {
    width: 240px;
  }
}
</style>
<template lang="pug">
section.waste
      .waste-img
        .image
      .waste-text
        .waste-title.
          낭비를 최대한 줄여 다른 기회를 #[br]
          만들 수 있습니다.
        .waste-content.
          제품을 처음부터 크게 만들면 불필요한 개발에
          비용이 낭비 될 수 있습니다. 또한, 작은 개선에도
          많은 노력이 필요하며 많은 비용을 지출해 다른
          시도를 해보기 어렵죠.
        .waste-subcontent 정말 필요한 기능만 포함된 제품을 만들어 비용을 절약하고, 절약한 비용으로 제품을 개선하거나 다른 시도를 한다면 당신의 IT 사업은 낭비 없이 성장할 수 있을 겁니다.
        .lean-startup-btn
          button.lean-startup 린스타트업 자세히 알아보기 #[img.btn-img(src="~/assets/arrow-right-32px@3x.png")]
</template>
