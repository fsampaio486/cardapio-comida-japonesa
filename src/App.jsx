import Header from "./components/Header";
import Inicio from "./components/Inicio";
import SobreNos from "./components/SobreNos";
import Populares from "./components/Populares";
import Comentarios from "./components/Comentarios";
import Rodape from "./components/Rodape";
import "./index.css";
import Ondas from "./components/Ondas";

function App() {
  return (
    <div className=" flex flex-col justify-center items-center w-full box-border sm:m-0 bg-[#eee9e4] ">
      <Header />
      <Inicio />
      <Ondas modelo="ondaUm" />
      <SobreNos />
      <Ondas modelo="ondaDois" />
      <Populares />
      <Ondas modelo="ondaTres" />
      <Comentarios />
      <Ondas modelo="ondaQuatro" />
      <Rodape />
    </div>
  );
}

export default App;
