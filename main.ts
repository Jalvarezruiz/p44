input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    veces += 1
})
let veces = 0
basic.showString("How many times can you press LOGO in 10 seconds?")
basic.showString("Ready? Go!")
let tiempo = input.runningTime()
basic.forever(function () {
    if (input.runningTime() - tiempo > 10000) {
        basic.showNumber(veces)
        control.reset()
    }
})
