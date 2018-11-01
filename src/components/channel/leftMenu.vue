<template>
  <div>
    <el-menu default-active="1-4-1"
             class="el-menu-vertical-demo"
             @open="handleOpen"
             @close="handleClose"
             :collapse="isCollapse"
             id="leftMenu">
      <el-menu-item index="1"
                    @click="dao1">
        <i class="el-icon-location"></i>
        <span slot="title">导航一</span>
      </el-menu-item>
      <el-menu-item index="2"
                    @click="dao2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>

<script>
export default {
  data () {
    return {
      isCollapse: true
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    dao2: function () {
      console.log(this.isCollapse)
    }
  },
  created () {
    let that = this
    // var el = document.getElementById('leftMenu')// 声明一个变量，默认值为body
    window.document.body.onmouseover = function (event) {
      var div = document.getElementById('leftMenu')
      var x = event.clientX
      var y = event.clientY
      var divx1 = div.offsetLeft
      var divy1 = div.offsetTop
      var divx2 = div.offsetLeft + div.offsetWidth
      var divy2 = div.offsetTop + div.offsetHeight
      if (x < divx1 || x > divx2 || y < divy1 || y > divy2) {
        that.isCollapse = true
        console.log('离开')
      } else {
        that.isCollapse = false
        console.log('进入')
      }
    }
  }
}
</script>
<style>
#leftMenu {
  position: absolute;
  left: 0;
  top: 80px;
  background: rgba(0, 0, 0, 0.5);
  border: none;
}
#leftMenu span {
  color: #999;
}
</style>
