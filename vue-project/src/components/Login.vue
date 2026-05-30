<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const API = 'http://localhost:8000'
const router = useRouter()
const username = ref('')
const password = ref('')
const msg = ref('')
const msgClass = ref('error')
const loading = ref(false)

async function submit() {
  loading.value = true
  msg.value = ''
  try {
    const r = await fetch(`${API}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username.value, password: password.value }),
    })
    const data = await r.json()
    if (r.ok) {
      localStorage.setItem('username', data.username)
      msgClass.value = 'ok'
      msg.value = 'Вход выполнен!'
      setTimeout(() => router.push('/leaderboard'), 800)
    } else {
      msg.value = data.detail || 'Неверный логин или пароль'
    }
  } catch {
    msg.value = 'Сервер недоступен'
  }
  loading.value = false
}
</script>

<template>
  <div class="container">
    <h1>🔐 Вход</h1>
    <form @submit.prevent="submit">
      <div class="form-group">
        <label>Имя пользователя</label>
        <input v-model="username" type="text" required placeholder="Введите логин" />
      </div>
      <div class="form-group">
        <label>Пароль</label>
        <input v-model="password" type="password" required placeholder="Введите пароль" />
      </div>
      <button type="submit" :disabled="loading">{{ loading ? 'Загрузка...' : 'Войти' }}</button>
    </form>
    <p class="msg" :class="msgClass">{{ msg }}</p>
    <div class="links">
      <RouterLink to="/register">Нет аккаунта? Зарегистрироваться</RouterLink>
    </div>
  </div>
</template>
