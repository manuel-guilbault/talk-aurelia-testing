import { StageComponent, ComponentTester } from 'aurelia-testing';
import { bootstrap } from 'aurelia-bootstrapper';

describe('AsyncButton custom element', () => {
  
  let task: Promise<void>;
  let component: ComponentTester;

  beforeEach(async done => {
    task = Promise.resolve();
    component = StageComponent
      .withResources('resources/elements/async-button')
      .inView('<async-button task.call="execute()">Execute</async-button>')
      .boundTo({ execute() { return task; } });
    await component.create(bootstrap);
    done();
  });

  afterEach(() => {
    component.dispose();
  });

  function getButton() {
    return component.element.querySelector('button');
  }

  function clickButton() {
    getButton().click();
    return new Promise(setTimeout);
  }

  function getIcon() {
    return component.element.querySelector('i.fa-play');
  }

  function getSpinner() {
    return component.element.querySelector('i.fa-spinner');
  }

  function isHidden(element: Element|null) {
    return element === null
      || window.getComputedStyle(element).display === 'none'
      || (element.parentElement !== null && isHidden(element.parentElement));
  }


  it('should project content inside button', () => {
    const text = getButton().textContent;
    expect(text.trim()).toEqual('Execute');
  });

  it('should show icon before click', () => {
    expect(isHidden(getIcon())).toEqual(false);
  });

  it('should hide spinner before click', () => {
    expect(isHidden(getSpinner())).toEqual(true);
  });

  it('should hide icon when task is executing', async done => {
    task = new Promise<void>(resolve => {});
    await clickButton();
    expect(isHidden(getIcon())).toEqual(true);
    done();
  });

  it('should show spinner when task is executing', async done => {
    task = new Promise<void>(resolve => {});
    await clickButton();
    expect(isHidden(getSpinner())).toEqual(false);
    done();
  });

  it('should show icon when task is completed', async done => {
    task = Promise.resolve();
    await clickButton();
    expect(isHidden(getIcon())).toEqual(false);
    done();
  });

  it('should hide spinner when task is completed', async done => {
    task = Promise.resolve();
    await clickButton();
    expect(isHidden(getSpinner())).toEqual(true);
    done();
  });
});
