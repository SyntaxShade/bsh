<script setup lang="ts">
import SubContact from '../SubContact.vue';
</script>

<template>

    <div class="container mt-3 section-margin-btm">
        <div class="row mt-4">
            <SubContact />
        </div>
        <div class="row">
            <div class="col-12">
                <div id="BSHFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#BSHFade" data-bs-slide-to="0" class="active"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#BSHFade" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#BSHFade" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#BSHFade" data-bs-slide-to="3"
                            aria-label="Slide 4"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="/images/AboutUs/s1.jpg" class="d-block w-100 rounded-3">
                        </div>
                        <div class="carousel-item">
                            <img src="/images/AboutUs/s2.jpg" class="d-block w-100 rounded-3">
                        </div>
                        <div class="carousel-item">
                            <img src="/images/AboutUs/s3.jpg" class="d-block w-100 rounded-3">
                        </div>
                        <div class="carousel-item">
                            <img src="/images/AboutUs/s4.jpg" class="d-block w-100 rounded-3">
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
