class Player{
    constructor() {
        this.name = null;
        this.distance = 0;
        this.indexVal = null;
    }
    getCount(){
        var PlayerCountRef = database.ref("playerCount");
        PlayerCountRef.on("value", function(data){
            PlayerCount = data.val();
        })
    }
    UpdateCount(NumCount) {
        database.ref("/").update({
            playerCount:NumCount
        })
    }
    UpdateND(){
        var PlayerIndex = "players/player" + this.indexVal;
        database.ref(PlayerIndex).set({
            name: this.name,
            distance: this.distance
        })
    }
    static callPlayerInfo() {
        var playerNames = database.ref("players");
        playerNames.on("value", function(data){
            playerInfo = data.val();
        })
    }


}