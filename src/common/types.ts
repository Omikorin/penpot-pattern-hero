export type PluginConfig = {
  rows: number;
  columns: number;
  padding: number;
  repeat: boolean;
  shuffle: boolean;
  group: boolean;
};

export interface PluginCreatePatternEvent {
  type: 'create-pattern';
  content: {
    config: PluginConfig;
    name: string;
  };
}

export type PluginEvent = PluginCreatePatternEvent;
