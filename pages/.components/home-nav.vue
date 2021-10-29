<style lang="less" scoped>
.header {
  padding: 16px 60px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
  background-color: #202225;
}
.starshell-logo {
  color: #BBC2CC;
  background-color: #202225;
  padding: 6px 10px;
}
.logo-image {
  width: 136.5px;
  height: 36px;
  background-image: url(/_nuxt/assets/starshell-logo@3x.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.header-menus {
  display: flex;
}
.menu {
  display: block;
  margin-right: 20px;
  padding: 12px 20px;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.04em;
  cursor: pointer;
  color: #5FFFDA;
}
.regular {
  display: block;
  padding: 12px 20px;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.04em;
  border: 0;
  cursor: pointer;
  border-radius: 16px;
  box-shadow: -3px -2px 16px #525560, 2px 4px 12px #000000;
  color: #202225;
  background-color: #5FFFDA;
}
a {
  justify-content: center;
  text-decoration: none;
}
.menu-button {
  display: none;
  padding: 13px;
  margin-left: 20px;
  width: 48px;
  height: 48px;
  border-radius: 36px;
  box-shadow: -3px -2px 16px #525560, 2px 4px 12px #000000;
  background-color: transparent;
  border: 0;
  cursor: pointer;

  &.opened {
    .line:nth-child(1) {
      transform: translateY(6px) rotate(45deg);
    }
    .line:nth-child(2) {
      opacity: 0;
    }
    .line:nth-child(3) {
      transform: translateY(-6px) rotate(-45deg);
    }
  }
}
.line {
  display: block;
  margin: 3px auto;
  width: 20px;
  height: 3px;
  border-radius: 2px;
  background: linear-gradient(180deg, #D7E3F4 0%, #8D9FBA 100%);
  transition: all 0.3s ease-in-out;
}
.menu-list-content {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 80px;
  left: 0;
  z-index: 1000;
  background-color: #202225;
}
.menu-list {
  height: 100%;
  text-align: center;
  text-decoration: none;
  list-style: none;
}
@media (max-width: 1023px) {
  .header {
    padding: 16px 40px;
  }
}
@media (max-width: 767px) {
  .header {
    padding: 16px;
  }
  .header-menus {
    display: none;
  }
  .menu-button {
    display: block;
  }
  .menu-button-icon {
    display: block;
  }
  .introduce {
    color: #BBC2CC;
  }
  .menu {
  font-size: 21px;
  line-height: 36px;
  letter-spacing: -0.07em;
  }
}
</style>
<template lang="pug">
  header.header
    nuxt-link.starshell-logo(to="/")
      .logo-image
    .header-menus
      nuxt-link.lean-startup.menu(to="/lean-startup") 린스타트업
      nuxt-link.process.menu(to="/") 진행방식
      nuxt-link.prices.menu(to="/") 가격
      nuxt-link.team.menu(to="/") 팀
      nuxt-link.inquire.regular(to="/") 문의하기
    button.menu-button(@click="toggleMenu", :class="{ opened }")
      .menu-button-icon
        span.line
        span.line
        span.line
    .menu-list-content(v-if="opened")
      .menu-list
        nuxt-link.introduce.menu(to="/") 소개
        nuxt-link.lean-startup.menu(to="/lean-startup") 린스타트업+
        nuxt-link.people.menu(to="/") 스타셸의 사람들
        nuxt-link.proceed.menu(to="/") 진행방식
        nuxt-link.compare.menu(to="/") 비교해보기
        nuxt-link.prices-and-service.menu(to="/") 가격과 서비스
</template>
<script>
export default {
  data() {
    return {
      opened: false,
    }
  },
  methods: {
    toggleMenu () {
      this.opened = !this.opened;
    },
  },
}
</script>
