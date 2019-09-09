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
    <div class="row">
      <div class="col-md-12">
        <h1>Alerts</h1>
        <S4NAlert>Default alert with some text</S4NAlert>
        <S4NAlert primary>Primary alert with some text</S4NAlert>
        <S4NAlert warning>Warning alert with some text</S4NAlert>
        <S4NAlert success>Success alert with some text</S4NAlert>
        <S4NAlert error>Error alert with some text</S4NAlert>
        <S4NAlert info>Info alert with some text</S4NAlert>
        <S4NAlert dark>Dark alert with some text</S4NAlert>
        <S4NAlert light>Light alert with some text</S4NAlert>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <h1>Alerts with header</h1>
        <S4NAlert>
          <template v-slot:header>
            Default header title
          </template>
          Some text before tag
          <hr>
          Default alert with some text
        </S4NAlert>
        <S4NAlert primary>
          <template v-slot:header>
            Primary header title
          </template>
          Some text before tag
          <hr>
          Primary alert with some text
        </S4NAlert>
        <S4NAlert warning>
          <template v-slot:header>
            Warning header title
          </template>
          Some text before tag
          <hr>
          Warning alert with some text
        </S4NAlert>
        <S4NAlert success>
          <template v-slot:header>
            Success header title
          </template>
          Some text before tag
          <hr>
          Success alert with some text
        </S4NAlert>
        <S4NAlert error>
          <template v-slot:header>
            Error header title
          </template>
          Some text before tag
          <hr>
          Error alert with some text
        </S4NAlert>
        <S4NAlert info>
          <template v-slot:header>
            Info header title
          </template>
          Some text before tag
          <hr>
          Info alert with some text
        </S4NAlert>
        <S4NAlert dark>
          <template v-slot:header>
            Dark header title
          </template>
          Some text before tag
          <hr>
          Dark alert with some text
        </S4NAlert>
        <S4NAlert light>
          <template v-slot:header>
            Light header title
          </template>
          Some text before tag
          <hr>
          Light alert with some text
        </S4NAlert>
      </div>
    </div>
  </div>
</template>

<script>
import S4NButton from './S4NButton/S4NButton.vue'
import S4NAlert from './S4NAlert/S4NAlert.vue'
export default {
  name: 'HelloWorld',
  components: {
    S4NButton,
    S4NAlert
  }
}
</script>
