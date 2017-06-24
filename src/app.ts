export class App {
  
  public executeAsyncTask() {
    return new Promise<void>(resolve => {
      setTimeout(resolve, 2000);
    });
  }
}
