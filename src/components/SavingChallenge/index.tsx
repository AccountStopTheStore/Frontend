import { challengeGroupAPI } from "@/src/core/api/challengeGroup";
import CenterInput from "../Common/CenterInput";
import LongButton from "../Common/LongButton";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { createCenterInputValueAtom } from "@/src/hooks/recoil/useCreateCenterInputValue";

function SavingChallenge() {
  const param = useParams();
  const navigate = useNavigate();

  const [centerInputValue] = useRecoilState(createCenterInputValueAtom);

  const handleSavingButton = async () => {
    const newInputValue = centerInputValue.split(",").join("");
    const saveMoneySaving = {
      groupId: Number(param.slug),
      savingAmount: Number(newInputValue),
    };

    try {
      const response = await challengeGroupAPI.saveMoney(saveMoneySaving);

      if (response.status === 200) {
        navigate(`/challenge/${param.slug}`);
      }
    } catch (error) {
      console.error("saving Error: ", error);
    }
  };

  return (
    <>
      <CenterInput type={"text"} unit={"원"} />
      <LongButton
        type={"button"}
        buttonName={"저장"}
        onClick={handleSavingButton}
      />
    </>
  );
}

export default SavingChallenge;
