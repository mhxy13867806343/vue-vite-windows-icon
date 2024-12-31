<template>
  <div class="retro-game pixel-theme">
    <!-- 角色列表视图 -->
    <div v-if="!selectedCharacter" class="character-list">
      <div class="window" v-for="character in characters" :key="character.id">
        <div class="window-content">
          <div class="character-item" @click="selectCharacter(character)">
            <div class="char-sprite">
              <img :src="character.image" :alt="character.name" :style="{ width: character.width || '48px' }">
            </div>
            <div class="char-info">
              <div class="char-name">{{ character.name }}</div>
              <div class="char-class">{{ character.class }}</div>
              <div class="char-stats">
                <div class="stat">HP {{ character.hp }}/{{ character.maxHp }}</div>
                <div class="stat">MP {{ character.mp }}/{{ character.maxMp }}</div>
                <div class="stat">LV {{ character.level }}</div>
                <div class="stat">升级所需: {{ character.expToNext }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 角色详情视图 -->
    <div v-else class="character-detail">
      <div class="window">
        <div class="window-header">
          {{ selectedCharacter.name }} {{ selectedCharacter.class }}
          <button class="pixel-button" @click="selectedCharacter = null">返回</button>
        </div>
        <div class="window-content">
          <div class="char-main-info">
            <img :src="selectedCharacter.image" :alt="selectedCharacter.name" :style="{ width: selectedCharacter.width || '48px' }">
            <div class="stats-primary">
              <div class="stat">HP {{ selectedCharacter.hp }}/{{ selectedCharacter.maxHp }}</div>
              <div class="stat">MP {{ selectedCharacter.mp }}/{{ selectedCharacter.maxMp }}</div>
              <div class="stat">LV {{ selectedCharacter.level }}</div>
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
              <span>{{ selectedCharacter.expToNext }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import bartzImg from '../assets/characters/bartz.jpg'
import lennaImg from '../assets/characters/lenna.jpg'
import galufImg from '../assets/characters/galuf.jpg'
import farisImg from '../assets/characters/faris.jpg'

interface CharacterStats {
  strength: number
  agility: number
  vitality: number
  magic: number
  attack: number
  defense: number
}

interface Character {
  id: number
  name: string
  class: string
  hp: number
  maxHp: number
  mp: number
  maxMp: number
  level: number
  exp: number
  expToNext: number
  stats: CharacterStats
  image: string
  width: string
}

const characters = ref<Character[]>([
  {
    id: 1,
    name: '巴兹',
    class: '自由人',
    hp: 46,
    maxHp: 46,
    mp: 5,
    maxMp: 8,
    level: 2,
    exp: 18,
    expToNext: 15,
    stats: {
      strength: 28,
      agility: 25,
      vitality: 27,
      magic: 25,
      attack: 15,
      defense: 1
    },
    image: bartzImg,
    width: '48px'
  },
  {
    id: 2,
    name: '蕾娜',
    class: '自由人',
    hp: 35,
    maxHp: 35,
    mp: 5,
    maxMp: 5,
    level: 1,
    exp: 8,
    expToNext: 10,
    stats: {
      strength: 20,
      agility: 22,
      vitality: 20,
      magic: 28,
      attack: 12,
      defense: 1
    },
    image: lennaImg,
    width: '48px'
  },
  {
    id: 3,
    name: '加拉夫',
    class: '自由人',
    hp: 37,
    maxHp: 37,
    mp: 5,
    maxMp: 5,
    level: 1,
    exp: 8,
    expToNext: 10,
    stats: {
      strength: 25,
      agility: 20,
      vitality: 25,
      magic: 18,
      attack: 14,
      defense: 2
    },
    image: galufImg,
    width: '48px'
  },
  {
    id: 4,
    name: '法里斯',
    class: '自由人',
    hp: 33,
    maxHp: 33,
    mp: 7,
    maxMp: 7,
    level: 1,
    exp: 8,
    expToNext: 10,
    stats: {
      strength: 18,
      agility: 24,
      vitality: 18,
      magic: 30,
      attack: 11,
      defense: 1
    },
    image: farisImg,
    width: '48px'
  }
])

const selectedCharacter = ref<Character | null>(null)

const selectCharacter = (character: Character) => {
  selectedCharacter.value = character
}
</script>

<style scoped>
.retro-game {
  font-family: "Press Start 2P", monospace;
  background: #000;
  min-height: 100vh;
  padding: 20px;
  color: #fff;
}

.character-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.window {
  background: #000;
  border: 4px solid #444;
  padding: 10px;
  border-radius: 0;
}

.window-content {
  border: 2px solid #666;
  padding: 10px;
}

.character-item {
  display: flex;
  gap: 20px;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s;
}

.character-item:hover {
  background: #0000aa;
}

.char-sprite {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.char-sprite img {
  image-rendering: pixelated;
  object-fit: contain;
}

.char-info {
  flex: 1;
}

.char-name {
  font-size: 16px;
  color: #fff;
  margin-bottom: 5px;
}

.char-class {
  font-size: 14px;
  color: #aaa;
  margin-bottom: 10px;
}

.char-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.stat {
  font-size: 12px;
  color: #fff;
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

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.7; }
  100% { opacity: 1; }
}

.window:hover {
  animation: pulse 2s infinite;
}
</style>
