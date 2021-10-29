<style lang="less" scoped>
.request {
  width: 100%;
  height: 100%;
  margin-bottom: 240px;
}
.request-title {
  font-size: 48px;
  font-weight: 900;
  line-height: 76px;
  text-align: center;
  letter-spacing: -0.06em;
  color: #EDF4FF;
  margin-bottom: 30px;
}
.request-subtitle {
  margin: 0 auto 80px;
  font-size: 24px;
  line-height: 42px;
  text-align: center;
  letter-spacing: -0.08em;
  color: #CBD3DE;
}
.request-content {
  display: flex;
  justify-content: center;
  padding: 0 40px;
}
.request-frame {
  display: flex;
  flex-direction: column;
  padding: 60px;
  max-width: 752px;
  width: 100%;
  border-radius: 48px;
  box-shadow: -3px -2px 16px #525560, 2px 4px 12px #000000;
  background-color: #202225;
}
.request-name {
  width: 100%;
  padding-bottom: 66px;
}
.name, .phone, .note {
  color: #CBD3DE;
  font-size: 21px;
  line-height: 32px;
  display: inline-block;
}

.input-name {
  padding: 20px 20px;
  width: 100%;
  font-size: 21px;
  line-height: normal;
  letter-spacing: -0.07em;
  border: 0;
  border-radius: 18px;
  box-shadow: inset -4px -3px 10px #464a54, inset 4px 4px 10px #030303;
  color: #EDF4FF;
  background-color: #202225;
}
.request-phone {
  width: 100%;
  padding-bottom: 66px;
}
.request-note {
  width: 100%;
  padding-bottom: 66px;
}
.textarea-note {
  padding: 20px 20px;
  width: 100%;
  height: 284px;
  resize: none;
  font-size: 21px;
  line-height: 36px;
  letter-spacing: -0.07em;
  border: 0;
  border-radius: 18px;
  box-shadow: inset -4px -3px 10px #464a54, inset 4px 4px 10px #030303;
  color: #EDF4FF;
  background-color: #202225;
}
.send {
  display: inline-block;
  margin: 0 auto;
  padding: 20px 0;
  max-width: 288px;
  width: 100%;
  cursor: pointer;
  border: 0;
  border-radius: 20px;
  box-shadow: -3px -2px 16px #525560, 2px 4px 12px #000000;
  background-color: #202225;
  display: flex;
  justify-content: center;
}
.sand-btn {
  border: 0;
  font-weight: bold;
  font-size: 21px;
  line-height: 32px;
  letter-spacing: -0.04em;
  background-color: #202225;
  color: #CBD3DE;
  cursor: pointer;
}
.send-img {
  width: 32px;
  height: 32px;
  vertical-align: -30%;
  cursor: pointer;
}
.name, .phone, .note {
  margin-bottom: 10px;
}
@media (max-width: 1023px) {
  .request {
    padding: 0 20px;
    margin-bottom: 140px;
  }
  .request-title {
    margin: 0 0 20px 0;
    font-size: 32px;
    line-height: 52px;
  }
  .request-subtitle {
    font-size: 21px;
    line-height: 36px;
  }
  .request-frame {
    width: 688px;
  }
}
@media (max-width: 767px) {
  .request {
    padding: 0 20px;
    margin-bottom: 140px;
  }
  .request-title {
    font-size: 24px;
    line-height: 42px;
  }
  .request-subtitle {
    font-size: 16px;
    line-height: 28px;
  }
  .request-frame {
    width: 500px;
    padding: 30px;
  }
  .request-name, .request-phone, .request-note {
    padding-bottom: 49px;
  }
  .name, .phone, .note {
    font-size: 16px;
    line-height: 28px;
    letter-spacing: -0.06em;
  }
  .input-name {
    font-size: 16px;
    line-height: 28px;
    letter-spacing: -0.06em;
  }
  .textarea-note {
    padding: 16px 20px;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: -0.06em;
    height: 144px;
  }
}
@media (max-width: 539px){
  .textarea-note {
    height: 200px;
  }
}
</style>
<template lang="pug">
  section.request
    .request-text
      .request-title 린스타트업 전문가에게#[br] 서비스 의뢰하기
      .request-subtitle 린스타트업을 잘 아는 전문 개발팀과 작업 하세요#[br] 필요한 어떤 가벼운 작업도 의뢰할 수 있습니다
    .request-content
      .request-frame
        .request-name
          .name 이름
          input.input-name(placeholder="이름을 입력해 주세요")
        .request-phone
          .phone 연락처
          input.input-name(placeholder="숫자만 입력해 주새요")
        .request-note
          .note 문의 내용
          textarea.textarea-note(placeholder="개발하고자 하는 제품, 목적, 기획안, 목표 모델 등의 다양한 내용을 적어주세요. 자세하게 기재해 주실수록 멋진 제품이 제작될 가능성이 큽니다")
        .send
          button.sand-btn 보내기 #[img.send-img(src='~/assets/send-default@3x.png')]
</template>
