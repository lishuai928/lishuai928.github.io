<template>
  <div class="banner">
    <Banner />
  </div>
  <div
    class="about-us"
    :style="{ backgroundImage: `url(${backgroundImageUrl})` }"
  >
    <div class="container-lg">
      <div class="row">
        <div class="col-md-8">
          <h1>公司简介</h1>
          <p>
            For a guide and recipes on how to configure / customize this
            project,<br />
            check out the
            <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
              >vue-cli documentation</a
            >.
          </p>
          <p>
            Xiamen Golden Egret Special Alloy Co. Ltd., established in 1989, is
            a Sino-foreign joint venture state-level high-tech enterprise and a
            key member of the state-owned listed company Xiamen Tungsten Co.,
            Ltd. The company is committed to the research and development and
            production of high-quality tungsten powder materials, cemented
            carbide, precision cutting tools and other tungsten products, as
            well as the provision of professional solutions in the industry. It
            is a well-known supplier of tungsten powder, cemented carbide and
            cutting tools.
          </p>
          <p>
            For a guide and recipes on how to configure / customize this
            project,<br />
            check out the
            <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
              >vue-cli documentation</a
            >.
          </p>
        </div>
        <div class="col-md-4">
          <img
            src="https://picsum.photos/1024/480/?image=12"
            class="w-100"
            alt="Logo2"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="test">
    <MultiCardsCarousel />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner.vue";
import MultiCardsCarousel from "@/components/MultiCardsCarousel.vue";

export default {
  name: "HomeView",
  components: {
    Banner,
    MultiCardsCarousel,
  },
  data() {
    return {
      backgroundImageUrl:
        "https://omo-oss-image1.thefastimg.com/portal-saas/new2022041314362070506/cms/image/54490809-346f-4ef3-ad8c-c0fd5d7092df.jpg",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
.about-us {
  padding-top: 100px;
  padding-bottom: 100px;
}
</style>
