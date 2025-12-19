import imgSushi from "../assets/imagens-pratos/1.png";

const Inicio = () => {
  return (
    <section
      id="inicio"
      className="flex justify-between items-center w-full sm:w-[80vw] mt-[10vw] sm:mt-[10vh] mb-[5vh] sm:mb-0 "
    >
      <div className="w-[65vw] sm:w-[45vw] ">
        <h2 className=" font-[Koh-Santepheap] text-[1.5rem] sm:text-[3rem] mb-[2vh] sm:mb-[3vh] leading-none text-[#ff0000] sm:text-black">
          Comida Oriental
        </h2>
        <p className="text-[1rem] sm:text-[1.6rem] mt-[1vw] mb-[3vh] sm:mb-0 sm:text-justify font-[Poppins]">
          A culinária Japonesa é bastante equilibrada, sendo muito rica em
          peixes (ômega 3), vegetais, massas e ingredientes frescos.
        </p>
        <p className=" rounded-[2vw] bg-[#FF0000] text-[#ffff] w-[30vw] sm:w-[15vw] h-[5vh] sm:h-[7vh] text-[1rem] sm:text-[1.2rem] md:text-[1.4rem] flex items-center justify-center text-center mt-[4vw] cursor-pointer">
          Ver cardápio
        </p>
      </div>
      <div>
        <img
          className="w-[35vw] sm:w-[30vw] h-[20vh] sm:h-[35vh] md:h-[50vh]"
          src={imgSushi}
          alt="Imagem sushi"
        />
      </div>
    </section>
  );
};

export default Inicio;
