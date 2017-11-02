<template>
  <div id="loginBox">
    <canvas id="carton"></canvas>
    <el-form :model="loginForm" :rules="loginRules" ref="loginForm" class="formBox">
      <el-form-item prop="username">
        <el-input
          placeholder="请输入用户名"
          v-model="loginForm.username">
          <i slot="prefix" class="iconfont icon-yonghu"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          placeholder="请输入密码"
          v-model="loginForm.password">
          <i slot="prefix" class="iconfont icon-mima"></i>
        </el-input>
      </el-form-item>
      <el-checkbox v-model="checked" class="remember">记住密码</el-checkbox>
      <el-form-item>
        <el-button type="danger"size="small" @click.native.prevent="resetForm">
          <span class="iconfont icon-qingkong1"></span>
          清空
        </el-button>
        <el-button type="primary" size="small" @click.native.prevent="submitForm" :loading="loginLoading">
          <span class="iconfont icon-login"></span>
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginLoading: false,
      loginForm: {
        username: "",
        password: ""
      },
      loginRules: {
        username: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },
      checked: true
    };
  },
  methods: {
    resetForm() {
      this.$refs["loginForm"].resetFields();
    },
    submitForm() {
      let _this = this;
      this.$refs["loginForm"].validate(valid => {
        if (valid) {
          //验证通过
          //用户名和密码发送至后台，后台验证通过后返回相应的token。
          _this.$router.push('/home')
          _this.loginLoading = true;
        } else {
          //验证不通过
        }
      });
    }
  }
};
</script>

<style scope="scope">
.formBox {
  width: 400px;
  margin: 120px auto;
  padding: 35px;
}
</style>
