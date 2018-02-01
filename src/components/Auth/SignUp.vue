<template>
  <div class="sign-up">
        <input class="input is-primary" type="email" placeholder="Email" v-model="email"/><br/>
        <input class="input is-primary" type="password" placeholder="Password" v-model="password"/><br/>
        <button class="button is-primary" type="submit" v-on:click="signUp()">Sign me up</button>
        <notification :message="error" v-if="error != ''" />
        <span>
          Take me <router-link to="/STracker/login" class="link">back to login.</router-link>
        </span>
  </div>
</template>

<script>
import firebase from 'firebase'
import Notification from '@/components/Utils/Notification'

export default {
    name: "SignUp",
    components: {
      Notification
    },
    data() {
        return {
            email: '',
            password: '',
            error: ''
        };
    },
    methods: {
        signUp () {
          firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(() => {
            this.error = ''
            this.$router.replace('/STracker/home')
        }, err => {
            this.error = err.message
        });
    }
  }
};
</script>

<style scoped>
.sign-up {
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
</style>
