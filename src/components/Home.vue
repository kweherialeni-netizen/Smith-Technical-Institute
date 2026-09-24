<template>
  <div>
    <!-- Top Header Banner -->
    <v-sheet color="#002b66" class="py-3 text-white border-b-lg" style="border-color: #e8a825 !important;">
      <v-container class="d-flex align-center justify-space-between flex-wrap ga-2 py-0">
        <div class="d-flex align-center">
          <!-- Official Logo -->
          <v-avatar size="52" class="mr-3 bg-white elevation-2">
            <v-img src="@/assets/logo.png" alt="Smith Institute Logo" contain />
          </v-avatar>
          <div>
            <h1 class="text-subtitle-1 text-sm-h6 font-weight-black text-uppercase mb-0 text-white tracking-wide">
              Smith Institute of Applied Skills
            </h1>
            <div class="text-caption font-weight-bold" style="color: #e8a825;">
              SKILLS FOR THE FUTURE
            </div>
          </div>
        </div>

        <v-chip color="#e8a825" variant="flat" size="small" class="font-weight-black text-grey-darken-4 px-3">
          INTAKE ONGOING
        </v-chip>
      </v-container>
    </v-sheet>

    <!-- Hero Section -->
    <v-sheet color="#002b66" class="py-10 py-md-14 text-white position-relative border-b-lg" style="border-color: #e8a825 !important;">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="7">
            <div class="d-flex align-center mb-2">
              <v-chip color="#e8a825" size="small" label variant="flat" class="font-weight-bold text-uppercase text-grey-darken-4 mr-2">
                DEPARTMENT OF WOODWORKING
              </v-chip>
            </div>

            <h2 class="text-h3 text-sm-h2 font-weight-black mb-1 text-uppercase text-white">
              School of Cabinetry
            </h2>

            <div class="text-h6 font-weight-bold mb-4 font-italic" style="color: #e8a825;">
              "Learn, Build, Grow Your Future"
            </div>

            <p class="text-body-1 text-grey-lighten-2 mb-6" style="max-width: 560px;">
              Gain direct practical hands-on workshop experience in carcass assembly, hardware fitting, cutting list calculations, and modern woodworking techniques.
            </p>

            <div class="d-flex flex-wrap ga-3 mb-6">
              <v-btn
                to="/apply"
                color="#e8a825"
                size="large"
                variant="flat"
                class="text-grey-darken-4 font-weight-bold px-6"
              >
                Apply Online Now
              </v-btn>
              <v-btn
                to="/courses"
                size="large"
                variant="outlined"
                color="white"
                class="font-weight-bold"
              >
                View Course Details
              </v-btn>
            </div>

            <div class="text-caption text-grey-lighten-2 font-italic font-weight-medium">
              ✨ Build Your Dreams — Your Skills, Our Priority
            </div>
          </v-col>

          <!-- Poster Fee Structure Card -->
          <v-col cols="12" md="5">
            <v-card
              color="#ffffff"
              class="pa-5 text-grey-darken-4 rounded-lg elevation-10 border-lg"
              style="border-color: #e8a825 !important;"
            >
              <!-- Card Header -->
              <div class="text-center py-2 px-3 rounded mb-4" style="background-color: #002b66;">
                <h3 class="text-h6 font-weight-black text-uppercase tracking-wide text-white mb-0">
                  SCHOOL OF CABINETRY
                </h3>
                <div class="text-subtitle-2 font-weight-bold" style="color: #e8a825;">FEE STRUCTURE</div>
              </div>

              <!-- Fee Breakdown -->
              <div class="bg-grey-lighten-4 pa-3 rounded mb-4 border">
                <div class="d-flex justify-space-between align-center mb-2 pb-1 border-b">
                  <span class="text-caption font-weight-bold text-uppercase text-grey-darken-3">REGISTRATION FEE:</span>
                  <span class="text-subtitle-2 font-weight-black text-blue-darken-4">KSH. 5,000</span>
                </div>
                <div class="d-flex justify-space-between align-center mb-2 pb-1 border-b">
                  <span class="text-caption font-weight-bold text-uppercase text-grey-darken-3">TUITION FEE:</span>
                  <span class="text-subtitle-2 font-weight-black text-blue-darken-4">KSH. 60,000</span>
                </div>
                <div class="d-flex justify-space-between align-center pt-1" style="background-color: #e8a825; margin: 4px -12px -12px -12px; padding: 8px 12px; border-radius: 0 0 4px 4px;">
                  <span class="text-caption font-weight-black text-uppercase text-grey-darken-4">TOTAL FEE:</span>
                  <span class="text-subtitle-1 font-weight-black text-grey-darken-4">KSH. 65,000</span>
                </div>
              </div>

              <!-- Payment Details Section Title -->
              <div class="text-center font-weight-black text-caption text-uppercase mb-3 text-blue-darken-4" style="letter-spacing: 1px;">
                — PAYMENT DETAILS —
              </div>

              <!-- M-PESA Paybill Section -->
              <div class="mb-3 pa-3 rounded border" style="background-color: #eafaf1; border-color: #27ae60 !important;">
                <div class="d-flex align-center mb-1">
                  <v-icon size="small" color="green-darken-2" class="mr-2">mdi-cellphone-text</v-icon>
                  <span class="text-caption font-weight-black text-uppercase text-green-darken-3">M-PESA PAYBILL</span>
                </div>
                <div class="d-flex justify-space-between text-caption font-weight-bold text-grey-darken-4">
                  <span>PAYBILL NO: <strong>522 533</strong></span>
                  <span>ACC NO: <strong>8061491</strong></span>
                </div>
              </div>

              <!-- KCB Bank Section -->
              <div class="mb-4 pa-3 rounded border" style="background-color: #ebf5fb; border-color: #2980b9 !important;">
                <div class="d-flex align-center mb-1">
                  <v-icon size="small" color="#002b66" class="mr-2">mdi-bank</v-icon>
                  <span class="text-caption font-weight-black text-uppercase text-blue-darken-4">KCB BANK DETAILS</span>
                </div>
                <div class="text-caption font-weight-medium">
                  <strong>ACC NAME:</strong> SMITH INSTITUTE OF APPLIED SKILLS
                </div>
                <div class="text-caption font-weight-medium">
                  <strong>ACC NO:</strong> 1349368644
                </div>
              </div>

              <v-btn
                to="/apply"
                color="#002b66"
                block
                size="large"
                variant="flat"
                class="font-weight-bold text-white"
              >
                Proceed to Registration
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- Poster Contact Quick Bar -->
    <v-sheet color="#e8a825" class="py-3 text-grey-darken-4 elevation-2">
      <v-container>
        <v-row justify="space-around" align="center" class="text-body-2 font-weight-bold text-center">
          <v-col cols="12" sm="6" md="6" class="py-1">
            <v-icon class="mr-2" color="#002b66">mdi-phone</v-icon>
            +254 723 233 233
          </v-col>
          <v-col cols="12" sm="6" md="6" class="py-1">
            <v-icon class="mr-2" color="#002b66">mdi-email</v-icon>
            smithinstituteofappliedskills@gmail.com
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- Modules Grid -->
    <v-container class="py-14">
      <div class="text-center mb-10">
        <v-chip color="#002b66" variant="tonal" size="small" class="font-weight-bold mb-2">CURRICULUM</v-chip>
        <h2 class="text-h4 font-weight-bold mb-2 text-blue-darken-4">What You Will Learn</h2>
        <p class="text-body-1 text-grey-darken-1" style="max-width: 650px; margin: 0 auto;">
          Our practical workshop sessions focus on trade fundamentals required by modern cabinetmakers and workshop supervisors.
        </p>
      </div>

      <v-row>
        <v-col v-for="module in modules" :key="module.id" cols="12" md="4">
          <v-card class="h-100 d-flex flex-column" border flat elevation="1">
            <v-card-item>
              <v-avatar color="#002b66" size="36" class="mb-3 text-white font-weight-bold text-caption">
                0{{ module.id }}
              </v-avatar>
              <v-card-title class="font-weight-bold text-h6 text-wrap">{{ module.title }}</v-card-title>
            </v-card-item>

            <v-card-text class="flex-grow-1 text-body-2 text-grey-darken-2 pb-6">
              {{ module.description }}

              <v-list density="compact" class="bg-transparent mt-4 pa-0">
                <v-list-item v-for="(item, idx) in module.highlights" :key="idx" class="px-0 py-1">
                  <template #prepend>
                    <v-icon size="small" color="success" class="mr-2">mdi-check-circle</v-icon>
                  </template>
                  <v-list-item-title class="text-caption font-weight-medium">{{ item }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
const modules = [
  {
    id: 1,
    title: 'Board Materials & Carcass Construction',
    description: 'Practical training on cutting, squaring, and constructing cabinet boxes using MDF, Chipboard, and Plywood.',
    highlights: [
      'Engineered board handling',
      'Table saw operation & safety',
      'Edge-banding techniques',
      'Dowel & screw jointing'
    ]
  },
  {
    id: 2,
    title: 'Hardware Fitting & Joinery Systems',
    description: 'Learn installation and precision alignment of modern cabinetry hinges, runners, and mounting systems.',
    highlights: [
      'Concealed soft-close hinges',
      'Under-mount & ball-bearing slides',
      'Cutting list calculation',
      'Face frame vs frameless setups'
    ]
  },
  {
    id: 3,
    title: 'Custom Kitchens & Wardrobe Fitting',
    description: 'Full project execution from technical room measurements to final on-site installation and scribing.',
    highlights: [
      'Modular kitchen design principles',
      'Built-in wardrobe internal units',
      'Worktop jointing & scribing',
      'On-site leveling & installation'
    ]
  }
]
</script>

<style scoped>
.tracking-wide {
  letter-spacing: 1px !important;
}
</style>