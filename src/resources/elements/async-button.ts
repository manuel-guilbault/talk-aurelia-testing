import { customElement, bindable } from 'aurelia-framework';

@customElement('async-button')
export class AsyncButton {

  @bindable() type = 'button';
  @bindable() task: () => Promise<any>|void;

  isExecuting = false;

  public async tryRunTask() {
    if (!this.task || this.isExecuting) return;

    this.isExecuting = true;
    await Promise.resolve(this.task());
    this.isExecuting = false;
  }
}
