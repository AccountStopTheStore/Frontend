import { CreateAsset } from "@/src/@types/models/createAsset";
import { GetAssets } from "@/src/@types/models/getAsset";
import { APIInstance } from "./instance";
import { UpdateAsset } from "@/src/@types/models/updateAsset";

const ASSETS = "/assets";
export const assetsAPI = {
  /** COMPLETED: getAssets GET 조회하기 */
  getAssets: () => {
    return APIInstance.get<GetAssets>(ASSETS);
  },

  /** COMPLETED: createAssets POST 조회하기 */
  createAssets: (
    amount: number,
    assetGroup: string,
    assetName: string,
    assetType: string,
    dueDay: number | null,
    memo: string,
    statementDay: number | null
  ) => {
    return APIInstance.post<CreateAsset>(ASSETS, {
      amount: amount,
      assetGroup: assetGroup,
      assetName: assetName,
      assetType: assetType,
      dueDay: dueDay,
      memo: memo,
      statementDay: statementDay,
    });
  },

  /** COMPLETED: updateAssets PUT 조회하기 */
  updateAssets: (
    assetId: number,
    amount: number,
    assetGroup: string,
    assetName: string,
    assetType: string,
    createdAt: string,
    dueDay: number | null,
    memo: string,
    statementDay: number | null,
    updatedAt: string
  ) => {
    return APIInstance.post<UpdateAsset>(ASSETS + `/${assetId}`, {
      amount: amount,
      assetGroup: assetGroup,
      assetName: assetName,
      assetType: assetType,
      createdAt: createdAt,
      dueDay: dueDay,
      memo: memo,
      statementDay: statementDay,
      updatedAt: updatedAt,
    });
  },

  /** COMPLETED: deleteAssets DELETE 조회하기 */
  deleteAssets: (assetId: number) => {
    return APIInstance.delete(ASSETS + `/${assetId}`);
  },
};
