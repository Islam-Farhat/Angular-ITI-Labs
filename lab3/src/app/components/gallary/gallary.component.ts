import { Component } from '@angular/core';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent {
imgSrc="assets/images/1.jpg"
imgList=[
  "assets/images/1.jpg",
  "assets/images/2.jpg",
  "assets/images/3.jpg"
]
count:number=0;
  constructor(){}
  showMore()
  {
    this.count++;
    if(this.count==this.imgList.length)
      this.count=0;
    this.imgSrc=this.imgList[this.count]
  }
}
