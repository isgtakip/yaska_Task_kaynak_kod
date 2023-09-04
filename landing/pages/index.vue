<template>
<div>
<nuxt-content :document="content_filter('startseite')"/>
<nuxt-content :document="content_filter('before-after-first')"/>
<div eager v-for="section in sections['original']" :key="section.id" v-html="section.Html"></div>
<nuxt-content :document="content_filter('uber-uns')"/>
<nuxt-content :document="content_filter('faq')"/>
<nuxt-content :document="content_filter('before-after')"/>
<nuxt-content :document="content_filter('kontakt')"/>
<nuxt-content :document="content_filter('modal-agb-wrapper')"/>
<nuxt-content :document="content_filter('modal-impressum-wrapper')"/>
<nuxt-content :document="content_filter('modal-daten-wrapper')"/>
<nuxt-content :document="content_filter('modal-leistungen-wrapper')"/>
<Modal
v-for="modal in definedmodals"
:key="modal._id"
:_class="modal._class"
:_id="modal._id"
:data_bs_keyboard="modal.data_bs_keyboard"
:tabindex="modal.tabindex"
:aria_labelledby="modal.aria_labelledby"
:aria_hidden="modal.aria_hidden"
:contentIndex="modal.content_index"
:contents="contents"/>
  </div>
</template>
<script>
/*eslint-disable*/
import { mapState,mapGetters,mapActions,mapMutations } from "vuex";
import { init } from '../src/utils'
export default {
  methods: {
        content_filter(slug) {
        return this.contents.filter(p => p.slug == slug)[0];
        },
  }, 
mounted(){
 init();
  },
  data() {
      return {
        searchQuery: '',
        index:0,
        definedmodals: [
          {
            _class: 'modal fade',
            _id:'priceModal',
            data_bs_keyboard:'false',
            tabindex:'-1',
            aria_labelledby:"staticBackdropLabel",
            aria_hidden:"true",
          },
          {
            _class: 'modal fade',
            _id:'secondpriceModal',
            data_bs_keyboard:'false',
            tabindex:'-1',
            aria_labelledby:"secondstaticBackdropLabel",
            aria_hidden:"true",
          }
        ]
      }
  },
  async asyncData({ $content, params }) {
    const contents = await $content().fetch();
    const sections = await fetch("https://okansari.com.tr/api/public/sections").then((res) => res.json());
    return {contents,sections}
  },
  layout:'default',
  name: 'IndexPage',
 }
</script>
