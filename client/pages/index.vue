<template>
  <Index />
</template>

<script>



import Index from "~/components/index.vue";


export default {

  methods: {},

  middleware: "auth",

  // async created(){
  //     const res = await this.callApi('get', 'myuser')
  //     console.log(res)
  // },

  components: {
   
    Index,
  },
};
</script>

<style></style>
