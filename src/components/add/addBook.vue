<template>
  <div>
    <div style="height:90px;"></div>
    <div class="top">
      <div class="title">
        <h1>PERFECT PHOTOGRAPHY</h1>
        <el-button type="danger">查看更多</el-button>
      </div>
    </div>
    <!-- <leftMenu></leftMenu> -->
    <about></about>
  </div>
</template>
<script>
// import leftMenu from '../channel/leftMenu'
import about from '../channel/about'
export default {
  data () {
    return {
      abc: ''
    }
  },
  methods: {

  },
  components: {
    // leftMenu,
    about
  }
}
</script>
<style>
.top {
  width: 100%;
  height: 480px;
  background: url(../../assets/img/banner.png);
  background-attachment: fixed;
  background-size: cover;
}
.top .title {
  color: #fff;
  display: block;
  left: 50%;
  position: absolute;
  text-align: center;
  top: 40%;
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: 2;
}
.top .title h1 {
  color: #fff;
  font-family: Oswald;
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 4px;
  line-height: 1.3;
  margin: 0;
  text-transform: uppercase;
  margin-bottom: 50px;
}
</style>
