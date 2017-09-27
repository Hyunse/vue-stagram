<template>
  <div id="app">
    <md-toolbar>
      <md-button class="md-icon-button" @click="toggle">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title">
        VueStagram
      </h2>
    </md-toolbar>

    <md-sidenav class="md-left" md-swipeable ref="sidenav">
      <md-list>
        <md-list-item @click.native="toggle">
          <router-link to="/me">
            <md-icon>person</md-icon> <span>내 정보</span>
          </router-link>
        </md-list-item>

        <md-list-item>
          <router-link to="/feeds">
            <md-icon>list</md-icon> <span>내 피드</span>
          </router-link>
        </md-list-item>

        <md-list-item>
          <md-icon>search</md-icon> <span>태그 검색</span>
        </md-list-item>
      </md-list>
    </md-sidenav>

    <div id="contents">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    methods: {
      toggle () {
        this.$refs.sidenav.toggle()
      }
    }
  }
</script>

<style>
  #contents {
    padding: 16px;
  }
</style>
