<template>
  <div class="login">
        <h1 class="title">Sign In</h1>
        <input class="input" type="text" placeholde r="Email" v-model="email"/><br/>
        <input class="input" type="password" placeholder="Password" v-model="password"/><br/>
        <button class="button is-primary" type="submit" v-on:click="login()">Connection</button>
        <notification :message="error" v-if="error != ''" />
  </div>
</template>

<script>
import Notification from '@/components/Utils/Notification'
import firebase from 'firebase'
import { setTimeout } from 'timers';

export default {
  name: 'Login',
  data () {
      return {
          email: '',
          password: '',
          error: ''
      }
  },
  methods: {
      login () {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
            this.error = ''
            this.$router.replace('home')
        }, err => {
            this.error = err.message
        });
      }
  },
  components: {
      Notification
  }
}
</script>

<style scoped>
.login {
    padding-top: 25vh;
    text-align: center;
}

.input {    
    width: 20%;
    margin: 10px 0;
}

.button {
    margin-top: 20px;    
}

p {
    margin-top: 20px;
    font-size: 1em;
}

p a {
    cursor: pointer;
}

@media (max-width: 850px) {
    .input {
        width: 80%;
    }
}
</style>


