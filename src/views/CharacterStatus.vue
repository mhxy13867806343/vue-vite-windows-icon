<template>
  <div class="retro-game">
    <!-- 角色列表视图 -->
    <div v-if="!selectedCharacter" class="character-list">
      <div class="window">
        <div class="window-content">
          <div v-for="char in characters" :key="char.name" 
               class="character-item" 
               @click="selectCharacter(char)">
            <div class="char-sprite">
              <img :src="char.sprite" :alt="char.name">
            </div>
            <div class="char-info">
              <div class="char-type">{{ char.type }}</div>
              <div class="char-name">{{ char.name }}</div>
              <div class="stats">
                <div>HP {{ char.hp }}/{{ char.maxHp }}</div>
                <div>MP {{ char.mp }}/{{ char.maxMp }}</div>
                <div>LV {{ char.level }}</div>
              </div>
              <div class="exp">升级所需: {{ char.expNeeded }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 角色详情视图 -->
    <div v-else class="character-detail">
      <div class="window">
        <div class="window-header">
          {{ selectedCharacter.name }} {{ selectedCharacter.type }}
          <button class="pixel-button" @click="selectedCharacter = null">返回</button>
        </div>
        <div class="window-content">
          <div class="char-main-info">
            <img :src="selectedCharacter.sprite" :alt="selectedCharacter.name">
            <div class="stats-primary">
              <div>HP {{ selectedCharacter.hp }}/{{ selectedCharacter.maxHp }}</div>
              <div>MP {{ selectedCharacter.mp }}/{{ selectedCharacter.maxMp }}</div>
              <div>LV {{ selectedCharacter.level }}</div>
            </div>
          </div>
          
          <div class="stats-detail">
            <div class="stat-row">
              <span class="stat-label">力量</span>
              <span class="stat-value">{{ selectedCharacter.stats.strength }}</span>
            </div>
            <div class="stat-row">
              <span class="stat-label">敏捷</span>
              <span class="stat-value">{{ selectedCharacter.stats.agility }}</span>
            </div>
            <div class="stat-row">
              <span class="stat-label">体力</span>
              <span class="stat-value">{{ selectedCharacter.stats.vitality }}</span>
            </div>
            <div class="stat-row">
              <span class="stat-label">魔力</span>
              <span class="stat-value">{{ selectedCharacter.stats.magic }}</span>
            </div>
            <div class="stat-row">
              <span class="stat-label">攻击</span>
              <span class="stat-value">{{ selectedCharacter.stats.attack }}</span>
            </div>
            <div class="stat-row">
              <span class="stat-label">防御</span>
              <span class="stat-value">{{ selectedCharacter.stats.defense }}</span>
            </div>
          </div>

          <div class="abilities">
            <div class="section-title">指令·能力</div>
            <div class="ability-list">
              <div class="ability">攻击</div>
              <div class="ability">道具</div>
            </div>
          </div>

          <div class="experience">
            <div class="exp-row">
              <span>经验值</span>
              <span>{{ selectedCharacter.exp }}</span>
            </div>
            <div class="exp-row">
              <span>升级所需</span>
              <span>{{ selectedCharacter.expNeeded }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface CharacterStats {
  strength: number
  agility: number
  vitality: number
  magic: number
  attack: number
  defense: number
}

interface Character {
  name: string
  type: string
  sprite: string
  level: number
  hp: number
  maxHp: number
  mp: number
  maxMp: number
  exp: number
  expNeeded: number
  stats: CharacterStats
}

const characters = ref<Character[]>([
  {
    name: '巴兹',
    type: '自由人',
    sprite: 'http://ff5.ffsky.cn/concept_art/characters/amano/TN_Amano_FFV_Bartz_2.JPG',
    level: 2,
    hp: 46,
    maxHp: 46,
    mp: 5,
    maxMp: 8,
    exp: 18,
    expNeeded: 15,
    stats: {
      strength: 28,
      agility: 25,
      vitality: 27,
      magic: 25,
      attack: 15,
      defense: 1
    }
  },
  {
    name: '蕾娜',
    type: '自由人',
    sprite: 'http://ff5.ffsky.cn/concept_art/characters/amano/TN_FFV_Lenna_(alternate).JPG',
    level: 1,
    hp: 35,
    maxHp: 35,
    mp: 5,
    maxMp: 5,
    exp: 8,
    expNeeded: 10,
    stats: {
      strength: 20,
      agility: 22,
      vitality: 20,
      magic: 28,
      attack: 12,
      defense: 1
    }
  },
  {
    name: '加拉夫',
    type: '自由人',
    sprite: 'http://ff5.ffsky.cn/concept_art/characters/amano/Galuf_Solo.jpg',
    level: 1,
    hp: 37,
    maxHp: 37,
    mp: 5,
    maxMp: 5,
    exp: 8,
    expNeeded: 10,
    stats: {
      strength: 25,
      agility: 20,
      vitality: 25,
      magic: 18,
      attack: 14,
      defense: 2
    }
  },
  {
    name: '法里斯',
    type: '自由人',
    sprite: 'http://ff5.ffsky.cn/concept_art/characters/amano/TN_Amano_FFV_Faris_2.JPG',
    level: 1,
    hp: 33,
    maxHp: 33,
    mp: 7,
    maxMp: 7,
    exp: 8,
    expNeeded: 10,
    stats: {
      strength: 18,
      agility: 24,
      vitality: 18,
      magic: 30,
      attack: 11,
      defense: 1
    }
  }
]);

const selectedCharacter = ref<Character | null>(null)

const selectCharacter = (character: Character) => {
  selectedCharacter.value = character
}
</script>

<style scoped>
.retro-game {
  font-family: 'Press Start 2P', monospace;
  background: #000;
  min-height: 100vh;
  padding: 20px;
  color: #fff;
}

.window {
  background: #000066;
  border: 4px solid #fff;
  border-radius: 0;
  padding: 4px;
  box-shadow: 0 0 0 4px #000066;
}

.window-header {
  background: #000066;
  color: #fff;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.window-content {
  background: #000066;
  padding: 16px;
}

.character-item {
  display: flex;
  padding: 12px;
  border: 2px solid #4444ff;
  margin-bottom: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.character-item:hover {
  background: #0000aa;
}

.char-sprite {
  width: 120px;
  height: 160px;
  margin-right: 16px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 255, 0.3);
}

.char-sprite img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.char-sprite:hover img {
  transform: scale(1.1);
}

.char-info {
  flex: 1;
}

.char-type {
  color: #aaaaff;
  font-size: 12px;
  margin-bottom: 4px;
}

.char-name {
  color: #ffffff;
  font-size: 16px;
  margin-bottom: 8px;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  font-size: 12px;
  color: #88ff88;
}

.exp {
  margin-top: 8px;
  font-size: 12px;
  color: #ffff88;
}

.char-main-info {
  display: flex;
  align-items: center;
  margin-bottom: 24px;
}

.stats-primary {
  margin-left: 24px;
  color: #88ff88;
}

.stats-detail {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 24px;
}

.stat-row {
  display: flex;
  justify-content: space-between;
  color: #88ffff;
}

.abilities {
  margin-bottom: 24px;
}

.section-title {
  color: #ffaa00;
  margin-bottom: 8px;
  border-bottom: 2px solid #ffaa00;
  padding-bottom: 4px;
}

.ability-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
}

.ability {
  background: #000033;
  padding: 8px;
  text-align: center;
  color: #ffffff;
  border: 2px solid #4444ff;
}

.experience {
  color: #ffff88;
}

.exp-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
}

.pixel-button {
  background: #000033;
  border: 2px solid #4444ff;
  color: #ffffff;
  padding: 4px 12px;
  cursor: pointer;
  font-family: inherit;
  font-size: 12px;
}

.pixel-button:hover {
  background: #0000aa;
}

@font-face {
  font-family: 'Press Start 2P';
  src: url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
}
</style>
