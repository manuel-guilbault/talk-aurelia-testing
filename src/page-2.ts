export class Page2 {
  
  public values: string[] = [];
  public newValue = '';

  addValue() {
    const newValue = this.newValue.trim();
    if (newValue !== '') {
      this.values.push(this.newValue);
      this.newValue = '';
    }
  }

  removeValue(index: number) {
    this.values.splice(index, 1);
  }
}
