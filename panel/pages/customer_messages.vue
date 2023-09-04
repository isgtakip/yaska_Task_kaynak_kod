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
        {{ this.datatitle }}
      </v-toolbar-title>
    </v-toolbar>
    <DataTable
      :headers="headers"
      :items="getallnaces"
      :loading="loading"
      :items-length="getnacescount"
      @handle-options="handleOptions"
      @clicked-delete="clickedDelete"
      @clicked-detail="clickedDetail"
      :title="datatitle"
      :slots="slots"
      :keyOfItem="keyItem"
      :detailEnabled=false
      :show-select=true
      :singleSelect=false
      :showEditBtn=false
      @selected-items="selectedItems"
      :showExpand=false
      :singleExpand=false
      @changeMessageStatus="changeMessageStatus"
      :emailbuttonTooltip="emailbuttonTooltip"
      :emailIcon="emailIcon"
      ref="dt"
    >
    </Datatable>
  </v-card>
</template>
<script>
/*eslint-disable*/
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import Vue from "vue";
export default {
  meta: {
    auth: { authority: 1 },
    messageObj : {
      id:0,
      isReaded:0
    }
  },
  computed: {
    ...mapState({
      nace_kodlari: (state) => state.customer_messages.customer_messages,
    }),
    ...mapGetters({
      // you won't need to destructure if
      getnacescount: "customer_messages/getcustomermessagescount",
      getnaceperpage: "customer_messages/getcustomermessagesperpage",
      getallnaces: "customer_messages/getallcustomermessages",
    }),
  },

  methods: {
    ...mapActions({
      getCustomerMessages: "customer_messages/getCustomerMessages",
      setMessagesReaded : 'customer_messages/setMessagesReaded',
      setMessagesUnReaded : 'customer_messages/setMessagesUnReaded',
      deleteMessage: 'customer_messages/deleteMessage',
    }),
    changeMessageStatus(){

      this.loading = true;
      let isUnreadedCount = this.messageObj.reduce((counter, obj) => obj.isReaded == 0 ? counter += 1 : counter, 0);
      
          if (isUnreadedCount > 0) {
            //set message isreaded to 1 
            
            let obj = this.messageObj.map((item) => {
              return {
                id: item.id,
                isReaded: 1,
              };
            });

            this.setMessagesReaded(obj).then((result) => {
              this.loading = false;
              this.messageObj.forEach(item => { item.isReaded=1});
              this.emailbuttonTooltip="Okunmadı olarak işaretle";
              this.emailIcon="mdi-email"
            });
          }else{
            //set message isreaded to 0
            let obj = this.messageObj.map((item) => {
              return {
                id: item.id,
                isReaded: 0,
              };
            });
            this.setMessagesUnReaded(obj).then((result) => {
              this.loading = false;
               this.messageObj.forEach(item => {item.isReaded=0 });
               this.emailbuttonTooltip="Okundu olarak işaretle";
               this.emailIcon="mdi-email-open"
            });
          }
    },
    selectedItems(val){
      this.messageObj = val.map((item) => {
              return {
                id: item.id,
                isReaded: item.isReaded,
              };
      }).flat();
       let isUnreadedCount = val.reduce((counter, obj) => obj.isReaded == 0 ? counter += 1 : counter, 0);
       this.emailIcon = isUnreadedCount > 0 ? "mdi-email-open" : "mdi-email";
       this.emailbuttonTooltip = isUnreadedCount > 0 ? "Okundu olarak işaretle" : "Okunmadı olarak işaretle";
    },
    handleOptions(options, search) {
      let obj = {
        arama: search,
        page: options.page,
        per_page: options.itemsPerPage,
      };
      console.log(obj);
      this.loading = true;
      this.getCustomerMessages(obj).then((result) => {
        this.loading = false;
        console.log(result);
      });
    },
    clickedDelete(val) {
      this.loading = true;
      this.deleteMessage(val.id).then((result)=>{
        this.handleOptions(this.$refs.dt.options, "");
        console.log("deleted");
        this.loading=false;
      });
    },
    clickedDetail(val){
       console.log(val);
    },
    getColor(isReaded){
      return "font-size:bold;"
    }
  },
  data() {
    return {
      arama: "",
      headers: [
        { text: "Name", value: "Name", sortable: false },
        { text: "Email", value: "Email", sortable: false },
        { text: "Phone", value: "Phone", sortable: false },
        { text: "Company", value: "Company", sortable: false },
        {text: 'Actions', value: 'actions', sortable: false }
      ],
      datatitle: "Customer Messages",
      emailbuttonTooltip:"",
      emailIcon:"",
      loading: true,
      slots: [
        {
          Id: 1,
          slotName: "id",
        },
      ],
      keyItem: "id",
    };
  },
};
</script>
<style>
.bold{
  font-weight:bold;
  
}
</style>