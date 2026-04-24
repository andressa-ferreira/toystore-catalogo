# 🚀 Guia de Instalação e Execução - FLATOYS

## Passo a Passo Completo

### 1️⃣ Preparar o Ambiente

#### Instalar XAMPP
1. Baixe o XAMPP em: https://www.apachefriends.org/
2. Instale o XAMPP
3. Abra o XAMPP Control Panel
4. Inicie o módulo **MySQL**

#### Verificar Java
```bash
java -version
```
Deve mostrar Java 17 ou superior. Se não tiver, baixe em: https://www.oracle.com/java/technologies/downloads/

#### Verificar Node.js
```bash
node -v
npm -v
```
Deve mostrar Node 18 ou superior. Se não tiver, baixe em: https://nodejs.org/

### 2️⃣ Configurar o Backend

1. Abra um terminal/prompt de comando
2. Navegue até a pasta do backend:
```bash
cd "C:\Users\lucas\Desktop\Projetos Jadir\Flatoys-final1\backend"
```

3. Instale as dependências:
```bash
mvn clean install
```

4. Execute o backend:
```bash
mvn spring-boot:run
```

**✅ Sucesso**: Você verá mensagens indicando:
- Servidor iniciado na porta 8080
- Usuários de teste criados
- Categorias criadas
- Brinquedos de exemplo criados

**Mantenha este terminal aberto!**

### 3️⃣ Configurar o Frontend

1. Abra um **NOVO** terminal/prompt de comando
2. Navegue até a pasta do frontend:
```bash
cd "C:\Users\lucas\Desktop\Projetos Jadir\Flatoys-final1\frontend"
```

3. Instale as dependências:
```bash
npm install
```

4. Execute o frontend:
```bash
npm run dev
```

**✅ Sucesso**: Você verá uma mensagem como:
```
VITE v5.0.4  ready in XXX ms

➜  Local:   http://localhost:3000/
```

**Mantenha este terminal aberto também!**

### 4️⃣ Acessar a Aplicação

1. Abra seu navegador
2. Acesse: **http://localhost:3000**
3. Você verá a página de login do FLATOYS

### 5️⃣ Fazer Login

Use uma das credenciais de teste:

**Administrador (acesso completo):**
- Email: `admin@flatoys.com`
- Senha: `admin123`

**Usuário Comum (apenas visualização):**
- Email: `usuario@flatoys.com`
- Senha: `user123`

## 🎯 Testando as Funcionalidades

### Como Usuário Comum:
1. Faça login com `usuario@flatoys.com`
2. Navegue pela **Home** - veja os brinquedos em destaque
3. Acesse o **Catálogo** - filtre por categorias
4. Use a **busca** para encontrar brinquedos
5. Veja a página **Sobre a Equipe**

### Como Administrador:
1. Faça login com `admin@flatoys.com`
2. Acesse **Administração** no menu lateral
3. Clique em **Novo Brinquedo** para cadastrar
4. Preencha o formulário:
   - Código: TOY007
   - Descrição: Carrinho de Controle Remoto
   - Categoria: Carrinhos
   - Marca: Hot Wheels
   - Valor: 149.90
   - URL da Imagem: https://via.placeholder.com/300x300?text=Carrinho+RC
   - Detalhes: Carrinho com controle remoto de alta velocidade
   - Marque "Brinquedo em Destaque"
5. Clique em **Salvar**
6. Teste editar e excluir brinquedos

## ❌ Solução de Problemas

### Erro: "Port 8080 already in use"
**Solução**: Outra aplicação está usando a porta 8080
```bash
# Windows: Encontre e mate o processo
netstat -ano | findstr :8080
taskkill /PID [número_do_processo] /F
```

### Erro: "Cannot connect to database"
**Solução**: 
1. Verifique se o MySQL do XAMPP está rodando
2. Abra o phpMyAdmin: http://localhost/phpmyadmin
3. Verifique se o banco `flatoys_bd2` foi criado

### Erro: "npm install" falha
**Solução**:
```bash
# Limpe o cache do npm
npm cache clean --force

# Tente novamente
npm install
```

### Erro: "mvn command not found"
**Solução**: Maven não está instalado ou não está no PATH
1. Baixe o Maven: https://maven.apache.org/download.cgi
2. Configure as variáveis de ambiente

### Frontend não carrega dados
**Solução**:
1. Verifique se o backend está rodando (http://localhost:8080)
2. Abra o Console do navegador (F12) e veja os erros
3. Verifique se há erros de CORS

## 📱 Navegação Rápida

- **Home**: http://localhost:3000/
- **Catálogo**: http://localhost:3000/catalog
- **Admin**: http://localhost:3000/admin (requer login admin)
- **Sobre**: http://localhost:3000/about
- **Login**: http://localhost:3000/login

## 🛑 Para Parar a Aplicação

1. No terminal do **frontend**: Pressione `Ctrl + C`
2. No terminal do **backend**: Pressione `Ctrl + C`
3. No XAMPP: Pare o MySQL

## 🔄 Para Reiniciar

1. Inicie o MySQL no XAMPP
2. Execute o backend: `mvn spring-boot:run`
3. Execute o frontend: `npm run dev`

## 📊 Verificar se está Funcionando

### Backend
Acesse: http://localhost:8080/api/toys
Deve retornar um JSON com a lista de brinquedos

### Frontend
Acesse: http://localhost:3000
Deve mostrar a página de login

## 💡 Dicas

1. **Sempre inicie o backend ANTES do frontend**
2. **Mantenha ambos os terminais abertos** enquanto usa a aplicação
3. **Use o navegador em modo anônimo** se tiver problemas de cache
4. **Verifique o Console do navegador (F12)** para ver erros
5. **Veja os logs do backend** no terminal para debug

## 📞 Checklist de Verificação

Antes de começar, certifique-se:
- [ ] XAMPP instalado e MySQL rodando
- [ ] Java 17+ instalado
- [ ] Maven instalado
- [ ] Node.js 18+ instalado
- [ ] Portas 3000 e 8080 livres
- [ ] Internet conectada (para baixar dependências)

---

**Pronto!** Agora você tem o FLATOYS rodando localmente! 🎉
