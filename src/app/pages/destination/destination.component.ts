import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
interface District {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}
@Component({
    selector: 'app-destination',
    standalone: true,
    templateUrl: './destination.component.html',
    styleUrl: './destination.component.scss',
    imports: [CardComponent]
})
export class DestinationComponent {


  districts: District[] = [
    { id: 1, title: 'Thiruvananthapuram', description: 'Thiruvananthapuram is the capital city of Kerala.', imageUrl: 'https://www.keralatourism.org/images/district/thumb/thiruvananthapuram20131107171322_12_1.jpg' },
    { id: 2, title: 'Kollam', description: 'Kollam is known for its historic importance and coastal areas.', imageUrl: 'https://www.keralatourism.org/images/district/thumb/kollam20131107120543_6_1.jpg' },
    { id: 3, title: 'Pathanamthitta', description: 'Pathanamthitta is famous for its religious tourism.', imageUrl: 'https://www.keralatourism.org/images/district/thumb/pathanamthitta20131107120608_11_1.jpg' },
    { id: 4, title: 'Alappuzha', description: 'Alappuzha is known for its backwaters and houseboat tourism.', imageUrl: 'https://www.keralatourism.org/images/district/thumb/alappuzha20131108125704_1_1.jpg' },
    { id: 5, title: 'Kottayam', description: 'Kottayam is the land of letters, latex, and lakes.', imageUrl: 'https://www.keralatourism.org/images/district/thumb/kottayam20131107120556_7_1.jpg' },
    { id: 6, title: 'Idukki', description: 'Idukki is known for its hill stations and wildlife sanctuaries.', imageUrl: 'https://www.keralatourism.org/images/district/thumb/idukki20131107120530_3_1.jpg' },
    { id: 7, title: 'Ernakulam', description: 'Ernakulam is the commercial hub of Kerala.', imageUrl: 'https://www.keralatourism.org/images/district/thumb/ernakulam20131107120302_2_1.jpg' },
    { id: 8, title: 'Thrissur', description: 'Thrissur is the cultural capital of Kerala, known for its festivals.', imageUrl: 'https://www.keralatourism.org/images/district/thumb/thrissur20131107171306_13_1.jpg' },
    { id: 9, title: 'Palakkad', description: 'Palakkad is known for its scenic beauty and historical significance.', imageUrl: 'https://www.keralatourism.org/images/district/thumb/palakkad20131108120416_10_1.jpg' },
    { id: 10, title: 'Malappuram', description: 'Malappuram is known for its rich cultural heritage and scenic beauty.', imageUrl: 'https://www.keralatourism.org/images/district/thumb/malappuram20161217111159_9_1.jpg' },
    { id: 11, title: 'Kozhikode', description: 'Kozhikode is known for its historical landmarks and pristine beaches.', imageUrl: 'https://www.keralatourism.org/images/district/thumb/kozhikode20131108120355_8_1.jpg' },
    { id: 12, title: 'Wayanad', description: 'Wayanad is famous for its lush greenery and wildlife.', imageUrl: 'https://www.keralatourism.org/images/district/thumb/wayanad20131108120427_14_1.jpg' },
    { id: 13, title: 'Kannur', description: 'Kannur is known for its rich history, folklore, and handloom industry.', imageUrl: 'https://www.keralatourism.org/images/district/thumb/kannur20131108120246_4_1.jpg' },
    { id: 14, title: 'Kasaragod', description: 'Kasaragod is known for its coir and handloom industries.', imageUrl: 'https://www.keralatourism.org/images/district/thumb/kasaragod20131108120222_5_1.jpg' }
  ]

}
