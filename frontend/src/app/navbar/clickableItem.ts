export class ClickableItem {
  private denomination: string;
  private itemUrl: string;

  constructor(denomination: string) {
    this.denomination = denomination;
    this.itemUrl = 'https://www.google.com';
  }

  public getDenominaiton(): String {
    return this.denomination;
  }

  public getLink(): String {
    return this.itemUrl;
  }
}
