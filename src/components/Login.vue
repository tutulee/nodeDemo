<template>
  <div class="bg">
    <img src="../assets/logo.png">
    <h2 style="margin-left:90px">图书管理系统</h2>
    <el-form :model="ruleForm2"
             status-icon
             :rules="rules2"
             ref="ruleForm2"
             label-width="100px"
             class="demo-ruleForm">
      <el-form-item label="账号"
                    prop="usr">
        <el-input type="username"
                  v-model="ruleForm2.usr"
                  autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码"
                    prop="checkPass">
        <el-input type="password"
                  v-model="ruleForm2.checkPass"
                  autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="年龄"
                    prop="age">
        <el-input v-model.number="ruleForm2.age"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="submitForm('ruleForm2')">提交</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'))
          } else {
            callback()
          }
        }
      }, 1000)
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账户'))
      }
      callback()
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      ruleForm2: {
        usr: '',
        checkPass: '',
        age: ''
      },
      rules2: {
        usr: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        age: [
          { validator: checkAge, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert('submit!')
          this.$router.push('/index')
        } else {
          console.log('登录失败')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style>
.demo-ruleForm {
  width: 30%;
  margin: 0 auto;
}
img {
  margin-left: 90px;
  margin-top: 60px;
}
.bg {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: url(../assets/img/bg.jpg) no-repeat;
  background-size: cover;
}
</style>
