<template>
  <div class="rts-about-breadcrumb-area">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-8">
          <div class="rts-about-breadcrumb-content">
            <ul>
              <li><a href="/">Home</a></li>
              <li><i class="fa fa-chevron-right"></i></li>
              <li class="active"><a href="#" id="breadcrumbTitle"></a></li>
            </ul>
            <h1 class="title rts-text-anime-style-1">
              Empowering Businesses Through Technology
            </h1>
          </div>
        </div>
        <div class="col-lg-4 pl--50 pl_md--10 pl_sm--10">
          <div class="vx-contact-shell">
            <h2 class="vx-contact-title">Get in Touch</h2>
            <p class="vx-contact-subtitle">
              Fill out the form below and we'll respond within 24 hours.
            </p>

            <form class="vx-contact-form" @submit.prevent="submitForm">
              <div class="vx-input-row">
                <div class="vx-input-box">
                  <!-- <label class="vx-label">Full Name *</label> -->
                  <input
                    type="text"
                    class="vx-input"
                    placeholder="Your Name"
                    v-model="form.name"
                    required
                  />
                </div>

                <div class="vx-input-box">
                  <!-- <label class="vx-label">Email *</label> -->
                  <input
                    type="email"
                    class="vx-input"
                    placeholder="Your Email"
                    v-model="form.email"
                    required
                  />
                </div>
              </div>

              <div class="vx-input-box">
                <!-- <label class="vx-label">Phone</label> -->
                <input
                  type="text"
                  class="vx-input"
                  placeholder="98989 98989"
                  v-model="form.phone"
                  required
                  pattern="^\d{10}$"
                  maxlength="10"
                  oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                  title="Phone number should be 10 digits."
                />
              </div>
              <div class="vx-input-box">
                <!-- <label class="vx-label">Phone</label> -->
                <input
                  type="text"
                  class="vx-input"
                  placeholder="Your message" v-model="form.message"
                />
              </div>
              <div class="single-input with-checkbox">
                <input type="checkbox" id="checkbox" v-model="form.agree" />
                <label for="checkbox">
                  You agree to our friendly <a href="#">privacy policy</a>
                </label>
              </div>

              <button>
                <a href="" class="rts-btn btn-primary">Submit</a>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
#checkbox {
  display: none;
}
</style>
<script setup>
import swal from "sweetalert";

// regex pattern
const nameRegex = /^[a-zA-Z\s]{2,50}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phoneRegex = /^[6-9]\d{9}$/;
const messageRegex = /^[A-Za-z0-9 .,!?'"()\-\n]{2,500}$/;

const form = reactive({
  name: "",
  email: "",
  phone: "",
  message: "",
  agree: false,
});

const loading = ref(false);
const statusMessage = ref("");

const submitForm = async () => {
  if (!form.agree) {
    swal("Required!", "Please accept the privacy policy", "warning");
    return;
  }
  if (!nameRegex.test(form.name)) {
    swal("Error", "Please Enter Name in correct Format", "error");
    return;
  }
  if (!phoneRegex.test(form.phone)) {
    swal("Error", "Please enter correct 10 digit number", "error");
    return;
  }
  if (!emailRegex.test(form.email)) {
    swal("Error", "Please enter valid email address", "error");
    return;
  }
  if (!messageRegex.test(form.message)) {
    swal("Error", "Please enter valid message  ", "error");
    return;
  }

  loading.value = true;
  statusMessage.value = "";

  try {
    const res = await $fetch("/api/contact", {
      method: "POST",
      body: {
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
      },
    });

    if (res.success) {
      swal(
        "Submitted",
        `Thank You ${form.name} For Contacting Us! We will get back to you soon .`,
        "success"
      );
      statusMessage.value = "Message sent successfully!";
      Object.keys(form).forEach((key) => (form[key] = ""));

      form.agree = false;
    } else {
      statusMessage.value = res.message || "Something went wrong";
    }
  } catch (err) {
    console.error("CONTACT API ERROR:", error);

    return {
      success: false,
      message: error.message || "Server error",
    };
  } finally {
    loading.value = false;
  }
};
</script>
