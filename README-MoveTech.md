# Move Tech

Site da equipe **Move Tech**, formada por estudantes do curso de Desenvolvimento de Software Multiplataforma (DSM) da Fatec Registro. É a página de apresentação do grupo e do projeto integrador **Vale Rota**.

🔗 **Site:** https://pi-move-tech.github.io/MoveTech/

## Sobre o site

Página única (*one page*), publicada no GitHub Pages, com menu de navegação por âncoras. Ela apresenta a equipe, o projeto Vale Rota, um espaço de novidades e uma seção sobre o grupo.

### Seções

| Seção | Âncora | Conteúdo |
|---|---|---|
| Início | `#inicio` | Apresentação da equipe e botões para a equipe e para o Figma do Vale Rota |
| Equipe | `#equipe` | Membros do grupo, com foto e função |
| Vale Rota | `#valerota` | Descrição do projeto, tecnologias, funcionalidades e link do protótipo |
| Blog | `#blog` | Espaço para recados e novidades da equipe |
| Sobre | `#sobre` | Quem somos, o que fazemos e onde estamos |

## Equipe

| Membro | Função |
|---|---|
| Enzo | UI/UX Designer |
| Marcus | Desenvolvedor full-stack |
| Satio | Desenvolvedor full-stack |
| Tamashiro | Desenvolvedor full-stack |

As fotos ficam na pasta `imagens/` (`enzo.jpeg`, `marcus.jpeg`, `satio.jpeg` e `tamashiro.jpeg`).

## Projeto Vale Rota

Sistema inteligente de transporte público intermunicipal para o Vale do Ribeira. É um aplicativo web que reúne em um só lugar os horários e as rotas do transporte da região, pensado para estudantes e trabalhadores que dependem do ônibus todos os dias.

**Funcionalidades**

1. Busca de horários por origem, destino, data e período do dia
2. Previsão de atraso, calculada a partir do histórico das viagens
3. Detalhes da viagem, com paradas e atraso esperado de cada horário
4. Favoritos, para guardar as rotas mais usadas
5. Alertas personalizados quando o ônibus atrasa
6. Relatos de problemas na viagem feitos pelos usuários

**Tecnologias do projeto:** Node.js, Express, Sequelize, MySQL e EJS.

Na versão atual, com dados de demonstração, há rotas entre Registro, Cajati, Jacupiranga, Pariquera-Açu, Iguape e Sete Barras.

🎨 [Protótipo no Figma](https://www.figma.com/design/8dnbi4e3bP7HmgR3Ew6EHA/Design-PI?node-id=0-1&p=f&t=x6sdGn7aUDPXajC9-0)

## Como visualizar

Basta acessar o link do site acima. Para ver localmente, clone o repositório e abra o arquivo `index.html` no navegador:

```bash
git clone https://github.com/pi-move-tech/MoveTech.git
cd MoveTech
```

Depois abra o `index.html` (ou rode um servidor local, como `npx serve`).

## Como editar

- **Membros:** adicione ou altere o bloco do membro na seção Equipe e coloque a foto em `imagens/`.
- **Blog:** a seção ainda mostra "Novidades em breve!". Quando houver recados, substitua esse texto pelas publicações.
- **Textos:** os textos das seções Vale Rota e Sobre ficam no próprio HTML da página.

## Publicação

O site é publicado automaticamente pelo **GitHub Pages**: ao enviar as alterações para a branch configurada, a página é atualizada.

## Licença

Projeto acadêmico da Fatec Registro · DSM. © 2026 Move Tech.
