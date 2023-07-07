<p> <h1 align="center">Projeto Implementando Uma Tela de Login Com Validação Usando TypeScript</h1></p>

<p align="center">
    <img width="700" src="https://github.com/SuellenDiass/SuellenDiass/assets/102911341/bb5c060a-1d76-483b-b509-a1a922dff044">
</p>

<p align="center">
    <img width="700" src="https://github.com/SuellenDiass/SuellenDiass/assets/102911341/bbaf815e-5969-46d9-bbf1-ba65feda595f">
</p>


<p align="center">Seja redirecionado à página do 
<a href="" target="_blank">projeto</a></p>




## Alterações feitas no projeto conforme o desafio:

- [x] No componente Button no arquivo index.tsx:

Adicionada a propriedade disabled à interface IButtonProps.
Atualizado o componente Button para receber a propriedade disabled e adicioná-la ao elemento ButtonContainer.
No arquivo types.ts dentro da pasta do componente Button:

Adicionada a propriedade disabled à interface IButtonProps.
No componente pages/login no  arquivo index.tsx:

Importada a propriedade disabled do componente Button.
Adicionada a propriedade disabled={!isValid} ao componente Button, utilizando a variável isValid para habilitar ou desabilitar o botão com base na validação do formulário.
Essas alterações permitem que o botão "Entrar" seja habilitado somente quando o formulário estiver preenchido corretamente, de acordo com as regras de validação definidas no Yup. Caso contrário, o botão permanecerá desabilitado.

## Estrutura do projeto e tecnologias utilizadas:

- [x] React: O projeto é desenvolvido usando a biblioteca React, que é uma biblioteca JavaScript de código aberto para construir interfaces de usuário.

- [x] React Hook Form: É uma biblioteca que fornece um conjunto de hooks para facilitar a validação e manipulação de formulários no React.

- [x] Yup: É uma biblioteca de validação de esquemas JavaScript que é usada para validar os dados do formulário com base em regras definidas.

- [x] TypeScript: É uma linguagem de programação que estende o JavaScript adicionando tipos estáticos opcionais. O projeto utiliza TypeScript para fornecer tipagem estática aos componentes e ajudar a evitar erros durante o desenvolvimento.

- [x] O resultado final do projeto é um formulário de login que utiliza validação de dados e desabilita o botão "Entrar" até que o formulário seja preenchido corretamente. O projeto utiliza o react-hook-form em conjunto com o yup para realizar a validação do formulário. Quando o usuário preenche os campos corretamente, o botão "Entrar" é habilitado e ele pode prosseguir com o login. Caso contrário, o botão permanece desabilitado e uma mensagem de erro é exibida para indicar os problemas no preenchimento do formulário.

 Para complementar fiz uma estilização no botão para quando ele estiver desabilitado poder mudar de cor.

- [x] Foram feitas alterações no componente Button  nos  arquivos index.tsx, styles.ts types.ts:

Adicionada a propriedade className à interface IButtonProps.
No componente Button, adicionada a propriedade className ao elemento ButtonContainer e verificado se o botão está desabilitado para adicionar a classe condicional.
No arquivo de estilos (por exemplo, styles.ts) do componente Button:

Adicionada a classe CSS .disabled e definida a cor desejada para o botão desabilitado.
Com essas alterações, quando o botão estiver desabilitado, a classe CSS .disabled será adicionada ao botão, alterando sua cor de acordo com os estilos definidos na classe. Você pode personalizar a cor e outros estilos na classe CSS conforme suas preferências.

Dessa forma, além de desabilitar o botão, você terá a possibilidade de estilizá-lo de forma diferente quando ele estiver desabilitado, por exemplo, alterando a cor de fundo para indicar visualmente o estado desabilitado do botão.

Observações:

Comandos utilizados para estruturar um projeto react:

1 Verificar se o nodejs está instalado comando: node -v e npm -v

2 Instalar o create React App comando: npm install -g create-react-app

3 Criar projeto com react app comando: npx create-react-app nome do projeto

4 Iniciar servidor de desenvolvimento do projeto comando: cd nome do projeto  npm start

5 Instalar as dependências comando : npm install

6 Instalar pacotes para consumir Api do github: comando npm add axios

7 Styled Components: Uma biblioteca que permite escrever CSS no JavaScript, facilitando a estilização de componentes React. Ela oferece uma abordagem mais modular e encapsulada para estilização, comando: 
npm install styled-components

8 Iniciar o projeto: npm start


#### No arquivo passo-a-passo-rodar-react.md tem orientações como abrir um projeto pronto em react pela primeira vez no seu pc.

## Tecnologias utilizadas

<a href="#" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="html" width="40" height="40"/> </a> 

<a href="#" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="css" width="40" height="40"/> </a> 

<a href="#" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="html" width="40" height="40"/> </a> 

<a href="#" target="_blank"> <img src="https://camo.githubusercontent.com/ee5225ba7c4338f1a1c10121ec32c396e1a4a2f5b0b58b6afd6d5c56ff5d6196/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f7673636f64652f7673636f64652d6f726967696e616c2d776f72646d61726b2e737667" alt="firebase" width="40" height="40"/> </a>

###

#### Curso React da Dio.me administrado pelo mentor Pablo Henrique/ Desenvolvedor Full Stack

[DIO](https://www.dio.me/).
