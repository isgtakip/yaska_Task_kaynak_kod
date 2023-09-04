<template>
  <v-card
  eager
  class="mx-auto"
      max-width="90%"
      style="margin-top: -64px;"
  >
   <v-toolbar flat>
   <v-tooltip right>
      <template v-slot:activator="{ on, attrs }">
      <v-btn
   icon
   v-show="btnShow"
   v-bind="attrs"
   v-on="on"
   @click="changeMessageStatus">
          <v-icon>{{emailIcon}}</v-icon>
        </v-btn>
      </template>
      <span>{{emailbuttonTooltip}}</span>
    </v-tooltip>
        <v-spacer></v-spacer>
          <v-text-field
        eager
        v-model="search"
        append-icon="mdi-magnify"
        label="Arama"
        single-line
        hide-details
      ></v-text-field>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
      <v-divider></v-divider>
    <v-data-table
      v-model="selectedArray"
       eager
      :loading="loading"
      :headers="headers"
      :items="items"
      :search="search"
      :show-expand="showExpand"
      :single-expand="singleExpand"
      :expanded.sync="expanded"
      :item-key="keyOfItem"
      @item-expanded="loadDetails"
      :hide-default-footer="paginationShow"
      :disable-pagination="disablePagination"
      :server-items-length="itemsLength"
      :options.sync="options"
      :footer-props="footerProps"
      :showSelect="showSelect"
      :single-select="singleSelect"
      @click:row="rowClick"
      @item-selected="itemselected"
      @input="enterSelect"
      :item-class="itemStyles"
    >
    <template v-slot:expanded-item="{ headers }">
      <td :colspan="headers.length">
        <slot name="expanded"></slot>
      </td>
    </template>
    <template v-for="slot in slots" v-slot:[`item.${slot.slotName}`]="{ item }">
      <slot :name="slot.slotName" :degisken="item"></slot>
    </template>

     <template v-slot:[`item.actions`]="{ item }">
        <v-icon
            v-if="detailEnabled"
            small
            @click="detItem(item)">mdi-eye</v-icon>
         <v-icon
            small
            v-if="showEditBtn"
            @click="editItem(item)">mdi-pencil</v-icon>
          <v-icon
            small
            v-if="showDeleteBtn"
            @click="deleteItem(item)">mdi-delete</v-icon>
      </template>
</v-data-table>
  </v-card>
</template>
<script>
/*eslint-disable*/
import _ from 'lodash';
  export default {
    name: "DataTable",
    props:{  
    readbtn: {
      type:Boolean,
      default:false
    },
    headers: {
      type: Array,
      default: null
    },
    slots:{
      type:Array,
      default:null
    },
    items: {
      type: Array,
      default: function () { return [] }
    },
    title:{
      type:String,
      default:null
    },
    showExpand:{
      type:Boolean,
      default:false
    },
    singleExpand:{
      type:Boolean,
      default:false
    },
    keyOfItem:{
      type:String,
      default:null
    },
    loading:{
      type:Boolean,
      default:false
    },
    searchPorperyt:{
      type:Boolean,
      default:true
    },
    paginationShow:{
      type:Boolean,
      default:false
    },
    disablePagination:{
      type:Boolean,
      default:false
    },
    detailEnabled:{
      type:Boolean,
      default:false
    },
    itemsLength:{
      type:Number,
      default:0,
    },
    showSelect:{
      type:Boolean,
      default:false
    },
    singleSelect:{
      type:Boolean,
      default:false
    },
    showDeleteBtn:{
      type:Boolean,
      default:true
    },
    showEditBtn:{
      type:Boolean,
      default:true
    },
    emailbuttonTooltip:{
      type:String,
      default:"",
    },
    emailIcon:{
      type:String,
      default:"mdi-email",
    }
    },
    data () {
      return {
        selectedArray:[],
        search: '', 
        btnShow: false,
        expanded:[],
        loadingbtn:false,
        footerProps: {'items-per-page-options': [10, 20,50, 100]},
        options: {
          page:1,
          itemsPerPage:10,
        },
      }
    },
    watch:{
       options: {
        handler () {
            this.selectedArray = [];
            this.$emit("handle-options",this.options,this.search)
        },
        deep: true,
        },

        search: _.debounce(function(){
           this.options.page=1;
           this.selectedArray = [];
           this.$emit("handle-options",this.options,this.search)
        }, 300)

    },
    methods:{
        itemStyles: function (item) {
            return item.isReaded ? 'normal' : 'bold'
        },
        changeMessageStatus(){
          this.$emit("changeMessageStatus");
        },
        enterSelect(val){
          this.$emit("selected-items",val)
          //total selected items count higher than zero show button
          this.btnShow = val.length > 0 ? true : false;
          //is any total unread messages icon button envolope else closed envelope
        },
        itemselected(selection){
           this.$emit('clicked-row',selection.item)
        },
        rowClick(item, row){
         row.select(false);
        },
        loadDetails(val){
          this.$emit('row-click', val.item)
        },

        editItem(val){
            this.$emit('clicked-edit', val)
        },
        deleteItem(val){
            this.selectedArray = [];
            this.$emit('clicked-delete', val)
        },
        detItem(val){
          this.$emit('clicked-detail', val)
        }
    }
  }
</script>
<style>
 .bold{
  font-weight:bold;
 }
 .normal{
font-weight:normal;
 }
</style>