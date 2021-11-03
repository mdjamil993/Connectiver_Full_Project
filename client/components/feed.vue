<template>
  <div>
    <!-- Shimmer -->
    <template v-if="isHide">
      <div v-for="(item, index) in 2" :key="index" class="_card _mar_b20">
        <div class="_card_shimmer">
          <div class="_card_shimmer_profilePic _shim_animate"></div>
          <div class="_card_shimmer_details">
            <div class="_card_shimmer_name _shim_animate"></div>
            <div class="_card_shimmer_text _shim_animate"></div>
          </div>
        </div>

        <div class="_card_shimmer_status">
          <div class="_card_shimmer_status_text _shim_animate _shim_w90"></div>
          <div class="_card_shimmer_status_text _shim_animate _shim_w60"></div>
        </div>

        <div class="_card_shimmer_bottom">
          <div class="_card_shimmer_like like _shim_animate"></div>
          <div class="_card_shimmer_like comment _shim_animate"></div>
          <div class="_card_shimmer_like share _shim_animate"></div>
        </div>
      </div>
    </template>
    <!-- Shimmer -->


    

    <template v-if="isloaded">

      <div v-for="(post, i) in allPosts" :key="i">
        <p>{{post.user.first_name}}  {{post.user.last_name}}</p>
      </div>


      
      <div v-for="(post, i) in my_feed_posts" :key="i" class="_card _mar_b20">
        <div class="_card_top_all">
          <div class="_card_top">
            <a href="" class="_card_pic">
              <img
                alt=""
                title=""
                class="_card_img"
                src="/static/img/placeholder.png"
              />
            </a>
            <div class="_card_details">
              <div class="_card_name_all">
                <span class="_card_name_main">
                  <a href="" class="_card_name">
                    {{ post.user.first_name }} 
                  </a>

                  <!-- Hover Profile info -->
                  <div class="_pro_info">
                    <div class="_pro_info_cover">
                      <img
                        class="_pro_info_cover_img"
                        src="/static/img/image_1608226845923.jpeg"
                        alt=""
                        title=""
                      />
                    </div>

                    <div class="_pro_info_top">
                      <div class="_pro_info_pro">
                        <img
                          class="_pro_info_pro_img"
                          src="/static/img/pic.jpg"
                          alt=""
                          title=""
                        />
                      </div>

                      <div class="_pro_info_main">
                        <p class="_1text_overflow">
                          <router-link class="_pro_info_title" to="/profile">
                            Karen
                          </router-link>
                        </p>
                        <!-- <p><a href="" class="_pro_info_pre">3 followers</a></p> -->

                        <ul class="_pro_info_list">
                          <li><i class="fas fa-users"></i> 1 mutual friends</li>
                          <li>
                            <i class="fas fa-briefcase"></i> Whiter at
                            <strong> Home</strong>
                          </li>
                          <li>
                            <i class="fas fa-map-marker"></i> From
                            <strong>Latche</strong>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <ul class="_pro_info_buttons">
                      <li>
                        <button class="_2btn _btn_pre _btn_sm">
                          <i class="fas fa-check"></i> Friends
                        </button>
                      </li>
                      <li>
                        <button class="_3btn _btn_pre _btn_sm _pre_img">
                          <svg
                            class="_btn_img"
                            style="width: 15px; height: auto"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            xmlns:svgjs="http://svgjs.com/svgjs"
                            version="1.1"
                            x="0"
                            y="0"
                            viewBox="0 0 135.46666 135.46667"
                            xml:space="preserve"
                          >
                            <g>
                              <g xmlns="http://www.w3.org/2000/svg" id="layer1">
                                <path
                                  id="rect1437"
                                  d="m11.698046 20.664689c-6.4813896 0-11.69804983 5.21762-11.69804983 11.69843v.3843l58.39118183 40.80741c2.589688 1.80889 5.967679 2.70969 9.347488 2.7095 3.37798 0 6.755961-.900219 9.34565-2.7095l58.382344-40.79838v-.39294c0-6.48091-5.21666-11.69844-11.69815-11.69844zm-11.69804983 21.85919v60.579661c0 6.48091 5.21666023 11.69843 11.69804983 11.69843h112.070464c6.48149 0 11.69815-5.21752 11.69815-11.69843v-60.570441l-58.382344 40.798279c-2.589689 1.808991-5.96767 2.709501-9.34565 2.709501-3.379809 0-6.7578-.900219-9.347488-2.709501z"
                                  paint-order="fill markers stroke"
                                  fill="#0392f8"
                                  data-original="#000000"
                                ></path>
                              </g>
                            </g>
                          </svg>
                          Message
                        </button>
                      </li>
                    </ul>
                  </div>
                  <!-- Hover Profile info -->
                </span>
                <span class="_card_name_span">updated the profile picture</span>
              </div>
              <p class="_card_time">
                a few seconds ago
                <span class="_card_time_public">
                  <i class="fas fa-globe"></i>
                </span>
              </p>
            </div>
          </div>
          <div class="_card_top_more">
            <Dropdown trigger="click" placement="bottom-end">
              <a class="_more" href="javascript:void(0)">
                <i class="fas fa-angle-down"></i>
              </a>
              <DropdownMenu slot="list">
                <DropdownItem
                  ><p class="_drop_text _drop_pre_icon">
                    <i class="fas fa-bookmark"></i> Save Post
                  </p></DropdownItem
                >
                <DropdownItem
                  ><p class="_drop_text _drop_pre_icon">
                    <i class="fas fa-flag"></i> Report Post
                  </p></DropdownItem
                >
                <DropdownItem divided
                  ><p class="_drop_text _drop_pre_icon">
                    <i class="fas fa-thumbtack"></i> Pin Post
                  </p></DropdownItem
                >
                <DropdownItem
                  ><p class="_drop_text _drop_pre_icon">
                    <i class="fas fa-pencil-alt"></i> Edit Post
                  </p></DropdownItem
                >
                <DropdownItem
                  ><p class="_drop_text _drop_pre_icon">
                    <i class="fas fa-trash-alt"></i> Delete Post
                  </p></DropdownItem
                >
                <DropdownItem
                  ><p class="_drop_text _drop_pre_icon">
                    <i class="fas fa-eye-slash"></i> Turn off Commenting
                  </p></DropdownItem
                >
                <DropdownItem divided
                  ><p class="_drop_text _drop_pre_icon">
                    <i class="fas fa-link"></i> Open post in new tab
                  </p></DropdownItem
                >
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>

        <div class="_card_body">
          <p class="_card_text">
            <span>{{ post.post_text }}</span>
          </p>

          <!-- <div class="_card_status_pic_all">
            <div @click="isModal = true" class="_card_status_pic">
              <img
                alt=""
                title=""
                class="_card_status_img"
                src="/static/img/placeholder.png"
                lazy="loaded"
              />
            </div>
          </div> -->
        </div>

        <div class="_num_like_all">
          <div class="_num_like_left">
            <p class="_num_like_text _num_like_text_like">
              <span>{{ post.like.length }} like</span>
            </p>
          </div>
          <div class="_num_like_right">
            <p class="_num_like_text">{{ post.comment.length }} Comment</p>
          </div>
        </div>

        <div class="_1card_count">
          <ul class="_1card_count_list">
            <li @click="clickLike(post)" class="">
              <!-- React -->
              <!-- <div class="_all_react">
                <div class="reactions-container">
                  <div class="reactions_item duration-1 js_react-post">
                    <div class="emoji emoji--like">
                      <div class="emoji__hand">
                        <div class="emoji__thumb"></div>
                      </div>
                    </div>
                  </div>
                  <div class="reactions_item duration-2 js_react-post">
                    <div class="emoji emoji--love">
                      <div class="emoji__heart"></div>
                    </div>
                  </div>
                  <div class="reactions_item duration-3 js_react-post">
                    <div class="emoji emoji--haha">
                      <div class="emoji__face">
                        <div class="emoji__eyes"></div>
                        <div class="emoji__mouth">
                          <div class="emoji__tongue"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="reactions_item duration-4 js_react-post">
                    <div class="emoji emoji--yay">
                      <div class="emoji__face">
                        <div class="emoji__eyebrows"></div>
                        <div class="emoji__mouth"></div>
                      </div>
                    </div>
                  </div>
                  <div class="reactions_item duration-5 js_react-post">
                    <div class="emoji emoji--wow">
                      <div class="emoji__face">
                        <div class="emoji__eyebrows"></div>
                        <div class="emoji__eyes"></div>
                        <div class="emoji__mouth"></div>
                      </div>
                    </div>
                  </div>
                  <div class="reactions_item duration-6 js_react-post">
                    <div class="emoji emoji--sad">
                      <div class="emoji__face">
                        <div class="emoji__eyebrows"></div>
                        <div class="emoji__eyes"></div>
                        <div class="emoji__mouth"></div>
                      </div>
                    </div>
                  </div>
                  <div class="reactions_item duration-7 js_react-post">
                    <div class="emoji emoji--angry">
                      <div class="emoji__face">
                        <div class="emoji__eyebrows"></div>
                        <div class="emoji__eyes"></div>
                        <div class="emoji__mouth"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> -->
              <!-- React -->
              <div class="_1card_count_pic">
                <svg
                  class="_1card_count_img"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns:svgjs="http://svgjs.com/svgjs"
                  version="1.1"
                  x="0"
                  y="0"
                  viewBox="0 0 16 16"
                  style="enable-background: new 0 0 512 512"
                  xml:space="preserve"
                >
                  <g
                    transform="matrix(0.9799999999999999,0,0,0.9799999999999999,0.16000000000000103,0.16100000381469837)"
                  >
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#65676b"
                      d="M16 7.1c0-1.5-1.4-2.1-2.2-2.1h-2.2c0.4-1 0.7-2.2 0.5-3.1-0.5-1.8-2-1.9-2.5-1.9h-0.1c-0.4 0-0.6 0.2-0.8 0.5l-1 2.8-2.7 2.7h-5v9h5v-1c0.2 0 0.7 0.3 1.2 0.6 1.2 0.6 2.9 1.5 4.5 1.5 2.4 0 3.2-0.3 3.8-1.3 0.3-0.6 0.3-1.1 0.3-1.4 0.2-0.2 0.5-0.5 0.6-1s0.1-0.8 0-1.1c0.2-0.3 0.4-0.7 0.5-1.3 0-0.5-0.1-0.9-0.2-1.2 0.1-0.4 0.3-0.9 0.3-1.7zM2.5 13.5c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1zM14.7 9.1c0 0 0.2 0.2 0.2 0.7 0 0.6-0.4 0.9-0.4 0.9l-0.3 0.3 0.2 0.3c0 0 0.2 0.3 0 0.7-0.1 0.4-0.5 0.7-0.5 0.7l-0.3 0.3 0.2 0.4c0 0 0.2 0.4-0.1 0.9-0.2 0.4-0.4 0.7-2.9 0.7-1.4 0-3-0.8-4.1-1.4-0.8-0.4-1.3-0.6-1.7-0.6v0-6h0.1c0.2 0 0.4-0.1 0.6-0.2l2.8-2.8c0.1-0.1 0.1-0.2 0.2-0.3l1-2.7c0.5 0 1.2 0.2 1.4 1.1 0.1 0.6-0.1 1.6-0.6 2.8-0.1 0.3-0.1 0.5 0.1 0.8 0.1 0.2 0.4 0.3 0.7 0.3h2.5c0.1 0 1.2 0.2 1.2 1.1 0 0.8-0.3 1.2-0.3 1.2l-0.3 0.4 0.3 0.4z"
                      data-original="#444444"
                      style=""
                      class=""
                    />
                  </g>
                </svg>
              </div>
              Like
            </li>
            <li>
              <div class="_1card_count_pic">
                <svg
                  style="
                    enable-background: new 0 0 512 512;
                    margin-bottom: -5px;
                  "
                  class="_1card_count_img"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns:svgjs="http://svgjs.com/svgjs"
                  version="1.1"
                  x="0"
                  y="0"
                  viewBox="0 0 477.867 477.867"
                  xml:space="preserve"
                >
                  <g
                    transform="matrix(0.99,0,0,0.99,2.389335174560557,2.3893354907235675)"
                  >
                    <g xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M426.667,0.002H51.2C22.923,0.002,0,22.925,0,51.202v273.067c0,28.277,22.923,51.2,51.2,51.2h60.587l-9.284,83.456    c-1.035,9.369,5.721,17.802,15.09,18.837c4.838,0.534,9.674-1.023,13.292-4.279l108.919-98.014h186.863    c28.277,0,51.2-22.923,51.2-51.2V51.202C477.867,22.925,454.944,0.002,426.667,0.002z M443.733,324.269  c0,9.426-7.641,17.067-17.067,17.067H233.25c-4.217,0.001-8.284,1.564-11.418,4.386l-80.452,72.414l6.434-57.839    c1.046-9.367-5.699-17.809-15.067-18.856c-0.63-0.07-1.263-0.106-1.897-0.105H51.2c-9.426,0-17.067-7.641-17.067-17.067V51.202    c0-9.426,7.641-17.067,17.067-17.067h375.467c9.426,0,17.067,7.641,17.067,17.067V324.269z"
                          fill="#65676b"
                          data-original="#000000"
                          style=""
                          class=""
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              Comment
            </li>
            <li>
              <div class="_1card_count_pic">
                <svg
                  class="_1card_count_img"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns:svgjs="http://svgjs.com/svgjs"
                  version="1.1"
                  x="0"
                  y="0"
                  viewBox="0 0 512 512"
                  style="enable-background: new 0 0 512 512"
                  xml:space="preserve"
                >
                  <g>
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      d="m494.533 172.016-115.899-115.899c-9.563-9.563-19.263-14.412-28.829-14.412-13.134 0-28.472 9.99-28.472 38.145v39.458c-84.204 3.67-162.839 38.203-222.815 98.176-63.524 63.519-98.511 147.975-98.518 237.808-.001 6.454 4.128 12.186 10.25 14.229 1.562.521 3.163.773 4.748.773 4.627 0 9.106-2.147 11.995-5.991 70.817-94.265 177.438-149.973 294.34-154.372v38.849c0 28.154 15.337 38.145 28.471 38.146h.001c9.566 0 19.267-4.849 28.829-14.412l115.898-115.9c11.265-11.262 17.468-26.284 17.468-42.298 0-16.015-6.203-31.037-17.467-42.3zm-21.213 63.385-115.899 115.901c-2.223 2.223-4.064 3.627-5.422 4.48-.357-1.563-.666-3.858-.666-7.001v-54.131c0-8.284-6.716-15-15-15-66.647 0-130.332 15.27-189.283 45.384-42.32 21.619-81.006 50.721-113.767 85.379 21.794-147.697 149.396-261.431 303.05-261.431 8.284 0 15-6.716 15-15v-54.132c0-3.143.309-5.438.665-7 1.358.853 3.2 2.257 5.423 4.48l115.899 115.9c5.598 5.597 8.68 13.085 8.68 21.086 0 8-3.082 15.488-8.68 21.085z"
                      fill="#65676b"
                      data-original="#000000"
                      style=""
                    />
                  </g>
                </svg>
              </div>
              Share
            </li>
          </ul>
        </div>

        <div class="_1card_comment_box">
          <div class="_1card_comment_box_pic _load_div">
            <img
              class="_1card_comment_box_img"
              src="/static/img/male.jpg"
              alt=""
              title=""
            />
          </div>
          <div class="_1card_comment_box_input_icon">
            <div class="_1card_comment_box_input">
              <input
                @keyup.enter="addComment(post)"
                v-model="commentObj.comment_textArray[post.id]"
                type="text"
                placeholder="Write a comment..."
              />
            </div>
          </div>
        </div>

        <div
          v-for="(comment, i) in post.comment"
          :key="i"
          class="_comment_main"
        >
          <a href="" class="_comment_pic">
            <img
              alt=""
              title=""
              class="_comment_img"
              src="/static/img/male.jpg"
            />
          </a>
          <div class="_comment_details">
            <div class="_comment_details_top">
              <div class="_comment_name">
                <a href="" class="_comment_name_text">
                  {{ comment.user.first_name }} {{ comment.user.last_name }}
                </a>
              </div>

              <div class="_comment_more">
                <Dropdown trigger="click" placement="bottom-end">
                  <a class="_more" href="javascript:void(0)">
                    <i class="fas fa-angle-down"></i>
                  </a>

                  <DropdownMenu slot="list">
                    <DropdownItem><p class="_drop_text">Edit</p></DropdownItem>
                    <DropdownItem
                      ><p class="_drop_text">Delete</p></DropdownItem
                    >
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
            <div class="_comment_status">
              <p class="_comment_status_text">
                {{ comment.comment_text }}
              </p>
            </div>
            <div class="_comment_reply">
              <div class="_comment_reply_num">
                <ul class="_comment_reply_list">
                  <li class="">
                    <svg
                      style="
                        enable-background: new 0 0 512 512;
                        margin-bottom: 0px;
                      "
                      class="_1card_count_img"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns:svgjs="http://svgjs.com/svgjs"
                      version="1.1"
                      x="0"
                      y="0"
                      viewBox="0 0 16 16"
                      xml:space="preserve"
                    >
                      <g
                        transform="matrix(0.9799999999999999,0,0,0.9799999999999999,0.16000000000000103,0.16100000381469837)"
                      >
                        <path
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#65676b"
                          d="M16 7.1c0-1.5-1.4-2.1-2.2-2.1h-2.2c0.4-1 0.7-2.2 0.5-3.1-0.5-1.8-2-1.9-2.5-1.9h-0.1c-0.4 0-0.6 0.2-0.8 0.5l-1 2.8-2.7 2.7h-5v9h5v-1c0.2 0 0.7 0.3 1.2 0.6 1.2 0.6 2.9 1.5 4.5 1.5 2.4 0 3.2-0.3 3.8-1.3 0.3-0.6 0.3-1.1 0.3-1.4 0.2-0.2 0.5-0.5 0.6-1s0.1-0.8 0-1.1c0.2-0.3 0.4-0.7 0.5-1.3 0-0.5-0.1-0.9-0.2-1.2 0.1-0.4 0.3-0.9 0.3-1.7zM2.5 13.5c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1zM14.7 9.1c0 0 0.2 0.2 0.2 0.7 0 0.6-0.4 0.9-0.4 0.9l-0.3 0.3 0.2 0.3c0 0 0.2 0.3 0 0.7-0.1 0.4-0.5 0.7-0.5 0.7l-0.3 0.3 0.2 0.4c0 0 0.2 0.4-0.1 0.9-0.2 0.4-0.4 0.7-2.9 0.7-1.4 0-3-0.8-4.1-1.4-0.8-0.4-1.3-0.6-1.7-0.6v0-6h0.1c0.2 0 0.4-0.1 0.6-0.2l2.8-2.8c0.1-0.1 0.1-0.2 0.2-0.3l1-2.7c0.5 0 1.2 0.2 1.4 1.1 0.1 0.6-0.1 1.6-0.6 2.8-0.1 0.3-0.1 0.5 0.1 0.8 0.1 0.2 0.4 0.3 0.7 0.3h2.5c0.1 0 1.2 0.2 1.2 1.1 0 0.8-0.3 1.2-0.3 1.2l-0.3 0.4 0.3 0.4z"
                          data-original="#444444"
                          style=""
                          class=""
                        />
                      </g>
                    </svg>
                    Like
                  </li>
                  <li>
                    <svg
                      style="
                        enable-background: new 0 0 512 512;
                        margin-bottom: -2px;
                      "
                      class="_1card_count_img"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns:svgjs="http://svgjs.com/svgjs"
                      version="1.1"
                      x="0"
                      y="0"
                      viewBox="0 0 477.867 477.867"
                      xml:space="preserve"
                    >
                      <g
                        transform="matrix(0.99,0,0,0.99,2.389335174560557,2.3893354907235675)"
                      >
                        <g xmlns="http://www.w3.org/2000/svg">
                          <g>
                            <path
                              d="M426.667,0.002H51.2C22.923,0.002,0,22.925,0,51.202v273.067c0,28.277,22.923,51.2,51.2,51.2h60.587l-9.284,83.456    c-1.035,9.369,5.721,17.802,15.09,18.837c4.838,0.534,9.674-1.023,13.292-4.279l108.919-98.014h186.863    c28.277,0,51.2-22.923,51.2-51.2V51.202C477.867,22.925,454.944,0.002,426.667,0.002z M443.733,324.269  c0,9.426-7.641,17.067-17.067,17.067H233.25c-4.217,0.001-8.284,1.564-11.418,4.386l-80.452,72.414l6.434-57.839    c1.046-9.367-5.699-17.809-15.067-18.856c-0.63-0.07-1.263-0.106-1.897-0.105H51.2c-9.426,0-17.067-7.641-17.067-17.067V51.202    c0-9.426,7.641-17.067,17.067-17.067h375.467c9.426,0,17.067,7.641,17.067,17.067V324.269z"
                              fill="#65676b"
                              data-original="#000000"
                              style=""
                              class=""
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                    Reply
                  </li>
                </ul>
              </div>
              <div class="_comment_reply_time">
                <p class="_comment_reply_time_text">2 days ago</p>
              </div>
            </div>
            <div class="_reply" keys="rep0">
              <div
                v-for="(reply, i) in comment.commentReply"
                :key="i"
                class="_reply_main"
              >
                <a href="" class="_comment_pic">
                  <img
                    alt=""
                    title=""
                    class="_comment_img"
                    src="/static/img/male.jpg"
                  />
                </a>
                <div class="_comment_details">
                  <div class="_comment_details_top">
                    <div class="_comment_name">
                      <a href="" class="_comment_name_text">
                        {{ reply.user.first_name }}
                        {{ reply.user.last_name }}
                      </a>
                    </div>
                    <div class="_comment_more">
                      <Dropdown trigger="click" placement="bottom-end">
                        <a class="_more" href="javascript:void(0)">
                          <i class="fas fa-angle-down"></i>
                        </a>

                        <DropdownMenu slot="list">
                          <DropdownItem><p>Edit</p></DropdownItem>
                          <DropdownItem><p>Delete</p></DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                  </div>
                  <div class="_comment_status">
                    <p class="_comment_status_text">
                      {{ reply.reply_text }}
                    </p>
                  </div>
                  <div class="_comment_reply">
                    <div class="_comment_reply_num">
                      <ul class="_comment_reply_list">
                        <li class="">
                          <svg
                            style="
                              enable-background: new 0 0 512 512;
                              margin-bottom: 0px;
                            "
                            class="_1card_count_img"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            xmlns:svgjs="http://svgjs.com/svgjs"
                            version="1.1"
                            x="0"
                            y="0"
                            viewBox="0 0 16 16"
                            xml:space="preserve"
                          >
                            <g
                              transform="matrix(0.9799999999999999,0,0,0.9799999999999999,0.16000000000000103,0.16100000381469837)"
                            >
                              <path
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#65676b"
                                d="M16 7.1c0-1.5-1.4-2.1-2.2-2.1h-2.2c0.4-1 0.7-2.2 0.5-3.1-0.5-1.8-2-1.9-2.5-1.9h-0.1c-0.4 0-0.6 0.2-0.8 0.5l-1 2.8-2.7 2.7h-5v9h5v-1c0.2 0 0.7 0.3 1.2 0.6 1.2 0.6 2.9 1.5 4.5 1.5 2.4 0 3.2-0.3 3.8-1.3 0.3-0.6 0.3-1.1 0.3-1.4 0.2-0.2 0.5-0.5 0.6-1s0.1-0.8 0-1.1c0.2-0.3 0.4-0.7 0.5-1.3 0-0.5-0.1-0.9-0.2-1.2 0.1-0.4 0.3-0.9 0.3-1.7zM2.5 13.5c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1zM14.7 9.1c0 0 0.2 0.2 0.2 0.7 0 0.6-0.4 0.9-0.4 0.9l-0.3 0.3 0.2 0.3c0 0 0.2 0.3 0 0.7-0.1 0.4-0.5 0.7-0.5 0.7l-0.3 0.3 0.2 0.4c0 0 0.2 0.4-0.1 0.9-0.2 0.4-0.4 0.7-2.9 0.7-1.4 0-3-0.8-4.1-1.4-0.8-0.4-1.3-0.6-1.7-0.6v0-6h0.1c0.2 0 0.4-0.1 0.6-0.2l2.8-2.8c0.1-0.1 0.1-0.2 0.2-0.3l1-2.7c0.5 0 1.2 0.2 1.4 1.1 0.1 0.6-0.1 1.6-0.6 2.8-0.1 0.3-0.1 0.5 0.1 0.8 0.1 0.2 0.4 0.3 0.7 0.3h2.5c0.1 0 1.2 0.2 1.2 1.1 0 0.8-0.3 1.2-0.3 1.2l-0.3 0.4 0.3 0.4z"
                                data-original="#444444"
                                style=""
                                class=""
                              />
                            </g>
                          </svg>

                          Like
                        </li>
                      </ul>
                    </div>
                    <div class="_comment_reply_time">
                      <p class="_comment_reply_time_text">a few seconds ago</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="_1card_comment_box">
                <div class="_1card_comment_box_pic _load_div">
                  <img
                    alt=""
                    title=""
                    class="_1card_comment_box_img"
                    src="/static/img/male.jpg"
                  />
                </div>
                <div class="_1card_comment_box_input_icon">
                  <div class="_1card_comment_box_input">
                    <input
                      @keyup.enter="addCommentReply(comment)"
                      v-model="commentReplyObj.replyArray[comment.id]"
                      type="text"
                      placeholder="Write a reply..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="_card _mar_b20">
        <div class="_card_top_all">
          <div class="_card_top">
            <a href="" class="_card_pic">
              <img
                alt=""
                title=""
                class="_card_img"
                src="/static/img/placeholder.png"
              />
            </a>
            <div class="_card_details">
              <div class="_card_name_all">
                <span class="_card_name_main">
                  <a href="" class="_card_name">Kollol Chakraborty</a>

                  <!-- Hover Profile info -->
                  <div class="_pro_info">
                    <div class="_pro_info_cover">
                      <img
                        class="_pro_info_cover_img"
                        src="/static/img/image_1608226845923.jpeg"
                        alt=""
                        title=""
                      />
                    </div>

                    <div class="_pro_info_top">
                      <div class="_pro_info_pro">
                        <img
                          class="_pro_info_pro_img"
                          src="/static/img/pic.jpg"
                          alt=""
                          title=""
                        />
                      </div>

                      <div class="_pro_info_main">
                        <p class="_1text_overflow">
                          <router-link class="_pro_info_title" to="/profile">
                            Karen River
                          </router-link>
                        </p>
                        <!-- <p><a href="" class="_pro_info_pre">3 followers</a></p> -->

                        <ul class="_pro_info_list">
                          <li><i class="fas fa-users"></i> 1 mutual friends</li>
                          <li>
                            <i class="fas fa-briefcase"></i> Whiter at
                            <strong> Home</strong>
                          </li>
                          <li>
                            <i class="fas fa-map-marker"></i> From
                            <strong>Latche</strong>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <ul class="_pro_info_buttons">
                      <li>
                        <button class="_2btn _btn_pre _btn_sm">
                          <i class="fas fa-check"></i> Friends
                        </button>
                      </li>
                      <li>
                        <button class="_3btn _btn_pre _btn_sm _pre_img">
                          <svg
                            class="_btn_img"
                            style="width: 15px; height: auto"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            xmlns:svgjs="http://svgjs.com/svgjs"
                            version="1.1"
                            x="0"
                            y="0"
                            viewBox="0 0 135.46666 135.46667"
                            xml:space="preserve"
                          >
                            <g>
                              <g xmlns="http://www.w3.org/2000/svg" id="layer1">
                                <path
                                  id="rect1437"
                                  d="m11.698046 20.664689c-6.4813896 0-11.69804983 5.21762-11.69804983 11.69843v.3843l58.39118183 40.80741c2.589688 1.80889 5.967679 2.70969 9.347488 2.7095 3.37798 0 6.755961-.900219 9.34565-2.7095l58.382344-40.79838v-.39294c0-6.48091-5.21666-11.69844-11.69815-11.69844zm-11.69804983 21.85919v60.579661c0 6.48091 5.21666023 11.69843 11.69804983 11.69843h112.070464c6.48149 0 11.69815-5.21752 11.69815-11.69843v-60.570441l-58.382344 40.798279c-2.589689 1.808991-5.96767 2.709501-9.34565 2.709501-3.379809 0-6.7578-.900219-9.347488-2.709501z"
                                  paint-order="fill markers stroke"
                                  fill="#0392f8"
                                  data-original="#000000"
                                ></path>
                              </g>
                            </g>
                          </svg>
                          Message
                        </button>
                      </li>
                    </ul>
                  </div>
                  <!-- Hover Profile info -->
                </span>
                <span class="_card_name_span">updated the profile picture</span>
              </div>
              <p class="_card_time">
                a few seconds ago
                <span class="_card_time_public">
                  <i class="fas fa-globe"></i>
                </span>
              </p>
            </div>
          </div>
          <div class="_card_top_more">
            <Dropdown trigger="click" placement="bottom-end">
              <a class="_more" href="javascript:void(0)">
                <i class="fas fa-angle-down"></i>
              </a>
              <DropdownMenu slot="list">
                <DropdownItem
                  ><p class="_drop_text _drop_pre_icon">
                    <i class="fas fa-bookmark"></i> Save Post
                  </p></DropdownItem
                >
                <DropdownItem
                  ><p class="_drop_text _drop_pre_icon">
                    <i class="fas fa-flag"></i> Report Post
                  </p></DropdownItem
                >
                <DropdownItem divided
                  ><p class="_drop_text _drop_pre_icon">
                    <i class="fas fa-thumbtack"></i> Pin Post
                  </p></DropdownItem
                >
                <DropdownItem
                  ><p class="_drop_text _drop_pre_icon">
                    <i class="fas fa-pencil-alt"></i> Edit Post
                  </p></DropdownItem
                >
                <DropdownItem
                  ><p class="_drop_text _drop_pre_icon">
                    <i class="fas fa-trash-alt"></i> Delete Post
                  </p></DropdownItem
                >
                <DropdownItem
                  ><p class="_drop_text _drop_pre_icon">
                    <i class="fas fa-eye-slash"></i> Turn off Commenting
                  </p></DropdownItem
                >
                <DropdownItem divided
                  ><p class="_drop_text _drop_pre_icon">
                    <i class="fas fa-link"></i> Open post in new tab
                  </p></DropdownItem
                >
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>

        <div class="_card_body">
          <p class="_card_text"><span>What is your minddds</span></p>

          <div class="_cardMulti_pic_all">
            <div class="_cardMulti_pic_main">
              <div class="_cardMulti_pic">
                <img
                  alt=""
                  title=""
                  class="_cardMulti_img"
                  data-src="http://localhost:3000/uploads/image_1622964304963.png"
                  src="http://localhost:3000/uploads/image_1622964304963.png"
                  lazy="loaded"
                />
              </div>
            </div>
            <div class="_cardMulti_pic_main">
              <div class="_cardMulti_pic">
                <img
                  alt=""
                  title=""
                  class="_cardMulti_img"
                  data-src="http://localhost:3000/uploads/image_1622964304962.png"
                  src="http://localhost:3000/uploads/image_1622964304962.png"
                  lazy="loaded"
                />
              </div>
            </div>
            <div class="_cardMulti_pic_main">
              <div class="_cardMulti_pic">
                <img
                  alt=""
                  title=""
                  class="_cardMulti_img"
                  data-src="http://localhost:3000/uploads/image_1622964304983.png"
                  src="http://localhost:3000/uploads/image_1622964304983.png"
                  lazy="loaded"
                />
              </div>
            </div>
            <div class="_cardMulti_pic_main">
              <div class="_cardMulti_pic">
                <img
                  alt=""
                  title=""
                  class="_cardMulti_img"
                  data-src="http://localhost:3000/uploads/image_1622964304984.png"
                  src="http://localhost:3000/uploads/image_1622964304984.png"
                  lazy="loaded"
                />
              </div>
            </div>
            <div class="_cardMulti_pic_main _cardMulti_more">
              <div class="_cardMulti_pic">
                <img
                  alt=""
                  title=""
                  class="_cardMulti_img"
                  data-src="http://localhost:3000/uploads/image_1622964305001.png"
                  src="http://localhost:3000/uploads/image_1622964305001.png"
                  lazy="loaded"
                />
                <p class="_cardMulti_more_text">+3</p>
              </div>
            </div>
          </div>

          <!-- <div class="_card_status_pic_all">
                        <div @click="isModal = true" class="_card_status_pic"><img alt="" title="" class="_card_status_img" src="/static/img/placeholder.png" lazy="loaded"></div>
                    </div> -->
        </div>

        <div class="_num_like_all">
          <div class="_num_like_left">
            <p class="_num_like_text _num_like_text_like">
              <span>0 like</span>
            </p>
          </div>
          <div class="_num_like_right">
            <p class="_num_like_text">1 Comment</p>
          </div>
        </div>

        <div class="_1card_count">
          <ul class="_1card_count_list">
            <li class="">
              <!-- React -->
              <div class="_all_react">
                <div class="reactions-container">
                  <div class="reactions_item duration-1 js_react-post">
                    <div class="emoji emoji--like">
                      <div class="emoji__hand">
                        <div class="emoji__thumb"></div>
                      </div>
                    </div>
                  </div>
                  <div class="reactions_item duration-2 js_react-post">
                    <div class="emoji emoji--love">
                      <div class="emoji__heart"></div>
                    </div>
                  </div>
                  <div class="reactions_item duration-3 js_react-post">
                    <div class="emoji emoji--haha">
                      <div class="emoji__face">
                        <div class="emoji__eyes"></div>
                        <div class="emoji__mouth">
                          <div class="emoji__tongue"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="reactions_item duration-4 js_react-post">
                    <div class="emoji emoji--yay">
                      <div class="emoji__face">
                        <div class="emoji__eyebrows"></div>
                        <div class="emoji__mouth"></div>
                      </div>
                    </div>
                  </div>
                  <div class="reactions_item duration-5 js_react-post">
                    <div class="emoji emoji--wow">
                      <div class="emoji__face">
                        <div class="emoji__eyebrows"></div>
                        <div class="emoji__eyes"></div>
                        <div class="emoji__mouth"></div>
                      </div>
                    </div>
                  </div>
                  <div class="reactions_item duration-6 js_react-post">
                    <div class="emoji emoji--sad">
                      <div class="emoji__face">
                        <div class="emoji__eyebrows"></div>
                        <div class="emoji__eyes"></div>
                        <div class="emoji__mouth"></div>
                      </div>
                    </div>
                  </div>
                  <div class="reactions_item duration-7 js_react-post">
                    <div class="emoji emoji--angry">
                      <div class="emoji__face">
                        <div class="emoji__eyebrows"></div>
                        <div class="emoji__eyes"></div>
                        <div class="emoji__mouth"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- React -->
              <div class="_1card_count_pic">
                <svg
                  class="_1card_count_img"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns:svgjs="http://svgjs.com/svgjs"
                  version="1.1"
                  x="0"
                  y="0"
                  viewBox="0 0 16 16"
                  style="enable-background: new 0 0 512 512"
                  xml:space="preserve"
                >
                  <g
                    transform="matrix(0.9799999999999999,0,0,0.9799999999999999,0.16000000000000103,0.16100000381469837)"
                  >
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#65676b"
                      d="M16 7.1c0-1.5-1.4-2.1-2.2-2.1h-2.2c0.4-1 0.7-2.2 0.5-3.1-0.5-1.8-2-1.9-2.5-1.9h-0.1c-0.4 0-0.6 0.2-0.8 0.5l-1 2.8-2.7 2.7h-5v9h5v-1c0.2 0 0.7 0.3 1.2 0.6 1.2 0.6 2.9 1.5 4.5 1.5 2.4 0 3.2-0.3 3.8-1.3 0.3-0.6 0.3-1.1 0.3-1.4 0.2-0.2 0.5-0.5 0.6-1s0.1-0.8 0-1.1c0.2-0.3 0.4-0.7 0.5-1.3 0-0.5-0.1-0.9-0.2-1.2 0.1-0.4 0.3-0.9 0.3-1.7zM2.5 13.5c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1zM14.7 9.1c0 0 0.2 0.2 0.2 0.7 0 0.6-0.4 0.9-0.4 0.9l-0.3 0.3 0.2 0.3c0 0 0.2 0.3 0 0.7-0.1 0.4-0.5 0.7-0.5 0.7l-0.3 0.3 0.2 0.4c0 0 0.2 0.4-0.1 0.9-0.2 0.4-0.4 0.7-2.9 0.7-1.4 0-3-0.8-4.1-1.4-0.8-0.4-1.3-0.6-1.7-0.6v0-6h0.1c0.2 0 0.4-0.1 0.6-0.2l2.8-2.8c0.1-0.1 0.1-0.2 0.2-0.3l1-2.7c0.5 0 1.2 0.2 1.4 1.1 0.1 0.6-0.1 1.6-0.6 2.8-0.1 0.3-0.1 0.5 0.1 0.8 0.1 0.2 0.4 0.3 0.7 0.3h2.5c0.1 0 1.2 0.2 1.2 1.1 0 0.8-0.3 1.2-0.3 1.2l-0.3 0.4 0.3 0.4z"
                      data-original="#444444"
                      style=""
                      class=""
                    />
                  </g>
                </svg>
              </div>
              Like
            </li>
            <li>
              <div class="_1card_count_pic">
                <svg
                  style="
                    enable-background: new 0 0 512 512;
                    margin-bottom: -5px;
                  "
                  class="_1card_count_img"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns:svgjs="http://svgjs.com/svgjs"
                  version="1.1"
                  x="0"
                  y="0"
                  viewBox="0 0 477.867 477.867"
                  xml:space="preserve"
                >
                  <g
                    transform="matrix(0.99,0,0,0.99,2.389335174560557,2.3893354907235675)"
                  >
                    <g xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M426.667,0.002H51.2C22.923,0.002,0,22.925,0,51.202v273.067c0,28.277,22.923,51.2,51.2,51.2h60.587l-9.284,83.456    c-1.035,9.369,5.721,17.802,15.09,18.837c4.838,0.534,9.674-1.023,13.292-4.279l108.919-98.014h186.863    c28.277,0,51.2-22.923,51.2-51.2V51.202C477.867,22.925,454.944,0.002,426.667,0.002z M443.733,324.269  c0,9.426-7.641,17.067-17.067,17.067H233.25c-4.217,0.001-8.284,1.564-11.418,4.386l-80.452,72.414l6.434-57.839    c1.046-9.367-5.699-17.809-15.067-18.856c-0.63-0.07-1.263-0.106-1.897-0.105H51.2c-9.426,0-17.067-7.641-17.067-17.067V51.202    c0-9.426,7.641-17.067,17.067-17.067h375.467c9.426,0,17.067,7.641,17.067,17.067V324.269z"
                          fill="#65676b"
                          data-original="#000000"
                          style=""
                          class=""
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              Comment
            </li>
            <li>
              <div class="_1card_count_pic">
                <svg
                  class="_1card_count_img"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns:svgjs="http://svgjs.com/svgjs"
                  version="1.1"
                  x="0"
                  y="0"
                  viewBox="0 0 512 512"
                  style="enable-background: new 0 0 512 512"
                  xml:space="preserve"
                >
                  <g>
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      d="m494.533 172.016-115.899-115.899c-9.563-9.563-19.263-14.412-28.829-14.412-13.134 0-28.472 9.99-28.472 38.145v39.458c-84.204 3.67-162.839 38.203-222.815 98.176-63.524 63.519-98.511 147.975-98.518 237.808-.001 6.454 4.128 12.186 10.25 14.229 1.562.521 3.163.773 4.748.773 4.627 0 9.106-2.147 11.995-5.991 70.817-94.265 177.438-149.973 294.34-154.372v38.849c0 28.154 15.337 38.145 28.471 38.146h.001c9.566 0 19.267-4.849 28.829-14.412l115.898-115.9c11.265-11.262 17.468-26.284 17.468-42.298 0-16.015-6.203-31.037-17.467-42.3zm-21.213 63.385-115.899 115.901c-2.223 2.223-4.064 3.627-5.422 4.48-.357-1.563-.666-3.858-.666-7.001v-54.131c0-8.284-6.716-15-15-15-66.647 0-130.332 15.27-189.283 45.384-42.32 21.619-81.006 50.721-113.767 85.379 21.794-147.697 149.396-261.431 303.05-261.431 8.284 0 15-6.716 15-15v-54.132c0-3.143.309-5.438.665-7 1.358.853 3.2 2.257 5.423 4.48l115.899 115.9c5.598 5.597 8.68 13.085 8.68 21.086 0 8-3.082 15.488-8.68 21.085z"
                      fill="#65676b"
                      data-original="#000000"
                      style=""
                    />
                  </g>
                </svg>
              </div>
              Share
            </li>
          </ul>
        </div>

        <div class="_1card_comment_box">
          <div class="_1card_comment_box_pic _load_div">
            <img
              class="_1card_comment_box_img"
              src="/static/img/male.jpg"
              alt=""
              title=""
            />
          </div>
          <div class="_1card_comment_box_input_icon">
            <div class="_1card_comment_box_input">
              <input type="text" placeholder="Write a comment..." />
            </div>
          </div>
        </div>

        <div class="_comment_main">
          <a href="" class="_comment_pic">
            <img
              alt=""
              title=""
              class="_comment_img"
              src="/static/img/male.jpg"
            />
          </a>
          
          <div class="_comment_details">
            <div class="_comment_details_top">
              <div class="_comment_name">
                <a href="" class="_comment_name_text"> Hussain shipu </a>
              </div>

              <div class="_comment_more">
                <Dropdown trigger="click" placement="bottom-end">
                  <a class="_more" href="javascript:void(0)">
                    <i class="fas fa-angle-down"></i>
                  </a>

                  <DropdownMenu slot="list">
                    <DropdownItem><p class="_drop_text">Edit</p></DropdownItem>
                    <DropdownItem
                      ><p class="_drop_text">Delete</p></DropdownItem
                    >
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
            <div class="_comment_status">
              <p class="_comment_status_text">new comment</p>
            </div>
            <div class="_comment_reply">
              <div class="_comment_reply_num">
                <ul class="_comment_reply_list">
                  <li class="">
                    <svg
                      style="
                        enable-background: new 0 0 512 512;
                        margin-bottom: 0px;
                      "
                      class="_1card_count_img"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns:svgjs="http://svgjs.com/svgjs"
                      version="1.1"
                      x="0"
                      y="0"
                      viewBox="0 0 16 16"
                      xml:space="preserve"
                    >
                      <g
                        transform="matrix(0.9799999999999999,0,0,0.9799999999999999,0.16000000000000103,0.16100000381469837)"
                      >
                        <path
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#65676b"
                          d="M16 7.1c0-1.5-1.4-2.1-2.2-2.1h-2.2c0.4-1 0.7-2.2 0.5-3.1-0.5-1.8-2-1.9-2.5-1.9h-0.1c-0.4 0-0.6 0.2-0.8 0.5l-1 2.8-2.7 2.7h-5v9h5v-1c0.2 0 0.7 0.3 1.2 0.6 1.2 0.6 2.9 1.5 4.5 1.5 2.4 0 3.2-0.3 3.8-1.3 0.3-0.6 0.3-1.1 0.3-1.4 0.2-0.2 0.5-0.5 0.6-1s0.1-0.8 0-1.1c0.2-0.3 0.4-0.7 0.5-1.3 0-0.5-0.1-0.9-0.2-1.2 0.1-0.4 0.3-0.9 0.3-1.7zM2.5 13.5c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1zM14.7 9.1c0 0 0.2 0.2 0.2 0.7 0 0.6-0.4 0.9-0.4 0.9l-0.3 0.3 0.2 0.3c0 0 0.2 0.3 0 0.7-0.1 0.4-0.5 0.7-0.5 0.7l-0.3 0.3 0.2 0.4c0 0 0.2 0.4-0.1 0.9-0.2 0.4-0.4 0.7-2.9 0.7-1.4 0-3-0.8-4.1-1.4-0.8-0.4-1.3-0.6-1.7-0.6v0-6h0.1c0.2 0 0.4-0.1 0.6-0.2l2.8-2.8c0.1-0.1 0.1-0.2 0.2-0.3l1-2.7c0.5 0 1.2 0.2 1.4 1.1 0.1 0.6-0.1 1.6-0.6 2.8-0.1 0.3-0.1 0.5 0.1 0.8 0.1 0.2 0.4 0.3 0.7 0.3h2.5c0.1 0 1.2 0.2 1.2 1.1 0 0.8-0.3 1.2-0.3 1.2l-0.3 0.4 0.3 0.4z"
                          data-original="#444444"
                          style=""
                          class=""
                        />
                      </g>
                    </svg>
                    Like
                  </li>
                  <li>
                    <svg
                      style="
                        enable-background: new 0 0 512 512;
                        margin-bottom: -2px;
                      "
                      class="_1card_count_img"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns:svgjs="http://svgjs.com/svgjs"
                      version="1.1"
                      x="0"
                      y="0"
                      viewBox="0 0 477.867 477.867"
                      xml:space="preserve"
                    >
                      <g
                        transform="matrix(0.99,0,0,0.99,2.389335174560557,2.3893354907235675)"
                      >
                        <g xmlns="http://www.w3.org/2000/svg">
                          <g>
                            <path
                              d="M426.667,0.002H51.2C22.923,0.002,0,22.925,0,51.202v273.067c0,28.277,22.923,51.2,51.2,51.2h60.587l-9.284,83.456    c-1.035,9.369,5.721,17.802,15.09,18.837c4.838,0.534,9.674-1.023,13.292-4.279l108.919-98.014h186.863    c28.277,0,51.2-22.923,51.2-51.2V51.202C477.867,22.925,454.944,0.002,426.667,0.002z M443.733,324.269  c0,9.426-7.641,17.067-17.067,17.067H233.25c-4.217,0.001-8.284,1.564-11.418,4.386l-80.452,72.414l6.434-57.839    c1.046-9.367-5.699-17.809-15.067-18.856c-0.63-0.07-1.263-0.106-1.897-0.105H51.2c-9.426,0-17.067-7.641-17.067-17.067V51.202    c0-9.426,7.641-17.067,17.067-17.067h375.467c9.426,0,17.067,7.641,17.067,17.067V324.269z"
                              fill="#65676b"
                              data-original="#000000"
                              style=""
                              class=""
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                    Reply
                  </li>
                </ul>
              </div>
              <div class="_comment_reply_time">
                <p class="_comment_reply_time_text">2 days ago</p>
              </div>
            </div>
            <div class="_reply" keys="rep0">
              <div class="_reply_main">
                <a href="" class="_comment_pic">
                  <img
                    alt=""
                    title=""
                    class="_comment_img"
                    src="/static/img/male.jpg"
                  />
                </a>
                <div class="_comment_details">
                  <div class="_comment_details_top">
                    <div class="_comment_name">
                      <a href="" class="_comment_name_text"> Hussain shipu </a>
                    </div>
                    <div class="_comment_more">
                      <Dropdown trigger="click" placement="bottom-end">
                        <a class="_more" href="javascript:void(0)">
                          <i class="fas fa-angle-down"></i>
                        </a>

                        <DropdownMenu slot="list">
                          <DropdownItem><p>Edit</p></DropdownItem>
                          <DropdownItem><p>Delete</p></DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                  </div>
                  <div class="_comment_status">
                    <p class="_comment_status_text">sdfsdf</p>
                  </div>
                  <div class="_comment_reply">
                    <div class="_comment_reply_num">
                      <ul class="_comment_reply_list">
                        <li class="">
                          <svg
                            style="
                              enable-background: new 0 0 512 512;
                              margin-bottom: 0px;
                            "
                            class="_1card_count_img"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            xmlns:svgjs="http://svgjs.com/svgjs"
                            version="1.1"
                            x="0"
                            y="0"
                            viewBox="0 0 16 16"
                            xml:space="preserve"
                          >
                            <g
                              transform="matrix(0.9799999999999999,0,0,0.9799999999999999,0.16000000000000103,0.16100000381469837)"
                            >
                              <path
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#65676b"
                                d="M16 7.1c0-1.5-1.4-2.1-2.2-2.1h-2.2c0.4-1 0.7-2.2 0.5-3.1-0.5-1.8-2-1.9-2.5-1.9h-0.1c-0.4 0-0.6 0.2-0.8 0.5l-1 2.8-2.7 2.7h-5v9h5v-1c0.2 0 0.7 0.3 1.2 0.6 1.2 0.6 2.9 1.5 4.5 1.5 2.4 0 3.2-0.3 3.8-1.3 0.3-0.6 0.3-1.1 0.3-1.4 0.2-0.2 0.5-0.5 0.6-1s0.1-0.8 0-1.1c0.2-0.3 0.4-0.7 0.5-1.3 0-0.5-0.1-0.9-0.2-1.2 0.1-0.4 0.3-0.9 0.3-1.7zM2.5 13.5c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1zM14.7 9.1c0 0 0.2 0.2 0.2 0.7 0 0.6-0.4 0.9-0.4 0.9l-0.3 0.3 0.2 0.3c0 0 0.2 0.3 0 0.7-0.1 0.4-0.5 0.7-0.5 0.7l-0.3 0.3 0.2 0.4c0 0 0.2 0.4-0.1 0.9-0.2 0.4-0.4 0.7-2.9 0.7-1.4 0-3-0.8-4.1-1.4-0.8-0.4-1.3-0.6-1.7-0.6v0-6h0.1c0.2 0 0.4-0.1 0.6-0.2l2.8-2.8c0.1-0.1 0.1-0.2 0.2-0.3l1-2.7c0.5 0 1.2 0.2 1.4 1.1 0.1 0.6-0.1 1.6-0.6 2.8-0.1 0.3-0.1 0.5 0.1 0.8 0.1 0.2 0.4 0.3 0.7 0.3h2.5c0.1 0 1.2 0.2 1.2 1.1 0 0.8-0.3 1.2-0.3 1.2l-0.3 0.4 0.3 0.4z"
                                data-original="#444444"
                                style=""
                                class=""
                              />
                            </g>
                          </svg>

                          Like
                        </li>
                      </ul>
                    </div>
                    <div class="_comment_reply_time">
                      <p class="_comment_reply_time_text">a few seconds ago</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="_1card_comment_box">
                <div class="_1card_comment_box_pic _load_div">
                  <img
                    alt=""
                    title=""
                    class="_1card_comment_box_img"
                    src="/static/img/male.jpg"
                  />
                </div>
                <div class="_1card_comment_box_input_icon">
                  <div class="_1card_comment_box_input">
                    <input type="text" placeholder="Write a reply..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <!-- Image show modal -->
    <div v-if="isModal" class="_imageModal">
      <div class="_imageModal_main">
        <!-- Left -->
        <div class="_imageModal_left">
          <div class="_imageModal_pic">
            <img
              class="_imageModal_img"
              src="/static/img/file_1607448690151.jpg"
              alt=""
              title=""
            />
          </div>

          <p class="_imageModal_errow _next">
            <i class="fas fa-chevron-right"></i>
          </p>
          <p class="_imageModal_errow _pre">
            <i class="fas fa-chevron-left"></i>
          </p>
        </div>
        <!-- Left -->

        <!-- Right -->
        <div class="_imageModal_right">
          <p @click="isModal = false" class="_imageModal_right_close">
            <Icon type="md-close" />
          </p>

          <div class="_card_top">
            <a href="" class="_card_pic">
              <img
                alt=""
                title=""
                src="/static/img/placeholder.png"
                class="_card_img"
              />
            </a>

            <div class="_card_details">
              <div class="_card_name_all">
                <span class="_card_name_main">
                  <a href="" class="_card_name">Kollol Chakraborty</a>
                </span>
                <span class="_card_name_span">updated the profile picture</span>
              </div>
              <p class="_card_time">
                a few seconds ago
                <span class="_card_time_public">
                  <i class="fas fa-globe"></i>
                </span>
              </p>
            </div>
          </div>

          <div class="_card_body">
            <p class="_card_text"><span>What is your minds</span></p>
          </div>

          <div class="_num_like_all">
            <div class="_num_like_left">
              <p class="_num_like_text _num_like_text_like">
                <span>0 like</span>
              </p>
            </div>
            <div class="_num_like_right">
              <p class="_num_like_text">1 Comment</p>
            </div>
          </div>

          <div class="_1card_count">
            <ul class="_1card_count_list">
              <li class="">
                <!-- React -->
                <div class="_all_react">
                  <div class="reactions-container">
                    <div class="reactions_item duration-1 js_react-post">
                      <div class="emoji emoji--like">
                        <div class="emoji__hand">
                          <div class="emoji__thumb"></div>
                        </div>
                      </div>
                    </div>
                    <div class="reactions_item duration-2 js_react-post">
                      <div class="emoji emoji--love">
                        <div class="emoji__heart"></div>
                      </div>
                    </div>
                    <div class="reactions_item duration-3 js_react-post">
                      <div class="emoji emoji--haha">
                        <div class="emoji__face">
                          <div class="emoji__eyes"></div>
                          <div class="emoji__mouth">
                            <div class="emoji__tongue"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="reactions_item duration-4 js_react-post">
                      <div class="emoji emoji--yay">
                        <div class="emoji__face">
                          <div class="emoji__eyebrows"></div>
                          <div class="emoji__mouth"></div>
                        </div>
                      </div>
                    </div>
                    <div class="reactions_item duration-5 js_react-post">
                      <div class="emoji emoji--wow">
                        <div class="emoji__face">
                          <div class="emoji__eyebrows"></div>
                          <div class="emoji__eyes"></div>
                          <div class="emoji__mouth"></div>
                        </div>
                      </div>
                    </div>
                    <div class="reactions_item duration-6 js_react-post">
                      <div class="emoji emoji--sad">
                        <div class="emoji__face">
                          <div class="emoji__eyebrows"></div>
                          <div class="emoji__eyes"></div>
                          <div class="emoji__mouth"></div>
                        </div>
                      </div>
                    </div>
                    <div class="reactions_item duration-7 js_react-post">
                      <div class="emoji emoji--angry">
                        <div class="emoji__face">
                          <div class="emoji__eyebrows"></div>
                          <div class="emoji__eyes"></div>
                          <div class="emoji__mouth"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- React -->
                <div class="_1card_count_pic">
                  <svg
                    class="_1card_count_img"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:svgjs="http://svgjs.com/svgjs"
                    version="1.1"
                    x="0"
                    y="0"
                    viewBox="0 0 16 16"
                    style="enable-background: new 0 0 512 512"
                    xml:space="preserve"
                  >
                    <g
                      transform="matrix(0.9799999999999999,0,0,0.9799999999999999,0.16000000000000103,0.16100000381469837)"
                    >
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#65676b"
                        d="M16 7.1c0-1.5-1.4-2.1-2.2-2.1h-2.2c0.4-1 0.7-2.2 0.5-3.1-0.5-1.8-2-1.9-2.5-1.9h-0.1c-0.4 0-0.6 0.2-0.8 0.5l-1 2.8-2.7 2.7h-5v9h5v-1c0.2 0 0.7 0.3 1.2 0.6 1.2 0.6 2.9 1.5 4.5 1.5 2.4 0 3.2-0.3 3.8-1.3 0.3-0.6 0.3-1.1 0.3-1.4 0.2-0.2 0.5-0.5 0.6-1s0.1-0.8 0-1.1c0.2-0.3 0.4-0.7 0.5-1.3 0-0.5-0.1-0.9-0.2-1.2 0.1-0.4 0.3-0.9 0.3-1.7zM2.5 13.5c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1zM14.7 9.1c0 0 0.2 0.2 0.2 0.7 0 0.6-0.4 0.9-0.4 0.9l-0.3 0.3 0.2 0.3c0 0 0.2 0.3 0 0.7-0.1 0.4-0.5 0.7-0.5 0.7l-0.3 0.3 0.2 0.4c0 0 0.2 0.4-0.1 0.9-0.2 0.4-0.4 0.7-2.9 0.7-1.4 0-3-0.8-4.1-1.4-0.8-0.4-1.3-0.6-1.7-0.6v0-6h0.1c0.2 0 0.4-0.1 0.6-0.2l2.8-2.8c0.1-0.1 0.1-0.2 0.2-0.3l1-2.7c0.5 0 1.2 0.2 1.4 1.1 0.1 0.6-0.1 1.6-0.6 2.8-0.1 0.3-0.1 0.5 0.1 0.8 0.1 0.2 0.4 0.3 0.7 0.3h2.5c0.1 0 1.2 0.2 1.2 1.1 0 0.8-0.3 1.2-0.3 1.2l-0.3 0.4 0.3 0.4z"
                        data-original="#444444"
                        style=""
                        class=""
                      />
                    </g>
                  </svg>
                </div>
                Like
              </li>
              <li>
                <div class="_1card_count_pic">
                  <svg
                    style="
                      enable-background: new 0 0 512 512;
                      margin-bottom: -5px;
                    "
                    class="_1card_count_img"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:svgjs="http://svgjs.com/svgjs"
                    version="1.1"
                    x="0"
                    y="0"
                    viewBox="0 0 477.867 477.867"
                    xml:space="preserve"
                  >
                    <g
                      transform="matrix(0.99,0,0,0.99,2.389335174560557,2.3893354907235675)"
                    >
                      <g xmlns="http://www.w3.org/2000/svg">
                        <g>
                          <path
                            d="M426.667,0.002H51.2C22.923,0.002,0,22.925,0,51.202v273.067c0,28.277,22.923,51.2,51.2,51.2h60.587l-9.284,83.456    c-1.035,9.369,5.721,17.802,15.09,18.837c4.838,0.534,9.674-1.023,13.292-4.279l108.919-98.014h186.863    c28.277,0,51.2-22.923,51.2-51.2V51.202C477.867,22.925,454.944,0.002,426.667,0.002z M443.733,324.269  c0,9.426-7.641,17.067-17.067,17.067H233.25c-4.217,0.001-8.284,1.564-11.418,4.386l-80.452,72.414l6.434-57.839    c1.046-9.367-5.699-17.809-15.067-18.856c-0.63-0.07-1.263-0.106-1.897-0.105H51.2c-9.426,0-17.067-7.641-17.067-17.067V51.202    c0-9.426,7.641-17.067,17.067-17.067h375.467c9.426,0,17.067,7.641,17.067,17.067V324.269z"
                            fill="#65676b"
                            data-original="#000000"
                            style=""
                            class=""
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                Comment
              </li>
              <li>
                <div class="_1card_count_pic">
                  <svg
                    class="_1card_count_img"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:svgjs="http://svgjs.com/svgjs"
                    version="1.1"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    style="enable-background: new 0 0 512 512"
                    xml:space="preserve"
                  >
                    <g>
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="m494.533 172.016-115.899-115.899c-9.563-9.563-19.263-14.412-28.829-14.412-13.134 0-28.472 9.99-28.472 38.145v39.458c-84.204 3.67-162.839 38.203-222.815 98.176-63.524 63.519-98.511 147.975-98.518 237.808-.001 6.454 4.128 12.186 10.25 14.229 1.562.521 3.163.773 4.748.773 4.627 0 9.106-2.147 11.995-5.991 70.817-94.265 177.438-149.973 294.34-154.372v38.849c0 28.154 15.337 38.145 28.471 38.146h.001c9.566 0 19.267-4.849 28.829-14.412l115.898-115.9c11.265-11.262 17.468-26.284 17.468-42.298 0-16.015-6.203-31.037-17.467-42.3zm-21.213 63.385-115.899 115.901c-2.223 2.223-4.064 3.627-5.422 4.48-.357-1.563-.666-3.858-.666-7.001v-54.131c0-8.284-6.716-15-15-15-66.647 0-130.332 15.27-189.283 45.384-42.32 21.619-81.006 50.721-113.767 85.379 21.794-147.697 149.396-261.431 303.05-261.431 8.284 0 15-6.716 15-15v-54.132c0-3.143.309-5.438.665-7 1.358.853 3.2 2.257 5.423 4.48l115.899 115.9c5.598 5.597 8.68 13.085 8.68 21.086 0 8-3.082 15.488-8.68 21.085z"
                        fill="#65676b"
                        data-original="#000000"
                        style=""
                      />
                    </g>
                  </svg>
                </div>
                Share
              </li>
            </ul>
          </div>

          <div class="_imageModal_commet">
            <div class="_imageModal_commet_main _1scrollbar">
              <div class="_comment_main">
                <a href="" class="_comment_pic"
                  ><img
                    alt=""
                    title=""
                    src="/static/img/male.jpg"
                    class="_comment_img"
                /></a>
                <div class="_comment_details">
                  <div class="_comment_details_top">
                    <div class="_comment_name">
                      <a href="" class="_comment_name_text">
                        Kollol Chakraborty
                      </a>
                    </div>
                    <div class="_comment_more">
                      <div class="ivu-dropdown">
                        <div class="ivu-dropdown-rel">
                          <a href="javascript:void(0)" class="_more"
                            ><i class="fas fa-angle-down"></i
                          ></a>
                        </div>
                        <div
                          class="ivu-select-dropdown"
                          style="transform-origin: center top; display: none"
                        >
                          <ul class="ivu-dropdown-menu">
                            <li class="ivu-dropdown-item"><p>Edit</p></li>
                            <li class="ivu-dropdown-item"><p>Delete</p></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="_comment_status">
                    <p class="_comment_status_text">new comment</p>
                  </div>
                  <div class="_comment_reply">
                    <div class="_comment_reply_num">
                      <ul class="_comment_reply_list">
                        <li class="">
                          <svg
                            style="
                              enable-background: new 0 0 512 512;
                              margin-bottom: 0px;
                            "
                            class="_1card_count_img"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            xmlns:svgjs="http://svgjs.com/svgjs"
                            version="1.1"
                            x="0"
                            y="0"
                            viewBox="0 0 16 16"
                            xml:space="preserve"
                          >
                            <g
                              transform="matrix(0.9799999999999999,0,0,0.9799999999999999,0.16000000000000103,0.16100000381469837)"
                            >
                              <path
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#65676b"
                                d="M16 7.1c0-1.5-1.4-2.1-2.2-2.1h-2.2c0.4-1 0.7-2.2 0.5-3.1-0.5-1.8-2-1.9-2.5-1.9h-0.1c-0.4 0-0.6 0.2-0.8 0.5l-1 2.8-2.7 2.7h-5v9h5v-1c0.2 0 0.7 0.3 1.2 0.6 1.2 0.6 2.9 1.5 4.5 1.5 2.4 0 3.2-0.3 3.8-1.3 0.3-0.6 0.3-1.1 0.3-1.4 0.2-0.2 0.5-0.5 0.6-1s0.1-0.8 0-1.1c0.2-0.3 0.4-0.7 0.5-1.3 0-0.5-0.1-0.9-0.2-1.2 0.1-0.4 0.3-0.9 0.3-1.7zM2.5 13.5c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1zM14.7 9.1c0 0 0.2 0.2 0.2 0.7 0 0.6-0.4 0.9-0.4 0.9l-0.3 0.3 0.2 0.3c0 0 0.2 0.3 0 0.7-0.1 0.4-0.5 0.7-0.5 0.7l-0.3 0.3 0.2 0.4c0 0 0.2 0.4-0.1 0.9-0.2 0.4-0.4 0.7-2.9 0.7-1.4 0-3-0.8-4.1-1.4-0.8-0.4-1.3-0.6-1.7-0.6v0-6h0.1c0.2 0 0.4-0.1 0.6-0.2l2.8-2.8c0.1-0.1 0.1-0.2 0.2-0.3l1-2.7c0.5 0 1.2 0.2 1.4 1.1 0.1 0.6-0.1 1.6-0.6 2.8-0.1 0.3-0.1 0.5 0.1 0.8 0.1 0.2 0.4 0.3 0.7 0.3h2.5c0.1 0 1.2 0.2 1.2 1.1 0 0.8-0.3 1.2-0.3 1.2l-0.3 0.4 0.3 0.4z"
                                data-original="#444444"
                                style=""
                                class=""
                              />
                            </g>
                          </svg>
                          Like
                        </li>
                        <li>
                          <svg
                            style="
                              enable-background: new 0 0 512 512;
                              margin-bottom: -2px;
                            "
                            class="_1card_count_img"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            xmlns:svgjs="http://svgjs.com/svgjs"
                            version="1.1"
                            x="0"
                            y="0"
                            viewBox="0 0 477.867 477.867"
                            xml:space="preserve"
                          >
                            <g
                              transform="matrix(0.99,0,0,0.99,2.389335174560557,2.3893354907235675)"
                            >
                              <g xmlns="http://www.w3.org/2000/svg">
                                <g>
                                  <path
                                    d="M426.667,0.002H51.2C22.923,0.002,0,22.925,0,51.202v273.067c0,28.277,22.923,51.2,51.2,51.2h60.587l-9.284,83.456    c-1.035,9.369,5.721,17.802,15.09,18.837c4.838,0.534,9.674-1.023,13.292-4.279l108.919-98.014h186.863    c28.277,0,51.2-22.923,51.2-51.2V51.202C477.867,22.925,454.944,0.002,426.667,0.002z M443.733,324.269  c0,9.426-7.641,17.067-17.067,17.067H233.25c-4.217,0.001-8.284,1.564-11.418,4.386l-80.452,72.414l6.434-57.839    c1.046-9.367-5.699-17.809-15.067-18.856c-0.63-0.07-1.263-0.106-1.897-0.105H51.2c-9.426,0-17.067-7.641-17.067-17.067V51.202    c0-9.426,7.641-17.067,17.067-17.067h375.467c9.426,0,17.067,7.641,17.067,17.067V324.269z"
                                    fill="#65676b"
                                    data-original="#000000"
                                    style=""
                                    class=""
                                  />
                                </g>
                              </g>
                            </g>
                          </svg>
                          Reply
                        </li>
                      </ul>
                    </div>
                    <div class="_comment_reply_time">
                      <p class="_comment_reply_time_text">2 days ago</p>
                    </div>
                  </div>
                  <div keys="rep0" class="_reply">
                    <div class="_reply_main">
                      <a href="" class="_comment_pic">
                        <img
                          class="_comment_img"
                          src="/static/img/male.jpg"
                          alt=""
                          title=""
                        />
                      </a>
                      <div class="_comment_details">
                        <div class="_comment_details_top">
                          <div class="_comment_name">
                            <a href="" class="_comment_name_text">
                              Kollol Chakraborty
                            </a>
                          </div>
                          <div class="_comment_more">
                            <div class="ivu-dropdown">
                              <div class="ivu-dropdown-rel">
                                <a href="javascript:void(0)" class="_more"
                                  ><i class="fas fa-angle-down"></i
                                ></a>
                              </div>
                              <div
                                class="ivu-select-dropdown"
                                style="display: none"
                              >
                                <ul class="ivu-dropdown-menu">
                                  <li class="ivu-dropdown-item"><p>Edit</p></li>
                                  <li class="ivu-dropdown-item">
                                    <p>Delete</p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="_comment_status">
                          <p class="_comment_status_text">sdfsdf</p>
                        </div>
                        <div class="_comment_reply">
                          <div class="_comment_reply_num">
                            <ul class="_comment_reply_list">
                              <li>
                                <svg
                                  style="
                                    enable-background: new 0 0 512 512;
                                    margin-bottom: 0px;
                                  "
                                  class="_1card_count_img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlns:xlink="http://www.w3.org/1999/xlink"
                                  xmlns:svgjs="http://svgjs.com/svgjs"
                                  version="1.1"
                                  x="0"
                                  y="0"
                                  viewBox="0 0 16 16"
                                  xml:space="preserve"
                                >
                                  <g
                                    transform="matrix(0.9799999999999999,0,0,0.9799999999999999,0.16000000000000103,0.16100000381469837)"
                                  >
                                    <path
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="#65676b"
                                      d="M16 7.1c0-1.5-1.4-2.1-2.2-2.1h-2.2c0.4-1 0.7-2.2 0.5-3.1-0.5-1.8-2-1.9-2.5-1.9h-0.1c-0.4 0-0.6 0.2-0.8 0.5l-1 2.8-2.7 2.7h-5v9h5v-1c0.2 0 0.7 0.3 1.2 0.6 1.2 0.6 2.9 1.5 4.5 1.5 2.4 0 3.2-0.3 3.8-1.3 0.3-0.6 0.3-1.1 0.3-1.4 0.2-0.2 0.5-0.5 0.6-1s0.1-0.8 0-1.1c0.2-0.3 0.4-0.7 0.5-1.3 0-0.5-0.1-0.9-0.2-1.2 0.1-0.4 0.3-0.9 0.3-1.7zM2.5 13.5c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1zM14.7 9.1c0 0 0.2 0.2 0.2 0.7 0 0.6-0.4 0.9-0.4 0.9l-0.3 0.3 0.2 0.3c0 0 0.2 0.3 0 0.7-0.1 0.4-0.5 0.7-0.5 0.7l-0.3 0.3 0.2 0.4c0 0 0.2 0.4-0.1 0.9-0.2 0.4-0.4 0.7-2.9 0.7-1.4 0-3-0.8-4.1-1.4-0.8-0.4-1.3-0.6-1.7-0.6v0-6h0.1c0.2 0 0.4-0.1 0.6-0.2l2.8-2.8c0.1-0.1 0.1-0.2 0.2-0.3l1-2.7c0.5 0 1.2 0.2 1.4 1.1 0.1 0.6-0.1 1.6-0.6 2.8-0.1 0.3-0.1 0.5 0.1 0.8 0.1 0.2 0.4 0.3 0.7 0.3h2.5c0.1 0 1.2 0.2 1.2 1.1 0 0.8-0.3 1.2-0.3 1.2l-0.3 0.4 0.3 0.4z"
                                      data-original="#444444"
                                      style=""
                                      class=""
                                    />
                                  </g>
                                </svg>

                                Like
                              </li>
                            </ul>
                          </div>
                          <div class="_comment_reply_time">
                            <p class="_comment_reply_time_text">
                              a few seconds ago
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="_1card_comment_box">
                      <div class="_1card_comment_box_pic _load_div">
                        <img
                          class="_1card_comment_box_img"
                          alt=""
                          title=""
                          src="/static/img/male.jpg"
                        />
                      </div>
                      <div class="_1card_comment_box_input_icon">
                        <div class="_1card_comment_box_input">
                          <input type="text" placeholder="Write a reply..." />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="_imageModal_commet_statusBox">
              <div class="_1card_comment_box">
                <div class="_1card_comment_box_pic _load_div">
                  <img
                    src="/static/img/male.jpg"
                    alt=""
                    title=""
                    class="_1card_comment_box_img"
                  />
                </div>
                <div class="_1card_comment_box_input_icon">
                  <div class="_1card_comment_box_input">
                    <input type="text" placeholder="Write a comment..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Right -->
      </div>
    </div>
    <!-- Image show modal -->
  </div>
</template>





















<script>
import { mapGetters } from "vuex";
const axios = require("axios");
export default {
  computed: {
    ...mapGetters({
      allPosts: "getAllPosts",
      currentUserInfo: "getUserInfo",
    }),
  },
  data() {
    return {
      isloaded: false,
      isHide: true,
      isModal: false,

      commentObj: {
        comment_textArray: [],
        post_id: 0,
        user_id: 0,
        comment_text: "",
      },

      allPosts: [],

      commentReplyObj: {
        replyArray: [],
        reply_text: "",
        comment_id: 0,
        user_id: 0,
      },
    };
  },

  methods: {
    async clickLike(postObj) {
      const res = await this.callApi(
        "post",
        "http://localhost:3333/storeLike",
        postObj
      );
      if (res.status == 200) {
        // this.$router.push("/logIn")
        if (res.data != false) {
          console.log("Done");
        }
      }
    },
    async addComment(postObj) {
      this.commentObj.post_id = postObj.id;
      this.commentObj.user_id = this.currentUserInfo.id;
      this.commentObj.comment_text =
        this.commentObj.comment_textArray[postObj.id];
      const res = await this.callApi(
        "post",
        "http://localhost:3333/storeComment",
        this.commentObj
      );
      if (res.status == 200) {
        this.commentObj.comment_textArray.splice(postObj.id, 1);
        this.commentObj.post_id = 0;
        this.commentObj.user_id = 0;
        console.log("Done");
      }
    },
    async addCommentReply(commentObj) {
      this.commentReplyObj.comment_id = commentObj.id;
      this.commentReplyObj.user_id = this.currentUserInfo.id;
      this.commentReplyObj.reply_text =
        this.commentReplyObj.replyArray[commentObj.id];
      const res = await this.callApi(
        "post",
        "http://localhost:3333/storeCommentReply",
        this.commentReplyObj
      );
      if (res.status == 200) {
        this.commentReplyObj.replyArray.splice(commentObj.id, 1);
        this.commentReplyObj.reply_text = "";
        this.commentReplyObj.comment_id = 0;
        this.commentReplyObj.user_id = 0;
        console.log("RDone");
      }
    },
  },

  async created() {
    var self = this;
    var self2 = this;
    setTimeout(function () {
      self.$nextTick(function () {
        self.isloaded = true;
      });
      self2.$nextTick(function () {
        self2.isHide = false;
      });
    }, 1500);

    console.log("HI , I am printing !!!! ")

    const res = await axios.get("http://127.0.0.1:3333/showPosts");

    if(res.status == 200){
      this.allPosts = res.data ;
    }
  },
  beforeCreate() {

   // const res = await axios.get("http://127.0.0.1:3333/showPosts");
    // if (res.status == 200) {
    //   this.my_feed_posts = res.data;
    // }
    // axios
    //   .get("http://localhost:3333/showAllPosts")
    //   .then((response) => {
    //     // handle success
    //     //self.posts = response.data
    //     // this.incomeCategories = response.data;
    //     // this.allPosts = response.data;
    //     this.$store.commit("setAllPosts", response.data);
    //     //console.log(response);
    //   })
    //   .catch((error) => {
    //     // handle error
    //     console.log(error);
    //   });
  },
};
</script>
