# Troubleshooting Cell Hub models 44, 46 and 50

NOTE : this procedure applies only to the "old" hubs models 44, 46 and 50.

Those hubs are not available trough the Broodminder Bees app. **You will need to install Broodminder Cell App** [Android](https://play.google.com/store/apps/details?id=com.broodminder.cell&hl=en_US&gl=US), [iOs](https://play.google.com/store/apps/details?id=com.broodminder.cell&hl=en_US&gl=US) to manage the settings



![Hub Cell](./images/hub_gsm_old.png)


## Install SIM
Here are the steps to install SIM

1. unplug the 3G Card
2. open the shield : slide it up through the antenna with the thumb then pull up to leave it
3. introduce SIM in the right position
![Sim card](./images/chub/IMG_7755.JPG#mediumImg)

4. pull down and slide down to lock
![Sim card installed](./images/chub/IMG_7757.JPG#mediumImg)



## Typical startup
Switch on the hub,
you should see :
At startup after switching on you should see

- Led D1 (orange) blinking several times
- Led PWR1 (green) on
- Led STAT (yellow) on
- then after a while, when it has established connectionto the network => all leds off

Note that for every time you’ll go with the Cell app to `Configure > Diagnostics > Cell network` you should see the PWR1 green led lighting on

![Start1](./images/chub/start1.JPG#mediumImg)
![Start2](./images/chub/start2.JPG#mediumImg)
![Start3](./images/chub/start3.JPG#mediumImg)
![Start4](./images/chub/start4.JPG#mediumImg)
![Start5](./images/chub/start5.JPG#mediumImg)



## Cell network connection
It can happen that your hub finds out 3G network but it is not able to acquire cervice. 
![Acquiring cellular service](./images/chub/IMG_7749.JPG#mediumImg)

To find out what is wrong first of all check your APN code

### Check you have the right APN
Every SIM provider has its own APN (Access Point Name) it can be *hologram*, *matooma.m2m*, etc...
Go to `Configure > Diagnostics > Cell network > Custom APN`

![APN](./images/chub/IMG_7758.PNG#mediumImg)

![APN](./images/chub/IMG_7759.PNG#mediumImg)



### Check modem communication and trace
Just after switching on the hub, go quick to `Configure > Diagnostics > Modem communication` There you can follow the connection process. Let it run until it stops and then copy this output and send it to support

This is a typical startup trace :
````
AT
+UMWI: 0,1
+UMWI: 0,2
+UMWI: 0,3
+UMWI: 0,4
AT
OK
AT+UGPIOC=23,0,1
AT+UGPIOC=23,0,1
OK
AT&F0
AT&F0
OK
ATE0
ATE0
OK
AT&K3
OK
AT+CSQ
+CSQ: 14,1
AT+UPSD=0,1,"hologram0,1,""
OK
AT+UPSDA=0,3
OK
AT+ctzu=1
OK
AT+UPSND=0,0
+UPSND: 0,0,"10.59.51.129"
OK
OK
beekeeping_BaseURL?250043A5001045050043A0104000001000140000000000999999999999999.","r.txt"
OK
+UUHTTPCR: 0,1,1
AT+URDFILE="r.txt"
+URDBLOCK: "r.txt",50,"HTTP/1.0 200 OK
Content-Type: application/vnd.api"
OK
no more
AT+URDFILE="r.txt"
+URDBLOCK: "r.txt",50,".cellresponsewrappermedia+json
X-Appengine-Log-Fl"
OK
no more
AT+URDFILE="r.txt"
+URDBLOCK: "r.txt",50,"ush-Count: 0
X-Cloud-Trace-Context: b54c6eae28321"
OK
no more
AT+URDFILE="r.txt"
+URDBLOCK: "r.txt",50,"ff97d2787042a9e8a98
Date: Sun, 20 Sep 2020 15:48:"
OK
no more
AT+URDFILE="r.txt"
+URDBLOCK: "r.txt",50,"01 GMT
Server: Google Frontend
Content-Length: 4"
OK
no more
AT+URDFILE="r.txt"
+URDBLOCK: "r.txt",47,"2
{"code":"200","t":"[1600616881s2881h15]"}
"
OK
````

### Typical trace with a wrong APN 
left is wrong APN, right is OK
![Wrong APN trace](./images/chub/wrong_apn_trace.png#mediumImg)
