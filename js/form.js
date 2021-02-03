class Form{
constructor(){

    }
 display(){
     var title=createElement("h1");
     title.html("Car Racing Game");
     title.position(130,0)
     var input=createInput("NAME")
     input.position(130,160)
     var button=createButton("play")
     button.position(260,200)

     button.mousePressed(function(){
         input.hide();
         button.hide();

         var name = input.value();
         playerCount+=1
         player.update(name);
         player.updateCount(playerCount);
         
         var greeting =createElement("h2");
         greeting.html("hello" +  name);
         greeting.position(120,160);
     })
 }
    
}