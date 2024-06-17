import { Component } from '@angular/core';
import { HeaderComponent } from '../../component/header/header.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { SlidesImageComponent } from '../../component/slides-image/slides-image.component';
import { ReviewsComponent } from "../../component/reviews/reviews.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeaderComponent, FooterComponent, SlidesImageComponent, ReviewsComponent]
})
export class HomeComponent {

}
