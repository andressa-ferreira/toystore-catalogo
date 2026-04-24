Video de demonstração: (https://youtu.be/8DnR0TXI8yc)
🧸 ToyStore - Sistema web de gerenciamento de produtos e categorias para uma loja de brinquedos, com controle de acesso entre administrador e usuários comuns.

Sobre o Projeto:
A ToyStore é uma aplicação fullstack que implementa um sistema CRUD completo para gerenciamento de produtos e categorias.

O sistema permite:
Criar, editar e excluir categorias
Criar, editar e excluir produtos
Associar produtos a categorias
Cadastro e autenticação de usuários
Controle de permissões (admin vs usuário comum)

⚙️ Tecnologias Utilizadas
- Backend
Java
Spring Boot
Maven
- Frontend
React
- Banco de Dados
MySQL
XAMPP



👤 Tipos de Usuário
 - Admin
Usuário padrão já criado no sistema
Acesso com email: @admin
Permissões:
Gerenciar categorias (CRUD)
Gerenciar produtos (CRUD)
Associar produtos a categorias
- Usuário Comum
Pode criar conta e acessar o sistema
Permissões:
Navegar pelos produtos
Visualizar categorias
Não possui acesso às funções administrativas

🧩 Funcionalidades
- Categorias
Criar novas categorias
Editar categorias existentes
Excluir categorias
Validação para evitar duplicidade
- Produtos
Criar novos produtos
Editar produtos
Excluir produtos
Associar produto a uma categoria
Validação para evitar produtos duplicados
- Autenticação
Cadastro de usuários
Login
Validação de:
Campos obrigatórios
Email duplicado

⚠️ Tratamento de Erros
Campos obrigatórios não preenchidos
Email já cadastrado
Produtos inexistentes em buscas
Tentativa de cadastro duplicado (produtos/categorias)
Feedback visual direto na interface

🗃️ Manipulação de Dados
Pela interface da aplicação
Diretamente no banco de dados (MySQL via XAMPP)

🚀 Como Executar o Projeto
Java JDK
Maven
Node.js
XAMPP (MySQL)

📈 Possíveis Melhorias
Implementação de autenticação
Controle mais robusto de permissões (RBAC)
Deploy em nuvem
Sistema de estoque

📄 Este projeto é de uso acadêmico e pode ser utilizado como base para estudos e melhorias.

