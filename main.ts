basic.forever(function () {
    music.playMelody("C D E F G A B C5 ", 120)
    servos.P2.setAngle(180)
    servos.P1.run(100)
    radio.sendString("999")
    kitronik_servo_lite.setDistancePerSecond(12)
})
