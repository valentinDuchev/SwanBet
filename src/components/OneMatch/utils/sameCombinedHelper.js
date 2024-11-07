export const sameCombinedHelper = (betsIds) => {
    return (
        (betsIds.correctScore < 2 &&
            betsIds.endresult < 2 &&
            betsIds.goals < 2 &&
            betsIds.btts < 2 &&
            betsIds.correctScore < 2 &&
            betsIds.doubleChance < 2 &&
            betsIds.htFt < 2 &&
            betsIds.firstScore < 2 &&
            betsIds.corners < 2 &&
            betsIds.bttsOver < 2)
    );
  };
  