const ButtonMap = ({ customClass, names, handleClick }) => {
  return (
    <>
      {names.map((name, index) => (
        <button
          className={customClass + " nav-text"}
          onClick={() => handleClick(index)}
        >
          {name}
        </button>
      ))}
    </>
  );
};

export default ButtonMap;
