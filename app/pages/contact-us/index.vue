<template>
    <div>
        <!-- rts about-breadcrumb-area-start -->
        <div class="rts-about-breadcrumb-area">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="rts-about-breadcrumb-content">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><i class="fa fa-chevron-right"></i></li>
                                <li class="active"><a href="/contact-us">Contact Us</a></li>
                            </ul>
                            <h1 class="title rts-text-anime-style-1">
                                Your vision, our expertise!
                            </h1>
                        </div>
                    </div>
                    <div class="col-lg-6 pl--50 pl_md--10 pl_sm--10">
                        <div class="rts-about-breadcrumb-image">
                            <img src="/images/about/04.webp" alt="about" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- rts about-breadcrumb-area-end -->
        <!-- rts service-details-breadcrumb-area-start -->
        <div class="rts-service-details-breadcrumb-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="breadcrumb-area">
                            <h1 class="title rts-text-anime-style-1">Get in Touch</h1>
                            <p class="disc" style="max-width: 384px; margin: auto; margin-top: 25px">
                                If you have any questions or require assistance, please complete
                                the form on this page.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- rts service-details-breadcrumb-area-end -->

        <!-- rts contact area start -->
        <div class="rts-contact-area rts-section-gapBottom">
            <div class="container">
                <div class="row g-5">
                    <div class="col-lg-4">
                        <div class="contact-form-content-left-wrapper">
                            <div class="signle-contact-card">
                                <div class="top-area">
                                    <div class="icon">
                                        <img src="/images/contact/icon/01.svg" alt="contact" />
                                    </div>
                                    <h4 class="title">Our Location</h4>
                                </div>
                                <p class="disc">
                                    123 Main Street, Apt 4B Springfield, IL 62704, UK
                                </p>
                            </div>
                            <div class="signle-contact-card">
                                <div class="top-area">
                                    <div class="icon">
                                        <img src="/images/contact/icon/02.svg" alt="contact" />
                                    </div>
                                    <h4 class="title">Email Us</h4>
                                </div>
                                <p class="disc">Our support team is here to assist you</p>
                                <a href="#">support@Digix.com</a>
                            </div>
                            <div class="signle-contact-card">
                                <div class="top-area">
                                    <div class="icon">
                                        <img src="/images/contact/icon/03.svg" alt="contact" />
                                    </div>
                                    <h4 class="title">Call Us</h4>
                                </div>
                                <p class="disc">Our customer support team is available</p>
                                <a href="#">+1 (111) 125- 42174</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <form method="post" action="mailer.php" id="contact-form"
                            class="contact-form-main-wrapper-contact form__content">
                            <div class="single-input-wrapper">
                                <div class="single-input">
                                    <label for="name">First Name</label>
                                    <input name="name" id="name" type="text" placeholder="Your Name" required />
                                </div>
                                <div class="single-input">
                                    <label for="lname">Last Name</label>
                                    <input id="lname" type="text" placeholder="Last Name" />
                                </div>
                            </div>
                            <div class="single-input-wrapper">
                                <div class="single-input">
                                    <label for="email">Email</label>
                                    <input id="email" type="email" name="email" placeholder="example@gmail.com"
                                        required />
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
                                <textarea name="message" id="message" placeholder="Your message..." required></textarea>
                            </div>
                            <div class="single-input with-checkbox">
                                <input type="checkbox" name="checkbox" id="checkbox" />
                                <label for="checkbox">You agree to our friendly <a href="#">privacy policy</a></label>
                            </div>
                            <div id="form-messages"></div>
                            <button class="rts-btn btn-primary" type="submit">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- rts contact area end -->



        <!-- rts call to action area start -->
        <div class="rts-call-to-action-area rts-section-gapBottom">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="call-to-action-wrapper-three">
                            <h3 class="title rts-text-anime-style-1">
                                No long-term contracts. No catches. Simple.
                            </h3>
                            <p class="disc">
                                Start your 30-day free trial. Cancel anytime. View demo Start
                                free trial
                            </p>
                            <a href="#" class="rts-btn btn-primary">Started for Trial</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>