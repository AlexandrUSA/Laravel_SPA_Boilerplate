<template>
  <transition name="page" mode="out-in">
    <router-view/>
  </transition>
</template>

<script>
export default {
  name: 'Child'
}
</script>
