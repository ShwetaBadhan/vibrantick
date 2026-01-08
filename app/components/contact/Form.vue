<template>
  <div class="col-lg-8">
    <form
      id="contact-for"
      class="contact-form-main-wrapper-contact form__content"
      @submit.prevent="submitForm"
    >
      <div class="single-input-wrapper">
        <div class="single-input">
          <label for="name">First Name</label>
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            v-model="form.name"
            required
          />
          <!-- <p>{{ form.name }}</p> -->
        </div>
        <div class="single-input">
          <label for="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="example@gmail.com"
            v-model="form.email"
            required
          />
        </div>
      </div>

      <div class="single-input-wrapper">
        <div class="single-input">
          <label for="phone">Phone</label>
          <input
            id="phone"
            type="tel"
            placeholder="Phone"
            v-model="form.phone"
            required
            pattern="^\d{10}$"
            maxlength="10"
            oninput="this.value = this.value.replace(/[^0-9]/g, '')"
            title="Phone number should be 10 digits."
          />
        </div>
      </div>

      <div class="single-input">
        <label for="message">How can we help you?</label>
        <textarea
          id="message"
          placeholder="Your message..."
          v-model="form.message"
          required
        ></textarea>
      </div>

      <div class="single-input with-checkbox">
        <input type="checkbox" id="checkbox" v-model="form.agree" />
        <label for="checkbox">
          You agree to our friendly <a href="#">privacy policy</a>
        </label>
      </div>

      <button class="rts-btn btn-primary" type="submit" :disabled="loading">
        {{ loading ? "Sending..." : "Send Message" }}
      </button>
    </form>
  </div>
</template>

<script setup>
import swal from "sweetalert";

// regex pattern
const nameRegex = /^[a-zA-Z\s]{2,50}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phoneRegex = /^[6-9]\d{9}$/;
const messageRegex = /^[A-Za-z0-9 .,!?'"()\-\n]{5,500}$/;

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
  if(!emailRegex.test(form.email)){
    swal("Error","Please enter valid email address" , "error");
    return;
  }
  if(!messageRegex.test(form.message)){
    swal("Error","Please enter valid message" , "error");
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
