import logo from "../assets/logo.svg";
import SocialIcons from "./SocialIcons";

const Rodape = () => {
  return (
    <section className=" flex flex-col box-border w-[90vw] sm:w-[70vw] justify-between ml-5 sm:ml-0 mr-5 sm:mr-0 ">
      <div className=" flex justify-between h-[15vh] sm:h-[20vh] text-[#3a3838] ">
        <div className=" font-[Poppins] text-[0.8rem] sm:text-[1rem]">
          <h2 className=" font-[Koh-Santepheap] text-[1.3rem] sm:text-[1.6rem]">
            Produto
          </h2>
          <p>
            <a href="">Todos</a>
          </p>
          <p>
            <a href="">Sushi</a>
          </p>
          <p>
            <a href="">Premium</a>
          </p>
        </div>
        <div className=" font-[Poppins] text-[0.8rem] sm:text-[1rem]">
          <h2 className=" font-[Koh-Santepheap] text-[1.3rem] sm:text-[1.6rem] ">
            Informações
          </h2>
          <p>
            <a href="">FAQ</a>
          </p>
          <p>
            <a href="">Blog</a>
          </p>
          <p>
            <a href="">Suporte</a>
          </p>
        </div>
        <div className=" font-[Poppins] text-[0.8rem] sm:text-[1rem]">
          <h2 className=" font-[Koh-Santepheap] text-[1.3rem] sm:text-[1.6rem]">
            Empresa
          </h2>
          <p>
            <a href="">Local</a>
          </p>
          <p>
            <a href="">Contato</a>
          </p>
        </div>
      </div>

      <div className="flex justify-between w-full sm:w-[70vw] h-[7vh] sm:h-[10vh] ">
        <img className=" w-[25vw] sm:w-[10vw] " src={logo} alt="logo" />

        <SocialIcons />
      </div>
    </section>
  );
};

export default Rodape;
