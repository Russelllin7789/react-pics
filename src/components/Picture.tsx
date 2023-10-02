import React from "react";
import IPicture from "../interface/IPicture";

type Props = {
  picture: IPicture;
};

const Picture: React.FC<Props> = ({ picture }) => {
  return (
    <div>
      <div className="w-[300px] my-2 mx-2">
        <img
          src={picture.src.landscape}
          alt={picture.alt}
          className="w-full h-full object-cover pointer-events-none"
        />
      </div>
    </div>
  );
};

export default Picture;
