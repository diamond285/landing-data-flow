<template>
  <div class="content">
    <p class="header-text">Справочник</p>
    <table>
      <tr>
        <td>
          <input type="text" placeholder="Введите ваш вопрос">
        </td>
        <td style="width: max-content;">
          <img src="@/assets/images/loupe.svg" class="icon">
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "directory-search-component"
}
</script>

<style scoped>
.content {
  text-align: center;
  margin-top: 60px;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
}
.header-text {
  color: black;
  font-size: 65px;
  line-height: 77px;
  font-family: Stolzl-medium, system-ui;
}
table {
  margin-top: 35px;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 20px;
  padding: 26px 30px;
}
.icon {
  width: 26px;
  height: 26px;
}
input {
  width: 100%;
  border: none;
  font-size: 20px;
  line-height: 23px;
  font-family: Stolzl-regular, system-ui;
  font-weight: 400;
}
input:focus {
  outline: none;
}
td, tr {
  vertical-align: middle;
}
::placeholder {
  color: rgba(0, 0, 0, 0.32);
}
</style>
