<script setup lang="ts">
import HomeBanner from '../components/Home/HomeBanner.vue'
import DisplayServices from '../components/Home/DisplayServices.vue'
import AboutUs from '../components/Home/AboutUs.vue'
import ContactUs from '../components/Home/ContactUs.vue'
import WhyChooseUs from '../components/Home/WhyChooseUs.vue'
</script>

<template>
    <HomeBanner />
    <div class="section-margin">
        <AboutUs />
    </div>
    
    <DisplayServices /> 
    <WhyChooseUs />
    <ContactUs />
</template>
