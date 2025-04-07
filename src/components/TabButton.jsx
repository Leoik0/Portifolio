const TabButton = ({ tabName, selectedTab, onClick }) => {
  return (
    <div className="flex justify-center w-full">
      <button
        className={`py-4 px-[4%]  cursor-pointer ${
          selectedTab === tabName ? "border-b-2 font-bold" : ""
        }`}
        onClick={() => onClick(tabName)}
      >
        {tabName.charAt(0).toUpperCase() + tabName.slice(1)}
      </button>
    </div>
  );
};

export default TabButton;
