<template>
  <v-btn
    :href="whatsappUrl"
    target="_blank"
    rel="noopener noreferrer"
    color="#25D366"
    icon
    size="large"
    elevation="6"
    class="whatsapp-float text-white"
    aria-label="Chat on WhatsApp"
  >
    <v-icon size="28">mdi-whatsapp</v-icon>
    <v-tooltip activator="parent" location="left">
      Chat with us on WhatsApp
    </v-tooltip>
  </v-btn>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const phoneNumber = '254723233233'
const defaultMessage = 'Hello Smith Institute, I would like to inquire about the School of Cabinetry program.'

const whatsappUrl = computed(() => {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`
})
</script>

<style scoped>
.whatsapp-float {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 999;
  transition: transform 0.2s ease-in-out;
}

.whatsapp-float:hover {
  transform: scale(1.08);
}
</style>