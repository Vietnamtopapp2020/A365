import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VideoReferencePage } from './video-reference.page';

describe('VideoReferencePage', () => {
  let component: VideoReferencePage;
  let fixture: ComponentFixture<VideoReferencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoReferencePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VideoReferencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
