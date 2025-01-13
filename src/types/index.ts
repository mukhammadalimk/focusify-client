export enum TimerMode {
  Countdown = "Countdown",
  Infinity = "Infinity",
}

export const LOCAL_STORAGE_KEYS = {
  TIMER_MODE: "timerMode",
} as const;

export interface StrictModeItem {
  id: string;
  title: string;
  turnedOn: boolean;
}
