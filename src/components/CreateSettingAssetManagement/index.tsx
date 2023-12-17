import { useState } from "react";
import FakeInputButton from "../Common/FakeInputButton";
import LabelInput from "../Common/LabelInput";
import { LabelInputUI } from "../Common/LabelInput/style";
import { UpdateChallengeGroupUI } from "../UpdateChallengeGroup/style";
import { useRecoilState } from "recoil";
import {
  createAssetAtom,
  createAssetInitial,
} from "@/src/hooks/recoil/useCreateAsset";
import {
  AssetGroupSymbol,
  AssetTypeSymbol,
} from "@/src/@types/models/assetSymbol";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ShortButton from "../Common/ShortButton";
import { useNavigate } from "react-router-dom";
import { assetsAPI } from "@/src/core/api/assets";
import { CreateSettingAssetManagementUI } from "./style";

function CreateSettingAssetManagement() {
  const [createAsset, setCreateAsset] = useRecoilState(createAssetAtom);
  /* COMPLETED: assetGroup 데이터 추가 */
  const [isOpenAssetGroupModal, setIsOpenAssetGroupModal] = useState(false);
  const handleAssetGroupModalItem = (assetGroup: AssetGroupSymbol) => {
    setCreateAsset(prev => ({
      ...prev,
      assetGroup: assetGroup,
    }));
    if (assetGroup === "은행") {
      setCreateAsset(prev => ({
        ...prev,
        assetType: "신한은행",
      }));
    }
    if (assetGroup === "카드") {
      setCreateAsset(prev => ({
        ...prev,
        assetType: "KB국민카드",
      }));
    }
    setIsOpenAssetGroupModal(false);
  };
  /* COMPLETED: assetType 데이터 추가 */
  const [isOpenAssetTypeModal, setIsOpenAssetTypeModal] = useState(false);
  const handleAssetTypeModalItem = (assetType: AssetTypeSymbol) => {
    setCreateAsset(prev => ({
      ...prev,
      assetType: assetType,
    }));
    setIsOpenAssetTypeModal(false);
  };
  /* COMPLETED: statementDay 데이터 추가 */
  const [isOpenStatementDayModal, setIsOpenStatementDayModal] = useState(false);
  const handleStatementDayModalItem = (date: unknown) => {
    if (date === null) return;

    /** 'YYYY-MM-DD' 형태로 startAt 데이터 저장하기 */
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const stringDate = (date as any).$d
      .toLocaleDateString("ko-KR", options)
      .replace(/\./g, "")
      .replace(/ /g, "-");

    setIsOpenStatementDayModal(false);
    setCreateAsset(prev => ({
      ...prev,
      statementDay: stringDate,
    }));
  };
  /* COMPLETED: dueDay 데이터 추가 */
  const [isOpenDueDayModal, setIsOpenDueDayModal] = useState(false);
  const handleDueDayModalItem = (date: unknown) => {
    if (date === null) return;

    /** 'YYYY-MM-DD' 형태로 startAt 데이터 저장하기 */
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const stringDate = (date as any).$d
      .toLocaleDateString("ko-KR", options)
      .replace(/\./g, "")
      .replace(/ /g, "-");

    setIsOpenDueDayModal(false);
    setCreateAsset(prev => ({
      ...prev,
      dueDay: stringDate,
    }));
  };

  const navigate = useNavigate();
  const handleSavingButton = async () => {
    try {
      const response = await assetsAPI.createAssets(createAsset);
      if (response.status === 200) {
        navigate(-1);
      }
    } catch (error) {
      console.error("error: ", error);
    }
  };

  const handleCancelButton = () => {
    setCreateAsset(createAssetInitial);
    navigate(-1);
  };

  return (
    <>
      <CreateSettingAssetManagementUI.Container>
        <div>
          <LabelInputUI.InputContainer>
            <LabelInputUI.Label>자산그룹</LabelInputUI.Label>
            <FakeInputButton onClick={() => setIsOpenAssetGroupModal(true)}>
              {createAsset.assetGroup}
            </FakeInputButton>
          </LabelInputUI.InputContainer>
          <LabelInputUI.InputContainer>
            <LabelInputUI.Label>자산타입</LabelInputUI.Label>
            <FakeInputButton onClick={() => setIsOpenAssetTypeModal(true)}>
              {createAsset.assetType}
            </FakeInputButton>
          </LabelInputUI.InputContainer>
          <LabelInput
            type={"text"}
            label={"이름"}
            inputId={"assetName"}
            value={createAsset.assetName}
            placeholder={"자산이름 입력"}
          />
          {createAsset.assetGroup === "카드" && (
            <>
              <LabelInputUI.InputContainer>
                <LabelInputUI.Label>정산일</LabelInputUI.Label>
                <FakeInputButton
                  onClick={() => setIsOpenStatementDayModal(true)}>
                  {createAsset.statementDay}
                </FakeInputButton>
              </LabelInputUI.InputContainer>
              <LabelInputUI.InputContainer>
                <LabelInputUI.Label>결제일</LabelInputUI.Label>
                <FakeInputButton onClick={() => setIsOpenDueDayModal(true)}>
                  {createAsset.dueDay}
                </FakeInputButton>
              </LabelInputUI.InputContainer>
            </>
          )}
          <LabelInput
            type={"text"}
            label={"메모"}
            inputId={"memo"}
            value={createAsset.memo}
            placeholder={"메모 입력"}
          />
        </div>
      </CreateSettingAssetManagementUI.Container>
      <ShortButton
        isSaveButton
        onSaveClick={handleSavingButton}
        onCancelClick={handleCancelButton}
      />
      {isOpenAssetGroupModal && (
        <UpdateChallengeGroupUI.ModalBackgroundContainer>
          <UpdateChallengeGroupUI.ModalContainer>
            <h6>자산 그룹</h6>
            <ul>
              <li>
                <UpdateChallengeGroupUI.ModalButton
                  onClick={() => handleAssetGroupModalItem("현금")}>
                  현금
                </UpdateChallengeGroupUI.ModalButton>
              </li>
              <li>
                <UpdateChallengeGroupUI.ModalButton
                  onClick={() => handleAssetGroupModalItem("은행")}>
                  은행
                </UpdateChallengeGroupUI.ModalButton>
              </li>
              <li>
                <UpdateChallengeGroupUI.ModalButton
                  onClick={() => handleAssetGroupModalItem("카드")}>
                  카드
                </UpdateChallengeGroupUI.ModalButton>
              </li>
            </ul>
          </UpdateChallengeGroupUI.ModalContainer>
        </UpdateChallengeGroupUI.ModalBackgroundContainer>
      )}
      {isOpenAssetTypeModal && (
        <UpdateChallengeGroupUI.ModalBackgroundContainer>
          <UpdateChallengeGroupUI.ModalContainer>
            <h6>자산 타입</h6>
            {createAsset.assetGroup === "은행" ? (
              <ul>
                <li>
                  <UpdateChallengeGroupUI.ModalButton
                    onClick={() => handleAssetTypeModalItem("신한은행")}>
                    신한은행
                  </UpdateChallengeGroupUI.ModalButton>
                </li>
                <li>
                  <UpdateChallengeGroupUI.ModalButton
                    onClick={() => handleAssetTypeModalItem("국민은행")}>
                    국민은행
                  </UpdateChallengeGroupUI.ModalButton>
                </li>
                <li>
                  <UpdateChallengeGroupUI.ModalButton
                    onClick={() => handleAssetTypeModalItem("우리은행")}>
                    우리은행
                  </UpdateChallengeGroupUI.ModalButton>
                </li>
                <li>
                  <UpdateChallengeGroupUI.ModalButton
                    onClick={() => handleAssetTypeModalItem("하나은행")}>
                    하나은행
                  </UpdateChallengeGroupUI.ModalButton>
                </li>
                <li>
                  <UpdateChallengeGroupUI.ModalButton
                    onClick={() => handleAssetTypeModalItem("기업은행")}>
                    기업은행
                  </UpdateChallengeGroupUI.ModalButton>
                </li>
                <li>
                  <UpdateChallengeGroupUI.ModalButton
                    onClick={() => handleAssetTypeModalItem("농협은행")}>
                    농협은행
                  </UpdateChallengeGroupUI.ModalButton>
                </li>
              </ul>
            ) : createAsset.assetGroup === "카드" ? (
              <ul>
                <li>
                  <UpdateChallengeGroupUI.ModalButton
                    onClick={() => handleAssetTypeModalItem("신한카드")}>
                    신한카드
                  </UpdateChallengeGroupUI.ModalButton>
                </li>
                <li>
                  <UpdateChallengeGroupUI.ModalButton
                    onClick={() => handleAssetTypeModalItem("현대카드")}>
                    현대카드
                  </UpdateChallengeGroupUI.ModalButton>
                </li>
                <li>
                  <UpdateChallengeGroupUI.ModalButton
                    onClick={() => handleAssetTypeModalItem("삼성카드")}>
                    삼성카드
                  </UpdateChallengeGroupUI.ModalButton>
                </li>
                <li>
                  <UpdateChallengeGroupUI.ModalButton
                    onClick={() => handleAssetTypeModalItem("KB국민카드")}>
                    KB국민카드
                  </UpdateChallengeGroupUI.ModalButton>
                </li>
                <li>
                  <UpdateChallengeGroupUI.ModalButton
                    onClick={() => handleAssetTypeModalItem("NH농협카드")}>
                    NH농협카드
                  </UpdateChallengeGroupUI.ModalButton>
                </li>
                <li>
                  <UpdateChallengeGroupUI.ModalButton
                    onClick={() => handleAssetTypeModalItem("우리카드")}>
                    우리카드
                  </UpdateChallengeGroupUI.ModalButton>
                </li>
                <li>
                  <UpdateChallengeGroupUI.ModalButton
                    onClick={() => handleAssetTypeModalItem("롯데카드")}>
                    롯데카드
                  </UpdateChallengeGroupUI.ModalButton>
                </li>
                <li>
                  <UpdateChallengeGroupUI.ModalButton
                    onClick={() => handleAssetTypeModalItem("비씨카드")}>
                    비씨카드
                  </UpdateChallengeGroupUI.ModalButton>
                </li>
                <li>
                  <UpdateChallengeGroupUI.ModalButton
                    onClick={() => handleAssetTypeModalItem("하나카드")}>
                    하나카드
                  </UpdateChallengeGroupUI.ModalButton>
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <UpdateChallengeGroupUI.ModalButton
                    onClick={() => handleAssetTypeModalItem("현금")}>
                    현금
                  </UpdateChallengeGroupUI.ModalButton>
                </li>
              </ul>
            )}
          </UpdateChallengeGroupUI.ModalContainer>
        </UpdateChallengeGroupUI.ModalBackgroundContainer>
      )}
      {isOpenStatementDayModal && (
        <>
          <UpdateChallengeGroupUI.ModalBackgroundContainer>
            <UpdateChallengeGroupUI.ModalContainer>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                  onChange={date => handleStatementDayModalItem(date)}
                />
              </LocalizationProvider>
            </UpdateChallengeGroupUI.ModalContainer>
          </UpdateChallengeGroupUI.ModalBackgroundContainer>
        </>
      )}
      {isOpenDueDayModal && (
        <>
          <UpdateChallengeGroupUI.ModalBackgroundContainer>
            <UpdateChallengeGroupUI.ModalContainer>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar onChange={date => handleDueDayModalItem(date)} />
              </LocalizationProvider>
            </UpdateChallengeGroupUI.ModalContainer>
          </UpdateChallengeGroupUI.ModalBackgroundContainer>
        </>
      )}
    </>
  );
}

export default CreateSettingAssetManagement;
