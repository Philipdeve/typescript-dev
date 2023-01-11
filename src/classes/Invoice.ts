
// classes with modifiers and using constructor to define properties for the class
export class Invoice {
  // readonly client: string;
  // private details: string;
  // public amount: number;
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}
  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}