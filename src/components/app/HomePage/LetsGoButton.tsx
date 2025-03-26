import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface ILetsGoButton {
  className?: string;
  buttonClass?: string;
}
function LetsGoButton({ className, buttonClass }: ILetsGoButton) {

  useGSAP(() => {
    gsap.from(".GLetsGoButton", {
      background: "#ADBA99",
      ease: "none",
      top: 0,
    });
    gsap.to(".GLetsGoButton", {
      background: "#ADBA99",
      opacity: 0.90,
      duration: 0.5,
      yoyo: true,
      repeat: -1,
      top: 0,
    });

  });
  return (
    <div className={clsx(" absolute right-1/12 top-1/12", className)}>
        <button
          onMouseEnter={() =>
            gsap.to(".GLetsGoButton", {
              clipPath: "polygon(8% 5%, 94% 13%, 100% 100%, 0 94%)",
              top: 0,
              left: 0,
            })
          }
          onMouseLeave={() =>
            gsap.to(".GLetsGoButton", {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0 100%)",
            })
          }
          className={clsx(
            " GLetsGoButton  text-white rounded-md p-3 px-5 flex flex-row items-center gap-x-3 top-1/12 font-shados-into ",
            buttonClass
          )}
        >
          <p>Let&apos;s Go</p>
          <FaArrowRight />
        </button>
    </div>
  );
}

export default LetsGoButton;
