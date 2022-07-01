import Vue from 'vue'
import Router from 'vue-router'
import frontpage from '@/components/frontpage'
import createoption from '@/components/createoption' 
import viewoption from '@/components/viewoption'
import deleteoption from '@/components/deleteoption'
Vue.use(Router)

export default new Router({
  routes: [ 
    {          
      path: '/front',
      name: 'frontpage', 
      component: frontpage
    },
    {
      path: '/create',   
      name: 'createoption',
      component: createoption
    },
    {
      path: '/view',
      name: 'viewption',
      components: viewoption 
    },
    {
      path: '/delete',
      name: 'deleteoption',
      component: deleteoption
    }
  ]
})
