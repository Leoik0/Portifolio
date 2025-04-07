import { LuMapPin, LuCake, LuCalendar } from "react-icons/lu";
import { GiBigDiamondRing } from "react-icons/gi";
import SocialButtons from "./SocialButtons";
import IconText from "./IconText";

const Header = () => {
  return (
    <div className="w-full text-white ">
      <div
        className="relative w-full bg-center bg-cover h-60"
        style={{ backgroundImage: "url('/bg.webp')" }}
      >
        <img src="#" alt="" />
        <img
          src="./profile.jpeg"
          alt="Imagem de Perfil"
          className="img-profile absolute border-2 border-white rounded-full -bottom-[27%] left-[9%] h-[56%] "
        />
      </div>
      <div className="flex flex-col items-start p-[4%]">
        <div className="self-end">
          <SocialButtons />
        </div>

        <div className="p-[5%] ml-[2%]">
          <div className="flex items-center ">
            <h1 className="text-4xl font-bold title-name">
              Leonardo Oliveira{" "}
            </h1>
            <img
              src="/verificado.svg"
              width={30}
              height={30}
              alt="verificado"
            />
          </div>

          <p className="mt-2 text-base sm:text-lg">Desenvolvedor Web</p>
          <p className="text-sm sm:text-base md:text-lg">
            Criativo | Focado | Resiliente | Organizado | Adaptável | Proativo
          </p>
          <div className="flex gap-5 mt-2 info-dados">
            <IconText Icon={LuCake} text="May 06" />
            <IconText Icon={LuMapPin} text="Novo Hamburgo | RS" />
            <IconText Icon={LuCalendar} text="Entrou 19/03/25" />
            <IconText Icon={GiBigDiamondRing} text="Solteiro" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
