<template>
  <div id="app" class="text-black">
    <navbar :name="title" />

    <div class="h-48 flex items-center justify-center bg-yellow">
      <div class="p-4 text-center">
        <h1 class="text-4xl leading-none font-bold">{{ title }}</h1>
        <p class="mt-5 text-sm">{{ description }}</p>
      </div>
    </div>

    <main>
      <recent-talks/>
    </main>

    <aside class="py-24 px-4 bg-gray-50">
      <our-sponsors/>
    </aside>

    <footer class="py-20 bg-black">
      <div class="max-w-6xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <section>
            <h2 class="pb-2 text-xl font-bold border-b-2 text-white">Links</h2>

            <div class="mt-6 space-x-1">
              <a href="#" class="btn btn-blue">Meetup</a>
              <a href="#" class="btn btn-blue">Twitter</a>
              <a href="#" class="btn btn-blue">YouTube</a>
            </div>
          </section>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Navbar from '@/components/navbar'
import OurSponsors from '@/components/our-sponsors'
import RecentTalks from '@/components/recent-talks'

export default {
  name: 'App',

  components: {
    Navbar,
    OurSponsors,
    RecentTalks
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
