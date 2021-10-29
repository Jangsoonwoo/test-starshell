<style lang="less" scoped>
.home-container {
  background-color: #202225;
}
@media (min-width: 1366px) {
  .section {
    width: 100%;
    padding: 0 231px;
    }
  }
@media (max-width: 1365px) and (min-width: 1024px) {
    .section {
      padding: 0 60px;
    }
}
@media (max-width: 1024px) and (min-width: 768px) {
  .section {
    padding: 0 40px;
  }
}
@media (max-width: 767px) and (min-width: 375px) {
  .section {
    padding: 0 16px;
  }
}
</style>
<template lang="pug">
article.home-container
  homeNav
  cycle
  section.section
    twocard
  section.section
    fourcard
  section.section
    Case
  section.section
    popicon
  request
  footerf
</template>
<script>
import homeNav from './.components/home-nav';
import cycle from './.components/cycle';
import twocard from './.components/two-card';
import fourcard from './.components/four-card';
import Case from './.components/case';
import popicon from './.components/popicon';
import request from './.components/request';
import footerf from './.components/footer';

export default {
  components: {
    homeNav,
    cycle,
    twocard,
    fourcard,
    Case,
    popicon,
    request,
    footerf,
  },
};
</script>
