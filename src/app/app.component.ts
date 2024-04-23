import { Component , ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aPc-web-works';
  @ViewChild('navElement') navElement: ElementRef | undefined; // Template reference variable


  modalVisible = false; // Initial state of the modal
  modalStyles: { [key: string]: string } = { display: 'none' };

  toggleModal() {
    this.modalVisible = !this.modalVisible;
    this.modalStyles = { display: this.modalVisible ? 'block' : 'none' };
  }

  isNavVisible = false; // Initial state of the navigation

  toggleNavVisibility() {
    this.isNavVisible = !this.isNavVisible;

    // Check if the navElement is defined and manipulate its style
    if (this.navElement) {
      const navElementRef = this.navElement.nativeElement as HTMLElement;
      navElementRef.style.display = this.isNavVisible ? 'block' : 'none';
    }
  }
}
