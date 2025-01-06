// @ts-nocheck
import type { AlpineComponent } from 'alpinejs';

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const numberInput: AlpineComponent<any> = () => ({
  store: '' as string | undefined,
  storeKey: '' as string | undefined,
  value: 0,

  init() {
    if (this.$el.dataset.storeKey) {
      const [store, key] = this.$el.dataset.storeKey.split('.');
      // for use by input events
      this.store = store;
      this.storeKey = key;
      this.value = this.$store[store][key];
    }
  },

  updateValue(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = Number.parseInt(input.value);

    if (Number.isNaN(newValue)) return;
    this.value = newValue;

    if (this.store) this.$store[this.store][this.storeKey] = newValue;
  },
});
