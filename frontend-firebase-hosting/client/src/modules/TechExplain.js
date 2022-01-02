const state = {
    techExp: []
};

const getters = {
    allTechExp: (state) => state.techExp
};

const actions={
  AddTechExp({commit},exp){ 
    commit('addTechExp', exp)
  }
};

const mutations={
  addTechExp: (state,exp) => state.techExp = exp
};

export default{
    state,
    getters,
    actions,
    mutations
}