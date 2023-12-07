<template>
  <div id="carouselExampleControls" class="carousel" ref="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="card">
          <div class="img-wrapper">
            <img
              src="https://picsum.photos/1024/480/?image=11"
              class="d-block w-100"
              alt="11"
            />
          </div>
          <div class="card-body">
            <h5 class="card-title">Card title 1</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="card">
          <div class="img-wrapper">
            <img
              src="https://picsum.photos/1024/480/?image=12"
              class="d-block w-100"
              alt="12"
            />
          </div>
          <div class="card-body">
            <h5 class="card-title">Card title 2</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="card">
          <div class="img-wrapper">
            <img
              src="https://picsum.photos/1024/480/?image=13"
              class="d-block w-100"
              alt="13"
            />
          </div>
          <div class="card-body">
            <h5 class="card-title">Card title 3</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="card">
          <div class="img-wrapper">
            <img
              src="https://picsum.photos/1024/480/?image=14"
              class="d-block w-100"
              alt="14"
            />
          </div>
          <div class="card-body">
            <h5 class="card-title">Card title 4</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="card">
          <div class="img-wrapper">
            <img
              src="https://picsum.photos/1024/480/?image=15"
              class="d-block w-100"
              alt="15"
            />
          </div>
          <div class="card-body">
            <h5 class="card-title">Card title 5</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="card">
          <div class="img-wrapper">
            <img
              src="https://picsum.photos/1024/480/?image=16"
              class="d-block w-100"
              alt="16"
            />
          </div>
          <div class="card-body">
            <h5 class="card-title">Card title 6</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="card">
          <div class="img-wrapper">
            <img
              src="https://picsum.photos/1024/480/?image=17"
              class="d-block w-100"
              alt="17"
            />
          </div>
          <div class="card-body">
            <h5 class="card-title">Card title 7</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="card">
          <div class="img-wrapper">
            <img
              src="https://picsum.photos/1024/480/?image=18"
              class="d-block w-100"
              alt="18"
            />
          </div>
          <div class="card-body">
            <h5 class="card-title">Card title 8</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="card">
          <div class="img-wrapper">
            <img
              src="https://picsum.photos/1024/480/?image=19"
              class="d-block w-100"
              alt="19"
            />
          </div>
          <div class="card-body">
            <h5 class="card-title">Card title 9</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "MutiCardsCarousel",
  data() {
    return {
      scrollPosition: 0,
      cardWidth: 0,
      carouselWidth: 0,
    };
  },
  mounted() {
    // Use $nextTick to ensure the DOM has been fully rendered
    this.$nextTick(() => {
      this.initializeCarousel();
      // Add event listeners for window resize and button clicks
      window.addEventListener("resize", this.initializeCarousel);
      this.$refs.carousel
        .querySelector(".carousel-control-next")
        .addEventListener("click", this.handleNextClick);
      this.$refs.carousel
        .querySelector(".carousel-control-prev")
        .addEventListener("click", this.handlePrevClick);
    });
  },
  methods: {
    initializeCarousel() {
      // Logic for initializing the carousel
      const carouselInner =
        this.$refs.carousel.querySelector(".carousel-inner");
      this.carouselWidth = carouselInner.scrollWidth;
      this.cardWidth =
        this.$refs.carousel.querySelector(".carousel-item").offsetWidth;

      console.log(this.carouselWidth);
      console.log(this.cardWidth);
    },
    handleNextClick() {
      // Your logic for handling "Next" button click
      console.log("next: " + this.carouselWidth);
      console.log("next: " + this.cardWidth);
      if (this.scrollPosition < this.carouselWidth - this.cardWidth * 3) {
        this.scrollPosition += this.cardWidth;
      }
      //   else {
      //     // Optional: Scroll back to the beginning if at the end (preventing wrapping)
      //     this.scrollPosition = 0;
      //   }

      this.$refs.carousel.querySelector(".carousel-inner").scroll({
        left: this.scrollPosition,
        behavior: "smooth",
      });
    },
    handlePrevClick() {
      // Logic for handling "Prev" button click
      if (this.scrollPosition > 0) {
        this.scrollPosition -= this.cardWidth;
      }
      //   else {
      //     // Optional: Scroll to the end if at the beginning (preventing wrapping)
      //     this.scrollPosition = this.carouselWidth - this.cardWidth;
      //   }

      this.$refs.carousel.querySelector(".carousel-inner").scroll({
        left: this.scrollPosition,
        behavior: "smooth",
      });
    },
  },
  beforeDestroy() {
    // Remove event listeners when the component is about to be destroyed
    window.removeEventListener("resize", this.initializeCarousel);
    this.$refs.carousel
      .querySelector(".carousel-control-next")
      .removeEventListener("click", this.handleNextClick);
    this.$refs.carousel
      .querySelector(".carousel-control-prev")
      .removeEventListener("click", this.handlePrevClick);
  },
};
</script>

<style scoped>
.carousel-inner {
  padding: 1em;
}
.card {
  margin: 0 0.5em;
  box-shadow: 2px 6px 8px 0 rgba(22, 22, 26, 0.18);
  border: none;
}
.carousel-control-prev,
.carousel-control-next {
  background-color: #e1e1e1;
  width: 6vh;
  height: 6vh;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
}
@media (min-width: 768px) {
  .carousel-item {
    margin-right: 0;
    flex: 0 0 33.333333%;
    display: block;
  }
  .carousel-inner {
    display: flex;
  }
}
.card .img-wrapper {
  max-width: 100%;
  height: 13em;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card img {
  max-height: 100%;
}
@media (max-width: 767px) {
  .card .img-wrapper {
    height: 17em;
  }
}
</style>