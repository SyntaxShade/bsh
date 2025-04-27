<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue';
</script>

<template>

  <div class="container">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <RouterLink class="navbar-brand" to="/">
          <img src="/src/assets/bsh_logo.png" width="275" height="85">
        </RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-1 mb-lg-0 cm-nav-font">
            <li class="nav-item">
              <RouterLink class="nav-link active" aria-current="page" to="/">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/aboutUs">About Us</RouterLink>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Services
              </a>
              <ul class="dropdown-menu dropdown-menu-end cm-nav-font">
                <li><RouterLink class="dropdown-item" to="/crane">Lorry Crane</RouterLink></li>
                <hr class="dropdown-divider">
                <li><RouterLink class="dropdown-item" to="/warehouse">Warehouse Storage</RouterLink></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><RouterLink class="dropdown-item" to="/projectManagement">Project Management</RouterLink></li>
              </ul>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/contactUs">Contact Us</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>


  <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->

  <RouterView />
  <Footer />
</template>
