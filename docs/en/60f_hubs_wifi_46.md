# BroodMinder-WiFi Hub (Legacy BRM-46)

The **BroodMinder-WiFi BRM-46** is a legacy WiFi hub designed to collect data from nearby BroodMinder devices and automatically transmit it to [MyBroodMinder](https://mybroodminder.com) through a WiFi connection.

This model was replaced in 2024 by the [new generation BroodMinder-WiFi Hub](https://doc.mybroodminder.com/60b_hubs_Wifi/).

Although no longer sold, **BRM-46 hubs remain reliable, operational, and supported by BroodMinder**.

This guide explains how to check the WiFi connection and troubleshoot a hub that has stopped uploading data.

![BroodMinder-WiFi BRM-46](../assets/60_hubs.assets/wifiHub46-legacy/1-IMG_9601.JPG#mediumImg)

!!! info "Legacy Model"
    This page applies specifically to **BroodMinder-WiFi BRM-46** hubs.

    These devices can be identified by their device ID, which starts with `46:`, for example `46:01:3A`.

    For newer WiFi hubs, refer to the [current BroodMinder-WiFi documentation](https://doc.mybroodminder.com/60b_hubs_Wifi/).

---

## 1. Before You Start

If your hub has stopped sending data to MyBroodMinder, the first step is to verify that it can connect to your WiFi network.

For this procedure, you will need:

- Your BroodMinder-WiFi BRM-46 hub
- A USB power supply
- A smartphone with the **BroodMinder-Cell App** installed
- Your WiFi network name (SSID) and password

!!! warning "Use the BroodMinder-Cell App"
    Although this is a WiFi hub, configuration and diagnostics are performed using the legacy **BroodMinder-Cell App**.

    Do not confuse it with the newer BroodMinder Bees App.

!!! tip "Power the Hub Directly"
    Before starting diagnostics, connect the hub directly to a USB charger.

    This eliminates potential issues caused by an insufficiently charged solar battery during troubleshooting.

---

## 2. Connect to the Hub

### Step 1 — Open the BroodMinder-Cell App

Install and open the **BroodMinder-Cell App** on your smartphone.

![BroodMinder-Cell App](../assets/60_hubs.assets/wifiHub46-legacy/2-IMG_9600.jpg#mediumImg)

### Step 2 — Select Your Hub

Your hub should appear in the list of nearby devices, highlighted in green.

Its identifier should begin with `46:`.

For example:

`46:01:3A`

Tap **Configure** to access the hub settings.

![Select the hub](../assets/60_hubs.assets/wifiHub46-legacy/3-IMG_9596.jpg#mediumImg)

!!! tip "Hub Not Found?"
    Make sure the hub is powered on and that Bluetooth is enabled on your smartphone.

    Keep your phone close to the hub while performing diagnostics.

### Step 3 — Open Diagnostics

From the configuration screen, tap **Diagnostics**.

Then select **WiFi Network**.

![Hub diagnostics](../assets/60_hubs.assets/wifiHub46-legacy/4-IMG_9597.PNG#mediumImg)

---

## 3. Check the WiFi Network

### Step 4 — Scan for Available Networks

On the WiFi Network screen, tap **Find Networks**.

The hub will scan for nearby WiFi networks.

![WiFi network settings](../assets/60_hubs.assets/wifiHub46-legacy/5-IMG_9598.PNG#mediumImg)

The available networks will appear with their signal strength (RSSI).

!!! info "WiFi Frequency"
    The BRM-46 uses **2.4 GHz WiFi networks**.

    Make sure your router provides a 2.4 GHz network, as 5 GHz-only networks are not compatible.

### Step 5 — Select Your Network

1. Tap **Select**.
2. Choose your WiFi network from the list.
3. Check that the correct network appears in the **Active Network** field.
4. Enter your WiFi password.
5. Leave the security setting on **WPA (Typical)** if appropriate for your network.
6. Tap **Save Settings**.

![Select and configure WiFi](../assets/60_hubs.assets/wifiHub46-legacy/6-IMG_9599.PNG#mediumImg)

!!! warning "WiFi Password"
    WiFi network names and passwords are case-sensitive.

    Make sure you enter the password exactly as configured on your router.

!!! tip "Understanding WiFi Signal Strength"
    The network scan displays the signal strength as RSSI, expressed in dBm.

    For example:

    - `-50 dBm`: Strong signal
    - `-65 dBm`: Good signal
    - `-75 dBm`: Weak signal
    - `-85 dBm`: Very weak signal

    Values closer to zero indicate a stronger signal.

    If the signal is weak, try moving the hub closer to your WiFi router or access point.

---

## 4. Test the WiFi Connection

### Step 6 — Run the Connection Test

After saving the WiFi settings, tap **Test Connection**.

The hub will attempt to connect to the selected WiFi network.

![Test WiFi connection](../assets/60_hubs.assets/wifiHub46-legacy/6-IMG_9602.PNG#mediumImg)

### Step 7 — Check the Communication Trace

The application will display a series of technical messages describing the WiFi connection process.

Look for the following message:

```text
+WIND:51:WPA Handshake Complete
```

You may also see:

```text
+WIND:25:WiFi Association with 'YOUR_NETWORK' successful
```

![Successful WiFi handshake](../assets/60_hubs.assets/wifiHub46-legacy/7-IMG_9603.PNG#mediumImg)

!!! success "WiFi Connection Successful"
    If you see **WPA Handshake Complete**, the hub has successfully completed the WiFi authentication process.

    This confirms that the hub can authenticate with the selected WiFi network.

    The next step is to verify that data is reaching MyBroodMinder.

!!! warning "No Handshake Complete Message?"
    If the connection test does not complete successfully:

    1. Verify the WiFi password.
    2. Make sure the selected network is a 2.4 GHz network.
    3. Check the WiFi signal strength.
    4. Move the hub closer to the router if necessary.
    5. Save the settings and run **Test Connection** again.

    If the problem persists, copy the communication trace and contact BroodMinder support.

---

## 5. Verify Data Transmission in MyBroodMinder

A successful WiFi handshake confirms that the hub has connected to the WiFi network, but you should also verify that data is reaching the BroodMinder servers.

### Step 8 — Check the Hub's Last Transmission

1. Open [MyBroodMinder](https://mybroodminder.com).
2. Navigate to your hub's page.
3. Check the **Last Sent** date and time.
4. Verify that the hub has recently uploaded data.

![Hub last transmission in MyBroodMinder](../assets/60_hubs.assets/wifiHub46-legacy/8-mbm.png#largeImg)

!!! success "Data Transmission Confirmed"
    If the **Last Sent** timestamp has updated, your hub has successfully communicated with MyBroodMinder.

    Your WiFi connection is working correctly.

!!! note "Connected to WiFi but No Data?"
    A successful WiFi handshake does not necessarily mean that data has been uploaded.

    If the **Last Sent** timestamp does not update, the hub may be connected to WiFi but unable to communicate with the BroodMinder servers.

    Contact support and provide the communication trace for further investigation.

---

## 6. Troubleshooting Checklist

If your BRM-46 hub is no longer uploading data, use this checklist:

| Check | What to Verify |
|---|---|
| **Power** | Hub is powered directly through USB during testing |
| **Bluetooth** | Hub appears in the BroodMinder-Cell App |
| **WiFi network** | Correct network is selected |
| **WiFi frequency** | Network operates on 2.4 GHz |
| **Password** | WiFi password is correct |
| **Signal strength** | WiFi RSSI indicates adequate reception |
| **Authentication** | `WPA Handshake Complete` appears in the trace |
| **MyBroodMinder** | Last Sent timestamp has updated |

!!! tip "Need More Help?"
    If your hub still cannot connect, use the **Copy** button in the communication diagnostics screen to copy the trace.

    Send it to [support@broodminder.com](mailto:support@broodminder.com), along with your hub ID and a description of the problem.

---

## 7. Additional Resources

- [Current BroodMinder-WiFi Hub Documentation](https://doc.mybroodminder.com/60b_hubs_Wifi/)
- [MyBroodMinder](https://mybroodminder.com)
- [BroodMinder Installation Videos](https://broodminder.com/pages/videos)
- [BroodMinder Support](mailto:support@broodminder.com)