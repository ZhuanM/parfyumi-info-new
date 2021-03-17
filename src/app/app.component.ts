import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'parfyumi-info-new';

  public onActivate(event) {
    // FOR NO SMOOTH SCROLLING EFFECT
    // window.scroll(0,0);

    // FOR SMOOTH SCROLLING EFFECT
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20);
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 1);
  }
}
