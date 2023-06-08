<template>
  <div class="content">
    <table class="promo-table">
      <tr>
        <th>ID</th>
        <th>Тип</th>
        <th>Дата</th>
        <th>Подписали</th>
        <th>Статус</th>
        <th>Документ</th>
      </tr>
      <tr v-for="document in documents" :key="document">
        <td>{{document.id}}</td>
        <td>{{document.type}}</td>
        <td>{{millsToTime(document.createdDate)}}</td>
        <td>{{document.step + 1}} из {{document.stepSize}}</td>
        <td>{{document.status}}</td>
        <td><a :href="document.content">Открыть</a></td>
      </tr>
    </table>
  </div>
</template>

<script>
import api from "@/service/api";

export default {
  name: "cabinet-users-component",
  data() {
    return {
      documents: []
    }
  },
  mounted() {
    this.loadDocuments()
  },
  methods: {
    loadDocuments() {
      api.docs.getMyDocs().then((response) => {
        this.documents = response.data
      })
    },
    millsToTime(mills) {
      return new Date(mills).toString()
    }
  }
}
</script>

<style scoped>
.content {
  width: 100%;
  height: 100%;
  padding: 20px 30px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: scroll;
  white-space: nowrap;
}
.primary-button {
  margin-bottom: 20px;
  border-radius: 10px;
  cursor: pointer;
  width: max-content;
  background: #5BBA6A;
  color: white;
  font-size: 15px;
  line-height: 40px;
  text-align: center;
  padding: 5px 14px;
  font-family: Rubik-regular, system-ui;
  transition: 0.3s;
}
.primary-button:hover {
  background-color: #419a4c;
}
table {
  border-collapse: collapse;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 13px 13px rgba(20, 23, 38, 0.02);
}
td, th {
  border: none;
  padding-left: 23px;
  padding-top: 10px;
  padding-bottom: 10px;
}
tr {
  background-color: white;
  font-family: rubik-light, system-ui;
  font-size: 13px;
  line-height: 15px;
  color: rgba(0, 0, 0, 0.8);
}
.status-not-activated {
  text-align: center;
  width: 120px;
  font-family: rubik-light, system-ui;
  font-size: 13px;
  line-height: 15px;
  padding: 3px 11px;
  border-radius: 10px;
  margin: 0;
  color: #FF0000CC;
  background: #FF00001A;
}
th {
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: left;
  font-size: 13px;
  line-height: 15px;
  background-color: #FAFAFB;
  color: rgba(0, 0, 0, 0.8);
  font-family: rubik-medium, system-ui;
}
td {
  text-align: left;
}
</style>