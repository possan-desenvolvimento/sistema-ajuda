const knowledgeDictionary = [
    {
        title: 'Ver pastas e diretórios ocultos',
        keywords: ['ver pastas ocultas', 'diretorios ocultos', 'arquivos ocultos', 'listar ocultos', 'mostrar pastas escondidas', 'pastas e diretorios'],
        command: 'ls -la',
        description: 'Lista arquivos e diretórios, incluindo os ocultos, com detalhes de permissões, tamanho e data.',
        module: 'Linux',
        link: 'pages/linux.html'
    },
    {
        title: 'Listar arquivos com detalhes',
        keywords: ['listar arquivos', 'ver arquivos', 'mostrar arquivos', 'lista detalhada'],
        command: 'ls -lh',
        description: 'Exibe os arquivos do diretório atual com tamanhos legíveis, como KB, MB e GB.',
        module: 'Linux',
        link: 'pages/linux.html'
    },
    {
        title: 'Descobrir onde estou no terminal',
        keywords: ['diretorio atual', 'caminho atual', 'onde estou', 'local atual'],
        command: 'pwd',
        description: 'Mostra o caminho completo do diretório em que você está.',
        module: 'Linux',
        link: 'pages/linux.html'
    },
    {
        title: 'Encontrar arquivos pelo nome',
        keywords: ['procurar arquivo', 'buscar arquivo', 'encontrar arquivo', 'achar arquivo'],
        command: 'find . -name "nome-do-arquivo"',
        description: 'Procura um arquivo pelo nome a partir do diretório atual.',
        module: 'Linux',
        link: 'pages/linux.html'
    },
    {
        title: 'Ver processos em execução',
        keywords: ['processos', 'processos rodando', 'processos ativos', 'monitorar processos'],
        command: 'ps aux',
        description: 'Exibe os processos em execução e informações sobre consumo e usuário.',
        module: 'Linux',
        link: 'pages/linux.html'
    },
    {
        title: 'Criar uma pasta',
        keywords: ['criar pasta', 'nova pasta', 'criar diretorio'],
        command: 'mkdir nome-da-pasta',
        description: 'Cria um novo diretório no local atual.',
        module: 'Linux',
        link: 'pages/linux.html'
    },
    {
        title: 'Ver containers em execução',
        keywords: ['containers rodando', 'containers ativos', 'ver containers', 'docker ps'],
        command: 'docker ps',
        description: 'Lista os containers Docker que estão em execução.',
        module: 'DevOps',
        link: 'pages/devops.html'
    },
    {
        title: 'Subir serviços com Docker Compose',
        keywords: ['subir docker', 'iniciar compose', 'subir servicos', 'docker compose'],
        command: 'docker compose up -d',
        description: 'Inicia os serviços definidos no arquivo Docker Compose em segundo plano.',
        module: 'DevOps',
        link: 'pages/devops.html'
    },
    {
        title: 'Ver o estado do Git',
        keywords: ['status git', 'ver alteracoes', 'arquivos modificados', 'estado do repositorio'],
        command: 'git status',
        description: 'Mostra arquivos alterados, novos e prontos para commit no repositório.',
        module: 'Controle de Versão',
        link: 'pages/controle-versao.html'
    },
    {
        title: 'Criar uma tabela SQL',
        keywords: ['criar tabela', 'tabela sql', 'create table', 'banco de dados'],
        command: 'CREATE TABLE nome (id INT PRIMARY KEY);',
        description: 'Modelo inicial para criar uma tabela em SQL.',
        module: 'Dados',
        link: 'pages/dados.html'
    },
    {
        title: 'Criar um endpoint no Spring Boot',
        keywords: ['endpoint spring', 'rota backend', 'controller java', 'api spring'],
        command: '@GetMapping("/rota")',
        description: 'Anotação usada para mapear uma rota GET em um controller Spring.',
        module: 'Back-End',
        link: 'pages/backend.html'
    },
    {
        title: 'Selecionar um elemento no JavaScript',
        keywords: ['selecionar elemento', 'buscar elemento html', 'query selector', 'javascript dom'],
        command: 'document.querySelector(".seletor")',
        description: 'Seleciona o primeiro elemento que corresponde ao seletor CSS informado.',
        module: 'Front-End',
        link: 'pages/frontend.html'
    },
    {
        title: 'Criar uma execução no Jenkins',
        keywords: ['pipeline jenkins', 'job jenkins', 'build automatico', 'automacao ci cd'],
        command: 'pipeline { stages { stage("Build") { steps { sh "npm run build" } } } }',
        description: 'Estrutura mínima de um pipeline declarativo do Jenkins.',
        module: 'Automação',
        link: 'pages/automacao.html'
    },
    {
        title: 'Copiar uma pasta inteira',
        keywords: ['copiar pasta', 'duplicar diretorio', 'cp recursivo', 'copiar diretorio'],
        command: 'cp -r pasta origem destino',
        description: 'Copia um diretório e todo o seu conteúdo para outro local.',
        module: 'Linux',
        link: 'pages/linux.html'
    },
    {
        title: 'Buscar texto em vários arquivos',
        keywords: ['buscar texto', 'procurar texto', 'grep recursivo', 'texto nos arquivos'],
        command: 'grep -rin "texto" .',
        description: 'Procura um texto sem diferenciar maiúsculas e minúsculas, mostrando linha e arquivo.',
        module: 'Linux',
        link: 'pages/linux.html'
    },
    {
        title: 'Acompanhar um arquivo de log',
        keywords: ['acompanhar log', 'ver log em tempo real', 'seguir log', 'logs linux'],
        command: 'less +F arquivo.log',
        description: 'Abre um log e acompanha novas linhas à medida que são gravadas.',
        module: 'Linux',
        link: 'pages/linux.html'
    },
    {
        title: 'Desfazer alterações locais',
        keywords: ['desfazer alteracoes git', 'descartar mudancas', 'restaurar arquivo git', 'voltar arquivo'],
        command: 'git restore arquivo',
        description: 'Descarta alterações não commitadas de um arquivo específico.',
        module: 'Controle de Versão',
        link: 'pages/controle-versao.html'
    },
    {
        title: 'Criar e trocar para uma branch',
        keywords: ['criar branch', 'nova branch', 'trocar branch', 'ramificacao git'],
        command: 'git switch -c nome-da-branch',
        description: 'Cria uma nova branch e muda para ela imediatamente.',
        module: 'Controle de Versão',
        link: 'pages/controle-versao.html'
    },
    {
        title: 'Visualizar histórico do Git',
        keywords: ['historico git', 'ver commits', 'arvore git', 'log completo'],
        command: 'git log --graph --oneline --decorate --all',
        description: 'Exibe o histórico de commits em formato compacto com branches e tags.',
        module: 'Controle de Versão',
        link: 'pages/controle-versao.html'
    },
    {
        title: 'Guardar alterações temporariamente',
        keywords: ['guardar mudancas', 'salvar trabalho temporario', 'stash git', 'guardar alteracoes'],
        command: 'git stash push -m "trabalho temporario"',
        description: 'Retira alterações da árvore de trabalho sem criar um commit.',
        module: 'Controle de Versão',
        link: 'pages/controle-versao.html'
    },
    {
        title: 'Reaplicar alterações guardadas',
        keywords: ['recuperar stash', 'aplicar stash', 'stash pop', 'voltar trabalho temporario'],
        command: 'git stash pop',
        description: 'Aplica novamente o stash mais recente e remove esse item da lista.',
        module: 'Controle de Versão',
        link: 'pages/controle-versao.html'
    },
    {
        title: 'Desfazer um commit com segurança',
        keywords: ['desfazer commit publicado', 'reverter commit', 'revert git', 'cancelar commit remoto'],
        command: 'git revert <commit>',
        description: 'Cria um novo commit que desfaz outro, preservando o histórico compartilhado.',
        module: 'Controle de Versão',
        link: 'pages/controle-versao.html'
    },
    {
        title: 'Integrar uma branch',
        keywords: ['juntar branch', 'integrar branch', 'merge git', 'mesclar branches'],
        command: 'git merge --no-ff nome-da-branch',
        description: 'Integra uma branch à atual preservando um commit explícito de merge.',
        module: 'Controle de Versão',
        link: 'pages/controle-versao.html'
    },
    {
        title: 'Reorganizar commits locais',
        keywords: ['reorganizar commits', 'editar commits', 'rebase interativo', 'juntar commits'],
        command: 'git rebase -i HEAD~N',
        description: 'Permite editar, reordenar ou combinar os últimos N commits locais.',
        module: 'Controle de Versão',
        link: 'pages/controle-versao.html'
    },
    {
        title: 'Trazer um commit específico',
        keywords: ['copiar commit', 'pegar commit', 'cherry pick', 'aplicar commit especifico'],
        command: 'git cherry-pick <commit>',
        description: 'Aplica as alterações de um commit específico na branch atual.',
        module: 'Controle de Versão',
        link: 'pages/controle-versao.html'
    },
    {
        title: 'Atualizar a branch com o remoto',
        keywords: ['baixar atualizacoes git', 'atualizar branch', 'pull rebase', 'sincronizar repositorio'],
        command: 'git pull --rebase origin main',
        description: 'Busca atualizações do remoto e reaplica seus commits locais por cima delas.',
        module: 'Controle de Versão',
        link: 'pages/controle-versao.html'
    },
    {
        title: 'Consultar dados com filtro',
        keywords: ['buscar dados sql', 'select com filtro', 'consultar registros', 'where sql'],
        command: 'SELECT * FROM usuarios WHERE status = \'ATIVO\';',
        description: 'Consulta registros de uma tabela aplicando uma condição com WHERE.',
        module: 'Dados',
        link: 'pages/dados.html'
    },
    {
        title: 'Buscar valores únicos',
        keywords: ['valores unicos sql', 'distinct', 'remover duplicados consulta', 'dados distintos'],
        command: 'SELECT DISTINCT cidade FROM usuarios;',
        description: 'Retorna apenas os valores diferentes encontrados em uma coluna.',
        module: 'Dados',
        link: 'pages/dados.html'
    },
    {
        title: 'Filtrar por intervalo',
        keywords: ['intervalo sql', 'between', 'filtrar datas', 'entre dois valores'],
        command: 'SELECT * FROM pedidos WHERE total BETWEEN 100 AND 500;',
        description: 'Filtra registros cujo valor está dentro de um intervalo definido.',
        module: 'Dados',
        link: 'pages/dados.html'
    },
    {
        title: 'Relacionar duas tabelas',
        keywords: ['relacionar tabelas', 'join sql', 'inner join', 'juntar tabelas'],
        command: 'SELECT * FROM pedidos p INNER JOIN usuarios u ON u.id = p.usuario_id;',
        description: 'Combina registros relacionados de duas tabelas usando uma chave em comum.',
        module: 'Dados',
        link: 'pages/dados.html'
    },
    {
        title: 'Manter todos os registros da primeira tabela',
        keywords: ['left join', 'todos da esquerda', 'tabela sem correspondencia', 'join externo'],
        command: 'SELECT * FROM usuarios u LEFT JOIN pedidos p ON p.usuario_id = u.id;',
        description: 'Mantém todos os registros da tabela da esquerda, mesmo sem correspondência.',
        module: 'Dados',
        link: 'pages/dados.html'
    },
    {
        title: 'Agrupar e contar registros',
        keywords: ['agrupar dados', 'group by', 'contar por grupo', 'count sql'],
        command: 'SELECT status, COUNT(*) FROM pedidos GROUP BY status;',
        description: 'Agrupa registros por uma coluna e conta quantos existem em cada grupo.',
        module: 'Dados',
        link: 'pages/dados.html'
    },
    {
        title: 'Filtrar grupos agregados',
        keywords: ['having sql', 'filtrar grupos', 'grupo com mais registros', 'agregacao sql'],
        command: 'SELECT usuario_id, COUNT(*) AS total FROM pedidos GROUP BY usuario_id HAVING COUNT(*) > 5;',
        description: 'Filtra o resultado depois do GROUP BY usando uma função de agregação.',
        module: 'Dados',
        link: 'pages/dados.html'
    },
    {
        title: 'Adicionar uma coluna',
        keywords: ['adicionar coluna', 'alterar tabela', 'alter table', 'nova coluna sql'],
        command: 'ALTER TABLE usuarios ADD COLUMN telefone VARCHAR(20);',
        description: 'Altera a estrutura de uma tabela adicionando uma nova coluna.',
        module: 'Dados',
        link: 'pages/dados.html'
    },
    {
        title: 'Atualizar registros com segurança',
        keywords: ['alterar dados sql', 'update sql', 'atualizar registros', 'mudar valor tabela'],
        command: 'UPDATE usuarios SET status = \'INATIVO\' WHERE id = 10;',
        description: 'Atualiza registros específicos. Use WHERE para evitar alterar a tabela inteira.',
        module: 'Dados',
        link: 'pages/dados.html'
    },
    {
        title: 'Remover registros com filtro',
        keywords: ['apagar registros', 'delete sql', 'excluir dados', 'remover linha tabela'],
        command: 'DELETE FROM usuarios WHERE id = 10;',
        description: 'Remove registros que atendem à condição informada.',
        module: 'Dados',
        link: 'pages/dados.html'
    },
    {
        title: 'Ver todos os containers',
        keywords: ['listar containers parados', 'docker ps all', 'containers existentes', 'todos containers'],
        command: 'docker ps -a',
        description: 'Lista containers em execução e também os que estão parados.',
        module: 'DevOps',
        link: 'pages/devops.html'
    },
    {
        title: 'Criar um container em segundo plano',
        keywords: ['criar container', 'rodar container', 'docker run', 'container background'],
        command: 'docker run -d --name meu-nginx -p 8080:80 nginx',
        description: 'Cria um container nomeado, publica uma porta e o mantém em segundo plano.',
        module: 'DevOps',
        link: 'pages/devops.html'
    },
    {
        title: 'Acessar o terminal de um container',
        keywords: ['entrar no container', 'shell container', 'docker exec', 'acessar bash docker'],
        command: 'docker exec -it nome-do-container bash',
        description: 'Abre um shell interativo dentro de um container em execução.',
        module: 'DevOps',
        link: 'pages/devops.html'
    },
    {
        title: 'Acompanhar logs de um container',
        keywords: ['logs docker', 'ver logs container', 'docker logs follow', 'seguir logs docker'],
        command: 'docker logs -f --tail 100 nome-do-container',
        description: 'Mostra as últimas linhas e acompanha novos logs em tempo real.',
        module: 'DevOps',
        link: 'pages/devops.html'
    },
    {
        title: 'Parar um container',
        keywords: ['parar container', 'desligar docker', 'stop docker', 'interromper container'],
        command: 'docker stop nome-do-container',
        description: 'Para um container em execução de forma controlada.',
        module: 'DevOps',
        link: 'pages/devops.html'
    },
    {
        title: 'Criar uma imagem Docker',
        keywords: ['build docker', 'criar imagem', 'dockerfile imagem', 'construir imagem docker'],
        command: 'docker build -t minha-imagem:latest .',
        description: 'Constrói uma imagem usando o Dockerfile do diretório atual.',
        module: 'DevOps',
        link: 'pages/devops.html'
    },
    {
        title: 'Ver imagens disponíveis',
        keywords: ['listar imagens docker', 'docker images', 'imagens locais', 'ver imagens'],
        command: 'docker images',
        description: 'Lista as imagens disponíveis localmente e suas tags.',
        module: 'DevOps',
        link: 'pages/devops.html'
    },
    {
        title: 'Ver redes e volumes Docker',
        keywords: ['rede docker', 'volume docker', 'listar volumes', 'docker network'],
        command: 'docker network ls && docker volume ls',
        description: 'Exibe as redes e os volumes persistentes disponíveis no Docker.',
        module: 'DevOps',
        link: 'pages/devops.html'
    },
    {
        title: 'Derrubar serviços do Compose',
        keywords: ['parar compose', 'derrubar docker compose', 'docker compose down', 'remover servicos'],
        command: 'docker compose down',
        description: 'Para e remove os containers criados pelo arquivo Docker Compose.',
        module: 'DevOps',
        link: 'pages/devops.html'
    },
    {
        title: 'Recriar serviços do Compose',
        keywords: ['rebuild compose', 'recriar containers', 'subir compose build', 'docker compose build'],
        command: 'docker compose up -d --build',
        description: 'Reconstrói as imagens e sobe os serviços em segundo plano.',
        module: 'DevOps',
        link: 'pages/devops.html'
    },
    {
        title: 'Limpar recursos Docker',
        keywords: ['limpar docker', 'excluir imagens paradas', 'docker prune', 'liberar espaco docker'],
        command: 'docker system prune -a',
        description: 'Remove recursos Docker não utilizados. Revise antes de confirmar, pois pode apagar imagens importantes.',
        module: 'DevOps',
        link: 'pages/devops.html'
    }
];

const normalizeText = (text) => text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const getSearchScore = (entry, query) => {
    const normalizedQuery = normalizeText(query);
    const queryWords = normalizedQuery.split(' ').filter((word) => word.length > 1);
    const searchableText = normalizeText(`${entry.title} ${entry.description} ${entry.module} ${entry.command} ${entry.keywords.join(' ')}`);

    if (searchableText.includes(normalizedQuery)) {
        return 100 + normalizedQuery.length;
    }

    return queryWords.reduce((score, word) => score + (searchableText.includes(word) ? 5 : 0), 0);
};

const createResultCard = (entry) => {
    const result = document.createElement('article');
    result.className = 'smart-result';

    const heading = document.createElement('div');
    heading.className = 'smart-result-heading';

    const title = document.createElement('h3');
    title.textContent = entry.title;

    const module = document.createElement('span');
    module.className = 'smart-result-module';
    module.textContent = entry.module;

    heading.append(title, module);

    const description = document.createElement('p');
    description.textContent = entry.description;

    const command = document.createElement('code');
    command.className = 'smart-command';
    command.textContent = entry.command;

    const actions = document.createElement('div');
    actions.className = 'smart-result-actions';

    const copyButton = document.createElement('button');
    copyButton.className = 'smart-action';
    copyButton.type = 'button';
    copyButton.textContent = '📋 Copiar comando';
    copyButton.addEventListener('click', async () => {
        await navigator.clipboard.writeText(entry.command);
        copyButton.textContent = '✓ Copiado';
        window.setTimeout(() => { copyButton.textContent = '📋 Copiar comando'; }, 1600);
    });

    const link = document.createElement('a');
    link.className = 'smart-action smart-link';
    link.href = entry.link;
    link.textContent = 'Abrir módulo →';

    actions.append(copyButton, link);
    result.append(heading, description, command, actions);
    return result;
};

const searchForm = document.querySelector('#smartSearchForm');
const searchInput = document.querySelector('#searchInput');
const searchResults = document.querySelector('#smartSearchResults');
const searchSummary = document.querySelector('#smartSearchSummary');
const suggestionButtons = document.querySelectorAll('[data-query]');

const renderSearch = (query) => {
    const normalizedQuery = normalizeText(query);
    searchResults.replaceChildren();

    if (!normalizedQuery) {
        searchResults.hidden = true;
        return;
    }

    const matches = knowledgeDictionary
        .map((entry) => ({ entry, score: getSearchScore(entry, normalizedQuery) }))
        .filter((item) => item.score > 0)
        .sort((first, second) => second.score - first.score)
        .slice(0, 6);

    searchResults.hidden = false;
    searchSummary.textContent = matches.length
        ? `${matches.length} resultado${matches.length === 1 ? '' : 's'} para “${query}”`
        : `Nenhum resultado para “${query}”`;

    if (!matches.length) {
        const emptyState = document.createElement('p');
        emptyState.className = 'smart-empty';
        emptyState.textContent = 'Tente termos como “pastas ocultas”, “processos”, “Docker” ou “status do Git”.';
        searchResults.append(emptyState);
        return;
    }

    matches.forEach(({ entry }) => searchResults.append(createResultCard(entry)));
};

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    renderSearch(searchInput.value);
});

searchInput.addEventListener('input', () => {
    if (searchInput.value.trim().length >= 2) {
        renderSearch(searchInput.value);
    } else {
        searchResults.hidden = true;
    }
});

suggestionButtons.forEach((button) => {
    button.addEventListener('click', () => {
        searchInput.value = button.dataset.query;
        renderSearch(searchInput.value);
        searchInput.focus();
    });
});
