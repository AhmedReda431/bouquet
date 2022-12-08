<template>
  <div class="content notitication-content">
    <the-notification v-for="(notification, index) in notifications" :key="index" :notification="notification" />
  </div>
</template>

<script>
import TheNotification from "~/components/shared/TheNotification.vue";
export default {
  layout: "supplierDash",
  components: { TheNotification },
  methods: {
    getNotifications() {
      this.$axios
        .get("stores/notificationsHistory")
        .then((res) => {
          console.log(res);
          this.notifications = res.data.body;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  data() {
    return {
      notifications: null,
    };
  },
  mounted() {
    this.getNotifications();
  },
};
</script>
<style lang="scss" scoped></style>
