// helpers/shouldBlockPlaceBet.js

export const cannotCombineHelper = (betsIds) => {
    return (
      (betsIds.goals > 0 && betsIds.btts > 0) ||
      (betsIds.goals > 0 && betsIds.firstScore > 0) ||
      (betsIds.goals > 0 && betsIds.correctScore > 0) ||
      (betsIds.correctScore > 0 && betsIds.endresult > 0) ||
      (betsIds.correctScore > 0 && betsIds.btts > 0) ||
      (betsIds.correctScore > 0 && betsIds.doubleChance > 0) ||
      (betsIds.correctScore > 0 && betsIds.firstScore > 0) ||
      (betsIds.correctScore > 0 && betsIds.htFt > 0) ||
      (betsIds.correctScore > 0 && betsIds.bttsOver > 0) ||
      (betsIds.endresult > 0 && betsIds.firstScore > 0) ||
      (betsIds.endresult > 0 && betsIds.htFt > 0) ||
      (betsIds.endresult > 0 && betsIds.doubleChance > 0) ||
      (betsIds.goals > 0 && betsIds.bttsOver > 0) ||
      (betsIds.doubleChance > 0 && betsIds.firstScore > 0) ||
      (betsIds.doubleChance > 0 && betsIds.htFt > 0) ||
      (betsIds.btts > 0 && betsIds.firstScore > 0) ||
      (betsIds.btts > 0 && betsIds.htFt > 0)
    );
  };
  