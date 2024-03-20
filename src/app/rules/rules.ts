export type Rule = {
  name: string;
  description: string;
};
// TODO - remove this file
export const getGrandStrategies = (): Rule[] => {
  return [
    {
      name: "Sever the Head",
      description:
        "When the battle ends, you complete this grand strategy if there are no HEROES from your opponent's starting army on the battlefield.",
    },
    {
      name: "Vendetta",
      description:
        "When the battle ends, you complete this grand strategy if the model chosen to be your opponent's general has been slain and the model chosen to be your general has not been slain.",
    },
    {
      name: "Hold the Line",
      description:
        "When the battle ends, you complete this grand strategy if there are any Battleline units from your starting army on the battlefield.",
    },
  ];
};
