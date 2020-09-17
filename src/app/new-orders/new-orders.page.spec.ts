import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewOrdersPage } from './new-orders.page';

describe('NewOrdersPage', () => {
  let component: NewOrdersPage;
  let fixture: ComponentFixture<NewOrdersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOrdersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewOrdersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
