const SpeechBubble = ({ text, className }) => {
  // Divide o texto em palavras
  const words = text.split(" ");

  // Cria um array de pares de palavras
  const wordPairs = [];
  for (let i = 0; i < words.length; i += 2) {
    wordPairs.push(words.slice(i, i + 2).join(" "));
  }

  return (
    <div
      className={`absolute p-[2%]   text-center text-white border-2 border-purple-800 shadow-lg bg-gradient-to-r from-cyan-500 to-purple-600 rounded-4xl ${className}`}
    >
      {wordPairs.map((pair, index) => (
        <span key={index} className="block font-semibold">
          {pair}
        </span>
      ))}
    </div>
  );
};

export default SpeechBubble;
