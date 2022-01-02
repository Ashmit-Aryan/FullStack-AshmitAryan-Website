const state = {
    techNews: []
};

const getters = {
    allNews: (state) => state.techNews
};

const actions={
  AddNews({commit},news){ 
    commit('addNews', news)
  }
};

const mutations={
  addNews: (state,news) => state.techNews = news
};

export default{
    state,
    getters,
    actions,
    mutations
}