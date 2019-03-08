/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var someArray = ['joão', 1, 2, true, false, undefined, null];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornaArray(arg)
{
  return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
retornaArray([1,2])[2];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function retornaIndice(arr, indice)
{
  return arr[indice];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var someArray2 = ['joão', 1, 2, true, false, undefined, null];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
retornaArray(someArray2);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nomeDoLivro)
{
  var obj = {
    harryPotter: {
      quantidadePaginas: 500,
      autor: "JK Rolling",
      editora: "Saraiva"
    },
    lordOfKings: {
      quantidadePaginas: 500,
      autor: "J. R. R. Tolkien",
      editora: "Sei lá"
    },
    gameOfThrones: {
      quantidadePaginas: 5000,
      autor: "George R.R. Martin",
      editora: "Também não sei"
    }
  }
  
  return !!obj[nomeDoLivro] ? obj[nomeDoLivro] : obj;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book(harryPotter);
book(lordOfKings);
book(gameOfThrones);

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro Harry Potter tem ' + book('harryPotter').quantidadePaginas + ' páginas!' );

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro Harry Potter é ' + book('harryPotter').autor + '.' );

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro Harry Potter foi publicado pela editora ' + book('harryPotter').editora + '.' );
