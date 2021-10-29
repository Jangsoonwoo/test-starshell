<style lang="less" scoped>
.footer-frame {
  width: 100%;
  display: flex;
  background-color: #000;
}
.footer-menu {
  margin: 0 auto;
  padding: 120px 0;
  width: 960px;
  color: #fff;
}
.footer-contents {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 20px;
  border-bottom: 1px solid #3D3D3D;
}
.starshell-info {
  font-size: 16px;
  line-height: 1.5;
  color: #BBC2CC;
}
.tabs {
  flex: 1;
}
.starshell-img {
  display: flex;
}
.img-button {
  color: #BBC2CC;
  border: 0 solid;
  background-color: #000;
  margin-bottom: 40px;
  cursor: pointer;
  height: 24px;
}
.starshell-btn-img {
  width: 91px;
  height: 24px;
}
.transparent {
  margin-bottom: 20px;
  color: rgba(187, 194, 204, 0.6);
}
.starshell-footer {
  display: flex;
  margin-bottom: 20px;
}
.footer-first {
  margin-right: 12px;
  font-weight: bold;
}
.more-info {
  display: flex;
  flex-direction: column;
  line-height: 1.5;
}
.mar-20 {
  margin-bottom: 20px;
}
.menu {
  background: linear-gradient(to top, #5EFFD8, #7AF7FF);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.compare-menus {
  line-height: 1.5;
}
.footer-info {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  color: #BBC2CC;
}
.footer-text {
  font-weight: 900;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.06em;
}
.span {
  color: #5FFFDA;
}
.coryright {
  font-weight: 300;
  letter-spacing: 0;
  font-size: 14px;
}
@media (max-width: 1024px) {
  .footer-menu {
    flex-wrap: wrap;
    padding: 120px 40px;
    width: 100%;
  }
  .footer-contents {
    justify-content: flex-start;
    padding: 0;
    width: 100%;
  }
  .tabs {
    margin-bottom: 20px;
    width: 50%;
    flex: unset;
  }
  .starshell-img {
    margin-bottom: 40px;
  }
}
@media (max-width: 767px) {
  .footer-menu {
    padding: 70px 18px;
  }
  .tabs {
    width: 100%;
  }
  .footer-info {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
<template lang="pug">
  footer.footer
    .footer-frame
      .footer-menu
        .footer-contents
          .starshell-info.tabs
            .starshell-img
              a.img-button
                img.starshell-btn-img(src="~/assets/starshell-logo@3x.png")
            .footer-first.transparent 주식회사 스타셸
            .starshell-footer.address-frame
              .footer-first.address 주소
              .address-info 서울시 강남구 역삼로 141 3층,4층
            .starshell-footer.ceo-frame
              .footer-first.ceo 대표이사
              .ceo-info 이해찬
            .starshell-footer.main-phone-frame
              .footer-first.main-phone 대표전화
              .main-phone-info 1644-0543
            .starshell-footer.company-number-frame
              .footer-first.company-number 사업자 등록번호
              .company-number-info 685 87 00379
            .starshell-footer.registration-date-frame
              .footer-first.registration-date 등록일
              .registration-date-info 2016년 04월 07일
          .more-info.tabs
            .footer-first.transparent 더 알아보기
            .mar-20
              a.portfolio.menu 포트폴리오
            .mar-20
              a.process.menu 진행방식
            .mar-20
              a.price.menu 가격
            .mar-20
              a.team.menu 팀
            .mar-20
              a.landing.menu 앱 개발, 274만원 5일 완성
          .compare-menus.tabs
            .footer-first.transparent 비교해보기
            .mar-20
              a.vs-outsourcing.menu 기본 외주 개발사
            .mar-20
              a.vs-turnkey.menu 착수금과 잔금 결제
            .mar-20
              a.similar-company.menu 유사한 업체들
            .mar-20
              a.vs-freelancers.menu 프리렌서
            .mar-20
              a.vs-employment.menu 개발자 영입
        .footer-info
          .footer-text 스타셸 스튜디오는 #[span.span 린스타트업]을 추천합니다
          .coryright © Starshell Inc.
</template>
