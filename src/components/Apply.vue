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

    <!-- Page Hero Banner -->
    <v-sheet color="#002b66" class="py-6 py-md-10 text-white position-relative border-b-lg overflow-hidden" style="border-color: #e8a825 !important;">
      <div class="hero-pattern-overlay position-absolute w-100 h-100 top-0 left-0"></div>
      <v-container class="px-3 px-sm-4 position-relative">
        <v-chip color="#e8a825" size="small" label variant="flat" class="font-weight-bold text-uppercase text-grey-darken-4 mb-2 d-sm-none" style="font-size: 0.7rem;">
          <v-icon start size="small" class="mr-1">mdi-whatsapp</v-icon> WHATSAPP ADMISSION
        </v-chip>
        <v-chip color="#e8a825" size="default" label variant="flat" class="font-weight-bold text-uppercase text-grey-darken-4 mb-2 d-none d-sm-flex">
          WHATSAPP ADMISSION
        </v-chip>
        <h1 class="text-h5 text-sm-h3 font-weight-black text-uppercase text-white mb-1 mb-sm-2">Apply Online via WhatsApp</h1>
        <p class="text-caption text-sm-body-1 text-grey-lighten-2 mb-0" style="max-width: 680px; line-height: 1.5;">
          Fill in your details below and send your application directly to our admissions team on WhatsApp for fast processing.
        </p>
      </v-container>
    </v-sheet>

    <!-- Quick Contact Bar -->
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

    <!-- Application Form Container -->
    <v-container class="py-6 py-md-10 px-3 px-sm-4">
      <v-row justify="center">
        <!-- Form Main Section -->
        <v-col cols="12" md="8">
          <v-card flat class="pa-4 pa-sm-8 rounded-xl elevation-2 mb-6 bg-white border-subtle">
            <h2 class="text-subtitle-1 text-sm-h5 font-weight-bold text-blue-darken-4 mb-4 d-flex align-center">
              <v-icon color="#002b66" size="default" class="mr-2">mdi-account-details</v-icon>
              Applicant Information
            </h2>
            
            <v-form ref="form" v-model="valid" @submit.prevent="submitApplicationViaWhatsApp">
              <v-row dense>
                <v-col cols="12">
                  <v-text-field
                    v-model="applicant.fullName"
                    label="Full Name *"
                    variant="outlined"
                    density="comfortable"
                    color="#002b66"
                    class="mb-2"
                    :rules="[v => !!v || 'Full name is required']"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    v-model="applicant.phone"
                    label="Phone Number (M-PESA) *"
                    placeholder="07XX XXX XXX"
                    variant="outlined"
                    density="comfortable"
                    color="#002b66"
                    class="mb-2"
                    :rules="[v => !!v || 'Phone number is required']"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    v-model="applicant.email"
                    label="Email Address (Optional)"
                    variant="outlined"
                    density="comfortable"
                    color="#002b66"
                    type="email"
                    class="mb-2"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    v-model="applicant.paymentReference"
                    label="M-PESA / Bank Reference Code"
                    placeholder="e.g. QX12345678"
                    variant="outlined"
                    density="comfortable"
                    color="#002b66"
                    class="mb-3"
                  ></v-text-field>
                </v-col>
              </v-row>

              <!-- Prominent Notice Banner -->
              <v-sheet color="amber-lighten-4" class="pa-4 rounded-lg mb-6 d-flex align-center border-subtle">
                <v-icon color="amber-darken-4" size="default" class="mr-3 flex-shrink-0">mdi-information-outline</v-icon>
                <div class="text-caption text-sm-body-2 font-weight-bold text-amber-darken-4" style="line-height: 1.4;">
                  Haven't paid the registration fee yet? No problem! Leave the code blank, submit now, and complete payment later on WhatsApp.
                </div>
              </v-sheet>

              <v-btn
                type="submit"
                color="success"
                size="large"
                block
                class="font-weight-bold elevation-2 text-uppercase py-4 text-body-2"
                style="letter-spacing: 0.5px;"
              >
                <v-icon start size="default">mdi-whatsapp</v-icon>
                Submit via WhatsApp
              </v-btn>
            </v-form>
          </v-card>
        </v-col>

        <!-- Sidebar Payment Reference Card -->
        <v-col cols="12" md="4" class="mt-4 mt-md-0">
          <v-card flat class="pa-4 pa-sm-6 rounded-xl bg-white elevation-4 position-sticky border-subtle" style="top: 20px;">
            <h3 class="text-subtitle-1 font-weight-bold text-blue-darken-4 mb-2 d-flex align-center">
              <v-icon color="#002b66" size="default" class="mr-2">mdi-credit-card-outline</v-icon>
              Payment Details
            </h3>
            <p class="text-caption text-grey-darken-2 mb-4" style="line-height: 1.4;">
              Use the details below to complete your registration fee payment (KSH. 5,000):
            </p>

            <div class="pa-3 rounded-lg mb-3 bg-grey-lighten-4 border-subtle">
              <div class="text-caption font-weight-bold text-uppercase text-green-darken-3 mb-1 d-flex align-center">
                <v-icon size="small" color="success" class="mr-1">mdi-cellphone-text</v-icon>
                M-PESA Paybill
              </div>
              <div class="text-caption text-grey-darken-4" style="line-height: 1.5;">
                <strong>Paybill:</strong> 522 533<br>
                <strong>Acc No:</strong> 8061491
              </div>
            </div>

            <div class="pa-3 rounded-lg mb-4 bg-grey-lighten-4 border-subtle">
              <div class="text-caption font-weight-bold text-uppercase text-blue-darken-4 mb-1 d-flex align-center">
                <v-icon size="small" color="#002b66" class="mr-1">mdi-bank</v-icon>
                KCB Bank
              </div>
              <div class="text-caption text-grey-darken-4" style="line-height: 1.5;">
                <strong>Acc Name:</strong> Smith Institute of Applied Skills<br>
                <strong>Acc No:</strong> 1349368644
              </div>
            </div>

            <!-- Back Navigation Button -->
            <v-btn to="/" variant="flat" color="#002b66" block size="small" class="text-white font-weight-bold mb-3 py-4 text-body-2" elevation="1">
              <v-icon start size="small">mdi-home-outline</v-icon>
              Back to Home
            </v-btn>

            <div class="text-caption text-center text-grey-darken-1 pt-2 border-t" style="font-size: 0.75rem !important;">
              Need assistance?<br>
              <a href="tel:+254723233233" class="text-blue-darken-4 font-weight-bold text-decoration-none d-inline-flex align-center justify-center mt-1">
                <v-icon size="small" color="#002b66" class="mr-1">mdi-phone</v-icon> +254 723 233 233
              </a>
            </div>
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
  { title: 'About Us', to: '/about', icon: 'mdi-information-outline' }
]

const valid = ref(false)

const applicant = reactive({
  fullName: '',
  phone: '',
  email: '',
  paymentReference: ''
})

const submitApplicationViaWhatsApp = () => {
  if (!applicant.fullName || !applicant.phone) {
    alert('Please fill in your Full Name and Phone Number.')
    return
  }

  const phoneNumber = '254723233233'
  const message = `Hello Smith Institute, I would like to submit my application for admission.

*Applicant Details:*
• Full Name: ${applicant.fullName}
• Phone: ${applicant.phone}
• Email: ${applicant.email || 'N/A'}
• M-PESA Code: ${applicant.paymentReference || 'Pending / Not yet paid'}`

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')
}
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
</style>