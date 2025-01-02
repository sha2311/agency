import React from "react";
import ArrowFaq from '../../assets/Arrow.svg'

const FaqCard = ({q, a, onClick , isActive}) => {
  return (
    <div className="shadow-faq rounded-[20px] py-5 px-5 md:px-[30px] w-full bg-white">
      <button
        onClick={onClick}
        className="w-full inline-flex justify-between items-center gap-5"
      >
        <h1 className="font-bold text-start text-lg lg:text-[26px] lg:leading-[36px] text-accent">
          {q}
        </h1>
        <div>
          <img className={isActive ? "rotate-0" : " -rotate-90 " } src={ArrowFaq} alt="" />
        </div>
      </button>
      {isActive && (
        <p className=" tracking-[2%] text-accent pt-5 text-sm sm:text-base max-w-[807px]">
            {a}
        </p>
      )}
    </div>
  );
};

export default FaqCard;
