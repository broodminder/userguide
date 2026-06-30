
<div style="text-align:center;">
  <img src="../assets/37_sensors_w5.assets/W5_us.jpg" alt="BroodMinder W5 North America" style="width:45%; max-width:400px;">
  <img src="../assets/37_sensors_w5.assets/W5_eu.png" alt="BroodMinder W5 Europe" style="width:45%; max-width:400px; margin-right:10px;">
</div>


Released in **October 2025**, the **BroodMinder-W5** is the successor to the original W hive scale. It was designed to provide a rugged, simple, and reliable weighing solution for beekeepers operating static apiaries.

The W5 continuously tracks hive weight without disturbing the colony, allowing you to monitor nectar flows, colony development, honey production, feeding events, and winter consumption over long periods of time.

### Design

The W5 is built around a **single 200 kg load cell**, providing a recommended hive capacity of up to **400 kg (880 lb)**.

Using a single load cell simplifies installation while maintaining the accuracy required for long-term hive monitoring.

Due to supply chain considerations, the W5 is manufactured in steel in North America and aluminum in Europe; both versions offer equivalent performance, accuracy, and durability.

### Connectivity

The W5 operates like all other devices in the BroodMinder ecosystem.

It communicates using Bluetooth Low Energy (BLE) and can:

- Sync directly with the Bees App when you visit the apiary.
- Automatically upload data through a BroodMinder Hub.
- Integrate seamlessly into MyBroodMinder.

No special configuration is required beyond the normal device claiming and installation process.


### Installation

For best results:

- Install the scale preferably on the shaded side of the hive (often at the rear)
- Raise the opposite side of the hive using a wooden spacer approximately **55 × 55 mm** (about **2.2 × 2.2 inches**).
- Ensure the hive remains stable and level from side to side.
- Place the scale on firm ground or a stable hive stand.

This configuration provides excellent weighing accuracy while keeping installation simple and unobtrusive.



### Measurement Rate

By default, the **BroodMinder-W5** records one measurement every hour. You can increase the logging frequency to **15, or 5 minutes** if required.

Higher measurement rates are particularly useful for research projects or when studying specific events in detail. For standard beekeeping applications, however, we recommend keeping the default **1-hour interval**. This maximizes battery life while still allowing you to capture unexpected events thanks to the **WeightMinder** feature.

To change the logging interval:

`Bees > Devices > ... > Show Details > ... > Set Rate`

![XLR rate](../assets/30_sensors.assets/beedar/rate.jpg#largeImg)


### WeightMinder

There are several discrete events that can significantly affect hive weight, such as inspections, strong nectar flows, or swarming events. When analyzing these events, having only hourly measurements is often insufficient to properly characterize what happened.

One option would be to increase the measurement frequency permanently. However, this comes at the cost of a much larger volume of data—most of it unnecessary—as well as reduced battery life, which is a critical factor when trying to capture relatively infrequent events.

To address this, we developed **WeightMinder**, an adaptive feature integrated directly into the firmware. The algorithm continuously monitors hive weight changes and automatically increases the logging frequency when significant variations are detected.

#### how it works

When a weight gain or loss exceeds **2 kg**, the logger switches from the standard **1-hour interval** to a **30-minute interval**. Once in this mode, measurements continue every 30 minutes as long as consecutive weight changes exceed **1 kg**. When weight variations stabilize below this threshold, the system automatically returns to the standard hourly logging rate.

WeightMinder ensures that, while maintaining a low default logging rate, detailed information is still captured during significant events, with minimal impact on battery life and data storage.

#### Typical use-cases

- Hive inspections
- Swarm events
- Periods of exceptionally strong nectar flow

!!! note

    This feature is available on XLR firmware version **4.64** and later.

    WeightMinder is only active when the logger is configured with a **1-hour logging interval**. If any other logging interval is selected, the feature is disabled.


### Auto Time Correction

Starting with **firmware version 4.64**, all **XLR-based devices**, including models **49, 57, 58, and 63**, support **Automatic Time Synchronization**.

This firmware introduces the ability for XLR devices to periodically synchronize their internal clock with accurate network time.

Historically, device clocks relied solely on the microcontroller's internal oscillator. While sufficiently accurate for most beekeeping applications, these clocks naturally drift over time. On average, we observed a drift up to one minute per month. Until now, the only way to correct this drift was to manually synchronize the device, as each synchronization updated the internal clock with the current time.

With firmware **4.64**, devices can automatically receive updated network time every **7 days**, effectively eliminating long-term clock drift.

#### How It Works

This feature operates in conjunction with a **BroodMinder-T91 Cellular Hub** installed at the apiary.

The hub periodically broadcasts accurate network time obtained from the cellular network. Nearby XLR devices, such as scales and BeeDars, receive this information and update their internal clock approximately every seven days.

As a result, any accumulated drift is automatically corrected without user intervention.

#### Additional Improvements

Besides maintaining accurate date and time information, this update also improves measurement scheduling.

Previously:

- Devices required an initial synchronization after battery installation.
- Measurement times depended on the exact moment batteries were inserted.
- Devices could gradually drift away from exact hourly boundaries.

With firmware **4.64**:

- Devices maintain highly accurate time continuously.
- Time drift is automatically corrected every seven days.
- Devices configured with an hourly logging interval now perform measurements precisely at the top of the hour.
- Multiple devices operating together remain synchronized.

This is particularly beneficial for applications involving several sensors monitoring the same hive, such as tandem **W5** scale installations.

#### Should You Care?

For most beekeepers, this change will have little visible impact on day-to-day operations. Your hive data will continue to work exactly as before.

However, improved timestamp accuracy can be particularly valuable if you:

- Conduct research;
- Analyze bee activity in detail;
- Study swarming events;
- Monitor departures and returns of foragers;
- Compare data across multiple sensors.

In short, this update quietly improves the precision of the BroodMinder ecosystem while requiring no action on your part.

#### How to Upgrade

Firmware upgrades can be performed directly in the field using the **Bees App**.

1. Open **User Settings**.
2. Enable **Show Available Firmware Upgrades**.
3. Navigate to the **Devices** tab.
4. Devices with available updates will display a yellow warning indicator ⚠️.
5. Tap the device and follow the prompts to start the upgrade.

Before upgrading, ensure that all data stored on the device has already been synchronized to the cloud. If necessary, perform a manual synchronization first to avoid losing unsynchronized measurements.

!!! note

    Automatic time synchronization requires a **BroodMinder-T91 Cellular Hub** running firmware version **3.55** or later.The hub broadcasts accurate network time, allowing nearby XLR devices to periodically correct their internal clock drift.

    **Be sure to upgrade your hub together with your devices!**

