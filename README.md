# � Vakinha - Plataforma de Crowdfunding

Um site completo e moderno para criar e gerenciar campanhas de arrecadação de fundos online (vaquinhas).

## 🚀 Características

✅ **Página Inicial Atrativa** - Interface moderna com hero section e destaque de campanhas
✅ **Criar Campanhas** - Formulário completo para criar novas vaquinhas
✅ **Gerenciar Campanhas** - Listar, filtrar e buscar campanhas ativas
✅ **Detalhes da Campanha** - Visualizar progresso, apoiadores e informações detalhadas
✅ **Sistema de Doações** - Fazer apoios para as campanhas
✅ **Compartilhamento** - Compartilhar em redes sociais (Facebook, WhatsApp, Twitter)
✅ **Busca e Filtros** - Buscar por nome, categoria e ordenação customizável
✅ **Responsive Design** - Funciona perfeitamente em desktop, tablet e celular
✅ **Armazenamento Local** - Usa localStorage para persistência de dados (sem backend)

## 📋 Páginas

### 1. **index.html** - Página Inicial
- Hero section com call-to-action
- Seção de recursos e benefícios
- Campanhas em destaque
- CTA para criar vaquinha

### 2. **campanhas.html** - Listagem de Campanhas
- Lista completa de todas as vaquinhas
- Busca por texto
- Filtro por categoria
- Ordenação (recentes, populares, próximas do objetivo)

### 3. **criar.html** - Criar Nova Campanha
- Formulário completo com validação
- Campos: Título, Descrição, Valor Alvo, Data Limite, Categoria
- Informações do organizador

### 4. **detalhes.html** - Detalhes da Campanha
- Visualizar campanha completa
- Barra de progresso animada
- Formulário de doação com valores rápidos
- Lista de apoiadores
- Opções de compartilhamento
- Informações do organizador

## 🛠️ Como Usar

### 1. Abrir o Site
- Abra o arquivo `index.html` em um navegador web
- Ou acesse através de um servidor local

### 2. Explorar Campanhas
- Clique em "Campanhas" para ver todas as vaquinhas
- Use a busca e filtros para encontrar o que procura

### 3. Criar Uma Nova Vaquinha
- Clique em "+ Criar Vaquinha"
- Preencha todos os campos obrigatórios (*)
- Clique em "Criar Vaquinha"
- Sua campanha aparecerá imediatamente na listagem

### 4. Apoiar Uma Vaquinha
- Clique em uma campanha para ver os detalhes
- Escolha um valor rápido ou insira um valor customizado
- Clique em "Apoiar Agora"
- Seu apoio será registrado e você aparecerá na lista de apoiadores

### 5. Compartilhar
- Na página de detalhes, use os botões de compartilhamento
- Ou copie o link da campanha

## 📊 Categorias Disponíveis

- 🏥 Saúde
- 📚 Educação
- 🏠 Moradia
- 🚑 Emergência
- 💻 Negócios
- ✈️ Viagem
- 🎯 Outro

## 🎨 Características de Design

### Cores
- **Primária**: Roxo (#7c3aed)
- **Secundária**: Ciano (#06b6d4)
- **Sucesso**: Verde (#10b981)
- **Aviso**: Âmbar (#f59e0b)
- **Erro**: Vermelho (#ef4444)

### Responsividade
- Desktop: Layout completo com sidebars
- Tablet: Grid adaptado
- Mobile: Layout em coluna única

## 💾 Armazenamento de Dados

O site usa **localStorage** do navegador para armazenar:
- Todas as campanhas
- Informações de apoiadores
- Valores arrecadados

**Nota**: Os dados são armazenados localmente no navegador. Ao limpar o cache/cookies, os dados podem ser perdidos.

## 📁 Estrutura de Arquivos

```
Vakinha.vk/
├── index.html          # Página inicial
├── campanhas.html      # Listagem de campanhas
├── criar.html          # Formulário para criar vaquinha
├── detalhes.html       # Detalhes da campanha
├── styles.css          # Estilos CSS
├── script.js           # Lógica JavaScript
└── README.md           # Este arquivo
```

## 🔧 Funcionalidades Técnicas

### JavaScript
- Gerenciamento de campanhas com localStorage
- Filtros e busca dinâmica
- Cálculo de progresso e dias restantes
- Formatação de valores em BRL
- Modais e animações

### CSS
- Grid responsivo
- Animações suaves
- Gradientes modernos
- Hover effects

## 📱 Compatibilidade

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Navegadores mobile

## 🎓 Exemplo de Uso

### Criar uma vaquinha:
1. Clique em "+ Criar Vaquinha"
2. Preencha:
   - Título: "Cirurgia Urgente"
   - Descrição: "Meu pai precisa de uma cirurgia..."
   - Valor: R$ 10.000,00
   - Data Limite: 2024-09-18
   - Categoria: Saúde
3. Clique em "Criar Vaquinha"

### Apoiar uma vaquinha:
1. Vá para "Campanhas"
2. Clique em uma vaquinha
3. Na seção "Apoie esta Vaquinha"
4. Escolha um valor ou insira um custom
5. Clique em "Apoiar Agora"
6. Seu apoio será registrado!

## 🚀 Próximas Melhorias

- [ ] Backend com banco de dados
- [ ] Autenticação de usuários
- [ ] Sistema de pagamento real
- [ ] Notificações por email
- [ ] Comentários e atualizações de campanha
- [ ] Avaliações e comentários de apoiadores
- [ ] Integração com redes sociais
- [ ] Dashboard de analytics

## 📞 Suporte

Para dúvidas ou sugestões, entre em contato através do email na página de contato.

---

**Vakinha** - Realizando sonhos através da comunidade! 💜

Versão 1.0 - 2024
