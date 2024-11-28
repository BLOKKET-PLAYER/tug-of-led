input.onButtonPressed(Button.A, function () {
    rope += -0.2
})
input.onButtonPressed(Button.B, function () {
    rope += 0.2
})
let rope = 2
basic.forever(function () {
    basic.clearScreen()
    led.plot(rope, 2)
    if (rope < 0) {
        basic.showString("A WINS")
    } else if (rope > 4) {
        basic.showString("B WINS")
    }
})
