<template>
  <div id="app" class="text-black">
    <navbar :name="title" />

    <div class="h-48 flex items-center justify-center bg-yellow">
      <div class="p-4 text-center">
        <h1 class="text-4xl leading-none font-bold">{{ title }}</h1>
        <p class="mt-5 text-sm">{{ description }}</p>
      </div>
    </div>
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
      title: 'Bristol JS',
      description: 'We host monthly JavaScript meetings in the beautiful city of Bristol, UK.'
    }
  }
}
</script>

<style src="@/assets/css/tailwind.css"/>
