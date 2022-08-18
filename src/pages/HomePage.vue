<template>  
  <Status />
  <router-view/>
</template>
<script>
import Status from '../components/Status/Status.vue'
export default {
  name: 'App',
  components: {
    Status,
  }
}
</script>
<style>
</style>