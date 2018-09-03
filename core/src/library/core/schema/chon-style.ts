export abstract class AbstractChonStyle {
  abstract getForeground(): string;
  abstract getBackground(): string;

  getReversedForeground(): string {
    return this.getBackground();
  }

  getReversedBackground(): string {
    return this.getForeground();
  }
}
