<template>
  <div class="login-wrap">
    <el-form 
        class="login-form"
        label-position="top" 
        label-width="80px" 
        :model="formdata">
        <h2>用户登录</h2>
        <el-form-item label="用户名">
            <el-input v-model="formdata.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input v-model="formdata.password"></el-input>
        </el-form-item>

      <el-button class="login-btn" type="primary">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formdata: {
        username: "",
        password: "",
      },
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style>
.login-wrap {
    height: 100%;
    background-color: #314152;
    /* 弹性盒布局 */
    display: flex; 
    justify-content: center;
    align-items: center;
}

.login-wrap .login-form {
    width: 400px;
    background-color: #fff;
    border-radius: 5px;
    padding: 30px;
}

.login-wrap .login-btn {
    width: 100%;
}
</style>