import facebookIcon from "../../assets/icons8-facebook.svg";
import WppIcon from "../../assets/icons8-whatsapp.svg";
import PinterestIcon from "../../assets/icons8-pinterest.svg";
import { Share } from "./style";

export const Social = () => {
  return (
    <Share>
      <p>Share</p>
      <img src={facebookIcon} alt="teste" />
      <img src={WppIcon} alt="teste" />
      <img src={PinterestIcon} alt="teste" />
    </Share>
  );
};
