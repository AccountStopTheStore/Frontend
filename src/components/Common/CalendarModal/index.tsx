import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { CalendarModalUI } from "./style";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import { koKR } from "@mui/x-date-pickers/locales";
import { useRecoilState } from "recoil";
import { modalOpenStateAtom } from "@/src/hooks/recoil/calendarModalState";
import { DateTimePicker } from "@mui/x-date-pickers";
import { saveAccountBookAtom } from "@/src/hooks/recoil/useSaveAccountBook";

interface CalendarModalProps {
  page: string;
}

function CalendarModal({ page }: CalendarModalProps) {
  const [isCalendarModalOpen, setIsCalendarModalOpen] =
    useRecoilState(modalOpenStateAtom);
  const [, setPostSaveAccountBook] = useRecoilState(saveAccountBookAtom);

  const handleModalOutsideClick = () => {
    setIsCalendarModalOpen(false);
  };

  const handleChangeRecordAccountBookDate = (value: Date | null) => {
    if (value !== null) {
      const formattedDate = dayjs(value).format("YYYY-MM-DDTHH:mm:ss"); // 형식에 맞게 날짜를 문자열로 변환
      setPostSaveAccountBook(prev => ({
        ...prev,
        transactedAt: formattedDate,
      }));
      console.log("Selected Date:", formattedDate);
    }
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
              dateFormats={
                page === "recordAccountBook"
                  ? { monthAndYear: "YYYY년 MM월" }
                  : { monthAndYear: "YYYY년 MM월" }
              }>
              <DemoContainer
                components={
                  page === "recordAccountBook"
                    ? ["DateTimePicker"]
                    : ["DatePicker"]
                }
                // .MuiStack-root
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",

                  "& >.MuiTextField-root": {
                    minWidth: "0!important",
                  },
                }}>
                {page === "recordAccountBook" ? (
                  <DateTimePicker
                    onChange={handleChangeRecordAccountBookDate}
                    label="날짜를 선택해주세요"
                    views={[
                      "year",
                      "month",
                      "day",
                      "hours",
                      "minutes",
                      "seconds",
                    ]}
                    ampm={false}
                    format={"YYYY/MM/DD hh:mm:ss"}
                    slotProps={{
                      // MuiFormControl-root-MuiTextField-root
                      textField: {
                        sx: {
                          borderRadius: "5px",
                        },

                        //MuiFormControl-root-MuiTextField-root
                        InputLabelProps: {
                          sx: {
                            fontSize: "14px",
                          },
                        },

                        // MuiInputBase-root-MuiOutlinedInput-root
                        InputProps: {
                          sx: {
                            height: "50px",
                            fontSize: "15px",
                          },
                        },
                      },

                      //MuiInputAdornment-root
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

                      // MuiButtonBase-root-MuiPickersDay-root (날짜)
                      day: {
                        sx: { fontSize: "13px" },
                      },

                      // 확인 버튼
                      actionBar: {
                        sx: {
                          "& > button": {
                            fontSize: "13px",
                          },
                        },
                      },

                      // MuiPickersLayout-root
                      layout: {
                        sx: {
                          // 요일
                          " & .MuiDayCalendar-header > span": {
                            fontSize: "13px",
                          },

                          // 시, 분, 초
                          "& .MuiMenuItem-root": {
                            fontSize: "13px",
                          },
                        },
                      },

                      leftArrowIcon: {
                        sx: {
                          width: "24px",
                          height: "24px",
                        },
                      },

                      rightArrowIcon: {
                        sx: {
                          width: "24px",
                          height: "24px",
                        },
                      },
                    }}
                  />
                ) : (
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
                )}
              </DemoContainer>
            </LocalizationProvider>
          </CalendarModalUI.ModalContainer>
        </CalendarModalUI.Backgorund>
      )}
    </>
  );
}

export default CalendarModal;
