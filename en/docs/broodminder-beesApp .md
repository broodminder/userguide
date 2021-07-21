# Broodminder-BEES App

## Overview

Introduced in 2021, the BroodMinder-BEES app is our most powerful app. We strongly recommend using it as opposed to the BroodMinder-Lite app or the BroodMinder-Apiary app
The -BEES app is structured similar to the MyBroodMinder.com web site. We have reworked it to improve the user experience

- One touch reading of all sensors within range of the phone/tablet
- Create and modify apiaries, hives, and device locations
- Device centric view and Apiary centric view
- Tightly integrated with MyBroodMinder.com w/automatic sync for remote apiaries which have no internet (cellular) access.
- BroodMinder-SubHub support
    - Real-time display of device signal levels
    - Read composite device log and assign data to proper BroodMinder devices
- Voice powered hive notes
- Improved Bluetooth
    - Support for simultaneous data download
    - High speed -SubHub data download

Basic operation for a new user
- First Time
    - Download BroodMinder-Bees from your app store
    - Start the app and enter (or create) your MyBroodMinder.com user ID & password
    - The DEVICES tab will automatically display all BroodMinder devices you own and all BroodMinder devices it detects close by
    - Claim your devices
    - Create an Apiary and Hive (APIARIES tab)
    - Assign your BroodMinder devices to a location within the hive (DEVICES tab)

- Every visit
    - Choose the APIARIES tab and press SYNC. Stored data will read and local and MyBroodMinder.com databases will be updated.

## DEVICES Tab

The DEVICES tab gives you full control of BroodMinder devices which are:
A) in your device inventory on MyBroodMinder.com
B) seen by your phone via Bluetooth.
This means that when you visit any apiary that contains BroodMinder devices, you can see their current readings.
You can Sync individual devices from this page by pressing the “...” beside the device.

![](./images/beesApp/devices_tab.png#largeImg)


**Hint**: The filter button is awesome. It will limit what is shown on this list. For example if you select “Nearby”, it will show only those device where the phone sees the BroodMinder. Then if you refresh the screen (pull down in iOS or Android) it will clear the list and then fill it back in as it see the Bluetooth signal from each BroodMinder. This is a great way to verify your BroodMinder is operating.

## APIARIES Tab

The APIARIES tab is where you will spend most of your time after your hives are set up. You must have a MyBroodMinder (MBM) account (free or premium) since your apiary/hive configuration is stored there (do that on the setting tab or at MyBroodMinder.com)

![](./images/beesApp/apiaries_tab.png#largeImg)

**Hint**: Sometimes it works better to sync Hive-by-Hive if they are far apart. You can choose Sync with the “...” for each hive. Start the hives close to the phone, you don’t have to wait for each hive to finish before starting the next one. Then move the phone to a new position close to the remaining hives and sync again. If you tap on the sync status that appear near the top, it will show more details about exactly where it is in the synchronizing process.

### Apiary Options

You can do the Apiary and Hive configuration from the app now. Get here by pressing the “...” at the
top of the page

![](./images/beesApp/apiary_option.png#largeImg)

### Hive Options

When you choose the “...” beside the hive you have a lot of choices. All of these controls (such as Sync) operate at the hive level. That is, they are about controlling or change the hive, not the device. Note that these controls will modify both the data stored on your phone and the data stored in the cloud at MyBroodMinder.com

![](./images/beesApp/hive_option.png#largeImg)

**Hint**:   Tap the hive and it will bring up more details of the BroodMinder sensors.
        Double tap the hive and it will bring up the chart.
        The note function allows the use of your microphone for easy transcription.

## SETTINGS Tab

The settings tab allows you to customize your Bees app.

![](./images/beesApp/settings_tab.png#largeImg)

**Hints**:  Under settings there are advanced features such as deleting the local database.
        Fast Connect will change the advertising ‘ping’ from the BroodMinder devices from 5 seconds to 1 second. This will make devices connect quicker, but also reduce battery life to several months instead of several years. 

## HELP Tab

Help is help we hope.

![](./images/beesApp/help_tab.png#largeImg)

## SubHub Devices

SubHub devices are a bit special since they are listening to all of your nearby BroodMinder devices.
When you press the three dots by a SubHub, this menu pops up

![](./images/beesApp/subhub_devices.png#largeImg)

### SubHub Details

This page is where you control the SubHub. You can sync all of the data and you can view live data from here. See the next pages for more detail

![](./images/beesApp/subhub_details.png#largeImg)

### SubHub Show All Devices

When you set up your SubHub, you can use this display to know exactly which devices your SubHub sees. All BroodMinders advertise every 5 or every 1 second. That means you should see them all show up here if your close enough. It will also show any Bluetooth Low Energy (BLE) device in range if you uncheck the “BroodMinder Devices Only” box

![](./images/beesApp/subhub_show.png#largeImg)

**Hint**: This is an especially useful page to use when optimizing the position of your SubHub. It is handy even if you do not sync with your phone. You will see what devices are being extended to your remote hub device.


