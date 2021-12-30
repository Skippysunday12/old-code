int buttons[6];
int notes[] = {262, 294, 330, 349, 392, 440, 494, 524};

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  int keyval = digitalRead(3);
  int keyval2 = digitalRead(5);
  Serial.println(keyval2);
  if (keyval == 1023){//
    tone(8, notes[0]);
    // 0 ohms
  }
  else if (keyval = 1){
    tone(8, notes[1]);
    // 220 ohms
  }
  else if (keyval = 0){
    tone(8, notes[2]);
    //560 ohms
  }
  else if (keyval >= 929 && keyval <= 934){
    tone(8, notes[3]);
    //1k ohm
  }  

  else if (keyval2 >= 696 && keyval2 <= 701){
    tone(8, notes[4]);
    //4k ohms
  }
  else if (keyval2 >= 650 && keyval2 <= 656){
    tone(8, notes[5]);
    //5k ohms(1k & 4k)
  }
  else if (keyval2 >= 509 && keyval2 <= 516){
    tone(8, notes[6]);
    //10k ohms
  }
  else if (keyval2 >= 336 && keyval2 <= 342){
    tone(8, notes[7]);
    //20k (2 10k)
  }
  else {
    noTone(8);
  }

}
