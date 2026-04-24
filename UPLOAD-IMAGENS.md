# 📸 Sistema de Upload de Imagens - FLATOYS

## Como Funciona

O sistema agora permite fazer upload de imagens localmente através do formulário de brinquedos.

## 🎯 Como Usar

### 1. Acessar a Administração
- Faça login como **admin** (admin@flatoys.com / admin123)
- Clique em **Administração** no menu lateral
- Clique em **Novo Brinquedo** ou **Editar** um brinquedo existente

### 2. Fazer Upload da Imagem

No formulário de brinquedo:

1. **Escolher Imagem**
   - Clique no botão "Escolher Imagem"
   - Selecione uma imagem do seu computador
   - Formatos aceitos: JPG, PNG, GIF, etc.
   - Tamanho máximo: 5MB

2. **Preview**
   - A imagem aparecerá em preview automaticamente

3. **Fazer Upload**
   - Clique no botão "Fazer Upload"
   - Aguarde a mensagem de sucesso
   - A URL da imagem será gerada automaticamente

4. **Salvar o Brinquedo**
   - Preencha os outros campos
   - Clique em "Salvar"

## 📁 Onde as Imagens São Salvas

As imagens são salvas localmente em:
```
backend/uploads/images/
```

Cada imagem recebe um nome único (UUID) para evitar conflitos.

## 🔗 Como as Imagens São Acessadas

As imagens são servidas pelo backend através da URL:
```
http://localhost:8080/api/upload/images/[nome-do-arquivo]
```

O frontend acessa automaticamente essa URL para exibir as imagens.

## ✅ Validações

- **Tipo de arquivo**: Apenas imagens são aceitas
- **Tamanho**: Máximo de 5MB por imagem
- **Nome único**: Cada imagem recebe um UUID único

## 🎨 Fluxo Completo

1. Usuário seleciona imagem → Preview aparece
2. Usuário clica "Fazer Upload" → Imagem é enviada ao backend
3. Backend salva em `uploads/images/` → Retorna URL
4. URL é preenchida automaticamente no formulário
5. Usuário salva o brinquedo → Imagem fica vinculada

## 🔧 Configuração

A pasta de upload pode ser configurada em:
```
backend/src/main/resources/application.properties
```

Propriedade:
```properties
app.upload.dir=uploads/images
```

## 📌 Observações

- As imagens são salvas **localmente** no servidor
- Ao deletar um brinquedo, a imagem **não é deletada automaticamente**
- Para produção, considere usar um serviço de armazenamento em nuvem
- O diretório `uploads/` está no `.gitignore` para não versionar as imagens

## 🚀 Exemplo de Uso

1. Clique em "Novo Brinquedo"
2. Preencha:
   - Código: TOY010
   - Descrição: Boneco Super-Herói
   - Categoria: Bonecos
   - Marca: Marvel
   - Valor: 89.90
3. Clique em "Escolher Imagem" e selecione uma foto
4. Clique em "Fazer Upload"
5. Aguarde a confirmação
6. Clique em "Salvar"
7. Pronto! O brinquedo aparecerá com a imagem no catálogo
