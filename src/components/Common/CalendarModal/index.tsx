import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { CalendarModalUI } from "./style";
// import dayjs from "dayjs";
import "dayjs/locale/ko";
import { koKR } from "@mui/x-date-pickers/locales";
import { useRecoilState } from "recoil";
import { modalOpenStateAtom } from "@/src/hooks/recoil/calendarModalState";

function CalendarModal() {
  const [isCalendarModalOpen, setIsCalendarModalOpen] =
    useRecoilState(modalOpenStateAtom);

  const handleModalOutsideClick = () => {
    setIsCalendarModalOpen(false);
  };

  return (
    <>
      {isCalendarModalOpen && (
        <CalendarModalUI.Backgorund onClick={handleModalOutsideClick}>
          <CalendarModalUI.ModalContainer
            onClick={(e: React.MouseEvent<HTMLDivElement>) =>
              e.stopPropagation()
            }>
            <LocalizationProvider
              dateAdapter={AdapterDayjs}
              adapterLocale="ko"
              localeText={
                koKR.components.MuiLocalizationProvider.defaultProps.localeText
              }
              // 달력 날짜 포맷
              dateFormats={{ monthAndYear: "YYYY년 MM월" }}>
              <DemoContainer
                components={["DatePicker"]}
                // .MuiStack-root
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}>
                <DesktopDatePicker
                  label="날짜를 선택해주세요"
                  views={["year", "month"]}
                  format={"YYYY년 MM월"}
                  slotProps={{
                    textField: {
                      sx: {
                        borderRadius: "5px",
                      },
                      InputLabelProps: {
                        sx: {
                          fontSize: "14px",
                        },
                      },
                      InputProps: {
                        sx: {
                          height: "50px",
                          fontSize: "15px",
                        },
                      },
                    },
                    inputAdornment: {
                      sx: {
                        // 달력 아이콘 사이즈
                        "& .MuiSvgIcon-root": {
                          width: "20px",
                          height: "20px",
                        },
                      },
                    },

                    // .MuiPaper-root (달력)
                    desktopPaper: {
                      sx: {
                        position: "absolute",
                        left: "-36px",

                        "& .MuiPickersCalendarHeader-label": {
                          fontWeight: "600",
                          fontSize: "16px",
                        },
                        "& .MuiPickersCalendarHeader-switchViewIcon": {
                          width: "24px",
                          height: "24px",
                        },
                        "& .MuiPickersMonth-monthButton": {
                          fontSize: "16px",
                        },
                        "& .MuiPickersYear-yearButton": {
                          fontSize: "15px",
                        },
                      },
                    },
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>
          </CalendarModalUI.ModalContainer>
        </CalendarModalUI.Backgorund>
      )}
    </>
  );
}

export default CalendarModal;
