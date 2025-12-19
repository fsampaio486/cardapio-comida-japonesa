import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";

const SocialIcons = () => {
  return (
    <div className="flex justify-end  sm:w-[70vw] h-[7vh] sm:h-[10vh] ">
      <div className="flex gap-3">
        <a href="">
          <img
            className=" facebook w-[8vw] sm:w-[3vw]"
            src={facebook}
            alt="logo facebook"
          />
        </a>
        <a href="">
          {" "}
          <img
            className=" twitter w-[8vw] sm:w-[3vw]"
            src={twitter}
            alt="logo twitter"
          />
        </a>
        <a href="">
          {" "}
          <img
            className=" instagran w-[8vw] sm:w-[3vw]"
            src={instagram}
            alt="logo instagram"
          />
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
