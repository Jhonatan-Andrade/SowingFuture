# Requisitos de Software

### Objetivo
Este documento descreve os requisitos funcionais e não funcionais do sistema de gestão financeira pessoal. O sistema permitirá que usuários registrem e acompanhem receitas, despesas e economias, gerando relatórios visuais e exportáveis, além de possibilitar a criação de cofres virtuais com metas financeiras.

### 1. Escopo do Sistema
O sistema fornecerá:
- Cadastro e gerenciamento de usuários.
- Registro e controle de receitas e despesas.
- Criação e gerenciamento de cofres virtuais (economias).
- Relatórios financeiros mensais em formatos gráficos e exportáveis.
- Funcionalidades de segurança, recuperação de senha e validação de dados.

## 2. Requisitos Funcionais

### 2.1 Usuário

| ID   | Requisito | Descrição |
|------|-----------|-----------|
| RF01 | Cadastro de Usuário | Permitir que novos usuários se cadastrem informando nome, e-mail e senha. |
| RF02 | Validação de Campos | Validar preenchimento correto dos campos obrigatórios: e-mail no formato válido e senha seguindo regras definidas. |
| RF03 | E-mail Único | Impedir cadastro de usuários com e-mail já existente na base de dados. |
| RF04 | Confirmação de Cadastro | Enviar e-mail de confirmação com link de ativação para validar o cadastro do usuário. |
| RF05 | Recuperação de Conta | Permitir recuperação de conta em caso de esquecimento de senha, enviando link para redefinição. |
| RF06 | Login | Permitir que usuários cadastrados realizem login usando e-mail e senha. |
| RF07 | Atualização de Perfil | Permitir atualização de informações do perfil, como senha e foto. |


### 2.2 Receitas e Despesas (Transações)

| ID   | Requisito | Descrição |
|------|-----------|-----------|
| RF08 | Registro de Transações | Possibilitar o registro de receitas e despesas classificadas por tipo e categoria (ex.: moradia, saúde, educação, entretenimento, salário, freelance, investimento e outros). |
| RF09 | Edição e Exclusão | Permitir edição e exclusão das transações registradas. |
| RF10 | Relatórios Mensais | Gerar relatórios mensais em formato visual (gráficos e tabelas) no dashboard. |
| RF11 | Exportação de Dados | Permitir exportação dos dados financeiros em PDF e Excel. |


### 2.3 Economias (Cofres)

| ID   | Requisito | Descrição |
|------|-----------|-----------|
| RF12 | Criação de Cofres | Permitir que o usuário crie um ou mais cofres virtuais (ex.: Viagem, Emergência, Natal). |
| RF13 | Meta de Valor | Permitir definição de uma meta de valor para cada cofre. |
| RF14 | Progresso da Meta | Exibir o progresso da meta em formato percentual e gráfico (barra ou círculo). |
| RF15 | Depósitos Manuais | Permitir registro de depósitos manuais no cofre (informando valor e data). |
| RF16 | Saldo Acumulado | Calcular e exibir o saldo acumulado de cada cofre. |
| RF17 | Saque de Valores | Permitir saque parcial ou total dos valores acumulados nos cofres. |
| RF18 | Relatórios de Cofres | Gerar relatórios simples de entradas e saídas de cada cofre. |
| RF19 | Exclusão de Cofres | Permitir que o usuário delete cofres virtuais. |


## 3. Principais Casos de Uso 

### 3.1 Cadastro de Usuário
**Ator:** Usuário (novo)  
**Pré-condição:** O usuário não possui conta no sistema.  

**Fluxo Principal:**  
1. Usuário acessa a tela de cadastro.  
2. Usuário preenche os campos obrigatórios: nome, e-mail e senha.  
3. Sistema valida os dados (formato do e-mail, regras de senha e e-mail único).  
4. Sistema envia e-mail de confirmação com link de ativação.  
5. Usuário clica no link e ativa a conta.  

**Fluxos Alternativos:**  
- Caso o e-mail já exista → Sistema informa o erro e solicita outro e-mail.  
- Caso os dados estejam incorretos → Sistema exibe mensagens de validação.


### 3.2 Login e Gerenciamento de Perfil
**Ator:** Usuário registrado  
**Pré-condição:** Usuário possui conta ativa.  

**Fluxo Principal:**  
1. Usuário acessa a tela de login.  
2. Usuário informa e-mail e senha.  
3. Sistema autentica os dados.  
4. Usuário acessa o dashboard.  
5. Usuário pode atualizar informações do perfil, como senha e foto.  

**Fluxos Alternativos:**  
- Esqueceu a senha → Sistema envia link de redefinição.  
- Dados inválidos → Sistema exibe mensagem de erro.


### 3.3 Registro de Transações (Receitas e Despesas)
**Ator:** Usuário registrado  
**Pré-condição:** Usuário está logado no sistema.  

**Fluxo Principal:**  
1. Usuário acessa a tela de transações.  
2. Seleciona tipo de transação (receita ou despesa).  
3. Escolhe a categoria correspondente (ex.: moradia, saúde, educação).  
4. Informa valor, data e descrição .  
5. Sistema registra a transação.  
6. Dados são atualizados no dashboard e relatórios.  

**Fluxos Alternativos:**  
- Edição de transações → Usuário altera dados existentes → Sistema atualiza registros.  
- Exclusão de transações → Usuário confirma exclusão → Sistema remove o registro.


### 3.4 Gestão de Cofres Virtuais
**Ator:** Usuário registrado  
**Pré-condição:** Usuário está logado no sistema.  

**Fluxo Principal:**  
1. Usuário acessa a tela de cofres.  
2. Cria um novo cofre e define meta de valor.  
3. Realiza depósitos manuais informando valor e data.  
4. Sistema calcula e exibe saldo acumulado e progresso da meta em gráfico.  
5. Usuário pode realizar saques parciais ou totais.  
6. Sistema atualiza automaticamente saldo e relatórios.  
7. Usuário pode deletar cofres se desejar.  

**Fluxos Alternativos:**  
- Usuário atinge a meta → Sistema notifica sucesso.  
- Saque parcial → Sistema ajusta saldo acumulado e gráficos.


### 3.5 Geração e Exportação de Relatórios
**Ator:** Usuário registrado  
**Pré-condição:** Usuário possui transações e/ou cofres registrados.  

**Fluxo Principal:**  
1. Usuário acessa a seção de relatórios no dashboard.  
2. Sistema apresenta gráficos e tabelas resumindo receitas, despesas e cofres.  
3. Usuário seleciona opção de exportação (PDF ou Excel).  
4. Sistema gera arquivo e disponibiliza download.  

**Fluxos Alternativos:**  
- Filtro de período → Usuário escolhe mês/ano específico → Relatório é atualizado.
