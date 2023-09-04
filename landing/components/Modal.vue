<template>
<div
:class="_class"
:id="_id"
:data-bs-keyboard="data_bs_keyboard"
:tabindex="tabindex"
:aria-labelledby="aria_labelledby"
:aria-hidden="aria_hidden">
<nuxt-content :document="content()"/>
</div>
</template>
<script>
/*eslint-disable*/
export default {
    name:'Modal',
    methods: {
            content() {
            return this.contents.filter(p => p.slug == this.aria_labelledby)[0];
            }
    },  
    props: 
    {
    contents:{
        type:Array,
        default() {
            return []
        }
    },
    _class: {
      type: String,
      default:"",
    },
    _id: {
      type: String,
      default:"",
    },
    data_bs_keyboard: {
      type: String,
      default:"",
    },
    tabindex: {
      type: String,
      default:"",
    },
    aria_labelledby: {
      type: String,
      default:"",
    },
     aria_hidden: {
      type: String,
      default:"",
    },
  },
    data () {
      return {

      }
    }
}
</script>

