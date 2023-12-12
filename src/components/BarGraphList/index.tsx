import { challengeGroupAPI } from "@/src/core/api/challengeGroup";
import BarGraphItem from "../BarGraphItem";
import { BarGraphListUI } from "./style";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { getChallengeGroupsAtom } from "@/src/hooks/recoil/useGetChallengeGroups";

function BarGraphList() {
  const [challengeGroups, setChallengeGroups] = useRecoilState(
    getChallengeGroupsAtom
  );

  useEffect(() => {
    const getChallengeGroups = async () => {
      try {
        const response = await challengeGroupAPI.getGroups();
        setChallengeGroups(response.data);
      } catch (error) {
        console.log("error: ", error);
      }
    };
    getChallengeGroups();
  }, []);

  return (
    <>
      <BarGraphListUI.List>
        {challengeGroups &&
          challengeGroups.map((item, id) => {
            return (
              <BarGraphItem
                key={id}
                item={item}
                path={`/challenge/${item.id}`}
              />
            );
          })}
      </BarGraphListUI.List>
    </>
  );
}

export default BarGraphList;
