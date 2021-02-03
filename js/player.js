class Player{
    constructor(){
    
        }

    getCount(){
        //read playerCount from database
        database.ref('playerCount').on("value",function(data){
            playerCount = data.val();
        })

    }

    updateCount(count){
 //update player count
        database.ref('/').update({
            playerCount : count
        })

    }


    update(name){
    var playerIndex = "player" + playerCount;
    //write in database
    database.ref(playerIndex).set({
    Name : name
    })


}

    
    }
    