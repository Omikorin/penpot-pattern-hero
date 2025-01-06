import type { AlpineComponent } from 'alpinejs';

export const numberInput: AlpineComponent<any> = () => ({
  store: '' as string | undefined,
  storeKey: '' as string | undefined,
  value: 0,

  init() {
    // @ts-expect-error broken types
    if (this.$el.dataset.storeKey) {
      // @ts-expect-error broken types
      const [store, key] = this.$el.dataset.storeKey.split('.');
      // for use by input events
      this.store = store;
      this.storeKey = key;
      // @ts-expect-error broken types
      this.value = this.$store[store][key];
    }
  },

  updateValue(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = parseInt(input.value);

    if (isNaN(newValue)) return;
    this.value = newValue;

    // @ts-expect-error broken types
    if (this.store) this.$store[this.store][this.storeKey] = newValue;
  },
});
