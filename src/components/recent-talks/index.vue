<template>
  <section class="py-4">
    <div class="mx-auto px-4">
      <h2 class="text-2xl font-bold uppercase text-center">Recent Talks</h2>

      <div class="mt-2 grid grid-cols-4 gap-8">
        <recent-talk v-for="(talk, i) in talks" :key="i" :talk="talk"/>
      </div>
    </div>
  </section>
</template>

<script>
import RecentTalk from '@/components/recent-talks/recent-talk'
import { getTalks } from '@/services/talk-service'

export default {
  name: 'RecentTalks',

  components: {
    RecentTalk
  },

  data() {
    return {
      talks: []
    }
  },

  created() {
    this.talks = getTalks()
  }
}
</script>
