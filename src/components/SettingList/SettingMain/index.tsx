import { useNavigate } from "react-router-dom";
import { SettingListUI } from "./style";
import { useState } from "react";
import ShortButton from "../../Common/ShortButton";
import HighImportance from "@/public/icon/HighImportance.png";
import { memberAPI } from "@/src/core/api/member";

function SettingMain() {
  const navigate = useNavigate();
  const handleAssetButton = () => {
    navigate("/setting/asset");
  };
  const handleIncomeButton = () => {
    navigate("/setting/income");
  };
  const handleExpenseButton = () => {
    navigate("/setting/expense");
  };
  const handleBudgetButton = () => {
    console.log("예산 설정 페이지 이동");
    /** TODO: 예산 설정 페이지 만들기 */
    // navigate("/setting/budget");
  };
  const handleRepeatButton = () => {
    console.log("반복 설정 페이지 이동");
    /** TODO: 반복 설정 페이지 만들기 */
    // navigate("/setting/repeat");
  };
  const handleResetPasswordButton = () => {
    console.log("비밀번호 변경 페이지 이동");
    /** TODO: 비밀번호 변경 페이지 만들기 */
    // navigate("/setting/resetpassword");
  };

  /* COMPLETED: 로그아웃하기 */
  const handleLogoutButton = async () => {
    try {
      const response = await memberAPI.signOut();
      if (response.status === 200) {
        navigate("/");
      }
    } catch (error) {
      console.error("로그아웃 error: ", error);
    }
  };
  /* COMPLETED: 회원탈퇴하기 */
  const [isOpenWithdrawModal, setIsOpenWithdrawModal] = useState(false);
  const handleWithdrawButton = async () => {
    console.log("회원탈퇴하기");
    setIsOpenWithdrawModal(false);

    /** FIXME: 완성 후, 주석 해제하기 */
    // try {
    //   const result = await memberAPI.withdrawal();

    //   if (result.status === 200) {
    //     setIsOpenWithdrawModal(false)
    //     navigate("/");
    //   }
    // } catch (error) {
    //   console.error("withdraw error: ", error);
    // }
  };
  return (
    <>
      <SettingListUI.SettingContainer>
        <SettingListUI.SettingTitle>관리</SettingListUI.SettingTitle>
        <ul>
          <SettingListUI.SettingItem>
            <SettingListUI.SettingButton onClick={handleAssetButton}>
              자산 관리
            </SettingListUI.SettingButton>
          </SettingListUI.SettingItem>
          <SettingListUI.SettingItem>
            <SettingListUI.SettingButton onClick={handleIncomeButton}>
              수입 카테고리 관리
            </SettingListUI.SettingButton>
          </SettingListUI.SettingItem>
          <SettingListUI.SettingItem>
            <SettingListUI.SettingButton onClick={handleExpenseButton}>
              지출 카테고리 관리
            </SettingListUI.SettingButton>
          </SettingListUI.SettingItem>
          <SettingListUI.SettingItem>
            <SettingListUI.SettingButton onClick={handleBudgetButton}>
              예산 관리
            </SettingListUI.SettingButton>
          </SettingListUI.SettingItem>
          <SettingListUI.SettingItem>
            <SettingListUI.SettingButton onClick={handleRepeatButton}>
              반복 관리
            </SettingListUI.SettingButton>
          </SettingListUI.SettingItem>
          <SettingListUI.SettingItem>
            <SettingListUI.SettingButton onClick={handleResetPasswordButton}>
              비밀번호 변경
            </SettingListUI.SettingButton>
          </SettingListUI.SettingItem>
        </ul>
        <SettingListUI.SettingLogoutContainer>
          <button onClick={handleLogoutButton}>로그아웃</button>
          <button onClick={() => setIsOpenWithdrawModal(true)}>회원탈퇴</button>
        </SettingListUI.SettingLogoutContainer>
      </SettingListUI.SettingContainer>
      {isOpenWithdrawModal && (
        <SettingListUI.ModalBackgroundContainer>
          <SettingListUI.ModalContainer>
            <div>
              <img src={HighImportance} alt="highImportancePNG" />
            </div>
            <h6>정말 탈퇴하시겠어요?</h6>
            <p>탈퇴 버튼 선택 시, 계정이 삭제되며 복구되지 않습니다.</p>
            <ShortButton
              isSaveButton={false}
              onCancelClick={() => setIsOpenWithdrawModal(false)}
              onDeleteClick={handleWithdrawButton}
            />
          </SettingListUI.ModalContainer>
        </SettingListUI.ModalBackgroundContainer>
      )}
    </>
  );
}

export default SettingMain;
