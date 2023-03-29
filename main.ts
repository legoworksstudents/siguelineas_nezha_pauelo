function avanzar (power1: number, power2: number) {
    neZha.setMotorSpeed(neZha.MotorList.M1, power1 * 1)
    neZha.setMotorSpeed(neZha.MotorList.M4, power2 * 1)
}
function seguidor (tiempo: number) {
    while (control.millis() < tiempo * 1000) {
        if (PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.TrackingStateType.Tracking_State_0)) {
            avanzar(10, 0)
        } else if (PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.TrackingStateType.Tracking_State_2)) {
            avanzar(5, 10)
        } else {
            avanzar(10, 5)
        }
    }
    neZha.stopAllMotor()
}
let tiempo = 0
basic.showIcon(IconNames.Heart)
seguidor(5)
basic.showIcon(IconNames.Asleep)
basic.forever(function () {
    tiempo += 1
})
