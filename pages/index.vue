<template>
  <div class="home">
    <header>
      <the-slider :blog_image="blog_image" />
    </header>

    <section class="home-stories">
      <div class="container">
        <div class="stories">
          <div
            class="story"
            v-for="(blog, index) in blogs"
            :key="index"
            @click="opneBlogModal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-device-tv"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#6f32be"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="3" y="7" width="18" height="13" rx="2" />
              <polyline points="16 3 12 7 8 3" />
            </svg>
            <img v-if="blog.image" :src="blog.image" alt="story" />
          </div>
        </div>
      </div>
    </section>
    <section class="home-stories" v-if="storyClicked">
      <div class=" text-center" >
        <div class="data-wrapper">
          <hooper :progress="true" :autoPlay="true" :playSpeed="2000">
            <slide v-for="(blog, index) in blogs" :key="index">
              <img
                v-if="blog.image"
                :src="blog.image"
                alt="story"
                class="ing-fluid"
              />
              <div class="" v-if="!blog.image">
                <div class="video" v-if="blog.video">
                  <video :src="blog.video" controls loop></video>
                </div>
              </div>
            </slide>

            <hooper-progress slot="hooper-addons"></hooper-progress>
            <hooper-navigation slot="hooper-addons"></hooper-navigation>
          </hooper>
        </div>
        <div class="dismiss" @click="dismissBlogs">
          <span>X</span>
        </div>
      </div>
    </section>

    <section class="new-arrival new_products">
      <div class="container">
        <the-header-section
          :title="$t('new_arrivals')"
          @slidePrev="slidePrev"
          @slideNext="slideNext"
        />
        <hooper
          group="new_arrivals"
          :settings="sliderSettings"
          ref="carousel"
          :rtl="availableLocales"
        >
          <slide v-for="(product, index) in new_products" :key="index">
            <the-card :product="product" />
          </slide>
        </hooper>
      </div>
    </section>

    <section class="stores-sec">
      <div class="container">
        <the-header-section
          :title="$t('stores')"
          @slidePrev="slidePrev"
          @slideNext="slideNext"
        />
        <hooper
          group="home_stores"
          :settings="sliderSettings"
          ref="carousel"
          :rtl="availableLocales"
        >
          <slide v-for="(store, index) in stores" :key="index">
            <the-story-card :store="store" />
          </slide>
        </hooper>
      </div>
    </section>

    <section class="top-rated">
      <div class="container">
        <the-header-section
          :title="$t('top_rated')"
          @slidePrev="slidePrev"
          @slideNext="slideNext"
        />
        <hooper
          group="top_rated"
          :settings="sliderSettings"
          ref="carousel"
          :rtl="availableLocales"
        >
          <slide v-for="(product, index) in top_rated_products" :key="index">
            <the-card :product="product" />
          </slide>
        </hooper>
      </div>
    </section>
  </div>
</template>

<script>
import TheCard from "~/components/shared/TheCard.vue";
import TheTopRatedCard from "~/components/shared/TheTopRatedCard.vue";
import TheStoryCard from "~/components/shared/TheStoryCard.vue";
import TheHeaderSection from "~/components/shared/TheHeaderSection.vue";
import TheSlider from "~/components/home/TheSlider.vue";

import "hooper/dist/hooper.css";
// import { mapGetters } from "vuex";

// import BlogData from "~/components/shared/BlogData.vue";
import Stories from "~/components/Stories.vue";

import {
  Hooper,
  Slide,
  Progress as HooperProgress,
  Navigation as HooperNavigation,
} from "hooper";

export default {
  data() {
    return {
      sliderSettings: {
        itemsToShow: 4,
        wheelControl: true,
        centerMode: true,
        infiniteScroll: true,
        autoPlay: true,
        playSpeed: 3000,
        transition: 750,
        
        breakpoints: {
          300: {
            itemsToShow: 1,
          },
          1000: {
            itemsToShow: 4,
          },
        },
      },
      homeData: [],
      blog_image: null,
      categories: [],
      advertising: [],
      top_rated_products: [],
      new_products: [],
      influncers: [],
      stores: [],
      blogs: [],
      storyClicked: false,
      items: [
        {
          username: "Jessica Valentine",
          picture: "https://randomuser.me/api/portraits/men/61.jpg",
          time: "12h",
          images: [
            {
              url:
                "https://randomwordgenerator.com/img/picture-generator/57e7d4414d51a814f1dc8460962e33791c3ad6e04e50744172287cd09e49cd_640.jpg",
              viewed: true,
            },
            {
              url:
                "https://randomwordgenerator.com/img/picture-generator/55e4d5474350b10ff3d8992cc12c30771037dbf852547849712a73d5954d_640.jpg",
              viewed: true,
            },
            {
              url:
                "https://randomwordgenerator.com/img/picture-generator/54e2d3414950a914f1dc8460962e33791c3ad6e04e5074417d2e72d29e4ecd_640.jpg",
              viewed: false,
            },
            {
              url:
                "https://cdn.videvo.net/videvo_files/video/free/2014-12/large_watermarked/Metal_Wind_Chimes_at_Sunset_preview.mp4",
              viewed: false,
              type: "video",
            },
          ],
        },
      ],
    };
  },
  components: {
    Hooper,
    Slide,
    TheCard,
    TheTopRatedCard,
    TheStoryCard,
    TheHeaderSection,
    TheSlider,
    Stories,
    HooperProgress,
    HooperNavigation,
  },
  computed: {
    availableLocales() {
      let local = this.$i18n.locales.filter(
        (i) => i.code !== this.$i18n.locale
      );
      if (local[0].code == "en") {
        return true;
      } else {
        return false;
      }
    },
    loggedInUser() {
      return this.$store.state.auth;
    },
  },
  methods: {
    slidePrev() {
      this.$refs.carousel.slidePrev();
    },
    slideNext() {
      this.$refs.carousel.slideNext();
    },
    getHomePageData() {
      this.$axios
        .$get("home")
        .then((res) => {
          // console.log(res.body);
          this.homeData = res.body;
          (this.blog_image = res.body.blog_image),
            (this.categories = res.body.categories),
            (this.advertising = res.body.advertising),
            (this.top_rated_products = res.body.top_rated_products),
            (this.new_products = res.body.new_products),
            (this.influncers = res.body.influncers);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    cartProducts() {
      this.$store.dispatch("cart/getCartProducts");
    },
    getStores() {
      this.$axios
        .$get("stores/getAll")
        .then((res) => {
          // console.log("getStores", res);
          this.stores = res.body;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getBlogs() {
      this.$axios
        .$get(`settings/getBlogs`)
        .then((res) => {
          console.log("getBlogs", res.body);
          this.blogs = res.body;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    activeBlogs() {
      this.storyClicked = true;
    },
    dismissBlogs() {
      this.storyClicked = false;
    },
    opneBlogModal() {
      // console.log(blog);
      // setTimeout(() => {
      //   this.$modal.show(
      //     BlogData,
      //     { blog: blog },
      //     { width: "970", height: "auto", adaptive: true }
      //   );
      // }, 500);
      this.storyClicked = true;
    },
  },
  created() {
    this.getHomePageData();
    // this.cartProducts();
    this.getStores();
    this.getBlogs();
  },
  // middleware:['auth']
};
</script>

<style lang="scss" scoped>
.stories-holder {
  img {
    cursor: pointer;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 2px solid blue;
  }
}
.data-wrapper {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 9;
  padding: 5%;
  overflow: hidden;
  img {
    width: 100%;
    height: 600px;
    -o-object-fit: contain;
    object-fit: contain;
  }
}
.dismiss {
  position: fixed;
  top: 50px;
  right: 50px;
  color: #fff;
  z-index: 9;
  cursor: pointer;
}
</style>
