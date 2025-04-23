import {createStore} from 'vuex'


export default createStore({
    state:{
        user: { name: 'John Doe', email: 'fake@email.com', username: 'jd123'},
        itemnos:[{itemno:1,itemname:'Apollo',avail:true},{itemno:2,itemname:'Jing',avail:false}],
        itemnos2:[],
        posts: [],
        someString: 'etc'
      },
      getters:{
        // arrow function
        postsCount: state => state.posts.length,
    
        // traditional function
        postsCount: function(state){
          return state.posts.length
        },
    
        // method shorthand
        postsCount(state){
          return state.posts.length
        },
    
        // can access other getters
        //postsCountMessage: (state, getters) => ${getters.postsCount} posts available
      },
      mutations:{
        // convention to uppercase mutation names
        INSERT_POST(state, post){
                state.itemnos2.push(post)
        },
        INSERT_ERROR(state, error){
            state.errors.push(error)
        },
        INCREMENT_USER_POSTS_COUNT(state, error){
          state.user.postsCount++
        },
        SET_INVENTORY(state, itemnos2) {
          
          state.itemnos2 = itemnos2;
        },
        Update_Inventory_Avail(state, ItemID) {
          state.itemnos2 = state.itemnos2.map(itemnos2 => {
            if (itemnos2.id === ItemID) {
              //itemnos2.quantity += 1;
              itemnos2.avail=!itemnos2.avail;
              console.log(itemnos2.avail)
            }
            return itemnos2;
          });
        },
      },
      actions:{
        async insertPost({commit}, payload){
           //make some kind of ajax request 
           try{
             await doAjaxRequest(payload)
    
             // can commit multiple mutations in an action
             commit('INSERT_POST', payload)
             commit('INCREMENT_USER_POSTS_COUNT')
           }catch(error){
            commit('INSERT_ERROR', error)
           }
        },
        async getItems({commit}, payload){
          //make some kind of ajax request 
          //console.log('GETITEMS')
          try{
            const res = await fetch('http://localhost:3000/inventory')
            
            const data = await res.json();
            // can commit multiple mutations in an action
            //console.log(data)
            commit('SET_INVENTORY', data);
          }catch(error){
           commit('INSERT_ERROR', error)
          }
       },
       Update_Inventory_Avail({ commit }, ItemID) {
        commit("Update_Inventory_Avail", ItemID);
      },
      Insert_Inventory({ commit }, payload) {
        commit("INSERT_POST", payload);
      }
      }
  })