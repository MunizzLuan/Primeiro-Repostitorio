// Escopo é uma região do codigo onde as variaveis estão '{Entre chaves}'.
// variaveis criadas fora do escopo funcionam em todo o arquivo, variaveis criadas dentro, funcionam até o fim do escopo.

const idade = "24";
{
    const altura = "1.82"
    console.log(idade);
} console.log(altura);

