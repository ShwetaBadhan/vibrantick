<template>
  <div class="col-lg-8">
    <form
      method="post"
      action="mailer.php"
      id="contact-form"
      class="contact-form-main-wrapper-contact form__content"
    >
      <div class="single-input-wrapper">
        <div class="single-input">
          <label for="name">First Name</label>
          <input
            name="name"
            id="name"
            type="text"
            placeholder="Your Name"
            required
          />
        </div>
        <div class="single-input">
          <label for="lname">Last Name</label>
          <input id="lname" type="text" placeholder="Last Name" />
        </div>
      </div>
      <div class="single-input-wrapper">
        <div class="single-input">
          <label for="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="example@gmail.com"
            required
          />
        </div>
        <div class="single-input">
          <label for="phone">Phone</label>
          <div class="input-with-country-selenct">
            <select class="form-select" aria-label="Default select example">
              <option selected>BAN</option>
              <option value="1">USA</option>
              <option value="2">UAE</option>
              <option value="3">ENG</option>
            </select>
            <input id="phone" type="tel" name="phone" placeholder="Phone" />
          </div>
        </div>
      </div>
      <div class="single-input">
        <label for="message">How can we help you?</label>
        <textarea
          name="message"
          id="message"
          placeholder="Your message..."
          required
        ></textarea>
      </div>
      <div class="single-input with-checkbox">
        <input type="checkbox" name="checkbox" id="checkbox" />
        <label for="checkbox"
          >You agree to our friendly <a href="#">privacy policy</a></label
        >
      </div>
      <div id="form-messages"></div>
      <button class="rts-btn btn-primary" type="submit">Send Message</button>
    </form>
  </div>
</template>
