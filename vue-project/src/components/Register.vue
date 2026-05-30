<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const API = 'http://localhost:8000'
const router = useRouter()
const username = ref('')
const email = ref('')
const password = ref('')
const confirm = ref('')
const msg = ref('')
const msgClass = ref('error')
const loading = ref(false)

async function submit() {
  if (password.value !== confirm.value) { msg.value = 'Пароли не совпадают'; return }
  loading.value = true
  msg.value = ''
  try {
    const r = await fetch(`${API}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username.value, email: email.value, password: password.value }),
    })
    const data = await r.json()
    if (r.ok) {
      msgClass.value = 'ok'
      msg.value = 'Успешно! Перенаправляем...'
      setTimeout(() => router.push('/login'), 1000)
    } else {
      msg.value = data.detail || 'Ошибка'
    }
  } catch {
    msg.value = 'Сервер недоступен'
  }
  loading.value = false
}
</script>

<template>
  <div class="container">
    <h1>📝 Регистрация</h1>
    <form @submit.prevent="submit">
      <div class="form-group">
        <label>Имя пользователя</label>
        <input v-model="username" type="text" required placeholder="Придумайте логин" />
      </div>
      <div class="form-group">
        <label>Email</label>
        <input v-model="email" type="email" required placeholder="example@mail.com" />
      </div>
      <div class="form-group">
        <label>Пароль</label>
        <input v-model="password" type="password" required placeholder="Придумайте пароль" />
      </div>
      <div class="form-group">
        <label>Подтверждение пароля</label>
        <input v-model="confirm" type="password" required placeholder="Повторите пароль" />
      </div>
      <button type="submit" :disabled="loading">{{ loading ? 'Загрузка...' : 'Зарегистрироваться' }}</button>
    </form>
    <p class="msg" :class="msgClass">{{ msg }}</p>
    <div class="links">
      <RouterLink to="/login">Уже есть аккаунт? Войти</RouterLink>
    </div>
  </div>
</template>
