#include <Servo.h>
Servo s1;
Servo s2;
void setup() {
  // put your setup code here, to run once:
  s1.attach(9);
  s2.attach(10);
}

void loop() {
  // put your main code here, to run repeatedly:
  s1.write(map(analogRead(A0), 0, 1023, 0, 179));
  s2.write(map(analogRead(A0), 0, 1023, 0, 179));
}
