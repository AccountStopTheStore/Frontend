import { APIInstance } from "./instance";
import { GetAssets } from "@/src/@types/models/getAsset";
import { CreateAsset } from "@/src/@types/models/createAsset";
import { UpdateAsset } from "@/src/@types/models/updateAsset";

const ASSETS = "/assets";
export const assetsAPI = {
  /** COMPLETED: getAssets GET 조회하기 */
  getAssets: () => {
    return APIInstance.get<GetAssets>(ASSETS);
  },

  /** COMPLETED: createAssets POST 조회하기 */
  createAssets: (createAssetObject: {
    amount: number;
    assetGroup: string;
    assetType: string;
    assetName: string;
    dueDay: number | null;
    memo: string;
    statementDay: number | null;
  }) => {
    return APIInstance.post<CreateAsset>(ASSETS, {
      amount: createAssetObject.amount,
      assetGroup: createAssetObject.assetGroup,
      assetName: createAssetObject.assetName,
      assetType: createAssetObject.assetType,
      dueDay: createAssetObject.dueDay,
      memo: createAssetObject.memo,
      statementDay: createAssetObject.statementDay,
    });
  },

  /** COMPLETED: updateAssets PUT 조회하기 */
  updateAssets: (updateAssetsObject: {
    assetId: number;
    amount: number;
    assetGroup: string;
    assetType: string;
    assetName: string;
    dueDay: number;
    memo: string;
    statementDay: number;
    createdAt: string;
    updatedAt: string;
  }) => {
    return APIInstance.put<UpdateAsset>(
      ASSETS + `/${updateAssetsObject.assetId}`,
      {
        amount: updateAssetsObject.amount,
        assetGroup: updateAssetsObject.assetGroup,
        assetType: updateAssetsObject.assetType,
        assetName: updateAssetsObject.assetName,
        dueDay: updateAssetsObject.dueDay,
        memo: updateAssetsObject.memo,
        statementDay: updateAssetsObject.statementDay,
        createdAt: updateAssetsObject.createdAt,
        updatedAt: updateAssetsObject.updatedAt,
      }
    );
  },

  /** COMPLETED: deleteAssets DELETE 조회하기 */
  deleteAssets: (assetId: number) => {
    return APIInstance.delete(ASSETS + `/${assetId}`);
  },
};
