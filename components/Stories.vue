<template>
  <div>
    <div class="wrapper">
      <div
        class="stories-holder d-flex justify-content-center align-items-center"
        v-if="blogs"
      >
        <img
          v-if="blogs[0] && blogs[0].image"
          :src="blogs[0].image"
          alt="story"
          @click="activeBlogs"
        />
      </div>
      <div class=" text-center" v-if="storyClicked">
        <div class="data-wrapper">
          <hooper>
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
    </div>
  </div>
</template>

<script>
import {
  Hooper,
  Slide,
  Progress as HooperProgress,
  Navigation as HooperNavigation,
} from "hooper";
export default {
  components: { Hooper, Slide, HooperProgress, HooperNavigation },
  data: () => ({
    items: [
      "https://picsum.photos/350/200/",
      "https://picsum.photos/400/201/",
      {
        url: "https://file-examples-com.github.io/5mb.mp4",
        type: "video",
      },
    ],
    storyClicked: false,
    blogs: [],
  }),
  methods: {
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
  },
  mounted() {
    this.getBlogs();
  },
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
.dismiss{
  position: fixed;
  top: 50px;
  right: 50px;
  color: #fff;
  z-index: 9;
  cursor: pointer;
}
</style>
