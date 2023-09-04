<template>
 <header>
        <div class="desktop-menu d-none d-xl-block bg-white p-3 mb-3 fixed-top top-0 w-100 ">
            <div class="container">
                <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" class="me-5 pe-xxl-5">
                        <img src="assets/images/anrufzentrale.png" class="logo-img" width="220" style="width:90px">
                    </a>
                    <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#startseite" class="nav-link px-2 active">Startseite</a></li>
                        <li><a href="#ablauf" class="nav-link px-2">Ablauf</a></li>
                        <li><a href="#preise" class="nav-link px-2">Preise</a></li>
                        <li><a href="#uber-uns" class="nav-link px-2">Über Uns</a></li>
                        <li><a href="#kontakt" class="nav-link px-2">Kontakt</a></li>
                    </ul>
                    <div class="me-lg-3 d-flex align-items-center">
                        <a href="tel:49 30 233 26295" class="d-block link-dark text-decoration-none">
                            <img
                            src="assets/images/customer-support.png"
                            alt="mdo"
                            width="50"
                            height="50"
                            class="rounded-circle"
                            style="object-fit: cover;">
                        </a>
                        <div class="ms-3 d-flex flex-column">
                            <a href="tel:49 30 233 26295" class="fw-bold">+49 30 233 26295</a>
                            <span class="text-white-60 fs-08">Kostenlose Beratung erhalten</span>
                        </div>
                    </div>
                    <div class="text-end ms-3">
                        <a href="#preise" class="btn btn-warning px-4 py-2 fw-500" id="navigation-jetzt">Jetzt beraten lassen</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="mobile-menu d-xl-none bg-white fixed-top">
            <div class="container">
                <div class="d-flex justify-content-between align-items-center py-2">
                    <a href="" class="bi bi-list fs-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"></a>
                    <a href="#startseite" class="text-center">
                        <img src="assets/images/anrufzentrale.png" alt="Mobile Logo" width="200" style="width:60px">
                    </a>
                    <div class="me-lg-3 d-flex align-items-center justify-content-center">
                        <a href="#kontakt" class="d-block link-dark text-decoration-none text-center">
                            <img src="assets/images/customer-support.png"
                            alt="mdo"
                            width="50"
                            height="50"
                            class="rounded-circle"
                            style="object-fit: cover;">
                        </a>
                        <div class="ms-3 d-none d-md-flex flex-column">
                            <a href="tel:+49 30 233 26295" class="fw-bold">+49 30 233 26295</a>
                            <span class="text-white-60 fs-08">Kostenlose Beratung erhalten</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ### Mobile Menu Inner ### -->
            <div
            class="offcanvas offcanvas-start mobile-menu"
            tabindex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
            aria-modal="true"
            role="dialog">
                <div class="offcanvas-header position-absolute end-0">
                    <a class="bi bi-x-circle-fill fs-3 text-end" data-bs-dismiss="offcanvas" aria-label="Close" style="cursor:pointer;"></a>
                </div>
                <div class="offcanvas-body d-flex my-auto align-items-center justify-content-center h-100">
                    <div class="h-75 w-100 text-center">
                        <a href="">
                            <img src="assets/images/anrufzentrale.png" alt="" width="200">
                        </a>
                        <ul class="h-100 my-5 list-unstyled" id="header-nav-mobile">
                            <li><a href="#startseite" class="nav-link px-2 active">Startseite</a></li>
                            <li><a href="#uber-uns" class="nav-link px-2">Über Uns</a></li>
                            <li><a href="#preise" class="nav-link px-2">Preise</a></li>
                            <li><a href="#ablauf" class="nav-link px-2">Ablauf</a></li>
                            <li><a href="#kontakt" class="nav-link px-2">Kontakt</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
/*eslint-disable*/
export default {
  name: 'Header'
}
</script>
