const state= {
    contactLinks: [
        {
          name: "Email",
          value: "Ashmit Aryan",
          link: "mailto:ashmitaryan@ashmitaryan.me",
          icon: "email"
        },
        {
          name: "LinkedIn",
          value: "Ashmit Aryan",
          link: "https://www.linkedin.com/in/ashmit-aryan/",
          icon: "linkedin"
        },
        {
          name: "Github",
          value: "Ashmit Aryan",
          link: "https://github.com/Ashmit-Aryan/",
          icon: "github"
        },
        {
          name: "Instagram",
          value: "Ashmit Aryan",
          link: "https://www.instagram.com/_the_ashmit_aryan_/",
          icon: "instagram"
        },
        {
            name:'WhatsApp',
            value:'Ashmit Aryan',
            link:'https://wa.me/917549378874?text=Hii+There+%21+%2C+I+Want+a+Help+From+You',
            icon:'whatsapp'

        },
        {
            name:'Twitter',
            value:'Ashmit Aryan',
            link:'https://twitter.com/_Ashmit_Aryan_',
            icon:'twitter'

        }
    ]
}
const getters = {
    getcontactLinks: (state) => state.contactLinks
};

const actions={
  AddContact({commit},contact){ 
    commit('addNewContact', contact)
  }
};

const mutations={
  addNewContact: (state,contact) => state.app.unshift(contact)
};

export default{
    state,
    getters,
    actions,
    mutations
}