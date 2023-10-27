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
        borderBottom: `1px solid ${theme.font_color.gray2}`,
        padding: "13.15px 20px",
        justifyContent: "flex-start",
        color: `${theme.font_color.black}`,
        fontWeight: "300",
        fontSize: "13px",
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export default CommonButton;
