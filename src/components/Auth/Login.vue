<template>
  <div class="login">
        <input class="input is-primary" type="email" placeholder="Email" v-model="email"/><br/>
        <input class="input is-primary" type="password" placeholder="Password" v-model="password"/><br/>
        <button class="button is-primary" type="submit" v-on:click="login()">Sign me in</button>
        <notification :message="error" v-if="error != ''" />
        <span>
          No account yet? <router-link to="/STracker/signup" class="link">Create one.</router-link>
        </span>
  </div>
</template>

<script>
import Notification from '@/components/Utils/Notification'
import firebase from 'firebase'

export default {
    name: 'Login',
    components: {
      Notification
    },
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
    border-radius: 0;
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

span {
  display: block;
  margin-top: 20px;
  font-size: 1em;
}

.link {
    color: white;
}

.link:hover {
    opacity: 0.5;
}

@media (max-width: 850px) {
    .input {
        width: 80%;
    }
}
</style>


