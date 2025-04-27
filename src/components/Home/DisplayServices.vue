<script setup lang="ts">
import Divider from '../Divider.vue'
</script>

<template>

    <div class="container-fluid my-4">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6 mt-md-0 mt-lg-4">
                    <Divider header="Services" subHeader="Our Expertise" />
                    <p class="fw-semibold mt-4">We offer a range of professional lorry crane services tailored to meet your
                        specific needs.
                        From heavy lifting to transportation, our skilled team ensures your project is completed with
                        precision and efficiency.</p>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-xl-4 col-lg-4 col-md-6 mb-2">
                    <div class="card text-center h-100">
                        <img src="/images/Services/lorry.jpg" class="card-img-top cm-card-img">
                        <div class="card-body">
                            <h5 class="card-title fw-bolder">Lorry Crane</h5>
                            <p class="card-text fw-semibold">Efficient and reliable lorry crane services for lifting and transporting heavy loads safely.</p>
                        </div>
                        <div class="d-flex justify-content-center mb-1">
                            <div class="p-2"><RouterLink to="/crane" class="btn btn-primary fw-semibold">Read More</RouterLink></div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 mb-2">
                    <div class="card text-center h-100">
                        <img src="/images/Services/warehouse.jpg" class="card-img-top cm-card-img">
                        <div class="card-body">
                            <h5 class="card-title fw-bolder">Warehouse Storage</h5>
                            <p class="card-text fw-semibold">Secure and flexible warehouse storage solutions for all your goods, with easy access and management.</p>
                        </div>
                        <div class="d-flex justify-content-center mb-1">
                            <div class="p-2"><RouterLink to="/warehouse" class="btn btn-primary fw-semibold">Read More</RouterLink></div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 mb-2">
                    <div class="card text-center h-100">
                        <img src="/images/Services/pm.jpg" class="card-img-top cm-card-img">
                        <div class="card-body">
                            <h5 class="card-title fw-bolder">Project Management</h5>
                            <p class="card-text fw-semibold">Expert project management to ensure your lifting and transportation projects run smoothly and on time.</p>
                        </div>
                        <div class="d-flex justify-content-center mb-1">
                            <div class="p-2"><RouterLink to="/projectManagement" class="btn btn-primary fw-semibold">Read More</RouterLink></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
