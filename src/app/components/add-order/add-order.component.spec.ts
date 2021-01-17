import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';

import { AddOrderComponent } from './add-order.component';

describe('AddOrderComponent', () => {
  let component: AddOrderComponent;
  let fixture: ComponentFixture<AddOrderComponent>;
  let routerStub: Partial<Router>;

  routerStub = {};
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrderComponent ],
      imports: [ FormsModule, ReactiveFormsModule ],
      providers: [ { provide: Router, useValue: routerStub } ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('selectSandwich', () => {
    it('should select the sandwich', () => {
      let sandwich = new Product({name: 'BLT'});

      component.selectSandwich(sandwich);

      expect(sandwich.selected).toBeTrue();
    });

    it('should add the sandwich to the list of sandwiches', () => {
      let sandwich = new Product({name: 'BLT'});

      component.selectSandwich(sandwich);

      expect(component.selectedSandwiches.length).toEqual(1);
    });

    it('should remove the sandwich from the list of sandwiches and deselect', () => {
      let sandwich = new Product({name: 'BLT'});

      component.selectSandwich(sandwich);

      expect(component.selectedSandwiches.length).toEqual(1);
      expect(sandwich.selected).toBeTrue();

      component.selectSandwich(sandwich);

      expect(component.selectedSandwiches.length).toEqual(0);
      expect(sandwich.selected).toBeFalse();
    });
  });
});
