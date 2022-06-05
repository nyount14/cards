import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: "boot",
      imageUrl: "assets/boot.jpg",
      username: "bootboy",
      content: "business boot needs to know where your TPS reports are."
    },
    {
      title: "zena",
      imageUrl: "assets/boot.jpg",
      username: "reandeandean",
      content: "dina dina dina."
    },
    {
      title: "bean",
      imageUrl: "assets/boot.jpg",
      username: "queen bean",
      content: "she's a beaniac, beaniac, on the floor."
    }
  ]
}
