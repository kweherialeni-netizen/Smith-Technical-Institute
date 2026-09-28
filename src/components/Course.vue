<template>
  <div class="bg-grey-lighten-4 min-h-screen">
    <!-- Top Header Banner -->
    <v-sheet color="#002b66" class="py-2 py-sm-3 text-white border-b-lg shadow-sm" style="border-color: #e8a825 !important;">
      <v-container class="d-flex align-center justify-space-between flex-wrap ga-1 ga-sm-2 py-0 px-2 px-sm-4">
        <router-link to="/" class="d-flex align-center text-decoration-none">
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
        </router-link>

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

    <!-- Course Overview Hero Banner -->
    <v-sheet color="#002b66" class="py-6 py-md-14 text-white position-relative border-b-lg overflow-hidden" style="border-color: #e8a825 !important;">
      <div class="hero-pattern-overlay position-absolute w-100 h-100 top-0 left-0"></div>
      <v-container class="px-3 px-sm-4 position-relative">
        <div class="d-flex align-center mb-1 mb-sm-2">
          <v-chip color="#e8a825" size="small" label variant="flat" class="font-weight-bold text-uppercase text-grey-darken-4 mr-2 d-sm-none" style="font-size: 0.7rem;">
            <v-icon start size="small" class="mr-1">mdi-book-open-page-variant</v-icon> COURSE OVERVIEW
          </v-chip>
          <v-chip color="#e8a825" size="default" label variant="flat" class="font-weight-bold text-uppercase text-grey-darken-4 mr-2 d-none d-sm-flex">
            SMITH INSTITUTE OF APPLIED SKILLS — PROFESSIONAL PROGRAM
          </v-chip>
        </div>

        <h2 class="text-h5 text-sm-h2 font-weight-black mb-1 text-uppercase text-white">
          School of Cabinetry
        </h2>

        <div class="text-caption text-sm-h6 font-weight-bold mb-2 mb-sm-3 font-italic" style="color: #e8a825;">
          "Learn, Build, Grow Your Future"
        </div>

        <p class="text-caption text-sm-body-1 text-grey-lighten-2 mb-0" style="max-width: 820px; line-height: 1.5;">
          The School of Cabinetry program combines hands-on wood technical theory with intensive workshop execution. Students learn to read technical drawings, construct carcasses, select appropriate hardware, handle edge-banding equipment, and execute precise joinery with board materials.
        </p>
      </v-container>
    </v-sheet>

    <!-- Quick Contact Strip -->
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

    <!-- Main Content -->
    <v-container class="py-6 py-md-14 px-3 px-sm-4">
      <v-row>
        <!-- Course Content -->
        <v-col cols="12" md="8">
          <div class="text-center text-md-start mb-4">
            <v-chip color="#002b66" variant="tonal" size="small" class="font-weight-bold mb-1 d-sm-none">
              <v-icon start size="small">mdi-format-list-bulleted</v-icon> CURRICULUM
            </v-chip>
            <v-chip color="#002b66" variant="tonal" size="default" class="font-weight-bold mb-2 d-none d-sm-inline-flex">CURRICULUM</v-chip>
            <h2 class="text-subtitle-1 text-sm-h4 font-weight-bold mb-1 text-blue-darken-4">Curriculum Breakdown</h2>
          </div>

          <v-expansion-panels variant="inset" class="mb-6">
            <v-expansion-panel
              v-for="(mod, index) in detailedModules"
              :key="index"
              elevation="1"
              class="mb-2 border rounded-xl bg-white module-panel"
            >
              <v-expansion-panel-title class="font-weight-bold text-caption text-sm-subtitle-1 text-blue-darken-4 py-2 py-sm-3" style="font-size: 0.95rem !important;">
                Module {{ index + 1 }}: {{ mod.title }}
              </v-expansion-panel-title>

              <v-expansion-panel-text class="text-caption text-sm-body-2 text-grey-darken-2 pt-2">
                <p class="mb-3 text-caption text-sm-body-2">{{ mod.description }}</p>
                
                <div class="font-weight-bold text-caption text-uppercase text-grey-darken-3 mb-2" style="font-size: 0.8rem !important;">
                  Key Skills Covered:
                </div>

                <v-row dense>
                  <v-col v-for="(skill, sIdx) in mod.skills" :key="sIdx" cols="12" sm="6">
                    <div class="d-flex align-center py-1">
                      <v-icon size="small" color="success" class="mr-2">mdi-check-circle-outline</v-icon>
                      <span class="text-caption font-weight-medium" style="font-size: 0.8rem !important;">{{ skill }}</span>
                    </div>
                  </v-col>
                </v-row>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>

          <!-- Workshop Requirements & Info -->
          <div class="text-center text-md-start mb-3">
            <h3 class="text-subtitle-1 text-sm-h5 font-weight-bold text-blue-darken-4 d-flex align-center justify-center justify-md-start">
              <v-icon color="#002b66" size="default" class="mr-2">mdi-information-outline</v-icon>
              Workshop Requirements & Info
            </h3>
          </div>

          <v-card color="#002b66" class="pa-4 pa-sm-6 mb-5 rounded-xl text-white elevation-2" style="border-left: 6px solid #e8a825 !important;">
            <v-row dense>
              <v-col cols="12" sm="6">
                <div class="d-flex align-center mb-2 mb-sm-3">
                  <v-icon color="#e8a825" size="default" class="mr-2">mdi-account-school</v-icon>
                  <span class="font-weight-bold text-caption text-sm-body-2 text-white">Open to all skill levels</span>
                </div>
                <div class="d-flex align-center mb-2 mb-sm-0">
                  <v-icon color="#e8a825" size="default" class="mr-2">mdi-wrench</v-icon>
                  <span class="font-weight-bold text-caption text-sm-body-2 text-white">Workshop gear provided</span>
                </div>
              </v-col>
              <v-col cols="12" sm="6">
                <div class="d-flex align-center mb-2 mb-sm-3">
                  <v-icon color="#e8a825" size="default" class="mr-2">mdi-certificate</v-icon>
                  <span class="font-weight-bold text-caption text-sm-body-2 text-white">Certificate upon completion</span>
                </div>
                <div class="d-flex align-center">
                  <v-icon color="#e8a825" size="default" class="mr-2">mdi-calendar-clock</v-icon>
                  <span class="font-weight-bold text-caption text-sm-body-2 text-white">Flexible intake schedules</span>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <!-- Sidebar Actions -->
        <v-col cols="12" md="4">
          <v-card variant="flat" class="pa-4 pa-sm-6 rounded-xl position-sticky bg-white elevation-4 border-subtle" style="top: 20px;">
            <h3 class="text-subtitle-1 text-sm-h6 font-weight-bold text-blue-darken-4 mb-1">Enrollment Open</h3>
            <p class="text-caption text-grey-darken-2 mb-4" style="line-height: 1.4;">
              Secure your spot in the upcoming intake to gain hands-on technical skills and practical workshop experience.
            </p>

            <v-btn
              to="/apply"
              color="#002b66"
              block
              size="small"
              variant="flat"
              class="text-white font-weight-bold mb-3 py-4 text-body-2"
              elevation="1"
            >
              <v-icon start size="small">mdi-pencil-box-outline</v-icon> Apply Online Now
            </v-btn>

            <v-btn
              to="/"
              variant="outlined"
              color="#002b66"
              block
              size="small"
              class="font-weight-bold mb-4 py-4 text-body-2"
            >
              <v-icon start size="small">mdi-arrow-left</v-icon> Back to Home
            </v-btn>

            <div class="text-caption text-center text-grey-darken-1 pt-2 border-t">
              Have questions about the syllabus?<br>
              <a href="tel:+254723233233" class="text-blue-darken-4 text-decoration-none font-weight-bold d-inline-flex align-center justify-center mt-1">
                <v-icon size="small" color="#002b66" class="mr-1">mdi-phone</v-icon> Call Support: +254 723 233 233
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

interface DetailedModule {
  title: string
  description: string
  skills: string[]
}

const navLinks: NavLink[] = [
  { title: 'Home', to: '/', icon: 'mdi-home-outline' },
  { title: 'Course Details', to: '/courses', icon: 'mdi-school-outline' },
  { title: 'About Us', to: '/about', icon: 'mdi-information-outline' }
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

.hero-pattern-overlay {
  background: radial-gradient(circle at 80% 20%, rgba(232, 168, 37, 0.12) 0%, transparent 60%);
  pointer-events: none;
}

.border-subtle {
  border: 1px solid rgba(0, 43, 102, 0.1) !important;
}

.module-panel {
  border: 1px solid rgba(0, 43, 102, 0.12) !important;
  transition: box-shadow 0.2s ease;
}

.module-panel:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05) !important;
}
</style>