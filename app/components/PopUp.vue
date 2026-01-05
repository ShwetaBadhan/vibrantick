<template>
  <!-- Modal -->
  <!-- Job Popup Wrapper -->
  <div class="ii-popup-backdrop" id="iiJobPopup">
    <div class="ii-popup-box">
      <!-- Left Content -->
      <div class="ii-popup-left">
        <h2>Welcome to <br />Vibrantick Infotech Solutions</h2>
        <p>
          Connect With us to accelerate your project with our custom label
          solutions and on-demand developers. Your Vision Our Expertise !! Our
          Resource is prepared to adapt to your requirements to smoothly
          transform your idea to reality
        </p>

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
        <button class="ii-popup-close" onclick="closeIIPopup()">×</button>
        <form class="ii-job-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="text" placeholder="subject" required />

          <textarea name="message" placeholder="Enter your message"></textarea>

          <div
            class="g-recaptcha mb-2"
            data-sitekey="6LeImyIrAAAAAARr0IqEiNQy2rQr6HEnLwllmAHR"
            data-callback="enableSubmit"
            data-expired-callback="disableSubmit"
          ></div>

          <button type="submit" class="ii-submit-btn">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>
