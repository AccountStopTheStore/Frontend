import CoinPNG from "@/public/icon/Coin.png";
import PigPNG from "@/public/icon/Pig.png";
import { LogoImageUI } from "./style";

function LogoImage() {
  return (
    <LogoImageUI.ImageContainer>
      <img src={CoinPNG} alt="coinPNG" />
      <img src={CoinPNG} alt="coinPNG" />
      <img src={CoinPNG} alt="coinPNG" />
      <img src={PigPNG} alt="pigPNG" />
    </LogoImageUI.ImageContainer>
  );
}

export default LogoImage;
