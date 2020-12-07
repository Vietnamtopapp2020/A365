import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoashboadparentPage } from './doashboadparent.page';

describe('DoashboadparentPage', () => {
  let component: DoashboadparentPage;
  let fixture: ComponentFixture<DoashboadparentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoashboadparentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoashboadparentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
