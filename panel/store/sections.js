/*eslint-disable*/
import Vue from 'vue';
export const state = () => ({
sections : [],
})
export const mutations = {
    SET_SECTIONS(state,data){
        state.sections= data;
    },
    EDIT_SECTION(state,data){
        const ogIndex = state.sections.findIndex(t => t.id === data.id)
        //Vue.set(state.sections, ogIndex, data);
        state.sections[state.sections.findIndex(p=>p.id == data.id)].Html = data.Html;
    },
}

export const getters = {
    getSectionContentById: (state) => (id) => {
        return state.sections.find(p => p.id === id).Html;
    }
}

export const actions = {

    async getSections({commit},request){
        const sections = await this.$yaskaApi.$get(`/sections`)
        commit('SET_SECTIONS',sections.original); 
    },


    async updateSectionsOrder({commit},request){
        
        var params= new URLSearchParams;
        params.append("sections",JSON.stringify(request.sections))

        var gidecek = {
            params: params
        };
        await this.$yaskaApi.$post(`/sections`,null, gidecek)
    },

    async editSections ({commit},request){

        console.log(request);
        var params = new URLSearchParams;
        params.append("id",request.id);
        params.append("Html",request.Html);

        var gidecek = {
            params:params
        }

        let res= await this.$yaskaApi.$put(`/sections/${request.id}`,null, gidecek);
        commit('EDIT_SECTION',request);
    },


}
