import { AvaliacaoClientes } from "../assets/Usuario";
import ComentariosClientes from "./ComentariosClientes";

const Comentarios = () => {
  return (
    <section className=" bg-mint-500 w-full flex flex-col justify-center items-center ">
      <div id="comentarios" className=" w-full sm:w-[80vw] ">
        <h2 className=" text-[1.5rem] sm:text-[2.5rem] font-[Koh-Santepheap] mb-[3vh] sm:mb-[10vh] text-center w-full ">
          Comentários
        </h2>

        <div className="flex justify-between  w-full">
          {AvaliacaoClientes.map((item) => (
            <ComentariosClientes
              imagem={item.imagem}
              nome={item.nome}
              descricao={item.descricao}
              avaliacao={item.avaliacao}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comentarios;
