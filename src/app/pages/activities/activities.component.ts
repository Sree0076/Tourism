import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
interface District {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}
@Component({
    selector: 'app-activities',
    standalone: true,
    templateUrl: './activities.component.html',
    styleUrl: './activities.component.scss',
    imports: [CardComponent]
})
export class ActivitiesComponent {
  activities: District[] = [
    { id: 1, title: 'Paragliding', description: '', imageUrl: 'https://assets.isu.pub/document-structure/230310131032-13f7458a02cd57df580c23cc89a4682c/v1/6d94b464b6fdd75ba98bb1bf0678e4a7.jpeg' },
    { id: 2, title: 'Bamboo Rafting', description: '', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-RtnbPl8qxrkLqwb1o0enHg72_XvcqJJG_UYYftfEHV3rC3oZpGAosOFMvRq1lmAGzko&usqp=CAU' },
    { id: 3, title: 'Trekking', description: '', imageUrl: 'https://dreamkeralapackages.files.wordpress.com/2016/08/trekking-kerala-packages.jpg?w=920' },
    { id: 4, title: 'Kayakking', description: '', imageUrl: 'https://assets-global.website-files.com/5ca5fe687e34be0992df1fbe/61d47df98fa19c206d5942e3_kayak-2021-08-29-08-36-25-utc-min.jpg' },
    { id: 5, title: 'Tree House Stay', description: '', imageUrl: 'https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2016/04/thetreehouseresort.jpg' },
    { id: 6, title: 'Para Sailing', description: '', imageUrl: 'https://www.goparasailing.com/wp-content/uploads/2018/02/What-to-Expect-From-Your-Parasailing-Experience4.jpg' },
    { id: 7, title: 'Jeep Safari', description: '', imageUrl: 'https://www.keralatourism.org/images/enchanting_kerala/large/jeep_safari_wayanad_wildlife_sanctuary20191112080144_963_1.jpg' },
    { id: 4, title: 'Catamaran Sailing', description: '', imageUrl: 'https://www.tripsavvy.com/thmb/UoylMLyzOBPdDp34ForEiJd9m3s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-522478216-5ab12c4e3de4230036949cee.jpg' },
    { id: 5, title: 'Tree House Stay', description: '', imageUrl: 'https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2016/04/thetreehouseresort.jpg' },
    { id: 6, title: 'Para Sailing', description: '', imageUrl: 'https://www.goparasailing.com/wp-content/uploads/2018/02/What-to-Expect-From-Your-Parasailing-Experience4.jpg' },
   


    ]
}
