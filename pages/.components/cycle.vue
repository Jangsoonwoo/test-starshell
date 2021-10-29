<style lang="less" scoped>
  .cycle-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    background-color: #202225;
  }
  .cycle-frame {
    width: 723px;
    height: 517px;
    position: relative;
  }
  .first-text {
    top: 86px;
    left: 0;
  }
  .small-text {
    font-size: 24px;
    line-height: 42px;
    letter-spacing: 0.06em;
  }
  .big-text {
    font-weight: bold;
    font-size: 32px;
    line-height: 46px;
    letter-spacing: -0.06em;
  }
  .second-text {
    top: 86px;
    right: 0;
  }
  .third-text {
    bottom: 0;
    left: 50%;
    transform: translate(-50%,0);
  }
  .cycle-font {
    position: absolute;
    text-align: center;
    color: #EDF4FF;
  }
  .cycle-outline {
    margin: 0 auto;
    width: 400px;
    height: 400px;
    position: relative;
    border-radius: 1000px;
    background: linear-gradient(141.28deg, #202123 0.68%, #202226 92.23%);
    box-shadow: inset -4px -4px 12px #313439, inset 4px 4px 12px #131416;
  }
  .cycle-arrow {
    width: 400px;
    height: 400px;
    background-image: url("~/assets/cycle@3x.png");
    background-size: 345px 335px;
    background-position: 40% 50%;
    background-repeat: no-repeat;
    animation-duration: 4s;
    animation-name: cycle-arrow;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  @keyframes cycle-arrow {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }
  .cycle-inline {
    width: 200px;
    height: 200px;
    background: linear-gradient(141.28deg, #202225 0.68%, #1E2023 92.23%);
    box-shadow: -3px -2px 16px #525560, 2px 4px 12px #000000;
    border-radius: 1000px;
    left: 50%;
    top: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
  }
  .first-circle {
    top: 11%;
    left: 11%;
    position: absolute;
    width: 100px;
    height: 100px;
    background: linear-gradient(141.28deg, #202225 0.68%, #1E2023 92.23%);
    box-shadow: -4px -3px 10px #464A54, 4px 4px 10px #030303;
    border-radius: 999px;
  }
  .second-circle {
    top: 11%;
    right: 11%;
    position: absolute;
    width: 100px;
    height: 100px;
    background: linear-gradient(141.28deg, #202225 0.68%, #1E2023 92.23%);
    box-shadow: -4px -3px 10px #464A54, 4px 4px 10px #030303;
    border-radius: 999px;
  }
  .third-circle {
    bottom: 0%;
    right: 37%;
    position: absolute;
    width: 100px;
    height: 100px;
    background: linear-gradient(141.28deg, #202225 0.68%, #1E2023 92.23%);
    box-shadow: -4px -3px 10px #464A54, 4px 4px 10px #030303;
    border-radius: 999px;
  }
  .circle-tool {
    width: 46px;
    height: 46px;
  }
  .disp {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 767px) {
    .cycle-frame {
      padding: 38px 34px 0 42px;
      width: 336px;
      height: 380px;
    }
    .first-text {
      top: 0;
      left: 0;
    }
    .second-text {
      top: 0;
      right: 0;
    }
    .third-text {
      bottom: 0;
    }
    .small-text {
      font-size: 14px;
      line-height: 42px;
    }
    .big-text {
      font-size: 14px;
      line-height: 12px;
    }
    .cycle-outline {
      width: 260px;
      height: 260px;
    }
    .cycle-arrow {
      width: 260px;
      height: 260px;
      background-size: 225px 215px;
      background-position: 38% 50%;
    }
    .cycle-inline {
      width: 130px;
      height: 130px;
    }
    .first-circle {
      width: 64px;
      height: 64px;
    }
    .second-circle {
      width: 64px;
      height: 64px;
    }
    .third-circle {
      width: 64px;
      height: 64px;
    }
    .circle-tool {
      width: 30px;
      height: 30px;
      margin: 17px;
    }
  }
</style>
<template lang="pug">
  section.cycle-section
      .cycle-frame
        .first-text.cycle-font
          .small-text 첫째
          .big-text 작게 만들고
        .second-text.cycle-font
          .small-text 둘째
          .big-text 측정하고
        .third-text.cycle-font
          .small-text 셋째
          .big-text 학습하고
        .cycle-content
          .cycle-outline
            .cycle-arrow
            .cycle-inline
            .first-circle.disp
              img.circle-tool(src="~/assets/tools-icon@3x.png")
            .second-circle.disp
              img.circle-tool(src="~/assets/ruler-icon@3x.png")
            .third-circle.disp
              img.circle-tool(src="~/assets/magnifying-glass-icon@3x.png")
</template>
