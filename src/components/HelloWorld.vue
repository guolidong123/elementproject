<template>
  <div class="wraper">
    <el-form label-width="100px">
    <el-form-item label="天气预报查询"></el-form-item>
    <el-form-item label="城市">
      <el-select v-model="region" placeholder="请选择城市" @change="getWeather">
        <el-option label="北京" value="北京"></el-option>
        <el-option label="上海" value="上海"></el-option>
        <el-option label="深圳" value="深圳"></el-option>
        <el-option label="广州" value="广州"></el-option>
        <el-option label="南京" value="南京"></el-option>
        <el-option label="济南" value="济南"></el-option>
      </el-select>
    </el-form-item>
    </el-form>
    <span>
    气候污染程度：{{searchResult}}
    </span>
    <el-form label-width="100px">
      <el-form-item label="填写经纬度"></el-form-item>
      <el-form-item label="经度"><el-input v-model="longitude" style="width:200px">121.0508253</el-input></el-form-item>
      <el-form-item label="纬度"><el-input v-model="latitude" style="width:200px">31.31557944</el-input></el-form-item>
      <el-button @click="getCity">查询</el-button>
    </el-form>
    城市名称：{{searchProvince}}
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {
        searchResult: '',
        region: '',
        longitude:'',
        latitude:'',
        searchProvince:''
      };
    },
    created () {
      this.getCreatMethod()
    },
    methods: {
      getCreatMethod(){
        console.log("我在组件被创建的时候调用")
      },
      getWeather(word) {
        this.$http.get("/api/weather/json.shtml", {
          params: {
            city: this.region
          }
        }).then(resp => {
          this.searchResult = resp.body.data.quality;
        })
      },
      getCity(){
        this.$http.get("/api/name/4").then(resp => {
          debugger;
          this.searchProvince = resp.body.data.province;
       }, resp => {
          debugger;
        });
      },
      setData(){

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wraper{
  margin: 0 auto;
  width: 300px;
}
</style>
