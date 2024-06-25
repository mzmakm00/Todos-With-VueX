<script setup>
import AddTodos from "./components/AddTodos.vue";
import TodosVue from "./components/Todos.vue";
import FilterTodos from "./components/FilterTodos.vue";
import ButtonToggle from "./components/ButtonToggle.vue";
</script>

<template>
  <div id="app">
    <div class="container">
      <AddTodos />
      <ButtonToggle />
      <FilterTodos />
      <TodosVue />
    </div>
  </div>
</template>

<style>
body {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  line-height: 1.6;  
  background: #e8f7f0;
}
.container {
  max-width : 1100px;
  margin : auto;
  overflow : auto;
  padding: 0 2rem;
}
</style>
