import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Fragrance } from '../common/models/fragrance/fragrance';

@Component({
  selector: 'fragrance-modal',
  templateUrl: './fragrance-modal.component.html',
  styleUrls: ['./fragrance-modal.component.scss']
})
export class FragranceModalComponent {
  public fragrance: Fragrance;

  constructor(public bsModalRef: BsModalRef) { }
}
