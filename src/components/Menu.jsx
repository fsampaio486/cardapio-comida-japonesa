import "./Menu.css";
import SocialIcons from "./SocialIcons";

const Menu = ({ setIsOpen }) => {
  return (
    <nav className=" menu_hamburguer lg:flex lg:justify-between lg:items-center lg:gap-15 lg:text-[1rem] sm:text-[1.4rem] font-[Poppins] w-[43vw]">
      <ul className=" lista lg:flex lg:gap-5 lg:text-[1.3rem]">
        <li className=" lista_menu top cursor-pointer  lg:inline-block">
          <a
            className=" menu_suspenso "
            href="#inicio"
            onClick={() => setIsOpen(false)}
          >
            Início
          </a>
        </li>

        <li className=" lista_menu cursor-pointer lg:inline-block">
          <a
            className=" menu_suspenso "
            href="#sobreNos"
            onClick={() => setIsOpen(false)}
          >
            Sobre nós
          </a>
        </li>
        <li className=" lista_menu cursor-pointer lg:inline-block">
          <a
            className=" menu_suspenso "
            href="#populares"
            onClick={() => setIsOpen(false)}
          >
            Populares
          </a>
        </li>
      </ul>

      <div className=" baixar_app lg:w-40 lg:h-12 lg:rounded-[4rem] lg:bg-[#FF0000] lg:text-[1rem] sm:text-[1.2rem] text-[#ffff] lg:justify-center lg:items-center cursor-pointer lg:text-centern lg:flex">
        <a href="">Baixar o App</a>
      </div>

      <div className=" icones_menu_hamburger lg:hidden ">
        <SocialIcons />
      </div>
    </nav>
  );
};

export default Menu;
