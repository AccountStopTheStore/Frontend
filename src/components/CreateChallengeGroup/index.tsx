import { CreateChallengeGroupUI } from "./style";
import LabelInput from "../Common/LabelInput";
import ShortButton from "../Common/ShortButton";
import { useNavigate } from "react-router-dom";
import { challengeGroupAPI } from "@/src/core/api/challengeGroup";
import { useRecoilState } from "recoil";
import {
  createChallengeGroupAtom,
  createChallengeGroupInitial,
} from "@/src/hooks/recoil/useCreateChallengeGroup";
import { ChangeEvent, useState } from "react";
import { LabelInputUI } from "../Common/LabelInput/style";
import FakeInputButton from "../Common/FakeInputButton";
import { UpdateChallengeGroupUI } from "../UpdateChallengeGroup/style";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function CreateChallengeGroup() {
  const navigate = useNavigate();

  const [createChallengeGroup, setCreateChallengeGroup] = useRecoilState(
    createChallengeGroupAtom
  );
  const handleSavingButton = async () => {
    try {
      const response = await challengeGroupAPI.createGroup(
        createChallengeGroup
      );
      if (response.status === 200) {
        setCreateChallengeGroup(createChallengeGroupInitial);
        navigate("/challenge");
      }
    } catch (error) {
      console.log("챌린지 생성 error: ", error);
    }
  };
  const handleCancelButton = () => {
    setCreateChallengeGroup(createChallengeGroupInitial);
    navigate("/challenge");
  };

  const handleGroupName = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCreateChallengeGroup(prev => ({
      ...prev,
      name: value,
    }));
  };
  /* 인원 수 선택 창 */
  const [isOpenMaxMembersModal, setIsMaxMembersOpenModal] = useState(false);
  const handleModalItem = (members: number) => {
    setIsMaxMembersOpenModal(false);
    setCreateChallengeGroup(prev => ({
      ...prev,
      maxMembers: members,
    }));
  };
  const handleTargetAmount = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCreateChallengeGroup(prev => ({
      ...prev,
      targetAmount: Number(value),
    }));
  };
  const [isOpenStartAtModal, setIsOpenStartAtModal] = useState(false);
  const handleStartAtModalItem = (date: unknown) => {
    if (date === null) return;

    /** 'YYYY-MM-DD' 형태로 startAt 데이터 저장하기 */
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const stringDate = (date as any).$d
      .toLocaleDateString("ko-KR", options)
      .replace(/\./g, "")
      .replace(/ /g, "-");

    setIsOpenStartAtModal(false);
    setCreateChallengeGroup(prev => ({
      ...prev,
      startAt: stringDate,
    }));
  };
  const [isOpenEndAtModal, setIsOpenEndAtModal] = useState(false);
  const handleEndAtModalItem = (date: unknown) => {
    if (date === null) return;

    /** 'YYYY-MM-DD' 형태로 endAt 데이터 저장하기 */
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const stringDate = (date as any).$d
      .toLocaleDateString("ko-KR", options)
      .replace(/\./g, "")
      .replace(/ /g, "-");

    setIsOpenEndAtModal(false);
    setCreateChallengeGroup(prev => ({
      ...prev,
      endAt: stringDate,
    }));
  };
  const handleDescription = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCreateChallengeGroup(prev => ({
      ...prev,
      description: value,
    }));
  };

  return (
    <>
      <CreateChallengeGroupUI.Container>
        <div>
          <LabelInput
            type="text"
            label="그룹명"
            inputId="groupName"
            placeholder="그룹명 입력"
            value={createChallengeGroup.name}
            onChange={handleGroupName}
          />
          <LabelInputUI.InputContainer>
            <LabelInputUI.Label>인원</LabelInputUI.Label>
            <FakeInputButton onClick={() => setIsMaxMembersOpenModal(true)}>
              {createChallengeGroup.maxMembers}
            </FakeInputButton>
          </LabelInputUI.InputContainer>
          <LabelInput
            type="text"
            label="목표액"
            inputId="totalAmount"
            placeholder="목표액 입력"
            value={createChallengeGroup.targetAmount}
            onChange={handleTargetAmount}
          />
          <LabelInputUI.InputContainer>
            <LabelInputUI.Label>시작일</LabelInputUI.Label>
            <FakeInputButton onClick={() => setIsOpenStartAtModal(true)}>
              {createChallengeGroup.startAt}
            </FakeInputButton>
          </LabelInputUI.InputContainer>
          <LabelInputUI.InputContainer>
            <LabelInputUI.Label>종료일</LabelInputUI.Label>
            <FakeInputButton onClick={() => setIsOpenEndAtModal(true)}>
              {createChallengeGroup.endAt}
            </FakeInputButton>
          </LabelInputUI.InputContainer>
          <LabelInput
            type="text"
            label="메모"
            inputId="description"
            placeholder="메모 입력"
            value={createChallengeGroup.description}
            onChange={handleDescription}
          />
        </div>
      </CreateChallengeGroupUI.Container>
      <ShortButton
        isSaveButton
        onSaveClick={handleSavingButton}
        onCancelClick={handleCancelButton}
      />
      {isOpenMaxMembersModal && (
        <UpdateChallengeGroupUI.ModalBackgroundContainer>
          <UpdateChallengeGroupUI.ModalContainer>
            <h6>초대 인원 수</h6>
            <ul>
              <li>
                <UpdateChallengeGroupUI.ModalButton
                  onClick={() => handleModalItem(1)}>
                  1
                </UpdateChallengeGroupUI.ModalButton>
              </li>
              <li>
                <UpdateChallengeGroupUI.ModalButton
                  onClick={() => handleModalItem(2)}>
                  2
                </UpdateChallengeGroupUI.ModalButton>
              </li>
              <li>
                <UpdateChallengeGroupUI.ModalButton
                  onClick={() => handleModalItem(3)}>
                  3
                </UpdateChallengeGroupUI.ModalButton>
              </li>
              <li>
                <UpdateChallengeGroupUI.ModalButton
                  onClick={() => handleModalItem(4)}>
                  4
                </UpdateChallengeGroupUI.ModalButton>
              </li>
              <li>
                <UpdateChallengeGroupUI.ModalButton
                  onClick={() => handleModalItem(5)}>
                  5
                </UpdateChallengeGroupUI.ModalButton>
              </li>
            </ul>
          </UpdateChallengeGroupUI.ModalContainer>
        </UpdateChallengeGroupUI.ModalBackgroundContainer>
      )}
      {isOpenStartAtModal && (
        <>
          <UpdateChallengeGroupUI.ModalBackgroundContainer>
            <UpdateChallengeGroupUI.ModalContainer>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar onChange={date => handleStartAtModalItem(date)} />
              </LocalizationProvider>
            </UpdateChallengeGroupUI.ModalContainer>
          </UpdateChallengeGroupUI.ModalBackgroundContainer>
        </>
      )}
      {isOpenEndAtModal && (
        <>
          <UpdateChallengeGroupUI.ModalBackgroundContainer>
            <UpdateChallengeGroupUI.ModalContainer>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar onChange={date => handleEndAtModalItem(date)} />
              </LocalizationProvider>
            </UpdateChallengeGroupUI.ModalContainer>
          </UpdateChallengeGroupUI.ModalBackgroundContainer>
        </>
      )}
    </>
  );
}

export default CreateChallengeGroup;
