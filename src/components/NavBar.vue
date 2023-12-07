<template>
  <nav
    class="navbar fixed-top navbar-expand-md navbar-dark bg-dark bg-opacity-75"
  >
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">
        <img
          src="../assets/logo.png"
          alt="Logo"
          width="30"
          height="24"
          class="d-inline-block align-text-top"
        />
        Bootstrap
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li v-for="(item, index) in navList" :key="index" class="nav-item">
            <router-link
              :to="item.url"
              class="nav-link"
              :class="{ active: activePageIndex == index }"
              aria-current="page"
              @click.prevent="activePageIndex = index"
            >
              {{ item.name }}
            </router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      activePageIndex: 0,
      navList: [
        {
          name: "首页",
          url: "/",
        },
        {
          name: "关于我们",
          url: "/about",
        },
      ],
    };
  },
  methods: {},
};
</script>
