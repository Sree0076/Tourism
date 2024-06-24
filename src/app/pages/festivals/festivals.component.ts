import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";

interface Festival {
  title: string;
  description: string;
  imageUrl: string;
}
@Component({
    selector: 'app-festivals',
    standalone: true,
    templateUrl: './festivals.component.html',
    styleUrl: './festivals.component.scss',
    imports: [CardComponent]
})
export class FestivalsComponent {

festivals:Festival[]= [
    {
      "title": "Onam",
      "description": "Onam is the harvest festival of Kerala, celebrated with great enthusiasm and joy.",
      "imageUrl": "https://t4.ftcdn.net/jpg/06/24/07/53/360_F_624075322_2kOvgsDBzZVkdNE1Zn36CvymDHUeRP0a.jpg"
    },
    {
      "title": "Vishu",
      "description": "Vishu marks the Malayalam New Year and is celebrated with feasts and fireworks.",
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKM2U-0aSk0XrkyQ2Shsa77yR0PudQa5ib_Q&s"
    },
    {
      "title": "Thrissur Pooram",
      "description": "Thrissur Pooram is a spectacular temple festival known for its grand procession of elephants and fireworks.",
      "imageUrl": "https://keralaphotos.in/wp-content/uploads/2015/05/thrissur-kudamattam-pooram-pictures.jpg"
    },
    {
      "title": "Pulikali",
      "description": "Pulikali is a unique folk art celebration where performers paint themselves as tigers and dance through the streets.",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/2016_Pulikali_Tiger_mask_dance_procession%2C_a_woman_artist_at_the_Hindu_Onam_festival_Kerala.jpg/640px-2016_Pulikali_Tiger_mask_dance_procession%2C_a_woman_artist_at_the_Hindu_Onam_festival_Kerala.jpg"
    },
    {
      "title": "Nehru Trophy Boat Race",
      "description": "The Nehru Trophy Boat Race is a popular snake boat race held in the Punnamada Lake in Alappuzha.",
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ8aPW8truPfFgT4xiyrwyfPmeHjmrzo9z6w&s"
    },
    {
      "title": "Theyyam",
      "description": "Theyyam is a ritualistic dance form in Kerala, where performers embody divine or heroic characters.",
      "imageUrl": "https://t4.ftcdn.net/jpg/05/38/16/71/360_F_538167162_oAYUap5RKD8ztTtBdYu1dGFDx2OWheFA.jpg"
    },
    {
      "title": "Aranmula Boat Race",
      "description": "Aranmula Boat Race is a traditional snake boat race held during the Onam festival in the Aranmula village.",
      "imageUrl": "https://img.veenaworld.com/wp-content/uploads/2018/06/kerala-snake-boat-race-feature-image.jpg"
    },
    {
      "title": "Makaravilakku",
      "description": "Makaravilakku is a celestial light display observed at the Sabarimala Temple during Makar Sankranti.",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Makaravilakku_Sabarimala.jpg/800px-Makaravilakku_Sabarimala.jpg"
    },
    {
      "title": "Kodungallur Bharani",
      "description": "Kodungallur Bharani is a temple festival at the Kodungallur Bhagavathy Temple known for its energetic rituals and festivities.",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Kodungallur_Bharani_Festival.jpg/800px-Kodungallur_Bharani_Festival.jpg"
    },
    {
      "title": "Chittur Konganpada",
      "description": "Chittur Konganpada is a traditional martial art form competition held annually in Chittur, Palakkad district.",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Chittur_Konganpada.jpg/800px-Chittur_Konganpada.jpg"
    },
    {
      "title": "Kerala Kalamandalam Annual Day",
      "description": "Kerala Kalamandalam Annual Day celebrates the cultural achievements of Kerala Kalamandalam, a premier institute of performing arts.",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Kerala_Kalamandalam_Annual_Day.jpg/800px-Kerala_Kalamandalam_Annual_Day.jpg"
    },
    {
      "title": "Malabar Mahotsavam",
      "description": "Malabar Mahotsavam is a cultural extravaganza showcasing the rich heritage of Malabar region through music, dance, and art.",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Malabar_Mahotsavam.jpg/800px-Malabar_Mahotsavam.jpg"
    },
    {
      "title": "Edathua Perunnal",
      "description": "Edathua Perunnal is a Christian festival held at the St. George Forane Church in Edathua, known for its grand procession and festivities.",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Edathua_Perunnal_2017.jpg/800px-Edathua_Perunnal_2017.jpg"
    },
    {
      "title": "Arattupuzha Pooram",
      "description": "Arattupuzha Pooram is one of the oldest temple festivals in Kerala, famous for its elephant procession and cultural programs.",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Arattupuzha_Pooram_2018.jpg/800px-Arattupuzha_Pooram_2018.jpg"
    },
    {
      "title": "Neelamperoor Padayani",
      "description": "Neelamperoor Padayani is a ritualistic dance and procession held at the Neelamperoor Palli Bhagavathi Temple.",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Neelamperoor_Padayani_2016.jpg/800px-Neelamperoor_Padayani_2016.jpg"
    }
  ]



}
