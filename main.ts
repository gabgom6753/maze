controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = "UP"
    chicken.setImage(img`
        . . . . . . 2 2 . . . . . . . . 
        . . . f f f f f f f f . . . . . 
        . . . f 1 1 1 1 1 1 f . . . . . 
        . . . f 1 1 1 1 1 1 f . . . . . 
        . . . f f 1 1 1 1 f f . . . . . 
        . . f f 1 1 1 1 1 1 f f . . . . 
        . . f 1 1 1 1 1 1 1 1 f . . . . 
        . f f 1 1 f 1 f f 1 1 f f . . . 
        . f 1 1 f 1 f 1 1 f 1 1 f . . . 
        . f f 1 f 1 1 1 1 f 1 f f . . . 
        . . f f 1 f f f f 1 f f . . . . 
        . . . f f . . . . f f . . . . . 
        . . . f f . . . . f f . . . . . 
        . . . f f . . . . f f . . . . . 
        . . . f f . . . . f f . . . . . 
        . . f f f f . . f f f f . . . . 
        `)
})
function ClearLevel () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.destroy()
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (direction == "DOWN") {
        bird_projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 1 1 1 1 . . . . . . 
            . . . . . 1 1 1 1 d 1 . . . . . 
            . . . . 1 1 d 1 1 1 1 1 . . . . 
            . . . . 1 d 1 1 1 d 1 1 . . . . 
            . . . . 1 1 1 1 1 1 1 d . . . . 
            . . . . 1 1 1 d 1 1 1 1 . . . . 
            . . . . 1 d 1 1 1 1 1 1 . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            . . . . . . 1 d 1 1 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, chicken, 0, 100)
    } else if (direction == "UP") {
        bird_projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 . . . . . . . . 
            . . . . . . 4 2 4 . . . . . . . 
            . . . . . 4 4 2 4 4 . . . . . . 
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
            `, chicken, 0, -100)
    } else if (direction == "RIGHT") {
        bird_projectile = sprites.createProjectileFromSprite(img`
            ...........................
            ...........................
            ...........................
            .ffff................f.f...
            ff..ff.f..f..ff..fff.f.f...
            f....f.f..f.f..f.f...ff....
            f....f.f..f.ffff.f...f.f...
            ff..ff..ff..f..f.fff.f.f...
            .ffff......................
            ....f..f...................
            ....f.ff...................
            ....fff....................
            ....ff.....................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            `, chicken, 100, 0)
    } else if (direction == "LEFT") {
        bird_projectile = sprites.createProjectileFromSprite(img`
            ...........................
            ...........................
            ...........................
            .ffff................f.f...
            ff..ff.f..f..ff..fff.f.f...
            f....f.f..f.f..f.f...ff....
            f....f.f..f.ffff.f...f.f...
            ff..ff..ff..f..f.fff.f.f...
            .ffff......................
            ....f..f...................
            ....f.ff...................
            ....fff....................
            ....ff.....................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            `, chicken, -100, 0)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = "LEFT"
    chicken.setImage(img`
        . . . . . . 2 2 . . . . . . . . 
        . . . f f f f f f f f . . . . . 
        . . . f 1 1 1 1 1 1 f . . . . . 
        . . . f 1 f 1 f 1 1 f . . . . . 
        . . . f f 4 4 1 1 f f . . . . . 
        . . f f 1 1 1 1 1 1 f f . . . . 
        . . f 1 1 1 1 1 1 1 1 f . . . . 
        . f f 1 1 1 1 1 1 1 1 f f . . . 
        . f 1 1 1 1 1 1 1 1 1 1 f . . . 
        . f f 1 1 1 1 1 1 1 1 f f . . . 
        . . f f 1 f f f f 1 f f . . . . 
        . . . f f . . . . f f . . . . . 
        . . . f f . . . . f f . . . . . 
        . . . f f . . . . f f . . . . . 
        . . . f f . . . . f f . . . . . 
        . . f f f f . . f f f f . . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = "RIGHT"
    chicken.setImage(img`
        . . . . . . . . 2 2 . . . . . . 
        . . . . . f f f f f f f f . . . 
        . . . . . f 1 1 1 1 1 1 f . . . 
        . . . . . f 1 1 f 1 f 1 f . . . 
        . . . . . f f 1 1 4 4 f f . . . 
        . . . . f f 1 1 1 1 1 1 f f . . 
        . . . . f 1 1 1 1 1 1 1 1 f . . 
        . . . f f 1 1 1 1 1 1 1 1 f f . 
        . . . f 1 1 1 1 1 1 1 1 1 1 f . 
        . . . f f 1 1 1 1 1 1 1 1 f f . 
        . . . . f f 1 f f f f 1 f f . . 
        . . . . . f f . . . . f f . . . 
        . . . . . f f . . . . f f . . . 
        . . . . . f f . . . . f f . . . 
        . . . . . f f . . . . f f . . . 
        . . . . f f f f . . f f f f . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairEast, function (sprite, location) {
    ClearLevel()
    level = 2
    CreateLevel()
})
function CreateLevel () {
    if (level == 1) {
        tiles.setTilemap(tilemap`level1`)
        tiles.placeOnRandomTile(chicken, sprites.castle.tileGrass2)
        for (let index = 0; index < 3; index++) {
            bad_boy = sprites.create(img`
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f11111111f.......
                ......fd11111111df......
                ......fd11111111df......
                ......fddd1111dddf......
                ......fbdbfddfbdbf......
                ......fcdcf11fcdcf......
                .......fb111111bf.......
                ......fffcdb1bdffff.....
                ....fc111cbfbfc111cf....
                ....f1b1b1ffff1b1b1f....
                ....fbfbffffffbfbfbf....
                .........ffffff.........
                ...........fff..........
                ........................
                ........................
                ........................
                ........................
                `, SpriteKind.Enemy)
            bad_boy.follow(chicken, 20)
            tiles.placeOnRandomTile(bad_boy, sprites.dungeon.darkGroundCenter)
        }
    } else if (level == 2) {
        tiles.setCurrentTilemap(tilemap`level0`)
        tiles.placeOnRandomTile(chicken, assets.tile`myTile6`)
        info.startCountdown(20)
        for (let index = 0; index < 3; index++) {
            bad_boy = sprites.create(img`
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f11111111f.......
                ......fd11111111df......
                ......fd11111111df......
                ......fddd1111dddf......
                ......fbdbfddfbdbf......
                ......fcdcf11fcdcf......
                .......fb111111bf.......
                ......fffcdb1bdffff.....
                ....fc111cbfbfc111cf....
                ....f1b1b1ffff1b1b1f....
                ....fbfbffffffbfbfbf....
                .........ffffff.........
                ...........fff..........
                ........................
                ........................
                ........................
                ........................
                `, SpriteKind.Enemy)
            bad_boy.follow(chicken, 20)
            tiles.placeOnRandomTile(bad_boy, assets.tile`myTile2`)
        }
    } else {
    	
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = "DOWN"
    chicken.setImage(img`
        . . . . . . 2 2 . . . . . . . . 
        . . . f f f f f f f f . . . . . 
        . . . f 1 1 1 1 1 1 f . . . . . 
        . . . f 1 f 1 1 f 1 f . . . . . 
        . . . f f 1 4 4 1 f f . . . . . 
        . . f f 1 1 1 1 1 1 f f . . . . 
        . . f 1 1 1 1 1 1 1 1 f . . . . 
        . f f 1 1 1 1 1 1 1 1 f f . . . 
        . f 1 1 1 1 1 1 1 1 1 1 f . . . 
        . f f 1 1 1 1 1 1 1 1 f f . . . 
        . . f f 1 f f f f 1 f f . . . . 
        . . . f f . . . . f f . . . . . 
        . . . f f . . . . f f . . . . . 
        . . . f f . . . . f f . . . . . 
        . . . f f . . . . f f . . . . . 
        . . f f f f . . f f f f . . . . 
        `)
})
info.onLifeZero(function () {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    game.over(true, effects.smiles)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(1000)
})
let bad_boy: Sprite = null
let bird_projectile: Sprite = null
let direction = ""
let chicken: Sprite = null
let level = 0
level = 1
chicken = sprites.create(img`
    . . . . . . 2 2 . . . . . . . . 
    . . . f f f f f f f f . . . . . 
    . . . f 1 1 1 1 1 1 f . . . . . 
    . . . f 1 f 1 1 f 1 f . . . . . 
    . . . f f 1 4 4 1 f f . . . . . 
    . . f f 1 1 1 1 1 1 f f . . . . 
    . . f 1 1 1 1 1 1 1 1 f . . . . 
    . f f 1 1 1 1 1 1 1 1 f f . . . 
    . f 1 1 1 1 1 1 1 1 1 1 f . . . 
    . f f 1 1 1 1 1 1 1 1 f f . . . 
    . . f f 1 f f f f 1 f f . . . . 
    . . . f f . . . . f f . . . . . 
    . . . f f . . . . f f . . . . . 
    . . . f f . . . . f f . . . . . 
    . . . f f . . . . f f . . . . . 
    . . f f f f . . f f f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(chicken, 80, 80)
scene.cameraFollowSprite(chicken)
info.startCountdown(20)
info.setLife(2)
CreateLevel()
