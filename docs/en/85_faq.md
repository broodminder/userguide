# Frequently Asked Questions (FAQ)

Find answers about choosing BroodMinder equipment, collecting data, understanding your colonies, and troubleshooting your system.

## 1. Getting started

### How does the BroodMinder system work?

BroodMinder sensors measure hive conditions and communicate over Bluetooth. You can collect their data manually with the **BroodMinder Bees app**, or use a **BroodMinder Hub** (Cellular or Wi-Fi) to collect readings and send them to the cloud automatically, approximately once per hour. Sensors also store readings internally, so you do not need to synchronize every day. View your data in **MyBroodMinder**.

### Which sensors should I start with?

For a simple introduction, start with a **T2SM internal hive monitor** to follow hive temperature and learn about brood activity and winter survival. For a broader view, the **Citizen Science Kit** combines a hive scale with two internal temperature/humidity sensors, helping you follow both colony conditions and nectar flows.

### Do I need a Hub? Which type should I choose?

A Hub is optional: you can collect data during apiary visits with your phone. A Hub is useful if you want automatic uploads and timely alerts without visiting the apiary.

- **Cellular Hub:** includes a supplied, preconfigured data SIM; a convenient choice where cellular coverage is available.
- **Wi-Fi Hub:** suitable when your apiary has access to a Wi-Fi network.

Place the Hub centrally, where it can receive signals from your sensors. The reception range depends on the environment and sensor type. Scales can reliably reach 20 m or more, but internal hive sensors generally have a shorter range and are the limiting factor. Plan for approximately 10 m when using internal sensors.

### Where can I find installation instructions?

Start with the [Quick Start Guide](https://doc.mybroodminder.com/20_quick_start_guide/). More detailed documentation and video guides are available through the **Documentation** section of MyBroodMinder and BroodMinder's video resources.

## 2. Apps, accounts and subscriptions

### Which BroodMinder app should I use?

**Use the BroodMinder Bees app.** It is the current app for collecting sensor data and managing your monitoring system.

![BroodMinder Bees app](../assets/images/bees_app.png#smallImg)

Older apps may still be encountered, but are legacy products:

- **BroodMinder / BroodMinder Lite (2016–2018):** an earlier free app for viewing sensor data, graphs, exports and inspection notes; **deprecated**.

  ![BroodMinder Lite](../assets/images/05_broodminder_lite.png#smallImg)

- **BroodMinder Apiary (2018–2022):** an earlier app supporting collection from multiple sensors; **deprecated**.

  ![BroodMinder Apiary](../assets/images/11_0_broodminder_apiary.png#smallImg)

- **BroodMinder Cell:** a separate app used to configure/control legacy **Hub models 44 and 50**.

  ![BroodMinder Cell](../assets/images/11_0_broodminder_cell.png#smallImg)

### What can I do with a Free account?

The Free account is intended for smaller apiaries **up to five hives**. It provides cloud storage, viewing in MyBroodMinder, and manual sensor-by-sensor synchronization in the Bees app's **Devices** tab.

### What does Premium add?

BroodMinder Premium unlocks advanced features to help you monitor your colonies remotely, gain deeper insights, and manage your apiaries more efficiently.

- **Faster data collection:** Automatically synchronize all nearby sensors in one go using the **Manage** tab in the Bees app.
- **Real-time monitoring:** Connect your sensors to a BroodMinder Hub for automatic hourly data uploads and remote access to your apiary.
- **Real-time alerts:** Receive timely notifications about important colony events, including **SwarmMinder alerts** for potential swarming activity (requires a Hub).
- **Advanced analytics:** Access powerful tools to better understand your colonies and their environment:
    - **Colony Productivity:** Track nectar collection and daily weight changes.
    - **Brood Level:** Monitor brood development and colony strength.
    - **Nectar Flow Index:** Assess environmental conditions for nectar production.
    - **Weather Forecast:** Anticipate weather conditions affecting your bees.
    - **PhenoCast Bloom Model:** Predict flowering periods and potential forage availability.
    - **Forager activity count** when using a Beedar 

## 3. Collecting and updating data

### Do sensors store measurements when I am away?

Yes. Sensors take and store measurements **hourly** and typically retain about **one year of data** (often more than **7,000 readings**). This helps preserve readings between syncs.

**Important:** removing/replacing the battery, clearing memory in the app, or updating firmware may erase stored readings. **Synchronize your sensor data before maintenance.**

### How do I collect data with my smartphone?

1. Install and open the **BroodMinder Bees app** at your apiary.
2. Turn on Bluetooth and move within a few meters of your sensors.
3. With a **Free** account, synchronize sensors individually in **Devices**.
4. With **Premium**, use **Manage > Sync** to collect data from nearby sensors in sequence.

Once uploaded, the readings become available in MyBroodMinder.

### How does automatic collection with a Hub work?

A Hub listens for nearby BroodMinder sensors and uploads their readings automatically, typically **once per hour**. It can collect from multiple hives without a phone visit and supports remote monitoring and timely alerts. Reception depends on placement, hive construction and local obstacles.

### When does MyBroodMinder update my data?

- **Manual uploads:** appear after your phone completes the upload.
- **Hourly readings:** update as new data reaches the platform, generally each hour when available.
- **Daily calculations** (weather, brood, weight and related indicators): run **twice daily**, with results generally available around **06:30–07:30 UTC** and **12:30–13:30 UTC**.
- **Overnight processing:** missing data and device/hive location changes are reconciled around **01:00–03:00 UTC**.

Local times vary with daylight-saving time.

## 4. Understanding hive data

### What can temperature and humidity tell me?

During active brood rearing, bees regulate brood-nest temperature near 35°C (95°F). Stable internal temperatures can indicate active brood thermoregulation. If hive temperature increasingly follows outdoor temperature, consider inspecting the colony. Humidity readings provide additional insight into the hive's internal environment. Always interpret sensor readings alongside the season, sensor placement, and other observations. [Learn more →](https://doc.mybroodminder.com/50_mybroodminder_v5c_temperature/)

### What is the Brood Level indicator?

Brood Level estimates colony brood activity from patterns in internal hive temperature and expresses the result as a percentage. Higher values generally indicate stronger brood thermoregulation, while a decline can prompt closer observation or inspection. It is an estimate, not a direct count of brood cells. Relative changes over time are particularly useful for monitoring colony development. [Learn more →](https://doc.mybroodminder.com/50_mybroodminder_v5c_temperature/)

### What is the Nectar Flow Index (NFI)?

The Nectar Flow Index uses weather conditions—including temperature, humidity, rainfall, and wind—to estimate how favorable the environment is for nectar production. It describes potential conditions rather than measuring nectar actually collected by your bees. The index does not account for whether plants are currently blooming, so it should be interpreted alongside local flowering conditions. [Learn more →](https://doc.mybroodminder.com/50_mybroodminder_v5h_weather/#indexes)

### What does Colony Productivity measure?

Colony Productivity uses hive-scale weight measurements to calculate the daily net gain or loss generated by the bees, excluding beekeeper interventions such as feeding or adding supers. It helps identify nectar flows, monitor colony performance, and compare hives without relying solely on their absolute weights. Productivity can be positive during nectar flows or negative when colonies consume their reserves. [Learn more →](https://doc.mybroodminder.com/50_mybroodminder_v5d_weight/#productivity)

### What is Colony Fitness?

Colony Fitness is a quick-status indicator displayed in the Bees app and MyBroodMinder. Color-coded states help prioritize inspections: green indicates a favorable status, orange suggests disturbance or decline, and red flags a potentially serious issue. It provides an at-a-glance assessment of colony condition but is not a substitute for physical hive inspections. [Learn more →](https://doc.mybroodminder.com/50_mybroodminder_v5c_temperature/)

### What does BeeDar measure?

BeeDar uses radar technology to monitor bee movement at the hive entrance without disturbing the colony. It estimates incoming and outgoing bee traffic, providing insights into foraging activity and how it responds to weather and environmental conditions. These measurements help beekeepers understand daily foraging patterns and compare colony activity over time. [Learn more →](https://doc.mybroodminder.com/50_mybroodminder_v5e_foraging/)

### Can BroodMinder help detect swarming?

Yes. SwarmMinder detects rapid temperature changes associated with swarming activity. Compatible internal sensors monitor temperature at short intervals and identify patterns that may indicate a swarm event. When connected to a Hub, the system can deliver timely remote notifications, allowing you to react quickly. An alert indicates a possible event and should be interpreted alongside other hive observations. [Learn more →](https://doc.mybroodminder.com/50_mybroodminder_v5f_alerts/#swarmminder-sms-alerts-beta)

### Why monitor hive weight?

Weight monitoring helps identify nectar flows, track winter food reserves, and detect sudden changes without opening the hive. A rapid weight drop may accompany swarming or other disturbances, while unexpected variations can also indicate theft, predator activity, or equipment issues. Monitoring weight trends over time provides valuable insights into colony development and resource availability. [Learn more →](https://doc.mybroodminder.com/50_mybroodminder_v5d_weight/)

## 5. Maintenance and troubleshooting

### Are the batteries replaceable? Which batteries do I need?

Yes. **Battery type depends on the sensor model**: typically **CR2032 coin cells** for internal **T2/TH2** sensors and classic **AA batteries** for scales and some other devices. Check your device's specifications before purchasing replacements.

### How long do batteries and sensors last?

Battery life depends on the device, battery type, and operating conditions. Under normal conditions, you can expect:

| Device | Expected Battery Life |
|--------|----------------------|
| **Internal sensors T2 and T3 generations** (<2027) | ~1 year |
| **Internal sensor T4** (available from 2027) | ~4 years |
| **Hive scales** | ~4 years |
| **BeeDar** (4 AA batteries) | ~5 months |

We recommend checking battery levels during the autumn harvest to ensure uninterrupted monitoring throughout winter.

**BroodMinder sensors are built to last for many years.** With proper care and regular battery replacement, you can continue using them well beyond the lifespan of their original batteries.

### Why can't I connect to or synchronize a sensor?

Bluetooth connectivity depends on the distance between your smartphone and the sensor, as well as surrounding obstacles. Metal hive covers, queen excluders, and foil insulation can reduce signal strength.

If you're having trouble connecting or synchronizing, follow these steps:

1. **Get closer to the sensor.** Move your smartphone as close as possible to the device.

2. **Check device availability in the Bees app.**
   - Open the **Devices** list in the Bees app.
   - Look for your sensor. It should display a **green Bluetooth icon** with **"Available"** written underneath.
   - **If the sensor is not available:** Check its battery and replace it if necessary. When you insert the new battery a led light should blink demonstrating the device is functional.
   - **If the sensor is available:** Bluetooth communication is working. Proceed to synchronization.

3. **Try synchronizing the sensor.**
   - If synchronization succeeds, you're all set!
   - If it fails repeatedly, the sensor may have accumulated a large number of readings in its internal memory. In rare cases, transferring this amount of data can exceed the smartphone's Bluetooth buffering capacity.
   - **Try using another smartphone**, which may handle the transfer differently.

!!! tip "Best practices for reliable synchronization"
    - **Synchronize regularly.** Don't wait six months between data collections.
    - **Keep stored readings below 7,000 samples** whenever possible to avoid synchronization difficulties. You can clear the device memory with your smartphone [Learn more →](/40_beesApp/#advanced-device-management)
    - If you have a Hub, data is collected automatically, so you don't need to worry about manual synchronization.

If the problem persists after trying these steps, contact [support@broodminder.com](mailto:support@broodminder.com).

### Should I synchronize before changing batteries or updating firmware?

**Yes.** These operations can clear the sensor's internal memory. Upload all stored readings first, then proceed with maintenance.

## 6. Sharing, privacy and support

### Can I share my apiary data with others?

Yes. MyBroodMinder supports sharing apiary access with selected people, such as family, fellow beekeepers or researchers. See the [sharing instructions](https://doc.mybroodminder.com/50_mybroodminder_v5/#sharing). You can also contribute to broader research through **BeeCounted**.

### Is my exact apiary location visible on BeeCounted.org?

No. According to the supplied FAQ, BeeCounted displays only an approximate region or postal-code area, **not your exact GPS coordinates or street address**.

### Where can I get help?

For technical support, email [support@broodminder.com](mailto:support@broodminder.com) or submit a support ticket through the **BroodMinder Bees app**.
