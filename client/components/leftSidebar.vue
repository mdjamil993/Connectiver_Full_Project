<template>
    <div class="_sidebar_main_all _1scrollbar">
        <!-- Shimmer -->
        <template v-if="isHide">
            <div class="_sidebar_shimmer_all">
                <div class="_sidebar_shimmer">
                    <div class="_sidebar_shimmer_pic _2shim_animate din"></div>
                    <div class="_sidebar_shimmer_details">
                        <div class="_sidebar_shimmer_name _shim_w35 _2shim_animate"></div>
                    </div>
                </div>

                <div class="_sidebar_shimmer">
                    <div class="_sidebar_shimmer_pic _2shim_animate din"></div>
                    <div class="_sidebar_shimmer_details">
                        <div class="_sidebar_shimmer_name _shim_w50 _2shim_animate"></div>
                    </div>
                </div>

                <div class="_sidebar_shimmer_title _shim_w25 _2shim_animate"></div>

                <div class="_sidebar_shimmer">
                    <div class="_sidebar_shimmer_pic _2shim_animate din"></div>
                    <div class="_sidebar_shimmer_details">
                        <div class="_sidebar_shimmer_name _shim_w60 _2shim_animate"></div>
                    </div>
                </div>

                <div class="_sidebar_shimmer">
                    <div class="_sidebar_shimmer_pic _2shim_animate din"></div>
                    <div class="_sidebar_shimmer_details">
                        <div class="_sidebar_shimmer_name _shim_w60 _2shim_animate"></div>
                    </div>
                </div>
                <div class="_sidebar_shimmer">
                    <div class="_sidebar_shimmer_pic _2shim_animate din"></div>
                    <div class="_sidebar_shimmer_details">
                        <div class="_sidebar_shimmer_name _shim_w40 _2shim_animate"></div>
                    </div>
                </div>
                <div class="_sidebar_shimmer_title _shim_w30 _2shim_animate"></div>
                <div class="_sidebar_shimmer">
                    <div class="_sidebar_shimmer_pic _2shim_animate din"></div>
                    <div class="_sidebar_shimmer_details">
                        <div class="_sidebar_shimmer_name _shim_w25 _2shim_animate"></div>
                    </div>
                </div>
                <div class="_sidebar_shimmer">
                    <div class="_sidebar_shimmer_pic _2shim_animate din"></div>
                    <div class="_sidebar_shimmer_details">
                        <div class="_sidebar_shimmer_name _shim_w35 _2shim_animate"></div>
                    </div>
                </div>
                <div class="_sidebar_shimmer">
                    <div class="_sidebar_shimmer_pic _2shim_animate din"></div>
                    <div class="_sidebar_shimmer_details">
                        <div class="_sidebar_shimmer_name _shim_w30 _2shim_animate"></div>
                    </div>
                </div>
                <div class="_sidebar_shimmer">
                    <div class="_sidebar_shimmer_pic _2shim_animate din"></div>
                    <div class="_sidebar_shimmer_details">
                        <div class="_sidebar_shimmer_name _shim_w35 _2shim_animate"></div>
                    </div>
                </div>
                <div class="_sidebar_shimmer_title _shim_w35 _2shim_animate"></div>
                <div class="_sidebar_shimmer">
                    <div class="_sidebar_shimmer_pic _2shim_animate din"></div>
                    <div class="_sidebar_shimmer_details">
                        <div class="_sidebar_shimmer_name _shim_w60 _2shim_animate"></div>
                    </div>
                </div>
                <div class="_sidebar_shimmer">
                    <div class="_sidebar_shimmer_pic _2shim_animate din"></div>
                    <div class="_sidebar_shimmer_details">
                        <div class="_sidebar_shimmer_name _shim_w40 _2shim_animate"></div>
                    </div>
                </div>
                <div class="_sidebar_shimmer">
                    <div class="_sidebar_shimmer_pic _2shim_animate din"></div>
                    <div class="_sidebar_shimmer_details">
                        <div class="_sidebar_shimmer_name _shim_w35 _2shim_animate"></div>
                    </div>
                </div>
            </div>
        </template>
        <!-- Shimmer -->

        <template v-if="isloaded">
            <div class="_sidebar_list_main">
                <ul class="_sidebar_list">
                    <li>
                        <router-link to="/profile">
                            <div class="_sidebar_list_pic">
                                <img class="_sidebar_list_img" src="/static/img/male.jpg" alt="" title="">
                            </div>
                            <p class="_sidebar_list_text">My Profile</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/settingNew">
                            <p class="_sidebar_list_icon"><i class="fas fa-user-cog"></i></p>
                            <p class="_sidebar_list_text">Account Setting</p>
                        </router-link>
                    </li>
                </ul>
            </div>

            <div class="_sidebar_list_main">
                <p class="_sidebar_list_title">Explore</p>

                <ul class="_sidebar_list">
                    <li>
                        <router-link to="">
                            <p class="_sidebar_list_icon"><i class="fas fa-chart-line"></i></p>
                            <p class="_sidebar_list_text">Personal Newsfeed</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="">
                            <p class="_sidebar_list_icon"><i class="fas fa-check-square"></i></p>
                            <p class="_sidebar_list_text">World Newsfeed</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/savedPage">
                            <p class="_sidebar_list_icon"><i class="fas fa-check-square"></i></p>
                            <p class="_sidebar_list_text">Saved Posts</p>
                        </router-link>
                    </li>
                </ul>
            </div>

            <div class="_sidebar_list_main">
                <p class="_sidebar_list_title">Discover</p>

                <ul class="_sidebar_list">
                    <li>
                        <router-link to="/peopleList">
                            <p class="_sidebar_list_icon"><i class="fas fa-globe-asia"></i></p>
                            <p class="_sidebar_list_text">people</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/groupList">
                            <p class="_sidebar_list_icon"><i class="fas fa-users"></i></p>
                            <p class="_sidebar_list_text">groups</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/pageList">
                            <p class="_sidebar_list_icon"><i class="fas fa-flag"></i></p>
                            <p class="_sidebar_list_text">pages</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/eventList">
                            <p class="_sidebar_list_icon"><i class="fas fa-calendar-alt"></i></p>
                            <p class="_sidebar_list_text">events</p>
                        </router-link>
                    </li>
                </ul>
            </div>

            <div class="_sidebar_list_main">
                <p class="_sidebar_list_title">Technical</p>

                <ul class="_sidebar_list">
                    <li>
                        <router-link to="/advertise">
                            <p class="_sidebar_list_icon"><i class="fas fa-globe-asia"></i></p>
                            <p class="_sidebar_list_text">Advertising</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="">
                            <p class="_sidebar_list_icon"><i class="fas fa-users"></i></p>
                            <p class="_sidebar_list_text">Support</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="">
                            <p class="_sidebar_list_icon"><i class="fas fa-flag"></i></p>
                            <p class="_sidebar_list_text" @click="logout">Log Out</p>
                        </router-link>
                    </li>
                </ul>
            </div>

            <!-- <div class="_fotter">
            <ul class="_fotter_list">
                <li>
                    <a href="">Privacy</a>
                </li>
                <li>
                    <a href="">Terms</a>
                </li>
                <li>
                    <a href="">Advertising</a>
                </li>
                <li>
                    <a href="">More </a>
                </li>
                <li>
                    CUMIVATOR@2021
                </li>
            </ul>
        </div> -->
        </template>
    </div>
</template>

<script>
export default {
  data(){
    return{
      isloaded: false,
      isHide: true
    }
  },

  methods:{
        async logout(){
        //   this.logoutLoader = true
          const res = await this.callApi('get', `/auth/logout`)
          if(res.status == 200){
             window.location = '/'
             console.log('They got me !!!')
          }
          this.logoutLoader = false
      },
      
  },
  
  created() {
    var self = this;
      var self2 = this;
      setTimeout(function() {
        self.$nextTick(function() {
          self.isloaded = true;
        })
        self2.$nextTick(function() {
          self2.isHide = false;
        })
    }, 1500);
  }
}
</script>