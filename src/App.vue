<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">主页</router-link> |
      <router-link to="/blockStatus">区块状态</router-link> |
      <router-link to="/minerStatus">矿工状态</router-link> |
      <router-link to="/faq">常见问题</router-link> |
      <router-link to="/about">关于</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
