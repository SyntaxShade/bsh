<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="container text-center mt-5">
        <div class="row align-items-start mt-5">
            <div class="col">
                <h1 class="text-danger not-found">404 - Page Not Found</h1>
                <p class="fw-semibold mt-1">We couldn't find the page you were looking for.<br />Click the button below to return to the homepage.</p>
                <RouterLink to="/" class="btn btn-success mt-2">Home</RouterLink>
            </div>
        </div>
    </div>
</template>
