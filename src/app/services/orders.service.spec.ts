import { TestBed } from '@angular/core/testing';

import { OrdersService } from './orders.service';

describe('OrdersService', () => {
  let service: OrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('takeBreak', () => {  
    it('should add a task to the task list', () => {
      const taskLength = service.tasks.length;
      const newTaskLength = taskLength + 1;
  
      service.takeBreak();

      expect(service.tasks.length).toEqual(newTaskLength);
    });

    it('should set the correct status', () => {
      service.takeBreak();

      const taskIndex = service.tasks.length - 1;

      expect(service.tasks[taskIndex].status).toEqual('break');
    });
  });
});
