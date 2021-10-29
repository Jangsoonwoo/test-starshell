<style lang="less" scoped>
.group-card {
    overflow: hidden;

  }
  .main-card {
    display: flex;
    width: calc((186px * 18) + (120px * 24));
    height: 263px;
    position: relative;
    animation-name: main-card;
    animation-duration: 50s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    margin-bottom: 240px;
  }
  @keyframes main-card {
    from { transform: translateX(0) }
    to { transform: translateX(calc((-186px * 6) + (-120px * 8))) }
  }
  .card-big {
    width: 186px;
    height: 186px;
    position: relative;
    background-size: cover;
    background-position: center;
  }
  .card-small {
    width: 120px;
    height: 186px;
    position: relative;
    background-size: cover;
    background-position: center;
  }
  .first-animaition {
    animation-name: data-first;
    animation-duration: 3s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  .second-animaition {
    top: 30px;
    animation-name: data-second;
    animation-duration: 3s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    }
  @keyframes data-second {
    0% {
      transform: translateY(20px);
    }
    100% {
      transform: translateY(-20px);
    }
  }
  @keyframes data-first {
    0% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(40px);
    }
  }
  .t-shirt {
    background-image: url("~/assets/flowing-icons/t-shirt.png");
  }
  .shopping-bag {
    background-image: url("~/assets/flowing-icons/shopping-bag.png");
  }
  .mobile-app {
    background-image: url("~/assets/flowing-icons/mobile-app.png");
  }
  .music {
    background-image: url("~/assets/flowing-icons/music.png");
  }
  .share {
    background-image: url("~/assets/flowing-icons/share.png");
  }
  .sofa {
    background-image: url("~/assets/flowing-icons/sofa.png");
  }
  .test {
    background-image: url("~/assets/flowing-icons/test.png");
  }
  .dog {
    background-image: url("~/assets/flowing-icons/dog.png");
  }
  .subway {
    background-image: url("~/assets/flowing-icons/subway.png");
  }
  .chatting {
    background-image: url("~/assets/flowing-icons/chatting.png");
  }
  .buildings {
    background-image: url("~/assets/flowing-icons/buildings.png");
  }
  .sing {
    background-image: url("~/assets/flowing-icons/sing.png");
  }
  .boradcast {
    background-image: url("~/assets/flowing-icons/boradcast.png");
  }
  .game {
    background-image: url("~/assets/flowing-icons/game.png");
  }

</style>
<template lang="pug">
  section.group-card
      .main-card
        .card-big.first-animaition.t-shirt
        .card-small.second-animaition.shopping-bag
        .card-small.first-animaition.mobile-app
        .card-big.second-animaition.music
        .card-small.first-animaition.share
        .card-small.second-animaition.sofa
        .card-big.first-animaition.test
        .card-small.second-animaition.dog
        .card-big.first-animaition.subway
        .card-small.second-animaition.chatting
        .card-small.first-animaition.buildings
        .card-big.second-animaition.sing
        .card-small.first-animaition.boradcast
        .card-big.second-animaition.game

        .card-big.first-animaition.t-shirt
        .card-small.second-animaition.shopping-bag
        .card-small.first-animaition.mobile-app
        .card-big.second-animaition.music
        .card-small.first-animaition.share
        .card-small.second-animaition.sofa
        .card-big.first-animaition.test
        .card-small.second-animaition.dog
        .card-big.first-animaition.subway
        .card-small.second-animaition.chatting
        .card-small.first-animaition.buildings
        .card-big.second-animaition.sing
        .card-small.first-animaition.boradcast
        .card-big.second-animaition.game
</template>
