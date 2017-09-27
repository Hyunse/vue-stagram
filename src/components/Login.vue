<template>
  <div>
    <md-button class="md-raised md-primary"
      href="https://www.instagram.com/oauth/authorize/?client_id=31f5aadef034498c857ef96361bf271f&redirect_uri=http://hyunse.github.io/vue-stagram/&response_type=token&scope=public_content">
      인스타그램 로그인
    </md-button>
  </div>
</template>

<script>
  export default {
    name: 'Login'
  }
</script>