import { useEffect } from "react";
import { SettingListUI } from "./style";
import { assetsAPI } from "@/src/core/api/assets";
import { useRecoilState } from "recoil";
import { getAssetsManagementAtom } from "@/src/hooks/recoil/useGetAssetsManagement";
import { GetAssets } from "@/src/@types/models/getAssets";

function SettingAssetManagement() {
  useEffect(() => {
    const getAssetData = async () => {
      try {
        const response = await assetsAPI.getAssets();

        if (response.status === 200) {
          setAssets(response.data);
        }
      } catch (error) {
        console.error("getAssetData error: ", error);
      }
    };
    getAssetData();
  }, []);

  const [assets, setAssets] = useRecoilState<GetAssets>(
    getAssetsManagementAtom
  );
  const cashes = assets.filter(v => v.assetGroup === "현금");
  const banks = assets.filter(v => v.assetGroup === "은행");
  const cards = assets.filter(v => v.assetGroup === "카드");

  return (
    <SettingListUI.SettingContainer>
      <SettingListUI.SettingTitle>
        <span>현금</span>
        <span>
          {cashes.reduce((acc, cur) => acc + Number(cur.amount), 0)}원
        </span>
      </SettingListUI.SettingTitle>
      <ul>
        {cashes.map((cash, id) => {
          return (
            <SettingListUI.SettingItem key={id}>
              <SettingListUI.SettingButton>
                <span>{cash.assetName}</span>
                <span>{cash.amount}원</span>
              </SettingListUI.SettingButton>
            </SettingListUI.SettingItem>
          );
        })}
      </ul>
      <SettingListUI.SettingTitle>
        <span>은행</span>
        <span>{banks.reduce((acc, cur) => acc + Number(cur.amount), 0)}원</span>
      </SettingListUI.SettingTitle>
      <ul>
        {banks.map((bank, id) => {
          return (
            <SettingListUI.SettingItem key={id}>
              <SettingListUI.SettingButton>
                <span>{bank.assetName}</span>
                <span>{bank.amount}원</span>
              </SettingListUI.SettingButton>
            </SettingListUI.SettingItem>
          );
        })}
      </ul>
      <SettingListUI.SettingTitle>
        <span>카드</span>
        <span>{cards.reduce((acc, cur) => acc + Number(cur.amount), 0)}원</span>
      </SettingListUI.SettingTitle>
      <ul>
        {cards.map((card, id) => {
          return (
            <SettingListUI.SettingItem key={id}>
              <SettingListUI.SettingButton>
                <span>{card.assetName}</span>
                <span>{card.amount}원</span>
              </SettingListUI.SettingButton>
            </SettingListUI.SettingItem>
          );
        })}
      </ul>
    </SettingListUI.SettingContainer>
  );
}

export default SettingAssetManagement;
