import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HistorymchartrPage } from './historymchartr.page';

describe('HistorymchartrPage', () => {
  let component: HistorymchartrPage;
  let fixture: ComponentFixture<HistorymchartrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorymchartrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HistorymchartrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
