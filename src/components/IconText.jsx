const IconText = ({ Icon, text }) => {
  return (
    <div className="flex items-center gap-0.5">
      <span className="text-gray-300 ">
        <Icon />
      </span>
      <span className="text-xs text-gray-300 ">{text}</span>
    </div>
  );
};

export default IconText;
