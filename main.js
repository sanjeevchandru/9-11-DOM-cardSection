var cardrow=document.createElement("div");
cardrow.classList.add("card-row");

var titlerow=document.createElement("div");
titlerow.classList.add("title-row");

var card_head=document.createElement("h1");
card_head.innerHTML="OUR HARDWORKING TEAM";
card_head.classList.add("card-head");
titlerow.appendChild(card_head);

var con=document.getElementById("card-con");
con.appendChild(titlerow);
con.appendChild(cardrow);

var arr=[{heading:"Walter White",para:"Chief Executive Officer",image:"images/team-1.jpg"},
    {heading:"Sarah Jhonson",para:"Product Manager",image:"images/team-2.jpg"},
    {heading:"William Anderson",para:"CTO",image:"images/team-3.jpg"},
    {heading:"Amanda Jepson",para:"Accountant",image:"images/team-4.jpg"}];

arr.forEach(function(e){
  var cardcol=document.createElement("div");
  cardcol.classList.add("card-col");
  cardrow.appendChild(cardcol);

  var cardcard=document.createElement("div");
  cardcard.classList.add("card-card");
  cardcol.appendChild(cardcard);      

  var cardimage=document.createElement("div");
  cardimage.classList.add("card-image");
  

  var image=document.createElement("img");
  image.setAttribute("src",e.image)
  
  var head=document.createElement("h1");
  head.innerHTML=e.heading;
  head.classList.add("heading");

  var para=document.createElement("p");
  para.innerHTML=e.para;
  para.classList.add("para");

  cardcard.appendChild(cardimage);
  cardimage.appendChild(image);
  cardcard.appendChild(head);
  cardcard.appendChild(para);
    
})