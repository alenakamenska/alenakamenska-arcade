// Add your code here
function eating(count: number) {
//----------------------------------------------------------------
//eating
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function() {
    info.changeScoreBy(1)
    music.jumpUp.play()   
    tiles.placeOnRandomTile(myFood, img`
    d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b
    1 d d d d d d b 1 d d d d d d b
    1 d d d d d d b 1 d d d d d d b
    1 d d d d d d b 1 d d d d d d b
    1 d d d d d d b 1 d d d d d d b
    1 d d d d d d b 1 d d d d d d b
    1 d d d d d d d 1 d d d d d d d
    b b b b b b d e b b b b b b d e
    d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b
    1 d d d d d d b 1 d d d d d d b
    1 d d d d d d b 1 d d d d d d b
    1 d d d d d d b 1 d d d d d d b
    1 d d d d d d b 1 d d d d d d b
    1 d d d d d d b 1 d d d d d d b
    1 d d d d d d d 1 d d d d d d d
    b b b b b b d e d b b b b b b e
`) 
    if(info.score() == count){
    myFood.destroy()
    controller.A.onEvent(ControllerButtonEvent.Pressed, function() {
    let shut = sprites.createProjectileFromSprite(img`
     . . . . . . . . . . . . . . . .
     . . . . . . . . . . . . . . . .
     . . . . . . . . . . . . . . . .
     . . . . . . . . . . . . . . . .
     . . . . . 7 . . . . 7 . . . . .
     . . . . . . 7 . . 7 . . . . . .
     . . . . . . . 7 7 . . . . . . .
     . . . . . . . 7 7 . . . . . . .
     . . . . . . 7 . . 7 . . . . . .
     . . . . . 7 . . . . 7 . . . . .
     . . . . . . . . . . . . . . . .
     . . . . . . . . . . . . . . . .
     . . . . . . . . . . . . . . . .
     . . . . . . . . . . . . . . . .
     . . . . . . . . . . . . . . . .
     . . . . . . . . . . . . . . . .
 `, mySprite, 120, 0)
    })
    } 
    }) 

}
//-------------------------------------------------------------------
//shut
function enemyShut(){
while (true) {
let shutEnemy =  sprites.createProjectileFromSprite(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . 2 2 2 . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, myEnemy2, -120, 0)   
shutEnemy.setKind(SpriteKind.shut)
pause(1000)
}
}
