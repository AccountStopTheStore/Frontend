import { APIInstance } from "./instance";

const ASSETS = "/assets";
export const assetsAPI = {
  /** COMPLETED: getAssets GET 조회하기 */
  getAssets: () => {
    return APIInstance.get(ASSETS);
  },
  /** COMPLETED: createAssets POST 조회하기 */
  createAssets: (
    amount: number,
    assetName: string,
    assetType: string,
    dueDay: number,
    memo: string,
    statementDay: number
  ) => {
    return APIInstance.post(ASSETS, {
      amount: amount,
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
    assetName: string,
    assetType: string,
    dueDay: number,
    memo: string,
    statementDay: number
  ) => {
    return APIInstance.post(ASSETS + `/${assetId}`, {
      amount: amount,
      assetName: assetName,
      assetType: assetType,
      dueDay: dueDay,
      memo: memo,
      statementDay: statementDay,
    });
  },
  /** COMPLETED: deleteAssets DELETE 조회하기 */
  deleteAssets: (assetId: number) => {
    return APIInstance.delete(ASSETS + `/${assetId}`);
  },
};
