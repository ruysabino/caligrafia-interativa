# ✒️ Caligrafia Interativa

> Gerador de folhas de caligrafia para impressão — multilíngue, com modelos caligráficos oficiais por país e suporte pedagógico para escrita cursiva e letra de forma.

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/pt-PT/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/pt-PT/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-PT/docs/Web/JavaScript)
[![Google Fonts](https://img.shields.io/badge/Google%20Fonts-Playwrite-4285F4?logo=google&logoColor=white)](https://fonts.google.com/?query=playwrite)

---

## 📋 Índice

- [Visão geral](#-visão-geral)
- [Demonstração](#-demonstração)
- [Funcionalidades](#-funcionalidades)
- [Internacionalização](#-internacionalização)
- [Fontes caligráficas](#-fontes-caligráficas)
- [Modos de escrita](#-modos-de-escrita)
- [Interface](#-interface)
- [Como usar](#-como-usar)
- [Estrutura do projeto](#-estrutura-do-projeto)
- [Contexto pedagógico](#-contexto-pedagógico)
- [Tecnologias](#-tecnologias)
- [Licença](#-licença)

---

## 🌐 Visão geral

O **Caligrafia Interativa** é uma aplicação web estática que gera folhas de treino de caligrafia prontas a imprimir em formato A4. Não requer instalação, servidor ou dependências — basta abrir o `index.html` num browser ou aceder via GitHub Pages.

Construído a pensar em **professores, pais e educadores**, com especial atenção à adequação pedagógica por país: cada idioma usa o modelo caligráfico oficial ensinado nas escolas primárias, baseado na investigação do projeto [Primarium](https://primarium.info) (TypeTogether × Google).

---

## 🎬 Demonstração

```
Acesso direto (GitHub Pages):
https://ruysabino.github.io/caligrafia-interativa/
```

---

## ✨ Funcionalidades

### Layout de aplicação
- **Painel lateral fixo** com todos os controlos de configuração
- **Área de preview central** com visualização A4 em tempo real
- **Controlo de zoom** de 40% a 150% para ajustar o preview ao ecrã
- **Topbar fixa** com acesso rápido a "Gerar folha" e "Imprimir"
- Interface responsiva que esconde todos os elementos de UI na impressão

### Gerador de folhas
- Texto personalizado pelo utilizador
- Escolha de fonte caligráfica com **seletor visual** (cards com amostra de cada família)
- Controlo de tamanho de fonte via slider (16–52 px em cursiva, 24–64 px em letra de forma)
- Controlo de número de linhas (1–30)
- Três tipos de treino:
  - **Texto guia** — o texto aparece em cinza claro para o aluno decalcar por cima
  - **Linha em branco** — pauta azul para escrita livre
  - **Papel limpo** — sem guias, apenas espaço em branco
- Rodapé discreto na folha com o nome da fonte e o idioma utilizado
- Data gerada automaticamente no locale correto do idioma selecionado

### Impressão
- Estilo `@media print` dedicado que oculta toda a UI
- Folha renderizada a 100% da largura, sem sombras nem bordas
- Pronta para impressora A4

---

## 🌍 Internacionalização

A aplicação suporta **6 idiomas** com toda a interface traduzida e fontes caligráficas adequadas a cada país. A seleção é feita através de **botões com bandeiras SVG** na topbar.

| Bandeira | Idioma | Locale | Pangrama padrão |
|:---:|---|---|---|
| 🇵🇹 | Português (Portugal) | `pt-PT` | *A raposa saltou sobre o cão preguiçoso.* |
| 🇧🇷 | Português (Brasil) | `pt-BR` | *A raposa marrom saltou sobre o cão preguiçoso.* |
| 🇪🇸 | Español | `es-ES` | *El veloz murciélago hindú comía feliz cardillo y kiwi.* |
| 🇬🇧 | English (UK) | `en-GB` | *The quick brown fox jumps over the lazy dog.* |
| 🇫🇷 | Français | `fr-FR` | *Portez ce vieux whisky au juge blond qui fume.* |
| 🇩🇪 | Deutsch | `de-DE` | *Victor jagt zwölf Boxkämpfer quer über den großen Sylter Deich.* |

Ao mudar de idioma, actualizam-se automaticamente:
- Todo o texto da interface (labels, botões, placeholders, descrições)
- A lista de fontes disponíveis (Playwrite oficial do país + alternativas)
- O texto predefinido da folha (pangrama na língua correcta)
- A data da folha gerada (formato `toLocaleDateString` do locale)
- O atributo `lang` do documento HTML

---

## 🖊️ Fontes caligráficas

### Série Playwrite — modelos oficiais por país

Todas as fontes **Playwrite** são desenvolvidas pelo projeto [Primarium](https://primarium.info) (TypeTogether × Google) com base em investigação de 3+ anos sobre o ensino de caligrafia em 40 países. Disponíveis gratuitamente no [Google Fonts](https://fonts.google.com/?query=playwrite).

#### 🇵🇹 Portugal — escrita vertical ligada
| Fonte | Descrição |
|---|---|
| **Playwrite PT** | Modelo oficial — escrita vertical sem inclinação (Porto Editora) |
| **Playwrite PT Guides** | Igual ao PT, com pautas integradas nos glifos para decalcar |

> Característica distintiva: cursiva vertical (sem inclinação), bases arredondadas nas minúsculas, maiúsculas ornamentadas. Estilo influenciado pelos modelos franceses, predominante em Portugal desde o início do século XX.

#### 🇧🇷 Brasil — cursiva vertical
| Fonte | Descrição |
|---|---|
| **Playwrite BR** | Modelo oficial BR — baseado no *Kindergarten / Bê-a-Bá* (Tony de Marco, 1996) |
| **Playwrite BR Guides** | Variante com pautas integradas |

> Padrão adotado na maioria das escolas públicas brasileiras a partir do 2.º ano do Ensino Fundamental.

#### 🇪🇸 Espanha — cursiva vertical híbrida
| Fonte | Descrição |
|---|---|
| **Playwrite ES** | Modelo oficial — maiúsculas de imprenta + minúsculas cursivas (Rubio / Santillana) |
| **Playwrite ES Guides** | Variante com guias integradas |
| **Playwrite ES Deco** | Variante decorativa com maiúsculas ornamentadas |

#### 🇬🇧 Inglaterra — semi-ligada
| Fonte | Descrição |
|---|---|
| **Playwrite GB S** | Semi-joined — modelo Nelson Handwriting (Oxford University Press) |
| **Playwrite GB S Guides** | Com linhas de orientação integradas para traçado |
| **Playwrite GB J** | Fully-joined — estilo completamente ligado |

> Bases ovais, inclinação opcional. Introdução à cursiva tipicamente no Key Stage 1 (anos 1–2).

#### 🇫🇷 França — cursiva vertical contínua
| Fonte | Descrição |
|---|---|
| **Playwrite FR Trad** | Écriture A — Méthode Dumont, modelo tradicional do Ministère de l'Éducation |
| **Playwrite FR Trad Guides** | Com lignes directrices integradas |
| **Playwrite FR Moderne** | Écriture B — estilo moderno simplificado, sem boucles |

> O modelo francês foi amplamente exportado para outros países, incluindo Portugal e Brasil, no início do século XX.

#### 🇩🇪 Alemanha — múltiplas variantes por Land
| Fonte | Variante | Região / Uso |
|---|---|---|
| **Playwrite DE VA** | Vereinfachte Ausgangsschrift | Mais utilizada — maioria dos Länder |
| **Playwrite DE VA Guides** | VA com guias | Para decalcar |
| **Playwrite DE SAS** | Schulausgangsschrift | Länder do leste (ex-RDA) |
| **Playwrite DE LA** | Lateinische Ausgangsschrift | Länder do sul (BY, BW) |
| **Playwrite DE Grund** | Grundschrift | Modelo moderno — HB, HH (~10% das escolas) |

> A Alemanha é o único país europeu com 4 modelos caligráficos oficiais em uso simultâneo, decididos ao nível de cada *Bundesland*.

---

### Alternativas decorativas (todos os idiomas — modo cursiva)
| Fonte | Estilo |
|---|---|
| Dancing Script | Cursiva inclinada fluida, de origem americana |
| Great Vibes | Cursiva ornamentada, estilo escrita formal |
| Pinyon Script | Estilo copperplate clássico |
| Satisfy | Cursiva descontraída e legível |
| Pacifico | Casual e arredondada *(pt-BR)* |
| Sacramento | Fino e elegante *(pt-BR)* |

---

### Fontes para letra de forma / print script (todos os idiomas)

| Fonte | Porquê usar | Destaque |
|---|---|---|
| **Andika** ⭐ | Desenhada pela SIL International especificamente para alfabetização. Usa o `a` e `g` de traço simples — idênticos ao que a criança escreve à mão. Décadas de investigação em legibilidade. | Recomendada como 1.ª opção |
| **Atkinson Hyperlegible** | Alta legibilidade com formas de letra claramente distintas entre si. Boa para crianças com dislexia. | Letras `b/d/p/q` com características únicas |
| **Nunito** | Arredondada e amigável, muito usada em materiais pedagógicos brasileiros. | |
| **Quicksand** | Geométrica e de traços limpos. | |

> ⚠️ **Porquê não usar Arial ou Roboto?** Ambas usam o `a` bicudo (dois andares) e o `g` de dois andares — formas tipográficas que a criança **nunca vai traçar com o lápis**. Isto cria dissonância entre o que lê e o que escreve. Andika resolve este problema.

---

## 📝 Modos de escrita

### Cursiva
Activa a lista de fontes caligráficas ligadas do idioma selecionado. Slider de tamanho entre 16–52 px. Indicado para:
- Crianças a partir do 1.º ano (PT) / 2.º ano (BR)
- Prática de caligrafia cursiva em adultos

### Letra de Forma (Print Script / Druckschrift / Script)
Activa a lista de fontes de forma simples (`a` e `g` manuscritos). Slider de tamanho ajusta automaticamente para 24–64 px (letras maiores para crianças em fase inicial). Indicado para:
- Pré-escolar e iniciantes (5–6 anos)
- Aprendizagem do alfabeto impresso
- Crianças com necessidades de aprendizagem específicas

---

## 🖥️ Interface

```
┌─────────────────────────────────────────────────────────────┐
│  ✒ Caligrafia  Gerador…   🇵🇹 🇧🇷 🇪🇸 🇬🇧 🇫🇷 🇩🇪   Gerar  Imprimir │
├──────────────┬──────────────────────────────────────────────┤
│              │                                              │
│  TEXTO       │                                              │
│  [textarea]  │            Preview — A4          [zoom −/+] │
│              │   ┌─────────────────────────────────────┐   │
│  MODO        │   │  Folha de caligrafia    19 março 2026│   │
│  [Cursiva]   │   │  ─────────────────────────────────  │   │
│  [Letra Form]│   │  A raposa saltou sobre o cão…       │   │
│              │   │  ─────────────────────────────────  │   │
│  FONTE       │   │  __________________________________ │   │
│  [PT][PT G.] │   │                                     │   │
│  [DS][GV  ]  │   │  __________________________________ │   │
│              │   └─────────────────────────────────────┘   │
│  TAMANHO     │                                              │
│  [====●  ]   │                                              │
│              │                                              │
│  LINHAS      │                                              │
│  [−][  4 ][+]│                                              │
│              │                                              │
│  TIPO TREINO │                                              │
│  ✦ Texto guia│                                              │
│  ━ Linha     │                                              │
│  ○ Livre     │                                              │
│              │                                              │
│  [Gerar ▶]   │                                              │
└──────────────┴──────────────────────────────────────────────┘
```

---

## 🚀 Como usar

### Opção 1 — GitHub Pages (sem instalação)
```
https://ruysabino.github.io/caligrafia-interativa/
```

### Opção 2 — Local
```bash
git clone https://github.com/ruysabino/caligrafia-interativa.git
cd caligrafia-interativa

# Basta abrir o ficheiro no browser:
open index.html          # macOS
xdg-open index.html      # Linux
start index.html         # Windows
```

Não é necessário `npm install`, servidor ou qualquer dependência. O projeto é **100% estático**.

### Gerar uma folha passo a passo

1. **Selecionar idioma** — clicar na bandeira correspondente na topbar
2. **Escrever o texto** a praticar (ou deixar em branco para usar o pangrama padrão)
3. **Escolher o modo** — Cursiva ou Letra de Forma
4. **Selecionar a fonte** — clicar no card da fonte desejada (fontes com badge são as recomendadas para o idioma)
5. **Ajustar o tamanho** com o slider
6. **Definir o número de linhas** com os botões +/−
7. **Escolher o tipo de treino** — Texto guia, Linha em branco ou Papel limpo
8. **Clicar em "Gerar folha"**
9. **Imprimir** com o botão na topbar ou `Ctrl+P` / `Cmd+P`

---

## 📁 Estrutura do projeto

```
caligrafia-interativa/
├── index.html          # Aplicação completa (HTML + CSS + JS num só ficheiro)
├── fonts/              # Fontes locais (fallback opcional)
├── .nojekyll           # Desativa processamento Jekyll no GitHub Pages
├── .gitattributes      # Configuração de line endings
├── LICENSE             # GNU General Public License v3.0
└── README.md           # Esta documentação
```

> A aplicação é intencionalmente um ficheiro HTML único (`index.html`) — sem bundler, sem framework, sem build step. Funciona offline depois do primeiro carregamento (as fontes do Google Fonts são cacheadas pelo browser).

---

## 🎓 Contexto pedagógico

### Porquê os modelos caligráficos diferem por país?

O ensino da caligrafia em escolas primárias varia significativamente entre países, refletindo tradições históricas, influências culturais e decisões curriculares. Em Portugal e França, a cursiva vertical sem inclinação domina desde o início do século XX por influência de movimentos de "higiene da escrita" vindos do norte da Europa. No Brasil, o modelo foi influenciado pelos materiais didáticos de Tony de Marco. Na Alemanha, a descentralização educativa resulta em 4 modelos coexistentes.

### Projeto Primarium

As fontes Playwrite são resultado de 3+ anos de investigação do projeto [Primarium](https://primarium.info), criado pela TypeTogether em parceria com o Google. O projeto documentou os modelos caligráficos ensinados em 40+ países e desenvolveu uma família de fontes específica para cada um, tornando-as disponíveis gratuitamente no Google Fonts.

### Referências por país

| País | Referência curricular | Editora / Modelo |
|---|---|---|
| Portugal | *Programas e metas curriculares de português*, MEC 2015 | Porto Editora — *Cadernos Caligráficos* |
| Brasil | BNCC (Base Nacional Comum Curricular) | *Bê-a-Bá* / Kindergarten — Tony de Marco, 1996 |
| Espanha | LOE / Currículo Nacional | Cuadernos Rubio, Santillana |
| Inglaterra | National Curriculum (KS1/KS2) | Nelson Handwriting — Oxford University Press |
| França | BO Spécial nº 3, MEN 2015 | Méthode Dumont — Écriture A e B |
| Alemanha | Lehrpläne por Bundesland | VA (KMK) / SAS / LA / Grundschrift |

---

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML5 semântico | Estrutura da aplicação |
| CSS3 com variáveis custom | Tema, layout e responsividade |
| JavaScript ES6+ (vanilla) | Lógica de geração e internacionalização |
| [Google Fonts — Playwrite](https://fonts.google.com/?query=playwrite) | Fontes caligráficas oficiais por país |
| [Google Fonts — Andika](https://fonts.google.com/specimen/Andika) | Fonte para letra de forma / alfabetização |
| SVG inline | Bandeiras dos países (sem dependências externas) |
| CSS `@media print` | Folha A4 optimizada para impressão |

**Sem dependências externas de JavaScript.** Sem npm, sem webpack, sem React. O projeto inteiro funciona abrindo o `index.html` diretamente no browser.

---

## 🗺️ Roadmap

Ideias para versões futuras:

- [ ] Preview em tempo real (atualizar folha sem clicar "Gerar")
- [ ] Modo prática interativa — traçar sobre o guia com mouse/touch (Canvas)
- [ ] Export como PNG ou PDF sem diálogo de impressão
- [ ] Guardar configurações favoritas (localStorage)
- [ ] Múltiplos blocos de texto na mesma folha
- [ ] Pauta Séyès (formato francês com linhas horizontais e margem vertical)
- [ ] Seletor visual de fontes com amostra de frase completa
- [ ] Suporte a RTL (árabe, hebraico) com modelos Playwrite correspondentes

---

## 🤝 Contribuir

Contribuições são bem-vindas! Para propor melhorias:

1. Faça um fork do repositório
2. Crie uma branch: `git checkout -b feature/nome-da-feature`
3. Faça commit das alterações: `git commit -m 'feat: descrição'`
4. Faça push para a branch: `git push origin feature/nome-da-feature`
5. Abra um Pull Request

Para reportar bugs ou sugerir funcionalidades, abra uma [issue](https://github.com/ruysabino/caligrafia-interativa/issues).

---

## 📄 Licença

Este projeto está licenciado sob a [GNU General Public License v3.0](LICENSE).

As fontes Playwrite são criadas pela TypeTogether × Google e distribuídas sob a [SIL Open Font License 1.1](https://openfontlicense.org/).  
A fonte Andika é criada pela SIL International e distribuída sob a [SIL Open Font License 1.1](https://openfontlicense.org/).

---

<p align="center">
  Feito com ✒️ por <a href="https://github.com/ruysabino">ruysabino</a>
  <br>
  Fontes caligráficas por <a href="https://primarium.info">Primarium</a> × <a href="https://fonts.google.com/?query=playwrite">Google Fonts</a>
</p>
