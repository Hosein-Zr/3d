import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import React from "react";
import clsx from "clsx";
import { useAnimationStore } from "../../../../store/zustandStore";

gsap.registerPlugin(TextPlugin);

interface ILanding {
  className?: string;
}

function Landing({ className }: ILanding) {
  const { setIsLetsGoButtonVisible } = useAnimationStore();
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        yoyo: true,
        repeat: 1,
        repeatDelay: 2,
        boxShadow: "0px 0px 10px 3px",
        ease: "none",
        duration: 2,
      },
      onStart() {
        gsap.set(".GSelfIntro", {
          background: "#F5F5F5",
          padding: "5px",
        });
      },
      onComplete() {
        gsap.set(".GSelfIntro", {
          background: "white",
        });
      },
    });
    tl.to(".GSelfIntro", {
      text: "HI EVERYONE. I AM HOSSEIN.",
    })
      .to(".GSelfIntro", {
        text: "LEST START OUR JOURNY VISITING THE JONGLE!",
      })
      .to(".GSelfIntro", {
        text: " IN THIS JOURNY I WILL INTRODUCE MY SELFE AS A FRONT END DEVELOPER, AND ENJOING VISITING THE JUNGLE",
        duration: 5,
        repeatDelay: 5,
      })
      .to(".GSelfIntro", {
        text: "FOR NOW YOU ARE FREE TO SEARCH AROUND OUR COUSY HOUSE. YOU CAN DO IT WITH MOUSE OR FINGER.",
        duration: 4,
        repeatDelay: 8,
        onComplete: () => {
          setIsLetsGoButtonVisible();
        },
      })
      .to(".GSelfIntro", {
        text: "AFTER THEN YOU CAN CLICK ON THE LET'S GO BUTTON IF YOU LIKE TO START OUR JOURNY .",
        repeatDelay: 5,
        onComplete: () => {
          gsap.to("GSelfeintro", { visibility: "hidden" });
        },
      });
  });

  return (
    <div
      className={clsx(
        "absolute flex items-center justify-center top-1/5 sm:left-1/4 left-1/2 -translate-y-1/2 -translate-x-3/5 ",
        className
      )}
    >
      <h1 className="GSelfIntro text-forest-green font-shados-into font-bold lg:text-xl text-sm lg:max-w-[400] max-w-[250] text-center"></h1>
    </div>
  );
}

export default Landing;
