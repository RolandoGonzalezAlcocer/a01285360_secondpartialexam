let Baby_Boomers = 0
let Millenials = 0
let SumBirthYears = 0
let age = 0
let dice_number = 0
let y_coordinate = 0
let x_coordinate = 0
input.onButtonPressed(Button.A, function () {
    Baby_Boomers = 0
    Millenials = 0
    SumBirthYears = 0
    for (let index = 0; index < 20; index++) {
        age = randint(1949, 2010)
        basic.showNumber(age)
        if (age >= 1949 && age <= 1968) {
            basic.showString("Baby Boom")
            Baby_Boomers += 1
        } else if (age >= 1969 && age <= 1980) {
            basic.showString("X Generation")
        } else if (age >= 1981 && age <= 1993) {
            basic.showString("Millenial")
            Millenials += 1
        } else if (age >= 1994 && age <= 2010) {
            basic.showString("Z Generation")
        }
        SumBirthYears += age
    }
    basic.showString("Average Year of Birth =")
    basic.showNumber(Math.round(SumBirthYears / 20))
    basic.showString("Millenials =")
    basic.showNumber(Millenials)
    basic.showString("Baby Boomers =")
    basic.showNumber(Baby_Boomers)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P1, function () {
    for (let screen_number = 0; screen_number <= 5; screen_number++) {
        basic.showNumber(screen_number)
    }
    basic.clearScreen()
    dice_number = randint(1, 6)
    basic.showNumber(dice_number)
    if (dice_number == 6 || dice_number == 3) {
        basic.showString("Win")
        music.playMelody("C E G C5 E G B C5 ", 130)
    } else {
        basic.showString("Lose")
        music.playTone(208, music.beat(BeatFraction.Double))
    }
    basic.clearScreen()
})
basic.forever(function () {
    while (input.buttonIsPressed(Button.B)) {
        y_coordinate = 2
        x_coordinate = 0
        for (let x_coordinate = 0; x_coordinate <= 4; x_coordinate++) {
            led.plot(x_coordinate, y_coordinate)
            basic.pause(200)
            led.unplot(x_coordinate, y_coordinate)
            basic.pause(200)
        }
    }
})
