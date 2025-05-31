<script setup lang="ts">
import Divider from '../Divider.vue'
import SubContact from '../SubContact.vue';
</script>

<template>

    <div class="container mt-4 section-margin-btm">
        <div class="row">
            <div class="col-12 col-md-8 mt-md-0 mt-lg-4">
                <Divider header="" subHeader="Warehouse Storage You Can Count On" />
                <p class="fw-semibold mt-3">We offer secure and flexible warehouse storage solutions to keep your goods
                    safe and organized. With easy access, professional handling, and reliable service, we ensure your
                    storage needs are met with care and efficiency.</p>
                <SubContact />
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div id="BSHFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#BSHFade" data-bs-slide-to="0" class="active"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#BSHFade" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="/images/Warehouse/s1.jpg" class="d-block w-100 rounded-3">
                        </div>
                        <div class="carousel-item">
                            <img src="/images/Warehouse/s2.jpg" class="d-block w-100 rounded-3">
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
