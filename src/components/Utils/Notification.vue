<template>
    <div class="notification is-danger">
        {{message}}
    </div>  
</template>

<script>
export default {
  name: 'Notification',  
  props: ['message']
}
</script>

<style scoped>
.notification {
    width: 20%;
    position: absolute;
    top: 0;
    right: 0;
    margin: 5px;
}

@media (max-width: 850px) {
    .notification {
        width: auto;
    }
}
</style>


