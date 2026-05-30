<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const API = 'http://localhost:8000'
const router = useRouter()
const rows = ref<{ rank: number; name: string; score: number }[]>([])
const error = ref('')
const username = localStorage.getItem('username')

onMounted(async () => {
  try {
    const r = await fetch(`${API}/leaderboard`)
    rows.value = await r.json()
  } catch {
    error.value = 'Сервер недоступен'
  }
})

function logout() {
  localStorage.removeItem('username')
  router.push('/login')
}
</script>

<template>
  <div class="container">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px">
      <span style="color:#a8dadc;font-size:0.9em">👤 {{ username }}</span>
      <button @click="logout" style="width:auto;padding:6px 14px;font-size:0.85em">Выйти</button>
    </div>
    <h1>🏆 ТОП ИГРОКОВ</h1>
    <p v-if="error" class="msg error">{{ error }}</p>
    <table v-else>
      <thead><tr><th>#</th><th>Игрок</th><th>Счёт</th></tr></thead>
      <tbody>
        <tr v-if="rows.length === 0"><td colspan="3" style="text-align:center;color:#888">Загрузка...</td></tr>
        <tr v-for="e in rows" :key="e.rank">
          <td>{{ e.rank }}</td>
          <td>{{ e.name }}</td>
          <td class="score">{{ e.score.toLocaleString() }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
