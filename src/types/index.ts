export enum ModeMenu {
  StrictMode = "strictMode",
  TimerMode = "timerMode",
  WhiteNoise = "whiteNoise",
}

export enum TimerMode {
  Countdown = "Countdown",
  Infinity = "Infinity",
}

export enum WhiteNoise {
  None = "None",
  CaféAmbiance = "Café Ambiance",
  RainforestSounds = "Rainforest Sounds",
  BeachWaves = "Beach Waves",
  ForestBirds = "Forest Birds",
  MountainStream = "Mountain Stream",
  CityStreets = "City Streets",
  OceanBreeze = "Ocean Breeze",
  FireplaceCrackling = "Fireplace Crackling",
}

export interface WhiteNoiseItem {
  id: string;
  label: string;
  value: WhiteNoise;
}

export const LOCAL_STORAGE_KEYS = {
  TIMER_MODE: "timerMode",
  WHITE_NOISE: "whiteNoise",
} as const;

export interface StrictModeItem {
  id: string;
  title: string;
  turnedOn: boolean;
}

export enum NotificationType {
  Security = "security",
  SystemUpdate = "system_update",
  PasswordReset = "password_reset",
  NewFeature = "new_feature",
  EventReminder = "event_reminder",
}

export interface NotificationItemType {
  id: string;
  type: NotificationType;
  title: string;
  description: string;
  created_at: Date;
  isRead: boolean;
}
