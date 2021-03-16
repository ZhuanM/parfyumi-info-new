import { Component, Input } from '@angular/core';
import { Fragrance } from '../common/models/fragrance/fragrance';

@Component({
  selector: 'fragrance',
  templateUrl: './fragrance.component.html',
  styleUrls: ['./fragrance.component.scss']
})
export class FragranceComponent {
  @Input() fragInfo: Fragrance;
  constructor() { }

}