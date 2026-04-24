# FLATOYS - Catálogo de Brinquedos

Sistema completo de gerenciamento de catálogo de brinquedos desenvolvido com Spring Boot e React.

## 🎯 Sobre o Projeto

FLATOYS é uma aplicação web local para gerenciamento de catálogo de brinquedos, com funcionalidades de autenticação, navegação por categorias e administração de produtos.

### Identidade Visual
- **Cores**: Preto, Vermelho (#E31937) e Branco (tema Flamengo)
- **Fonte**: Open Sans

## 🚀 Tecnologias

### Backend
- Java 17
- Spring Boot 3.1.5
- Spring Data JPA
- MySQL 8.0
- Maven

### Frontend
- React 18
- React Router DOM
- Axios
- Vite
- React Icons

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado:

- **Java JDK 17** ou superior
- **Maven 3.6+**
- **Node.js 18+** e npm
- **XAMPP** (para MySQL)

## 🔧 Configuração do Ambiente

### 1. Configurar o Banco de Dados

1. Inicie o XAMPP e ative o MySQL
2. O banco de dados `flatoys_bd2` será criado automaticamente na primeira execução
3. Configuração padrão:
   - Host: `localhost:3306`
   - Usuário: `root`
   - Senha: (vazio)
   - Database: `flatoys_bd2`

### 2. Configurar o Backend

```bash
# Navegar para a pasta do backend
cd backend

# Instalar dependências e compilar
mvn clean install

# Executar a aplicação
mvn spring-boot:run
```

O backend estará rodando em: `http://localhost:8080`

### 3. Configurar o Frontend

```bash
# Navegar para a pasta do frontend
cd frontend

# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev
```

O frontend estará rodando em: `http://localhost:3000`

## 👥 Usuários de Teste

O sistema cria automaticamente dois usuários de teste:

### Administrador
- **Email**: admin@flatoys.com
- **Senha**: admin123
- **Permissões**: Acesso total (visualização + administração)

### Usuário Comum
- **Email**: usuario@flatoys.com
- **Senha**: user123
- **Permissões**: Apenas visualização do catálogo

## 📱 Funcionalidades

### Para Todos os Usuários
- ✅ Visualizar página inicial com brinquedos em destaque
- ✅ Navegar pelo catálogo completo de brinquedos
- ✅ Filtrar brinquedos por categoria
- ✅ Buscar brinquedos por nome ou marca
- ✅ Criar nova conta de usuário
- ✅ Fazer login no sistema

### Para Administradores
- ✅ Cadastrar novos brinquedos
- ✅ Editar informações de brinquedos existentes
- ✅ Excluir brinquedos do catálogo
- ✅ Marcar brinquedos como destaque
- ✅ Gerenciar categorias

## 🗂️ Estrutura do Projeto

```
Flatoys-final1/
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/flatoys/
│   │   │   │   ├── config/          # Configurações (CORS, Data Initializer)
│   │   │   │   ├── controller/      # Controllers REST
│   │   │   │   ├── dto/             # Data Transfer Objects
│   │   │   │   ├── model/           # Entidades JPA
│   │   │   │   ├── repository/      # Repositories
│   │   │   │   ├── service/         # Camada de serviço
│   │   │   │   └── FlatoysApplication.java
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── pom.xml
│   └── uploads/                     # Diretório para imagens
│
├── frontend/
│   ├── src/
│   │   ├── components/              # Componentes reutilizáveis
│   │   │   ├── Layout.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── PrivateRoute.jsx
│   │   ├── context/                 # Context API
│   │   │   └── AuthContext.jsx
│   │   ├── pages/                   # Páginas da aplicação
│   │   │   ├── Home.jsx
│   │   │   ├── Catalog.jsx
│   │   │   ├── Admin.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── About.jsx
│   │   ├── services/                # Serviços API
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

## 🎨 Páginas da Aplicação

### 1. Home
- Brinquedos em destaque
- Seção informativa
- Acesso rápido ao catálogo

### 2. Catálogo de Brinquedos
- Faixa de categorias com imagens
- Filtro por categoria
- Busca por texto
- Grid de produtos com informações completas

### 3. Administração (Apenas Admin)
- Tabela com todos os brinquedos
- Botão "Novo Brinquedo"
- Ações de editar e excluir
- Formulário modal para cadastro/edição

### 4. Sobre a Equipe
- Informações do projeto
- Tecnologias utilizadas
- Identidade visual

### 5. Login/Registro
- Autenticação de usuários
- Criação de novas contas

## 🔌 API Endpoints

### Autenticação
- `POST /api/auth/login` - Login de usuário
- `POST /api/auth/register` - Registro de novo usuário

### Brinquedos
- `GET /api/toys` - Listar todos os brinquedos
- `GET /api/toys/{id}` - Buscar brinquedo por ID
- `GET /api/toys/category/{category}` - Filtrar por categoria
- `GET /api/toys/featured` - Listar brinquedos em destaque
- `POST /api/toys` - Criar novo brinquedo (Admin)
- `PUT /api/toys/{id}` - Atualizar brinquedo (Admin)
- `DELETE /api/toys/{id}` - Excluir brinquedo (Admin)

### Categorias
- `GET /api/categories` - Listar todas as categorias
- `GET /api/categories/{id}` - Buscar categoria por ID
- `POST /api/categories` - Criar nova categoria (Admin)
- `PUT /api/categories/{id}` - Atualizar categoria (Admin)
- `DELETE /api/categories/{id}` - Excluir categoria (Admin)

## 📝 Campos do Formulário de Brinquedo

- **Código**: Identificador único do produto
- **Descrição**: Nome/descrição do brinquedo
- **Categoria**: Categoria do produto
- **Marca**: Fabricante do brinquedo
- **Imagem**: URL da imagem do produto
- **Valor**: Preço do brinquedo
- **Detalhes**: Informações adicionais
- **Destaque**: Marcar como produto em destaque

## 🎯 Dados de Exemplo

O sistema cria automaticamente:
- 2 usuários (admin e comum)
- 6 categorias (Bonecas, Carrinhos, Jogos de Tabuleiro, Pelúcias, Blocos de Montar, Eletrônicos)
- 6 brinquedos de exemplo

## 🛠️ Comandos Úteis

### Backend
```bash
# Compilar o projeto
mvn clean install

# Executar testes
mvn test

# Executar a aplicação
mvn spring-boot:run

# Gerar JAR
mvn package
```

### Frontend
```bash
# Instalar dependências
npm install

# Modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 🔒 Segurança

⚠️ **IMPORTANTE**: Este projeto foi desenvolvido para uso local e educacional.

- Não utiliza Spring Security (conforme requisito)
- Senhas armazenadas em texto simples
- Autenticação básica via localStorage
- **NÃO DEVE SER USADO EM PRODUÇÃO**

## 📄 Licença

Este é um projeto acadêmico desenvolvido para fins educacionais.

## 👨‍💻 Desenvolvimento

Projeto desenvolvido como sistema de catálogo de brinquedos local, focado em:
- Arquitetura REST
- Separação frontend/backend
- Interface responsiva
- CRUD completo
- Autenticação e autorização
 
---

**FLATOYS** - Catálogo de Brinquedos © 2025
