import { Day } from ".";

export default {
  title: "Components/Day",
  component: Day,
  argTypes: {
    stateProp: {
      options: ["range-end", "default", "range-in-between", "selected", "range-start", "hover", "disabled"],
      control: { type: "select" },
    },
    type: {
      options: ["weekday", "day"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    weekday: "Su",
    date: "0",
    stateProp: "range-end",
    type: "weekday",
    className: {},
    dateClassName: {},
  },
};
