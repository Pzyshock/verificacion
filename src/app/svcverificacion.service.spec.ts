/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { SvcverificacionService } from './svcverificacion.service';

describe('Service: Svcverificacion', () => {
  beforeEach(() => {
    addProviders([SvcverificacionService]);
  });

  it('should ...',
    inject([SvcverificacionService],
      (service: SvcverificacionService) => {
        expect(service).toBeTruthy();
      }));
});
