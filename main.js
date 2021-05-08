var names = ["Nitin","Pooja","Savita"];
names.sort()
var Images = ["<img id='image_family' src='https://www.oneplusul.in/assets/front/images/nitin-profile.png'>",
              "<img id='image_family' src='https://www.oneplusul.in/assets/front/images/dr-pooja.jpg'",
              "<img id='image_family' src='https://images1-fabric.practo.com/54199224d5c0a1e8be387f2f88c2d5b530aba61573c45.jpg'"];
              Images.sort()
              function Add_name()
              {
                  for(i=0;i<3;i++)
                  {
                    document.getElementById("div1").innerHTMl=Images[i];
                    document.getElementById("h1i").innerHTMl=names[i];
                  }
              };