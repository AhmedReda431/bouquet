<template>
  <div
    class="story-card"
    :style="{
      'background-image': `url(${store.logo})`,
    }"
  >
    <div class="overlay">
      <div class="story-content">
        <div class="content">
          <p class="story-title">{{ store.name }}</p>
          <nuxt-link
            :to="localePath({ name: 'store-id', params: { id: store.id } })"
            class="story-btn"
            >shop now</nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["store"],
};
</script>

<style lang="scss" scoped></style>
