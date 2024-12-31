# 将原来 App.vue 中的内容移到这里

<template>
  <div class="windows-container">
    <el-scrollbar>
      <div class="windows-versions">
        <div v-for="version in windowsVersions" :key="version.name" class="version-card">
          <h2>{{ version.name }} ({{ version.year }})</h2>
          <div class="icons-grid">
            <div v-for="(icon, index) in version.icons" :key="icon.name" class="icon-item" :style="{ '--animation-order': index }">
              <img 
                :src="icon.url" 
                :alt="icon.name"
                @error="handleImageError"
                :title="icon.description"
              >
              <p>{{ icon.name }}</p>
              <p class="description">{{ icon.description }}</p>
            </div>
          </div>
          <p class="description">{{ version.description }}</p>
        </div>
      </div>
    </el-scrollbar>
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
.windows-container {
  padding: 20px;
  background: #008080;
  min-height: 100vh;
}

.windows-versions {
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 40px 20px;
}

.version-card {
  position: relative;
  background: #c0c0c0;
  border: 2px outset #fff;
  padding: 20px;
  margin-bottom: 30px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
}

.version-card h2 {
  color: #000;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin-bottom: 20px;
  padding: 5px 10px;
  background: linear-gradient(to right, #000080, #1084d0);
  color: #fff;
  border: 2px outset #fff;
}

.icons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  padding: 15px;
  background: #fff;
  border: 2px inset #888;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10px;
  background: #f0f0f0;
  border: 1px solid #999;
  transition: all 0.2s ease;
}

.icon-item:hover {
  background: #e0e0e0;
  border: 1px solid #666;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.icon-item img {
  width: 48px;
  height: 48px;
  margin-bottom: 10px;
  image-rendering: pixelated;
}

.icon-item p {
  color: #000;
  font-size: 12px;
  margin: 5px 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.description {
  margin-top: 15px;
  padding: 10px;
  background: #fff;
  border: 2px inset #888;
  color: #000;
  font-size: 12px;
  line-height: 1.5;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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

.error-image {
  opacity: 0.5;
  filter: grayscale(100%);
}

:deep(.el-scrollbar__bar.is-vertical) {
  width: 8px;
  background: rgba(255,255,255,0.1);
}

:deep(.el-scrollbar__thumb) {
  background: rgba(255,255,255,0.3);
  border-radius: 4px;
}
</style>
