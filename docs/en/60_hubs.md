# Hubs

All BroodMinder sensors transmit data via Bluetooth. There are several ways to collect the data - via your smartphone (see the Bees App section of the manual) or via a hub.

We uses hubs to monitor and send data to the cloud automatically every hour so that you can see your current hive status anywhere there is internet available. You can picture a bicycle wheel where your BroodMinder devices are the spokes and the hub listens to all of them and sends their data to the cloud.

We also have special cases for swarming. It will send a text or email notification within 10 minutes of the event.

- BroodMinder-T91 Naked Cell Hub - Cellular hub must be recharged every 6-14 months
- BroodMinder-T91 Solar Cell Hub - Cellular hub, solar powered, never needs recharging
- BroodMinder-WIFI Internal Antenna - WIFI hub for apiaries with good WIFI avaiable
- BroodMinder-WIFI External Antenna - WIFI hub with extended range
- BroodMinder-SubHub - This is a hub with no WIFI or Cellular. It can be used in remote locations to collect all sensor data into one device which makes downloading data to your cell phone very fast. It can also be used to connect remote (50-400 meters) hives to a shared BroodMinder-T91.
- BroodMinder-LoRa - In development. Estimated delivery Fall 2023

All of these hubs are monitored and set up using the BroodMinder Bees App. 

All of the hubs sample the BroodMinder devices every 10 minutes.

We are happy to help you configure your system. The variety of apiary locations and installations is vast and it can be confusing to get everything working correctly. We have made these tools to be flexible and work in most situations, everywhere from downtown New York City to the rural Yukon Territory.

## BroodMinder-T91 Cell Hub (BRM-54)

The BroodMinder-T91 Cell Hub is based on the Nordic "Thingy 91".

You will find an installation video [here](https://youtu.be/4Mh9DT7VblI).

![image-20230408081237234](../assets/60_hubs.assets/image-20230408081237234.png)

Installation is super easy because we set everything up before shipping.

- We recommend you test everything before you take it to your apiary.

- You will get an email from BroodMinder when we ship the hub. If you don't then check your junk email folder, or contact us. The email has instructions on connecting the hub to your account. There are two cases.

   1. If there is a link in the email, then click it and you will be guided to connect the hub to your account and claim the one year token which is included with purchase.

   2. If there is not a link, then we assigned it to your account before shipping. 

- When you get your hub, turn it on. There is a slide switch

   ![image-20230408082210955](../assets/60_hubs.assets/image-20230408082210955.png)

- Go to MyBroodMinder.com, choose "Configure" and expand the "Hubs"  section.  This is where you can manage your hub.

- Click on the Manage icon to assign or move it to an apiary. 

- You must also assign a token. A token is a virtual coin that we use to pay for the 24/7 upload service. You should receive 1 year service with the hub. If you did not, then contact us at support@broodminder.com.

- After you see it working you can move it to your apiary.

- If you have a solar T91, then ensure that the gasket is seated correctly when you replace the lid. Also make certain that the solar panel is facing towards the sun for most of the day.

- If you have a naked T91, then ensure that it is in a weatherproof housing of some sort. We recommend the Lacrosse Solar Shield. We also recommend that you place the T91 in the mesh bag we include. This will keep out small bugs (such as earwigs) which are attracted to the slight warmth.

   

- ![image-20230408083616388](../assets/60_hubs.assets/image-20230408083616388.png#mediumImg)An external Antenna kit is available. The antenna plugs into the connector marked "LTE" on the Thingy91. 

   ![image-20230408084030343](../assets/60_hubs.assets/image-20230408084030343.png)

   - Place the connector through the plastic mounting bracket
   - Push the connector into the Thingy91 jack.
   - Secure the bracket with the screw that we included.

![image-20230408084356882](../assets/60_hubs.assets/image-20230408084356882.png)

## BroodMinder-WIFI Hub (BRM-60)

The BroodMinder-WIFI comes in two flavors. One with an internal antenna and one with an external antenna. If you have good WIFI in your apiary, the internal antenna version should work for you.

We recommend setting this up where there is strong WIFI and a nice work area prior to placing in your apiary.

You will find an installation video [here](https://youtu.be/10jw51jqmT0)



Installation![image-20230408085525063](../assets/60_hubs.assets/image-20230408085525063.png)

- We recommend you test everything before you take it to your apiary.

- You will get an email from BroodMinder when we ship the hub. If you don't then check your junk email folder, or contact us. The email has instructions on connecting the hub to your account. There are two cases.

  1. If there is a link in the email, then click it and you will be guided to connect the hub to your account and claim the one year token which is included with purchase.

  2. If there is not a link, then we assigned it to your account before shipping. 

- Remove the cover and pull out the "Remove before use" tabs. The LED should flash for a few seconds.

- Now start up the Bees App on your phone or tablet and choose the Devices page. You should see the BroodMinder-WIFI show up on the list. 

  pic

- Press the "Claim Device" button an![image-20230408093307902](../assets/60_hubs.assets/image-20230408093307902.png#mediumImg)d follow the prompts to add it to your inventory.

  

- Click the "..." to the right of the WIFI hub and choose "Show Details"

- Choose the "..." at the top right corner and select "Configure Wifi"

  - Now you can "Scan" and search for WIFI networks that the hub can see.

  - After scanning, select your preferred hub

  - Enter the password

  - Save - the hub will now connect to your WIFI network

  - Once connected, you can press the "Upload Now" button to send data immediately.

  - You can also send data by pressing the button near the LED on the BroodMinder-WIFI circuit board.

    

- Go to MyBroodMinder.com to see the results (results shown beloware from a hub running for > 1 week)![image-20230408093827071](../assets/60_hubs.assets/image-20230408093827071.png)

  ![image-20230408094805586](../assets/60_hubs.assets/image-20230408094805586.png)

  

## BroodMinder-SubHub (BRM-52)

### **Installation**

The video , [BroodMinder-ASP (Apiary Starter Pack) Installation](https://youtu.be/B14U5S49EEE ) shows how this works together.

Installation is simple. Open the box and pull out the battery tabs and the -SubHub is running. You will see it show up in the phone app with an ID beginning with 52:. Once running, it will listen for other BroodMinder devices and add their data to it’s internal log. The cool part is that the -SubHub will now advertise (send out) that data to be received by a BroodMinder-CELL, or a BroodMinder app.


!!! warning 
    Due to power constraints, the BroodMinder-WiFi does not operate with the BroodMinder-SubHub.


If you are watching with a BroodMinder app, you will see your devices show up on the list. Each device is advertised for 5 seconds, rolling through all the known devices one after the other. You will see them marked in the device list as coming via the -SubHub.

The BroodMinder-Bees app is the best tool to interact with your -SubHub. You can use it to setup and also to retrieve stored data.

You *can* also take an old cell phone, connect it to your local WiFi (or with a cell subscription) and run the BroodMinder Apiary app in Hub Mode. It will push the sensor data to MyBroodMinder.com every 10 minutes. Since the phone can be plugged into the wall for power it becomes very simple.  Note that to do this you must have a BroodMinder-Premium account.

We have seen better performance with iOS (Apple) phones or tablets. Some of the older Android devices work find, but some have problems with Bluetooth locking up.

If your apiary spans a long distance, you can employ multiple -SubHubs, one for each group of hives. They do not daisy chain, but they work directly to the central -CELL or app.

### Brief Explanation

It is a Bluetooth range extender and a high speed data vault in a box about the size of a TV remote.

The BroodMinder-SubHub will listen for all your BroodMinder devices and retransmit them using its long range transmitter. This means you can ‘hear’ your BroodMinder devices over 1000 feet (330 meters) away.

Secondly, the -SubHub stores all of this data, and you can read the data using our new turbo-transfer protocol (releasing spring 2021). You can read a month's worth of data from 50 devices in 2 minutes.

And finally, it also records the temperature of itself, allowing you to see your apiaries micro-climate, or even place it inside a swarm box to see when bees move in.

The subhub is shipped in a non-waterproof case. If you want to mount it outside, we recommend installing inside a solar shield. The La Crosse Technology 925-1418 Sensor Protection Shield with Mount ($18) is a very good choice and the subhub fits perfectly in it. It also fits in the Acurite version (06054M $17). A third possibility is a Hammond 1554C2 ($11.57) waterproof box available at Digikey.com. You can also just put it in a zip lock bag as the least expensive solution. The -SubHub enclosure is 1.05” x 1.85” x 5.00” (47 x 26 x127 mm).

![image-20230408100542204](../assets/60_hubs.assets/image-20230408100542204.png)

Why does the BroodMinder-SubHub exist?

It’s all about maximizing the value of hive monitoring. From the data our citizen scientists have been collecting over the last six years, we have learned that internal temperature tells us the most. We have learned to detect brood rearing, swarms, hive strength, and mating flights. And this is only the start. 

Fortunately, temperature is cheap and easy to measure. However, that data only does good if you can get it to the beekeeper. The -SubHub makes that easier. Here are a couple of scenarios. 

### **Scenario 1**

Setting: Your BroodMinder enabled hives are 500 feet from a building with power and you have an old cell phone.

Configuration: Put the -SubHub in the middle of your hives and the cell phone in the building. Run the apiary app in hub mode.

Outcome: Your hive data will be sent up every 10 minutes. In the event of a swarm, you will receive an email or text message as soon as it is detected.

### **Scenario 2**

Setting: This apiary is remote and there is no power nearby. You are already set up with a BroodMinder-Hub, however some of your hives or swarm traps are 700 feet away.

Configuration: Put the -SubHub near the hives. Since the -SubHub also measures temperature, you can place it inside the swarm trap to detect when bees move in. You can have multiple -SubHubs feeding the BroodMinder-CELL/WIFI hub if you wish.

Outcome: More of your apiary can be monitored with minimal cost. Temperature increase in swarm traps will show on MyBroodMinder.com when bees move in. 

### **Scenario 3**

Setting: This apiary is remote and there is no power and no cell tower nearby..

Configuration: Put the -SubHub near the hives. It will record data from all the nearby BroodMinders.

Outcome: When you visit your apiary, you can read all of the the data from all of the hives, typically in less than a minute. You will be able to view this data with the new BroodMinder-Bees app in a manner similar to MyBroodMinder. Then you can send the data to MyBroodMinder when you arrive back in civilization.

![image-20230409132916993](../assets/60_hubs.assets/image-20230409132916993.png)

![image-20230409132944428](../assets/60_hubs.assets/image-20230409132944428.png)

![image-20230409133014617](../assets/60_hubs.assets/image-20230409133014617.png)



How did you do all of this magic?

It wasn’t easy. Our team has been working on the BroodMinder-SubHub and MyBroodMinder ecosystem for over a year. That time was split between solving the technical challenges and making the system flexible and easy to use. We feel it is a game changer and that you will love it.

For the folks that love all of the technical details, here they are.

The -SubHub is using the same circuitry that our BroodMinder-W2 uses. It uses a Silicon Labs, long range Bluetooth Low Energy (BLE) module. We have measured the advertising range of the module with an iPhone 11 at greater than 1000 feet. We got usable data at 1700 feet.

By using 4 AA batteries, we have much more power to play with. This enables us to listen for BroodMinder devices for 20 seconds every ten minutes with anticipated battery life greater than a year.

There is a one megabyte memory added to store the log data. This allows us to store 35,000 records or roughly data from 100 devices for two weeks (or less devices for longer, you can do the math). The -SubHub has the capacity to keep track of 128 BroodMinder devices at one time.

The data will be read using BLE SPP (Serial Port Profile). We have timed transferring the entire 35,000 record log to take about 120 seconds using iOS and less than that for new Android devices (longer for phones 4 or 5 years old). The new BroodMinder-Bees app supports this high speed transfer.

The final piece is in Advertising the data from the -SubHub. As mentioned above, the -SubHub listens for new data for 20 seconds every 10 minutes. It then modifies it’s BLE advertisement packet to ‘mock’ all of the BroodMinder devices it heard. The -SubHub advertises a different device every 5 seconds thus allowing data from 12 BroodMinders to be sent every minute which means over 100 devices in 10 minutes. 

We have established these parameters in order that the batteries last at least a year. While they will be adjustable for special circumstances, we feel that the standard setup will cover 99% of the cases.

That is basically how it works. Of course there are many, many details in making the pieces fit together seamlessly and to be supported by the equipment in the field. And, as always, during deployment we will be watching closely.

If you have a CELL or WIFI device, the subhub will amplify the data sent from the devices and extend the normal 10-15 foot range up to 300-500 feet (depending on obstacles in the way). Multiple subhubs can be located in the apiary to ensure complete coverage.

### **Range Testing**

If you are going a long distance, we have a few hints for you.

1) The -SubHub’s radio waves are directional. The batteries block the antenna. This means that the -SubHub circuit board should be on the side of the -Hub or phone receiving the data.
2) You can use the BroodMinder-Bees app to do your testing. Please watch the video  [BroodMinder-ASP (Apiary Starter Pack) Installation](https://youtu.be/B14U5S49EEE ) for the best information on this.
3) A super way to test the range is using an app and your phone. Nordic Semiconductor has an app called “nRF Connect” for both iOS and Android. It is the best Bluetooth app out there. Here are a couple of usage notes.

a.   Go to *Settings* | *Scanner* | *Scanner Timeout* >> set to *Never*

b.   Start scanning in the “*Scanner*” tab at the bottom of the app

c.   BroodMinder sensors will be named by their ID (e.g. 57:01:01)

d.   Press the up arrow beside “*No Filter*” and put a “:” in the *Name* field and flip the switch beside it. This will only show devices with a “:” (such as BroodMinder devices.). You can also limit it to a specific device this way.

e.   Now select the RSSI Graph and you will see each time the phone gets an update from the BroodMinder.

f.   There are many other great options in the program to explore if you like this sort of thing.

 

As a general note, detecting advertisements does not mean that you can connect to a device. Connections require stronger signals. This means that if you want to download the log, or update firmware, you may need at least a 40-50% signal level.

 





Good luck, we are very excited about the BroodMinder-SubHub and hope it will be of use to you.

