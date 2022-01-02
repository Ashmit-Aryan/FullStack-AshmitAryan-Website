const state = {
    app: []
};

const getters = {
    allApps: (state) => state.app
};

const actions={
  AddApps({commit},app){ 
    commit('addNewApp', app)
  }
};

const mutations={
  addNewApp: (state,apps) => state.app = apps
};

export default{
    state,
    getters,
    actions,
    mutations
}