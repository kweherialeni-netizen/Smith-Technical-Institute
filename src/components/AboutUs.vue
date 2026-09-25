<template>
  <div>
    <!-- Top Header Banner (Matching Brand Logo & Header Layout) -->
    <v-sheet color="#002b66" class="py-2 py-sm-3 text-white border-b-lg" style="border-color: #e8a825 !important;">
      <v-container class="d-flex align-center justify-space-between flex-wrap ga-1 ga-sm-2 py-0 px-2 px-sm-4">
        <router-link to="/" class="d-flex align-center text-decoration-none">
          <!-- Official Logo -->
          <v-avatar size="32" class="mr-2 mr-sm-3 bg-white elevation-2 d-sm-none">
            <v-img src="@/assets/logo.png" alt="Smith Institute Logo" contain />
          </v-avatar>
          <v-avatar size="42" class="mr-2 mr-sm-3 bg-white elevation-2 d-none d-sm-flex">
            <v-img src="@/assets/logo.png" alt="Smith Institute Logo" contain />
          </v-avatar>
          <div>
            <h1 class="text-caption font-weight-black text-uppercase mb-0 text-white tracking-wide lh-1 d-sm-none" style="font-size: 0.75rem !important;">
              Smith Institute
            </h1>
            <h1 class="text-body-2 text-sm-h6 font-weight-black text-uppercase mb-0 text-white tracking-wide lh-1 d-none d-sm-block">
              Smith Institute of Applied Skills
            </h1>
            <div class="text-caption font-weight-bold mt-0 mt-sm-1" style="color: #e8a825; font-size: 0.6rem !important;">
              SKILLS FOR THE FUTURE
            </div>
          </div>
        </router-link>

        <!-- Mobile Icon Quick Actions -->
        <div class="d-flex d-sm-none align-center ga-1">
          <v-btn
            to="/"
            color="#e8a825"
            icon="mdi-home-outline"
            size="x-small"
            variant="flat"
            aria-label="Home"
          />
          <v-btn
            to="/courses"
            color="#e8a825"
            icon="mdi-school-outline"
            size="x-small"
            variant="flat"
            aria-label="Course Details"
          />
          <v-btn
            href="tel:+254723233233"
            color="#e8a825"
            icon="mdi-phone"
            size="x-small"
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
            <v-icon start size="small" :color="link.iconColor || 'white'">{{ link.icon }}</v-icon>
            {{ link.title }}
          </v-btn>
        </nav>
      </v-container>
    </v-sheet>

    <!-- Page Hero Banner -->
    <v-sheet color="#002b66" class="py-4 py-md-10 text-white border-b-lg" style="border-color: #e8a825 !important;">
      <v-container class="px-3 px-sm-4">
        <v-chip color="#e8a825" size="x-small" label variant="flat" class="font-weight-bold text-uppercase text-grey-darken-4 mb-2 d-sm-none" style="font-size: 0.65rem;">
          <v-icon start size="x-small" class="mr-1">mdi-information-outline</v-icon> OUR STORY
        </v-chip>
        <v-chip color="#e8a825" size="small" label variant="flat" class="font-weight-bold text-uppercase text-grey-darken-4 mb-2 d-none d-sm-flex">
          ABOUT SMITH INSTITUTE
        </v-chip>

        <h1 class="text-h5 text-sm-h3 font-weight-black text-uppercase text-white mb-1 mb-sm-2">About Us</h1>
        <p class="text-caption text-sm-body-1 text-grey-lighten-2 mb-0" style="max-width: 680px; line-height: 1.4;">
          Empowering the next generation of artisans and professionals with rigorous, hands-on vocational training and practical applied skills for the modern industry.
        </p>
      </v-container>
    </v-sheet>

    <!-- Quick Contact Bar -->
    <v-sheet color="#e8a825" class="py-2 py-sm-3 text-grey-darken-4 elevation-2">
      <v-container class="py-0 px-2 px-sm-3">
        <v-row justify="space-around" align="center" class="text-caption font-weight-bold text-center" dense>
          <v-col cols="6" sm="6" class="py-1">
            <a href="tel:+254723233233" class="text-decoration-none text-grey-darken-4 d-flex align-center justify-center">
              <v-icon class="mr-1" color="#002b66" size="x-small">mdi-phone</v-icon>
              <span class="text-caption font-weight-bold">+254 723 233 233</span>
            </a>
          </v-col>
          <v-col cols="6" sm="6" class="py-1">
            <a href="mailto:smithinstituteofappliedskills@gmail.com" class="text-decoration-none text-grey-darken-4 d-flex align-center justify-center">
              <v-icon class="mr-1" color="#002b66" size="x-small">mdi-email</v-icon>
              <span class="text-caption font-weight-bold text-truncate d-none d-sm-inline">smithinstituteofappliedskills@gmail.com</span>
              <span class="text-caption font-weight-bold d-inline d-sm-none">Email Us</span>
            </a>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- Main Content Container -->
    <v-container class="py-5 py-md-10 px-3 px-sm-4">
      <v-row justify="center">
        <!-- Main Description -->
        <v-col cols="12" md="8">
          <v-card border flat class="pa-4 pa-sm-6 rounded-lg elevation-1 mb-6">
            <h2 class="text-subtitle-1 text-sm-h5 font-weight-bold text-blue-darken-4 mb-3">
              <v-icon color="#002b66" size="x-small" class="mr-1 d-sm-none">mdi-school</v-icon>
              Welcome to Smith Institute of Applied Skills
            </h2>
            <p class="text-caption text-sm-body-2 text-grey-darken-2 mb-3" style="line-height: 1.6;">
              At Smith Institute, we believe that true mastery comes from the bridge between theoretical knowledge and practical execution. Our programs are uniquely tailored to equip students with direct, employable craftsmanship and technical competencies demanded by today's fast-growing manufacturing and construction sectors.
            </p>
            <p class="text-caption text-sm-body-2 text-grey-darken-2 mb-0" style="line-height: 1.6;">
              Through our flagship <strong>School of Cabinetry</strong> program, trainees immerse themselves in wood technical theory, precision cutting list calculations, carcass assembly, advanced joinery, and professional hardware installation using industry-grade tools and equipment.
            </p>
          </v-card>

          <!-- Mission & Vision Cards -->
          <v-row dense>
            <v-col cols="12" sm="6">
              <v-card border flat class="pa-4 rounded-lg h-100 bg-grey-lighten-5">
                <div class="d-flex align-center mb-2">
                  <v-avatar color="#002b66" size="32" class="elevation-1 mr-2">
                    <v-icon color="#e8a825" size="x-small">mdi-target</v-icon>
                  </v-avatar>
                  <h3 class="text-subtitle-2 font-weight-bold text-blue-darken-4">Our Mission</h3>
                </div>
                <p class="text-caption text-grey-darken-2 mb-0" style="line-height: 1.5;">
                  To deliver accessible, high-quality applied technical education that transforms ambitious learners into skilled, self-reliant artisans and industrial professionals.
                </p>
              </v-card>
            </v-col>

            <v-col cols="12" sm="6">
              <v-card border flat class="pa-4 rounded-lg h-100 bg-grey-lighten-5">
                <div class="d-flex align-center mb-2">
                  <v-avatar color="#002b66" size="32" class="elevation-1 mr-2">
                    <v-icon color="#e8a825" size="x-small">mdi-eye-outline</v-icon>
                  </v-avatar>
                  <h3 class="text-subtitle-2 font-weight-bold text-blue-darken-4">Our Vision</h3>
                </div>
                <p class="text-caption text-grey-darken-2 mb-0" style="line-height: 1.5;">
                  To be the leading center of excellence for technical craftsmanship and vocational training across East Africa, shaping the standard for practical education.
                </p>
              </v-card>
            </v-col>
          </v-row>
        </v-col>

        <!-- Sidebar Call to Action -->
        <v-col cols="12" md="4" class="mt-4 mt-md-0">
          <v-card border flat class="pa-4 pa-sm-5 rounded-lg bg-white elevation-1 position-sticky" style="top: 20px; border-color: #e8a825 !important;">
            <h3 class="text-subtitle-1 font-weight-bold text-blue-darken-4 mb-1">
              <v-icon color="#002b66" size="x-small" class="mr-1">mdi-account-school-outline</v-icon>
              Ready to Join Us?
            </h3>
            <p class="text-caption text-grey-darken-2 mb-4">
              Intakes are currently ongoing for our professional cabinetry and applied skills programs. Secure your slot today.
            </p>

            <v-btn
              to="/apply"
              color="#002b66"
              block
              size="small"
              variant="flat"
              class="text-white font-weight-bold mb-3"
            >
              <v-icon start size="x-small">mdi-pencil-box-outline</v-icon> Apply Online Now
            </v-btn>

            <v-btn
              to="/courses"
              variant="outlined"
              color="#002b66"
              block
              size="small"
              class="font-weight-bold mb-4"
            >
              <v-icon start size="x-small">mdi-school-outline</v-icon> View Course Details
            </v-btn>

            <div class="text-caption text-center text-grey-darken-1" style="font-size: 0.75rem !important;">
              Have questions? Talk to us at<br>
              <a href="tel:+254723233233" class="text-blue-darken-4 font-weight-bold text-decoration-none">
                +254 723 233 233
              </a>
            </div>
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
  { title: 'About Us', to: '/about', icon: 'mdi-information-outline' },
  { title: 'Contact', to: '/contact', icon: 'mdi-phone-outline' }
]
</script>

<style scoped>
.tracking-wide {
  letter-spacing: 0.5px !important;
}
.lh-1 {
  line-height: 1.2 !important;
}
</style>