import imgPrato from "../assets/imagens-pratos/5.png";

const SobreNos = () => {
  return (
    <section className=" w-full h-[45vh] bg-mint-500">
      <div
        id="sobreNos"
        className="flex flex-col justify-between items-center h-[45vh] sm:h-[80vh] md:h-[65vh] pt-10 bg-mint-500"
      >
        <div className=" flex justify-between w-full sm:w-[80vw] h-[50vh] sm:h-[60vh]  ">
          <div className=" flex justify-start items-start  ">
            <img
              className="w-[30vw] h-[30vw] rounded-[2vw] "
              src={imgPrato}
              alt="Prato típico"
            />
          </div>

          <div className=" w-[65vw] sm:w-[45vw] h-[25vh] sm:h-[30vw] ">
            <p className="text-[1.2rem] sm:text-[1.5rem] text-[#ff0000] font-[Koh-Santepheap] mb-[1vh] sm:mb-[2vh]">
              Sobre nós
            </p>
            <h2 className=" leading-none text-[1.4rem] sm:text-[3rem] font-[Koh-Santepheap] w-[40vw] sm:w-[25vw] mb-[1.5vh] sm:mb-[3vh] ">
              Feita de forma tradicional
            </h2>
            <p className=" text-[1rem] sm:text-[1.5rem] lg:text-[1.6rem] mt-[1vw] sm:text-justify font-[Poppins]">
              Cada prato "feita de forma tradicional" é uma ode à excelência.
              Desde o meticuloso corte do sashimi até a preparação delicada do
              sushi, cada etapa é uma reverência à herança culinária do Japão.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNos;
