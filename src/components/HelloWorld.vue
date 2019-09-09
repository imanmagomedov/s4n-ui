<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Default buttons</h1>
        <S4NButton small>Small button</S4NButton>
        <S4NButton medium>Medium button</S4NButton>
        <S4NButton large>Large button</S4NButton>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <h1>Theme buttons</h1>
        <S4NButton primary>Primary</S4NButton>
        <S4NButton warning>Warning</S4NButton>
        <S4NButton success>Success</S4NButton>
        <S4NButton error>Error</S4NButton>
        <S4NButton info>Info</S4NButton>
        <S4NButton dark>Dark</S4NButton>
        <S4NButton light>Light</S4NButton>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <h1>Disabled buttons</h1>
        <S4NButton primary disabled>Primary</S4NButton>
        <S4NButton warning disabled>Warning</S4NButton>
        <S4NButton success disabled>Success</S4NButton>
        <S4NButton error disabled>Error</S4NButton>
        <S4NButton info disabled>Info</S4NButton>
        <S4NButton dark disabled>Dark</S4NButton>
        <S4NButton light disabled>Light</S4NButton>
      </div>
    </div>
  </div>
</template>

<script>
import S4NButton from './S4NButton/S4NButton.vue'
export default {
  name: 'HelloWorld',
  components: {
    S4NButton
  }
}
</script>
