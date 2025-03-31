function mutat(x_: number, y_: number, c_: number = 0) {
    let y = 0
    let x = 0
    let l = 0
    let c = 0
    x = x_ - 1
    y = y_ - 1
    l = x >= 8 ? 64 : 0
    x = x >= 8 ? x - 8 : x
    x = y % 2 == 0 ? x : 7 - x
    c = c_ == 1 ? sarga : (c_ == 2 ? piros : (c_==3 ? kek : fekete))
    strip.setPixelColor(l + y * 8 + x, c) //neopixel.rgb(maxlit, 0, 0))
}

function mutat_(n_: number = 0, c_: number = 0) {
    let x = 0
    let y = 0
    switch (n_) {
        case 0:
            for (x = 1; x <= 16; x++) mutat(x, 8, 2)
            for (y = 1; y <= 8; y++) mutat(1, y, 2)
            for (x = 2; x <= 16; x++) for (y = 1; y <= 7; y++) mutat(x, y, 3)
            break
        case 1:
            x = 3
            for (y = 2; y <= 6; y++) {mutat(x, y, c_); mutat(x, y, c_)}
            break
        case 2:
            x = 5
            for (y = 2; y <= 6; y++) mutat(x, y, c_)
            mutat(x+1, 2, c_)
            break
        case 3:
            x = 8
            for (y = 2; y <= 6; y++) mutat(x, y, c_)
            mutat(x+1, 2, c_)
            break
        case 4:
            x = 11
            for (y = 2; y <= 6; y++) mutat(x, y, c_)
            mutat(x+1, 2, c_)
            mutat(x+1, 4, c_)
            mutat(x+1, 6, c_)
            mutat(x+1, 7, c_)
            break
        case 5:
            x = 14
            for (y = 2; y <= 4; y++) { mutat(x, y + 2, c_); mutat(x+1, y, c_) }
            mutat(x, 2, c_)
            mutat(x+1, 6, c_)
            break
    }
    strip.show()
}

function mutatMind(c_: number = 0) {
    let i = 0
    for (i = 1; i <= 5; i++) mutat_(i, c_)
    strip.show()
}

function villog(n_:number, c_:number=0){
    let i = 0
    for (i = 1; i <= n_; i++) {
        mutatMind(c_);
        basic.pause(200)
        mutatMind(1-c_);
        basic.pause(200)
    }
}

function fut(c_: number) {
    let i = 0
    for (i = 1; i <= 5; i++) {
        mutat_(i, c_)
        basic.pause(200)
        //if (kumm_ = 0) mutat_(i, 1 - c_)
    }
    strip.show()
}

function fut_(c_: number) {
    let i = 0
    for (i = 1; i <= 5; i++) {
        mutat_(i, c_)
        basic.pause(200)
        //if (kumm_ = 0) 
        mutat_(i, 1 - c_)
    }
    strip.show()
}

let strip: neopixel.Strip = null
let maxlit = 6
let fekete = neopixel.rgb(0, 0, 0)
let sarga = neopixel.rgb(maxlit, maxlit, 0)
let piros = neopixel.rgb(maxlit / 2, 0, 0)
let kek = neopixel.rgb(0, 0, maxlit / 2)
let no_of_LEDs = 128
pins.setPull(DigitalPin.P1, PinPullMode.PullNone)
strip = neopixel.create(DigitalPin.P1, no_of_LEDs, NeoPixelMode.RGB)
mutat_()//0,2)

basic.forever(function on_forever() {
    let i = 0
    i = 1
    /*while (i <= 16) {
        mutat(i, 1, 2)
        mutat(i, 8, 2)
        //mutat(i, 2)
        i += 1
    }*/
    mutatMind(1)
    basic.pause(1000)
    mutatMind()
    basic.pause(1000)
    villog(5,1)
    basic.pause(1000)
    fut_(1)
    basic.pause(1000)
    fut(1)
    basic.pause(1000)
    fut_(0)
    basic.pause(1000)
    fut(0)
    basic.pause(1000)
    //fut(0, 1)
    //basic.pause(2000)
    /*mutat1(1)
    mutat2(1)
    mutat3(1)
    mutat4(1)
    mutat5(1)
    basic.pause(1000)
    mutat1(0)
    basic.pause(200)
    mutat1(1)
    basic.pause(200)*/

})