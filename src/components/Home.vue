<template>
  <div class="bg-grey-lighten-4 min-h-screen">
    <!-- Top Header Banner -->
    <v-sheet color="#002b66" class="py-2 py-sm-3 text-white border-b-lg shadow-sm" style="border-color: #e8a825 !important;">
      <v-container class="d-flex align-center justify-space-between flex-wrap ga-1 ga-sm-2 py-0 px-2 px-sm-4">
        <div class="d-flex align-center">
          <!-- Official Logo (Increased by ~50%) -->
          <v-avatar size="48" class="mr-2 mr-sm-3 bg-white elevation-2 d-sm-none rounded-circle">
            <v-img src="@/assets/logo.png" alt="Smith Institute Logo" contain />
          </v-avatar>
          <v-avatar size="64" class="mr-2 mr-sm-3 bg-white elevation-2 d-none d-sm-flex rounded-circle">
            <v-img src="@/assets/logo.png" alt="Smith Institute Logo" contain />
          </v-avatar>
          <div>
            <h1 class="text-caption font-weight-black text-uppercase mb-0 text-white tracking-wide lh-1 d-sm-none" style="font-size: 0.8rem !important;">
              Smith Institute
            </h1>
            <h1 class="text-body-2 text-sm-h6 font-weight-black text-uppercase mb-0 text-white tracking-wide lh-1 d-none d-sm-block">
              Smith Institute of Applied Skills
            </h1>
            <div class="text-caption font-weight-bold mt-0 mt-sm-1" style="color: #e8a825; font-size: 0.7rem !important;">
              SKILLS FOR THE FUTURE
            </div>
          </div>
        </div>

        <!-- Mobile Icon Quick Actions -->
        <div class="d-flex d-sm-none align-center ga-1">
          <v-btn
            to="/"
            color="#e8a825"
            icon="mdi-home-outline"
            size="small"
            variant="flat"
            aria-label="Home"
          />
          <v-btn
            to="/courses"
            color="#e8a825"
            icon="mdi-school-outline"
            size="small"
            variant="flat"
            aria-label="Course Details"
          />
          <v-btn
            href="tel:+254723233233"
            color="#e8a825"
            icon="mdi-phone"
            size="small"
            variant="flat"
            aria-label="Call Us"
          />
        </div>

        <!-- Desktop Quick Chips -->
        <v-chip color="#e8a825" variant="flat" size="small" class="font-weight-black text-grey-darken-4 px-3 d-none d-sm-flex">
          INTAKE ONGOING
        </v-chip>
      </v-container>
    </v-sheet>

    <!-- Desktop Navigation Bar -->
    <v-sheet color="#001d45" class="d-none d-md-block border-b">
      <v-container class="py-1 px-4 d-flex align-center justify-center">
        <nav class="d-flex align-center ga-1">
          <v-btn
            v-for="link in navLinks"
            :key="link.title"
            :to="link.to"
            variant="text"
            color="white"
            class="font-weight-bold text-body-2 text-capitalize px-3"
            active-class="text-amber-accent-3 font-weight-black"
          >
            <v-icon start size="default" :color="link.iconColor || 'white'">{{ link.icon }}</v-icon>
            {{ link.title }}
          </v-btn>
        </nav>
      </v-container>
    </v-sheet>

    <!-- Hero Section with Subtle Gradient Overlay -->
    <v-sheet color="#002b66" class="py-6 py-md-16 text-white position-relative border-b-lg overflow-hidden" style="border-color: #e8a825 !important;">
      <div class="hero-pattern-overlay position-absolute w-100 h-100 top-0 left-0"></div>
      <v-container class="px-3 px-sm-4 position-relative">
        <v-row align="center">
          <v-col cols="12" md="7">
            <div class="d-flex align-center mb-1 mb-sm-2">
              <v-chip color="#e8a825" size="small" label variant="flat" class="font-weight-bold text-uppercase text-grey-darken-4 mr-2 d-sm-none" style="font-size: 0.7rem;">
                <v-icon start size="small" class="mr-1">mdi-saw-blade</v-icon> WOODWORKING
              </v-chip>
              <v-chip color="#e8a825" size="default" label variant="flat" class="font-weight-bold text-uppercase text-grey-darken-4 mr-2 d-none d-sm-flex">
                DEPARTMENT OF WOODWORKING
              </v-chip>
            </div>

            <h2 class="text-h5 text-sm-h2 font-weight-black mb-1 text-uppercase text-white">
              School of Cabinetry
            </h2>

            <div class="text-caption text-sm-h6 font-weight-bold mb-2 mb-sm-4 font-italic" style="color: #e8a825;">
              "Learn, Build, Grow Your Future"
            </div>

            <p class="text-caption text-sm-body-1 text-grey-lighten-2 mb-4 mb-sm-6" style="max-width: 560px; line-height: 1.5;">
              Gain direct practical workshop experience in carcass assembly, hardware fitting, cutting list calculations, and modern woodworking techniques.
            </p>

            <div class="text-caption text-grey-lighten-2 font-italic font-weight-medium mt-4" style="font-size: 0.75rem !important;">
              ✨ Build Your Dreams — Your Skills, Our Priority
            </div>
          </v-col>

          <!-- Poster Fee Structure Card -->
          <v-col cols="12" md="5" class="mt-4 mt-md-0">
            <v-card
              color="#ffffff"
              class="pa-4 pa-sm-6 text-grey-darken-4 rounded-xl elevation-6 border-subtle"
            >
              <!-- Card Header -->
              <div class="text-center py-2 px-2 rounded-lg mb-3 shadow-sm" style="background-color: #002b66;">
                <h3 class="text-caption text-sm-h6 font-weight-black text-uppercase tracking-wide text-white mb-0">
                  SCHOOL OF CABINETRY
                </h3>
                <div class="text-caption text-sm-subtitle-2 font-weight-bold" style="color: #e8a825; font-size: 0.75rem !important;">
                  <v-icon size="small" color="#e8a825" class="mr-1">mdi-cash-multiple</v-icon> FEE STRUCTURE
                </div>
              </div>

              <!-- Fee Breakdown -->
              <div class="bg-grey-lighten-4 pa-3 rounded-lg mb-3 border">
                <div class="d-flex justify-space-between align-center mb-2 pb-2 border-b">
                  <span class="text-caption font-weight-bold text-uppercase text-grey-darken-3" style="font-size: 0.8rem !important;">
                    <v-icon size="small" class="mr-1">mdi-clipboard-text-outline</v-icon> REGISTRATION:
                  </span>
                  <span class="text-caption text-sm-subtitle-2 font-weight-black text-blue-darken-4">KSH 5,000</span>
                </div>
                <div class="d-flex justify-space-between align-center mb-2 pb-2 border-b">
                  <span class="text-caption font-weight-bold text-uppercase text-grey-darken-3" style="font-size: 0.8rem !important;">
                    <v-icon size="small" class="mr-1">mdi-school-outline</v-icon> TUITION:
                  </span>
                  <span class="text-caption text-sm-subtitle-2 font-weight-black text-blue-darken-4">KSH 60,000</span>
                </div>
                <div class="d-flex justify-space-between align-center pt-2 px-2" style="background-color: #e8a825; margin: 4px -12px -12px -12px; padding: 8px 12px; border-radius: 0 0 8px 8px;">
                  <span class="text-caption font-weight-black text-uppercase text-grey-darken-4" style="font-size: 0.8rem !important;">
                    <v-icon size="small" color="grey-darken-4" class="mr-1">mdi-calculator</v-icon> TOTAL:
                  </span>
                  <span class="text-subtitle-2 text-sm-subtitle-1 font-weight-black text-grey-darken-4">KSH 65,000</span>
                </div>
              </div>

              <!-- Payment Details Section Title -->
              <div class="text-center font-weight-black text-caption text-uppercase mb-2 text-blue-darken-4" style="letter-spacing: 0.5px; font-size: 0.75rem !important;">
                — PAYMENT DETAILS —
              </div>

              <!-- M-PESA Paybill Section -->
              <div class="mb-2 pa-3 rounded-lg border" style="background-color: #eafaf1; border-color: #27ae60 !important;">
                <div class="d-flex align-center mb-1">
                  <v-icon size="small" color="green-darken-2" class="mr-1 mr-sm-2">mdi-cellphone-text</v-icon>
                  <span class="text-caption font-weight-black text-uppercase text-green-darken-3" style="font-size: 0.75rem !important;">M-PESA PAYBILL</span>
                </div>
                <div class="d-flex justify-space-between text-caption font-weight-bold text-grey-darken-4 flex-wrap" style="font-size: 0.75rem !important;">
                  <span>PAYBILL: <strong>522 533</strong></span>
                  <span>ACC: <strong>8061491</strong></span>
                </div>
              </div>

              <!-- KCB Bank Section -->
              <div class="mb-4 pa-3 rounded-lg border" style="background-color: #ebf5fb; border-color: #2980b9 !important;">
                <div class="d-flex align-center mb-1">
                  <v-icon size="small" color="#002b66" class="mr-1 mr-sm-2">mdi-bank</v-icon>
                  <span class="text-caption font-weight-black text-uppercase text-blue-darken-4" style="font-size: 0.75rem !important;">KCB BANK DETAILS</span>
                </div>
                <div class="text-caption font-weight-medium text-truncate" style="font-size: 0.75rem !important;">
                  <strong>NAME:</strong> SMITH INSTITUTE OF APPLIED SKILLS
                </div>
                <div class="text-caption font-weight-medium" style="font-size: 0.75rem !important;">
                  <strong>ACC NO:</strong> 1349368644
                </div>
              </div>

              <!-- Action Button at the bottom of the card -->
              <v-row dense>
                <v-col cols="12">
                  <v-btn
                    to="/apply"
                    color="#002b66"
                    block
                    size="small"
                    variant="flat"
                    class="font-weight-bold text-white text-caption py-4"
                    elevation="1"
                  >
                    <v-icon start size="small">mdi-arrow-right-circle</v-icon> Apply Online Now
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- Poster Contact Quick Bar -->
    <v-sheet color="#e8a825" class="py-2 py-sm-3 text-grey-darken-4 elevation-3">
      <v-container class="py-0 px-2 px-sm-3">
        <v-row justify="space-around" align="center" class="text-caption font-weight-bold text-center" dense>
          <v-col cols="6" sm="6" class="py-1">
            <a href="tel:+254723233233" class="text-decoration-none text-grey-darken-4 d-flex align-center justify-center">
              <v-icon class="mr-1" color="#002b66" size="small">mdi-phone</v-icon>
              <span class="text-caption font-weight-bold">+254 723 233 233</span>
            </a>
          </v-col>
          <v-col cols="6" sm="6" class="py-1">
            <a href="mailto:smithinstituteofappliedskills@gmail.com" class="text-decoration-none text-grey-darken-4 d-flex align-center justify-center">
              <v-icon class="mr-1" color="#002b66" size="small">mdi-email</v-icon>
              <span class="text-caption font-weight-bold text-truncate d-none d-sm-inline">smithinstituteofappliedskills@gmail.com</span>
              <span class="text-caption font-weight-bold d-inline d-sm-none">Email Us</span>
            </a>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- Modules Grid -->
    <v-container class="py-6 py-md-14 px-3 px-sm-4">
      <div class="text-center mb-6 mb-md-10">
        <v-chip color="#002b66" variant="tonal" size="small" class="font-weight-bold mb-1 d-sm-none">
          <v-icon start size="small">mdi-book-open-variant</v-icon> CURRICULUM
        </v-chip>
        <v-chip color="#002b66" variant="tonal" size="default" class="font-weight-bold mb-2 d-none d-sm-inline-flex">CURRICULUM</v-chip>
        <h2 class="text-subtitle-1 text-sm-h4 font-weight-bold mb-1 text-blue-darken-4">What You Will Learn</h2>
        <p class="text-caption text-sm-body-1 text-grey-darken-1" style="max-width: 650px; margin: 0 auto; line-height: 1.5;">
          Practical workshop sessions focused on trade fundamentals required by modern cabinetmakers.
        </p>
      </div>

      <v-row dense>
        <v-col v-for="module in modules" :key="module.id" cols="12" md="4" class="mb-3 mb-md-0">
          <v-card class="h-100 d-flex flex-column pa-2 rounded-xl bg-white elevation-2 module-card" flat>
            <v-card-item class="pa-3 pa-sm-4">
              <div class="d-flex align-center mb-2">
                <!-- Module number avatar increased by ~50% (from 36 to 54) -->
                <v-avatar color="#002b66" size="54" class="mr-3 text-white font-weight-bold text-subtitle-1 elevation-1">
                  0{{ module.id }}
                </v-avatar>
                <v-card-title class="font-weight-bold text-caption text-sm-h6 text-wrap mb-0" style="font-size: 0.9rem !important; line-height: 1.3;">
                  {{ module.title }}
                </v-card-title>
              </div>
            </v-card-item>

            <v-card-text class="flex-grow-1 text-caption text-sm-body-2 text-grey-darken-2 px-3 px-sm-4 pb-4 pt-0">
              {{ module.description }}

              <v-list density="compact" class="bg-transparent mt-3 pa-0">
                <v-list-item v-for="(item, idx) in module.highlights" :key="idx" class="px-0 py-1 min-h-0">
                  <template #prepend>
                    <v-icon size="small" color="success" class="mr-2">mdi-check-circle-outline</v-icon>
                  </template>
                  <v-list-item-title class="text-caption font-weight-medium text-wrap" style="font-size: 0.78rem !important;">{{ item }}</v-list-item-title>
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
interface NavLink {
  title: string
  to: string
  icon: string
  iconColor?: string
}

const navLinks: NavLink[] = [
  { title: 'Home', to: '/', icon: 'mdi-home-outline' },
  { title: 'Course Details', to: '/courses', icon: 'mdi-school-outline' },
  { title: 'About Us', to: '/about', icon: 'mdi-information-outline' }
]

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
  letter-spacing: 0.5px !important;
}
.lh-1 {
  line-height: 1.2 !important;
}
.min-h-0 {
  min-height: 22px !important;
}

.hero-pattern-overlay {
  background: radial-gradient(circle at 80% 20%, rgba(232, 168, 37, 0.12) 0%, transparent 60%);
  pointer-events: none;
}

.border-subtle {
  border: 1px solid rgba(0, 43, 102, 0.1) !important;
}

.module-card {
  border-top: 4px solid #002b66 !important;
  border-left: 1px solid rgba(0, 0, 0, 0.04);
  border-right: 1px solid rgba(0, 0, 0, 0.04);
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.module-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08) !important;
}
</style>