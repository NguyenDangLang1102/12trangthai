<template>
  <a-layout>
    <a-layout-sider breakpoint="lg" collapsed-width="0" @collapse="onCollapse" @breakpoint="onBreakpoint">
      <div class="logo">
        <div class="avatar"><img src="https://hinhanhdephd.com/wp-content/uploads/2015/12/hinh-anh-dep-girl-xinh-hinh-nen-dep-gai-xinh.jpg" class="avatar-img" /></div>
        <h1 class="text-avatar">welcome</h1>
      </div>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
          <a-menu-item key="status">
            <router-link :to="{ name: 'status' }">
              <pie-chart-outlined />
              <span class="nav-text">Status</span>
            </router-link>
          </a-menu-item> 
        <a-menu-item key="user">
          <router-link :to="{ name: 'user' }">
            <user-outlined />
            <span class="nav-text">User</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="hr">
          <router-link :to="{ name: 'hr' }">
            <contacts-outlined />
            <span class="nav-text">Chia Số</span>
          </router-link>

        </a-menu-item>
        <!-- <a-menu-item key="4">
          <team-outlined  />
          <span class="nav-text">Role</span>
        </a-menu-item> -->

        <!-- <a-menu-item key="5">
          <idcard-outlined />
          <span class="nav-text">Account</span>
        </a-menu-item> -->

      <a-menu-item key="6">
          <logout-outlined />
          <span class="nav-text">LogOut</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }" />
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import { PieChartOutlined, DesktopOutlined, UserOutlined, TeamOutlined, IdcardOutlined,ContactsOutlined,ImportOutlined, LogoutOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
import{useMenu} from'../../stores/history';
import {storeToRefs}from 'pinia'
export default defineComponent({
  components: {
    PieChartOutlined, DesktopOutlined, UserOutlined, TeamOutlined, IdcardOutlined,ContactsOutlined,ImportOutlined,LogoutOutlined
  },

  setup() {
    const useMenu1=useMenu()
    const onCollapse = (collapsed, type) => {
      console.log(collapsed, type);
    };

    const onBreakpoint = broken => {
      console.log(broken);
    };

    return {
      ...storeToRefs(useMenu1),
      onCollapse,
      onBreakpoint
    };
  },

});
</script>
<style>

.logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: #eee;
  margin-top: 20px;
}
.avatar-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

.text-avatar {
  color: #fff
}
#components-layout-demo-responsive  {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.site-layout-sub-header-background {
  background: #fff;
}

.site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout-sub-header-background {
  background: #141414;
}

.ant-layout-sider-children {
  height: 100vh !important;

}
.ant-layout-sider ant-layout-sider-dark{
      /* flex: 0 0 200px; */
    /* max-width: 300px !important; */
    min-width: 300px !important;
    /* width: 300px !important; */
}
</style>