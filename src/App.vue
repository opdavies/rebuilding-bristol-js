<template>
  <div id="app" class="text-black">
    <navbar :name="title" />
  </div>
</template>

<script>
import Navbar from '@/components/navbar'

export default {
  name: 'App',

  components: {
    Navbar
  },

  data() {
    return {
      title: 'Bristol JS'
    }
  }
}
</script>

<style src="@/assets/css/tailwind.css"/>
