import { createRouter, createWebHashHistory } from 'vue-router'
import WindowsIcons from '../views/WindowsIcons.vue'
import CharacterStatus from '../views/CharacterStatus.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'windows-icons',
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
