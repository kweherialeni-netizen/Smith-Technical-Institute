<template>
  <v-dialog v-model="isOpen" max-width="600" scrollable>
    <v-card class="rounded-lg">
      <!-- Header -->
      <v-card-item color="#002b66" class="bg-blue-darken-4 text-white pa-4">
        <div class="d-flex align-center justify-space-between">
          <div>
            <div class="text-caption text-uppercase font-weight-bold text-amber-accent-3">
              Smith Institute of Applied Skills
            </div>
            <v-card-title class="text-h6 font-weight-black text-uppercase pa-0">
              School of Cabinetry Fee Structure
            </v-card-title>
          </div>
          <v-btn icon="mdi-close" variant="text" color="white" density="comfortable" @click="isOpen = false"></v-btn>
        </div>
      </v-card-item>

      <v-divider></v-divider>

      <!-- Main Breakdown Table -->
      <v-card-text class="pa-4">
        <v-table class="border rounded-lg mb-4">
          <thead>
            <tr class="bg-grey-lighten-4">
              <th class="text-left font-weight-bold text-uppercase">Fee Item</th>
              <th class="text-right font-weight-bold text-uppercase">Amount (KSH)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="d-flex align-center">
                <v-icon color="#002b66" size="small" class="mr-2">mdi-pencil-box-outline</v-icon>
                Registration Fee
              </td>
              <td class="text-right font-weight-bold">5,000</td>
            </tr>
            <tr>
              <td class="d-flex align-center">
                <v-icon color="#002b66" size="small" class="mr-2">mdi-school-outline</v-icon>
                Tuition Fee
              </td>
              <td class="text-right font-weight-bold">60,000</td>
            </tr>
            <tr class="bg-amber-lighten-5 font-weight-black">
              <td class="text-uppercase text-blue-darken-4">Total Course Fee</td>
              <td class="text-right text-h6 text-blue-darken-4 font-weight-black">KSH. 65,000</td>
            </tr>
          </tbody>
        </v-table>

        <!-- Payment Details -->
        <h3 class="text-subtitle-2 font-weight-bold text-blue-darken-4 mb-2 text-uppercase">
          <v-icon color="#002b66" size="x-small" class="mr-1">mdi-credit-card-outline</v-icon>
          Payment Methods
        </h3>

        <v-row dense>
          <!-- M-PESA -->
          <v-col cols="12" sm="6">
            <v-card variant="outlined" class="pa-3 bg-green-lighten-5 border-green">
              <div class="text-caption font-weight-bold text-uppercase text-green-darken-4 d-flex align-center mb-1">
                <v-icon size="small" color="green-darken-3" class="mr-1">mdi-cellphone-text</v-icon>
                M-PESA Paybill
              </div>
              <div class="text-caption text-grey-darken-4">
                <strong>Paybill No:</strong> 522 533<br>
                <strong>Account No:</strong> 8061491
              </div>
            </v-card>
          </v-col>

          <!-- KCB Bank -->
          <v-col cols="12" sm="6">
            <v-card variant="outlined" class="pa-3 bg-blue-lighten-5 border-blue">
              <div class="text-caption font-weight-bold text-uppercase text-blue-darken-4 d-flex align-center mb-1">
                <v-icon size="small" color="#002b66" class="mr-1">mdi-bank</v-icon>
                KCB Bank
              </div>
              <div class="text-caption text-grey-darken-4">
                <strong>Account Name:</strong> Smith Institute of Applied Skills<br>
                <strong>Account No:</strong> 1349368644
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>

      <v-divider></v-divider>

      <!-- Modal Footer -->
      <v-card-actions class="pa-4 bg-grey-lighten-4 d-flex flex-wrap ga-2 justify-space-between">
        <v-btn
          href="/assets/fee-structure.jpg"
          download="Smith_Institute_Cabinetry_Fee_Structure.jpg"
          color="#002b66"
          variant="flat"
          size="small"
          class="text-white font-weight-bold"
        >
          <v-icon start size="small">mdi-download</v-icon>
          Download Poster
        </v-btn>

        <v-btn
          to="/apply"
          color="#e8a825"
          variant="flat"
          size="small"
          class="font-weight-bold text-grey-darken-4"
          @click="isOpen = false"
        >
          Apply Online
          <v-icon end size="small">mdi-arrow-right</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits(['update:modelValue'])

const isOpen = computed({
  get: () => props.modelValue,
  set: (val: boolean) => emit('update:modelValue', val)
})
</script>