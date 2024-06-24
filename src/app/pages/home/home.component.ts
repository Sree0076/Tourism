import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { TopimageComponent } from "../../components/topimage/topimage.component";
import { CarouselComponent } from "../../components/carousel/carousel.component";

interface District {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [CardComponent, TopimageComponent, CarouselComponent]
})
export class HomeComponent {

  topdestination: District[] = [
  { id: 1, title: 'Munnar', description: '', imageUrl: 'https://www.alleppeyhouseboatclub.com/wp-content/uploads/2017/08/munnar_Image-by-Joseph-Saxan-Pulikkottil-Rappai-from-Pixabay-819x546.jpg' },
  { id: 2, title: 'Alleppey', description: '', imageUrl: 'https://miro.medium.com/v2/resize:fit:1400/1*O40cCSsckUi6YfxBFU2pXg.png' },
  { id: 3, title: 'Kovalam', description: '', imageUrl: 'https://img.onmanorama.com/content/dam/mm/en/travel/kerala/images/2023/6/24/kovalam.jpg' },
  { id: 4, title: 'athirapally waterfalls', description: '', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsbH_e-x2OEPki31qHL84dHQmlb3ahniTsSg&s' },
  { id: 5, title: 'periyar tiger reserve', description: '', imageUrl: 'https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/v1660754363/Sundarbans/Sundarbans.jpg' },
  { id: 6, title: 'nelliyampathy', description: '', imageUrl: 'https://img.onmanorama.com/content/dam/mm/en/travel/getting-about-kerala/palakkad/images/2018/6/2/anamada7.jpg.transform/576x300/image.jpg' },
  { id: 7, title: 'periyar tiger reserve', description: '', imageUrl: 'https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/v1660754363/Sundarbans/Sundarbans.jpg' },

  ]
}
