music.rest(music.beat(BeatFraction.Whole))
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        led.plot(0, 2)
        music.ringTone(262)
    } else if (poitch2.testSwitch(DigitalPin.P8)) {
        led.plot(1, 4)
        music.ringTone(294)
    } else if (input.pinIsPressed(TouchPin.P1)) {
        led.plot(1, 3)
        music.ringTone(330)
    } else if (poitch2.testSwitch(DigitalPin.P12)) {
        led.plot(2, 4)
        music.ringTone(349)
    } else if (poitch2.testSwitch(DigitalPin.P13)) {
        led.plot(3, 4)
        music.ringTone(392)
    } else if (input.buttonIsPressed(Button.B)) {
        led.plot(4, 2)
        music.ringTone(440)
    } else {
        basic.clearScreen()
        music.rest(music.beat(BeatFraction.Sixteenth))
    }
})
