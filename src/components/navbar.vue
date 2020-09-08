<template>
  <div class="bg-black">
    <div class="max-w-6xl mx-auto py-6 px-4">
        <div class="flex justify-between">
          <div>
            <a class="text-white font-bold" href="#" v-text="name"></a>
          </div>

          <nav class="space-x-6">
            <a
              class="
                text-xs font-bold uppercase
                hover:text-yellow
                focus:text-yellow
              "
              href="#"
              v-for="(link, i) in links"
              :class="{
                'text-yellow': link.isActive,
                'text-white': !link.isActive
              }"
              :key="i"
            >
              {{ link.text }}
            </a>
          </nav>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',

  props: {
    name: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      links: [
        { text: 'Home', isActive: true },
        { text: 'Talks', isActive: false },
        { text: 'Contact', isActive: false }
      ]
    }
  }
}
</script>
