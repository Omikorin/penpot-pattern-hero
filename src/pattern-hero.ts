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
    const rowsInput = document.getElementById('rows') as HTMLInputElement;
    rowsInput.addEventListener('input', (event) => {
      const value = (event.target as HTMLInputElement).value;
      if (!value) return;
      this.config.rows = parseInt(value);
    });

    const columnsInput = document.getElementById('columns') as HTMLInputElement;
    columnsInput.addEventListener('input', (event) => {
      const value = (event.target as HTMLInputElement).value;
      if (!value) return;
      this.config.columns = parseInt(value);
    });

    const paddingInput = document.getElementById('padding') as HTMLInputElement;
    paddingInput.addEventListener('input', (event) => {
      const value = (event.target as HTMLInputElement).value;
      if (!value) return;
      this.config.padding = parseInt(value);
    });

    const repeatInput = document.getElementById('repeat') as HTMLInputElement;
    repeatInput.addEventListener('change', (event) => {
      this.config.repeat = (event.target as HTMLInputElement).checked;
    });

    const shuffleInput = document.getElementById('shuffle') as HTMLInputElement;
    shuffleInput.addEventListener('change', (event) => {
      this.config.shuffle = (event.target as HTMLInputElement).checked;
    });

    const groupInput = document.getElementById('group') as HTMLInputElement;
    groupInput.addEventListener('change', (event) => {
      this.config.group = (event.target as HTMLInputElement).checked;
    });

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
