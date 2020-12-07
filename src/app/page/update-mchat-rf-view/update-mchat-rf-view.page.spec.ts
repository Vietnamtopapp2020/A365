import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateMchatRfViewPage } from './update-mchat-rf-view.page';

describe('UpdateMchatRfViewPage', () => {
  let component: UpdateMchatRfViewPage;
  let fixture: ComponentFixture<UpdateMchatRfViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMchatRfViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateMchatRfViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
