<template>
  <div>
    <div
      class="content notitication-content"
      v-if="notifications && notifications.length > 0"
    >
      <the-notification
        v-for="(notification, index) in notifications"
        :key="index"
        :notification="notification"
      />
    </div>
    <div class="content notitication-content" v-else>
      <h6>no notifications till now</h6>
    </div>
  </div>
</template>

<script>
import TheNotification from "~/components/shared/TheNotification.vue";
export default {
  layout: "userDash",
  components: { TheNotification },
  methods: {
    getNotifications() {
      this.$axios
        .$get(`users/notificationsHistory`)
        .then((res) => {
          console.log(res);
          this.notifications = res.body;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getNotifications();
  },
  data() {
    return {
      notifications: null,
    };
  },
};
</script>
<style lang="scss" scoped></style>
