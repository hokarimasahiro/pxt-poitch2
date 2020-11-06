music.rest(music.beat(BeatFraction.Whole))
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        music.ringTone(262)
    } else if (poitch2.testSwitch(DigitalPin.P8)) {
        music.ringTone(294)
    } else if (input.pinIsPressed(TouchPin.P1)) {
        music.ringTone(330)
    } else if (poitch2.testSwitch(DigitalPin.P12)) {
        music.ringTone(349)
    } else if (poitch2.testSwitch(DigitalPin.P13)) {
        music.ringTone(392)
    } else if (input.buttonIsPressed(Button.B)) {
        music.ringTone(440)
    } else {
        basic.clearScreen()
        music.rest(music.beat(BeatFraction.Sixteenth))
    }
})
