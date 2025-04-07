import SpeechBubble from "../SpeechBubble";

const About = () => {
  return (
    <div className="flex balao flex-col items-center justify-center w-full h-[65vh] relative ">
      <div className=" w-[65%] h-[65%]">
        <img
          src="/eu.png"
          alt="Minha foto"
          className="object-contain w-full h-full transition-all duration-300 shadow-lg"
        />

        <SpeechBubble
          text="📚 Estudante de programação"
          className="left-[3%] top-[20%] animate-pulse"
        />
        <SpeechBubble
          text="☕ Viciado em café"
          className="right-[0%] top-[25%] animate-pulse"
        />
        <SpeechBubble
          text="🌀 Grêmio na veia"
          className="top-[2%] right-[26%] animate-pulse"
        />
        <SpeechBubble
          text="🌙 Dark mode é lei"
          className="bottom-[0%] right-[22%] animate-pulse"
        />
        <SpeechBubble
          text="🍜 Code, Anime & Lamen"
          className="right-[0%] bottom-[25%] animate-pulse"
        />
        <SpeechBubble
          text="🎮 Gamer tech"
          className="left-[8%] bottom-[25%] animate-pulse"
        />
        <SpeechBubble
          text="👨‍💻 Cativado na área de hacking"
          className="top-[0%] left-[26%] animate-pulse"
        />
        <SpeechBubble
          text="🥢 Empolgado na cultura japonesa"
          className="bottom-[0%] left-[20%] animate-pulse"
        />
      </div>
    </div>
  );
};

export default About;
