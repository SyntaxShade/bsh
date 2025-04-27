<script setup lang="ts">
</script>

<template>

    <div class="container-fluid mt-5 cm-footer-container">
        <div class="container" style="color:white;">
            <footer class="py-5">
                <div class="row justify-content-center">
                    <div class="col-3 col-md-3 mb-3">
                        <h5>Section</h5>
                        <ul class="nav flex-column footer-section-txt">
                            <li class="nav-item mb-2">
                                <RouterLink to="/" class="nav-link p-0 text-body-secondary">Home</RouterLink>
                            </li>
                            <li class="nav-item mb-2">
                                <RouterLink to="/aboutUs" class="nav-link p-0 text-body-secondary">About Us</RouterLink>
                            </li>
                            <li class="nav-item mb-2">
                                <RouterLink to="/contactUs" class="nav-link p-0 text-body-secondary">Contact
                                    Us</RouterLink>
                            </li>
                        </ul>
                    </div>

                    <div class="col-3 mb-3">
                        <h5>Services</h5>
                        <ul class="nav flex-column footer-section-txt">
                            <li class="nav-item mb-2">
                                <RouterLink to="/crane" class="nav-link p-0 text-body-secondary">Lorry
                                    Crane</RouterLink>
                            </li>
                            <li class="nav-item mb-2">
                                <RouterLink to="/projectManagement" class="nav-link p-0 text-body-secondary">Project
                                    management</RouterLink>
                            </li>
                            <li class="nav-item mb-2">
                                <RouterLink to="/warehouse" class="nav-link p-0 text-body-secondary">Warehouse
                                    Storage</RouterLink>
                            </li>
                        </ul>
                    </div>

                    <div class="col-3 col-md-3 mb-3">
                        <h5>Social</h5>
                        <ul class="nav flex-column footer-section-txt">
                            <li class="nav-item mb-2"><a href="https://www.facebook.com/BanSoonHuat" target="_blank"
                                    rel="noopener noreferrer" class="nav-link p-0 text-body-secondary">Facebook</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top border-2">
                    <p class="fw-semibold">© 2025 Ban Soon Huat Transport Trading, All rights reserved.</p>
                    <ul class="list-unstyled d-flex">
                        <li class="ms-3">
                            <a class="link-body-emphasis" href="https://www.facebook.com/BanSoonHuat" target="_blank"
                                rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="social-icon"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    </div>

</template>
