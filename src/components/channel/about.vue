<template>
  <div>
    <h2>关于我</h2>
    <div class="row">
      <el-row :gutter="10">
        <el-col :xs="24"
                :sm="24"
                :md="12"
                :lg="12"
                :xl="12">
          <div class="grid-content bg-purple">
            <p class="text"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <p class="text"
               style="margin-top:10px">It was popularised in the 1960s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
            <p class="name">Wang</p>
          </div>
        </el-col>
        <el-col :xs="24"
                :sm="24"
                :md="12"
                :lg="12"
                :xl="12">
          <img src="../../assets/img/user-image.png">
        </el-col>
      </el-row>
    </div>
    <div>
      <h2>CUSTOMER REVIEWS</h2>
      <div class="row">
        <el-row :gutter="10">
          <el-col :xs="24"
                  :sm="24"
                  :md="12"
                  :lg="12"
                  :xl="12">
            <div class="left">
              <a class="ku">
                <img src="../../assets/img/cust1.png"
                     alt="">
              </a>
            </div>
            <div class="right">
              <p class="nameR">Lee</p>
              <p>Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris consectetuer adipiscing</p>
            </div>
          </el-col>
          <el-col :xs="24"
                  :sm="24"
                  :md="12"
                  :lg="12"
                  :xl="12">
            <div class="left">
              <a class="ku">
                <img src="../../assets/img/cust2.png"
                     alt="">
              </a>
            </div>
            <div class="right">
              <p class="nameR">Lee</p>
              <p>Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris consectetuer adipiscing</p>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="10"
                style="margin-top:10px">
          <el-col :xs="24"
                  :sm="24"
                  :md="12"
                  :lg="12"
                  :xl="12">
            <div class="left">
              <a class="ku">
                <img src="../../assets/img/cust3.png"
                     alt="">
              </a>
            </div>
            <div class="right">
              <p class="nameR">Lee</p>
              <p>Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris consectetuer adipiscing</p>
            </div>
          </el-col>
          <el-col :xs="24"
                  :sm="24"
                  :md="12"
                  :lg="12"
                  :xl="12">
            <div class="left">
              <a class="ku">
                <img src="../../assets/img/cust4.png"
                     alt="">
              </a>
            </div>
            <div class="right">
              <p class="nameR">Lee</p>
              <p>Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris consectetuer adipiscing</p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<style>
h2 {
  margin-top: 100px;
  font-family: STKaiti;
}
.text {
  color: #393939;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  line-height: 24px;
  text-align: left;
  margin: 0;
  font-family: 'STKaiti';
}
img {
  vertical-align: middle;
  width: 100%;
  height: auto;
}
.name {
  color: #ff5200;
  font-weight: 600;
  letter-spacing: 1px;
  margin-top: 30px;
  text-transform: capitalize;
  text-align: left;
  margin: 0;
  margin-top: 10px;
}
.row {
  margin-right: -15px;
  margin-left: -15px;
}
@media (min-width: 992px) {
  .row {
    width: 970px;
  }
}
@media (min-width: 768px) {
  .row {
    width: 750px;
  }
}
.row {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.left {
  display: table-cell;
  width: 100px;
}
.right {
  display: table-cell;
  padding: 0 30px;
  padding-right: 0px;
  text-align: left;
  vertical-align: top;
  font-size: 12px;
}
.nameR {
  color: #ff5200;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1px;
}
.ku {
  border: 1px solid #e5e5e5;
  display: block;
  overflow: hidden;
  padding: 10px;
  transition: all 0.5s ease-out 0s;
}
.ku:hover {
}
</style>
