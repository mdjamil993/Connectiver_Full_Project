 <template>
  <div id="app">
    <div id="main-wrapper">
      <!-- Menu -->
      <div v-if="$route.path !== '/donate' && $route.path !== '/about' && $route.path != '/login' && $route.path != '/register'&& $route.path !== '/privacy' && $route.path !== '/terms' && $route.path !== '/support'  && $route.path !== '/signUp'  && $route.path !== '/resetPassword'  && $route.path !== '/forgetPassword' && $route.path !== '/resendEmail'" class="_menu" >
        <div class="_layout">
          <div class="_layout_row align-items-center">
            <div class="_layout_auto">
              <div class="_menu_left">
                <div class="_menu_logo">
                  <router-link to="/">
                    <h3 class="_menu_logo_text">
                      <span class="_menu_logo_symbol">C</span>
                      <span class="_menu_logo_text_main">CONNECTIVER</span>
                    </h3>
                  </router-link>
                </div>

                <!-- <p class="_menu_left_home"><i class="fas fa-home"></i> <i class="fal fa-house-day"></i></p> -->
              </div>
            </div>

            <!-- Mobile and Ipad Menu button -->
            <div class="_layout_col _only_sm_md _desk_hidden">
              <router-link to="/mobileMenu"><button class="_2btn _btn_sm">Menu</button></router-link>
            </div>
            <!-- Mobile and Ipad Menu button -->

            <div class="_layout_col _only_desktop">
              <div class="_menu_search">
                <div class="_menu_search_main">
                  <div class="_menu_search_icon">
                    <i class="fas fa-search"></i>
                  </div>

                  <div class="_menu_search_input">
                    <input type="text" placeholder="Search">
                  </div>
                </div>
              </div>
            </div>

            <div class="_layout_auto">
              <div class="_menu_right">
                <ul class="_menu_list">
                  <!-- Mobile only -->
                  <li class="_menu_list_items _mobile_search_main">
                    <div class="_mobile_search" @click="isMobileSearch = !isMobileSearch" >
                      <i class="fas fa-search"></i>
                    </div>
                  </li>
                  <!-- Mobile only -->

                  <!-- Friend request -->
                  <li class="_menu_list_items _menu_list_fri">
                    <div class="_menu_list_items_icon" @click="clickMenuDrop ('friReqDrop')" >
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g transform="matrix(1.14,0,0,1.14,-35.84034927368174,-34.720000000000255)"><path xmlns="http://www.w3.org/2000/svg" d="M344,208c-36.3,0-69.4,14.759-94.139,41.742A149.313,149.313,0,0,1,275.813,273c28.218,31.874,43.871,76.417,44.173,125.553A210.236,210.236,0,0,0,344,400c64.807,0,121.011-28.379,135.952-36.614-.927-43.955-15.09-83.5-40.119-111.777C414.938,223.487,380.9,208,344,208Z" fill="#ffffff" data-original="#000000" style="" class=""/><circle xmlns="http://www.w3.org/2000/svg" cx="344" cy="128" r="64" fill="#ffffff" data-original="#000000" style="" class=""/><path xmlns="http://www.w3.org/2000/svg" d="M168,240c-36.9,0-70.938,15.487-95.833,43.609-24.992,28.23-39.15,67.706-40.114,111.581C48.2,403.413,108.617,432,168,432c64.664,0,120.985-28.389,135.951-36.62-.927-43.952-15.09-83.5-40.118-111.771C238.938,255.487,204.9,240,168,240Z" fill="#ffffff" data-original="#000000" style="" class=""/><circle xmlns="http://www.w3.org/2000/svg" cx="168" cy="160" r="64" fill="#ffffff" data-original="#000000" style="" class=""/></g></svg>
                      <p class="_noti_num _users">1</p>
                    </div>

                    <!-- Dropdown -->
                    <div  v-if="tab == 'friReqDrop'" class="_1dropdown _friDrop">
                      <div class="_1dropdown_title">
                        <p class="_1dropdown_title_text _3title">Friend Requests</p>
                      </div>

                      <!-- Shimmer -->
                      <template v-if="isHide">
                        <div class="_drop_shimmer_all">
                          <div class="_drop_shimmer">
                            <div class="_shimmer_profilePic _shim_animate din"></div>
                            <div class="_drop_shimmer_details">
                              <div
                                class="_shimmer_mess_name _shim_w50 _shim_animate"
                              ></div>
                              <div
                                class="_shimmer_mess_text _shim_w95 _shim_animate"
                              ></div>
                            </div>
                          </div>

                          <div class="_drop_shimmer">
                            <div class="_shimmer_profilePic _shim_animate din"></div>
                            <div class="_drop_shimmer_details">
                              <div
                                class="_shimmer_mess_name _shim_w40 _shim_animate"
                              ></div>
                              <div
                                class="_shimmer_mess_text _shim_w80 _shim_animate"
                              ></div>
                            </div>
                          </div>

                          <div class="_drop_shimmer">
                            <div class="_shimmer_profilePic _shim_animate din"></div>
                            <div class="_drop_shimmer_details">
                              <div
                                class="_shimmer_mess_name _shim_w50 _shim_animate"
                              ></div>
                              <div
                                class="_shimmer_mess_text _shim_w90 _shim_animate"
                              ></div>
                            </div>
                          </div>

                          <div class="_drop_shimmer">
                            <div class="_shimmer_profilePic _shim_animate din"></div>
                            <div class="_drop_shimmer_details">
                              <div
                                class="_shimmer_mess_name _shim_w60 _shim_animate"
                              ></div>
                              <div
                                class="_shimmer_mess_text _shim_w100 _shim_animate"
                              ></div>
                            </div>
                          </div>

                          <div class="_drop_shimmer">
                            <div class="_shimmer_profilePic _shim_animate din"></div>
                            <div class="_drop_shimmer_details">
                              <div
                                class="_shimmer_mess_name _shim_w50 _shim_animate"
                              ></div>
                              <div
                                class="_shimmer_mess_text _shim_w90 _shim_animate"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </template>
                      <!-- Shimmer -->

                      <!-- friend request Data -->
                      <template  v-if="isloaded">
                        <div class="_1dropdown_body _1scrollbar">
                          <ul class="_1dropdown_body_list">
                            <li>
                              <div class="_friDrop_items">
                                <router-link to="" class="_friDrop_main">
                                  <div class="_friDrop_pic">
                                    <img class="_friDrop_img" src="~/static/img/pic.jpg" alt="" title=""/>
                                  </div>

                                  <div class="_friDrop_details">
                                    <div class="_friDrop_name_time">
                                      <p class="_friDrop_details_title">
                                        <strong class="">Mr. 00.09</strong>
                                      </p>

                                      <p class="_friDrop_time">10 minutes ago</p>
                                    </div>
                                  </div>
                                </router-link>

                                <div class="_friDrop_button">
                                  <button class="_1btn" type="button">Accept</button>
                                  <button class="_3btn" type="button">Decline</button>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>

                        <div class="_drop_see">
                          <router-link to="/friReqList"><span class="_drop_see_text">See all Friend Requests</span></router-link>
                        </div>
                      </template>
                      <!-- friend request Data -->

                      <!-- No friend request -->
                      <template v-if="noData">
                        <div class="_drop_no_data">
                          <div class="_drop_no_data_icon">
                            <i class="fas fa-users"></i>
                          </div>

                          <p class="_drop_no_data_text">
                            You've got zero friend requests.
                          </p>
                        </div>
                      </template>
                      <!-- No friend request -->
                    </div>
                    <!-- Dropdown -->
                  </li>
                  <!-- Friend request -->

                  <!-- Messages -->
                  <li class="_menu_list_items _menu_list_mess">
                    <div class="_menu_list_items_icon" @click="clickMenuDrop ('messageDrop')" >
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" x="0" y="0" viewBox="0 0 135.46666 135.46667" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><g id="layer1" xmlns="http://www.w3.org/2000/svg" ><path id="rect1437" d="m11.698046 20.664689c-6.4813896 0-11.69804983 5.21762-11.69804983 11.69843v.3843l58.39118183 40.80741c2.589688 1.80889 5.967679 2.70969 9.347488 2.7095 3.37798 0 6.755961-.900219 9.34565-2.7095l58.382344-40.79838v-.39294c0-6.48091-5.21666-11.69844-11.69815-11.69844zm-11.69804983 21.85919v60.579661c0 6.48091 5.21666023 11.69843 11.69804983 11.69843h112.070464c6.48149 0 11.69815-5.21752 11.69815-11.69843v-60.570441l-58.382344 40.798279c-2.589689 1.808991-5.96767 2.709501-9.34565 2.709501-3.379809 0-6.7578-.900219-9.347488-2.709501z" paint-order="fill markers stroke" fill="#ffffff" data-original="#000000" style=""/></g></g></svg>
                      <p class="_noti_num _message">2</p>
                    </div>

                    <!-- Dropdown -->
                    <div v-if="tab == 'messageDrop'" class="_1dropdown _messDrop_all">
                      <div class="_1dropdown_title">
                        <p class="_1dropdown_title_text _3title">Messages</p>

                        <div class="_1dropdown_title_more">
                          <Dropdown trigger="click" placement="bottom-end">
                            <a class="_drop_a" href="javascript:void(0)">
                              <i class="fas fa-ellipsis-h"></i>
                            </a>
                            <DropdownMenu slot="list">
                              <DropdownItem><span>Mark all as read</span></DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </div>
                      </div>

                      <!-- Shimmer -->
                      <template v-if="isHide">
                        <div class="_drop_shimmer_all">
                          <div class="_drop_shimmer">
                            <div class="_shimmer_profilePic _shim_animate din"></div>
                            <div class="_drop_shimmer_details">
                              <div
                                class="_shimmer_mess_name _shim_w50 _shim_animate"
                              ></div>
                              <div
                                class="_shimmer_mess_text _shim_w95 _shim_animate"
                              ></div>
                            </div>
                          </div>

                          <div class="_drop_shimmer">
                            <div class="_shimmer_profilePic _shim_animate din"></div>
                            <div class="_drop_shimmer_details">
                              <div
                                class="_shimmer_mess_name _shim_w40 _shim_animate"
                              ></div>
                              <div
                                class="_shimmer_mess_text _shim_w80 _shim_animate"
                              ></div>
                            </div>
                          </div>

                          <div class="_drop_shimmer">
                            <div class="_shimmer_profilePic _shim_animate din"></div>
                            <div class="_drop_shimmer_details">
                              <div
                                class="_shimmer_mess_name _shim_w50 _shim_animate"
                              ></div>
                              <div
                                class="_shimmer_mess_text _shim_w90 _shim_animate"
                              ></div>
                            </div>
                          </div>

                          <div class="_drop_shimmer">
                            <div class="_shimmer_profilePic _shim_animate din"></div>
                            <div class="_drop_shimmer_details">
                              <div
                                class="_shimmer_mess_name _shim_w60 _shim_animate"
                              ></div>
                              <div
                                class="_shimmer_mess_text _shim_w100 _shim_animate"
                              ></div>
                            </div>
                          </div>

                          <div class="_drop_shimmer">
                            <div class="_shimmer_profilePic _shim_animate din"></div>
                            <div class="_drop_shimmer_details">
                              <div
                                class="_shimmer_mess_name _shim_w50 _shim_animate"
                              ></div>
                              <div
                                class="_shimmer_mess_text _shim_w90 _shim_animate"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </template>
                      <!-- Shimmer -->

                      <!-- Messeges Data -->
                      <template v-if="isloaded">
                        <div class="_1dropdown_body _1scrollbar">
                          <template>
                            <ul class="_1dropdown_body_list">
                              <!-- Items -->
                              <li v-for="(items, index) in 10" :key="index" class="_unseen" >
                                <div class="_messDrop_items">

                                  <div class="_messDrop_main">
                                    <div class="_messDrop_pic">
                                      <img class="_messDrop_img" src="~/static/img/file_1608029627953.jpg" alt="" title=""/>
                                    </div>

                                    <div class="_messDrop_details">
                                      <div class="_messDrop_name_time">
                                        <p class="_messDrop_details_title">
                                          <strong class="">Sheikh Numan Hussain Shipu</strong>
                                        </p>

                                        <p class="_messDrop_time">10m ago</p>
                                      </div>

                                      <div class="_messDrop_mess">
                                        <p class="_messDrop_mess_text _1text_overflow">
                                          <span>You : </span>
                                          How are you?
                                        </p>
                                      </div>
                                    </div>
                                  </div>

                                  <div class="_messDrop_more">
                                    <Dropdown trigger="click" placement="bottom-end">
                                      <a class="_noti_more_a" href="javascript:void(0)">
                                        <i class="fas fa-ellipsis-h"></i>
                                      </a>
                                      <DropdownMenu slot="list">
                                        <DropdownItem><span>Mark as read</span></DropdownItem>
                                        <DropdownItem><span>Delete</span></DropdownItem>
                                      </DropdownMenu>
                                    </Dropdown>
                                  </div>
                                </div>
                              </li>
                              <!-- Items -->
                            </ul>
                          </template>
                        </div>

                        <div class="_drop_see">
                          <router-link to="/messenger"><span class="_drop_see_text">See all Conversations</span></router-link>
                        </div>
                      </template>
                      <!-- Messeges Data -->

                      <!-- No Messeges -->
                      <template v-if="noData">
                        <div class="_drop_no_data">
                          <div class="_drop_no_data_icon">
                            <i class="fab fa-facebook-messenger"></i>
                          </div>

                          <p class="_drop_no_data_text">No messages.</p>
                        </div>
                      </template>
                      <!-- No Messeges -->
                    </div>
                    <!-- Dropdown -->
                  </li>
                  <!-- Messages -->

                  <!-- Notification -->
                  <li class="_menu_list_items _menu_list_noti">
                    <div class="_menu_list_items_icon" @click="clickMenuDrop ('notiDrop')" >
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g>
                        <g xmlns="http://www.w3.org/2000/svg">
                          <g>
                            <g>
                              <path d="M191.132,469.361C202.252,494.367,226.91,512,256.012,512c29.102,0,53.76-17.633,64.881-42.639     c-20.521,1.004-41.861,1.679-64.881,1.679C232.993,471.04,211.653,470.364,191.132,469.361z" fill="#ffffff" data-original="#000000" style="" class=""/>
                              <path d="M481.886,360.96c-26.993-34.038-72.294-100.946-72.294-166.4c0-64.901-41.697-123.29-102.4-144.753     C306.455,22.2,283.763,0,256.012,0c-27.771,0-50.442,22.2-51.18,49.807c-60.723,21.463-102.42,79.852-102.42,144.753     c0,65.475-45.281,132.362-72.294,166.4c-9.011,11.366-11.797,26.378-7.434,40.161c4.26,13.455,14.868,23.88,28.385,27.853     c23.675,6.984,62.484,14.848,121.672,18.862c25.62,1.72,53.166,2.724,83.272,2.724c30.085,0,57.631-1.004,83.251-2.724     c59.208-4.014,97.997-11.878,121.692-18.862c13.517-3.973,24.105-14.397,28.365-27.853     C493.683,387.338,490.877,372.326,481.886,360.96z" fill="#ffffff" data-original="#000000" style="" class=""/>
                            </g>
                          </g>
                        </g>
                        </g>
                      </svg>
                      <p class="_noti_num _notification">3</p>
                    </div>

                    <!-- Dropdown -->
                    <div v-if="tab == 'notiDrop'" class="_1dropdown _noti_all">
                      <div class="_1dropdown_title">
                        <p class="_1dropdown_title_text _3title">Notifications</p>

                        <div class="_1dropdown_title_more">
                          <Dropdown trigger="click" placement="bottom-end">
                            <a class="_drop_a" href="javascript:void(0)">
                              <i class="fas fa-ellipsis-h"></i>
                            </a>
                            <DropdownMenu slot="list">
                              <DropdownItem><span>Mark all as read</span></DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </div>
                      </div>

                      <!-- Shimmer -->
                      <template v-if="isHide">
                        <div class="_drop_shimmer_all">
                          <div class="_drop_shimmer">
                            <div class="_shimmer_profilePic _shim_animate din"></div>
                            <div class="_drop_shimmer_details">
                              <div
                                class="_shimmer_mess_name _shim_w50 _shim_animate"
                              ></div>
                              <div
                                class="_shimmer_mess_text _shim_w95 _shim_animate"
                              ></div>
                            </div>
                          </div>

                          <div class="_drop_shimmer">
                            <div class="_shimmer_profilePic _shim_animate din"></div>
                            <div class="_drop_shimmer_details">
                              <div
                                class="_shimmer_mess_name _shim_w40 _shim_animate"
                              ></div>
                              <div
                                class="_shimmer_mess_text _shim_w80 _shim_animate"
                              ></div>
                            </div>
                          </div>

                          <div class="_drop_shimmer">
                            <div class="_shimmer_profilePic _shim_animate din"></div>
                            <div class="_drop_shimmer_details">
                              <div
                                class="_shimmer_mess_name _shim_w50 _shim_animate"
                              ></div>
                              <div
                                class="_shimmer_mess_text _shim_w90 _shim_animate"
                              ></div>
                            </div>
                          </div>

                          <div class="_drop_shimmer">
                            <div class="_shimmer_profilePic _shim_animate din"></div>
                            <div class="_drop_shimmer_details">
                              <div
                                class="_shimmer_mess_name _shim_w60 _shim_animate"
                              ></div>
                              <div
                                class="_shimmer_mess_text _shim_w100 _shim_animate"
                              ></div>
                            </div>
                          </div>

                          <div class="_drop_shimmer">
                            <div class="_shimmer_profilePic _shim_animate din"></div>
                            <div class="_drop_shimmer_details">
                              <div
                                class="_shimmer_mess_name _shim_w50 _shim_animate"
                              ></div>
                              <div
                                class="_shimmer_mess_text _shim_w90 _shim_animate"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </template>
                      <!-- Shimmer -->

                      <!-- Notification Data -->
                      <template v-if="isloaded">
                        <div class="_1dropdown_body _1scrollbar">
                            <ul class="_1dropdown_body_list">
                              <!-- Items -->
                              <li v-for="(items, index) in 10" :key="index" class="_active" >
                                <div class="_noti_items">
                                  <div class="_noti_main">
                                    <div class="_noti_pic">
                                      <img class="_noti_img" src="~/static/img/pic.jpg" alt="" title=""/>
                                    </div>

                                    <div class="_noti_details">
                                      <p class="_noti_details_title">
                                        <strong class="_noti_details_title_name">Kollol Chakraborty</strong>
                                      comment in your post.
                                      </p>

                                      <p class="_noti_details_time">5m ago</p>
                                    </div>
                                  </div>

                                  <div class="_noti_more">
                                    <Dropdown trigger="click" placement="bottom-end">
                                      <a class="_noti_more_a" href="javascript:void(0)">
                                        <i class="fas fa-ellipsis-h"></i>
                                      </a>
                                      <DropdownMenu slot="list">
                                        <DropdownItem><span>Mark as read</span></DropdownItem>
                                        <DropdownItem><span>Delete</span></DropdownItem>
                                      </DropdownMenu>
                                    </Dropdown>
                                  </div>
                                </div>
                              </li>
                              <!-- Items -->
                            </ul>
                        </div>
                        <!-- See more -->
                        <div class="_drop_see">
                          <router-link to="/notificationPage"><span class="_drop_see_text">See all Notifications</span></router-link>
                        </div>
                        <!-- See more -->
                      </template>
                      <!-- Notification Data -->

                      <!-- No Notifiaction -->
                      <template  v-if="noData">
                        <div class="_drop_no_data">
                          <div class="_drop_no_data_icon">
                            <i class="fas fa-bell"></i>
                          </div>

                          <p class="_drop_no_data_text">No notification left.</p>
                        </div>
                      </template>
                      <!-- No Notifiaction -->
                    </div>
                    <!-- Dropdown -->
                  </li>
                  <!-- Notification -->

                  <!-- Mobile and Ipad -->
                  <!-- <li class="_menu_list_items _mobile_pro_main">
                    <div class="_mobile_pro">
                      <div class="_mobile_pro_pic">
                        <img class="_mobile_pro_img" src="~/static/img/male.jpg" alt="" title="">
                      </div>
                    </div>
                  </li> -->
                  <!-- Mobile and Ipad -->

                  <!-- Profile -->
                  <!-- <li class="_menu_list_items _menu_more">
                    <div class="_menu_pro_main" @click="moreDrop = !moreDrop">
                      <div class="_menu_pro_main_pic">
                        <img class="_menu_pro_main_img" src="~/static/img/male.jpg" alt="" title="">
                      </div>
                      <p class="_menu_pro_main_name">Hussain shipu</p>
                      <p class="_menu_pro_main_drop_icon"><i class="fas fa-caret-down"></i></p>
                    </div>

                    <div v-if="moreDrop" class="_1dropdown _proDrop">
                      <div class="_1dropdown_body">
                          <div class="_proDrop_top_all">
                              <a href="/profile/kollolc?tab=timeline" class="_proDrop_top">
                                  <div class="_proDrop_pic">
                                    <img src="http://localhost:3000/uploads/image_1608053964873.jpeg" alt="" title="" class="_proDrop_img">
                                  </div>

                                  <div class="_proDrop_details">
                                      <p class="_proDrop_name">Kollol Chakraborty</p>
                                      <span class="_proDrop_email">shipu@gmail.com</span>
                                  </div>
                              </a>
                          </div>

                          <ul class="_1dropdown_body_list _2dropdown_body_list">
                            <li>
                              <a href="/transactions" class=""><i class="fas fa-align-left"></i> My Transactions</a>
                            </li>
                            <li>
                              <a href="/subscriptions/my" class=""><i class="fas fa-envelope-open"></i> My Subscriptions</a>
                            </li>
                            <li>
                              <a href="/my_fixed_ad" class=""><i class="fas fa-file"></i> My Ads</a>
                            </li>
                          </ul>

                          <div class="_proDrop_mode">
                              <h2 class="_proDrop_mode_title">Dark mode</h2>
                              <div class="_proDrop_mode_switch">
                                <label class="switch"><input type="checkbox"> <span class="slider round"></span></label>
                              </div>
                          </div>

                          <ul class="_1dropdown_body_list _2dropdown_body_list">
                              <li>
                                <a href="/app/user/logout"><i class="fas fa-sign-out-alt"></i> Log Out</a>
                              </li>
                          </ul>
                      </div>
                  </div>
                  </li> -->
                  <!-- Profile -->
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Menu -->

      <!-- Mobile search -->
      <div :class="isMobileSearch ? '_mobile_searchBoxOpen _mobile_searchBox':'_mobile_searchBox'">
        <input placeholder="Search" type="">
        <i class="fas fa-search"></i>
      </div>
      <!-- Mobile search -->

      <!-- Mobile and Ipad menu -->
      <div :class="clickMenu? '_mobile_menu _mobile_menu_open' : '_mobile_menu'">
        <p class="_mobile_menu_close" @click="clickMenu = false" ><i class="fas fa-times"></i></p>

        <div class="_sidebar_main_all _1scrollbar">
          <div class="_sidebar_list_main">
            <ul class="_sidebar_list">
                <li>
                    <router-link to="/profile">
                        <div class="_sidebar_list_pic">
                            <img class="_sidebar_list_img" src="~/static/img/male.jpg" alt="" title="">
                        </div>
                        <p class="_sidebar_list_text">My Profile</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="/setting">
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
                          <p class="_sidebar_list_text">World Newsfeed</p>
                      </router-link>
                  </li>
                  <li>
                      <router-link to="">
                          <p class="_sidebar_list_icon"><i class="fas fa-check-square"></i></p>
                          <p class="_sidebar_list_text">Friend Newsfeed</p>
                      </router-link>
                  </li>
                  <li>
                      <router-link to="">
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
                      <router-link to="">
                          <p class="_sidebar_list_icon"><i class="fas fa-globe-asia"></i></p>
                          <p class="_sidebar_list_text">people</p>
                      </router-link>
                  </li>
                  <li>
                      <router-link to="/group">
                          <p class="_sidebar_list_icon"><i class="fas fa-users"></i></p>
                          <p class="_sidebar_list_text">groups</p>
                      </router-link>
                  </li>
                  <li>
                      <router-link to="/page">
                          <p class="_sidebar_list_icon"><i class="fas fa-flag"></i></p>
                          <p class="_sidebar_list_text">pages</p>
                      </router-link>
                  </li>
                  <li>
                      <router-link to="/event">
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
                      <router-link to="">
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
                          <p class="_sidebar_list_text">Log Out</p>
                      </router-link>
                  </li>
              </ul>
          </div>
        </div>
      </div>
      <!-- Mobile and Ipad menu -->

      <!-- Chat box -->
      <div v-if="isChatBox" class="_chatBox_all">
        <div :class="isMinimize? '_chatBox _chatBox_mini':'_chatBox'">
          <div class="_chatBox_top">
            <a href="" class="_chatBox_top_pro _active">
              <div class="_chatBox_top_pro_pic">
                <img class="_chatBox_top_pro_img" src="~/static/img/male.jpg" alt="" title="">
              </div>

              <div class="_chatBox_top_pro_details">
                <p class="_chatBox_top_pro_name">{{authUser.first_name}} {{authUser.last_name}}</p>
                <p class="_chatBox_top_pro_active">Active</p>
              </div>
            </a>

            <ul class="_chatBox_icons_list">
              <li><i class="fas fa-video"></i></li>
              <li><i class="fas fa-phone"></i></li>
              <li @click="isMinimize = !isMinimize">
                <i class="fas fa-minus _mini"></i>
                <i style="transform: rotate(-45deg);" class="fas fa-arrows-alt-h _unmini"></i>
              </li>
              <li><Icon style="font-size: 24px;" type="md-close" @click="isChatBox = false" /></li>
            </ul>
          </div>

          <div class="_chatBox_main _1scrollbar">
            <!-- Own message -->
            <div class="_chatBox_mess_own">
              <div class="_chatBox_mess_drop">
                <Dropdown trigger="click">
                    <a class="_chatBox_mess_drop_text" href="javascript:void(0)">
                        <i class="fas fa-ellipsis-h"></i>
                    </a>
                    <DropdownMenu slot="list">
                        <DropdownItem><p class="_drop_text _drop_pre_icon">Edit</p></DropdownItem>
                        <DropdownItem><p class="_drop_text _drop_pre_icon">Remove</p></DropdownItem>
                    </DropdownMenu>
                </Dropdown>
              </div>

              <p class="_chatBox_mess_own_text">Hi, How are you?</p>
            </div>
            <!-- Own message -->

            <!-- Friend message -->
            <div class="_chatBox_mess_fri">
              <div class="_chatBox_mess_fri_pic">
                <img class="_chatBox_mess_fri_img" src="~/static/img/pic.jpg" alt="" title="">
              </div>

              <div class="_chatBox_mess_fri_details">
                <p class="_chatBox_mess_fri_text">https://stackoverflow.com/questions/1192783/css-how-to-set-div-height-100-minus-npx</p>

                <div class="_chatBox_mess_drop">
                  <Dropdown trigger="click">
                      <a class="_chatBox_mess_drop_text" href="javascript:void(0)">
                          <i class="fas fa-ellipsis-h"></i>
                      </a>
                      <DropdownMenu slot="list">
                          <DropdownItem><p class="_drop_text _drop_pre_icon">Edit</p></DropdownItem>
                          <DropdownItem><p class="_drop_text _drop_pre_icon">Remove</p></DropdownItem>
                      </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
            </div>
            <!-- Friend message -->

            <!-- Own message -->
            <div class="_chatBox_mess_own">
              <div class="_chatBox_mess_drop">
                <Dropdown trigger="click">
                    <a class="_chatBox_mess_drop_text" href="javascript:void(0)">
                        <i class="fas fa-ellipsis-h"></i>
                    </a>
                    <DropdownMenu slot="list">
                        <DropdownItem><p class="_drop_text _drop_pre_icon">Edit</p></DropdownItem>
                        <DropdownItem><p class="_drop_text _drop_pre_icon">Remove</p></DropdownItem>
                    </DropdownMenu>
                </Dropdown>
              </div>

              <p class="_chatBox_mess_own_text">hussainshipu0356@gmail.com</p>
            </div>
            <!-- Own message -->

            <!-- Own message -->
            <div v-for="(item, index) in 3" :key="index" class="_chatBox_mess_own">
              <div class="_chatBox_mess_drop">
                <Dropdown trigger="click">
                    <a class="_chatBox_mess_drop_text" href="javascript:void(0)">
                        <i class="fas fa-ellipsis-h"></i>
                    </a>
                    <DropdownMenu slot="list">
                        <DropdownItem><p class="_drop_text _drop_pre_icon">Edit</p></DropdownItem>
                        <DropdownItem><p class="_drop_text _drop_pre_icon">Remove</p></DropdownItem>
                    </DropdownMenu>
                </Dropdown>
              </div>

              <p class="_chatBox_mess_own_text">Hi, How are you?</p>
            </div>
            <!-- Own message -->

            <!-- Friend message -->
            <div v-for="(item, index) in 3" :key="index" class="_chatBox_mess_fri">
              <div class="_chatBox_mess_fri_pic">
                <img class="_chatBox_mess_fri_img" src="~/static/img/pic.jpg" alt="" title="">
              </div>

              <div class="_chatBox_mess_fri_details">
                <p class="_chatBox_mess_fri_text">Hello, I am fine.. how are you?</p>

                <div class="_chatBox_mess_drop">
                  <Dropdown trigger="click">
                      <a class="_chatBox_mess_drop_text" href="javascript:void(0)">
                          <i class="fas fa-ellipsis-h"></i>
                      </a>
                      <DropdownMenu slot="list">
                          <DropdownItem><p class="_drop_text _drop_pre_icon">Edit</p></DropdownItem>
                          <DropdownItem><p class="_drop_text _drop_pre_icon">Remove</p></DropdownItem>
                      </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
            </div>
            <!-- Friend message -->

            <!-- Own message -->
            <div class="_chatBox_mess_own">
              <div class="_chatBox_mess_drop">
                <Dropdown trigger="click">
                    <a class="_chatBox_mess_drop_text" href="javascript:void(0)">
                        <i class="fas fa-ellipsis-h"></i>
                    </a>
                    <DropdownMenu slot="list">
                        <DropdownItem><p class="_drop_text _drop_pre_icon">Edit</p></DropdownItem>
                        <DropdownItem><p class="_drop_text _drop_pre_icon">Remove</p></DropdownItem>
                    </DropdownMenu>
                </Dropdown>
              </div>

              <p class="_chatBox_mess_own_text">Hi!</p>
            </div>
            <!-- Own message -->

            <!-- Friend message -->
            <div class="_chatBox_mess_fri">
              <div class="_chatBox_mess_fri_pic">
                <img class="_chatBox_mess_fri_img" src="~/static/img/pic.jpg" alt="" title="">
              </div>

              <div class="_chatBox_mess_fri_details">
                <p class="_chatBox_mess_fri_text">Hi!</p>

                <div class="_chatBox_mess_drop">
                  <Dropdown trigger="click">
                      <a class="_chatBox_mess_drop_text" href="javascript:void(0)">
                          <i class="fas fa-ellipsis-h"></i>
                      </a>
                      <DropdownMenu slot="list">
                          <DropdownItem><p class="_drop_text _drop_pre_icon">Edit</p></DropdownItem>
                          <DropdownItem><p class="_drop_text _drop_pre_icon">Remove</p></DropdownItem>
                      </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
            </div>
            <!-- Friend message -->

            <!-- Friend single Image -->
            <div class="_chatBox_mess_fri">
              <div class="_chatBox_mess_fri_pic">
                <img class="_chatBox_mess_fri_img" src="~/static/img/pic.jpg" alt="" title="">
              </div>

              <div class="_chatBox_mess_fri_details">
                <div class="_chatBox_mess_img_pic">
                  <img class="_chatBox_mess_img" src="~/static/img/file_1608029627953.jpg" alt="" title="">
                </div>

                <div class="_chatBox_mess_drop">
                  <Dropdown trigger="click">
                      <a class="_chatBox_mess_drop_text" href="javascript:void(0)">
                          <i class="fas fa-ellipsis-h"></i>
                      </a>
                      <DropdownMenu slot="list">
                          <DropdownItem><p class="_drop_text _drop_pre_icon">Edit</p></DropdownItem>
                          <DropdownItem><p class="_drop_text _drop_pre_icon">Remove</p></DropdownItem>
                      </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
            </div>
            <!-- Friend single Image -->

            <!-- Friend multipule Image -->
            <div class="_chatBox_mess_fri">
              <div class="_chatBox_mess_fri_pic">
                <img class="_chatBox_mess_fri_img" src="~/static/img/pic.jpg" alt="" title="">
              </div>

              <div class="_chatBox_mess_fri_details">
                <div class="_chatBox_mess_img_all">
                  <!-- Items -->
                  <div class="_chatBox_mess_mul_pic_main">
                    <div class="_chatBox_mess_mul_pic">
                      <img class="_chatBox_mess_mul_img" src="~/static/img/file_1607448690151.jpg" alt="" title="">
                    </div>
                  </div>
                  <!-- Items -->
                  <!-- Items -->
                  <div class="_chatBox_mess_mul_pic_main">
                    <div class="_chatBox_mess_mul_pic">
                      <img class="_chatBox_mess_mul_img" src="~/static/img/file_1608029627953.jpg" alt="" title="">
                    </div>
                  </div>
                  <!-- Items -->
                  <!-- Items -->
                  <div class="_chatBox_mess_mul_pic_main">
                    <div class="_chatBox_mess_mul_pic">
                      <img class="_chatBox_mess_mul_img" src="~/static/img/file_1607448690151.jpg" alt="" title="">
                    </div>
                  </div>
                  <!-- Items -->
                  <!-- Items -->
                  <div class="_chatBox_mess_mul_pic_main">
                    <div class="_chatBox_mess_mul_pic">
                      <img class="_chatBox_mess_mul_img" src="~/static/img/file_1608029627953.jpg" alt="" title="">
                    </div>
                  </div>
                  <!-- Items -->
                </div>

                <div class="_chatBox_mess_drop">
                  <Dropdown trigger="click">
                      <a class="_chatBox_mess_drop_text" href="javascript:void(0)">
                          <i class="fas fa-ellipsis-h"></i>
                      </a>
                      <DropdownMenu slot="list">
                          <DropdownItem><p class="_drop_text _drop_pre_icon">Edit</p></DropdownItem>
                          <DropdownItem><p class="_drop_text _drop_pre_icon">Remove</p></DropdownItem>
                      </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
            </div>
            <!-- Friend multipule Image -->

            <!-- Own Single image -->
            <div class="_chatBox_mess_own">
              <div class="_chatBox_mess_drop">
                <Dropdown trigger="click">
                    <a class="_chatBox_mess_drop_text" href="javascript:void(0)">
                        <i class="fas fa-ellipsis-h"></i>
                    </a>
                    <DropdownMenu slot="list">
                        <DropdownItem><p class="_drop_text _drop_pre_icon">Edit</p></DropdownItem>
                        <DropdownItem><p class="_drop_text _drop_pre_icon">Remove</p></DropdownItem>
                    </DropdownMenu>
                </Dropdown>
              </div>

              <div class="_chatBox_mess_img_pic">
                <img class="_chatBox_mess_img" src="~/static/img/file_1608029627953.jpg" alt="" title="">
              </div>
            </div>
            <!-- Own message -->

            <!-- Own Multipule image -->
            <div class="_chatBox_mess_own">
              <div class="_chatBox_mess_drop">
                <Dropdown trigger="click">
                    <a class="_chatBox_mess_drop_text" href="javascript:void(0)">
                        <i class="fas fa-ellipsis-h"></i>
                    </a>
                    <DropdownMenu slot="list">
                        <DropdownItem><p class="_drop_text _drop_pre_icon">Edit</p></DropdownItem>
                        <DropdownItem><p class="_drop_text _drop_pre_icon">Remove</p></DropdownItem>
                    </DropdownMenu>
                </Dropdown>
              </div>

              <div class="_chatBox_mess_img_all">
                <!-- Items -->
                <div class="_chatBox_mess_mul_pic_main">
                  <div class="_chatBox_mess_mul_pic">
                    <img class="_chatBox_mess_mul_img" src="~/static/img/file_1607448690151.jpg" alt="" title="">
                  </div>
                </div>
                <!-- Items -->
                <!-- Items -->
                <div class="_chatBox_mess_mul_pic_main">
                  <div class="_chatBox_mess_mul_pic">
                    <img class="_chatBox_mess_mul_img" src="~/static/img/file_1608029627953.jpg" alt="" title="">
                  </div>
                </div>
                <!-- Items -->
                <!-- Items -->
                <div class="_chatBox_mess_mul_pic_main">
                  <div class="_chatBox_mess_mul_pic">
                    <img class="_chatBox_mess_mul_img" src="~/static/img/file_1607448690151.jpg" alt="" title="">
                  </div>
                </div>
                <!-- Items -->
                <!-- Items -->
                <div class="_chatBox_mess_mul_pic_main">
                  <div class="_chatBox_mess_mul_pic">
                    <img class="_chatBox_mess_mul_img" src="~/static/img/file_1608029627953.jpg" alt="" title="">
                  </div>
                </div>
                <!-- Items -->
              </div>
            </div>
            <!-- Own Multipule image -->

            <!-- Own File or Multifule -->
            <div class="_chatBox_mess_own">
              <div class="_chatBox_mess_drop">
                <Dropdown trigger="click">
                    <a class="_chatBox_mess_drop_text" href="javascript:void(0)">
                        <i class="fas fa-ellipsis-h"></i>
                    </a>
                    <DropdownMenu slot="list">
                        <DropdownItem><p class="_drop_text _drop_pre_icon">Edit</p></DropdownItem>
                        <DropdownItem><p class="_drop_text _drop_pre_icon">Remove</p></DropdownItem>
                    </DropdownMenu>
                </Dropdown>
              </div>

              <div class="_chatBox_mess_file_main">
                <!-- Item -->
                <div class="_chatBox_mess_file">
                  <p class="_chatBox_mess_file_icon"><i class="fas fa-file"></i></p>

                  <div class="_chatBox_mess_file_details">
                    <p class="_chatBox_mess_file_title">I dont know.pdf</p>
                    <p class="_chatBox_mess_file_size">12kb</p>
                  </div>
                </div>
                <!-- Item -->
              </div>
            </div>
            <!-- Own File or Multifule -->

            <!-- Friend File or Multifule -->
            <div class="_chatBox_mess_fri">
              <div class="_chatBox_mess_fri_pic">
                <img class="_chatBox_mess_fri_img" src="~/static/img/pic.jpg" alt="" title="">
              </div>

              <div class="_chatBox_mess_fri_details _chatBox_mess_file_details">
                <div class="_chatBox_mess_file_main">
                  <!-- Item -->
                  <div v-for="(item, index) in 1" :key="index" class="_chatBox_mess_file">
                    <p class="_chatBox_mess_file_icon"><i class="fas fa-file"></i></p>

                    <div class="_chatBox_mess_file_details">
                      <p class="_chatBox_mess_file_title">I dont know.pdf</p>
                      
                      <p class="_chatBox_mess_file_size">12kb</p>
                    </div>
                  </div>
                  <!-- Item -->
                </div>

                <div class="_chatBox_mess_drop">
                  <Dropdown trigger="click">
                      <a class="_chatBox_mess_drop_text" href="javascript:void(0)">
                          <i class="fas fa-ellipsis-h"></i>
                      </a>
                      <DropdownMenu slot="list">
                          <DropdownItem><p class="_drop_text _drop_pre_icon">Edit</p></DropdownItem>
                          <DropdownItem><p class="_drop_text _drop_pre_icon">Remove</p></DropdownItem>
                      </DropdownMenu>
                  </Dropdown>
                </div>

                <p class="_chatBox_mess_time"><i class="fas fa-clock"></i> Just now</p>
              </div>
            </div>
            <!-- Friend File or Multifule -->




             <!-- <div class="_chatBox_mess_own">
              <div class="_chatBox_mess_drop">
                <Dropdown trigger="click">
                    <a class="_chatBox_mess_drop_text" href="javascript:void(0)">
                        <i class="fas fa-ellipsis-h"></i>
                    </a>
                    <DropdownMenu slot="list">
                        <DropdownItem><p class="_drop_text _drop_pre_icon">Edit</p></DropdownItem>
                        <DropdownItem><p class="_drop_text _drop_pre_icon">Remove</p></DropdownItem>
                    </DropdownMenu>
                </Dropdown>
              </div>

              <p class="_chatBox_mess_own_text">{{msgtxt}}</p>
            </div> -->




































                <ul class="list-group list-group-flush text-right">
                    
                    <li class="list-group-item" v-for="(item,index) in todos" :key="index">

                    
                       <div class="_chatBox_mess_own" v-if="item.sender_id==authUser.id">
                           <div class="_chatBox_mess_drop">
                                  <Dropdown trigger="click">
                                     <a class="_chatBox_mess_drop_text" href="javascript:void(0)">
                                     <i class="fas fa-ellipsis-h"></i>
                                             </a>
                                 <DropdownMenu slot="list">
                                         <DropdownItem><p class="_drop_text _drop_pre_icon">Edit</p></DropdownItem>
                                         <DropdownItem><p class="_drop_text _drop_pre_icon" @click="removeTodo(index,item.id)">Remove</p></DropdownItem>
                                 </DropdownMenu>
                               </Dropdown>
                         </div>

                   <p class="_chatBox_mess_own_text">{{item.txt}}</p>
                  </div>
                   
                  <div class="_chatBox_mess_fri" v-else>
                            <div class="_chatBox_mess_fri_pic">
                                  <img class="_chatBox_mess_fri_img" src="~/static/img/pic.jpg" alt="" title="">
                            </div>

                 <div class="_chatBox_mess_fri_details">
                         <p class="_chatBox_mess_fri_text">{{item.txt}}</p>

                 <div class="_chatBox_mess_drop">
                  <Dropdown trigger="click">
                      <a class="_chatBox_mess_drop_text" href="javascript:void(0)">
                          <i class="fas fa-ellipsis-h"></i>
                      </a>
                      <DropdownMenu slot="list">
                          <DropdownItem><p class="_drop_text _drop_pre_icon">Edit</p></DropdownItem>
                          <DropdownItem><p class="_drop_text _drop_pre_icon">Remove</p></DropdownItem>
                      </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
            </div>



             </li>
            </ul>




          </div>

          <div class="_chatBox_textarea_all">
            <ul class="_chatBox_textarea_icons">
              <li><i class="fas fa-smile"></i></li>
              <li><i class="fas fa-image"></i></li>
              <li><i class="fas fa-microphone"></i></li>
              <!-- <li>
                <svg style="width: 18px; height: auto;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" xml:space="preserve"><g><path xmlns="http://www.w3.org/2000/svg" d="m368 0h-309.332031c-32.363281 0-58.667969 26.304688-58.667969 58.667969v394.664062c0 32.363281 26.304688 58.667969 58.667969 58.667969h309.332031c32.363281 0 58.667969-26.304688 58.667969-58.667969v-394.664062c0-32.363281-26.304688-58.667969-58.667969-58.667969zm-266.667969 394.667969h16v-6.253907c-6.226562-2.195312-10.664062-8.125-10.664062-15.082031 0-8.832031 7.167969-16 16-16h10.664062c8.832031 0 16 7.167969 16 16v37.335938c0 8.832031-7.167969 16-16 16h-32c-20.585937 0-37.332031-16.746094-37.332031-37.335938v-53.332031c0-20.585938 16.746094-37.332031 37.332031-37.332031h32c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16h-32c-2.941406 0-5.332031 2.386719-5.332031 5.332031v53.332031c0 2.945313 2.390625 5.335938 5.332031 5.335938zm117.335938 16c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-96c0-8.832031 7.167969-16 16-16s16 7.167969 16 16zm106.664062-58.667969c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16h-42.664062v26.667969c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-74.667969c0-20.585938 16.746093-37.332031 37.332031-37.332031h37.332031c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16h-37.332031c-2.945312 0-5.332031 2.386719-5.332031 5.332031v16zm0 0" fill="#0392f7" data-original="#000000"></path></g><i xmlns="http://www.w3.org/1999/xhtml" class="fas fa-paperclip"></i></svg>
              </li> -->
              <li><i class="fas fa-paperclip"></i></li>
            </ul>

            <div class="_chatBox_textarea">
              <textarea class="_chatBox_textarea_textarea" rows="1" placeholder="Write a message..." v-model='msgtxt'></textarea>
              <p class="_chatBox_send_icon" @click="clicked_chat_button"><i class="fas fa-paper-plane"></i></p>
            </div>
          </div>
        </div>
      </div>
      <!-- Chat box -->

      <!-- Chat box click -->
      <div class="_chat_box_click" @click="isChatBox = true" ><i class="fas fa-comment-alt"></i></div>
      <!-- Chat box click -->

      <div class="_main_layout">
        <nuxt></nuxt>
      </div>

      <!-- Footer -->
      <div v-if="$route.path !== '/messenger'" class="_log_footer">
        <!-- Shimmer -->
        <template v-if="isHide2">
            <div class="_footer_shimmer">
                <ul class="_footer_shimmer_ul">
                    <li class="_2shim_animate"></li>
                    <li class="_2shim_animate"></li>
                    <li class="_2shim_animate"></li>
                    <li class="_2shim_animate"></li>
                    <li class="_2shim_animate"></li>
                </ul>
                <div class="_footer_shimmer_copy _2shim_animate"></div>
            </div>
        </template>
        <!-- Shimmer -->

        <template v-if="isloaded2">
          <ul class="_log_footer_list">
              <li>
                  <router-link to="/about">About</router-link>
              </li>
              <li>
                  <router-link to="/support">Support</router-link>
              </li>
              <li>
                  <router-link to="/donate">Donate</router-link>
              </li>
              <li>
                  <router-link to="/terms">Terms</router-link>
              </li>
              <li>
                  <router-link to="/privacy">Privacy</router-link>
              </li>
          </ul>

          <p class="_log_footer_copy">
              Connectiver©2021. Founded by Connectiver and developed by
              <a href="">AppilyLab</a>
          </p>
        </template>
      </div>
      <!-- Footer -->
    </div>
  </div>
</template>

<script>

import axios from "axios";
export default {
  data(){
    return{
      moreDrop : false,
      clickMenu: false,
      isChatBox: false,
      isNotification: false,
      isFriendReq: false,
      noData: false,
      isMessage: false,
      isloaded: false,
      isHide: true,
      isloaded2: false,
      isHide2: true,
      tab: '',
      isMinimize: false,
      isMobileSearch: false,
      msgtxt:'jamil',
      flag:true,
      array_data:[],
      todos:[],
      
    }
  },

  async created() {
    const self3 = this;
      const self4 = this;
      setTimeout(function() {
        self3.$nextTick(function() {
          self3.isloaded2 = true;
        })
        self4.$nextTick(function() {
          self4.isHide2 = false;
        })
    }, 1500);

    // console.log('Printing authuser information')
    // console.log(this.authUser)

    const res = await axios.get("http://127.0.0.1:3333/getchats");
    if (res.status == 200) {
      this.array_data = res.data;
    }

   for (let i = 0; i < this.array_data.length; i++) {

     if(this.array_data[i].flag !== this.authUser.id){
     this.todos.push(this.array_data[i])
     }
   }
  },
   // middleware: "auth",

  methods:{
    clickMenuDrop(tab){
      if ( tab !== "messageDrop" && tab !== "notiDrop" && tab !== "friReqDrop") {
        this.tab = "";
      }

      const self = this;
      const self2 = this;
      setTimeout(function() {
        self.$nextTick(function() {
          self.isloaded = !self.isloaded;
        })
        self2.$nextTick(function() {
          self2.isHide = !self2.isHide;
        })
      }, 1000);


      return (this.tab = tab);
    },

    async removeTodo(index,id) {

          this.todos.splice(index, 1)

          const res = await this.$axios.$put("http://127.0.0.1:3333/getchats" , {id : id , se_id: this.authUser.id});
   },

    async clicked_chat_button(){
    //  this.todos.push(this.msgtxt) ; 
      await axios.post("http://127.0.0.1:3333/storechats", {sender_id: this.authUser.id , txt: this.msgtxt})
    
      this.msgtxt = ""
    }
  },

}
</script>
