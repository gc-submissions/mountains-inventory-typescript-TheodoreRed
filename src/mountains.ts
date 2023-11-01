import Mountain from "./models/Mountain";

export const mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 },
];

export const findNameOfTallestMountain = (
  mountainsArray: Mountain[]
): string => {
  if (mountainsArray.length === 0) return "";
  const tallMountainObj = mountainsArray.reduce((prev, curr) => {
    return curr.height > prev.height ? curr : prev;
  });
  return tallMountainObj.name;
};
