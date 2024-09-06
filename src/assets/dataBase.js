export const dataBaseList = [
    {
        name: "ReferenceError",
        description: "Ocorre quando se tenta acessar uma variável que não foi declarada.",
        solution: "Verifique a ortografia da variável, se ela foi declarada antes de ser usada e se está no escopo correto.",
        helpLink: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError"
    },
    {
        name: "TypeError",
        description: "Ocorre quando se tenta realizar uma operação em um valor de um tipo de dados inválido.",
        solution: "Verifique o tipo de dados das variáveis envolvidas na operação e ajuste o código para realizar a operação correta.",
        helpLink: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/TypeError"
    },
    {
        name: "SyntaxError",
        description: "Ocorre quando há um erro na sintaxe do código JavaScript.",
        solution: "Verifique a sintaxe do código, como parênteses, chaves, ponto e vírgula, etc.",
        helpLink: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError"
    },
    {
        name: "RangeError",
        description: "Ocorre quando um número é maior ou menor do que o permitido.",
        solution: "Verifique os limites dos valores numéricos e ajuste o código para evitar que excedam esses limites.",
        helpLink: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RangeError"
    },
    {
        name: "Uncaught (in promise) TypeError",
        description: "Ocorre em Promises quando uma operação assíncrona falha.",
        solution: "Utilize `try...catch` para capturar e tratar erros em Promises.",
        helpLink: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise"
    },
    {
        name: "Uncaught (in promise) NetworkError",
        description: "Ocorre quando há um problema na rede durante uma requisição fetch.",
        solution: "Verificar a conexão com a internet, a URL, tratar erros de rede com `catch` e implementar estratégias de retry.",
        helpLink: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"
    },
    {
        name: "Not Found 404",
        description: "O recurso solicitado não foi encontrado no servidor.",
        solution: "Verificar a URL, verificar se o recurso existe e se não foi removido.",
        helpLink: "https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/404",
    },
    {
        name: "Bad Request 400",
        description: "A solicitação enviada pelo cliente contém uma sintaxe inválida ou é incompreensível pelo servidor.",
        solution: "Verificar a sintaxe da requisição, parâmetros e cabeçalhos.",
        helpLink: "https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/400",
    },
    {
        name: "Unauthorized 401",
        description: "A requisição não foi autenticada.",
        solution: "Verificar as credenciais de autenticação, configurar a autenticação corretamente.",
        helpLink: "https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/401",
    },
    {
        name: "Internal Server Erro 500",
        description: "Ocorreu um erro inesperado no servidor.",
        solution: "Verificar os logs do servidor, contatar o administrador do sistema.",
        helpLink: "https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/500",
    },
    {
        name: "Forbidden 403",
        description: "O servidor recusou a requisição, mesmo com credenciais válidas.",
        solution: "Verifique as permissões de acesso ao recurso solicitado.",
        helpLink: "https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/403"
    },
    {
        name: "Conflict 409",
        description: "Conflito de requisição, geralmente em operações de atualização.",
        solution: "Verifique se o estado do recurso está atualizado antes de fazer a requisição.",
        helpLink: "https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/409"
    },
    {
        name: "Payload Too Large 413",
        description: "O servidor recusou processar a requisição porque o payload é muito grande.",
        solution: "Reduza o tamanho dos dados enviados ou divida a requisição em partes menores.",
        helpLink: "https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/413"
    },
    {
        name: "Gateway Timeout 504",
        description: "Ocorre quando o servidor não recebe uma resposta oportuna de outro servidor ao tentar completar a requisição.",
        solution: "Tente novamente mais tarde, ou verifique a comunicação entre servidores.",
        helpLink: "https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/504"
    },
    {
        name: "Service Unavailable 503",
        description: "O servidor está temporariamente indisponível devido a manutenção ou sobrecarga.",
        solution: "Aguarde ou entre em contato com o administrador do servidor.",
        helpLink: "https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/503"
    }
];