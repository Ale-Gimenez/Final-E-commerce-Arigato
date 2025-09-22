# Arigatooo - Loja de Estátuas Gregas

## Descrição do Projeto

Arigatooo é uma loja virtual especializada na venda de estátuas gregas clássicas. O projeto apresenta um site com interface moderna e intuitiva, oferecendo uma experiência completa de e-commerce para amantes da arte grega antiga.

## Conceito

O nome "Arigatooo" é uma referência bem-humorada ao meme "Arigatooo, Egitooo". Segundo a história fictícia do site, a empresa foi criada em 200 A.C. pelo "Sábio Augustus" e se especializa na venda de estátuas da época grega (e algumas que "poderiam ou não" ser dessa época).

## Estrutura do Projeto

### Páginas Principais

- **index.html** - Página inicial com apresentação da empresa, galeria premium e catálogo de produtos
- **login.html** - Página de autenticação de usuários
- **cadastro.html** - Página de registro de novos usuários  
- **carrinho.html** - Página do carrinho de compras com funcionalidade completa

### Funcionalidades

#### Página Inicial (home.html)
- **Seção Hero**: Apresentação com "Kalos orises" (bem-vindos em grego)
- **Galeria Premium**: Exibição de produtos especiais não disponíveis para venda
- **Sobre Nós**: História da empresa e do fundador "Sábio Augustus"
- **Catálogo de Produtos**: 8 produtos disponíveis para compra
- **Footer**: Informações de contato, horários e redes sociais

#### Sistema de Carrinho
- Armazenamento via localStorage
- Adição de produtos com informações completas
- Cálculo automático do total
- Funcionalidade de finalização de compra
- Interface responsiva e intuitiva

#### Autenticação
- Formulário de login com validação
- Cadastro de usuários com campos obrigatórios
- Confirmação de senha

### Produtos Disponíveis

1. **Apollo com Lira** - R$ 890.000
2. **Afrodite Agachada** - R$ 800.000  
3. **Asclepio** - R$ 3.000.000
4. **Guerreiro Sentado** - R$ 500.000
5. **Atena do Pireu** - R$ 8.000.000
6. **Apollo de Bedeverbe** - R$ 10.000.000
7. **Diana de Versalhes** - R$ 7.000.000
8. **Discóbolo** - R$ 5.000.000

### Produtos Premium (Apenas Exibição)

- Wilsonidas o Pensador
- Giovaris a Titã  
- Guerreira Agathor
- Cleberion o Grande
- Filósofa Roberthea
- Vanethia do Olimpo

## Tecnologias Utilizadas

- **HTML5** - Estrutura semântica das páginas
- **CSS3** - Estilização e layout responsivo
- **JavaScript** - Funcionalidades interativas e carrinho de compras
- **Font Awesome** - Ícones para redes sociais
- **LocalStorage** - Persistência de dados do carrinho

## Estrutura de Arquivos

```
projeto-arigatooo/
│
├── index.html
├── login.html
├── cadastro.html
├── carrinho.html
│
├── css/
│   ├── header.css
│   ├── style.css
│   ├── login.css
│   └── carrinho.css
│
├── js/
│   └── script.js
│
└── img/
    ├── logo.png
    ├── carrinho.png
    ├── augustus3.png
    ├── wilson2.png
    ├── giovanas.png
    ├── agatinha3.png
    ├── cleber.png
    ├── roberta.png
    ├── vanessa.png
    ├── lira.png
    ├── afrodite.jpg
    ├── asclepio2.jpg
    ├── guerreiro_sentado.webp
    ├── atena.jpg
    ├── apollo.png
    ├── diana.jpg
    └── disco.png
```

## Características do Design

- **Interface Responsiva**: Adaptável a diferentes tamanhos de tela
- **Navegação Intuitiva**: Header fixo com navegação por âncoras
- **Design Temático**: Visual inspirado na arte grega clássica
- **UX Otimizada**: Fluxo de compra simplificado e eficiente

## Informações de Contato (Fictícias)

- **Instagram**: @estatuas_gregas
- **Facebook**: estatuas_gregas  
- **WhatsApp**: +55 12 34567-8234

### Horários de Atendimento
- Segunda a Sexta: 08:00 - 18:30
- Sábado: Fechado
- Domingo e Feriados: 08:00 - 12:00

## Como Executar
1. Abra o Link do Vercel: https://final-e-commerce-arigato-tkfa.vercel.app/
   
OU se quiser baixar o arquivo
1. Faça o download dos arquivos do projeto
2. Certifique-se de que todos os arquivos CSS, JS e imagens estejam nos diretórios corretos
3. Abra o arquivo `index.html` em um navegador web
4. Navegue pelas diferentes seções usando o menu ou os botões de navegação

## Observações

- O projeto é puramente front-end, sem backend real
- Os formulários não possuem processamento servidor
- O carrinho utiliza localStorage para persistência local
- Todos os dados e informações são fictícios para fins demonstrativos

## Autor

Projeto desenvolvido como demonstração de habilidades em desenvolvimento web front-end, com foco em HTML, CSS e JavaScript.
