<template>
  <div>
    <div v-if="$store.state.authUser">
      <div class="_1main_content">
        <div class="_layout">
          <div class="_layout_row">
            <!-- Sidebar -->
            <div class="_layout_auto _layout_sidebar_left">
              <div class="_sidebar_main">
                <leftSidebar />
              </div>
            </div>
            <!-- Sidebar -->

            <!-- Feed and Status box -->
            <div class="_layout_col">
              <!-- Status box -->
              <div class="_statusBox_layout">
                <statusBox />
              </div>
              <!-- Status box -->

              <!-- Feed -->
              <div class="_feed_main">
                <Feed />
              </div>
              <!-- Feed -->
            </div>
            <!-- Feed and Status box -->

            <!-- Right section -->
            <div class="_layout_auto _layout_chatList_right">
              <div class="_rightSec_main">
                <rightSection />
              </div>
            </div>
            <!-- Right section -->
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h1>not login</h1>
    </div>
  </div>
</template>

<script>



import leftSidebar from "./leftSidebar.vue";
import statusBox from "./statusBox.vue";
import Feed from "./feed.vue";
import rightSection from "./rightSection.vue";

export default {
  components: {
    leftSidebar,
    Feed,
    rightSection,
    statusBox
  },

  data() {
    return {};
  },

  methods: {},

  created() {}
};
</script>
