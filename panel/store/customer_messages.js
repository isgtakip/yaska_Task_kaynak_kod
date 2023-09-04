/*eslint-disable*/
import Vue from 'vue';
export const state = () => ({
    customer_messages : [],
})
export const getters = {
    getallcustomermessages(state){
        return state.customer_messages.data
    },
    getcustomermessagescount(state){
        return state.customer_messages.total
    },
    getcustomermessagesperpage(state){
        return state.customer_messages.per_page
    },
}
export const mutations = {

    SET_CUSTOMER_MESSAGES_PER_PAGE(state,data){
        state.customer_messages=data
    },
    SET_MESSAGES_AS_READED(state,data){
        _.forEach( data, function( item ) {
        state.customer_messages.data[state.customer_messages.data.findIndex(p=>p.id == item.id)].isReaded = 1;
      });
    },
    SET_MESSAGES_AS_UNREADED(state,data){
        _.forEach( data, function( item ) {
        state.customer_messages.data[state.customer_messages.data.findIndex(p=>p.id == item.id)].isReaded = 0;
      });
    },
    DELETE_MESSAGE(state,id){
       let index = state.customer_messages.data.findIndex(p => p.id === id);
       state.customer_messages.data.splice(index, 1);
    }

 
}
export const actions = {

    async getCustomerMessages({commit},request){
           
        var params = new URLSearchParams();
        params.append("page", request.page);
        params.append("per_page",request.per_page);
        params.append("search", request.arama);
    
        
        var params_go = {
        params: params
        };
    
    
     return await this.$yaskaApi.$get('customer/messages', params_go).then(res=>{
        commit('SET_CUSTOMER_MESSAGES_PER_PAGE', res.original)
        return res.original;
     })},

     async setMessagesReaded({commit},request){

        var params= new URLSearchParams;
        params.append("messages",JSON.stringify(request))

        var gidecek = {
            params: params
        };


      return await this.$yaskaApi.$post(`/customer/message/updateMessageStatus`,null, gidecek).then(res=>{
        commit('SET_MESSAGES_AS_READED',request);
        return res.original;
      }) 
     },
     async setMessagesUnReaded({commit},request){

        var params= new URLSearchParams;
        params.append("messages",JSON.stringify(request))

        var gidecek = {
            params: params
        };

        return await this.$yaskaApi.$post(`/customer/message/updateMessageStatus`,null, gidecek).then(res=>{
            commit('SET_MESSAGES_AS_UNREADED',request);
            return res.original;
          }) 
        
     },
     async deleteMessage({commit},request){

        let res = await this.$yaskaApi.delete(`/customer/messages/${request}`); 
        commit('DELETE_MESSAGE',request);
     }
}