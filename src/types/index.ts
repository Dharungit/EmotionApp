export interface IMoodOption {
  emoji: string;
  description: string;
}

export interface IMoodOptionWithTimestamp {
  mood: IMoodOption;
  timestamp: number;
}
