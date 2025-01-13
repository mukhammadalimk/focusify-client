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

export const LOCAL_STORAGE_KEYS = {
  TIMER_MODE: "timerMode",
  WHITE_NOISE: "whiteNoise",
} as const;

export interface StrictModeItem {
  id: string;
  title: string;
  turnedOn: boolean;
}
