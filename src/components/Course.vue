<template>
  <div>
    <!-- Top Header Banner -->
    <v-sheet color="#002b66" class="py-2 py-sm-3 text-white border-b-lg" style="border-color: #e8a825 !important;">
      <v-container class="d-flex align-center justify-space-between flex-wrap ga-1 ga-sm-2 py-0 px-2 px-sm-4">
        <router-link to="/" class="d-flex align-center text-decoration-none">
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

        <!-- Mobile Icon Quick Actions (Added Home & Course symbols here) -->
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

    <!-- Course Overview Hero Banner -->
    <v-sheet color="#002b66" class="py-5 py-md-10 text-white position-relative border-b-lg" style="border-color: #e8a825 !important;">
      <v-container class="px-3 px-sm-4">
        <div class="d-flex align-center mb-1 mb-sm-2">
          <v-chip color="#e8a825" size="x-small" label variant="flat" class="font-weight-bold text-uppercase text-grey-darken-4 mr-2 d-sm-none" style="font-size: 0.65rem;">
            <v-icon start size="x-small" class="mr-1">mdi-book-open-page-variant</v-icon> COURSE OVERVIEW
          </v-chip>
          <v-chip color="#e8a825" size="small" label variant="flat" class="font-weight-bold text-uppercase text-grey-darken-4 mr-2 d-none d-sm-flex">
            SMITH INSTITUTE OF APPLIED SKILLS — PROFESSIONAL PROGRAM
          </v-chip>
        </div>

        <h2 class="text-h5 text-sm-h2 font-weight-black mb-1 text-uppercase text-white">
          School of Cabinetry
        </h2>

        <div class="text-caption text-sm-h6 font-weight-bold mb-2 mb-sm-3 font-italic" style="color: #e8a825;">
          "Learn, Build, Grow Your Future"
        </div>

        <p class="text-caption text-sm-body-1 text-grey-lighten-2 mb-0" style="max-width: 820px; line-height: 1.4;">
          The School of Cabinetry program combines hands-on wood technical theory with intensive workshop execution. Students learn to read technical drawings, construct carcasses, select appropriate hardware, handle edge-banding equipment, and execute precise joinery with board materials.
        </p>
      </v-container>
    </v-sheet>

    <!-- Quick Contact Strip -->
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

    <!-- Main Content -->
    <v-container class="py-5 py-md-14 px-3 px-sm-4">
      <v-row>
        <!-- Course Content (Now prioritized at the top) -->
        <v-col cols="12" md="8">
          <div class="text-center text-md-start mb-4">
            <v-chip color="#002b66" variant="tonal" size="x-small" class="font-weight-bold mb-1 d-sm-none">
              <v-icon start size="x-small">mdi-format-list-bulleted</v-icon> CURRICULUM
            </v-chip>
            <v-chip color="#002b66" variant="tonal" size="small" class="font-weight-bold mb-2 d-none d-sm-inline-flex">CURRICULUM</v-chip>
            <h2 class="text-subtitle-1 text-sm-h4 font-weight-bold mb-1 text-blue-darken-4">Curriculum Breakdown</h2>
          </div>

          <v-expansion-panels variant="inset" class="mb-6">
            <v-expansion-panel
              v-for="(mod, index) in detailedModules"
              :key="index"
              elevation="1"
              class="mb-2 border rounded-lg"
            >
              <v-expansion-panel-title class="font-weight-bold text-caption text-sm-subtitle-1 text-blue-darken-4 py-2 py-sm-3" style="font-size: 0.85rem !important;">
                Module {{ index + 1 }}: {{ mod.title }}
              </v-expansion-panel-title>

              <v-expansion-panel-text class="text-caption text-sm-body-2 text-grey-darken-2 pt-2">
                <p class="mb-3 text-caption text-sm-body-2">{{ mod.description }}</p>
                
                <div class="font-weight-bold text-caption text-uppercase text-grey-darken-3 mb-2" style="font-size: 0.72rem !important;">
                  Key Skills Covered:
                </div>

                <v-row dense>
                  <v-col v-for="(skill, sIdx) in mod.skills" :key="sIdx" cols="12" sm="6">
                    <div class="d-flex align-center py-1">
                      <v-icon size="x-small" color="success" class="mr-2">mdi-check-circle-outline</v-icon>
                      <span class="text-caption font-weight-medium" style="font-size: 0.72rem !important;">{{ skill }}</span>
                    </div>
                  </v-col>
                </v-row>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>

          <!-- Workshop Requirements & Info -->
          <div class="text-center text-md-start mb-3">
            <h3 class="text-subtitle-1 text-sm-h5 font-weight-bold text-blue-darken-4 d-flex align-center justify-center justify-md-start">
              <v-icon color="#002b66" size="small" class="mr-2">mdi-information-outline</v-icon>
              Workshop Requirements & Info
            </h3>
          </div>

          <v-card color="#002b66" class="pa-3 pa-sm-5 mb-5 rounded-lg text-white elevation-2" style="border-left: 6px solid #e8a825 !important;">
            <v-row dense>
              <v-col cols="12" sm="6">
                <div class="d-flex align-center mb-2 mb-sm-3">
                  <v-icon color="#e8a825" size="small" class="mr-2">mdi-account-school</v-icon>
                  <span class="font-weight-bold text-caption text-white">Open to all skill levels</span>
                </div>
                <div class="d-flex align-center mb-2 mb-sm-0">
                  <v-icon color="#e8a825" size="small" class="mr-2">mdi-wrench</v-icon>
                  <span class="font-weight-bold text-caption text-white">Workshop gear provided</span>
                </div>
              </v-col>
              <v-col cols="12" sm="6">
                <div class="d-flex align-center mb-2 mb-sm-3">
                  <v-icon color="#e8a825" size="small" class="mr-2">mdi-certificate</v-icon>
                  <span class="font-weight-bold text-caption text-white">Certificate upon completion</span>
                </div>
                <div class="d-flex align-center">
                  <v-icon color="#e8a825" size="small" class="mr-2">mdi-calendar-clock</v-icon>
                  <span class="font-weight-bold text-caption text-white">Flexible intake schedules</span>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <!-- Sidebar Actions -->
        <v-col cols="12" md="4">
          <v-card variant="outlined" class="pa-4 pa-sm-5 rounded-lg position-sticky bg-white elevation-1" style="top: 20px; border-color: #e8a825 !important;">
            <h3 class="text-subtitle-1 text-sm-h6 font-weight-bold text-blue-darken-4 mb-1">Enrollment Open</h3>
            <p class="text-caption text-grey-darken-2 mb-4">
              Secure your spot in the upcoming intake to gain hands-on technical skills and practical workshop experience.
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
              to="/"
              variant="outlined"
              color="#002b66"
              block
              size="small"
              class="font-weight-bold mb-4"
            >
              <v-icon start size="x-small">mdi-arrow-left</v-icon> Back to Home
            </v-btn>

            <div class="text-caption text-center text-grey-darken-1">
              Have questions about the syllabus?<br>
              <router-link to="/contact" class="text-blue-darken-4 text-decoration-none font-weight-bold">
                <v-icon size="x-small" color="#002b66">mdi-phone</v-icon> Contact Support
              </router-link>
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

interface DetailedModule {
  title: string
  description: string
  skills: string[]
}

const navLinks: NavLink[] = [
  { title: 'Home', to: '/', icon: 'mdi-home-outline' },
  { title: 'Course Details', to: '/courses', icon: 'mdi-school-outline' },
  { title: 'About Us', to: '/about', icon: 'mdi-information-outline' },
  { title: 'Contact', to: '/contact', icon: 'mdi-phone-outline' }
]

const detailedModules: DetailedModule[] = [
  {
    title: 'Board Materials & Carcass Construction',
    description: 'Master engineered board cutting, material selection, edge-banding, and assembling standard cabinet carcasses using modern jointing methods.',
    skills: ['MDF & Plywood handling', 'Table saw precision setup', 'Edge-banding application', 'Screw & dowel joinery']
  },
  {
    title: 'Hardware Fitting & Joinery Systems',
    description: 'Learn technical hardware installation including soft-close hinges, drawer slides, handles, and hardware clearance calculation.',
    skills: ['Concealed hinge mounting', 'Under-mount runner installation', 'Cutting list optimization', 'Drawer box assembly']
  },
  {
    title: 'Custom Kitchens & Wardrobe Fitting',
    description: 'Take projects from paper planning to full site assembly, including room measurement, leveling, scribe fillers, and worktop fitting.',
    skills: ['Kitchen unit layout', 'Built-in wardrobe framing', 'Worktop jointing', 'On-site installation & leveling']
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
</style>