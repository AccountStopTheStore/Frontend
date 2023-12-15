import { CreateAssets } from "@/src/@types/models/createAssets";
import { GetAssets } from "@/src/@types/models/getAssets";
import { APIInstance } from "./instance";
import { UpdateAssets } from "@/src/@types/models/updateAssets";

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
    dueDay: number,
    memo: string,
    statementDay: number
  ) => {
    return APIInstance.post<CreateAssets>(ASSETS, {
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
    dueDay: number,
    memo: string,
    statementDay: number,
    updatedAt: string
  ) => {
    return APIInstance.post<UpdateAssets>(ASSETS + `/${assetId}`, {
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
