import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdatestatuschildrentPage } from './updatestatuschildrent.page';

describe('UpdatestatuschildrentPage', () => {
  let component: UpdatestatuschildrentPage;
  let fixture: ComponentFixture<UpdatestatuschildrentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatestatuschildrentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdatestatuschildrentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
