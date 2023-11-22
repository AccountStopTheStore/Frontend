export const ApplicationHeight = 844;

export const HeaderHeight = 77;
export const ChosenYearMonthHeight = 53;
export const FinancialSummaryHeight = 70;
export const CDMSTabItemsHeight = 50;
export const NavigationItemsHeight = 70;
export const ChallengeTopContainerHeight = 92.75;
export const BottomDateModalHeight = 470;

export const AccountHeight =
  ApplicationHeight -
  (HeaderHeight +
    ChosenYearMonthHeight +
    FinancialSummaryHeight +
    CDMSTabItemsHeight +
    NavigationItemsHeight);

export const ChallengeHeight =
  ApplicationHeight - (HeaderHeight + NavigationItemsHeight);
export const ChallengeBottomListHeight =
  ChallengeHeight - ChallengeTopContainerHeight;
