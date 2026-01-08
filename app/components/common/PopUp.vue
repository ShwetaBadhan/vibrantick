<template>
  <!-- Modal -->
  <!-- Job Popup Wrapper -->
  <div class="ii-popup-backdrop" id="iiJobPopup">
    <div class="ii-popup-box">
      <!-- Left Content -->
      <div class="ii-popup-left">
        <h2>Welcome to <br />Vibrantick Infotech Solutions</h2>

        <ul class="ii-popup-points">
          <li>Get Real-Time IT Projects from Us</li>
          <li>Work on Live Client Requirements</li>
          <li>Opportunity to Build Scalable Tech Solutions</li>
          <li>Transparent Project Scope & Timelines</li>
          <li>Long-Term Collaboration Opportunities</li>
        </ul>
      </div>

      <!-- Right Form -->
      <div class="ii-popup-right">
        <!-- Close Button -->
        <button class="ii-popup-close" onclick="closeIIPopup()">&times;</button>
        <form class="ii-job-form" @submit.prevent="submitForm">
          <input
            type="text"
            placeholder="Your Name"
            v-model="form.name"
            required
          />

          <input
            type="email"
            placeholder="Email"
            v-model="form.email"
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            v-model="form.phone"
            required
            pattern="^\d{10}$"
            maxlength="10"
            oninput="this.value = this.value.replace(/[^0-9]/g, '')"
            title="Phone number should be 10 digits."
          />

          <textarea
            name="message"
            v-model="form.message"
            placeholder="Enter your message"
          ></textarea>
          
          <div class="single-input with-checkbox">
            <input type="checkbox" id="checkbox" v-model="form.agree" />
            <label for="checkbox">
              You agree to our friendly <a href="/privacy-policy">privacy policy</a>
            </label>
          </div>
          <button type="submit" class="ii-submit-btn">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped>
 #checkbox{
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
