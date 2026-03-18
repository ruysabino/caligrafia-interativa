# ✍️ Caligrafia Interativa

**Gerador de folhas de caligrafia para treino e impressão — direto no navegador, sem instalação.**

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
![HTML](https://img.shields.io/badge/HTML-8.9%25-orange)
![CSS](https://img.shields.io/badge/CSS-52%25-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-39.1%25-yellow)

---

## 📖 Sobre o projeto

O **Caligrafia Interativa** é uma aplicação web simples e prática que permite criar folhas de treino de caligrafia personalizadas. Você digita um texto, escolhe a fonte, ajusta o tamanho e a quantidade de linhas, seleciona o tipo de treino desejado — e a folha está pronta para imprimir.

Ideal para uso escolar, terapia ocupacional, prática de lettering ou qualquer pessoa que queira melhorar a escrita à mão.

---

## 🚀 Funcionalidades

- **Texto personalizado** — digite qualquer texto para usar como modelo de treino
- **Seleção de fonte** — escolha entre diferentes fontes caligráficas disponíveis
- **Tamanho ajustável** — controle deslizante de 16px a 48px
- **Quantidade de linhas** — defina quantas linhas de treino serão geradas
- **Tipos de treino:**
  - `Linha em branco` — espaço vazio para o aluno escrever
  - `Texto cinza claro` — texto-guia suave para copiar por cima
  - `Sem linha de treino` — apenas o modelo, sem espaço extra
- **Impressão direta** — botão para imprimir a folha no formato A4

---

## 🖥️ Como usar

Não é necessário instalar nada. Basta abrir o `index.html` no navegador:

```bash
# Clone o repositório
git clone https://github.com/ruysabino/caligrafia-interativa.git

# Acesse a pasta
cd caligrafia-interativa

# Abra o arquivo no navegador
# No Linux/Mac:
open index.html
# No Windows:
start index.html
```

Ou acesse diretamente pelo GitHub Pages (se habilitado):

```
https://ruysabino.github.io/caligrafia-interativa/
```

---

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura da página |
| CSS3 | Estilização e layout A4 |
| JavaScript (Vanilla) | Lógica de geração das folhas |
| Fontes customizadas | Estilos caligráficos (`/fonts`) |

---

## 📁 Estrutura do projeto

```
caligrafia-interativa/
├── fonts/          # Fontes caligráficas personalizadas
├── index.html      # Página principal da aplicação
├── style.css       # Estilos e layout
├── script.js       # Lógica de geração das folhas
├── .nojekyll       # Configuração para GitHub Pages
└── LICENSE         # Licença GPL-3.0
```

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma _issue_ ou enviar um _pull request_.

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/minha-feature`)
3. Commit suas alterações (`git commit -m 'feat: adiciona nova fonte'`)
4. Envie para a branch (`git push origin feature/minha-feature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está licenciado sob a [GNU General Public License v3.0](LICENSE).

---

Feito com 💙 por [ruysabino](https://github.com/ruysabino)
