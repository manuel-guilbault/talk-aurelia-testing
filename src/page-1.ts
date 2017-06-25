export class Page1 {

  public executeAsyncTask() {
    return new Promise<void>(resolve => {
      setTimeout(resolve, 2000);
    });
  }
}
