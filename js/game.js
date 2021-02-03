class Game{
    constructor(){
    
        }

    getState(){
        //read Gamestate from database
        database.ref('gameState').on("value",function(data){
            gameState = data.val();
        })

    }

    updateState(state){
 //update gamestate
        database.ref('/').update({
           gameState : state
        })
    }

    start(){
        if(gameState === 0){
            player = new Player;
            player.getCount();
            form = new Form();
            form.display();
        }
    }
      
    }