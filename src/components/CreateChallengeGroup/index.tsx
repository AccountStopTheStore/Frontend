import { CreateChallengeGroupUI } from "./style";
import LabelInput from "../Common/LabelInput";
import ShortButton from "../Common/ShortButton";

function CreateChallengeGroup() {
  const array = [
    {
      label: "그룹명",
      inputId: "groupName",
      inputName: "",
      placeholder: "그룹명 입력",
    },
    {
      label: "인원",
      inputId: "members",
      inputName: "",
      placeholder: "초대 인원수 선택",
    },
    {
      label: "목표액",
      inputId: "totalAmount",
      inputName: "",
      placeholder: "목표액 입력",
    },
    {
      label: "시작일",
      inputId: "startedAt",
      inputName: "",
      placeholder: "시작일 입력",
    },
    {
      label: "종료일",
      inputId: "finishedAt",
      inputName: "",
      placeholder: "종료일 입력",
    },
    {
      label: "초대링크",
      inputId: "inviteLink",
      inputName: "",
      placeholder: "초대링크 출력",
    },
  ];

  const handleSavingButton = () => {
    console.log("saving");
  };
  return (
    <CreateChallengeGroupUI.Container>
      <div>
        {array.map((object) => {
          return (
            <LabelInput
              key={object.inputId}
              type="text"
              label={object.label}
              inputId={object.inputId}
              inputName={object.inputName}
              placeholder={object.placeholder}
            />
          );
        })}
      </div>
      <ShortButton isSaveButton onClick={handleSavingButton} />
    </CreateChallengeGroupUI.Container>
  );
}

export default CreateChallengeGroup;
