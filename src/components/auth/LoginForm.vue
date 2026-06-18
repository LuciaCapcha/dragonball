<template>
  <form class="login-form" @submit.prevent="submitLogin">
    <h2>Login</h2>

    <div class="form-group">
      <label for="email">Email</label>
      <input
        id="email"
        type="email"
        v-model="form.email"
        required
        autocomplete="username"
        placeholder="Enter your email"
      />
    </div>

    <div class="form-group">
      <label for="password">Password</label>
      <input
        id="password"
        type="password"
        v-model="form.password"
        required
        autocomplete="current-password"
        placeholder="Enter your password"
      />
    </div>

    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>

    <button type="submit" :disabled="isSubmitting">Login</button>
  </form>
</template>

<script setup>
import { ref, reactive } from 'vue'
import axios from 'axios'

const API_PORT = 5072
const api = axios.create({ baseURL: `http://localhost:${API_PORT}` })

const form = reactive({
  email: '',
  password: '',
})

const errorMessage = ref('')
const isSubmitting = ref(false)

function submitLogin() {
  errorMessage.value = ''
  isSubmitting.value = true

  api
    .post('/api/user/signin', {
      email: form.email,
      password: form.password,
    })
    .then((response) => {
      console.log('Login successful:', response.data)
      //const { token } = response.data;
      //localStorage.setItem('authToken', token);
      // Optionally, redirect to a protected page or emit an event
    })
    .catch((error) => {
      if (error.response && error.response.data && error.response.data.message) {
        errorMessage.value = error.response.data.message
      } else {
        errorMessage.value = 'An error occurred during login.'
      }
    })
    .finally(() => {
      isSubmitting.value = false
    })
}
</script>

<style scoped>
.login-form {
  max-width: 360px;
  margin: 0 auto;
  padding: 24px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
}

.login-form h2 {
  margin-bottom: 16px;
  font-size: 1.2rem;
  text-align: center;
}

.form-group {
  margin-bottom: 16px;
}

.form-group label {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
}

.form-group input {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #bbb;
  border-radius: 4px;
  font-size: 1rem;
}

.button,
button {
  width: 100%;
  padding: 10px 12px;
  border: none;
  border-radius: 4px;
  background-color: #3b82f6;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
}

button:disabled {
  background-color: #94a3b8;
  cursor: not-allowed;
}

.error-message {
  margin-bottom: 12px;
  color: #dc2626;
  font-size: 0.95rem;
}
</style>
