import Button from "@mui/material/Button";
import { theme } from "../../../assets/theme";

interface CommonButtonProps {
  children: string;
  onClick: () => void;
}

function CommonButton({ children, onClick }: CommonButtonProps) {
  return (
    <Button
      variant="text"
      style={{
        width: "100%",
        height: "50px",
        borderBottom: `1px solid ${theme.font_color.gray2}`,
        paddingLeft: "20px",
        justifyContent: "flex-start",
        color: `${theme.font_color.black}`,
        fontWeight: "400",
        fontSize: "16px",
        backgroundColor: `${theme.font_color.white}`,
      }}
      onClick={onClick}>
      {children}
    </Button>
  );
}

export default CommonButton;
