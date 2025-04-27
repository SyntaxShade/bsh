<script setup lang="ts">
import Divider from '../Divider.vue'
</script>

<template>
    <div class="container mt-4">
        <div class="row">
            <div class="col-12 col-xl-6 col-md-6 mb-2">
                <img src="/images/ContactUs/contactus.jpg" class="img-fluid rounded-3">
            </div>
            <div class="col-12 col-md-6 mt-md-0 mt-lg-4">
                <Divider header="" subHeader="Our Operations" />
                <p class="fw-semibold">Whether you're organizing a major move or need dependable lifting solutions,
                    we're here to support you. You can find our contact details below — feel free to reach out
                    anytime.</p>
                <div class="d-flex flex-column">
                    <div class="p-1">
                        <a class="icon-link fw-semibold" href="#" rel="noopener noreferrer">
                            <img src="/icon/ContactUs/clock.svg" class="cm-icon-operation">
                            Office: Mon - Fri, 8AM - 5:30PM
                        </a>
                    </div>
                    <div class="p-1">
                        <a class="icon-link fw-semibold" href="#" rel="noopener noreferrer">
                            <img src="/icon/ContactUs/truck.svg" class="cm-icon-operation">
                            Operation: Mon - Sun, 24/7
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
