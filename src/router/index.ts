import { createRouter, createWebHashHistory } from 'vue-router'
import WindowsIcons from '../views/WindowsIcons.vue'
import CharacterStatus from '../views/CharacterStatus.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: WindowsIcons
    },
    {
      path: '/character-status',
      name: 'character-status',
      component: CharacterStatus
    }
  ]
})

export default router
