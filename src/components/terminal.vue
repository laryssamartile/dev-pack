<template>
  <div class="terminal-container">
    <div class="prompt-top">
      <span style="display: flex;">
        <i class="icon-exe"></i>
        <h5>DevPack Prompt</h5>
      </span>
    </div>
    <div class="prompt" id="prompt">
      <div class="prompt-copyright">
        <span>DevPack Prompt [versão 00.09.24]</span>
        <span>2024 - Todos os direitos reservados</span>
      </div>
      <div class="command-line" v-for="(inputObj, index) in inputElements" :key="index">
        <span>{{ inputObj.path }}</span>
        <span>{{ inputObj.askPrompt }}
          <input type="text" v-model="inputObj.userInput" @keyup.enter="handleEnter(index)" ref="inputs" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'terminal',
  data() {
    return {
      currentPath: '',
      inputElements: [],
      currentState: 'initial',
      userLogin: '',
      pwdLogin: '',
      usernameEntered: false,
      isRegister: false,
    };
  },
  mounted() {
    this.addInputElement('C:\\Devpack\\Login>', 'Possui cadastro? [S/N]: ');
  },
  updated() {
    this.scrollToBottom();
    this.focusLastInput();
  },
  methods: {
    addInputElement(path, askPrompt, userInput = '') {
      this.inputElements.push({ path, askPrompt, userInput });
    },

    focusLastInput() {
      const inputs = this.$refs.inputs;
      if (inputs.length > 0) {
        inputs[inputs.length - 1].focus();
      }
    },

    scrollToBottom() {
      const promptDiv = this.$el.querySelector('.prompt');
      const atBottom = promptDiv.scrollHeight - promptDiv.scrollTop <= promptDiv.clientHeight + 100; // Adiciona uma margem de 100px
      if (atBottom) {
        promptDiv.scrollTop = promptDiv.scrollHeight;
      }
    },
    
    handleEnter(index) {
      const command = this.inputElements[index].userInput.trim().toLowerCase();

      switch (this.currentState) {
        case 'initial':
          this.handleInitialState(command);
          break;
        case 'username':
          this.handleUsernameState(command);
          break;
        case 'password':
          this.handlePasswordState(command);
          break;
        case 'application':
          this.handleApplicationState(command, index);
          break;
        default:
          console.error('Unknown state:', this.currentState);
      }
    },

    handleInitialState(command) {
      if (command === 's') {
        this.currentState = 'username';
        this.addInputElement('C:\\Devpack\\Login>', 'Usuário: ');
        this.usernameEntered = false;
      } else if (command === 'n') {
        this.currentState = 'username';
        this.addInputElement('C:\\Devpack\\Login>', 'Usuário: ');
        this.usernameEntered = false;
        this.isRegister = true;
      } else {
        this.addInputElement('C:\\Devpack\\Login>', '[ERRO] Valor inválido!');
        this.addInputElement('C:\\Devpack\\Login>', 'Possui cadastro? [S/N]:');
      }
    },

    handleUsernameState(command) {
      if (!this.usernameEntered) {
        this.userLogin = command;
        this.currentState = 'password';
        this.addInputElement('C:\\Devpack\\Login>', 'Senha: ');
        this.usernameEntered = true;
      }
    },

    handlePasswordState(command) {
      if (this.usernameEntered) {
        this.pwdLogin = command;
        if (!this.isRegister) {
          if (this.userLogin === 'administrador' && this.pwdLogin === 'administrador') {
            this.currentState = 'application';
            this.inputElements = [{ path: 'C:\\Devpack\\Home>', askPrompt: '', userInput: '' }];
          } else {
            this.inputElements = [{ path:'C:\\Devpack\\Login>[ERRO] Usuário não encontrado.', askPrompt: '', userInput: '' }];
            this.addInputElement('C:\\Devpack\\Login>', 'Possui cadastro? [S/N]:');
            this.currentState = 'initial';
            this.usernameEntered = false;
          }
        } else {
          this.currentState = 'application';
          this.inputElements = [{ path: 'C:\\Devpack\\Home>', askPrompt: 'Cadastro realizado com sucesso!', userInput: '' }];
          this.addInputElement('C:\\Devpack\\Home>', '', '');
        }
      }
    },

    handleApplicationState(command, index) {
      if (command === 'go collection') {
        this.addInputElement('C:\\Devpack\\Collection>', '');
        return;
      }

      if (this.inputElements[index].path.toLowerCase().includes('collection')) {
        this.handleCollectionCommands(command);
      }
    },

    handleCollectionCommands(command) {
      if (command.includes('see collection')) {
        this.$emit('showCollection', 'all');
        this.addInputElement('C:\\Devpack\\Collection>', '');
      } else if (command.includes('search')) {
        const searchTerm = command.replace('search', '').trim();
        this.$emit('showCollection', searchTerm);
        this.addInputElement('C:\\Devpack\\Collection>', '');
      } else if (command === 'back') {
        this.$emit('showCollection', 'close');
        this.addInputElement('C:\\Devpack\\Home>', '');
      }
    },
  },
};
</script>
