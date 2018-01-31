<template>
  <div class="login">
        <input class="input" type="text" placeholder="Email" v-model="email"/><br/>
        <input class="input" type="password" placeholder="Password" v-model="password"/><br/>
        <button class="button is-primary" type="submit" v-on:click="login()">Sign me in</button>
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
    padding-top: 40vh;
    text-align: center;
    height: 100%;
    background: #67b26f; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #67b26f, #4ca2cd); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #67b26f, #4ca2cd); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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


