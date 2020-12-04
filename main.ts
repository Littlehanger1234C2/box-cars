namespace SpriteKind {
    export const lights = SpriteKind.create()
}
scene.onPathCompletion(SpriteKind.Enemy, function (sprite, location) {
    if (race) {
        if (!(sprites.readDataBoolean(sprite, "ture"))) {
            sprites.setDataBoolean(sprite, "ture", true)
            scene.followPath(sprite, path2, randint(speed_list[0], speed_list[1]))
        } else {
            scene.followPath(sprite, path, randint(speed_list[0], speed_list[1]))
            sprites.setDataBoolean(sprite, "ture", false)
            sprites.changeDataNumberBy(sprite, "laps", 1)
            sprite.say(sprites.readDataNumber(sprite, "laps"))
            if (sprites.readDataNumber(sprite, "laps") == 5) {
                game.over(false)
            }
        }
    }
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(main)) {
        main = true
        for (let value of sprites.allOfKind(SpriteKind.lights)) {
            value.destroy()
        }
        tiles.loadMap(tiles.createMap(tiles.createTilemap(hex`0a0032000202020202020202020202020202020208020202020202020202020202020201020205020702060203040a020902020202020b0c0d02020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0f0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e15101010101010101010140e0e0e0e0e0e0e0e0e131010101010101010120e0e0e0e0e0e0e0e0e1410101010101010101011`, img`
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            `, [myTiles.transparency16,myTiles.tile17,myTiles.tile18,myTiles.tile19,myTiles.tile21,myTiles.tile22,myTiles.tile25,myTiles.tile26,myTiles.tile28,myTiles.tile24,myTiles.tile36,myTiles.tile46,myTiles.tile50,myTiles.tile68,sprites.castle.tileGrass1,sprites.dungeon.chestClosed,sprites.vehicle.roadHorizontal,sprites.vehicle.roadTurn4,sprites.vehicle.roadTurn2,sprites.vehicle.roadTurn3,sprites.vehicle.roadVertical,sprites.vehicle.roadTurn1], TileScale.Sixteen)))
        mySprite3 = sprites.create(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . f . . . . 
            . . . f . . . . 
            . f f f f f . . 
            . . . f . . . . 
            . . . f . . . . 
            . . . . . . . . 
            `, SpriteKind.Player)
        scene.cameraFollowSprite(mySprite3)
        controller.moveSprite(mySprite3)
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        raceing()
        tiles.placeOnRandomTile(mySprite, myTiles.tile17)
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        tiles.placeOnRandomTile(mySprite, myTiles.tile17)
        mySprite.say("Tracks")
        mySprite.y += -16
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        tiles.placeOnRandomTile(mySprite, myTiles.tile22)
        mySprite.y += -16
        mySprite.say("EASSY")
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        tiles.placeOnRandomTile(mySprite, myTiles.tile25)
        mySprite.y += -16
        mySprite.say("HAARD")
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        tiles.placeOnRandomTile(mySprite, myTiles.tile26)
        mySprite.y += -16
        mySprite.say("non")
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        tiles.placeOnRandomTile(mySprite, myTiles.tile28)
        mySprite.y += -16
        speed_list = [50, 70, 10]
        Arrow = tiles.getTileLocation(4, 4)
        mySprite.say("count " + speed_list[2])
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (main) {
        if (!(race)) {
            if (mySprite3.tileKindAt(TileDirection.Center, myTiles.tile19)) {
                the_race = 0
                start(5, 13, 5, 16)
            } else if (mySprite3.tileKindAt(TileDirection.Center, myTiles.tile21)) {
                the_race = 1
                start(5, 13, 5, 16)
            } else if (mySprite3.tileKindAt(TileDirection.Center, myTiles.tile22)) {
                thespeed(100, 130)
            } else if (mySprite3.tileKindAt(TileDirection.Center, myTiles.tile26)) {
                thespeed(140, 180)
            } else if (mySprite3.tileKindAt(TileDirection.Center, myTiles.tile25)) {
                thespeed(180, 190)
            } else if (mySprite3.tileKindAt(TileDirection.Center, myTiles.tile28)) {
                if (speed_list[2] < 20) {
                    speed_list[2] = speed_list[2] + 1
                } else {
                    speed_list[2] = 0
                }
                mySprite.say("count " + speed_list[2])
            } else if (mySprite3.tileKindAt(TileDirection.Center, myTiles.tile36)) {
                the_race = 2
                start(30, 25, 30, 27)
            } else if (mySprite3.tileKindAt(TileDirection.Center, myTiles.tile46)) {
                the_race = 3
                start(54, 53, 54, 56)
            } else if (mySprite3.tileKindAt(TileDirection.Center, myTiles.tile50)) {
                the_race = 4
                start(3, 22, 3, 25)
            } else if (mySprite3.tileKindAt(TileDirection.Center, myTiles.tile68)) {
                the_race = 5
                start(3, 4, 3, 6)
            }
        }
    }
})
function raceing () {
    animation.runImageAnimation(
    mySprite,
    [img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 2 8 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 2 b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b 8 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 2 b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b 8 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 2 8 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b 8 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 2 b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 2 b 8 b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b 2 b b b b b b b b b b b b 7 
        7 b b 8 b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b 2 b b b b b b b b b b b 7 
        7 b b b 8 b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b 2 b b b b b b b b b b 7 
        7 b b b b 8 b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b 2 b b b b b b b b b 7 
        7 b b b b b 8 b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b 2 b b b b b b b b 7 
        7 b b b b b 8 b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b 2 b b b b b b b 7 
        7 b b b b b b 8 b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b 2 b b b b b b 7 
        7 b b b b b b 8 b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b 2 b b b b b 7 
        7 b b b b b b b 8 b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b 8 2 b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b 8 2 b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b 8 2 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b 8 b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 2 b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 2 8 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 2 b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 8 b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b 2 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 8 b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b 2 7 
        7 b b 7 7 b b b b b b b b 8 b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b 2 7 
        7 1 1 7 7 b b b b b b b b 8 b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b 2 b 7 
        7 1 1 7 7 b b b b b b b b 8 b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b 2 b b 7 
        7 1 1 7 7 b b b b b b b b 8 b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b 2 b b b 7 
        7 1 1 7 7 b b b b b b b 8 b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b 2 b b b b 7 
        7 1 1 7 7 b b b b b b 8 b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b 2 b b b b b b 7 
        7 1 1 7 7 b b b b 8 b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b 2 b b b b b b b 7 
        7 1 1 7 7 b b b 8 b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b 2 b b b b b b b b 7 
        7 1 1 7 7 b b 8 b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 2 b b b b b b b b b 7 
        7 1 1 7 7 b 8 b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 2 b b b b b b b b b 7 
        7 b b 7 7 b 8 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 2 b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b 8 b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 2 b b b b b b b b 7 7 
        7 b b 7 7 b 8 b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b 2 b b b b b b b 7 7 
        7 b b 7 7 b 8 b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b 2 b b b b b b 7 7 
        7 b b 7 7 b b 8 b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b 8 2 b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b 8 2 b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b 8 2 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b 8 2 b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b 8 2 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b 2 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 8 b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b 2 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 8 b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b b 8 2 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b 8 2 b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b 8 b b 7 7 
        7 b b b b b b b b b b 2 b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b 8 b b 7 7 
        7 b b b b b b b b b 2 b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b 8 b b b 7 7 
        7 b b b b b b b b 2 b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b 8 b b b b 7 7 
        7 b b b b b b b 2 b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b 8 b b b b b 7 7 
        7 b b b b b b 2 b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b 8 b b b b b b 7 7 
        7 b b b b b 2 b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b 8 b b b b b b b 7 7 
        7 b b b b 2 b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b 8 b b b b b b b b 7 7 
        7 b b b 2 b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b 8 b b b b b b b b b 7 7 
        7 b b 2 b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 8 b b b b b b b b b b 7 7 
        7 b 2 b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b 2 8 b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 2 8 b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 2 b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b 8 b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 2 8 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b 8 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 2 b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 2 8 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 2 8 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 2 8 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 1 1 7 7 b b b b b b b b b b 7 
        7 2 8 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b b b b b b b b b b b b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 7 7 7 7 7 7 7 7 b b 7 
        7 b b 7 7 b b b b b b b b b b 7 
        7 2 8 7 7 b b b b b b b b b b 7 
        7 b b 7 7 b b 7 7 7 7 7 7 7 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 b b b b b b b b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b 7 7 7 7 7 7 7 7 7 b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 b b b b b b b b b b b b b 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `],
    100,
    true
    )
}
function thespeed (num: number, num2: number) {
    speed_list[0] = num
    speed_list[1] = num2
    tiles.setTileAt(Arrow, myTiles.tile18)
    tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite3), CollisionDirection.Bottom), myTiles.tile24)
    Arrow = tiles.locationInDirection(tiles.locationOfSprite(mySprite3), CollisionDirection.Bottom)
}
function start (num: number, num2: number, num3: number, num4: number) {
    for (let value of sprites.allOfKind(SpriteKind.Player)) {
        value.destroy()
    }
    race = true
    tiles.loadMap(list[the_race])
    path = scene.aStar(tiles.getTileLocation(num, num2), tiles.getTileLocation(num3, num4))
    tiles.loadMap(list2[the_race])
    path2 = scene.aStar(tiles.getTileLocation(num3, num4), tiles.getTileLocation(num, num2))
    for (let index = 0; index < speed_list[2]; index++) {
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . 3 3 3 3 3 3 3 3 . . . . 
            . . . 3 d 3 3 3 3 3 3 c 3 . . . 
            . . 3 c d 3 3 3 3 3 3 c c 3 . . 
            . 3 c c d d d d d d 3 c c d 3 d 
            . 3 c 3 a a a a a a a b c d 3 3 
            . 3 3 a b b a b b b a a b d 3 3 
            . 3 a b b b a b b b b a 3 3 3 3 
            . a a 3 3 3 a 3 3 3 3 3 a 3 3 3 
            . a a a a a a f a a a f a 3 d d 
            . a a a a a a f a a f a a a 3 d 
            . a a a a a a f f f a a a a a a 
            . a f f f f a a a a f f f a a a 
            . . f f f f f a a f f f f f a . 
            . . . f f f . . . . f f f f . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(num, num2))
        scene.followPath(mySprite, path, randint(speed_list[0], speed_list[1]))
        sprites.setDataBoolean(mySprite, "ture", false)
        sprites.setDataNumber(mySprite, "laps", 0)
    }
    for (let value of tiles.getTilesByType(myTiles.tile15)) {
        tiles.setTileAt(value, img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 c c c c 6 7 7 7 7 7 
            7 7 7 7 c c 6 7 7 5 5 6 6 7 7 7 
            7 7 c c 6 6 6 6 7 5 5 7 c c 7 7 
            7 c 6 6 6 7 7 7 7 7 7 5 6 c c 7 
            7 c 6 6 7 7 7 5 7 6 7 7 7 6 c c 
            c 6 6 7 7 6 7 7 7 6 7 7 6 6 6 c 
            c c 6 6 6 7 6 7 6 6 6 6 5 7 6 c 
            c c c c 6 7 7 6 7 7 7 6 7 6 6 c 
            7 c c 6 6 6 6 c 6 6 6 6 6 c c c 
            7 c c 6 6 c 6 6 c 6 c 6 6 c c 7 
            7 7 c c f f 6 6 c f f c c f 7 7 
            7 7 7 7 c f c c c f c f f 7 7 7 
            7 7 7 7 7 4 f f f c 7 e 7 7 7 7 
            7 7 7 7 7 7 e e e 7 7 4 7 7 7 7 
            7 7 7 7 7 7 7 e e 7 e 7 7 7 7 7 
            `)
    }
    for (let value of tiles.getTilesByType(myTiles.tile41)) {
        tiles.setTileAt(value, img`
            7 1 7 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 7 1 1 1 1 1 1 1 1 1 1 
            1 1 1 7 1 7 7 1 1 1 1 1 7 1 1 1 
            1 1 6 7 7 1 7 1 7 7 1 1 1 1 1 1 
            1 1 1 6 7 1 1 7 7 6 1 1 1 1 1 1 
            1 1 1 1 6 1 1 7 6 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 7 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 7 7 1 1 1 
            1 1 1 1 1 1 1 1 1 1 7 7 6 1 1 1 
            1 1 1 1 1 1 1 1 7 7 7 6 1 1 1 1 
            1 1 1 1 1 1 1 1 1 7 7 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 
            1 1 7 1 1 1 1 1 1 1 1 1 1 1 1 7 
            `)
    }
    for (let value of tiles.getTilesByType(myTiles.tile42)) {
        tiles.setTileAt(value, img`
            1 1 1 1 1 1 1 9 9 1 1 1 1 1 1 1 
            1 1 1 1 9 9 9 1 1 9 9 9 1 1 1 1 
            1 1 1 9 1 1 1 6 5 1 1 1 9 1 1 1 
            1 1 1 9 c 6 c 5 5 c 7 6 9 1 1 1 
            1 1 9 1 c c 7 5 5 7 c 6 1 9 1 1 
            1 9 1 c 7 7 7 7 7 5 7 7 c 1 9 1 
            9 1 6 6 c 6 7 7 7 7 6 c c 6 1 9 
            1 7 7 7 6 c 7 c 6 7 6 7 7 7 7 1 
            c c c 6 6 6 c 6 6 6 6 7 7 6 6 6 
            1 c c 7 6 6 6 6 6 7 7 7 7 c 6 1 
            1 c 7 7 6 6 7 6 6 7 7 6 7 7 c 1 
            1 c c c c 7 7 6 f 7 7 c c c c 1 
            1 1 1 1 c 7 c f f c 7 c 1 1 1 1 
            1 1 1 1 1 6 f e e e c 1 1 1 1 1 
            1 1 1 1 1 e e e e e e 1 1 1 1 1 
            1 1 1 e e e 1 e e 1 e e e 1 1 1 
            `)
    }
    scene.setBackgroundColor(11)
    if (5 == the_race) {
        scene.setBackgroundColor(11)
    }
    the_Player = sprites.create(img`
        . . . . . . 8 8 c c 8 8 . . . . 
        . . . . . 8 6 6 6 6 6 6 8 . . . 
        . . . . 6 c 6 6 6 6 6 6 c 6 . . 
        . . . 8 6 c 9 6 6 6 6 6 c 6 8 . 
        . . . f 6 6 9 6 6 6 6 6 c 6 f . 
        . . . f 6 6 9 6 6 6 6 6 6 6 f . 
        . . . f 6 6 9 6 6 6 6 6 6 6 f . 
        . . . f 6 c 6 9 9 6 6 6 c 6 f . 
        . . . 8 6 c 8 c c c c 8 c 6 8 . 
        . . . 8 6 8 c b b b b c 8 6 8 . 
        . . . 8 6 8 b b b b b b 8 6 8 . 
        . . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . . . f 8 d 8 8 8 8 8 8 d 8 f . 
        . . . f 8 6 d 8 8 8 8 d 6 8 f . 
        . . . f f 8 8 8 8 8 8 8 8 f f . 
        . . . . f f . . . . . . f f . . 
        `, SpriteKind.Player)
    scene.cameraFollowSprite(the_Player)
    tiles.placeOnTile(the_Player, tiles.getTileLocation(num, num2))
    sprites.setDataBoolean(the_Player, "1", false)
    sprites.setDataBoolean(the_Player, "2", false)
    sprites.setDataBoolean(the_Player, "3", false)
    speed = 75
    lokshon2 = tiles.locationOfSprite(the_Player)
    game.showLongText("3 2 1 Go!", DialogLayout.Top)
}
/**
 */
let mySprite4: Sprite = null
let lokshon2: tiles.Location = null
let speed = 0
let the_Player: Sprite = null
let the_race = 0
let Arrow: tiles.Location = null
let mySprite3: Sprite = null
let path: tiles.Location[] = []
let speed_list: number[] = []
let path2: tiles.Location[] = []
let mySprite: Sprite = null
let main = false
let race = false
let list2: tiles.WorldMap[] = []
let list: tiles.WorldMap[] = []
list = [
tiles.createMap(tiles.createTilemap(hex`2800280004040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404010101010101010101010101010101010101010101010101010101010101010404040404040404010103010301030103010301030103010301030103010301010301030103010104040404040404040101010101010101010101010101010101010101010101010101010101010101040404040404040401010101040404040404040404040404040404040404040404040404040102010404040404040404010201040404040404040404040404040404040404040404040404040401010104040404040404040101010404040404040404040404040404040404040404040404040404010101040404040404040401020104040404040404040404040404040404040404040404040404040102010404040404040404010101040404040404040404040404040404040404040404040404040401010104040404040404040102010404040404040404040404040404040404040404040404040404010201040404040404040401010104040404040404040404040404040404040404040404040404040101010404040404040404010201040404040404040404040404040404040404040404040404040401020104040404040404040101010404040404040404040404040404040404040404040404040404010101040404040404040405050504040404040404040404040404040404040404040404040404040102010404040404040404010101010101010101010101010101010101010101040404040404040401010104040404040404040102010301030103010301030103010301030102010404040404040404010201040404040404040401010101010101010101010101010101010101010104040404040404040101010404040404040404040404040404040404040404040404040404010201040404040404040101020104040404040404040404040404040404040404040404040404040101010404040404040401010101040404040404040404040404040404040404040404040404040401020104040404040404010102010404040404040404040404040404040404040404040404040404010101040404040404040101010104040404040404040404040404040404040404040404040404040102010404040404040401010201040404040404040404040404040404040404040404040404040401010104040404040404010101010404040404040404040404040404040404040404040404040404010201040404040404040101020104040404040404040404040404040101010101010101010101010101010404040404040401010101040404040404040404040404040401020103010301030103010301020104040404040404010102010404040404040404040404040404010101010101010101010101010101040404040404040101010104040404040404040404040404040102010404040404040404040404040404040404040401010201040404040404040404040404040401010104040404040404040404040404040404040401010201010404040404040404040404040404010201040404040404040404040404040404040404010201010404040404040404040404040404040101010404040404040404040404040404040404040101010404040404040404040404040404040401020104040404040404040404040404040404040401020104040404040404040404040404040404010101040404040404040404040404040404040404010101040404040404040404040404040404040102010404040404040404040404040404040404040102010404040404040404040404040404040401010104040404040404040101010101010101010101010104040404040404040404040404040404010201010101010101010101030103010301030103010201040404040404040404040404040404040101030103010301030103010101010101010101010101010404040404040404040404040404040401010101010101010101010101040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404`, img`
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    22222..............................22222
    22222.2222222222222222222222222222.22222
    22222.2222222222222222222222222222.22222
    22222.2222222222222222222222222222.22222
    22222.2222222222222222222222222222.22222
    22222.2222222222222222222222222222.22222
    22222.2222222222222222222222222222.22222
    22222.2222222222222222222222222222.22222
    22222.2222222222222222222222222222.22222
    22222.2222222222222222222222222222.22222
    22222.2222222222222222222222222222.22222
    22222.2222222222222222222222222222.22222
    2222222222222222222222222222222222.22222
    22222...................2222222222.22222
    22222222222222222222222.2222222222.22222
    22222222222222222222222.2222222222.22222
    22222222222222222222222.2222222222.22222
    22222222222222222222222.2222222222.22222
    22222222222222222222222.2222222222.22222
    22222222222222222222222.2222222222.22222
    22222222222222222222222.2222222222.22222
    22222222222222222222222.2222222222.22222
    22222222222222222222222.2222222222.22222
    22222222222.............2222222222.22222
    22222222222..222222222222222222222.22222
    22222222222.222222222222222222222..22222
    22222222222.22222222222222222222..222222
    22222222222.22222222222222222222.2222222
    22222222222.22222222222222222222.2222222
    22222222222.22222222222222222222.2222222
    22222222222.22222222222222222222.2222222
    22222222222.22222222222222222222.2222222
    22222222222.22222222222222222222.2222222
    22222222222.2222222222...........2222222
    22222222222............22222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile4,sprites.castle.tileGrass1,myTiles.tile5], TileScale.Sixteen)),
tiles.createMap(tiles.createTilemap(hex`32003c0004040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404060606060606060606060606060606060606060606060606060606060606060606060404040404040404040404040404040406010101010101010101010103010101010101010101010101010101010101010101060606040404040404040404040404040601010108010801080108010308010801080108010801080108010801080108010101010604040404040404040404040404060107010101010101010101030101010101010101010101010101010101010101080101060404040404040404040404040406010101060606060606060606060601010606060606060606060606060606060601070106040404040404040606060606060601070106040404040404040404040101040404040404040404040404040404060101010604040404040404060101010101010101010604040404040404040404010104040404040101010101010404040406010701060404040404040406010101080108010801060404040404040404040401010404040404010101010101040404040601010106040404040404040601070101010101010106040404010101010101010101040404040401010404010104040404060107010604040404040404060101010606060606060604040401010101010101010104040404040101040401010404040406010101060404040404040406010701060505050505050404040101040404040404040404040404010104040101040404040601070106040404040404040601010106040404040404040404010104040404040404040404040401010404010104040404060101010604040404040404060202020604040404040404040401010101010101010101010101010101040401010404040406010701060404040404040406010701060404040404040404040101010101010101010101010101010104040a0a040404040b0a0a0a0b040404040404040601010106040404040404040404040404040404040404040404040404040404010104040404060107010604040404040404060107010604040404040404040404040404040404040404040404040404040401010404040406010101060404040404040406010101060404040404040404040404040404040404040404040404040404040101040404040601070106040404040404060601070106040404040404040404040404040404040404040404040404040404010104040404060101010604040404040406010101010604040404040404040404040404040404040404040404040404040601010606060606010701060404040404040601070101060404040606060606060606060606060606060606060404040404060101010101010101010106040404040404060101010606040404060101010101010101010101010101010106060404040406010101010101080108010604040404040406010701060404040606010101080108010801080108010801010106040404040601010101010701010101060404040404040601010106040404060101010101010101010101010101010107010606040404060606060601010106060606040404040406060107010604040406010701010606060606060606060606010101010606040404040404060107010604040404040404040601010101060404060601010106040404040404040404040601010701010604040404040406010101060404040404040404060107010106040406010101010604040404040404040404060601010101060604040404040601070106040404040404040406010101060604040601070101060404040404040404040404060601070101060604040404060101010604040404040404040601070106040406010101010606040404040404040404040404060101010106060404040406010701060606060606060404060101010604040601010101060404040404040404040404040406060107010106040404040601010101010101010106040406010701060404060107010606040404040404040404040404040406010101010606040404060107010801080108010604060601010106040601010101060404040404040404040404040404040c0c090909090c0c0404060101010101010101010604060101070106060601010101060404040404040404040404040404040406010101010106040406060606060606010701060406010101010606010107010604040606060606060404040404040404040606010107010606040404040404040601010106040601070106060601010101060401010101010106060606060404040404040606010101010604040404040404060107010604060101010606060107010606040101010801010101010106060606060404040601010701060604040404040406010101060406010701060601010101060404010701010108010801010101010106060606060601010101060604040404040601070106040601010106060107010106040601010106010101010108010801010101010106060107010101060404040404060101010604060107010101010101060604060107010606060606010101010108010801010101010101010106040404040406010701060406010101080108010106040406010101060404040606060606010101010108010801080101010604040404040601010106040606010101010101060604040601070106060404040404040606060606010101010101010101060404040404060107010604040406060606060606040404060101010106060604040404040404040606060606010101010106040404040406010101060404040404040404040404040406060107010101010606060404040404040404040406060606060604040404040601070106040404040404040404040404040406010108010801010101060606040404040404040404040404040404040404060101010604040404040404040404040404040406010101010108010101010106060604040404040404040404040404040406010701060404040404040404040404040404040406060601010101080108010101010606060404040404040404040404040601010106040404040404040404040404040404040404060606060101010101080101010101060606040404040404040404060107010604040404040404040404040404040404040404040406060606010101010801080101010106060604040404040406010101060404040404040404040404040404040404040404040404040606060601010101010801080101010606060404040601070106040404040404040404040404040404040404040404040404040404060606060601010101010801010101060606060101010604040404040404040404040404040404040404040404040404040404040406060606060101010108010801010101010701060404040404040404040404040404040404040404040404040404040404040404040406060606010101010108010801010106040404040404040404040404040404040404040404040404040404040404040404040404040606060601010101010101010604040404040404040404040404040404040404040404040404040404040404040404040404040404060606060101010101060404040404040404040404040404040404040404040404040404040404040404040404040404040404040406060606060606040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404`, img`
    22222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222222
    22222222222................................2222222
    22222222222.222222222222.22222222222222222..222222
    22222222222.222222222222.222222222222222222.222222
    22222222222.222222222222.222222222222222222.222222
    22222222222.222222222222.2222222.....222222.222222
    22222.......222222222222.2222222.222.222222.222222
    22222.22222222222........2222222.222.222222.222222
    22222.22222222222.22222222222222.222.222222.222222
    22222.22222222222.22222222222222.222.222222.222222
    22222.22222222222.22222222222222.222.222222.222222
    22222222222222222.22222222222222.222.222222.222222
    22222.22222222222................222.222222.222222
    22222.222222222222222222222222222222.222222.222222
    22222.222222222222222222222222222222.222222.222222
    22222.222222222222222222222222222222.222222.222222
    22222.222222222222222222222222222222.222222.222222
    2222..222222222222222222222222222222.222222.222222
    2222.2222222222222222222222222222222........222222
    2222.22222222222222222222222222222222222....222222
    2222.22222222..............2222222222222.222222222
    2222.2222222..222222222222..222222222222.222222222
    2222.2222222.22222222222222..22222222222.222222222
    2222.222222..222222222222222.22222222222.222222222
    222..222222.2222222222222222..2222222222.222222222
    222.2222222.22222222222222222..222222222.222222222
    222.2222222.222222222222222222.222222222.222222222
    222.222222..222222222222222222.222222222.222222222
    222.222222.2222222222222222222...2222222.......222
    222.22222..222222222222222222222.2222222222222.222
    222.22222.2222222222222222222222..222222222222.222
    22..22222.22222222222222222222222.222222222222.222
    22.222222.22222222222222222222222..22222222222.222
    22.22222..2222.....222222222222222.22222222222.222
    22.2222..22222.222....222222222222.22222222222.222
    22.2222.222222.222222......2222222.22222222222.222
    22.222..222222.22222222222.....222.22222222222.222
    22.....2222222.222222222222222.....22222222222.222
    22222222222222..222222222222222222222222222222.222
    222222222222222.222222222222222222222222222222.222
    222222222222222.222222222222222222222222222222.222
    222222222222222.....22222222222222222222222222.222
    2222222222222222222....22222222222222222222222.222
    2222222222222222222222...222222222222222222222.222
    222222222222222222222222.....22222222222222222.222
    2222222222222222222222222222....22222222222222.222
    2222222222222222222222222222222.....2222222222.222
    22222222222222222222222222222222222...22222222.222
    2222222222222222222222222222222222222....22222.222
    2222222222222222222222222222222222222222.......222
    22222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222222
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile5,myTiles.tile6,myTiles.tile15,myTiles.tile16,sprites.castle.tileGrass1,myTiles.tile2,myTiles.tile4,myTiles.tile7,myTiles.tile8,myTiles.tile11,myTiles.tile13], TileScale.Sixteen)),
tiles.createMap(tiles.createTilemap(hex`3c003c00040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040b0b0b04040404040408080808080808080808080808080808040404040404040404040404040404040404040404040404040404040404040404040b0b0b0b0b0404040404080808080808080808080808080808080404040404040404040404040404040404040404040404040404040404040404040404040604040404040404080808080808080808080808080808080404040404040404040404040404040404040404040404040404040404040404040b0b0b0b0b0b0b040404040808080404040404040404040408080804040404040404040404040404040404040404040404040404040404040404040b0b0b0b0b0b0b0b0b0404040808080404040404040404040408080804040404040404040404040404040404040404040404040404040404040404040b0b0b0b0b0b0b0b0b04040408080804040404040404040404080808040404040404040404040404040404040404040404040404040404040404040404040404060404040404040408080804040404040404040404080808040404040404040404040404040404040404040404040404040404040404040404040404060404040404040408080804040404040404040404080808040404040404040404040404040404040404040404040404040404040404060606070707060707070707080808080804040404040404040404080808040404040404040404040404040404040404040404040404040404040406060606070707070707070707080808080804040404040404040404080808040404040404040404040404040404040404040404040404040404040406060606070707070707070707080808080804040408080808080808080808040404040808080808080808080808080804040404040404040404040404060606070707060606060606040404040404040408080808080808080808040404040808080808080808080808080804040404040404040404040404040404080808040404040404040404040404040408080808080808080808040404040808080808080808080808080804040404040404040404040404040404080808040404040404040404040404040408080804040404040408040404040808080404040404040408080804040404040404040404040404040404080808040404040404040404040404040408080804040404040408040404040808080404040404040408080804040404040404040404040404040505010101050504040404040404040404040408080804040404040408040404040808080404040404040408080804040404040404040404040404040503010101030504040404040404040404040408080804040404040408040404040808080404040404040408080804040404040404040404040404040503010101030504040404040404040404040408080804040404040408040404040808080404040404040408080808080808080808080808080404040503010101030504040404040404040404040408080804040404040408040404040808080404040404040408080808080808080808080808080404040503020202030504040404040404040404040408080804040404040408040404040808080404040404040408080808080808080808080808080404040503010101030504040404040404040404040408080808080808080808040404040808080404040404040404040404040404040404040808080404040503010101030504040404040404040404040408080808080808080808040404040808080404040404040404040404040404040404040808080404040503010101030504040404040404040404040408080808080808080808040404040808080404040404040404040404040404040404040808080404040505010101050504040404040404040404040404040404040404080808040404040808080404040404040404040404040404040404040808080404040404080808040404040404040404040404040404040404040404080808040404040808080404040404040404040404040404040404040808080404040404080808040404040404040404040404040404040404040404080808040404040808080404040404040404040404040404040404040808080404040404080808040404040404040404040404040404040404040404080808040404040808080404040404040404040404040404040404040808080404040404080808040404040404040404040404040404040404040404080808040404040808080404040404040404040404040404040404040808080404040404080808040404040404040404040404040404040404040404080808040404040808080404040404040404040404040404040404040808080404040404080808040404040404040404040404040404040404040404080808040404040808080404040404040404040404040404040404040808080404040408080804040404040404040404040404040404040404040404080808040404040808080404040404060604040404040404040404040a0a0a050505050a0a0a04040404040404040404040404040404040404040404080808040404040808080404040406060606040404040404040404040a0a0a030303030a0a0a05040404040404040404040404040404040404040404080808040404040808080404040606060606060404040404040404050a0a0a030303030a0a0a05040404040404040404040404040404040404040404080808040404040808080404040606060606060404040404040404050a0a0a030303030a0a0a05040404040404040404040404040409050505050505010101050505050808080406060606060606060606040404040404050a0a0a0a0a0a0a0a0a0a05040404040404040404040404040509030303030303010101030303030808070606060606060606060606060404040404050a0a0a0a0a0a0a0a0a0a05040404040404040404040505050509030303030303010101030303030807070606060606060606060606060604040404050a0a0a0a0a0a0a0a0a0a0504040404040404040405050909090903030303030301010103030303070707060606060606060606060606060604040405050503030303030303050504040404040404040505090909090903030303030301010103030303070707060606060606060606060606060604040404050505050505050505050404040404040404050509090909090903030303030301010103030303070707070707070707060606060606060604040404050505050505050505040404040404040404050909090909090903030303030301010103030303070707070707070707060606060606060604040404040404040404040404040404040404040405050909090909090903030303030301010103030303070707070707070707060606060606060604040404040404040404040404040404040404040505090909090909090903030303030301010103030303060606060606070707060606060606060604040404040404040404040404040404040404040509090909090909090903030303030301010103030303060606060606070707060606060606060604040404040404040404040404040404040404040509090909090909090903030303030301010103030303060606060606070707060606060606060604040404040404040404040404040404040404050509090909090909090903030303030301010103030303060606060606070707060606060606060604040404040404040404040404040404040404090909090909090903030303030303030301010103030303060606060606070707060606060606060604040404040404040404040404040404040505050303030303030303030303030303030301010103030303060606060606070707060606060606060604040404040404040505050505050505050503030303030303030303030303030303030301010103030303060606060606070707070707070707070708080808080808010101010101010101010101010101010101010101010101010101010101010103030303060606060606070707070707070707070708080808080808010101010101010101010101010101010101010101010101010101010101010103030303060606060606070707070707070707070708080808080808010101010101010101010101010101010101010101010101010101010101010103030303060606060606060606060606060606060604040404040404030303030303030303030303030303030303030303030303030303030303030303030303`, img`
    222222222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222..............22222
    22222222222222222222222222222222222222222.222222222222.22222
    22222222222222222222222222222222222222222.222222222222.22222
    22222222222222222222222222222222222222222.222222222222.22222
    22222222222222222222222222222222222222222.222222222222.22222
    22222222222222222222222222222222222222222.222222222222.22222
    22222222222222222222222222222222222222222.222222222222.22222
    22222222222222222222222222222222222222222.222222222222.22222
    222222222222222222222222222222............222222222222.22222
    222222222222222222222222222222.22222222222222222222222.22222
    222222222222222222222222222222.2222222222222222........22222
    2...........222222222222222222.2222222222222222.222222222222
    2.222222222.222222222222222222.2222222222222222.222222222222
    2.222222222.222222222222222222.2222222222222222.222222222222
    2.222222222.222222222222222..2.2..2222222222222.222222222222
    2.222222222.222222222222222..2.22.2222222222222.222222222222
    2.222222222.222222222222222..2.22.2222222222222.222222222222
    2.222222222.222222222222222..2.22.2222222222222.222222222222
    2.222222222............2222..2222.2222222222222.222222222222
    2.22222222222222222222.2222..2.22.2222222222222.222222222222
    2.22222222222222222222.2222..2.22.2222222222222........22222
    2.22222222222222222222.2222..2.22.22222222222222222222.22222
    2.22222222222222222222.2222..2.2..22222222222222222222.22222
    2.22222222222222222222.2222222.22222222222222222222222.22222
    2.22222222222222222222.2222222.22222222222222222222222.22222
    2.22222222222222222222.2222222.22222222222222222222222.22222
    2.22222222222222222222.2222222.22222222222222222222222.22222
    2.22222222222222222222.222222..22222222222222222222222.22222
    2.22222222222222222222.222222.222222222222222222222222.22222
    2.22222222222222222222.222222.222222222222222222222222.22222
    2.22222222222222222222.2....2.222222222222222222222222.22222
    2.22222222222222222222.2....2.2.2222222222222222222222.22222
    2.222222222222222222.2.2....2.2.2222222222222222222222.22222
    2.222222222222222222.2.2....2.2.222222222222222......2.2....
    2.222222222222222222.2.222222.2.2222222222222.2......2.2....
    2.222222222222222222.2........2.2222222222....2......2.2....
    2.222222222222222222.2222222222.222222222..2222......2.2....
    2.222222222222222222............22222222..22222......2.2....
    2.2222222222222222222..........22222222..222222......2.2....
    2.2222222222222222222.........222222222.2222222......2.2....
    2.......222222222222222222222222222222..2222222......2.2....
    2222222.22222222222222222222222222222..22222222......2.2....
    2222222.22222222222222222222222222222.222222222......2.2....
    2222222.22222222222222222222222222222.222222222......2.2....
    2222222.2222222222222222222222222222..222222222......2.2....
    2222222.222222222222222222222222222222222222.........2.2....
    2222222.22222222222222222222222222...................2.2....
    2222222.22222222222222222............................2.2....
    2222222.2222222222222222222222222222222222222222222222.2....
    2222222................................................2....
    22222222222222222222222222222222222222222222222222222222....
    22222222222222222...........................................
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile5,sprites.castle.tileGrass1,myTiles.tile29,sprites.castle.tilePath5,myTiles.tile30,myTiles.tile33,myTiles.tile34,myTiles.tile15,myTiles.tile27,myTiles.tile35], TileScale.Sixteen)),
tiles.createMap(tiles.createTilemap(hex`3c003c00040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404090909090909090404040404040404040404040404040404040404040404040404040404040c0c0c0c0c0c0c0c0c0c0c040404040404040404040909090909090909090404040404040404040404040404040404040404040404040404040404040c0c0c0c0c0c0c0c0c0c0c040404040404040409090909090909090909090404040404040404040404040404040404040404040404040404040404040c0c0c0c0c0c0c0c0c0c0c040404040404090909090909090909090909090404040404040404040404040404040404040404040404040404040404040c0c0c04040404040c0c0c0c0c0c0c0b0b0b0b0b0b0b09090909090909090404040404040404040404040404040404040404040404040404040404040c0c0c04040404040c0c0c0c0c0b0b0b0b0b0b0b0b0b09090909090909090404040404040404040404040404040404040404040c0c0c0c0c0c0c0c0c0c0c0c04040404040c0c0c0b0b0b0b0b0b0b0b0b0b0a0a0a0a0a0a0a0a0a0c0c0c0c0c0c0c0c0c0c0c040404040404040404040c0c0c0c0c0c0c0c0c0c0c0c04040404040404090909090909090909090b0a0a0a0a0a0a0a0a0a0c0c0c0c0c0c0c0c0c0c0c040404040404040404040c0c0c0c0c0c0c0c0c0c0c0c04040404040c0c0c0b0b0b0b0b0b0b0b0b0b0a0a0a0a0a0a0a0a0a0c0c0c0c0c0c0c0c0c0c0c040404040404040404040c0c0c0404040404040c0c0c04040404040c0c0c0c0c0b0b0b0b0b0b0b0b0b090909090909090904040404040404040c0c0c040404040404040404040c0c0c0404040404040c0c0c04040404040c0c0c0c0c0c0c0b0b0b0b0b0b0b090909090909090904040404040404040c0c0c040404040404040404040c0c0c0404040404040c0c0c0c0c0c0c0c0c0c0c0404040404040909090909090909090909090904040404040404040c0c0c040404040404040404040c0c0c0c0c0c0c04040c0c0c0c0c0c0c0c0c0c0c0404040404040404090909090909090909090904040404040404040c0c0c040404040404040404040c0c0c0c0c0c0c04040c0c0c0c0c0c0c0c0c0c0c0404040404040404040409090909090909090904040404040404040c0c0c040404040404040404040c0c0c0c0c0c0c040404040404040404040404040404040404040404040404040909090909090904040404040404040c0c0c04040404040404040404040404040c0c0c040404040404040404040404040404040404040404040404040404040c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0404040404040404040c0c0c0c0c0c0c0c040404040404040404040404040404040404040404040404040404040c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0404040404040404040c0c0c0c0c0c0c0c040404040404040404040404040404040404040404040404040404040c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0404040404040404040c0c0c0c0c0c0c0c040404040404040404040404040404040404040404040404040404040c0c0c0404040404040404040404040404040404040404040c0c0c0404040404040404040404040404040404040404040404040404040404040404040c0c0c0404040404040404040404040404040404040404040c0c0c0404040404040404040404030303030304040404040404040404040404040404040c0c0c0404040404040404040404040404040303030404040c0c0c0404040404040404040303030303030303030304040404040404040404040404040c0c0c0404040404040404040404040404030303030404040c0c0c0404040404040403030303030303030303030303030303030303030303030303030c0c0c0404040404040404040404040403030303030304040c0c0c040404040404030303030303030303030303030303030303030303030303030303080808030303030303030303030303030303030303030303010101030303030303030303030303030303030303030303030303030303030303030303080808030303030303030303030303030303030303030303010101030303030303030303030303030303030303030303030303030303030303030303080808030303030303030303030303030303030303030303010101030303030303030303030101010101010101010101010101010303030303030303080808030303030303030808080808080803030303030303010101030303030303030303030101010101010101010101010101010303030303030303080808080808080805080808080808080803030303030303010101030303030303030303030101010101010101010101010101010303030303030303080808080808080805080808080808080803030303030303010101030303030303030303030101010303030303030303030101010303030303030303080808080808080805080808030308080803030303030303010101030303030303030303030101010303030303030303030101010303030303030303030303030303030303030303030308080803030303030303010101030303030303030303030101010303030303030303030101010303030303030303030303030303030303030303030301010103030303030303010101030303030303030303030101010d0e0e0e0e0e0e0e0d0101010d0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0d0808080808080808080d0e0e0d0101010d0e0e0e0e0e0e0e0e0d0101010d0e0e0e0e0e0e0e0d0101010d0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0d0808080808080808080d0e0e0d0101010d0e0e0e0e0e0e0e0e0d0101010d0e0e0e0e0e0e0e0d0101010d0e0e0d0d0d0d0d0d0d0d0d0e0e0e0e0e0e0d0808080808080808080d0e0e0d0101010d0e0e0e0e0e0e0e0e0d0101010d0e0e0e0e0e0e0e0d0101010d0e0e0d010101010101010d0d0d0e0e0e0e0d0808080e0e0e0808080d0e0e0d0101010d0e0e0e0e0e0e0e0e0d0101010d0e0e0e0e0e0e0e0d0101010d0e0e0d0101010101010101010d0e0e0e0e0d0808080e0e0e0808080d0e0e0d0101010f0d0d0d0d0d0d0d0d0d0101010d0e0e0e0e0e0e0e0d0101010d0e0e0d0101010101010101010d0e0e0e0e0d0808080e0e0e0808010d0e0e0d010101070101010101010101010101010d0e0e0e0e0e0e0e0d0101010d0e0e0d0101010e0e010101010d0e0e0e0e0d0808080808080808010d0e0e0d010101070101010101010101010101010d0e0e0e0e0e0e0e0d0101010d0e0e0d0101010e0e0e0101010d0e0e0e0e0d0808080808080808010d0e0e0d010101070101010101010101010101010d0e0e0e0e0e0e0e0d0101010d0d0d0d0101010e0e0e0101010d0e0e0e0e0d0808080808080808010d0e0e0d0d0d0d0f0d0d0d0d0d0d0d0d0d0d0d0d0d0e0e0e0e0e0e0e0d010101010101010101010e0e0e0101010d0e0e0e0e0d0d0d0d0101010d0d0d0d0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0d010101010101010101010e0e0e0101010d0e0e0e0e0e0e0e0d0101010d0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0d010101010101010101010e0e0e0101010d0e0e0e0e0e0e0e0d0101010d0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0101010d0e0e0e0e0e0e0e0d0101010d0e0e0e0e0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d100d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0101010d0e0e0e0e0e0e0e0d0101010d0e0e0e0e0d0808080808080801010101010101010101010601010101010101010101010101010101010101010101010d0e0e0e0e0e0e0e0d0101010d0e0e0e0e0d0808080808080801010101010101010101010601010101010101010101010101010101010101010101010d0e0e0e0e0e0e0e0d0101010d0e0e0e0e0d0808080808080801010101010101010101010601010101010101010101010101010101010101010101010d0e0e0e0e0e0e0e0d0101010d0e0e0e0e0d0808080d0d0d0d0d0d0d0d0d0d0d0d0d0d0d100d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0e0e0e0e0e0e0e0d0101010d0e0e0e0e0d0808080e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0d0202020d0e0e0e0e0d0808080d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0101010d0e0e0e0e0d0808080808080808080808080808080808080808080808080808080808080808080808080808080808080808010101010101010101010d0e0e0e0e0d0808080808080808080808080808080808080808080808080808080808080808080808080808080808080808010101010101010101010d0e0e0e0e0d0808080808080808080808080808080808080808080808080808080808080808080808080808080808080808010101010101010101010d0e0e0e0e0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0e0e0e`, img`
    222222222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222222222222
    2222222222222...........222222222222222222222222222222222222
    2222222222222...........222222222222222222222222222222222222
    2222222222222...........222222222222222222222222222222222222
    2222222222222...22222..............2222222222222222222222222
    2222222222222...22222..............2222222222222222222222222
    222222222222222222222..........22222222222222222222222222222
    22222..........222222222222222222....................2222222
    22222.22222222.222222222222222222.222222222222222222.2222222
    22222.22222222.2222222............222222222222222222.2222222
    22222.22222222.2222222.22222222222222222222222222222.2222222
    22222.22222222.2222222.22222222222222222222222222222.2222222
    22222.22222222.........22222222222222222222222222222.2222222
    22222.....222222222222222222222222222222222222222222.2222222
    222222222.222222222222222222222222222222222222222222.2222222
    222222222.222222222222222222222222222222222222222222.2222222
    222222222.222222222222222222222222222222.............2222222
    2222......222222222222222222222222222222.2222222222222222222
    2222.22222222222222222222222222222222222.2222222222222222222
    2222.22222222222222222222222222222222222.2222222222222222222
    2222.22222222222222222222222222222222222.2222222222222222222
    2222.22222222222222222222222222222222222.2222222222222222222
    2222.22222222222222222222222222222222222.2222222222222222222
    2222.22222222222222222222222222222222222.2222222222222222222
    2222.22222222222222222222222222222222222.2222222222222222222
    2222.22222222222222222222222222222222222.2222222222222222222
    2222.22222222222.22222222222222222222222.2222222222222222222
    2222.222222222222.............2222222222.22222222......22222
    2222.222222222222.2222222222..2222222222..........2222.22222
    2222.222222222222.22222222222.222222222222222222222222.22222
    2222.222222222222.22222222222.222222222222222222222222.22222
    2222.222222222222.22222222222.222222222222222222222222.22222
    2222.222222222222.2.2222222.2.2.22222222222222222....2.2222.
    22.2.2.22222222.2.2.2222222.2.2.22222222222222222....2....2.
    22.2.2.22222222.2.2.2222222.2.2.22.........222222....2222.2.
    22.2.2.22222222.2.2.2222222.2.2.22.2222222...2222....2222.2.
    22.2.2.22222222.2.2.2222222.2.2.22.2......22.2222....2222.2.
    22.2.2..........2.2.2222222.2.2.22.2..222..2.2222....2222.2.
    22.2.222222222222.2.2222222.2.2.22.2.22222.2.2222....2222.2.
    22.2..............2.2222222.2.2.22.2.22222.2.2222....2....2.
    22.222222222222222..2222222.2.2....2.22222.2.2222....2.22222
    22..................2222222.2.222222.22222.2.2222....2.2....
    222222222222222222222222222.2........22222.2.2222222.2.2.222
    222222222222222222222222222.22222222222222.2.2222222.2.2.222
    222222222222222222222222222222222222222222.2.2222222.2.2.222
    2........................................2.2.2222222.2.2.222
    2.2222222222222222222222222222222222222222.2.2222222.2.2.222
    2.2........................................2.2222222.2.2.222
    2.2.2222222222222222222222222222222222222222.2222222.2.2.222
    2.2.2........................................2222222.2.2.222
    2.2.222222222222222222222222222222222222222222222222.222.222
    2.2.2................................................2.2.222
    2.2.22222222222222222222222222222222222222222222222222.2.222
    2.2....................................................2.222
    2.222222222222222222222222222222222222222222222222222222.222
    2........................................................222
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile5,myTiles.tile39,myTiles.tile40,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile27,myTiles.tile30,myTiles.tile32,myTiles.tile33,myTiles.tile34,myTiles.tile41,myTiles.tile42,myTiles.tile44,myTiles.tile45], TileScale.Sixteen)),
tiles.createMap(tiles.createTilemap(hex`3c003c000505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050502020202020202020202020202020202020202020202020202020202020202020202020202020205050505050505050505050505050505050505050502010101010101010101010101010101010101010101010101010101010101010101010101010205050505050505050505050505050505050505050502010101010101010101010101010101010101010101010101010101010101010101010101010205050505050505050505050505050505050505050502010101010101010101010101010101010101010101010101010101010101010101010101010205050505050505050505050505050505050505050502010101020202020202020202020202020202020202020202020202020202020202020101010205050505050505050505050505050505050505050502010101020505050505050505050505050505050505020505050505050505050505020101010205050505050505050505050505050505050505050502010101020202020202020202020202020202020202020202050505050505050505020101010205050505050505050505050505050505050505050502010101010101010101010101010101010101010101010102050505050505050505020101010205050505050505050505050505050505050505050502010101010101010101010101010101010101010101010102050505050505050505020101010205050505050505050505050505050505050505050502010101010101010101010101010101010101010101010102050505050505050505020101010205050505050505050505050505050505050505050502020202020202020202020202020202020202020201010102050505050505050505020101010205050505050505050505050505050505050505050505050505050505050505050505050505050505050201010102050505050505050505020101010205050505050505050505050505050505050505050505050505050505050505050505050505050505050201010102050505050505050505020101010205050505050505050505050502020202020202020202020202020502020202020202020202020205050201010102050505050505050505020101010205050505050505050505050502030303030303030303030101010c01010101010101010101010205050201010102050505050505050502020101010205050505050505050505050502030303030303030303030101010c01010101010101010101010205050201010102050505050505050502010101010205050505050505050505050502030303030303030303030101010c010101010101010101010102050502010101020505050505050505020101010102050505050505050505050505020303030202020202020202020205020202020202020201010102050502010101020505050505050505020101010202050505050505050505050505020303030205050505050505050505050505050505050201010102020202010101020505050505050505020101010205050505050505050505050505020303030205050505050505050505050505050505050201010101010101010101020505050505050505020101010205050505050505050505050505020303030205050505050505050505050505050505050201010101010101010101020505050505050505020101010205050505050505050505050505020303030205050505050505050505050505050505050201010101010101010101020505050505050505020101010205050505050505050505050505020404040205050505050505050505050505050505050202020202020202020202020505050505050505020101010205050505050505050505050505020101010205050505050505050505050505050505050505050505050505050505050505050505050505020101010205050505050505050505050505020101010205050505050505050505050505050505050505050505050505050505050505050505050505020101010205050505050505050505050505050101010505050505050505050505050505050505050505050505050505050505050505050505050505020101010205050505050505050505050505050101010505050505050505050505050505050505050505050505050505050505050505050505050505020101010205050505050505050505050505050101010505050505050505050505050505050505050505050505050505050505050505050505050505020101010205050505050505050505050505050101010505050505050505050505050505050505050505050505050505050505050505050505050505020101010205050505050505050505050505050101010101010101050505050505050505050505050505050505050505050505050505050505050505020101010205050505050505050505050505050101010101010101050505050505050505050505050505050505050505050505050505050505050505020101010205050505050505050505050505050101010101010101050505050505050505050505050505050505050505050505050505050505050505020101010205050505050505050505050509090909090909010101090909090909090909090909090909090909090909090909090909090909090909090e0e0e09090909090909090909090909090909090909090d0d0d0909090909090909090909090909090909090909090909090909090909090909090901010109090909090909090909090909090909090909090101010909090909090909090909090909090909090909090909090909090909090909090901010109090909090909090909090909090907070707070808080707070707070707070707070707070707070707070707070707070707070707070708080807070707070707070707070707070707070707070808080707070707070707070707070707070707070707070707070707070707070707070708080807070707070707070707070707070707070707070808080707070707070707070707070707070707070707070707070707070707070707070708080807070707070707070707070707070707070707070808080707070707070707070707070707070707070707070707070707070707070707070708080807070707070707070707070707070707070707070808080707070707070707070707070707070707070707070707070707070707070707070708080807070707070707070707070707070707070707070808080707070707070707070707070707070707070707070707070707070707070707070708080807070707070707070707070707070707070707070808080707070707070707070707070707070707070707070707070707070707070707070708080807070707070707070707070707070707070707070808080707070707070707070707070707070707070707070707070707070707070707070708080807070707070707070707070707070707070707070808080707070707070707070707070707070707070707070707070707070707070707070708080807070707070707070707070707070707070707070808080707070707070707070707070707070707070707070707070707070707070707070708080807070707070707070707070707070707070707070808080b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0606060606060b0b0b0b0b0b01010107070707070707070707070707070707070b0b0b0101010b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0606060606060a0a0a0a0a0a010101070b0b0b0b0b0b0b0b0b0707070707070b0b0b0b0101010b0b0b0a0a0a0a0a0a0a0606060a0a0a0a0a0a0606060606060606060a0a0a0a0a0a0101010b0b0b0b0b0b0b0b0b0b0b0b0b0707070b0b0b0b0101010a0a0a0a0a0a0a0a0a060606060a0a0a0a0a0a0606060606060606060a0a0a0a0a0a0101010b0b0b0b0b0b0b0b0b0b0b0b0b07070b0b0b0a0a0101010a0a0a0a0a0a0a0a06060606060a0a0a0a0a0a0606060606060606060a0a0a0a0a0a0101010a0a0a0a0b0b0b0b0b0b0b0b0b070b0b0a0a0a0a0101010a0a0a0a0a0a0a0a06060606060a0a0a0a0a0a0606060606060606060a0a0a0a0a0a0101010a0a0a0a0a0a0a0b0b0b0b0b0b070b0a0a0a0a0a0101010101010101010101060606060a0a0a0a0a0a0a0606060606060606060a0a0a0a0a0a0101010a0a0a0a0a0a0a0a0a0b0b0b0b0b0a0a0a0a0a0a010101010101010101010101010101010101010101010606060606060606060a0a0a0a0a0a0101010a0a0a0a0a0a0a0a0a0a0a0a0b0a0a0a0a0a0a0a01010101010101010101010101010101010101010101010101010101010101010a0a0a0a0a0101010a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a060606060a010101010101010101010101010101010101010101010101010101010101010a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a060606060a0a0a0a0a0a0a0a0a0a0a0a01010101010101010101010101010101010101010a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0606060a06060606060a0a0a0a0a0a0a0a0a0a0a0a0a060606060606060606010101010101010101010a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a06060606060606060a0a0a0a0a0a0a0a0a0a0a0a0a0a06060606060606060606060a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a060606060606060a0a0a0a0a0a0a0a0a0a0a0a0a0a0a06060606060606060606060a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a`, img`
    222222222222222222222222222222222222222222222222222222222222
    2222222222.......................................22222222222
    2222222222.2222222222222222222222222222222222222.22222222222
    2222222222.2...................................2.22222222222
    2222222222.2.222222222222222222222222222222222.2.22222222222
    2222222222.2.2...............................2.2.22222222222
    2222222222.2.2...................22222222222.2.2.22222222222
    2222222222.2.2.....................222222222.2.2.22222222222
    2222222222.2.222222222222222222222.222222222.2.2.22222222222
    2222222222.2.....................2.222222222.2.2.22222222222
    2222222222.222222222222222222222.2.222222222.2.2.22222222222
    2222222222.....................2.2.222222222.2.2.22222222222
    222222222222222222222222222222.2.2.222222222.2.2.22222222222
    222222222222222222222222222222.2.2.222222222.2.2.22222222222
    2..............2............22.2.2.222222222.2.2.22222222222
    2.2222222222222222222222222.22.2.2.22222222..2.2.22222222222
    2.2.......................2.22.2.2.22222222.2..2.22222222222
    2.2.222222222222222222222.2.22.2.2.22222222.2.22.22222222222
    2.2.2..........2........2.2.22.2.2.22222222.2.2..22222222222
    2.2.2.22222222222222222.2.2....2.2.22222222.2.2.222222222222
    2.2.2.22222222222222222.2.222222.2.22222222.2.2.222222222222
    2.2.2.22222222222222222.2........2.22222222.2.2.222222222222
    2.2.2.22222222222222222.2222222222.22222222.2.2.222222222222
    2.222.22222222222222222............22222222.2.2.222222222222
    2.2.2.2222222222222222222222222222222222222.2.2.222222222222
    2.2.2.2222222222222222222222222222222222222.2.2.222222222222
    222.222222222222222222222222222222222222222.2.2.222222222222
    222.222222222222222222222222222222222222222.2.2.222222222222
    222.222222222222222222222222222222222222222.2.2.222222222222
    222.222222222222222222222222222222222222222.2.2.222222222222
    222.222222222222222222222222222222222222222.2.2.222222222222
    222......2222222222222222222222222222222222.2.2.222222222222
    22222222.2222222222222222222222222222222222.2.2.222222222222
    22222222.222222222222222222222222222222222222.22222222222222
    22222222.222222222222222222222222222222222222.22222222222222
    22222222.222222222222222222222222222222222222.22222222222222
    22222222.222222222222222222222222222222222222.22222222222222
    22222222.222222222222222222222222222222222222.22222222222222
    22222222.222222222222222222222222222222222222.22222222222222
    22222222.222222222222222222222222222222222222.22222222222222
    22222222.222222222222222222222222222222222222.22222222222222
    22222222.222222222222222222222222222222222222.22222222222222
    22222222.222222222222222222222222222222222222.22222222222222
    22222222.222222222222222222222222222222222222.22222222222222
    22222222.222222222222222222222222222222222222.22222222222222
    22222222.222222222222222222222222222222222222.22222222222222
    22222222.2......................222222......2.22222222222222
    2222...2.2......................222222......2.22.........222
    222....2.2..........222......222222222......2.2.............
    222....2.2.........2222......222222222......2.2.............
    22.....2.2........22222......222222222......2.2.............
    2......2.2........22222......222222222......2.2.............
    2......2.2222222222222.......222222222......2.2.............
    .......2.........222222222222222222222.....22.2.............
    ......2222222222.............2222222222.....2.2.............
    ...........2222.222222222222...........222222.2.............
    ...........2222............22222222222........2.............
    ......222.22222.............2222222222222222222.............
    ......22222222..............22222222222.....................
    ......2222222...............22222222222.....................
    `, [myTiles.transparency16,myTiles.tile27,myTiles.tile47,myTiles.tile1,myTiles.tile5,myTiles.tile49,myTiles.tile15,myTiles.tile29,myTiles.tile34,myTiles.tile48,sprites.castle.tileGrass1,sprites.castle.tilePath5,myTiles.tile6,myTiles.tile7,myTiles.tile8], TileScale.Sixteen)),
tiles.createMap(tiles.createTilemap(hex`3c003c000c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0101010101010101010101010101010101010101010101010101010101010101010101010101010101010c0c060606060606060606060606040606070707070707070707070707070707070707070707080101010101010101010101010101010101010101010c0c060606060606060606060606040606070707070707070707070707070707070707070708090101010101010101010101010101010101010101010c0c020202060606060606060606040707070707070707070707070707070707070707070809090101010101010101010101010101010101010101010c0c0202020c0c0c0c0c0c0c0c0c0c0101010101010101010101010101010101010101010909090101010101010101010101010101010101010101010c0c0303030c0c0c0c0c0c0c0c0c010101010101010101010101010101010101010101010909090101010101010101010101010101010101010101010c0c0202020c0c0c0c0c0c0c0c01010101010101010101010101010101010101010101010909090101010110070707070707070708010101010101010c0c0202020c0c0c0c0c0c0c010101010101010101010101010101010101010101010101090909010101010f100707070707070809010101010101010c0c0202020c0c0c0c0c0c01010101010101010101010101010101010101010101010101090909010101010f0f1007070707080909010101010101010c0c0202020c0c0c0c0c0101010101010101010101010101010101010101010101010101090909010101010f0f0f01010101090909010101010101010c0c0202020c0c0c01010101010101010101010101010101010101010101010101010101090909010101010f0f0f01010101090909010101010101010c0c0505050c010101010101010101010101010d0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0b0909010101010f0f0f010101010909090101010101010101010f0f0f0101010101010101010101010101090d0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0b09010101010f0f0f010101010909090101010101010101010f0f0f010101010101010101010101010109090d0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0b010101010f0f0f010101010909090101010101010101010f0f0f01010101010101010101010101010909090101010101010101010101010101010101010101010f0f0f010101010909090101010101010101010f0f0f010101010101010101010101010109090901010101010101010101010a0a0a0a0101010101010f0f0f010101010909090101010101010101010f0f0f0101010101010101010101010101090909010101010101010101010a0a0a0a0a0a01010101010f0f0f010101010909090101010101010101010f0f0f01010101010101010101010101010909090a0a0a0a0a0a0a0a0a0a0a0a01010a0a0a0a0a0a0a0f0f0f010101010909090101010101010101010f0f0f01010101010101010101010101010909090a0a0a0a0a0a0a0a0a0a0a0a01010a0a0a0a0a0a0a0f0f0f010101010909090101010101010101010f0f0f0101010101010101010101010101090909010101010101010101010a0a0a0a0a0a01010101010f0f0f010101010909090101010101010101010f0f0f010101010101010101010101010109090901010101010101010101010a0a0a0a0101010101010f0f0f010101010909090101010101010101010f0f0f010101010101010101010101010109090e0707070707070708010101010101010101010101010f0f0f010101010909090101010101010101010f0f0f0101010101010101010101010101090e070707070707070809010101010101010101010101010f0f0f010101010909090101010101010101010f0f0f01010101010101010101010101010e07070707070707080909010101010101010101010101010f0f0f010101010909090101010101010101010f0f0f01010101010101010101010101010101010101010101090909010101010101010101010101010f0f0f010101010909090101010101010101010f0f0f0101010101010101010101010101010101010101010109090e07070707070707070707070707120f0f010101010909090101010101010101010f0f0f01010101010101010101010101010101010101010101090e070707070707070707070707070707120f010101010909090101010101010101010f0f0f010101010101010101010101010101010101010101010e070707070707070707070707070707070712010101010909090101010101010101010f0f0f0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010909090101010101010101010f0f0f0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010909090101010101010101010f0f110a0a0a0a0a0a0a0a0a0a0a0a1301010101010101010101010101010101010101010101010101010101010101010909090101010101010101010f110a0a0a0a0a0a0a0a0a0a0a0a130f0101010101010101010101010101010101010101010101010101010101010101090909010101010101010101110a0a0a0a0a0a0a0a0a0a0a0a130f0f0101010101010101010101010101010101010101010101010101010101010101090909010101010101010101010101010101010101010101010f0f0f0101010101010101010101010101010101010101010101010101010101010101090909010101010101010101010101010101010101010101010f0f0f0101010101010101010101010101010101010101010101010101010101010101090909010101010101010101010101010101010101010101010f0f0f0101010101010101010101010101010101010101010101010101010101010101090909010101010101010101010101010101010101010101010f0f0f0101010101010101010101010101010101010101010101010101010101010101090909010101010101010101010101010101010101010101010f0f0f0101010101010101010101010101010101010101010101010101010101010101090909010101010101010101010101010101010101010101010f0f0f0101010101010101010101010101010101010101010101010101010101010101090909010101010101010101010101010101010101010101010f0f0f0101010101010101010101010101010101010101010101010101010101010101090909010101010101010101010101010101010101010101010f0f0f0101010101010101010101010101010101010101010101010101010101010101090909010101010101010101010101010101010101010101010f0f0f0101010101010101010101010101010101010101010101010101010101010101090909010101010101010101010101010101010101010101010f0f0f0101010101010101010101010101010101010101010101010101010101010101090909010101010101010101010101010101010101010101010f0f0f0101010101010101010101010101010101010101010101010101010101010101090909010101010101010101010101010101010101010101010f0f0f0101010101010101010101010101010101010101010101010101010101010101090909010101010101010101010101010101010101010101010f0f0f0101010101010101010101010101010101010101010101010101010101010101090909010101010101010101010101010101010101010101010f0f0f0101010101010101010101010101010101010101010101010101010101010101090909010101010101010101010101010101010101010101010f0f0f0101010101010101010101010101010101010101010101010101010101010101090909010101010101010101010101010101010101010101010f0f0f0101010101010101010101010101010101010101010101010101010101010101090909010101010101010101010101010101010101010101010f0f0f0101010101010101010101010101010101010101010101010101010101010101090909010101010101010101010101010101010101010101010f0f0f0101010101010101010101010101010101010101010101010101010101010101090909010101010101010101010101010101010101010101010f0f0f0101010101010101010101010101010101010101010101010101010101010101090909010101010101010101010101010101010101010101010f0f0f0101010101010101010101010101010101010101010101010101010101010101090909010101010101010101010101010101010101010101010f0f110a0a0a0a0a0a0a0a0a0a140a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0b0909010101010101010101010101010101010101010101010f110a0a0a0a0a0a0a0a0a0a0a140a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0b0901010101010101010101010101010101010101010101110a0a0a0a0a0a0a0a0a0a0a0a140a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0b01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
    222222222222222222..........................................
    222222222222222222222222222222222222222.....................
    222...................................2.....................
    222.222222222222222222222222222222222.2.....................
    222.22222222222.....................2.2.....................
    22222222222222......................2.2.....................
    222.222222222.......................2.2....2222222222.......
    222.22222222........................2.2....2........2.......
    222.2222222.........................2.2....2.222222.2.......
    222.222222..........................2.2....2.2....2.2.......
    222.2222............................2.2....2.2....2.2.......
    222.22.............222222222222222222.2....2.2....2.2.......
    ..2.2..............2..................2....2.2....2.2.......
    ..2.2..............2.222222222222222222....2.2....2.2.......
    ..2.2..............2.2.....................2.2....2.2.......
    ..2.2..............2.2.....................2.2....2.2.......
    ..2.2..............2.2.....................2.2....2.2.......
    ..2.2..............2.22....................2.2....2.2.......
    ..2.2..............2.22....................2.2....2.2.......
    ..2.2..............2.2.....................2.2....2.2.......
    ..2.2..............2.2.....................2.2....2.2.......
    ..2.2..............2.222222222.............2.2....2.2.......
    ..2.2..............2.........2.............2.2....2.2.......
    ..2.2..............222222222.2.............2.2....2.2.......
    ..2.2......................2.2.............2.2....2.2.......
    ..2.2......................2.222222222222222.2....2.2.......
    ..2.2......................2.................2....2.2.......
    ..2.2......................2222222222222222222....2.2.......
    ..2.2.............................................2.2.......
    ..2.2.............................................2.2.......
    ..2.22222222222222................................2.2.......
    ..2..............2................................2.2.......
    ..22222222222222.2................................2.2.......
    ...............2.2................................2.2.......
    ...............2.2................................2.2.......
    ...............2.2................................2.2.......
    ...............2.2................................2.2.......
    ...............2.2................................2.2.......
    ...............2.2................................2.2.......
    ...............2.2................................2.2.......
    ...............2.2................................2.2.......
    ...............2.2................................2.2.......
    ...............2.2................................2.2.......
    ...............2.2................................2.2.......
    ...............2.2................................2.2.......
    ...............2.2................................2.2.......
    ...............2.2................................2.2.......
    ...............2.2................................2.2.......
    ...............2.2................................2.2.......
    ...............2.2................................2.2.......
    ...............2.2................................2.2.......
    ...............2.2................................2.2.......
    ...............2.2................................2.2.......
    ...............2.2222222222222222222222222222222222.2.......
    ...............2....................................2.......
    ...............22222222222222222222222222222222222222.......
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    `, [myTiles.transparency16,myTiles.tile57,myTiles.tile1,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile27,myTiles.tile52,myTiles.tile54,myTiles.tile55,myTiles.tile58,myTiles.tile59,myTiles.tile62,myTiles.tile63,myTiles.tile64,myTiles.tile51,myTiles.tile53,myTiles.tile61,myTiles.tile65,myTiles.tile66,myTiles.tile67], TileScale.Sixteen))
]
list2 = [
tiles.createMap(tiles.createTilemap(hex`280028000c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c04040404040404040404040409040404040404040404040404040404040404040c0c0c0c0c0c0c0401010101010101010101010107010101010101010101010101010101010101040c0c0c0c0c0c040101030103010301030103010307030103010301030103010103010301030101040c0c0c0c0c0c040101010101010101010101010107010101010101010101010101010101010101040c0c0c0c0c0c040101010104040404040404040409040404040404040404040404040404010201040c0c0c0c0c0c04010201040c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c06010101060c0c0c0c0c0c04010101040c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c04010101040c0c0c0c0c0c04010201040c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c04010201040c0c0c0c0c0c04010101040c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c04010101040c0c0c0c0c0c04010201040c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c04010201040c0c0c0c0c0c04010101040c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c04010101040c0c0c0c0c0c04010201040c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c04010201040c0c0c0c0c0c04010101040c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c04010101040c0c0c0c0c0c04050505040404040404040404040404040404040404040c0c0c0c0c0c04010201040c0c0c0c0c0c04010101010101010101010101010101010101010101040c0c0c0c0c0c04010101040c0c0c0c0c0c04010201030103010301030103010301030103010201040c0c0c0c0c0c04010201040c0c0c0c0c0c04010101010101010101010101010101010101010101040c0c0c0c0c0404010101040c0c0c0c0c0c04040404040404040404040404040404040404010201040c0c0c0c0c0401010201040c0c0c0c0c0c0c0c0c0c0c0c0c040c0c0c0c0c0c0c0c0c0c04010101040c0c0c0c0c0401010101040c0c0c0c0c0c0c0c0c0c0c0c0c040c0c0c0c0c0c0c0c0c0c04010201040c0c0c0c0c0401010201040c0c0c0c0c0c0c0c0c0c0c0c0c040c0c0c0c0c0c0c0c0c0c04010101040c0c0c0c0c0401010101040c0c0c0c0c0c0c0c0c0c0c0c0c040c0c0c0c0c0c0c0c0c0c04010201040c0c0c0c0c0401010201040c0c0c0c0c0c0c0c0c0c0c0c0c040c0c0c0c0c0c0c0c0c0c04010101040c0c0c0c0c0401010101040c0c0c0c0c0c0c0c0c0c0c0c04040404040404040404040404010201040c0c0c0c0c0401010201040c0c0c0c0c0c0c0c0c0c0c0c04010101010101010101010101010101040c0c0c0c0c0b080808080b0c0c0c0c0c0c0c0c0c0c0c0c0401020103010301030103010301020104040c0c0c0c0401010201040c0c0c0c0c0c0c0c0c0c0c0c0401010101010101010101010101010104040c0c0c0c0401010101040c0c0c0c0c0c0c0c0c0c0c0c0401020104040404040404040404040404040c0c0c040401010201040c0c0c0c0c0c0c0c0c0c0c0c060a0a0a060c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c040101020101040c0c0c0c0c0c0c0c0c0c0c0c04010201040c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c040102010104040c0c0c0c0c0c0c0c0c0c0c0c04010101040c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c04010101040c0c0c0c0c0c0c0c0c0c0c0c0c0c04010201040c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c04010201040c0c0c0c0c0c0c0c0c0c0c0c0c0c04010101040c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c04010101040c0c0c0c0c0c0c0c0c0c0c0c0c0c04010201040c0c0c0c0c0c0404040404040404040404010201040c0c0c0c0c0c0c0c0c0c0c0c0c0c04010101040404040404040401010101010101010101010101040c0c0c0c0c0c0c0c0c0c0c0c0c0c04010201010101010101010101030103010301030103010201040c0c0c0c0c0c0c0c0c0c0c0c0c0c04010103010301030103010301010101010101010101010101040c0c0c0c0c0c0c0c0c0c0c0c0c0c04010101010101010101010101010404040404040404040404040c0c0c0c0c0c0c0c0c0c0c0c0c0c04040404040404040404040404040c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c`, img`
    2222222222222222222222222222222222222222
    22222................................222
    2222.................................222
    222..................................222
    222..................................222
    222..................................222
    222.....222222222222222222222222.....222
    222.....222222222222222222222222.....222
    222.....222222222222222222222222.....222
    222.....222222222222222222222222.....222
    222.....222222222222222222222222.....222
    222.....222222222222222222222222.....222
    222.....222222222222222222222222.....222
    222.....222222222222222222222222.....222
    222.......................222222.....222
    222.......................222222.....222
    222.......................222222.....222
    222.......................22222......222
    222.......................22222......222
    2222222222.2222222222.....22222......222
    2222222222.2222222222.....22222......222
    2222222222.2222222222.....22222......222
    2222222222.2222222222.....22222......222
    2222222222.2222222222.....22222......222
    222222222.................22222......222
    222222222.................22222......222
    222222222..................2222......222
    222222222..................2222......222
    222222222..................222.......222
    222222222.....2222222222222222.......222
    222222222.....2222222222222222.......222
    222222222.....2222222222222222.....22222
    222222222.....2222222222222222.....22222
    222222222.....2222222222222222.....22222
    222222222.....222222...............22222
    222222222..........................22222
    222222222..........................22222
    222222222..........................22222
    222222222..........................22222
    222222222..............22222222222222222
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile4,sprites.castle.tileGrass1,myTiles.tile5,myTiles.tile13,myTiles.tile6,myTiles.tile8,myTiles.tile10,myTiles.tile7,myTiles.tile11,myTiles.tile15], TileScale.Sixteen)),
tiles.createMap(tiles.createTilemap(hex`32003c0004040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404060606060606060606060606060606060606060606060606060606060606060606060404040404040404040404040404040406010101010101010101010103010101010101010101010101010101010101010101060606040404040404040404040404040601010108010801080108010308010801080108010801080108010801080108010101010604040404040404040404040404060107010101010101010101030101010101010101010101010101010101010101080101060404040404040404040404040406010101060606060606060606060601010606060606060606060606060606060601070106040404040404040606060606060601070106040404040404040404040101040404040404040404040404040404060101010604040404040404060101010101010101010604040404040404040404010104040404040101010101010404040406010701060404040404040406010101080108010801060404040404040404040401010404040404010101010101040404040601010106040404040404040601070101010101010106040404010101010101010101040404040401010404010104040404060107010604040404040404060101010606060606060604040401010101010101010104040404040101040401010404040406010101060404040404040406010701060505050505050404040101040404040404040404040404010104040101040404040601070106040404040404040601010106040404040404040404010104040404040404040404040401010404010104040404060101010604040404040404060202020604040404040404040401010101010101010101010101010101040401010404040406010701060404040404040406010701060404040404040404040101010101010101010101010101010104040a0a040404040b0a0a0a0b040404040404040601010106040404040404040404040404040404040404040404040404040404010104040404060107010604040404040404060107010604040404040404040404040404040404040404040404040404040401010404040406010101060404040404040406010101060404040404040404040404040404040404040404040404040404040101040404040601070106040404040404060601070106040404040404040404040404040404040404040404040404040404010104040404060101010604040404040406010101010604040404040404040404040404040404040404040404040404040601010606060606010701060404040404040601070101060404040606060606060606060606060606060606060404040404060101010101010101010106040404040404060101010606040404060101010101010101010101010101010106060404040406010101010101080108010604040404040406010701060404040606010101080108010801080108010801010106040404040601010101010701010101060404040404040601010106040404060101010101010101010101010101010107010606040404060606060601010106060606040404040406060107010604040406010701010606060606060606060606010101010606040404040404060107010604040404040404040601010101060404060601010106040404040404040404040601010701010604040404040406010101060404040404040404060107010106040406010101010604040404040404040404060601010101060604040404040601070106040404040404040406010101060604040601070101060404040404040404040404060601070101060604040404060101010604040404040404040601070106040406010101010606040404040404040404040404060101010106060404040406010701060606060606060404060101010604040601010101060404040404040404040404040406060107010106040404040601010101010101010106040406010701060404060107010606040404040404040404040404040406010101010606040404060107010801080108010604060601010106040601010101060404040404040404040404040404040c0c090909090c0c0404060101010101010101010604060101070106060601010101060404040404040404040404040404040406010101010106040406060606060606010701060406010101010606010107010604040606060606060404040404040404040606010107010606040404040404040601010106040601070106060601010101060401010101010106060606060404040404040606010101010604040404040404060107010604060101010606060107010606040101010801010101010106060606060404040601010701060604040404040406010101060406010701060601010101060404010701010108010801010101010106060606060601010101060604040404040601070106040601010106060107010106040601010106010101010108010801010101010106060107010101060404040404060101010604060107010101010101060604060107010606060606010101010108010801010101010101010106040404040406010701060406010101080108010106040406010101060404040606060606010101010108010801080101010604040404040601010106040606010101010101060604040601070106060404040404040606060606010101010101010101060404040404060107010604040406060606060606040404060101010106060604040404040404040606060606010101010106040404040406010101060404040404040404040404040406060107010101010606060404040404040404040406060606060604040404040601070106040404040404040404040404040406010108010801010101060606040404040404040404040404040404040404060101010604040404040404040404040404040406010101010108010101010106060604040404040404040404040404040406010701060404040404040404040404040404040406060601010101080108010101010606060404040404040404040404040601010106040404040404040404040404040404040404060606060101010101080101010101060606040404040404040404060107010604040404040404040404040404040404040404040406060606010101010801080101010106060604040404040406010101060404040404040404040404040404040404040404040404040606060601010101010801080101010606060404040601070106040404040404040404040404040404040404040404040404040404060606060601010101010801010101060606060101010604040404040404040404040404040404040404040404040404040404040406060606060101010108010801010101010701060404040404040404040404040404040404040404040404040404040404040404040406060606010101010108010801010106040404040404040404040404040404040404040404040404040404040404040404040404040606060601010101010107010604040404040404040404040404040404040404040404040404040404040404040404040404040404060606060101010101060404040404040404040404040404040404040404040404040404040404040404040404040404040404040406060606060606040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404`, img`
    22222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222222
    222222222..................................2222222
    222222222.....................................2222
    222222222.....................................2222
    222222222.....................................2222
    222222222.....................................2222
    222...........2222222222..222222222222222.....2222
    222...........2222222222..22222......2222.....2222
    222...........2222222222..22222......2222.....2222
    222...........222.........22222..22..2222.....2222
    222...........222.........22222..22..2222.....2222
    222.....222222222..222222222222..22..2222.....2222
    222.....222222222..222222222222..22..2222.....2222
    222.....222222222................22..2222.....2222
    222.....222222222................22..2222.....2222
    222.....222222222222222222222222222..2222.....2222
    222.....222222222222222222222222222..2222.....2222
    222.....222222222222222222222222222..2222.....2222
    22......222222222222222222222222222..2222.....2222
    22......22222222222222222222222222............2222
    22......222..................22222............2222
    22......222...................2222............2222
    22.....222....................2222............2222
    22.....222.....................222............2222
    2......222......................222222.....2222222
    2......22......2222222222.......222222.....2222222
    2......22......2222222222........22222.....2222222
    2......22......22222222222........2222.....2222222
    2.....22.......222222222222.......2222...........2
    2.....22......2222222222222.......2222...........2
    2.....22......22222222222222.......222...........2
    ......2......222222222222222........22...........2
    .............2222222222222222.......22...........2
    ............22......222222222........2222222.....2
    ............2...........222222.......2222222.....2
    ............2...............222.......222222.....2
    ...........22..........................22222.....2
    ...........2...........................22222.....2
    ...........2...........................22222.....2
    ..........22.....222...................22222.....2
    ..........22......222222...............22222.....2
    22.......222........22222222...........22222.....2
    222222222222...........2222222222......22222.....2
    2222222222222.............222222222222222222.....2
    22222222222222...............222222222222222.....2
    222222222222222.................222222222222.....2
    22222222222222222..................222222222.....2
    22222222222222222222..................222222.....2
    22222222222222222222222..................222.....2
    22222222222222222222222222.......................2
    22222222222222222222222222222....................2
    222222222222222222222222222222222................2
    222222222222222222222222222222222222.............2
    222222222222222222222222222222222222222..........2
    222222222222222222222222222222222222222222.......2
    22222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222222
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile5,myTiles.tile6,myTiles.tile15,myTiles.tile16,sprites.castle.tileGrass1,myTiles.tile2,myTiles.tile4,myTiles.tile7,myTiles.tile8,myTiles.tile11,myTiles.tile13], TileScale.Sixteen)),
tiles.createMap(tiles.createTilemap(hex`3c003c00040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040b0b0b04040404040408080808080808080808080808080808040404040404040404040404040404040404040404040404040404040404040404040b0b0b0b0b0404040404080808080808080808080808080808080404040404040404040404040404040404040404040404040404040404040404040404040604040404040404080808080808080808080808080808080404040404040404040404040404040404040404040404040404040404040404040b0b0b0b0b0b0b040404040808080404040404040404040408080804040404040404040404040404040404040404040404040404040404040404040b0b0b0b0b0b0b0b0b0404040808080404040404040404040408080804040404040404040404040404040404040404040404040404040404040404040b0b0b0b0b0b0b0b0b0404040808080404040404040404040408080804040404040404040404040404040404040404040404040404040404040404040404040406040404040404040808080404040404040404040408080804040404040404040404040404040404040404040404040404040404040404040404040406040404040404040808080404040404040404040408080804040404040404040404040404040404040404040404040404040404040406060607070706070707070708080808080404040404040404040408080804040404040404040404040404040404040404040404040404040404040606060607070707070707070708080808080404040404040404040408080804040404040404040404040404040404040404040404040404040404040606060607070707070707070708080808080404040808080808080808080804040404080808080808080808080808080404040404040404040404040406060607070706060606060604040404040404040808080808080808080804040404080808080808080808080808080404040404040404040404040404040408080804040404040404040404040404040808080808080808080804040404080808080808080808080808080404040404040404040404040404040408080804040404040404040404040404040808080404040404040804040404080808040404040404040808080404040404040404040404040404040408080804040404040404040404040404040808080404040404040804040404080808040404040404040808080404040404040404040404040404050501120105050404040404040404040404040808080404040404040804040404080808040404040404040808080404040404040404040404040404050f0c0c0c0f0504040404040404040404040408080804040404040408040404040808080404040404040408080804040404040404040404040404040503011201030504040404040404040404040408080804040404040408040404040808080404040404040408080808080808080808080808080404040503010101030504040404040404040404040408080804040404040408040404040808080404040404040408080808080808080808080808080404040503020202030504040404040404040404040408080804040404040408040404040808080404040404040408080808080808080808080808080404040503010101030504040404040404040404040408080808080808080808040404040808080404040404040404040404040404040404040808080404040503011201030504040404040404040404040408080808080808080808040404040808080404040404040404040404040404040404040808080404040503010101030504040404040404040404040408080808080808080808040404040808080404040404040404040404040404040404040808080404040505011201050504040404040404040404040404040404040404080808040404040808080404040404040404040404040404040404040808080404040404080808040404040404040404040404040404040404040404080808040404040808080404040404040404040404040404040404040808080404040404080808040404040404040404040404040404040404040404080808040404040808080404040404040404040404040404040404040808080404040404080808040404040404040404040404040404040404040404080808040404040808080404040404040404040404040404040404040808080404040404080808040404040404040404040404040404040404040404080808040404040808080404040404040404040404040404040404040808080404040404080808040404040404040404040404040404040404040404080808040404040808080404040404040404040404040404040404040808080404040404080808040404040404040404040404040404040404040404080808040404040808080404040404040404040404040404040404040808080404040408080804040404040404040404040404040404040404040404080808040404040808080404040404060604040404040404040404040a120a050505050a120a04040404040404040404040404040404040404040404080808040404040808080404040406060606040404040404040404040a0a0a030303030a0a0a05040404040404040404040404040404040404040404080808040404040808080404040606060606060404040404040404050a120a030303030a120a05040404040404040404040404040404040404040404080808040404040808080404040606060606060404040404040404050a0a0a030303030a0a0a05040404040404040404040404040409050505050505011201050505050808080406060606060606060606040404040404050a120a0a0a0a0a0a120a050404040404040404040404040405091010101010100e0e0e101010100808070606060606060606060606060404040404050a0a130a130a130a0a0a05040404040404040404040505050509030303030303011201030303030807070606060606060606060606060604040404050a0a0a0a0a0a0a0a0a0a0504040404040404040405050909090903030303030301010103030303070707060606060606060606060606060604040405050503030303030303050504040404040404040505090909090903030303030301120103030303070707060606060606060606060606060604040404050505050505050505050404040404040404050509090909090903030303030301010103030303070707070707070707060606060606060604040404050505050505050505040404040404040404050909090909090903030303030301120103030303070707070707070707060606060606060604040404040404040404040404040404040404040405050909090909090903030303030301010103030303070707070707070707060606060606060604040404040404040404040404040404040404040505090909090909090903030303030301120103030303060606060606070707060606060606060604040404040404040404040404040404040404040509090909090909090903030303030301010103030303060606060606070707060606060606060604040404040404040404040404040404040404040509090909090909090903030303030301120103030303060606060606070707060606060606060604040404040404040404040404040404040404050509090909090909090903030303030301010103030303060606060606070707060606060606060604040404040404040404040404040404040404090909090909090903030303030303030301120103030303060606060606070707060606060606060604040404040404040404040404040404040505051103030303030303030303030303030301010103030303060606060606070707060606060606060604040404040404040505050505050505050503031103030303030303030303030303030301120103030303060606060606070707070707070707070708080808080808010101010101010101010101010d01010101010101010101010101010101010103030303060606060606070707070707070707070708080808080808130113011301130113011301130d13011301130113011301130113011301130103030303060606060606070707070707070707070708080808080808010101010101010101010101010d01010101010101010101010101010101010103030303060606060606060606060606060606060604040404040404030303030303030303030303031103030303030303030303030303030303030303030303`, img`
    222222222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222................2222
    2222222222222222222222222222222222222222................2222
    2222222222222222222222222222222222222222................2222
    2222222222222222222222222222222222222222...2222222222...2222
    2222222222222222222222222222222222222222...2222222222...2222
    2222222222222222222222222222222222222222...2222222222...2222
    2222222222222222222222222222222222222222...2222222222...2222
    2222222222222222222222222222222222222222...2222222222...2222
    22222222222222222222222222222...2..........2222222222...2222
    22222222222222222222222222222..............2222222222...2222
    22222222222222222222222222222..............222..........2222
    .............2222222222222222...22222222222222..........2222
    .............2222222222222222...22222222222222..........2222
    .............2222222222222222...22222222222222...222222.2222
    ...2222222...2222222222222222...22222222222222...222222.2222
    ...2222222...22222222222222.......222222222222...222222.2222
    ...2222222...22222222222222.......222222222222...222222.2222
    ...2222222...22222222222222.......222222222222...222222.2222
    ...2222222..............222.......222222222222...222222.2222
    ...2222222..............222.......222222222222...222222.2222
    ...2222222..............222.......222222222222..........2222
    ...222222222222222222...222.......222222222222..........2222
    ...222222222222222222...222.......222222222222..........2222
    ...222222222222222222...222.......2222222222222222222...2222
    ...222222222222222222...22222...222222222222222222222...2222
    ...222222222222222222...22222...222222222222222222222...2222
    ...222222222222222222...22222...222222222222222222222...2222
    ...222222222222222222...22222...222222222222222222222...2222
    ...222222222222222222...22222...222222222222222222222...2222
    ...222222222222222222...22222...222222222222222222222...2222
    ...222222222222222222...2222...2222222222222222222222...2222
    ...222222222222222222..........2222222222222222222222...2222
    ...222222222222222222...........222222222222222222222...2222
    ...22222222222222222............222222222222222222222...2222
    ...22222222222222222............222222222222222.............
    ...22222222222222222............2222222222222.2.............
    ...22222222222222222............2222222222....2.............
    ...22222222222222222............222222222..2222.............
    ...22222222222222222............22222222..22222.............
    ...222222222222222222..........22222222..222222.............
    .........222222222222.........222222222.2222222.............
    .........22222222222222222222222222222..2222222.............
    .........2222222222222222222222222222..22222222.............
    222222...2222222222222222222222222222.222222222.............
    222222...2222222222222222222222222222.222222222.............
    222222...222222222222222222222222222..222222222.............
    222222...22222222222222222222222222222222222................
    222222...2222222222222222222222222..........................
    222222...2222222222222222...................................
    222222......................................................
    222222......................................................
    222222......................................................
    22222222222222222...........................................
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile5,sprites.castle.tileGrass1,myTiles.tile29,sprites.castle.tilePath5,myTiles.tile30,myTiles.tile33,myTiles.tile34,myTiles.tile15,myTiles.tile27,myTiles.tile35,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile10,myTiles.tile11,myTiles.tile13,myTiles.tile2,myTiles.tile4], TileScale.Sixteen)),
tiles.createMap(tiles.createTilemap(hex`3c003c00040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404090909090909090404040404040404040404040404040404040404040404040404040404040c0c0c0c0c0c0c0c0c0c0c040404040404040404040909090909090909090404040404040404040404040404040404040404040404040404040404040c0c0c0c0c0c0c0c0c0c0c040404040404040409090909090909090909090404040404040404040404040404040404040404040404040404040404040c0c0c0c0c0c0c0c0c0c0c040404040404090909090909090909090909090404040404040404040404040404040404040404040404040404040404040c0c0c04040404040c0c0c0c0c0c0c0b0b0b0b0b0b0b09090909090909090404040404040404040404040404040404040404040404040404040404040c0c0c04040404040c0c0c0c0c0b0b0b0b0b0b0b0b0b09090909090909090404040404040404040404040404040404040404040c0c0c0c0c0c0c0c0c0c0c0c04040404040c0c0c0b0b0b0b0b0b0b0b0b0b0a0a0a0a0a0a0a0a0a0c0c0c0c0c0c0c0c0c0c0c040404040404040404040c0c0c0c0c0c0c0c0c0c0c0c04040404040404090909090909090909090b0a0a0a0a0a0a0a0a0a0c0c0c0c0c0c0c0c0c0c0c040404040404040404040c0c0c0c0c0c0c0c0c0c0c0c04040404040c0c0c0b0b0b0b0b0b0b0b0b0b0a0a0a0a0a0a0a0a0a0c0c0c0c0c0c0c0c0c0c0c040404040404040404040c0c0c0404040404040c0c0c04040404040c0c0c0c0c0b0b0b0b0b0b0b0b0b090909090909090904040404040404040c0c0c040404040404040404040c0c0c0404040404040c0c0c04040404040c0c0c0c0c0c0c0b0b0b0b0b0b0b090909090909090904040404040404040c0c0c040404040404040404040c0c0c0404040404040c0c0c0c0c0c0c0c0c0c0c0404040404040909090909090909090909090904040404040404040c0c0c040404040404040404040c0c0c0c0c0c0c04040c0c0c0c0c0c0c0c0c0c0c0404040404040404090909090909090909090904040404040404040c0c0c040404040404040404040c0c0c0c0c0c0c04040c0c0c0c0c0c0c0c0c0c0c0404040404040404040409090909090909090904040404040404040c0c0c040404040404040404040c0c0c0c0c0c0c040404040404040404040404040404040404040404040404040909090909090904040404040404040c0c0c04040404040404040404040404040c0c0c040404040404040404040404040404040404040404040404040404040c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0404040404040404040c0c0c0c0c0c0c0c040404040404040404040404040404040404040404040404040404040c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0404040404040404040c0c0c0c0c0c0c0c040404040404040404040404040404040404040404040404040404040c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0404040404040404040c0c0c0c0c0c0c0c040404040404040404040404040404040404040404040404040404040c0c0c0404040404040404040404040404040404040404040c0c0c0404040404040404040404040404040404040404040404040404040404040404040c0c0c0404040404040404040404040404040404040404040c0c0c0404040404040404040404030303030304040404040404040404040404040404040c0c0c0404040404040404040404040404040303030404040c0c0c0404040404040404040303030303030303030304040404040404040404040404040c0c0c0404040404040404040404040404030303030404040c0c0c0404040404040403030303030303030303030303030303030303030303030303030c0c0c0404040404040404040404040403030303030304040c0c0c040404040404030303030303030303030303030303030303030303030303030303080808030303030303030303030303030303030303030303011101030303030303030303030303030303030303030303030303030303030303030303081108030303030303030303030303030303030303030303010101030303030303030303030303030303030303030303030303030303030303030303080808030303030303030303030303030303030303030303011101030303030303030303030101010101010101010101010101010303030303030303081108030303030303030808080808080803030303030303010101030303030303030303030111011201120112011201120112010303030303030303080808080808080805080812081208120803030303030303011101030303030303030303030101010101010101010101010101010303030303030303081108120812081205120808080808080803030303030303010101030303030303030303030111010303030303030303030111010303030303030303080808080808080805080808030308110803030303030303011101030303030303030303030101010303030303030303030101010303030303030303030303030303030303030303030308080803030303030303010101030303030303030303030111010303030303030303030111010303030303030303030303030303030303030303030301110103030303030303011101030303030303030303030101010d0e0e0e0e0e0e0e0d0101010d0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0d0808080808080808080d0e0e0d0101010d0e0e0e0e0e0e0e0e0d0111010d0e0e0e0e0e0e0e0d0111010d0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0d0811081208120811080d0e0e0d0111010d0e0e0e0e0e0e0e0e0d0101010d0e0e0e0e0e0e0e0d0101010d0e0e0d0d0d0d0d0d0d0d0d0e0e0e0e0e0e0d0808080808080801080d0e0e0d0101010d0e0e0e0e0e0e0e0e0d0111010d0e0e0e0e0e0e0e0d0111010d0e0e0d010101010101010d0d0d0e0e0e0e0d0811080e0e0e0811080d0e0e0d0111010d0e0e0e0e0e0e0e0e0d0101010d0e0e0e0e0e0e0e0d0101010d0e0e0d0111011201120101010d0e0e0e0e0d0808080e0e0e0801080d0e0e0d0101010f0d0d0d0d0d0d0d0d0d0111010d0e0e0e0e0e0e0e0d0111010d0e0e0d0101010101011201010d0e0e0e0e0d0811080e0e0e0811010d0e0e0d011101070101010101010101010101010d0e0e0e0e0e0e0e0d0101010d0e0e0d0111010e0e010101010d0e0e0e0e0d0808080808080808010d0e0e0d010112071201120112011201120111010d0e0e0e0e0e0e0e0d0111010d0e0e0d0101010e0e0e0111010d0e0e0e0e0d0812081208120812010d0e0e0d010101070101010101010101010101010d0e0e0e0e0e0e0e0d0101010d0d0d0d0111010e0e0e0101010d0e0e0e0e0d0808080811080808010d0e0e0d0d0d0d0f0d0d0d0d0d0d0d0d0d0d0d0d0d0e0e0e0e0e0e0e0d011101010101010101010e0e0e0111010d0e0e0e0e0d0d0d0d0101010d0d0d0d0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0d010112011201120111010e0e0e0101010d0e0e0e0e0e0e0e0d0111010d0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0d010101010101010101010e0e0e0111010d0e0e0e0e0e0e0e0d0101010d0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0101010d0e0e0e0e0e0e0e0d0111010d0e0e0e0e0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d100d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0111010d0e0e0e0e0e0e0e0d0101010d0e0e0e0e0d0808080808080801010101010101010101010106010101010101010101010101010101010101010101010d0e0e0e0e0e0e0e0d0111010d0e0e0e0e0d0811081208081201120112011201120112011206120112011201120112011201120112011201120112010d0e0e0e0e0e0e0e0d0101010d0e0e0e0e0d0808080808080801010101010101010101010106010101010101010101010101010101010101010101010d0e0e0e0e0e0e0e0d0111010d0e0e0e0e0d0811080d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d100d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0e0e0e0e0e0e0e0d0101010d0e0e0e0e0d0808080e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0d0202020d0e0e0e0e0d0811080d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0101010d0e0e0e0e0d0808080808080808080808080808080808080808080808080808080808080808080808080808080808080808010101010101010111010d0e0e0e0e0d0811081208120812081208120812081208120812081208120812081208120812081208120812081208120112011201120112011201010d0e0e0e0e0d0808080808080808080808080808080808080808080808080808080808080808080808080808080808080808010101010101010101010d0e0e0e0e0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0e0e0e`, img`
    222222222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222222222222
    2222222222222...........222222222222222222222222222222222222
    2222222222222...........222222222222222222222222222222222222
    2222222222222...........222222222222222222222222222222222222
    2222222222222...22222..............2222222222222222222222222
    2222222222222...22222..............2222222222222222222222222
    2222............22222.................................222222
    2222............22222222222222222.....................222222
    2222............22222.................................222222
    2222...222222...22222..............2222222222222222...222222
    2222...222222...22222..............2222222222222222...222222
    2222...222222...........222222222222222222222222222...222222
    2222.......22...........222222222222222222222222222...222222
    2222.......22...........222222222222222222222222222...222222
    2222.......2222222222222222222222222222222222222222...222222
    22222222...2222222222222222222222222222...............222222
    222........2222222222222222222222222222...............222222
    222........2222222222222222222222222222...............222222
    222........2222222222222222222222222222...222222222222222222
    222...222222222222222222222222222222222...222222222222222222
    222...222222222222222222222222222222222...222222222222222222
    222...222222222222222222222222222222222...222222222222222222
    222...222222222222222222222222222222222...222222222222222222
    222...222222222222222222222222222222222...222222222222222222
    222...222222222222222222222222222222222...222222222222222222
    222...222222222222222222222222222222222...222222222222222222
    222...2222222222...............22222222...2222222.......2222
    222...2222222222...............22222222.................2222
    222...2222222222...............22222222.................2222
    222...2222222222...222222222...22222222............22...2222
    222...2222222222...222222222...2222222222222222222222...2222
    222...2222222222...222222222...2222222222222222222222...2222
    222...2222222222....2222222.....22222222222222222...........
    22.....22222222.....2222222.....22222222222222222...........
    22.....22222222.....2222222.....22.........222222...........
    22.....22222222.....2222222.....22...........2222....222....
    22.....22222222.....2222222.....22...........2222....222....
    22..................2222222.....22...........2222....222....
    22..................2222222.....22....22.....2222...........
    22..................2222222.....22....222....2222...........
    22..................2222222...........222....2222...........
    22..................2222222...........222....2222...........
    222222222222222222222222222...........222....2222222.....222
    222222222222222222222222222...........222....2222222.....222
    22222222222222222222222222222222222222222....2222222.....222
    2............................................2222222.....222
    2............................................2222222.....222
    2............................................2222222.....222
    2............................................2222222.....222
    2............................................2222222.....222
    2....22222222222222222222222222222222222222222222222.....222
    2........................................................222
    2........................................................222
    2........................................................222
    2........................................................222
    2........................................................222
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile5,myTiles.tile39,myTiles.tile40,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile27,myTiles.tile30,myTiles.tile32,myTiles.tile33,myTiles.tile34,myTiles.tile41,myTiles.tile42,myTiles.tile44,myTiles.tile45,myTiles.tile2,myTiles.tile4], TileScale.Sixteen)),
tiles.createMap(tiles.createTilemap(hex`3c003c000505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050502020202020202020202020202020202020202020202020202020202020202020202020202020205050505050505050505050505050505050505050502010101010101010101010101010101010101010101010101010101010101010101010101010205050505050505050505050505050505050505050502010f0110011001100110011001100110011001100110011001100110011001100110010f010205050505050505050505050505050505050505050502010101010101010101010101010101010101010101010101010101010101010101010101010205050505050505050505050505050505050505050502010f0102020202020202020202020202020202020202020202020202020202020202010f010205050505050505050505050505050505050505050502010101020505050505050505050505050505050502020505050505050505050505020101010205050505050505050505050505050505050505050502010f0102020202020202020202020202020202020202020205050505050505050502010f010205050505050505050505050505050505050505050502010101010101010101010101010101010101010101010102050505050505050505020101010205050505050505050505050505050505050505050502010f011001100110011001100110011001100110010f010205050505050505050502010f0102050505050505050505050505050505050505050505020101010101010101010101010101010101010101010101020505050505050505050201010102050505050505050505050505050505050505050505020202020202020202020202020202020202020202010f010205050505050505050502010f0102050505050505050505050505050505050505050505050505050505050505050505050505050505050502010101020505050505050505050201010102050505050505050505050505050505050505050505050505050505050505050505050505050505050502010f010205050505050505050502010f010205050505050505050505050502020202020202020202020202020502020202020202020202020205050201010102050505050505050505020101010205050505050505050505050502030303030303030303030101010c010101010101010101010102050502010f010205050505050505050202010f010205050505050505050505050502030f03100310031003100110010c10011001100110011001010205050201010102050505050505050502010101010205050505050505050505050502030303030303030303030101010c010101010101010101010102050502010f0102050505050505050502010f01010205050505050505050505050502030f0302020202020202020202050202020202020202010f0102050502010101020505050505050505020101010202050505050505050505050505020303030205050505050505050505050505050505050201010102020202010f0102050505050505050502010f01020505050505050505050505050502030f0302050505050505050505050505050505050502010f010101010101010102050505050505050502010101020505050505050505050505050502030303020505050505050505050505050505050505020101100110011001100102050505050505050502010f01020505050505050505050505050502030f03020505050505050505050505050505050505020101010101010101010102050505050505050502010101020505050505050505050505050502040404020505050505050505050505050505050505020202020202020202020202050505050505050502010f01020505050505050505050505050502010f01020505050505050505050505050505050505050505050505050505050505050505050505050502010101020505050505050505050505050502010101020505050505050505050505050505050505050505050505050505050505050505050505050502010f01020505050505050505050505050505010f01050505050505050505050505050505050505050505050505050505050505050505050505050502010101020505050505050505050505050505010101050505050505050505050505050505050505050505050505050505050505050505050505050502010f01020505050505050505050505050505010f01050505050505050505050505050505050505050505050505050505050505050505050505050502010101020505050505050505050505050505010101050505050505050505050505050505050505050505050505050505050505050505050505050502010f01020505050505050505050505050505010f010101010101050505050505050505050505050505050505050505050505050505050505050505020101010205050505050505050505050505050303100310030f0105050505050505050505050505050505050505050505050505050505050505050502010301020505050505050505050505050505010101010101010105050505050505050505050505050505050505050505050505050505050505050502010f010205050505050505050505050509090909090909010f01090909090909090909090909090909090909090909090909090909090909090909090e0e0e09090909090909090909090909090909090909090d0d0d09090909090909090909090909090909090909090909090909090909090909090909010f010909090909090909090909090909090909090909010f010909090909090909090909090909090909090909090909090909090909090909090901010109090909090909090909090909090907070707070808080707070707070707070707070707070707070707070707070707070707070707070708080807070707070707070707070707070707070707070808080707070707070707070707070707070707070707070707070707070707070707070708080807070707070707070707070707070707070707070808080707070707070707070707070707070707070707070707070707070707070707070708080807070707070707070707070707070707070707070808080707070707070707070707070707070707070707070707070707070707070707070708080807070707070707070707070707070707070707070808080707070707070707070707070707070707070707070707070707070707070707070708080807070707070707070707070707070707070707070808080707070707070707070707070707070707070707070707070707070707070707070708080807070707070707070707070707070707070707070808080707070707070707070707070707070707070707070707070707070707070707070708080807070707070707070707070707070707070707070808080707070707070707070707070707070707070707070707070707070707070707070708080807070707070707070707070707070707070707070808080707070707070707070707070707070707070707070707070707070707070707070708080807070707070707070707070707070707070707070808080707070707070707070707070707070707070707070707070707070707070707070708080807070707070707070707070707070707070707070808080b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0606060606060b0b0b0b0b0b010f0107070707070707070707070707070707070b0b0b010f010b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0606060606060a0a0a0a0a0a010101070b0b0b0b0b0b0b0b0b0707070707070b0b0b0b0101010b0b0b0a0a0a0a0a0a0a0606060a0a0a0a0a0a0606060606060606060a0a0a0a0a0a010f010b0b0b0b0b0b0b0b0b0b0b0b0b0707070b0b0b0b010f010a0a0a0a0a0a0a0a0a060606060a0a0a0a0a0a0606060606060606060a0a0a0a0a0a0101010b0b0b0b0b0b0b0b0b0b0b0b0b07070b0b0b0a0a0101010a0a0a0a0a0a0a0a06060606060a0a0a0a0a0a0606060606060606060a0a0a0a0a0a010f010a0a0a0a0b0b0b0b0b0b0b0b0b070b0b0a0a0a0a010f010a0a0a0a0a0a0a0a06060606060a0a0a0a0a0a0606060606060606060a0a0a0a0a0a0101010a0a0a0a0a0a0a0b0b0b0b0b0b070b0a0a0a0a0a0101010101010101010101060606060a0a0a0a0a0a0a0606060606060606060a0a0a0a0a0a010f010a0a0a0a0a0a0a0a0a0b0b0b0b0b0a0a0a0a0a0a010f01100110011001100101010101010101010101010606060606060606060a0a0a0a0a0a0101010a0a0a0a0a0a0a0a0a0a0a0a0b0a0a0a0a0a0a0a01010101010101010101100110011001100110011001010101010101010101010a0a0a0a0a010f010a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a060606060a010101010101010101010101011001100110011001100101010101010101010a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a060606060a0a0a0a0a0a0a0a0a0a0a0a01010101010101010101010110011001100110010a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0606060a06060606060a0a0a0a0a0a0a0a0a0a0a0a0a060606060606060606010101010101010101010a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a06060606060606060a0a0a0a0a0a0a0a0a0a0a0a0a0a06060606060606060606060a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a060606060606060a0a0a0a0a0a0a0a0a0a0a0a0a0a0a06060606060606060606060a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a`, img`
    222222222222222222222222222222222222222222222222222222222222
    2222222222.......................................22222222222
    2222222222.......................................22222222222
    2222222222.......................................22222222222
    2222222222.......................................22222222222
    2222222222.......................................22222222222
    2222222222.....2222222222222222..22222222222.....22222222222
    2222222222.........................222222222.....22222222222
    2222222222.........................222222222.....22222222222
    2222222222.........................222222222.....22222222222
    2222222222.........................222222222.....22222222222
    2222222222.........................222222222.....22222222222
    222222222222222222222222222222.....222222222.....22222222222
    222222222222222222222222222222.....222222222.....22222222222
    2..............2............22.....222222222.....22222222222
    2...........................22.....22222222......22222222222
    2...........................22.....22222222......22222222222
    2...........................22.....22222222......22222222222
    2..............2............22.....22222222......22222222222
    2.....22222222222222222............22222222.....222222222222
    2.....22222222222222222............22222222.....222222222222
    2.....22222222222222222............22222222.....222222222222
    2.....22222222222222222............22222222.....222222222222
    2.....22222222222222222............22222222.....222222222222
    2.....2222222222222222222222222222222222222.....222222222222
    2.....2222222222222222222222222222222222222.....222222222222
    22...22222222222222222222222222222222222222.....222222222222
    22...22222222222222222222222222222222222222.....222222222222
    22...22222222222222222222222222222222222222.....222222222222
    22...22222222222222222222222222222222222222.....222222222222
    22........222222222222222222222222222222222.....222222222222
    22........222222222222222222222222222222222.....222222222222
    22........222222222222222222222222222222222.....222222222222
    2222222...2222222222222222222222222222222222...2222222222222
    2222222...2222222222222222222222222222222222...2222222222222
    2222222...2222222222222222222222222222222222...2222222222222
    2222222...2222222222222222222222222222222222...2222222222222
    2222222...2222222222222222222222222222222222...2222222222222
    2222222...2222222222222222222222222222222222...2222222222222
    2222222...2222222222222222222222222222222222...2222222222222
    2222222...2222222222222222222222222222222222...2222222222222
    2222222...2222222222222222222222222222222222...2222222222222
    2222222...2222222222222222222222222222222222...2222222222222
    2222222...2222222222222222222222222222222222...2222222222222
    2222222...2222222222222222222222222222222222...2222222222222
    2222222...2222222222222222222222222222222222...2222222222222
    2222222.........................222222.........2222222222222
    2222............................222222.........2.........222
    222.................222......222222222......................
    222................2222......222222222......................
    22................22222......222222222......................
    2.................22222......222222222......................
    2.................2222.......222222222......................
    .............................222222222......................
    ............................................................
    ...........2222.............................................
    ...........2222.............................................
    ......222.22222.............222222222.......................
    ......22222222..............22222222222.....................
    ......2222222...............22222222222.....................
    `, [myTiles.transparency16,myTiles.tile27,myTiles.tile47,myTiles.tile1,myTiles.tile5,myTiles.tile49,myTiles.tile15,myTiles.tile29,myTiles.tile34,myTiles.tile48,sprites.castle.tileGrass1,sprites.castle.tilePath5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile2,myTiles.tile4], TileScale.Sixteen)),
tiles.createMap(tiles.createTilemap(hex`3c003c000c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0101010101010101010101010101010101010101010101010101010101010101010101010101010101010c0c060606060606060606060606040606070707070707070707070707070707070707070707080101010101010101010101010101010101010101010c0c061506160606160606160616041606070707070707070707070707070707070707070708090101010101010101010101010101010101010101010c0c020202060606060606060606040707070707070707070707070707070707070707070809090101010101010101010101010101010101010101010c0c0215020c0c0c0c0c0c0c0c0c0c0101010101010101010101010101010101010101010909090101010101010101010101010101010101010101010c0c0303030c0c0c0c0c0c0c0c0c010101010101010101010101010101010101010101010909090101010101010101010101010101010101010101010c0c0215020c0c0c0c0c0c0c0c01010101010101010101010101010101010101010101010909090101010110070707070707070708010101010101010c0c0202020c0c0c0c0c0c0c010101010101010101010101010101010101010101010101090909010101010f100707070707070809010101010101010c0c0215020c0c0c0c0c0c01010101010101010101010101010101010101010101010101090909010101010f0f1007070707080909010101010101010c0c0202020c0c0c0c0c0101010101010101010101010101010101010101010101010101090909010101010f0f0f01010101090909010101010101010c0c0215020c0c0c01010101010101010101010101010101010101010101010101010101090909010101010f0f0f01010101090909010101010101010c0c0505050c010101010101010101010101010d0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0b0909010101010f0f0f010101010909090101010101010101010f0f0f0101010101010101010101010101090d0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0b09010101010f0f0f010101010909090101010101010101010f0f0f010101010101010101010101010109090d0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0b010101010f0f0f010101010909090101010101010101010f0f0f01010101010101010101010101010909090101010101010101010101010101010101010101010f0f0f010101010909090101010101010101010f0f0f010101010101010101010101010109090901010101010101010101010a0a0a0a0101010101010f0f0f010101010909090101010101010101010f0f0f0101010101010101010101010101090909010101010101010101010a0a0a0a0a0a01010101010f0f0f010101010909090101010101010101010f0f0f01010101010101010101010101010909090a0a0a0a0a0a0a0a0a0a0a0a01010a0a0a0a0a0a0a0f0f0f010101010909090101010101010101010f0f0f01010101010101010101010101010909090a0a0a0a0a0a0a0a0a0a0a0a01010a0a0a0a0a0a0a0f0f0f010101010909090101010101010101010f0f0f0101010101010101010101010101090909010101010101010101010a0a0a0a0a0a01010101010f0f0f010101010909090101010101010101010f0f0f010101010101010101010101010109090901010101010101010101010a0a0a0a0101010101010f0f0f010101010909090101010101010101010f0f0f010101010101010101010101010109090e0707070707070708010101010101010101010101010f0f0f010101010909090101010101010101010f0f0f0101010101010101010101010101090e070707070707070809010101010101010101010101010f0f0f010101010909090101010101010101010f0f0f01010101010101010101010101010e07070707070707080909010101010101010101010101010f0f0f010101010909090101010101010101010f0f0f01010101010101010101010101010101010101010101090909010101010101010101010101010f0f0f010101010909090101010101010101010f0f0f0101010101010101010101010101010101010101010109090e07070707070707070707070707120f0f010101010909090101010101010101010f0f0f01010101010101010101010101010101010101010101090e070707070707070707070707070707120f010101010909090101010101010101010f0f0f010101010101010101010101010101010101010101010e070707070707070707070707070707070712010101010909090101010101010101010f0f0f0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010909090101010101010101010f0f0f0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010909090101010101010101010f0f110a0a0a0a0a0a0a0a0a0a0a0a1301010101010101010101010101010101010101010101010101010101010101010909090101010101010101010f110a0a0a0a0a0a0a0a0a0a0a0a130f0101010101010101010101010101010101010101010101010101010101010101090909010101010101010101110a0a0a0a0a0a0a0a0a0a0a0a130f0f0101010101010101010101010101010101010101010101010101010101010101090909010101010101010101010101010101010101010101010f0f0f0101010101010101010101010101010101010101010101010101010101010101090909010101010101010101010101010101010101010101010f0f0f0101010101010101010101010101010101010101010101010101010101010101090909010101010101010101010101010101010101010101010f0f0f0101010101010101010101010101010101010101010101010101010101010101090909010101010101010101010101010101010101010101010f0f0f0101010101010101010101010101010101010101010101010101010101010101090909010101010101010101010101010101010101010101010f0f0f0101010101010101010101010101010101010101010101010101010101010101090909010101010101010101010101010101010101010101010f0f0f0101010101010101010101010101010101010101010101010101010101010101090909010101010101010101010101010101010101010101010f0f0f0101010101010101010101010101010101010101010101010101010101010101090909010101010101010101010101010101010101010101010f0f0f0101010101010101010101010101010101010101010101010101010101010101090909010101010101010101010101010101010101010101010f0f0f0101010101010101010101010101010101010101010101010101010101010101090909010101010101010101010101010101010101010101010f0f0f0101010101010101010101010101010101010101010101010101010101010101090909010101010101010101010101010101010101010101010f0f0f0101010101010101010101010101010101010101010101010101010101010101090909010101010101010101010101010101010101010101010f0f0f0101010101010101010101010101010101010101010101010101010101010101090909010101010101010101010101010101010101010101010f0f0f0101010101010101010101010101010101010101010101010101010101010101090909010101010101010101010101010101010101010101010f0f0f0101010101010101010101010101010101010101010101010101010101010101090909010101010101010101010101010101010101010101010f0f0f0101010101010101010101010101010101010101010101010101010101010101090909010101010101010101010101010101010101010101010f0f0f0101010101010101010101010101010101010101010101010101010101010101090909010101010101010101010101010101010101010101010f0f0f0101010101010101010101010101010101010101010101010101010101010101090909010101010101010101010101010101010101010101010f0f0f0101010101010101010101010101010101010101010101010101010101010101090909010101010101010101010101010101010101010101010f0f0f0101010101010101010101010101010101010101010101010101010101010101090909010101010101010101010101010101010101010101010f0f0f0101010101010101010101010101010101010101010101010101010101010101090909010101010101010101010101010101010101010101010f0f110a0a0a0a0a0a0a0a0a0a140a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0b0909010101010101010101010101010101010101010101010f110a0a0a0a0a0a0a0a0a0a0a140a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0b0901010101010101010101010101010101010101010101110a0a0a0a0a0a0a0a0a0a0a0a140a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0b01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
    222222222222222222..........................................
    22..........................................................
    22..........................................................
    22..........................................................
    22...2222222222.............................................
    22...222222222..............................................
    22...22222222...............................................
    22...2222222................................................
    22...222222.................................................
    22...22222..................................................
    22...222....................................................
    22...2......................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    `, [myTiles.transparency16,myTiles.tile57,myTiles.tile1,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile27,myTiles.tile52,myTiles.tile54,myTiles.tile55,myTiles.tile58,myTiles.tile59,myTiles.tile62,myTiles.tile63,myTiles.tile64,myTiles.tile51,myTiles.tile53,myTiles.tile61,myTiles.tile65,myTiles.tile66,myTiles.tile67,myTiles.tile2,myTiles.tile4], TileScale.Sixteen))
]
race = false
main = false
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.lights)
scene.setBackgroundColor(15)
animation.runImageAnimation(
mySprite,
[img`
    ......................................................................
    ......................................................................
    ......................................................................
    ......................................................................
    ......................................................................
    ....222...............................................................
    ....2222222222222222..................................................
    ....22222222222222222.................................................
    ....22222222222222222.................................................
    ....222...........222.................................................
    ....222...........222.................................................
    ....222...........222.................................................
    ....222...........222.................................................
    ....222...........222.................................................
    ....222...........222.................................................
    ....222...........222.................................................
    ....222...........222.................................................
    ....222...........222.................................................
    ....222...........222.........222222222.........222..........222......
    ....222...........222.......2222222222222.......2222........2222......
    ....222...........222......222222222222222......2222........2222......
    ....222...........222.....2222.........2222......2222......2222.......
    ....222...........222....222.............222.....22222....22222.......
    ....222...........222...222...............222.....22222...2222........
    ....222...........222...222...............222......2222..2222.........
    ....2222222222222222...222.................222......222222222.........
    ....222222222222222....222.................222......22222222..........
    ....2222222222222222...222.................222.......222222...........
    ....222...........222..222.................222........22222...........
    ....222...........222..222.................222........22222...........
    ....222...........222..222.................222.......2222222..........
    ....222...........222..222.................222.......22222222.........
    ....222...........222..222.................222......2222.2222.........
    ....222...........222..222.................222.....22222..2222........
    ....222...........222...222...............222......2222...22222.......
    ....222...........222...222...............222.....2222.....22222......
    ....222...........222....222.............222.....22222......2222......
    ....222...........222.....2222.........2222......2222........2222.....
    ....22222222222222222......222222222222222.......222.........22222....
    ....22222222222222222.......2222222222222........222..........2222....
    ....2222222222222222..........222222222........................222....
    ......................................................................
    ......................................................................
    ......................................................................
    .........2222222222...................................................
    .........2222222222.........................................22222.....
    .........2222222222.....................................222222222.....
    ......222..................222222222....................222222222.....
    ......222.................2222222222....................222222........
    ......222.................22222222222........22222222...222...........
    ......222.................222.....222.......222222222...222222........
    ......222.................222.....222.......222222222...2222222222....
    ......222.................222.....222.......222.........2222222222....
    ......222.................222.....222.......222.............222222....
    ......222.................222.....222.......222................222....
    ......222.................222222222222222...222.............222222....
    ......222.................222222222222222...222.........2222222222....
    .........222222222.........22222222222222...222.........2222222222....
    .........222222222..........................222.........222222........
    .........222222222....................................................
    `,img`
    ......................................................................
    ......................................................................
    ......................................................................
    ......................................................................
    ......................................................................
    ....444...............................................................
    ....4444444444444444..................................................
    ....44444444444444444.................................................
    ....44444444444444444.................................................
    ....444...........444.................................................
    ....444...........444.................................................
    ....444...........444.................................................
    ....444...........444.................................................
    ....444...........444.................................................
    ....444...........444.................................................
    ....444...........444.................................................
    ....444...........444.................................................
    ....444...........444.................................................
    ....444...........444.........444444444.........444..........444......
    ....444...........444.......4444444444444.......4444........4444......
    ....444...........444......444444444444444......4444........4444......
    ....444...........444.....4444.........4444......4444......4444.......
    ....444...........444....444.............444.....44444....44444.......
    ....444...........444...444...............444.....44444...4444........
    ....444...........444...444...............444......4444..4444.........
    ....4444444444444444...444.................444......444444444.........
    ....444444444444444....444.................444......44444444..........
    ....4444444444444444...444.................444.......444444...........
    ....444...........444..444.................444........44444...........
    ....444...........444..444.................444........44444...........
    ....444...........444..444.................444.......4444444..........
    ....444...........444..444.................444.......44444444.........
    ....444...........444..444.................444......4444.4444.........
    ....444...........444..444.................444.....44444..4444........
    ....444...........444...444...............444......4444...44444.......
    ....444...........444...444...............444.....4444.....44444......
    ....444...........444....444.............444.....44444......4444......
    ....444...........444.....4444.........4444......4444........4444.....
    ....44444444444444444......444444444444444.......444.........44444....
    ....44444444444444444.......4444444444444........444..........4444....
    ....4444444444444444..........444444444........................444....
    ......................................................................
    ......................................................................
    ......................................................................
    .........4444444444...................................................
    .........4444444444.........................................44444.....
    .........4444444444.....................................444444444.....
    ......444..................444444444....................444444444.....
    ......444.................4444444444....................444444........
    ......444.................44444444444........44444444...444...........
    ......444.................444.....444.......444444444...444444........
    ......444.................444.....444.......444444444...4444444444....
    ......444.................444.....444.......444.........4444444444....
    ......444.................444.....444.......444.............444444....
    ......444.................444.....444.......444................444....
    ......444.................444444444444444...444.............444444....
    ......444.................444444444444444...444.........4444444444....
    .........444444444.........44444444444444...444.........4444444444....
    .........444444444..........................444.........444444........
    .........444444444....................................................
    `,img`
    ......................................................................
    ......................................................................
    ......................................................................
    ......................................................................
    ......................................................................
    ....555...............................................................
    ....5555555555555555..................................................
    ....55555555555555555.................................................
    ....55555555555555555.................................................
    ....555...........555.................................................
    ....555...........555.................................................
    ....555...........555.................................................
    ....555...........555.................................................
    ....555...........555.................................................
    ....555...........555.................................................
    ....555...........555.................................................
    ....555...........555.................................................
    ....555...........555.................................................
    ....555...........555.........555555555.........555..........555......
    ....555...........555.......5555555555555.......5555........5555......
    ....555...........555......555555555555555......5555........5555......
    ....555...........555.....5555.........5555......5555......5555.......
    ....555...........555....555.............555.....55555....55555.......
    ....555...........555...555...............555.....55555...5555........
    ....555...........555...555...............555......5555..5555.........
    ....5555555555555555...555.................555......555555555.........
    ....555555555555555....555.................555......55555555..........
    ....5555555555555555...555.................555.......555555...........
    ....555...........555..555.................555........55555...........
    ....555...........555..555.................555........55555...........
    ....555...........555..555.................555.......5555555..........
    ....555...........555..555.................555.......55555555.........
    ....555...........555..555.................555......5555.5555.........
    ....555...........555..555.................555.....55555..5555........
    ....555...........555...555...............555......5555...55555.......
    ....555...........555...555...............555.....5555.....55555......
    ....555...........555....555.............555.....55555......5555......
    ....555...........555.....5555.........5555......5555........5555.....
    ....55555555555555555......555555555555555.......555.........55555....
    ....55555555555555555.......5555555555555........555..........5555....
    ....5555555555555555..........555555555........................555....
    ......................................................................
    ......................................................................
    ......................................................................
    .........5555555555...................................................
    .........5555555555.........................................55555.....
    .........5555555555.....................................555555555.....
    ......555..................555555555....................555555555.....
    ......555.................5555555555....................555555........
    ......555.................55555555555........55555555...555...........
    ......555.................555.....555.......555555555...555555........
    ......555.................555.....555.......555555555...5555555555....
    ......555.................555.....555.......555.........5555555555....
    ......555.................555.....555.......555.............555555....
    ......555.................555.....555.......555................555....
    ......555.................555555555555555...555.............555555....
    ......555.................555555555555555...555.........5555555555....
    .........555555555.........55555555555555...555.........5555555555....
    .........555555555..........................555.........555555........
    .........555555555....................................................
    `],
100,
true
)
mySprite.setPosition(51, 36)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.lights)
mySprite.say("press any button. for this...WOW WOW WOW WOW WOW WOW WOW WOW WOW WOW WOW WOW WOW WOW WOW WOW WOW WOW...")
mySprite.setPosition(78, 104)
forever(function () {
    if (race) {
        for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
            if (value.vy > 1) {
                value.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 2 2 2 2 2 2 . . . . 
                    . . . . . 2 2 4 4 2 2 2 2 . . . 
                    . . . . . c 4 2 2 2 2 2 c . . . 
                    . . . . 2 c 4 2 2 2 2 2 c 2 . . 
                    . . . e 2 c 4 2 2 2 2 2 c 2 e . 
                    . . . f 2 c 4 2 2 2 2 2 c 2 f . 
                    . . . f e c 2 2 2 2 2 2 c e f . 
                    . . . f 2 c 2 b b b b 2 c 2 f . 
                    . . . e 2 2 b c c c c b 2 2 e . 
                    . . . e e b c c c c c c b e e . 
                    . . . f e 4 4 4 4 4 4 4 4 e f . 
                    . . . f e d 2 2 2 2 2 2 d e f . 
                    . . . . 2 d d 2 2 2 2 d d 2 f . 
                    . . . . f 2 d 2 2 2 2 d 2 f . . 
                    . . . . . e 2 2 2 2 2 2 e . . . 
                    `)
            } else if (value.vy < -1) {
                value.setImage(img`
                    . . . . . . e e c c e e . . . . 
                    . . . . . e 2 2 2 2 2 2 e . . . 
                    . . . . 2 c 2 2 2 2 2 2 c 2 . . 
                    . . . e 2 c 4 2 2 2 2 2 c 2 e . 
                    . . . f 2 2 4 2 2 2 2 2 c 2 f . 
                    . . . f 2 2 4 2 2 2 2 2 2 2 f . 
                    . . . f 2 2 4 2 2 2 2 2 2 2 f . 
                    . . . f 2 c 2 4 4 2 2 2 c 2 f . 
                    . . . e 2 c e c c c c e c 2 e . 
                    . . . e 2 e c b b b b c e 2 e . 
                    . . . e 2 e b b b b b b e 2 e . 
                    . . . e e e e e e e e e e e e . 
                    . . . f e d e e e e e e d e f . 
                    . . . f e 2 d e e e e d 2 e f . 
                    . . . f f e e e e e e e e f f . 
                    . . . . f f . . . . . . f f . . 
                    `)
            } else if (value.vx > -1) {
                value.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . 2 2 2 2 2 2 2 2 . . . . 
                    . . . 2 4 2 2 2 2 2 2 c 2 . . . 
                    . . 2 c 4 2 2 2 2 2 2 c c 2 . . 
                    . 2 c c 4 4 4 4 4 4 2 c c 4 2 d 
                    . 2 c 2 e e e e e e e b c 4 2 2 
                    . 2 2 e b b e b b b e e b 4 2 2 
                    . 2 e b b b e b b b b e 2 2 2 2 
                    . e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
                    . e e e e e e f e e e f e 2 d d 
                    . e e e e e e f e e f e e e 2 d 
                    . e e e e e e f f f e e e e e e 
                    . e f f f f e e e e f f f e e e 
                    . . f f f f f e e f f f f f e . 
                    . . . f f f . . . . f f f f . . 
                    . . . . . . . . . . . . . . . . 
                    `)
            } else if (value.vx > 1) {
                value.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 2 2 2 2 2 2 2 2 . . 
                    . . . . . 2 c 2 2 2 2 2 2 4 2 . 
                    . . . . 2 c c 2 2 2 2 2 2 4 c 2 
                    . . d 2 4 c c 2 4 4 4 4 4 4 c c 
                    . d 2 2 4 c b e e e e e e e 2 c 
                    . 2 2 2 4 b e e b b b e b b e 2 
                    . 2 2 2 2 2 e b b b b e b b b e 
                    . 2 2 2 2 e 2 2 2 2 2 e 2 2 2 e 
                    . 2 d d 2 e f e e e f e e e e e 
                    . d d 2 e e e f e e f e e e e e 
                    . e e e e e e e f f f e e e e e 
                    . e e e e f f f e e e e f f f f 
                    . . . e f f f f f e e f f f f f 
                    . . . . f f f f . . . . f f f . 
                    . . . . . . . . . . . . . . . . 
                    `)
            }
        }
    }
})
forever(function () {
    if (race) {
        if (!(controller.A.isPressed())) {
            if (controller.left.isPressed()) {
                the_Player.fx = 60
                the_Player.fy = 0
            } else if (controller.right.isPressed()) {
                the_Player.fx = -60
                the_Player.fy = 0
            } else if (controller.up.isPressed()) {
                the_Player.fy = -60
                the_Player.fx = 0
            } else if (controller.down.isPressed()) {
                the_Player.fy = 60
                the_Player.fx = 0
            }
        } else {
            the_Player.fy = 0
            the_Player.fx = 0
        }
    }
})
forever(function () {
    if (race) {
        for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
            mySprite4 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Player)
            mySprite4.x = value.x
            mySprite4.y = value.y
            animation.runImageAnimation(
            mySprite4,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . d . . . . . . . . 
                . . . . . . d d d . . . . . . . 
                . . . . . . . d . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . d d . . . . . . . 
                . . . . . . . d d . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . d . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `],
            100,
            true
            )
            mySprite4.lifespan = 300
            pause(1000)
        }
        pause(2000)
    }
})
forever(function () {
    if (race) {
        if (the_Player.tileKindAt(TileDirection.Center, myTiles.tile57)) {
        	
        }
    }
})
forever(function () {
    if (race) {
        if (controller.left.isPressed()) {
            the_Player.vx = speed * -1
            the_Player.vy = 0
            the_Player.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . 6 6 6 6 6 6 6 6 . . 
                . . . . . 6 c 6 6 6 6 6 6 9 6 . 
                . . . . 6 c c 6 6 6 6 6 6 9 c 6 
                . . d 6 9 c c 6 9 9 9 9 9 9 c c 
                . d 6 6 9 c b 8 8 8 8 8 8 8 6 c 
                . 6 6 6 9 b 8 8 b b b 8 b b 8 6 
                . 6 6 6 6 6 8 b b b b 8 b b b 8 
                . 6 6 6 6 8 6 6 6 6 6 8 6 6 6 8 
                . 6 d d 6 8 f 8 8 8 f 8 8 8 8 8 
                . d d 6 8 8 8 f 8 8 f 8 8 8 8 8 
                . 8 8 8 8 8 8 8 f f f 8 8 8 8 8 
                . 8 8 8 8 f f f 8 8 8 8 f f f f 
                . . . 8 f f f f f 8 8 f f f f f 
                . . . . f f f f . . . . f f f . 
                . . . . . . . . . . . . . . . . 
                `)
        } else if (controller.right.isPressed()) {
            the_Player.vx = speed
            the_Player.vy = 0
            the_Player.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . 6 6 6 6 6 6 6 6 . . . . 
                . . . 6 9 6 6 6 6 6 6 c 6 . . . 
                . . 6 c 9 6 6 6 6 6 6 c c 6 . . 
                . 6 c c 9 9 9 9 9 9 6 c c 9 6 d 
                . 6 c 6 8 8 8 8 8 8 8 b c 9 6 6 
                . 6 6 8 b b 8 b b b 8 8 b 9 6 6 
                . 6 8 b b b 8 b b b b 8 6 6 6 6 
                . 8 8 6 6 6 8 6 6 6 6 6 8 6 6 6 
                . 8 8 8 8 8 8 f 8 8 8 f 8 6 d d 
                . 8 8 8 8 8 8 f 8 8 f 8 8 8 6 d 
                . 8 8 8 8 8 8 f f f 8 8 8 8 8 8 
                . 8 f f f f 8 8 8 8 f f f 8 8 8 
                . . f f f f f 8 8 f f f f f 8 . 
                . . . f f f . . . . f f f f . . 
                . . . . . . . . . . . . . . . . 
                `)
        } else if (controller.up.isPressed()) {
            the_Player.vy = speed * -1
            the_Player.vx = 0
            the_Player.setImage(img`
                . . . . . . 8 8 c c 8 8 . . . . 
                . . . . . 8 6 6 6 6 6 6 8 . . . 
                . . . . 6 c 6 6 6 6 6 6 c 6 . . 
                . . . 8 6 c 9 6 6 6 6 6 c 6 8 . 
                . . . f 6 6 9 6 6 6 6 6 c 6 f . 
                . . . f 6 6 9 6 6 6 6 6 6 6 f . 
                . . . f 6 6 9 6 6 6 6 6 6 6 f . 
                . . . f 6 c 6 9 9 6 6 6 c 6 f . 
                . . . 8 6 c 8 c c c c 8 c 6 8 . 
                . . . 8 6 8 c b b b b c 8 6 8 . 
                . . . 8 6 8 b b b b b b 8 6 8 . 
                . . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
                . . . f 8 d 8 8 8 8 8 8 d 8 f . 
                . . . f 8 6 d 8 8 8 8 d 6 8 f . 
                . . . f f 8 8 8 8 8 8 8 8 f f . 
                . . . . f f . . . . . . f f . . 
                `)
        } else if (controller.down.isPressed()) {
            the_Player.vy = speed
            the_Player.vx = 0
            the_Player.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . 6 6 6 6 6 6 . . . . 
                . . . . . 6 6 9 9 6 6 6 6 . . . 
                . . . . . c 9 6 6 6 6 6 c . . . 
                . . . . 6 c 9 6 6 6 6 6 c 6 . . 
                . . . 8 6 c 9 6 6 6 6 6 c 6 8 . 
                . . . f 6 c 9 6 6 6 6 6 c 6 f . 
                . . . f 8 c 6 6 6 6 6 6 c 8 f . 
                . . . f 6 c 6 b b b b 6 c 6 f . 
                . . . 8 6 6 b c c c c b 6 6 8 . 
                . . . 8 8 b c c c c c c b 8 8 . 
                . . . f 8 9 9 9 9 9 9 9 9 8 f . 
                . . . f 8 d 6 6 6 6 6 6 d 8 f . 
                . . . . 6 d d 6 6 6 6 d d 6 f . 
                . . . . f 6 d 6 6 6 6 d 6 f . . 
                . . . . . 8 6 6 6 6 6 6 8 . . . 
                `)
        }
    }
})
forever(function () {
    if (race) {
        if (the_Player.tileKindAt(TileDirection.Center, myTiles.tile10) || (the_Player.tileKindAt(TileDirection.Center, myTiles.tile43) || the_Player.tileKindAt(TileDirection.Center, myTiles.tile6))) {
            sprites.setDataBoolean(the_Player, "1", true)
        }
        if (the_Player.tileKindAt(TileDirection.Center, myTiles.tile11) || (the_Player.tileKindAt(TileDirection.Center, myTiles.tile44) || (the_Player.tileKindAt(TileDirection.Center, myTiles.tile8) || the_Player.tileKindAt(TileDirection.Center, myTiles.tile67)))) {
            sprites.setDataBoolean(the_Player, "2", true)
        }
        if (the_Player.tileKindAt(TileDirection.Center, myTiles.tile13) || (the_Player.tileKindAt(TileDirection.Center, myTiles.tile45) || the_Player.tileKindAt(TileDirection.Center, myTiles.tile7))) {
            sprites.setDataBoolean(the_Player, "3", true)
        }
    }
})
forever(function () {
    if (race) {
        if (the_Player.tileKindAt(TileDirection.Center, myTiles.tile5)) {
            if (sprites.readDataBoolean(the_Player, "1") && sprites.readDataBoolean(the_Player, "2") && sprites.readDataBoolean(the_Player, "3")) {
                info.changeScoreBy(1)
                sprites.setDataBoolean(the_Player, "1", false)
                sprites.setDataBoolean(the_Player, "2", false)
                sprites.setDataBoolean(the_Player, "3", false)
                if (info.score() == 5) {
                    game.over(true, effects.confetti)
                }
            }
        }
    }
})
game.onUpdateInterval(100, function () {
    if (race) {
        if (the_Player.tileKindAt(TileDirection.Center, sprites.castle.tileGrass1)) {
            if (!(speed <= 10)) {
                speed += -2
            }
        } else if (the_Player.tileKindAt(TileDirection.Center, sprites.castle.tilePath5)) {
            if (!(speed <= 10)) {
                speed += -2
            }
        } else if (the_Player.tileKindAt(TileDirection.Center, myTiles.tile47) || the_Player.tileKindAt(TileDirection.Center, img`
            7 1 7 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 7 1 1 1 1 1 1 1 1 1 1 
            1 1 1 7 1 7 7 1 1 1 1 1 7 1 1 1 
            1 1 6 7 7 1 7 1 7 7 1 1 1 1 1 1 
            1 1 1 6 7 1 1 7 7 6 1 1 1 1 1 1 
            1 1 1 1 6 1 1 7 6 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 7 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 7 7 1 1 1 
            1 1 1 1 1 1 1 1 1 1 7 7 6 1 1 1 
            1 1 1 1 1 1 1 1 7 7 7 6 1 1 1 1 
            1 1 1 1 1 1 1 1 1 7 7 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 
            1 1 7 1 1 1 1 1 1 1 1 1 1 1 1 7 
            `)) {
            if (!(speed <= 10)) {
                speed += -2
            }
        } else {
            if (controller.A.isPressed()) {
                if (speed <= 180) {
                    speed += 2
                }
            } else {
                speed += -1
            }
        }
    }
})
game.onUpdateInterval(100, function () {
	
})
