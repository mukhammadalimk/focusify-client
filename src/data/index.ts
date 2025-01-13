import { StrictModeItem } from "@/types";

export const tasks = [
  {
    id: "1",
    taskTitle: "Design User Experience (UX)",
    projectName: "Pomodoro App",
    numberOfPomodoros: 8,
    tags: [
      {
        name: "Research",
        color: "#8BC255",
      },
      {
        name: "Productive",
        color: "#8BC255",
      },
      {
        name: "Work",
        color: "#9D28AC",
      },
    ],
  },
  {
    id: "2",
    taskTitle: "Design User Interface (UI)",
    projectName: "Pomodoro App",
    numberOfPomodoros: 3,
    tags: [
      {
        name: "Research",
        color: "#1A96F0",
      },
      {
        name: "Productive",
        color: "#1A96F0",
      },
      {
        name: "Work",
        color: "#1A96F0",
      },
    ],
  },
  {
    id: "3",
    taskTitle: "Design Focusify App",
    projectName: "Focusify App",
    numberOfPomodoros: 9,
    tags: [
      {
        name: "Research",
        color: "#7A5548",
      },
      {
        name: "Productive",
        color: "#1A96F0",
      },
      {
        name: "Work",
        color: "#9D28AC",
      },
    ],
  },
  {
    id: "4",
    taskTitle: "Create a Design Wireframe",
    projectName: "Pomodoro App",
    numberOfPomodoros: 10,
    tags: [
      {
        name: "Research",
        color: "#1A96F0",
      },
      {
        name: "Productive",
        color: "#7A5548",
      },
      {
        name: "Work",
        color: "#9D28AC",
      },
    ],
  },
];

//--------------------------------------
export const strictModes: StrictModeItem[] = [
  { id: "1", title: "Block All Notifications", turnedOn: false },
  { id: "2", title: "Block Phone Calls", turnedOn: true },
  { id: "3", title: "Block Other Apps", turnedOn: false },
  { id: "4", title: "Lock Phone", turnedOn: false },
  { id: "5", title: "Prohibit to Exit", turnedOn: false },
];

//--------------------------------------
