import type { PluginConfig } from './common/types';

export class PatternHero {
  private config: PluginConfig;

  constructor() {
    this.config = {
      rows: 10,
      columns: 10,
      padding: 5,
      repeat: true,
      shuffle: false,
      group: true,
    };

    this.setupEventListeners();
  }

  private setupEventListeners() {
    const createButton = document.getElementById(
      'btn-create',
    ) as HTMLButtonElement;
    createButton.addEventListener('click', () => this.createPattern());
  }

  private createPattern() {
    parent.postMessage(
      {
        type: 'create-pattern',
        content: {
          config: this.config,
          name: 'New Pattern',
        },
      },
      '*',
    );
  }
}
