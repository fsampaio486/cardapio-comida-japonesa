import Pratos from "./Pratos";
import { pratosPopulares } from "../assets/cardapio";

const Populares = () => {
  return (
    <section
      id="populares"
      className=" w-full sm:w-[80vw] h-[60vh] sm:h-[90vh] flex flex-col content-center items-center "
    >
      <h2 className=" font-[Koh-Santepheap] text-[1.5rem] sm:text-[3rem] text-center mb-[5vh] sm:mb-[8vh] md:mb-[15vh] mt-[1vh] sm:mt-[5vh] ">
        Populares
      </h2>

      <div className=" flex items-center justify-between w-full sm:w-[70vw] sm:gap-5 mt-[3vh] ">
        {pratosPopulares.map((item) => (
          <Pratos
            nome={item.nome}
            descricao={item.descricao}
            preco={item.preco}
            imagem={item.imagem}
          />
        ))}
      </div>
    </section>
  );
};

export default Populares;
