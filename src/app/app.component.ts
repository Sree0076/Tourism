import { Component } from '@angular/core';
import { RouterOutlet,Router} from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { TopimageComponent } from "./components/topimage/topimage.component";
import { AuthComponent } from "./pages/auth/auth.component";
import { NgIf } from '@angular/common';
import { DestinationComponent } from "./pages/destination/destination.component";



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, NavbarComponent, TopimageComponent, AuthComponent, DestinationComponent]
})

export class AppComponent {
  title = 'frontend';
  name="sreejith";
  constructor(private router: Router) {}
  isAuthPage(): boolean {
    console.log("nav")
    return this.router.url === '/auth';
  }

}

