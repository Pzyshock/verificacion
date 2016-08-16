/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { TestPipe } from './test.pipe';

describe('Pipe: Test', () => {
  it('create an instance', () => {
    let pipe = new TestPipe();
    expect(pipe).toBeTruthy();
  });
});
