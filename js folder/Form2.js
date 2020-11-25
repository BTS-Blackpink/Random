class Form2 {
    constructor() {
      this.heading1 = createElement('h1');
      this.Lisa = createElement('h3');
      this.Jennie = createElement('h3');
      this.Jisoo = createElement('h3');
      this.Rose = createElement('h3');
      this.LisaImg = createImg('PICS/Lisa.jpg', 'Lisa');
      this.JennieImg = createImg('PICS/Jennie.jpg', 'Jennie');
      this.JisooImg = createImg('PICS/Jisoo.jpg', 'Jisoo');
      this.RoseImg = createImg('PICS/Rose.jpg', 'Rose');
    }
  
    display(){
      this.heading1.html("About the members");
      this.heading1.position(displayWidth/2 - 150, 10);

      this.LisaImg.position(10, 150);
      this.JennieImg.position(10, 300);
      this.JisooImg.position(10, 450);      
      this.RoseImg.position(10, 600);

      this.Lisa.html("Lalisa Manoban (Stage name - Lisa) is the lead dancer and rapper of blackpink. She is 22 years old making her the youngest of the group. She is the from Thailand unlike the rest of the members. She is multi-lingual and can speak Korean, Japanese, Thai, Chinese and even English");
      this.Lisa.position(160, 150);
      this.Jennie.html("Kim Jennie (Stage name - Jennie) is the lead vocalist, rapper and the face of the group. She is 23 years old. She is the only one to have an individual title track called 'Solo' and is exremely famous for it.");
      this.Jennie.position(160, 300);
      this.Jisoo.html("Kim Jisoo (Stage name - Jisoo) is the visual of the group and also the lead vocalist. She is 24 years old. She is the 'Unnie' (older sister) of the group and cosiders the rest of the members her responsibility. She is the only member of Blackpink who can't speak English fluently but she can speak Korean, Japanese and Chinese fluently.");
      this.Jisoo.position(160, 450);
      this.Rose.html("Park Chaeyoung (Stage name - Rosé) is the main vocalist and lead dancer of the group. She is 22 years old just like Lisa but is still older than her. She can play the keyboard and the guitar. She was born and brought up in Australia but is Korean.");
      this.Rose.position(160, 600);
    }
  }