import { getChallengeGroupAtom } from "@/src/hooks/recoil/useGetChallengeGroup";
import LabelInput from "../Common/LabelInput";
import { UpdateChallengeGroupUI } from "./style";
import { useRecoilState } from "recoil";
import { ChangeEvent, useEffect, useState } from "react";
import ShortButton from "../Common/ShortButton";
import { useNavigate, useParams } from "react-router-dom";
import { challengeGroupAPI } from "@/src/core/api/challengeGroup";
import { LabelInputUI } from "../Common/LabelInput/style";
import FakeInputButton from "../Common/FakeInputButton";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function UpdateChallengeGroup() {
  const param = useParams();
  const navigate = useNavigate();
  /* COMPLETED: Recoil(getChallengeGroupAtom) 값 가져오기 */
  const [challengeGroup, setChallengeGroup] = useRecoilState(
    getChallengeGroupAtom
  );

  /* COMPLETED: Recoil(getChallengeGroupAtom) 데이터 수정하기 */
  const handleGroupName = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setChallengeGroup(prev => ({
      ...prev,
      name: value,
    }));
  };
  const handleTargetAmount = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setChallengeGroup(prev => ({
      ...prev,
      targetAmount: Number(value),
    }));
  };
  const handleStartAt = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setChallengeGroup(prev => ({
      ...prev,
      startAt: value,
    }));
  };
  const handleEndAt = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setChallengeGroup(prev => ({
      ...prev,
      endAt: value,
    }));
  };

  /* 초대링크 값 가져오기 */
  useEffect(() => {
    const fetchInviteLinkData = async () => {
      try {
        const response = await challengeGroupAPI.createInviteLink(
          challengeGroup.id
        );

        if (response.status === 200) {
          setChallengeGroup(prev => ({
            ...prev,
            inviteLink: response.data.inviteLink,
          }));
        }
      } catch (error) {
        console.error("InviteLink error: ", error);
      }
    };
    fetchInviteLinkData();
  }, []);

  /* COMPLETED: Server로 수정한 데이터 변경하기(PUT) */
  // 수정 내용 저장하기
  const handleSavingButton = async () => {
    try {
      const response = await challengeGroupAPI.updateGroup(challengeGroup);
      if (response.status === 200) {
        navigate(`/challenge/${param.slug}`);
      }
    } catch (error) {
      console.error("error: ", error);
    }
  };
  // 수정 내용 취소하기
  const handleCancelButton = () => {
    navigate(`/challenge/${param.slug}`);
  };

  /* 인원 수 선택 창 */
  const [isOpenMaxMembersModal, setIsOpenMaxMembersModal] = useState(false);
  const handleMaxMembersModalItem = (members: number) => {
    setIsOpenMaxMembersModal(false);
    setChallengeGroup(prev => ({
      ...prev,
      maxMembers: members,
    }));
  };
  const [isOpenStartAtModal, setIsOpenStartAtModal] = useState(false);
  const handleStartAtModalItem = (date: string) => {
    setIsOpenStartAtModal(false);
    setChallengeGroup(prev => ({
      ...prev,
      startAt: date,
    }));
  };
  const today = new Date().toDateString();

  // const [isOpenMaxMembersModal, setIsOpenMaxMembersModal] = useState(false);
  // const handleModalItem = (members: number) => {
  //   setIsOpenMaxMembersModal(false);
  //   setChallengeGroup(prev => ({
  //     ...prev,
  //     maxMembers: members,
  //   }));
  // };

  return (
    <>
      <UpdateChallengeGroupUI.Container>
        <div>
          <LabelInput
            type="text"
            label="그룹명"
            inputId="groupName"
            placeholder="그룹명 입력"
            value={challengeGroup.name}
            onChange={handleGroupName}
          />
          <LabelInputUI.InputContainer>
            <LabelInputUI.Label>인원</LabelInputUI.Label>
            <FakeInputButton onClick={() => setIsOpenMaxMembersModal(true)}>
              {challengeGroup.maxMembers}
            </FakeInputButton>
          </LabelInputUI.InputContainer>
          <LabelInput
            type="text"
            label="목표액"
            inputId="totalAmount"
            placeholder="목표액 입력"
            value={challengeGroup.targetAmount}
            onChange={handleTargetAmount}
          />
          <LabelInputUI.InputContainer>
            <LabelInputUI.Label>시작일</LabelInputUI.Label>
            <FakeInputButton onClick={() => setIsOpenStartAtModal(true)}>
              {challengeGroup.startAt}
            </FakeInputButton>
          </LabelInputUI.InputContainer>
          <LabelInput
            type="text"
            label="시작일"
            inputId="startAt"
            placeholder="시작일 입력"
            value={challengeGroup.startAt}
            onChange={handleStartAt}
          />
          <LabelInput
            type="text"
            label="종료일"
            inputId="endAt"
            placeholder="종료일 입력"
            value={challengeGroup.endAt}
            onChange={handleEndAt}
          />
          {/* 초대링크 Input (ReadOnly) */}
          <LabelInput
            type="text"
            label="초대링크"
            inputId="inviteLink"
            placeholder="초대링크 입력"
            value={challengeGroup.inviteLink}
            readonly
          />
        </div>
      </UpdateChallengeGroupUI.Container>
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
                  onClick={() => handleMaxMembersModalItem(1)}>
                  1
                </UpdateChallengeGroupUI.ModalButton>
              </li>
              <li>
                <UpdateChallengeGroupUI.ModalButton
                  onClick={() => handleMaxMembersModalItem(2)}>
                  2
                </UpdateChallengeGroupUI.ModalButton>
              </li>
              <li>
                <UpdateChallengeGroupUI.ModalButton
                  onClick={() => handleMaxMembersModalItem(3)}>
                  3
                </UpdateChallengeGroupUI.ModalButton>
              </li>
              <li>
                <UpdateChallengeGroupUI.ModalButton
                  onClick={() => handleMaxMembersModalItem(4)}>
                  4
                </UpdateChallengeGroupUI.ModalButton>
              </li>
              <li>
                <UpdateChallengeGroupUI.ModalButton
                  onClick={() => handleMaxMembersModalItem(5)}>
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
                <DemoContainer components={["DateCalendar", "DateCalendar"]}>
                  <DemoItem label="Controlled calendar">
                    <DateCalendar
                      defaultValue={today}
                      onChange={() => handleStartAtModalItem(today)}
                    />
                  </DemoItem>
                </DemoContainer>
              </LocalizationProvider>
            </UpdateChallengeGroupUI.ModalContainer>
          </UpdateChallengeGroupUI.ModalBackgroundContainer>
        </>
      )}
    </>
  );
}

export default UpdateChallengeGroup;
