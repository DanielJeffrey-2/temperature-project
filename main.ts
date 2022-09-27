let current_temperature = 0
/**
 * Created by:Daniel Jeffrey
 * 
 * Created on: Sept 27, 2022
 * 
 * This program displays the current temperature in degrees Celcius on the Micro:bit.
 */
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 2; index++) {
        current_temperature = input.temperature()
        basic.showNumber(current_temperature)
        basic.pause(1000)
    }
})
