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
          <v-icon start size="x-small" class="mr-1">mdi-phone-outline</v-icon> GET IN TOUCH
        </v-chip>
        <v-chip color="#e8a825" size="small" label variant="flat" class="font-weight-bold text-uppercase text-grey-darken-4 mb-2 d-none d-sm-flex">
          CONTACT SUPPORT
        </v-chip>

        <h1 class="text-h5 text-sm-h3 font-weight-black text-uppercase text-white mb-1 mb-sm-2">Contact Us</h1>
        <p class="text-caption text-sm-body-1 text-grey-lighten-2 mb-0" style="max-width: 600px; line-height: 1.4;">
          Have questions about our cabinetry courses, fees, or intake schedules? Reach out to our admissions team today.
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
        <!-- Contact Information Cards -->
        <v-col cols="12" md="5" class="mb-4 mb-md-0">
          <v-card border flat class="pa-4 pa-sm-6 rounded-lg elevation-1 h-100 d-flex flex-column justify-space-between">
            <div>
              <h2 class="text-subtitle-1 text-sm-h5 font-weight-bold text-blue-darken-4 mb-3">
                <v-icon color="#002b66" size="x-small" class="mr-1 d-sm-none">mdi-information-outline</v-icon>
                Institute Details
              </h2>
              <p class="text-caption text-grey-darken-2 mb-4">
                We are open Monday through Saturday to answer inquiries and welcome prospective students to our workshops.
              </p>

              <!-- Phone Item -->
              <div class="d-flex align-start mb-4">
                <v-avatar color="#002b66" size="36" class="elevation-1 mr-3 mt-1">
                  <v-icon color="#e8a825" size="small">mdi-phone</v-icon>
                </v-avatar>
                <div>
                  <div class="text-caption font-weight-bold text-grey-darken-4">Call Us / WhatsApp</div>
                  <a href="tel:+254723233233" class="text-caption text-blue-darken-4 font-weight-bold text-decoration-none">
                    +254 723 233 233
                  </a>
                </div>
              </div>

              <!-- Email Item -->
              <div class="d-flex align-start mb-4">
                <v-avatar color="#002b66" size="36" class="elevation-1 mr-3 mt-1">
                  <v-icon color="#e8a825" size="small">mdi-email</v-icon>
                </v-avatar>
                <div>
                  <div class="text-caption font-weight-bold text-grey-darken-4">Email Address</div>
                  <a href="mailto:smithinstituteofappliedskills@gmail.com" class="text-caption text-blue-darken-4 font-weight-bold text-decoration-none text-break">
                    smithinstituteofappliedskills@gmail.com
                  </a>
                </div>
              </div>

              <!-- Location Item -->
              <div class="d-flex align-start mb-4">
                <v-avatar color="#002b66" size="36" class="elevation-1 mr-3 mt-1">
                  <v-icon color="#e8a825" size="small">mdi-map-marker</v-icon>
                </v-avatar>
                <div>
                  <div class="text-caption font-weight-bold text-grey-darken-4">Location & Workshops</div>
                  <div class="text-caption text-grey-darken-2">
                    Kamakis, Ruiru
                  </div>
                </div>
              </div>
            </div>

            <!-- Quick Action Button -->
            <v-btn
              to="/apply"
              color="#002b66"
              block
              size="small"
              variant="flat"
              class="text-white font-weight-bold mt-4"
            >
              <v-icon start size="x-small">mdi-pencil-box-outline</v-icon> Apply for Intake Now
            </v-btn>
          </v-card>
        </v-col>

        <!-- Send a Message Form -->
        <v-col cols="12" md="7">
          <v-card border flat class="pa-4 pa-sm-6 rounded-lg elevation-1">
            <h2 class="text-subtitle-1 text-sm-h5 font-weight-bold text-blue-darken-4 mb-3">
              <v-icon color="#002b66" size="x-small" class="mr-1 d-sm-none">mdi-message-text-outline</v-icon>
              Send Us a Message
            </h2>
            <p class="text-caption text-grey-darken-2 mb-4">
              Fill out the form below and our team will get back to you promptly.
            </p>

            <v-form ref="form" v-model="valid" @submit.prevent="submitMessage">
              <v-row dense>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="contact.name"
                    label="Your Name *"
                    variant="outlined"
                    density="compact"
                    color="#002b66"
                    :rules="[v => !!v || 'Name is required']"
                    class="mb-2"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="contact.phone"
                    label="Phone Number *"
                    placeholder="07XX XXX XXX"
                    variant="outlined"
                    density="compact"
                    color="#002b66"
                    :rules="[v => !!v || 'Phone number is required']"
                    class="mb-2"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    v-model="contact.email"
                    label="Email Address (Optional)"
                    variant="outlined"
                    density="compact"
                    color="#002b66"
                    type="email"
                    class="mb-2"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-textarea
                    v-model="contact.message"
                    label="Your Message / Inquiry *"
                    placeholder="Tell us what you would like to know..."
                    variant="outlined"
                    density="compact"
                    color="#002b66"
                    rows="4"
                    :rules="[v => !!v || 'Message is required']"
                    class="mb-2"
                  ></v-textarea>
                </v-col>
              </v-row>

              <v-btn
                type="submit"
                color="#002b66"
                size="large"
                block
                class="text-white font-weight-bold mt-2"
                :loading="submitting"
              >
                <v-icon start size="small">mdi-send</v-icon>
                Send Message
              </v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'

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

const valid = ref(false)
const submitting = ref(false)

const contact = reactive({
  name: '',
  phone: '',
  email: '',
  message: ''
})

const submitMessage = () => {
  if (!valid.value) return
  submitting.value = true
  setTimeout(() => {
    submitting.value = false
    alert('Your message has been sent successfully! We will get back to you shortly.')
    contact.name = ''
    contact.phone = ''
    contact.email = ''
    contact.message = ''
  }, 1000)
}
</script>

<style scoped>
.tracking-wide {
  letter-spacing: 0.5px !important;
}
.lh-1 {
  line-height: 1.2 !important;
}
</style>