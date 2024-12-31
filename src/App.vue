<template>
  <div class="app-container">
    <nav class="nav-menu">
      <router-link to="/" class="nav-link windows-style">Windows图标</router-link>
      <router-link to="/character-status" class="nav-link pixel-style">角色状态</router-link>
    </nav>
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :class="route.path === '/' ? 'windows-theme' : 'pixel-theme'" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
interface Icon {
  name: string;
  url: string;
  description: string;
}

interface WindowsVersion {
  name: string;
  year: string;
  description: string;
  icons: Icon[];
}

const windowsVersions: WindowsVersion[] = [
  {
    name: 'Windows 2000',
    year: '2000',
    description: '经典的专业外观，采用了更现代的界面设计，图标开始使用更多的颜色和细节。',
    icons: [
      { 
        name: '我的电脑', 
        url: 'https://learn.microsoft.com/en-us/windows/win32/uxguide/images/desktop-icon-1.png',
        description: 'Windows 2000的我的电脑图标'
      },
      { 
        name: 'Internet Explorer', 
        url: 'https://learn.microsoft.com/en-us/windows/win32/uxguide/images/ie-icon-2000.png',
        description: 'Windows 2000的IE浏览器图标'
      },
      { 
        name: '网络邻居', 
        url: 'https://learn.microsoft.com/en-us/windows/win32/uxguide/images/network-2000.png',
        description: 'Windows 2000的网络邻居图标'
      },
      { 
        name: '回收站', 
        url: 'https://learn.microsoft.com/en-us/windows/win32/uxguide/images/recycle-2000.png',
        description: 'Windows 2000的回收站图标'
      }
    ]
  },
  {
    name: 'Windows XP',
    year: '2001',
    description: '引入了Luna主题，图标采用了更鲜艳的颜色和3D效果，成为了经典的设计。',
    icons: [
      { 
        name: '我的电脑', 
        url: 'https://learn.microsoft.com/en-us/windows/win32/uxguide/images/mycomputer-xp.png',
        description: 'Windows XP的我的电脑图标'
      },
      { 
        name: 'Internet Explorer', 
        url: 'https://learn.microsoft.com/en-us/windows/win32/uxguide/images/ie-xp.png',
        description: 'Windows XP的IE浏览器图标'
      },
      { 
        name: '网络邻居', 
        url: 'https://learn.microsoft.com/en-us/windows/win32/uxguide/images/network-xp.png',
        description: 'Windows XP的网络邻居图标'
      },
      { 
        name: '控制面板', 
        url: 'https://learn.microsoft.com/en-us/windows/win32/uxguide/images/control-panel-xp.png',
        description: 'Windows XP的控制面板图标'
      }
    ]
  },
  {
    name: 'Windows Vista/7',
    year: '2006-2009',
    description: '采用Aero玻璃效果，图标更加精致，带有光泽感和真实感。',
    icons: [
      { 
        name: '计算机', 
        url: 'https://learn.microsoft.com/en-us/windows/win32/uxguide/images/computer-vista.png',
        description: 'Windows Vista/7的计算机图标'
      },
      { 
        name: 'Internet Explorer', 
        url: 'https://learn.microsoft.com/en-us/windows/win32/uxguide/images/ie-vista.png',
        description: 'Windows Vista/7的IE浏览器图标'
      },
      { 
        name: '网络', 
        url: 'https://learn.microsoft.com/en-us/windows/win32/uxguide/images/network-vista.png',
        description: 'Windows Vista/7的网络图标'
      },
      { 
        name: '控制面板', 
        url: 'https://learn.microsoft.com/en-us/windows/win32/uxguide/images/control-panel-vista.png',
        description: 'Windows Vista/7的控制面板图标'
      }
    ]
  },
  {
    name: 'Windows 8/8.1',
    year: '2012-2013',
    description: '转向扁平化设计，图标更加简洁，采用了Metro设计语言。',
    icons: [
      { 
        name: '此电脑', 
        url: 'https://learn.microsoft.com/en-us/windows/win32/uxguide/images/pc-win8.png',
        description: 'Windows 8的此电脑图标'
      },
      { 
        name: 'Internet Explorer', 
        url: 'https://learn.microsoft.com/en-us/windows/win32/uxguide/images/ie-win8.png',
        description: 'Windows 8的IE浏览器图标'
      },
      { 
        name: '应用商店', 
        url: 'https://learn.microsoft.com/en-us/windows/win32/uxguide/images/store-win8.png',
        description: 'Windows 8的应用商店图标'
      },
      { 
        name: '设置', 
        url: 'https://learn.microsoft.com/en-us/windows/win32/uxguide/images/settings-win8.png',
        description: 'Windows 8的设置图标'
      }
    ]
  },
  {
    name: 'Windows 10',
    year: '2015',
    description: '结合了扁平化和立体感，图标设计更加统一和现代。',
    icons: [
      { 
        name: '此电脑', 
        url: 'https://learn.microsoft.com/en-us/windows/win32/uxguide/images/pc-win10.png',
        description: 'Windows 10的此电脑图标'
      },
      { 
        name: 'Microsoft Edge', 
        url: 'https://learn.microsoft.com/en-us/windows/win32/uxguide/images/edge-win10.png',
        description: 'Windows 10的Edge浏览器图标'
      },
      { 
        name: '设置', 
        url: 'https://learn.microsoft.com/en-us/windows/win32/uxguide/images/settings-win10.png',
        description: 'Windows 10的设置图标'
      },
      { 
        name: '应用商店', 
        url: 'https://learn.microsoft.com/en-us/windows/win32/uxguide/images/store-win10.png',
        description: 'Windows 10的应用商店图标'
      }
    ]
  },
  {
    name: 'Windows 11',
    year: '2021',
    description: '采用Fluent Design设计语言，图标更加圆润，充满现代感。',
    icons: [
      { 
        name: '此电脑', 
        url: 'https://learn.microsoft.com/en-us/windows/win32/uxguide/images/pc-win11.png',
        description: 'Windows 11的此电脑图标'
      },
      { 
        name: 'Microsoft Edge', 
        url: 'https://learn.microsoft.com/en-us/windows/win32/uxguide/images/edge-win11.png',
        description: 'Windows 11的Edge浏览器图标'
      },
      { 
        name: '设置', 
        url: 'https://learn.microsoft.com/en-us/windows/win32/uxguide/images/settings-win11.png',
        description: 'Windows 11的设置图标'
      },
      { 
        name: '应用商店', 
        url: 'https://learn.microsoft.com/en-us/windows/win32/uxguide/images/store-win11.png',
        description: 'Windows 11的应用商店图标'
      }
    ]
  }
];

// 图片加载错误处理
const handleImageError = (e: Event) => {
  const img = e.target as HTMLImageElement;
  img.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxyZWN0IHg9IjMiIHk9IjMiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgcng9IjIiIHJ5PSIyIj48L3JlY3Q+PGNpcmNsZSBjeD0iOC41IiBjeT0iOC41IiByPSIxLjUiPjwvY2lyY2xlPjxwb2x5bGluZSBwb2ludHM9IjIxIDE1IDEwIDIxIDMgMTUiPjwvcG9seWxpbmU+PC9zdmc+';
  img.classList.add('error-image');
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  background: #000;
}

.app-container {
  min-height: 100vh;
  background: #000;
}

.nav-menu {
  padding: 10px 20px;
  display: flex;
  gap: 20px;
  position: sticky;
  top: 0;
  z-index: 100;
  background: #1a1a1a;
  border-bottom: 2px solid #333;
}

.nav-link {
  text-decoration: none;
  padding: 8px 20px;
  font-size: 14px;
  transition: all 0.3s ease;
}

/* Windows 风格按钮 */
.windows-style {
  background: linear-gradient(to bottom, #666, #444);
  border: 2px outset #888;
  color: #fff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.windows-style:hover {
  background: linear-gradient(to bottom, #777, #555);
}

.windows-style.router-link-active {
  background: linear-gradient(to bottom, #444, #222);
  border: 2px inset #666;
}

/* 像素风格按钮 */
.pixel-style {
  background: #000066;
  border: 2px solid #4444ff;
  color: #fff;
  font-family: 'Press Start 2P', monospace;
  image-rendering: pixelated;
}

.pixel-style:hover {
  background: #0000aa;
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(0, 0, 255, 0.4);
}

.pixel-style.router-link-active {
  background: #0000ff;
  border-color: #8888ff;
  box-shadow: 0 0 15px rgba(0, 0, 255, 0.6);
}

/* 主题样式 */
.windows-theme {
  background: linear-gradient(135deg, #2a2a2a, #1a1a1a);
}

.pixel-theme {
  background: #000066;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@font-face {
  font-family: 'Press Start 2P';
  src: url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
}

.windows-versions {
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 40px 20px;
}

.version-card {
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 30px;
  backdrop-filter: blur(10px);
  transform-style: preserve-3d;
  transition: transform 0.6s ease-out;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

.version-card:hover {
  transform: translateY(-10px) rotateX(5deg) rotateY(5deg);
}

.version-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 15px;
  background: linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
  transform: translateZ(-1px);
}

.version-card h2 {
  color: #fff;
  margin-bottom: 30px;
  font-size: 2rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
  transform: translateZ(20px);
  border-bottom: 2px solid rgba(255,255,255,0.1);
  padding-bottom: 15px;
}

.icons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 30px;
  margin-bottom: 30px;
  transform-style: preserve-3d;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transform-style: preserve-3d;
  transition: transform 0.3s ease;
}

.icon-item:hover {
  transform: translateZ(30px) scale(1.1);
}

.icon-item img {
  width: 64px;
  height: 64px;
  margin-bottom: 15px;
  filter: drop-shadow(0 5px 15px rgba(0,0,0,0.3));
  transform: translateZ(10px);
  transition: transform 0.3s ease, filter 0.3s ease;
  object-fit: contain;
}

.icon-item:hover img {
  filter: drop-shadow(0 8px 20px rgba(0,0,0,0.4));
  transform: translateZ(40px);
}

.icon-item p {
  color: rgba(255,255,255,0.9);
  font-size: 1rem;
  margin: 0;
  transform: translateZ(15px);
  text-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.icon-item .description {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.7);
  margin-top: 10px;
}

.description {
  color: rgba(255,255,255,0.7);
  font-size: 1rem;
  line-height: 1.8;
  margin: 0;
  transform: translateZ(10px);
  padding: 20px;
  background: rgba(255,255,255,0.05);
  border-radius: 10px;
  backdrop-filter: blur(5px);
}

:deep(.el-scrollbar__wrap) {
  max-height: calc(100vh - 40px);
}

@keyframes float {
  0% {
    transform: translateZ(20px);
  }
  50% {
    transform: translateZ(30px);
  }
  100% {
    transform: translateZ(20px);
  }
}

.icon-item {
  animation: float 3s ease-in-out infinite;
  animation-delay: calc(var(--animation-order) * 0.2s);
}

@media (max-width: 768px) {
  .icons-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .version-card {
    padding: 20px;
  }
  
  .version-card h2 {
    font-size: 1.5rem;
  }
}

/* 添加滚动条样式 */
:deep(.el-scrollbar__bar.is-vertical) {
  width: 8px;
  background: rgba(255,255,255,0.1);
}

:deep(.el-scrollbar__thumb) {
  background: rgba(255,255,255,0.3);
  border-radius: 4px;
}

.error-image {
  opacity: 0.5;
  filter: grayscale(100%);
}
</style>
