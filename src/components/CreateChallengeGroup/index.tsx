import { CreateChallengeGroupUI } from "./style";
import LabelInput from "../Common/LabelInput";
import ShortButton from "../Common/ShortButton";
import { useNavigate } from "react-router-dom";
import { challengeGroupAPI } from "@/src/core/api/challengeGroup";
import { useRecoilState } from "recoil";
import { createChallengeGroupAtom } from "@/src/hooks/recoil/useCreateChallengeGroup";
import { ChangeEvent, useState } from "react";
import { LabelInputUI } from "../Common/LabelInput/style";
import FakeInputButton from "../Common/FakeInputButton";
import { UpdateChallengeGroupUI } from "../UpdateChallengeGroup/style";

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
        navigate("/challenge");
      }
    } catch (error) {
      console.log("챌린지 생성 error: ", error);
    }
  };

  const handleCancelButton = () => {
    navigate("/challenge");
  };

  const handleGroupName = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCreateChallengeGroup(prev => ({
      ...prev,
      name: value,
    }));
  };
  // const handleMaxMembers = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { value } = e.target;
  //   setCreateChallengeGroup(prev => ({
  //     ...prev,
  //     maxMembers: Number(value),
  //   }));
  // };
  const handleTargetAmount = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCreateChallengeGroup(prev => ({
      ...prev,
      targetAmount: Number(value),
    }));
  };
  const handleStartAt = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCreateChallengeGroup(prev => ({
      ...prev,
      startAt: value,
    }));
  };
  const handleEndAt = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCreateChallengeGroup(prev => ({
      ...prev,
      endAt: value,
    }));
  };

  /* 인원 수 선택 창 */
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleModalItem = (members: number) => {
    setIsOpenModal(false);
    setCreateChallengeGroup(prev => ({
      ...prev,
      maxMembers: members,
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
            <FakeInputButton onClick={() => setIsOpenModal(true)}>
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
          <LabelInput
            type="text"
            label="시작일"
            inputId="startAt"
            placeholder="시작일 입력"
            value={createChallengeGroup.startAt}
            onChange={handleStartAt}
          />
          <LabelInput
            type="text"
            label="종료일"
            inputId="endAt"
            placeholder="종료일 입력"
            value={createChallengeGroup.endAt}
            onChange={handleEndAt}
          />
        </div>
      </CreateChallengeGroupUI.Container>
      <ShortButton
        isSaveButton
        onSaveClick={handleSavingButton}
        onCancelClick={handleCancelButton}
      />
      {isOpenModal && (
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
    </>
  );
}

export default CreateChallengeGroup;
