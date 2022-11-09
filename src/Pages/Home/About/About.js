import React from 'react';

const About = () => {
    return (
      <div className="grid grid-cols-2 my-8 shadow-2xl">
        <div className="bg-white text-justify p-10">
          <p className=' underline mb-3'>ABOUT ATTORNA</p>
          <p className="  font-mono text-[#555555]">
            Attrona is my licensed professional lawyer portfolio, who advises
            and represents others in legal matters.I am always sincere while
            also protecting a client's rights. To carry out these duties by the
            grace of Allah I Could understand the law and be an effective
            communicator, Alhamdulillah !!.
          </p>
        </div>
        <div>
          <img
            src="https://as2.ftcdn.net/v2/jpg/00/62/45/59/1000_F_62455935_yjM9OfhbtBVyonwlUSxOClvPNb5P8ksx.jpg"
            alt=""
          />
        </div>
      </div>
    );
};

export default About;