<template>
  <v-app>
    <v-main>
      <router-view />
      
      <!-- Floating WhatsApp Button (visible on all pages) -->
      <WhatsAppWidget />

      <!-- Global Fee Structure Modal -->
      <FeeStructureDialog v-model="showFeeModal" />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { ref, provide } from 'vue'
import WhatsAppWidget from '@/components/WhatsAppWidget.vue'
import FeeStructureDialog from '@/components/FeeStructureDialog.vue'

const showFeeModal = ref<boolean>(false)

const openFeeModal = (): void => {
  showFeeModal.value = true
}

// Provide the toggle function to any child component/page
provide('openFeeModal', openFeeModal)
</script>