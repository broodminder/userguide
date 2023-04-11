# 🎉 New T2 SwarmMinder

The T2 temperature sensor makes a big leap forward this spring. The hardware remains unchanged but the heart of this small sensor is completely redesigned. Indeed the embedded software is now able to detect events within the hive. 

## How to convert a conventional T2 into a T2-SM?

![](./images/01_T2.png#smallImg) 

Conventional T2 sensors are referenced with type 41:xx:yy. To convert them to T2-SwarmMinder, the firmware has to be updated. To do this, open the Apiary App and display your sensors. When it finds them, the app detects the firmware version as in the example below.

![](./images/t2sm_apiary_upgrade_version.png#mediumImg)

By tapping underneath, you enter the sensor configuration screen. 

Here you have to follow two steps in the following order:

1. Synchronize the sensor to retrieve the latest data. **IMPORTANT - the update will erase data from memory**

2. Launch the firmware update

![](./images/t2sm_upgrade.jpeg#mediumImg)

3. Restart the sensor by pressing the button for more than 5 seconds. *It must flash 20 times* 

4. Refresh the sensor list in _Apiary_. Check that it is now called 47:xx:yy. Indeed all T2SMs should change their reference from 41 to 47.   

5. Once the firmware is installed, it is also possible to change the measurement frequency from 60 to 15 minutes (Button *Rate 15 minutes*). It is your choice. But don't leave this configuration all year round (it consumes more energy). Only during the swarming season.

## For those who have a hub 

The Hub currently transmits readings every hour. To integrate the T2-SM functions, its firmware is evolving. It will continue to transmit every hour except if an event is detected - in this case it will transmit it at the very moment of detection. 

For these functions to take effect, you must also update your firmware.

1. Open the **BroodMinder Cell** app, being close to your hub

2. Launch the proposed update

![](./images/t2sm_updateCell.png#mediumImg) 

## Go to MyBroodminder.com 

The association of the new sensor 47 with the hive is automatically done in MyBroodMinder.

The only configuration to be done in your preferences (*Configure > My Preferences > Email Alerts*) is to enter an email for the alerts.