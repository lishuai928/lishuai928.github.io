<template>
  <div
    id="carouselBanner"
    class="carousel slide carousel-fade"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselBanner"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselBanner"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <!-- <button
        type="button"
        data-bs-target="#carousel"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button> -->
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <video class="d-block w-100" autoplay loop muted>
          <source
            src="https://mdbcdn.b-cdn.net/img/video/Tropical.mp4"
            type="video/mp4"
          />
        </video>
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>
      <div class="carousel-item">
        <video class="d-block w-100" autoplay loop muted>
          <source
            src="https://mdbcdn.b-cdn.net/img/video/forest.mp4"
            type="video/mp4"
          />
        </video>
        <div class="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <!-- <div class="carousel-item">
        <img
          src="https://picsum.photos/1024/480/?image=10"
          class="d-block w-100"
          alt="Logo1"
        />
      </div> -->
      <!-- <div class="carousel-item">
        <img
          src="https://picsum.photos/1024/480/?image=12"
          class="d-block w-100"
          alt="Logo2"
        />
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {},
  data() {
    return {
      data: "",
    };
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
