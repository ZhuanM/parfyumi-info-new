import { Component, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FragranceModalComponent } from '../fragrance-modal/fragrance-modal.component';
import { Paginator } from 'primeng/paginator';
import { Fragrance } from '../common/models/fragrance/fragrance';
import { DesignerOptions, Fragrances, GenderOptions } from 'src/app/utils/constants';
import { FilterOptions } from '../common/models/filterOptions/filterOptions';

@Component({
  selector: 'frag-list',
  templateUrl: './frag-list.component.html',
  styleUrls: ['./frag-list.component.scss']
})

export class FragListComponent {
  private bsModalRef: BsModalRef;

  @ViewChild('paginator') paginator: Paginator;
  
  public genderOptions: Array<FilterOptions> = GenderOptions.genderOptions;
  // public selectedGender: string;
  private genderFilter: string = '';
  
  public designerOptions: Array<FilterOptions> = DesignerOptions.designerOptions;
  public selectedDesigner: string;
  private designerFilter: string = '';
  
  public allFragrances: Array<Fragrance> = Fragrances.fragrances;
  public filteredFrags: Array<Fragrance>;
  public visibleFrags: Array<Fragrance>;
  
  constructor(private modalService: BsModalService) {

  }
  
  ngOnInit() {
    this.filteredFrags = this.allFragrances.sort((frag1, frag2) => {
      if (frag1.designer < frag2.designer) return -1;
      if (frag1.designer > frag2.designer) return 1;
      
      if (frag1.gender == "male") return -1;
      if (frag2.gender == "male") return 1;

      // IN THIS CASE UNNECESSARY FOR FEMALE CHECK (BUT FOR WHEN THERE'S MORE OPTIONS)
      if (frag1.gender == "female") return -1;
      if (frag2.gender == "female") return 1;
      
      if (frag1.gender == "unisex") return 1;
      if (frag2.gender == "unisex") return -1;
      
      return 0;
    });

    this.paginate({ first: 0, rows: 12 });
  }

  public openModal(frag: Fragrance){
    const initialState = {
      fragrance: frag
    };

    this.bsModalRef = this.modalService.show(FragranceModalComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }


  private filterByAll() {
    this.filteredFrags = this.allFragrances;
    this.filteredFrags = this.filteredFrags.filter(frag => {
      if (frag.gender.startsWith(this.genderFilter) && frag.designer.startsWith(this.designerFilter)) {
        return frag;
      }
    });

    this.paginate({ page: 0, first: 0, rows: 12 });
  }

  public filterGender(gender: FilterOptions) {
    this.genderFilter = gender.value;
    this.filterByAll();
  }

  public filterDesigner(designer: FilterOptions) {
    this.designerFilter = designer.value;
    this.filterByAll();
  }

  public paginate(event) {
    this.visibleFrags = this.filteredFrags.slice(event.first, event.first + event.rows);
    
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 15);
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 1);
  }
}