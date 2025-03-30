function mutat(x_: number, y_: number, c_: number=0) {
    let y = 0
    let x = 0
    let l = 0
    let c = 0
    x = x_ - 1
    y = y_ - 1
    l = x>=8 ? 64 : 0
    x = x>=8 ? x-8 : x
    x = y % 2 == 0 ? x : 7 - x
    c = c_ == 1 ? neopixel.rgb(maxlit, maxlit, 0) : (c_ == 2 ? neopixel.rgb(0, 0, maxlit) : neopixel.rgb(0, 0, 0))
    strip.setPixelColor(l + y * 8 + x, c) //neopixel.rgb(maxlit, 0, 0))
    strip.show()
    basic.pause(100)
}

function mutat1(){
    let i=0

}

let strip: neopixel.Strip = null
let maxlit = 0
//let index = 0
pins.setPull(DigitalPin.P1, PinPullMode.PullNone)
let no_of_LEDs = 128
maxlit = 5
strip = neopixel.create(DigitalPin.P1, no_of_LEDs, NeoPixelMode.RGB)

basic.forever(function on_forever() {
    let i = 0
    i = 1
    while (i <= 10) {
        mutat(i, 1, 2)
        //mutat(i, 2)
        i += 1
    }
    mutat(9,1)
})