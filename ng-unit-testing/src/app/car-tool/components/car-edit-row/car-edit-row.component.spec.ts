import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { Car } from '../../models/cars';
import { getNativeElement, setFormControl } from '../../utils/test-tools';

import { CarEditRowComponent } from './car-edit-row.component';

describe('CarEditRowComponent', () => {
  let component: CarEditRowComponent;
  let fixture: ComponentFixture<CarEditRowComponent>;

  const car: Car = {
    id: 1,
    make: 'Ford',
    model: 'Focus',
    year: 1998,
    color: 'magenta',
    price: 2000,
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CarEditRowComponent ],
      imports: [ ReactiveFormsModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarEditRowComponent);

    component = fixture.componentInstance;
    component.car = car;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit car when save button clicked', () => {

    const spy = jasmine.createSpy();
    const saveCarButton = getNativeElement<HTMLButtonElement>(
      fixture, 'button:nth-child(1)');

    component.saveCar.subscribe(spy);

    setFormControl(fixture, 'edit-make-input', 'Chevrolet');

    saveCarButton.dispatchEvent(new Event('click'));

    expect(spy).toHaveBeenCalledWith({
      ...car,
      make: 'Chevrolet',
    });
  });

  it('should emit not car when save button clicked', () => {

    const spy = jasmine.createSpy();
    const saveCarButton = getNativeElement<HTMLButtonElement>(
      fixture, 'button:nth-child(1)');

    component.saveCar.subscribe(spy);

    setFormControl(fixture, 'edit-make-input', '');

    saveCarButton.dispatchEvent(new Event('click'));

    // real unit test
    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('should emit nothing when cancel button clicked', () => {

    const spy = jasmine.createSpy();

    component.cancelCar.subscribe(spy);

    const cancelCarButton = getNativeElement<HTMLButtonElement>(
      fixture, 'button:nth-child(2)');

    cancelCarButton.dispatchEvent(new Event('click'));
    expect(spy).toHaveBeenCalledWith(undefined);
  });
});
