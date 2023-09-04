<template>
   <footer class="pt-5" id="footer">
        <div class="container">
            <div class="row text-center justify-content-between">
                <div class="text-center text-xl-start col-xl-3 py-3">
                <a href="/" class="me-5 pe-xxl-5">
                    <img src="assets/images/anrufzentrale.png" alt="" width="205"></a>
                    <div class="text-center text-lg-start py-3 "><p>Copyright ©2022 All rights reserved</p></div>
                </div>
                <div class="col-6 col-md-4 col-xl-3 py-3">
                    <h5>Seitenverzeichnis</h5>
                    <ul class="list-unstyled">
                        <li><a href="#startseite">Startseite</a></li>
                        <li><a href="#uber-uns">Über Uns</a></li>
                        <li><a href="#preise">Preise</a></li>
                        <li><a href="#ablauf">Ablauf</a></li>
                        <li><a href="#kontakt">Kontakt</a></li>
                    </ul>
                </div>
                <div class="col-6 col-md-4 col-xl-3 py-3">
                    <h5>Rechtliches</h5>
                    <ul class="list-unstyled">
                        <li><a href="#" data-bs-toggle="modal" data-bs-target="#modal-agb">AGB</a></li>
                        <li><a href="#" data-bs-toggle="modal" data-bs-target="#modal-daten">Datenschutzerklärung</a></li>
                        <li><a href="#" data-bs-toggle="modal" data-bs-target="#modal-impressum">Impressum</a></li>
                        <li><a href="#" data-bs-toggle="modal" data-bs-target="#modal-leistungen">Leistungen</a></li>
                    </ul>
                </div>
                <div class="col-md-4 col-xl-3 py-3">
                    <h5>Kontakt</h5>
                    <ul class="list-unstyled">
                        <li><a href="mailto:info@anrufzentrale.de"><i class="bi bi-envelope-fill me-2"></i>info@anrufzentrale.de</a></li>
                    </ul>
                </div>
            </div>
            <!-- ### END Mobile Footer ### -->
            <div class="d-flex flex-wrap justify-content-between align-items-center py-3 fs-08 company-border">
                <p class="col-12 col-md-4 mb-0 text-muted text-center text-md-start">© 2022 Company, Inc</p>
                <a href="https://anrufzentrale.de/" class="col-md-4 justify-content-end text-muted text-end d-none d-md-inline">
                    Website Design by Anrufzentrale
                </a>
            </div>
        </div>
    </footer>
</template>
<script>
/*eslint-disable*/
export default {
  name: 'Footer'
}
</script>
