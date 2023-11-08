import CancelPNG from "../../../../public/icon/Cancel.png";
import WritingPNG from "../../../../public/icon/Writing.png";
import { Button } from "@mui/material";
import { theme } from "../../../assets/theme";

const gridContainerStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
};

const buttonStyles = {
  height: "75px",
  border: `1px solid ${theme.font_color.gray2}`,
  borderRadius: "0",
};

const categoryHeader = {
  height: "50px",
  backgroundColor: `${theme.font_color.black}`,
  color: `${theme.font_color.white}`,
  paddingLeft: "20px",
  paddingRight: "20px",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

function SeparatedCategory() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  return (
    <>
      <div style={categoryHeader}>
        <div>카테고리 분류</div>
        <div>
          <button style={{ display: "inline-block", marginRight: "20px" }}>
            <img src={WritingPNG} alt="WritingPNG" />
          </button>
          <button>
            <img src={CancelPNG} alt="CancelPNG" />
          </button>
        </div>
      </div>
      <div style={gridContainerStyles}>
        {array.map((item) => (
          <Button key={item} style={buttonStyles}>
            Button {item}
          </Button>
        ))}
      </div>
    </>
  );
}

export default SeparatedCategory;
