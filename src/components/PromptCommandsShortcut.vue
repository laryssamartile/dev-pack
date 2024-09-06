<template>
    <div class="commands-container">
        <div class="commands-container-top">
            <h2>Lista de Comandos</h2>
        </div>
        <span>OBS: só é possível fazer a pesquisa de dentro da coleção (C:\\Devpack\\Collection) utilizando o terminal</span>
      <ul style="margin-top: 8px;">
        <li>see collection: Exibe toda a coleção cadastrada(dicionário)</li>
        <li>go collection: Entra na coleção (dicionário)</li>
        <li>search {termo}: Pesquisa o termo informado na coleção. Ao passar o termo como "all" 
            exibe a coleção inteira</li>
        <li>back: Volta para a aplicação principal (Home) e fecha a Coleção</li>
        <!-- Adicione mais comandos conforme necessário -->
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'promptCommands',
  }
  </script>
  
  