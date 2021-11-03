<template>
  <div>
    <!-- Shimmer -->
    <template v-if="isHide">
      <div class="_statusBox_shimmer _mar_b20">
        <div class="_statusBox_shimmer_pic _shim_animate"></div>
        <div class="_statusBox_shimmer_details">
          <div class="_statusBox_shimmer_input _shim_animate"></div>
        </div>
      </div>
    </template>
    <!-- Shimmer -->

    <template v-if="isloaded">
      <div
        :class="
          isStatusbox
            ? '_statusBox_open _statusBox _mar_b20'
            : '_statusBox _mar_b20'
        "
      >
        <div class="_statusBox_top">
          <div class="_statusBox_top_pic">
            <img
              src="/static/img/male.jpg"
              alt=""
              title=""
              class="_statusBox_top_img"
            />
          </div>
          <div class="_statusBox_input" @click="isStatusbox = true">
            <input type="text" placeholder="Create a new post..." />
          </div>
        </div>
        <!-- <div class="_statusBox_bottom">
                    <ul class="_statusBox_bottom_ul">
                        <li @click="isStatusbox = true"><i class="fas fa-images"></i> Photo</li>
                        <li @click="isStatusbox = true"><i class="fas fa-video"></i> Video</li>
                    </ul>
                </div> -->
        <div class="_statusBox_main_all">
          <div class="_statusBox_main _padd">
            <p class="_statusBox_close" @click="isStatusbox = false">
              <Icon type="md-close" />
            </p>
            <div class="_statusBox_main_top">
              <div class="_statusBox_main_pic">
                <img
                  src="/static/img/male.jpg"
                  alt=""
                  title=""
                  class="_statusBox_main_img _1border_color"
                />
              </div>
              <div class="_statusBox_main_details">
                <p class="_statusBox_main_name">
                  <a href="" class="_3link">Kollol Chakraborty</a>
                </p>
                <div class="_statusBox_main_drop">
                  <Dropdown trigger="click" placement="bottom-start">
                    <a href="javascript:void(0)" class="_statusBox_main_text">
                      Public
                      <i class="ivu-icon ivu-icon-ios-arrow-down"></i>
                    </a>

                    <DropdownMenu slot="list">
                      <DropdownItem><p>Public</p></DropdownItem>
                      <DropdownItem><p>Only Me</p></DropdownItem>
                      <DropdownItem><p>Only Friend</p></DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
            </div>

            <div class="_statusBox_textarea">
              <textarea
                v-model="statusBox.post_text"
                type="text"
                placeholder="What's on your mind, Kollol Das"
                class="_statusBox_textarea_text"
              ></textarea>
            </div>
            <!-- <div class="_statusBox_video">
                            <Upload action="//jsonplaceholder.typicode.com/posts/">
                                <Button icon="ios-cloud-upload-outline">Photo / Video</Button>
                            </Upload>
                        </div> -->
            <div class="_statusBox_options">
              <div class="row">
                <div class="col-12 col-md-6 col-lg-6">
                  <div class="_statusBox_options_items">
                    <div class="_statusBox_options_icon">
                      <i class="fas fa-camera-retro"></i>
                    </div>

                    <p class="_statusBox_options_text">Upload Photos</p>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-6">
                  <div class="_statusBox_options_items">
                    <div class="_statusBox_options_icon">
                      <i class="fas fa-folder-open"></i>
                    </div>

                    <p class="_statusBox_options_text">Create Album</p>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-6">
                  <div class="_statusBox_options_items">
                    <div class="_statusBox_options_icon">
                      <i class="fas fa-smile"></i>
                    </div>

                    <p class="_statusBox_options_text">Feeling/Activity</p>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-6">
                  <div class="_statusBox_options_items">
                    <div class="_statusBox_options_icon">
                      <i class="fas fa-palette"></i>
                    </div>

                    <p class="_statusBox_options_text">Colored Background</p>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-6">
                  <div class="_statusBox_options_items">
                    <div class="_statusBox_options_icon">
                      <i class="fas fa-microphone-alt"></i>
                    </div>

                    <p class="_statusBox_options_text">Voice Notes</p>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-6">
                  <div class="_statusBox_options_items">
                    <div class="_statusBox_options_icon">
                      <i class="fas fa-image"></i>
                    </div>

                    <p class="_statusBox_options_text">GIF</p>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-6">
                  <div class="_statusBox_options_items">
                    <div class="_statusBox_options_icon">
                      <i class="fas fa-poll"></i>
                    </div>

                    <p class="_statusBox_options_text">Create Poll</p>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-6">
                  <div class="_statusBox_options_items">
                    <div class="_statusBox_options_icon">
                      <i class="fas fa-video"></i>
                    </div>

                    <p class="_statusBox_options_text">Upload Video</p>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-6">
                  <div class="_statusBox_options_items">
                    <div class="_statusBox_options_icon">
                      <i class="fas fa-music"></i>
                    </div>

                    <p class="_statusBox_options_text">Upload Audio</p>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-6">
                  <div class="_statusBox_options_items">
                    <div class="_statusBox_options_icon">
                      <i class="fas fa-folder-open"></i>
                    </div>

                    <p class="_statusBox_options_text">Upload File</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="_statusBox_main_bottom">
              <button
                type="button"
                class="ivu-btn ivu-btn-primary ivu-btn-long ivu-btn-large"
                @click="postShare"
              >
                <span> Share</span>
              </button>
            </div>
          </div>
          <div @click="isStatusbox = false" class="_statusBox_overlay"></div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      isStatusbox: false,
      isloaded: false,
      isHide: true,

      statusBox: {
        post_text: "",
        user_id: 0
      }
    };
  },
  computed: {
    ...mapGetters({ userInfo: "getUserInfo" })
  },

  methods: {
    async postShare() {
      
      this.statusBox.user_id = this.authUser.id;

     console.log('I am going to the intended place')

    const res =  await axios.post("http://127.0.0.1:3333/storePosts", this.statusBox)

    console.log('Printing request status')

    console.log(res.status)


      // const res = await this.callApi(
      //   "post",
      //   "http://localhost:3333/storePost",
      //   this.statusBox
      // );
      // console.log(res);

      // if (res.status == 200) {
      //   const res = await this.callApi(
      //     "get",
      //     "http://localhost:3333/showAllPosts"
      //   );
      //   if (res.status == 200) {
      //     this.$store.commit("setUserInfo", res.data);
      //   }
      // }

      this.isStatusbox = false;
      this.statusBox.post_text = "";
      this.statusBox.user_id = 0;
    }
  },

  created() {
    var self = this;
    var self2 = this;
    setTimeout(function() {
      self.$nextTick(function() {
        self.isloaded = true;
      });
      self2.$nextTick(function() {
        self2.isHide = false;
      });
    }, 1500);
  }
};
</script>
