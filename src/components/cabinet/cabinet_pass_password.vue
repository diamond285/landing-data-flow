<template>
  <div class="alert-container">
    <div class="alert-sum-duration-container">
      <div class="close-button" @click="closeAlert">
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_7_2)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 14.121L17.303 19.425C17.5844 19.7064 17.966 19.8645 18.364 19.8645C18.762 19.8645 19.1436 19.7064 19.425 19.425C19.7064 19.1436 19.8645 18.762 19.8645 18.364C19.8645 17.966 19.7064 17.5844 19.425 17.303L14.12 12L19.424 6.697C19.5633 6.55767 19.6737 6.39227 19.7491 6.21025C19.8244 6.02823 19.8632 5.83315 19.8631 5.63615C19.8631 5.43915 19.8242 5.24409 19.7488 5.0621C19.6734 4.88011 19.5628 4.71477 19.4235 4.5755C19.2842 4.43623 19.1188 4.32577 18.9367 4.25043C18.7547 4.17508 18.5596 4.13633 18.3626 4.13637C18.1656 4.13642 17.9706 4.17527 17.7886 4.2507C17.6066 4.32613 17.4413 4.43667 17.302 4.576L12 9.879L6.697 4.576C6.5587 4.43267 6.39323 4.31832 6.21027 4.23962C6.0273 4.16092 5.83049 4.11945 5.63132 4.11763C5.43215 4.1158 5.23462 4.15366 5.05024 4.229C4.86586 4.30433 4.69833 4.41563 4.55742 4.55641C4.41652 4.69718 4.30506 4.8646 4.22955 5.04891C4.15404 5.23322 4.116 5.43072 4.11763 5.62989C4.11927 5.82906 4.16056 6.02591 4.23908 6.20895C4.31761 6.39199 4.4318 6.55756 4.575 6.696L9.88 12L4.576 17.303C4.29461 17.5844 4.13652 17.966 4.13652 18.364C4.13652 18.762 4.29461 19.1436 4.576 19.425C4.85739 19.7064 5.23905 19.8645 5.637 19.8645C6.03495 19.8645 6.41661 19.7064 6.698 19.425L12 14.12V14.121Z" />
          </g>
          <defs>
            <clipPath id="clip0_7_2">
              <rect width="24" height="24" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <p class="alert-data-title">Введите пароль для подтверждение</p>
      <p class="input-header">Пароль</p>
      <input placeholder="Введите пароль" type="password" v-model="password">
      <p class="alert-data-primary-button" @click="passPassword">Подтвердить</p>
    </div>
  </div>
</template>

<script>
import api from "@/service/api";

export default {
  name: "cabinet-pass-password",
  data() {
    return {
      password: ""
    }
  },
  props: {
    documentId: Number,
    isCancel: Boolean
  },
  methods: {
    passPassword() {
      if (this.isCancel) {
        api.docs.cancelDocument({
          data: {
            documentId: this.documentId,
            password: this.password
          }
        }).then(() => {
          this.closeAlert()
        }).catch(() => {
          this.password = ""
        })
      } else {
        api.docs.passDocument({
          data: {
            documentId: this.documentId,
            password: this.password
          }
        }).then(() => {
          this.closeAlert()
        }).catch(() => {
          this.password = ""
        })
      }
    },
    closeAlert: function () {
      this.$emit('closePassAlert')
    },
  }
}
</script>

<style scoped>
.alert-container {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background: rgba(0, 0, 0, 0.3);
}
.alert-sum-duration-container {
  position: absolute;
  text-align: start;
  top: 50%;
  left: 50%;
  -ms-transform: translateY(-50%) translateX(-50%);
  transform: translateY(-50%) translateX(-50%);
  max-width: 100%;
  background: white;
  border-radius: 16px;
  padding: 24px;
  width: 470px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.alert-data-title {
  font-size: 16px;
  line-height: 19px;
  margin-top: 4px;
  color: #5BBA6A;
  font-family: Rubik-regular, system-ui;
}
.alert-data-primary-button {
  background: #5BBA6A;
  width: 100%;
  border-radius: 6px;
  margin-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
  color: white;
  line-height: 44px;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  transition: 0.3s;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.alert-data-primary-button:hover {
  background: #419a4c;
}
.input-header {
  margin-top: 14px;
  font-family: Rubik-regular, system-ui;
  color: rgba(0, 0, 0, 0.8);
  line-height: 18px;
  font-size: 16px;
}
input {
  padding: 17px 18px;
  border: none;
  width: 100%;
  background-color: #F8F8F8;
  border-radius: 10px;
  margin-top: 10px;
  font-size: 16px;
  line-height: 19px;
  font-family: Rubik-light, system-ui;
  color: rgba(0, 0, 0, 0.8);
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
input:focus {
  outline: none;
}
::placeholder {
  color: rgba(0, 0, 0, 0.4);
}
@media screen and (max-width: 500px) {
  .alert-sum-duration-container {
    max-width: 100%;
  }
}
.close-button {
  position: absolute;
  background: #5BBA6A;
  border-radius: 5px;
  cursor: pointer;
  width: 30px;
  height: 30px;
  right: 24px;
  transition: 0.2s;
}
.close-button>svg {
  fill: white;
  width: 16px;
  height: 16px;
  margin: 7px;
}
.close-button:hover {
  background: #419a4c;
}
</style>