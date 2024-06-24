import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { ActivatedRoute }from'@angular/router';
import { CarouselComponent } from "../../components/carousel/carousel.component";

@Component({
    selector: 'app-eachdestination',
    standalone: true,
    templateUrl: './eachdestination.component.html',
    styleUrl: './eachdestination.component.scss',
    imports: [CardComponent, CarouselComponent]
})
export class EachdestinationComponent {


    constructor(private route:ActivatedRoute)
    {

    }
    ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.fetchData(params['id']);
      });
    }
    fetchData = async (tittle:string) => {
      console.log('Found district:');
      try {
        const response = await fetch('https://api.jsonsilo.com/public/8604d0d7-ea3c-4be8-b574-5e91eb61d09d');
        const data = await response.json();
        this.district = data.districts.find((d: { title: string; }) => d.title === tittle);
        this.fetchDescription(tittle);
        console.log('Found district:', this.district);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchDescription = async (title: string) => {
      console.log('Searching for district:', title);
      try {
        const response = await fetch('https://api.jsonsilo.com/public/6432248c-4057-4fa5-a843-994bc8998e35');
        const data = await response.json();

        // Accessing the long_description dynamically using bracket notation
        if (data.districts[title]) {
          this.district_description = data.districts[title].long_description;
          console.log('Found district:', this.district_description);
        } else {
          console.log(`District '${title}' not found.`);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    district:any
    district_description:String='';

}

