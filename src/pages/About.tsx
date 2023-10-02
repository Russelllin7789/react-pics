import React from "react";

const About = () => {
  return (
    <div className="w-full h-[calc(100vh-202px)]">
      <div>
        <h2 className="text-center w-full my-6 text-3xl font-bold">
          Download the picture you need!
        </h2>
        <div className="w-full h-[calc(100vh-214px)] max-h-[calc(100vh-214px)]">
          <img
            src="https://img.freepik.com/free-vector/concept-image-upload-landing-page_23-2148319404.jpg"
            alt="download-picture"
            className="w-full h-full object-contain overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
