import React from "react";

type Props = {
  buttonText: string;
  buttonStyle: string;
  onClickHandler: () => void;
};

const Button: React.FC<Props> = ({
  buttonText,
  buttonStyle,
  onClickHandler,
}) => {
  return (
    <>
      <button onClick={onClickHandler} className={buttonStyle}>
        {buttonText}
      </button>
    </>
  );
};

export default Button;
