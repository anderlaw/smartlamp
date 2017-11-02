<template>
<el-row class="contain">
  <!-- 公共区域 -->
  <el-col :span="24" class="header">
    <el-col :span="2">
      <h1 class="logo">上海容数信息</h1>
    </el-col>
    <el-col :span="19">
      <el-menu :default-active="$route.path" mode="horizontal" unique-opened router>
        <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
          <!-- 如果是枝干节点:有下拉选项 -->
          <el-submenu :key="index" :index="item.path" v-if="!item.leaf">
            <template slot="title">{{item.name}}</template>
            <template v-if="item.children">
              <el-menu-item v-for="child in item.children" :index="item.path+'/'+child.path" :key="child.path">
                <span :class="child.icon"></span>
                {{child.name}}
                </el-menu-item>
            </template>
          </el-submenu>
          <!-- 如果是叶子节点:没有下拉选项 -->
          <el-menu-item :key="index" v-else :index="item.path">
            <span :class="item.icon"></span>
            {{ item.name }}
          </el-menu-item>
        </template>
      </el-menu>
    </el-col>
    <el-col :span="3">
      <span class="user-info">
        <span class="iconfont icon-yonghuguanli"></span>
        <span style="font-weight:bold">{{ Global.user }}</span>
        用户
      </span>
      <el-dropdown trigger="click">
        <i class="el-icon-setting el-dropdown-link" style="cursor:pointer;vertical-align: 20px;font-size:20px;padding: 20px;"></i>

        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
          <el-dropdown-item divided>
            <a href="../../static/betterJS.pdf" target="blank" class="help-btn">帮助</a>
          </el-dropdown-item>
          <el-dropdown-item @click.native="jumpToAbout">关于</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-col>
  <!-- 内容区域 -->
  <el-col :span="24">
    <router-view></router-view>
  </el-col>
</el-row>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    logout() {
      this.$confirm("即将登出系统, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          //登出逻辑
          // this.$message({
          //   type: 'success',
          //   message: '删除成功!'
          // });
        })
        .catch(() => {
          //取消登出
          // this.$message({
          //   type: 'info',
          //   message: '已取消删除'
          // });
        });
    },
    jumpToAbout() {
      this.$router.push("/about");
    }
  }
};
</script>

<style scope="scope">
.logo {
  font-size: 20px;
  margin: 0;
  display: inline-block;
  height: 60px;
  line-height: 60px;
}
.user-info {
  display: inline-block;
  height: 60px;
  line-height: 60px;
  vertical-align: 20px;
}
.help-btn{
  text-decoration:none;
}
</style>
