 Guia de Instalação e Execução - TOYSTORE
 a) Instalar XAMPP
1. Baixe o XAMPP em: https://www.apachefriends.org/
2. Instale o XAMPP
3. Abra o XAMPP Control Panel
4. Inicie o módulo **MySQL**

b) Verificar Java
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

### Configurar o Backend

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
3. Instale as dependências:
4. Execute o frontend: Você verá uma mensagem como:
```VITE v5.0.4  ready in XXX ms
➜  Local:   http://localhost:3000/
```
### 4️⃣ Acessar a Aplicação

1. Abra seu navegador
2. Acesse: **http://localhost:3000**
3. Você verá a página de login do Toystore
   
### 5️⃣ Fazer Login
Use uma das credenciais de teste:
**Administrador (acesso completo):**
- Email: `admin@toystore.com`
- Senha: `admin123`

**Usuário Comum (apenas visualização):**
- Email: `usuario@toystore.com`
- Senha: `user123`

## 🎯 Testando as Funcionalidades

### Como Usuário Comum:
1. Faça login com `usuario@toystore.com`
2. Navegue pela **Home** - veja os brinquedos em destaque
3. Acesse o **Catálogo** - filtre por categorias
4. Use a **busca** para encontrar brinquedos
5. Veja a página **Sobre a Equipe**

### Como Administrador:
1. Faça login com `admin@toystore.com`
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
