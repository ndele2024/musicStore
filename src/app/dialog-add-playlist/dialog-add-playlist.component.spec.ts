import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddPlaylistComponent } from './dialog-add-playlist.component';

describe('DialogAddPlaylistComponent', () => {
  let component: DialogAddPlaylistComponent;
  let fixture: ComponentFixture<DialogAddPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogAddPlaylistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
