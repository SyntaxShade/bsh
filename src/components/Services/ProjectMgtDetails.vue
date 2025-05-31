<script setup lang="ts">
import Divider from '../Divider.vue'
import SubContact from '../SubContact.vue';
</script>

<template>

    <div class="container mt-4 mb-4">
        <div class="row">
            <div class="col-12 col-md-6 mt-md-0 mt-lg-4">
                <Divider header="Expert Planning, Coordination, and Execution"
                    subHeader="Project Management Solutions" />
                <p class="fw-semibold mt-3">We offer full project management support to ensure smooth, safe, and
                    efficient lifting operations. Our services include:</p>
                <ul>
                    <li class="fw-semibold">Experienced Lifting Team (Signalmen, RiggerMen, Lifting Supervisors)</li>
                    <li class="fw-semibold">Preparation of Lifting Plans for all project sizes</li>
                    <li class="fw-semibold">Development of Complex Lifting Plans for specialized or challenging lifts</li>
                    <li class="fw-semibold">Conducting detailed Site Surveys to assess site conditions and requirements</li>
                    <li class="fw-semibold">On-site coordination with Traffic Marshalls to ensure safe movement and site safety</li>
                </ul>
            </div>
            <div class="col-12 col-xl-6 col-md-6">
                <img src="/images/AboutUs/aboutUs.jpg" class="img-fluid rounded-3">
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-6">
                <img src="/images/ProjectMgmt/s1.jpg" class="img-fluid rounded-3">
            </div>
            <div class="col-6">
                <img src="/images/ProjectMgmt/s2.jpg" class="img-fluid rounded-3">
            </div>

        </div>
        <div class="row mt-4">
            <SubContact />
        </div>
    </div>

</template>
