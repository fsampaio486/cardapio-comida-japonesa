import imgLamemFrango from "./imagens-pratos/2.png";
import imgLamemApimentado from "./imagens-pratos/3.png";
import imgLamemTradicional from "./imagens-pratos/4.png";

const lamemFrango = {
  nome: "Ramen de frango",
  preco: "R$ 29,99",
  descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  imagem: imgLamemFrango,
};

const lamenApimentado = {
  nome: "Ramen apimentado",
  preco: "R$ 34,99",
  descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  imagem: imgLamemApimentado,
};

const lamenTradicional = {
  nome: "Ramen tradicional",
  preco: "R$ 39,99",
  descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  imagem: imgLamemTradicional,
};

export const pratosPopulares = [lamemFrango, lamenApimentado, lamenTradicional];
