const https = require('https');
const fs = require('fs');
const path = require('path');

// Windows官方图标URL映射
const iconUrls = {
  'win11': {
    'pc': 'https://learn.microsoft.com/en-us/windows/images/pc-icon.png',
    'edge': 'https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/images/edge-logo.png',
    'settings': 'https://learn.microsoft.com/en-us/windows/images/settings-icon.png',
    'store': 'https://learn.microsoft.com/en-us/windows/images/store-icon.png'
  },
  // 添加其他Windows版本的图标URL
};

// 创建目录
const createDirectories = () => {
  const versions = ['win2000', 'winxp', 'vista', 'win7', 'win8', 'win10', 'win11'];
  const baseDir = path.join(__dirname, '../public/icons');
  
  versions.forEach(version => {
    const dir = path.join(baseDir, version);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
};

// 下载图标
const downloadIcon = (url, filename) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(filename);
        response.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          resolve();
        });
      } else {
        reject(new Error(`Failed to download: ${response.statusCode}`));
      }
    }).on('error', reject);
  });
};

// 主函数
async function main() {
  createDirectories();
  
  for (const [version, icons] of Object.entries(iconUrls)) {
    console.log(`Downloading icons for ${version}...`);
    for (const [name, url] of Object.entries(icons)) {
      const filename = path.join(__dirname, `../public/icons/${version}/${name}.png`);
      try {
        await downloadIcon(url, filename);
        console.log(`Downloaded ${name}.png`);
      } catch (error) {
        console.error(`Error downloading ${name}.png:`, error);
      }
    }
  }
}

main().catch(console.error);
