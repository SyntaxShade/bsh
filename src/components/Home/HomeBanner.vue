<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

    <div class="container-fluid mb-5">
        <div class="row justify-content-center">
            <div class="align-self-center col-12 col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12">
                <div class="card mx-xl-1 mx-lg-0 m-sm-0" style="border:none;">
                    <div class="card-body">
                        <h1 class="card-title lh-1 banner-first-font">Lifting Standard,</h1>
                        <h1 class="card-title lh-1 banner-first-font">Delivering Excellent</h1>
                        <p class="card-text fw-semibold mt-3">We provide reliable lorry crane, manbucket, and project management solutions with safety, precision, and professional excellence.
                            Our experienced team is committed to delivering efficient, high-quality service across industries, ensuring every project is handled with care and reliability.</p>
                        <RouterLink to="/contactUs" class="btn btn-danger fw-semibold mt-2">Contact Us Now!</RouterLink>
                    </div>
                </div>
            </div>

            <div class="col-12 col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 m-0 p-0">
                <div id="BSHFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="/images/Banner/banner_1.jpg" class="d-block w-100 rounded-start-2">
                        </div>
                        <div class="carousel-item">
                            <img src="/images/Banner/banner_3.jpg" class="d-block w-100 rounded-start-2">
                        </div>
                        <div class="carousel-item">
                            <img src="/images/Banner/banner_2.jpg" class="d-block w-100 rounded-start-2">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#BSHFade" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#BSHFade" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    </div>

</template>
