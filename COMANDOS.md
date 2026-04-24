# 🚀 COMANDOS PARA RODAR O FLATOYS

## ✅ COMANDOS CORRETOS (Use estes!)

### Backend (escolha UMA das opções):

#### Opção 1: Com Maven Wrapper (RECOMENDADO - não precisa instalar Maven)
```bash
cd backend
.\mvnw.cmd spring-boot:run
```

#### Opção 2: Se você instalar o Maven
```bash
cd backend
mvn spring-boot:run
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

---

## 📝 Passo a Passo Completo

### 1. Abrir Terminal/PowerShell

### 2. Navegar até a pasta do projeto
```bash
cd "C:\Users\lucas\Desktop\Projetos Jadir\Flatoys-final1"
```

### 3. Iniciar o XAMPP
- Abra o XAMPP Control Panel
- Clique em "Start" no MySQL

### 4. Rodar o Backend
```bash
cd backend
.\mvnw.cmd spring-boot:run
```

**AGUARDE** até ver a mensagem:
```
Started FlatoysApplication in X.XXX seconds
```

### 5. Abrir OUTRO terminal e rodar o Frontend
```bash
cd "C:\Users\lucas\Desktop\Projetos Jadir\Flatoys-final1\frontend"
npm install
npm run dev
```

### 6. Acessar no navegador
```
http://localhost:3000
```

---

## ⚠️ Problemas Comuns

### "mvnw.cmd não é reconhecido"
**Solução**: Use o caminho completo
```bash
cd "C:\Users\lucas\Desktop\Projetos Jadir\Flatoys-final1\backend"
.\mvnw.cmd spring-boot:run
```

### "Porta 8080 já está em uso"
**Solução**: Mate o processo
```bash
netstat -ano | findstr :8080
taskkill /PID [NUMERO] /F
```

### "Cannot connect to database"
**Solução**: Verifique se o MySQL do XAMPP está rodando

### Primeira execução demora muito
**Normal!** O Maven Wrapper vai baixar o Maven na primeira vez (pode levar 2-5 minutos)

---

## 🎯 Credenciais de Login

**Admin:**
- Email: admin@flatoys.com
- Senha: admin123

**Usuário:**
- Email: usuario@flatoys.com
- Senha: user123
