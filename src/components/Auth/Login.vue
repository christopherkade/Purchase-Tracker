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
            this.$router.replace('/STracker/home')
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
    background: #67b26f;
    background: -webkit-linear-gradient(to right, #67b26f, #4ca2cd);
    background: linear-gradient(to right, #67b26f, #4ca2cd);
}

.input {    
    width: auto;
    margin: 10px 0;
    box-shadow: none;
    border: 1px solid white;
    color: white;
    border-radius: 0;
    background-color: transparent;
}

/* Placeholder color */
::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: white;
}
::-moz-placeholder { /* Firefox 19+ */
  color: white;
}
:-ms-input-placeholder { /* IE 10+ */
  color: white;
}
:-moz-placeholder { /* Firefox 18- */
  color: white;
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


