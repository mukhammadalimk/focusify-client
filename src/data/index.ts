import {
  NotificationType,
  NotificationItemType,
  StrictModeItem,
  WhiteNoise,
  WhiteNoiseItem,
  Priority,
} from "@/types";

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
    completed: false,
    deleted: false,
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
    completed: false,
    deleted: false,
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
    completed: false,
    deleted: false,
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
    completed: false,
    deleted: false,
  },
];

export const completedTasks = [
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
    completed: true,
    deleted: false,
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
    deleted: false,
    completed: true,
  },
];

export const delegedtasks = [
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
    completed: true,
    deleted: true,
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
    completed: false,
    deleted: true,
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
export const whiteNoises: WhiteNoiseItem[] = [
  { id: "1", label: "None", value: WhiteNoise.None },
  { id: "2", label: "Café Ambiance", value: WhiteNoise.CaféAmbiance },
  { id: "3", label: "Rainforest Sounds", value: WhiteNoise.RainforestSounds },
  { id: "4", label: "Beach Waves", value: WhiteNoise.BeachWaves },
  { id: "5", label: "Forest Birds", value: WhiteNoise.ForestBirds },
  { id: "6", label: "Mountain Stream", value: WhiteNoise.MountainStream },
  { id: "7", label: "City Streets", value: WhiteNoise.CityStreets },
  { id: "8", label: "Ocean Breeze", value: WhiteNoise.OceanBreeze },
  {
    id: "9",
    label: "Fireplace Crackling",
    value: WhiteNoise.FireplaceCrackling,
  },
];

//--------------------------------------
export const sampleNotifications: NotificationItemType[] = [
  {
    id: "10",
    type: NotificationType.EventReminder,
    title: "Webinar Reminder",
    description: "Don't forget the webinar on new platform updates.",
    created_at: new Date("2025-01-14T13:00:00Z"),
    isRead: false,
  },
  {
    id: "9",
    type: NotificationType.NewFeature,
    title: "New Collaboration Tool",
    description: "Explore our new real-time collaboration feature.",
    created_at: new Date("2025-01-13T12:00:00Z"),
    isRead: false,
  },
  {
    id: "8",
    type: NotificationType.PasswordReset,
    title: "Password Changed",
    description: "Your password was successfully changed.",
    created_at: new Date("2025-01-12T10:30:00Z"),
    isRead: true,
  },
  {
    id: "7",
    type: NotificationType.Security,
    title: "Security Alert",
    description: "Unusual login attempt detected.",
    created_at: new Date("2025-01-08T18:45:00Z"),
    isRead: true,
  },
  {
    id: "6",
    type: NotificationType.SystemUpdate,
    title: "Maintenance Scheduled",
    description: "System maintenance scheduled for Jan 15th.",
    created_at: new Date("2025-01-07T08:00:00Z"),
    isRead: false,
  },
  {
    id: "5",
    type: NotificationType.NewFeature,
    title: "Dark Mode",
    description: "Dark mode is now available in settings.",
    created_at: new Date("2025-01-06T20:15:00Z"),
    isRead: true,
  },
  {
    id: "4",
    type: NotificationType.EventReminder,
    title: "Team Meeting",
    description: "Weekly team meeting scheduled for Jan 12th.",
    created_at: new Date("2025-01-05T09:45:00Z"),
    isRead: false,
  },
  {
    id: "3",
    type: NotificationType.PasswordReset,
    title: "Password Reset Request",
    description: "You requested a password reset.",
    created_at: new Date("2025-01-04T11:20:00Z"),
    isRead: true,
  },
  {
    id: "2",
    type: NotificationType.Security,
    title: "Security Update",
    description: "New security patch applied.",
    created_at: new Date("2025-01-03T15:35:00Z"),
    isRead: false,
  },
  {
    id: "1",
    type: NotificationType.SystemUpdate,
    title: "System Upgrade",
    description: "System upgraded to version 3.2.0.",
    created_at: new Date("2025-01-02T17:50:00Z"),
    isRead: true,
  },
];

//--------------------------------------
export const priorities = [
  { id: 1, label: "High Priority", color: "#F54336", value: Priority.High },
  { id: 2, label: "Medium Priority", color: "#FF981F", value: Priority.Medium },
  { id: 3, label: "Low Priority", color: "#4AAF57", value: Priority.Low },
  { id: 4, label: "No Priority", color: "#607D8A", value: Priority.No },
];

export const colors = [
  "#F54336",
  "#EA1E61",
  "#9D28AC",
  "#673AB3",
  "#3F51B2",
  "#1A96F0",
  "#00BCD3",
  "#009689",
  "#4AAF57",
  "#FFEB4F",
  "#FF981F",
  "#FF5726",
  "#7A5548",
  "#607D8A",
  "#FF6347",
  "#6A1B9A",
  "#DC143C",
  "#ADFF2F",
  "#32CD32",
  "#00FA9A",
];
