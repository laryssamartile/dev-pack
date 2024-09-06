<template>
  <div class="wrapper-all">
      <header>
          <div id="menu-top">
              <nav>
                <RouterLink to="/"><img alt="DevPack logo" class="logo" src="@/assets/logo.png" width="120" height="120" /></RouterLink>
              </nav>
              <div id="search-dictionary">
                  <input type="text" placeholder="DevPack [Dicionário]" v-model="displayedText" readonly>
              </div>
              <div id="btn-login">
                  <button @click="ShowTerminal">Login</button>
              </div>
          </div>
          <div id="menu-right">
            <i class="icon-shortcut"  @mouseover="showTooltip = true" @mouseleave="showTooltip = false" @click="showCommands = !showCommands"></i>
            <div v-if="showTooltip" class="tooltip">Lista de comandos</div>
          </div>
      </header>
      <div id="name-app">
          <h1 v-if="!showCollection">DEV PACK</h1>
          <h3 v-if="!showCollection">{{ developerGreeting }}</h3>
          <p v-if="!showCollection">{{ paragraphText }}</p>
      </div>

      <prompt-commands-shortcut v-if="showCommands"></prompt-commands-shortcut>
      <terminal v-if="showTerminal" @showCollection="handleCollectionFilter"></terminal>
      <collection v-if="showCollection" :searchTerm="filterCollection"></collection>
  </div>
</template>

<script>
import Terminal from '../components/terminal.vue'
import Collection from '../components/Collection.vue';
import PromptCommandsShortcut from '../components/PromptCommandsShortcut.vue';

export default {
name: 'home',
data() {
  return {
    showTerminal: false,
    showCollection: false,
    filterCollection: '',
    displayedText: '',
    showCommands: false,
    showTooltip: false,
    developerGreeting: '',
    paragraphText: '',
  };
},
components: {
  Terminal,
  Collection,
  PromptCommandsShortcut,
},
mounted() {
  this.typeEffectTextApp('Olá Desenvolvedor,', 'developerGreeting', () => {
    this.typeEffectTextApp('Aproveite este espaço para armazenar todo o seu conhecimento e levá-lo à qualquer lugar', 'paragraphText');
  });
},
methods: {
  ShowTerminal() {
    this.showTerminal = true;
  },
  handleCollectionFilter(filter) {
    if(filter === 'close'){
      this.showCollection = false; 
      this.displayedText = ''; 
    }
    else{
      this.typeEffect(filter);
      this.filterCollection = filter;
    }
  },
  typeEffect(text) {
    text = text.toLowerCase() === "all" ? "Todos" : text;
    this.displayedText = ''; 
    let i = 0;

    const typingInterval = setInterval(() => {
      if (i < text.length) {
        this.displayedText += text.charAt(i); 
        i++;
      } else {
        clearInterval(typingInterval); 
        this.showCollection = true; 
      }
    }, 100); 
  },
  typeEffectTextApp(text, targetProperty, callback = null) {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        this[targetProperty] += text.charAt(i);
        i++;
      } else {
        clearInterval(typingInterval);
        if (callback) callback(); // Chama o callback após o fim da digitação, se fornecido
      }
    }, 10);
  },
},
}
</script>

