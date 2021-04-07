// ------------------------------------------------------------------
// win
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    mySprite.say(":)", 500)
    mySprite2.say(":)", 500)
    myEnemy.destroy()
    music.powerUp.play()
    pause(150)
    game.over(true)
})
// ---------------------------------------------------------------------
// game over
sprites.onOverlap(SpriteKind.Player, SpriteKind.shut, function (sprite, otherSprite) {
    myEnemy2.say(":)", 300)
    mySprite.destroy()
    music.wawawawaa.play()
    game.over(false)
})
game.splash("Cílem hry je zabít zlého robota a osvobodit malého kaktusáčka, ale pozor na černého střelce, pokud Vás střelí, prohráváte. Zároveň musíte nasbírat všechny Powercuby, abyste mohli zabít robota a dávajte pozor na čas.")
let count2 = 0
game.splash("Jakou úroveň chtete (1-lehká, 2-střední, 3-těžká)")
let count = game.askForNumber("Jakou úroveň chtete?", 1)
tiles.setTilemap(tilemap`level2`)
controller.player1.moveSprite(mySprite, 30, 30)
mySprite.setKind(SpriteKind.Player)
mySprite.setPosition(20, 15)
myEnemy.setPosition(120, 100)
myEnemy2.setPosition(130, 60)
mySprite2.setPosition(130, 85)
info.startCountdown(90)
if (count == 1) {
    eating(5)
}
if (count == 2) {
    eating(8)
}
if (count == 3) {
    eating(10)
} else {
    while (!(count == 3 || count == 2 || count == 1)) {
        count2 = game.askForNumber("Jakou úroveň chtete (1-lehká, 2-střední, 3-těžká)", 1)
        if (count2 < 3) {
            if (count2 == 1) {
                eating(5)
            }
            if (count2 == 2) {
                eating(8)
            }
            if (count2 == 3) {
                eating(10)
            }
            enemyShut()
        }
    }
}
enemyShut()
