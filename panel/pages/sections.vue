<template>
 <v-card
  flat>
  <v-toolbar
      color="primary"
      dark
      extended
      extension-height=64
      flat
    >
    <v-icon>mdi-magnify</v-icon>
     <v-toolbar-title
     style="margin-left:10px;">
        Bölümler
      </v-toolbar-title>
    </v-toolbar>
    <v-card
  eager
  class="mx-auto"
      max-width="90%"
      style="margin-top: -64px;"
  >
  <v-row
  class="pa-5">
  <v-col
       cols="12"
        md="3"
        sm="12"
        lg="3"
        class="pt-7">
         <v-card  elevation="0" outlined :disabled="loading">
         <v-card-title class="white--text primary " style="font-size:16px;">
     Bölümleri Sırala/Düzenle
      <v-spacer></v-spacer>
    </v-card-title>
        <v-divider></v-divider>
         <Container
    @drop="onDrop"
    lock-axis="y"
    :drop-placeholder="dropPlaceholderOptions"
     drag-handle-selector=".column-drag-handle"
    ><Draggable v-for="section in sectionslarim" :key="section.id">
        <div class="draggable-item pt-5 pb-5" @click="activate(section)" :class="{ active : active_el == section.id }">
          <span class="column-drag-handle" style="float:left; padding:0 10px;"><v-icon color="red" class="handle mt-0">mdi-cursor-move</v-icon></span>
          <span>{{section.Name}}</span>
        </div>
          </Draggable>
        </Container></v-card>
        <v-btn
        block
      color="blue"
      class="mt-5 white--text"
      :loading="loading"
      :disabled="loading || active_el==0"
      @click="saveSection"
    >Kaydet
      <v-icon
        right
        dark
      >
        mdi-cloud-upload
      </v-icon>
    </v-btn>
   <v-responsive class="border pa-4">
   Bölümleri sıralamak için ilgili itemi tutup taşıyın. Otomatik kaydedecektir. Ekstra Kaydet tuşuna basmanıza gerek yoktur.
</v-responsive>
        </v-col>
       <v-col
       cols="12"
        md="9"
        sm="12"
        lg="9"
        class="pt-7">
       <TextEditor
       v-model="content"
       :config="editorConfig"/>
      </div></v-col>
  </v-row>
  </v-card>
    </v-card>
</template>
<script>
/*eslint-disable*/
import { Container, Draggable } from "vue-smooth-dnd";
import { applyDrag, generateItems } from '../src/utils'
import { mapState,mapGetters,mapActions,mapMutations } from "vuex";
export default {
   computed:{
       sectionslarim: {
        get() {
          return this.$store.state.sections.sections
        },
        set(value) {
          this.$store.commit('sections/SET_SECTIONS', value)
        }
    },
      ...mapState({
        sections : state=> state.sections.sections,
      }),
      ...mapGetters({  // you won't need to destructure if 
        getSectionContentById: 'sections/getSectionContentById',
      }),         
    },
    async created() {
       await this.getSections().then(()=>{
         this.site_sections=this.sections;
       });
    },
    components: { Container, Draggable },
    methods: {
       ...mapActions(
        {
        getSections:'sections/getSections',
        updateSectionsOrder:'sections/updateSectionsOrder',
        editSections : 'sections/editSections'
        }),
        saveSection(){
          //only content change
          this.loading=true;
          let obj = {
            id : this.active_el,
            Html : this.content
          }
          this.editSections(obj).then(()=>{
              console.log("Başarılı");
              this.loading=false;
            })
        },
         onDrop(dropResult) {
          console.log(dropResult);
          console.log(this.sectionslarim);
            this.sectionslarim = applyDrag(this.sectionslarim, dropResult);
            let obj ={sections:this.sectionslarim}
            this.updateSectionsOrder(obj).then(()=>{
              console.log("Başarılı");
            })

         },
         activate(section) {
          this.active_el=section.id;
          this.sectionID=section.id;
         // this.baslikTXT=section.Name;
          console.log(section.id);
          //id ye göre içeriği getir
          this.content=  this.getSectionContentById(section.id);
        },
    },
   head() {
      return {
        script: [
          {
            src:
              'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
          }
        ],
        link: [
          {
            rel:"preconnect",
            href:"https://fonts.googleapis.com"
          },
          {
            rel:"preconnect",
            href:"https://fonts.gstatic.com",
            crossorigin:"anonymous"
          },
          {
            rel:"stylesheet",
            href:"https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;900&display=swap" 
          },
          {
            rel:'stylesheet',
            href:'https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css',
            integrity:"sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT",
            crossorigin:"anonymous",
          },
          {
            rel:'stylesheet',
            href:"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
          },
          {
            rel:'stylesheet',
            href:"https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css"
          },
          {
            rel:'stylesheet',
            href:"https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css"
          },
        ]
      }
   },
  data() {
    return {
        loading :false,
        sectionName:'',
         sectionID:0,
         sectionvalid:false,
         site_sections:[],
         active_el:0,
          dropPlaceholderOptions: {
                className: 'drop-preview',
                animationDuration: '150',
                showOnTop: true,
         },
         content: '',
         editorConfig: {
          width: 'auto',
          autoGrow_minHeight: 300,
          htmlSupport: {
            allow: [
                {
                    name: /.*/,
                    attributes: true,
                    classes: true,
                    styles: true
                }
            ]
}
}
    }
  }
}
</script>
<style>
.swiper{
  overflow:auto !important;
}
.cke_show_borders {
    overflow: scroll !important;
}
.draggable-item{
    border-bottom:1px solid #efefef;
    cursor:pointer;
}
.column-drag-handle{
    cursor:move;
}
.active{
    background-color: #efefef;
}
</style>
<style>
.container .container--fluid {
    max-width: 100% !important;
}
.container {
    max-width: 100% !important;
    width: 100% !important;
    padding: 12px !important;
    margin-right: auto !important;
    margin-left: auto !important;
}
hr {
    margin: 0 0 !important;
    color: inherit;
    border: 0;
    border-top: 1px solid;
    opacity: .25;
}
</style>
<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Inter", sans-serif;
  }
  
  p {
    color: #0b0a0a;
  }
  
  a {
    text-decoration: none !important;
    color: inherit !important;
  }
  
  img {
    /*max-width: 100%;*/
    height: auto;
  }
  
  select {
    font-weight: 500;
  }
  select option {
    font-weight: 500;
  }
  
  @media (max-width: 599.98px) {
    body p,
    body li,
    body a {
      font-size: 13px;
    }
    body select {
      font-size: 13px !important;
    }
    body ::placeholder {
      font-size: 13px !important;
    }
  }
  @media (min-width: 600px) {
    body p,
    body li,
    body a {
      font-size: 15px;
    }
  }
  
  .pointer {
    cursor: pointer;
  }
  
  ::placeholder {
    font-weight: 500 !important;
  }
  
  .fw-bold {
    font-weight: bold;
  }
  
  .fw-500 {
    font-weight: 500;
  }
  
  .fs-08 {
    font-size: 0.8rem;
  }
  
  .fs-07 {
    font-size: 0.7rem;
  }
  
  .text-white-60 {
    color: #b0afbd;
  }
  
  .bg-white-60 {
    background-color: #f7f6ff;
  }
  
  .bg-deep-blue {
    background-color: #100835;
  }
  
  .text-gold {
    color: #f7b00a;
  }
  
  .text-dark {
    color: #151414 !important;
  }
  
  .text-dark-2 {
    color: #2d2d4f;
  }
  
  .btn-deep-blue {
    background-color: #100835;
    color: white;
    transition: all 0.3s ease;
    border: 1px solid #100835;
  }
  .btn-deep-blue:hover, .btn-deep-blue:focus {
    transition: all 0.3s ease;
    background-color: #000 !important;
    color: white !important;
  }
  @media (max-width: 1199.98px) {
    .btn-deep-blue {
      font-size: 0.8rem !important;
    }
  }
  @media (min-width: 1200px) and (max-width: 1400px) {
    .btn-deep-blue {
      font-size: 0.85rem !important;
    }
  }
  
  .swiper-slide {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  @media (max-width: 991px) {
    .swiper-slide {
      width: 80%;
    }
  }
  
  #offcanvasRight {
    width: 80%;
    background-color: #f7f6ff;
  }
  #offcanvasRight .offcanvas-body li a {
    font-size: 1.3rem;
    padding-bottom: 20px;
    background: transparent;
    color: #0f0841;
  }
  
  .accordion-button:not(.collapsed) {
    color: #2d2d4f;
    font-weight: bold;
  }
  
  header a.nav-link {
    color: #7e8084;
    padding: 0 1.2rem;
    transition: all 0.3s ease;
    font-weight: 600;
    font-size: 0.9rem;
  }
  header a.nav-link.active, header a.nav-link:hover, header a.nav-link:focus {
    color: #0f0841;
  }
  
  section.info-hero-content li {
    font-weight: 300;
    padding-bottom: 10px;
  }
  section.info-hero-content li i {
    color: #f7b00a;
    margin-right: 5px;
  }
  section.info-hero-content li span {
    font-weight: bold;
  }
  @media (max-width: 768px) {
    section.info-hero, section.info-hero2 {
      font-weight: bold;
    }
  }
  
  section.info-hero2 {
    background-image: url('~assets/images/background-deep-blue.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  @media (max-width: 1199.98px) {
    section.info-hero2 {
      background: white !important;
    }
  }
  @media (max-width: 768px) {
    section.info-hero2 {
      height: 100% !important;
    }
  }
  
  section.services .services-item {
    width: 520px;
    max-width: 100%;
    font-size: 15px;
    line-height: 1.8;
  }
  
  section.services-2 .services-2-item {
    width: 100%;
  }
  @media (min-width: 600px) {
    section.services-2 .services-2-item {
      height: 350px;
    }
  }
  
  section.testimonial .swiper-slide {
    width: 100% !important;
  }
  section.testimonial .testimonial-item-comment {
    width: 550px;
    z-index: 33;
    padding: 30px;
    bottom: 30px;
    right: -30px;
  }
  @media (min-width: 600px) and (max-width: 991px) {
    section.testimonial .testimonial-item-comment {
      width: 400px;
      font-size: 0.9rem;
      padding: 20px;
    }
  }
  @media (max-width: 599.98px) {
    section.testimonial .testimonial-item-comment {
      width: 280px;
      height: 200px;
      padding: 10px;
      right: 0;
      bottom: 0;
    }
    section.testimonial .testimonial-item-comment p {
      font-size: 11px;
    }
    section.testimonial .testimonial-item-comment h3 {
      display: none;
    }
    section.testimonial .testimonial-item-comment img {
      width: 50px;
    }
  }
  
  section.faq .faq-content .accordion-item {
    padding: 20px 0;
    text-align: start;
  }
  @media (max-width: 576px) {
    section.faq .faq-content .accordion-item {
      padding: 5px 0 !important;
    }
    section.faq .faq-content .accordion-item .accordion-button {
      padding: 15px 0 !important;
    }
  }
  section.faq .faq-content .accordion-item .accordion-button {
    font-weight: bold;
  }
  section.faq .faq-content .accordion-item .accordion-button::after {
    position: relative !important;
    background: transparent !important;
  }
  section.faq .faq-content .accordion-item .accordion-button::before {
    flex-shrink: 0;
    width: var(--bs-accordion-btn-icon-width);
    height: var(--bs-accordion-btn-icon-width);
    content: "";
    background-image: url(~assets/images/plus-icon.png);
    background-repeat: no-repeat;
    background-size: var(--bs-accordion-btn-icon-width);
    transition: var(--bs-accordion-btn-icon-transition);
  }
  section.faq .faq-content .accordion-item .accordion-button:not(.collapsed)::before {
    background-image: url(~assets/images/dash-icon.png);
  }
  section.faq .faq-content .accordion-item .accordion-button span {
    margin-left: 20px;
  }
  section.faq .faq-content .accordion-item .accordion-body {
    color: #7e8084;
  }

 .ck-content ul {
    list-style-type: none !important;
}
  
  footer li {
    padding-bottom: 8px;
  }
  footer li a {
    font-weight: 500;
  }
  footer li a:hover {
    color: #ffc107 !important;
  }
  @media (min-width: 991px) {
    footer .company-border {
      border-top: 1px solid #cccccc;
    }
  }
  
  input[type=checkbox] {
    background-color: transparent !important;
    box-shadow: none !important;
    border: 1px solid #f7b00a !important;
  }
  input[type=checkbox]:checked {
    background-color: #f7b00a !important;
  }
  
  @media (max-width: 768px) {
    .sub-page-content .accept-mail-icon {
      width: 85%;
    }
  }
  
  @media (min-width: 768px) AND (max-width: 1200px) {
    .sub-page-content .accept-mail-icon {
      width: 45%;
    }
  }
  
  .order-info-item {
    background-color: #84d358;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    padding: 15px;
  }
  @media (max-width: 600px) {
    .order-info-item {
      height: 100px;
    }
  }
  @media (min-width: 600px) {
    .order-info-item span {
      font-size: 13px;
    }
  }
  @media (max-width: 599.98px) {
    .order-info-item span {
      font-size: 11px !important;
    }
  }
  .order-info-item p {
    font-size: 22px;
    margin: 0;
  }
  .order-info-item.active {
    background-color: transparent;
  }
  
  @media (min-width: 1200px) {
    .accept-page-wrapper {
      height: 100vh;
    }
  }
  
  .fw-600 {
    font-weight: 600;
  }
  
  .accept-page-color {
    color: #2b3436;
  }
  
  /*# sourceMappingURL=style.css.map */
  
  @media (max-width: 768px) {
    .info-hero-content{
      background-color: rgba(255, 255, 255,0.7);
  
      border-radius: 20px;
      padding: 10px;
    }
  }
</style>
