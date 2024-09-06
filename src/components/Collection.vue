<template>
  <div class="search-results">
    <h6>Coleção</h6>
    <p v-if="filteredData.length === 0">Nenhum resultado encontrado</p>
    <div v-for="data in filteredData" :key="data.name" class="result-item">
      <div class="result-name"># {{ data.name }}</div>
      <div class="result-description">Descrição: {{ data.description }}</div>
      <div class="result-solution">Solução: {{ data.solution }}</div>
      <div class="result-solution">Link: {{ data.helpLink }}</div>
    </div>
  </div>
</template>

<script>
import { dataBaseList } from '../assets/dataBase.js';
export default {
  name: 'collection',
  props: {
    searchTerm: {
      type: String,
      default: 'all'
    }
  },
  data() {
    return {
      dataCollection: dataBaseList
    };
  },
  computed: {
    filteredData() {
      // Exibir todos os dados
      if (this.searchTerm === 'all') {
        return this.dataCollection; 
      }
      // Filtra pelo termo de busca na propriedade 'name'
      return this.dataCollection.filter(item =>
        item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
  }
};
</script>
