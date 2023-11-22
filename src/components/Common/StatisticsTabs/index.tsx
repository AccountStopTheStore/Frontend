import { theme } from "../../../assets/theme";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";
import { styled } from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tabpanel-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tabpanel-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function StatisticsTabs() {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log("event: ", event);
    setValue(newValue);
  };

  const tabNames = ["수입", "지출", "합계"];

  const tabWidth = "(100% - (20px * 2)) / 3"; // 100%를 390px로 지정하면 정확하게 3등분 됨

  const StyledTab = styled(Tab)({
    "&.Mui-selected": {
      color: theme.font_color.black,
    },
  });

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          width: "inherit",
          height: "50",
          borderBottom: `1px solid ${theme.font_color.gray2}`,
          padding: "0 20px",
          backgroundColor: theme.font_color.gray1,
        }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{
            style: {
              background: `${theme.font_color.primary_green}`,
              height: "5px",
            },
          }}
          sx={{
            "& button": { color: theme.font_color.gray3 },
          }}>
          {tabNames.map((name, index) => (
            <StyledTab
              key={index}
              label={name}
              {...a11yProps(index)}
              sx={{
                display: "block",
                width: `calc(${tabWidth})`, // flex gorw: 1 설정
                fontSize: "16px",
                fontWeight: 400,
                flexGrow: 1,
              }}
            />
          ))}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Item One
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}
