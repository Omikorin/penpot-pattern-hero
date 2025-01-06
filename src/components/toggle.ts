import type { AlpineComponent } from 'alpinejs';

export const toggle: AlpineComponent<any> = () => ({
  store: '' as string | undefined,
  storeKey: '' as string | undefined,
  checked: false,

  init() {
    // @ts-expect-error broken types
    if (this.$el.dataset.storeKey) {
      // @ts-expect-error broken types
      const [store, key] = this.$el.dataset.storeKey.split('.');
      // for use by input events
      this.store = store;
      this.storeKey = key;
      // @ts-expect-error broken types
      this.checked = this.$store[store][key];
    }
  },

  updateChecked(event: Event) {
    const input = event.target as HTMLInputElement;
    this.checked = input.checked;

    // @ts-expect-error broken types
    if (this.store) this.$store[this.store][this.storeKey] = this.checked;
  },
});
