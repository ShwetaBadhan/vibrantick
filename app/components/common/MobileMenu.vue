<template>
  <!-- mobile menu -->
  <div id="side-bar" class="side-bar header-two">
    <div class="rts-sidebar-menu-desktop">
      <div class="logo-area">
        <a class="logo" href="/"
          ><img src="/images/logo/Logo-white.png" alt=""
        /></a>
        <button class="close-icon-menu" aria-label="footer_Button">
          <i class="far fa-times"></i>
        </button>
      </div>
    </div>
    <div class="mobile-menu-main d-block d-xl-none">
      <nav class="nav-main mainmenu-nav mt--30">
        <ul class="mainmenu metismenu" id="mobile-menu-active">
          <li>
            <a href="/" class="main">Home</a>
          </li>
          <li class="has-droupdown">
            <a href="#" class="main">Who We Are</a>
            <ul class="submenu mm-collapse">
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/our-work">Our Work</a></li>
            </ul>
          </li>

          <li class="has-droupdown">
            <a href="#" class="main">Industry</a>
            <ul class="submenu mm-collapse">
              <li><a href="/industry">Industry Detail</a></li>
            </ul>
          </li>
          <li class="has-droupdown">
            <a href="#" class="main">Services</a>
            <ul class="submenu mm-collapse">
              <li><a href="/service-details">Service Details</a></li>
            </ul>
          </li>
          <li class="has-droupdown">
            <a href="#" class="main">Resources</a>
            <ul class="submenu mm-collapse">
              <li><a href="/contact-us">Contact Us</a></li>
              <li><a href="/our-blogs">Our Blogs</a></li>
            </ul>
          </li>
          <li class="has-droupdown">
            <a href="#" class="main">Engage Expert</a>
            <ul class="submenu mm-collapse">
              <li><a href="/engage-expert-details">PHP Expert</a></li>
            </ul>
          </li>
          <li class="has-droupdown">
            <a href="#" class="main">Business Model</a>
            <ul class="submenu mm-collapse">
              <li><a href="/business-model">Zomato</a></li>
            </ul>
          </li>
        </ul>
      </nav>

      <div class="rts-social-border-area right-sidebar mt--50">
        <ul>
          <li>
            <a href="#" aria-label="Facebook"
              ><i
                class="fab fa-facebook-f"
                style="
                  font-family: 'Font Awesome 6 Brands', Bangla867, sans-serif;
                "
              ></i
            ></a>
          </li>
          <li>
            <a href="#" aria-label="twitter"
              ><i
                class="fab fa-twitter"
                style="
                  font-family: 'Font Awesome 6 Brands', Bangla867, sans-serif;
                "
              ></i
            ></a>
          </li>
          <li>
            <a href="#" aria-label="instagram"
              ><i
                class="fab fa-instagram"
                style="
                  font-family: 'Font Awesome 6 Brands', Bangla867, sans-serif;
                "
              ></i
            ></a>
          </li>
          <li>
            <a href="#" aria-label="linkdin"
              ><i
                class="fa-brands fa-linkedin-in"
                style="
                  font-family: 'Font Awesome 6 Brands', Bangla867, sans-serif;
                "
              ></i
            ></a>
          </li>
        </ul>
      </div>
    </div>
    <!-- mobile menu area end -->
  </div>
</template>

