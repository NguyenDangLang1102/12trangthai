<template >
    <Narbar />
    <router-view />
</template>
<script>
import Narbar from './router/index'


export default {
    name: "App",
    components: {
        Narbar
    }
}
</script>
<style>
</style>