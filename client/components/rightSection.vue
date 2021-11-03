<template>
    <div class="_right_sec">
        <!-- Shimmer -->
        <template v-if="isHide">
            <div class="_rightShimmer_all">
                <div class="_rightShimmer_title _2shim_animate"></div>

                <div class="_rightShimmer" v-for="index in 13" :key="index">
                    <div class="_rightShimmer_pic _2shim_animate din"></div>
                    <div class="_rightShimmer_details">
                        <div class="_rightShimmer_name _shim_w90 _2shim_animate"></div>
                    </div>
                </div>
            </div>
        </template>
        <!-- Shimmer -->

        <!-- Chat list -->
        <template v-if="isloaded">
            <div class="_right_card _mar_b20">
                <div class="_right_card_top">
                    <p class="_right_card_title">Chat</p>

                    <ul class="_right_card_icons">
                        <li>
                            <i class="fas fa-users"></i>
                        </li>
                        <li>
                            <i class="fas fa-search"></i>
                        </li>
                        <li>
                            <i class="fas fa-cog"></i>
                        </li>
                    </ul>
                </div>

                <div class="_right_card_body _1scrollbar">
                    <!-- Items -->
                    <div class="_chat_list_card" v-for="(items, index) in 20" :key="index">
                        <div class="_chat_list_card_pic _active">
                            <img class="_chat_list_card_img" src="/static/img/pic.jpg" alt="" title="">
                        </div>

                        <div class="_chat_list_card_details">
                            <span class="_chat_list_card_name_main"><a href="" class="_chat_list_card_name">Konstaintions Oikonomou</a></span>
                        </div>

                        <div class="_right_card_items_button">
                            <!-- <button class="_2btn _pre_icon _btn_sm"><i class="fas fa-user-plus"></i> Add</button> -->
                        </div>
                    </div>
                    <!-- Items -->
                </div>

                <!-- Search -->
                <!-- <div class="_chat_list_search">
                    <input class="_chat_list_search_int" placeholder="Search">
                </div> -->
                <!-- Search -->
            </div>
        </template>
        <!-- Chat list -->
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