import CancelPNG from "../../../../public/icon/Cancel.png";
import WritingPNG from "../../../../public/icon/Writing.png";
import { Button } from "@mui/material";
import { theme } from "../../../assets/theme";
import { SeperatedCategoryUI } from "./style";

const buttonStyles = {
  height: "75px",
  border: `1px solid ${theme.font_color.gray2}`,
  borderRadius: "0",
};

function SeparatedCategory() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  return (
    <SeperatedCategoryUI.Container>
      <SeperatedCategoryUI.CategoryHeader>
        <div>카테고리 분류</div>
        <div>
          <button
            type="button"
            style={{ display: "inline-block", marginRight: "20px" }}>
            <img src={WritingPNG} alt="WritingPNG" />
          </button>
          <button type="button">
            <img src={CancelPNG} alt="CancelPNG" />
          </button>
        </div>
      </SeperatedCategoryUI.CategoryHeader>
      <SeperatedCategoryUI.GridContainer>
        {array.map(item => (
          <Button key={item} style={buttonStyles}>
            Button {item}
          </Button>
        ))}
      </SeperatedCategoryUI.GridContainer>
    </SeperatedCategoryUI.Container>
  );
}

export default SeparatedCategory;
