# Mellisphera.com 

<style>
img[src*="#thumbnail"] {
   margin: 10px auto 20px;
   display: block;
   width:550px;
}</style>

## General overview 

Mellisphera is integrated with BroodMinder. Therefore, you must create an account MyBroodMinder and set up your apiaries / hives on https://mybroodminder.com. This website enables you to assign the sensors to each of your hives and to visualize the measured data. 

![BroodMinder screen](./images/ecran_MBM.png#thumbnail)

You will always have a Mellisphera button on the left-hand menu. Simply click on it to get to Mellisphera. If you have recently logged in, you will be automatically connected without needing to enter your email and password. Otherwise, the email field will be auto-filled. 

Now begins your adventure https://bzz.mellisphera.com/login.

## Login page

![Mellisphera screen](./images/ecran_MS.png#thumbnail)

On the login page, you have the possibility to connect to a demo apiary if you do not have an account or if you are simply curious and eager for something new. You can read about the relationship between BroodMinder and Mellisphera, and learn about what Mellisphera can get you. 

Regarding the login step, **you must use your BroodMinder IDs**. Once you are logged in, you will have access to the complete history of your sensors. You will have the opportunity to explore the past events and to see the evolution of the season from a completely new angle. The first time you log in, you will be warned that the entire history of your data is being loaded. Your missing data will be loaded at every new connection. 

Let's take a look of Mellisphera different features.

## Home screen 

Once you are connected to Mellisphera, you will access this interface, composed of three areas: 

![Home screen](./images/home_app.png#thumbnail)

You can select the apiary to display with the top bar. This is also where you can choose your preferences. On the left side, you can see the different environments of Mellisphera. We will explore them in the next chapters.  

Next to each feature, you will find tooltips. They detail the essential information in order to understand the data. 

![Tooltips](./images/infobulles.png#thumbnail)

## Account settings

In the top right corner of the app, you will have access to your account settings. 

![Account settings](./images/settings_app.png)

This is where you can reset your password. Please note that this will only change the password for the Mellisphera app. 

![Password](./images/password.png#thumbnail)

You can also set some of your preferences:

- the unit system (metric or imperial)
- the format date
- the language (French, Spanish or English for the moment)
- the weather source

![Preferences](./images/all_settings.png)

## Apiary overview 

![Apiary overview](./images/acceuil_sidebar.png)

This page is the starting point of Mellisphera. You can select the apiary to explore from the top drop-down menu and then navigate through the main information. 

![Home screen](./images/home_app.png#thumbnail)

Your navigation is contextualized on the apiary thanks to a picture that enables you to define the location of your hives. You can place "stickers" underneath, carrying the main information (name, weight, brood, etc.) in order to materialize your hives. 

#### Picture & location 

The first time you connect to the Mellisphera app, you will have the opportunity to add a picture of your apiary. You can drag/drop a file from your favourite file explorer or you can open the contextual menu represented by a camera icon (in the top right corner of the photo frame. 

#### Exporting data

On the picture, you also have an icon for exporting your data. It is an Excel document (csv or .xlx) of your apiary data (hives, sensors, battery, brood, weight) and your last notes. This is very useful during your visits to the apiary. 

![Exporting data](./images/export_MS.png#thumbnail)

#### Picture browsing

Your apiary picture - with its stickers - is associated with a set of buttons placed just above. This navigation bar enables you to visualize contextually some information:

![Picture browsing](./images/barre_navig.png#thumbnail)

You can activate the "name", "brood", "weight" and "device" buttons. This enables you to display respectively the name, the brood, the weight and the sensors of all your hives below the stickers, on the date displayed on the top right of the screen. The date of the previous day - which corresponds to the last day of data in general - is set by default. You can obviously change this date. 

#### Sensor status

What is special about the sensors is that you can see their status in real time with a color code (grey, red, orange) that determines the status and displays the problem. 

![Sensor status](./images/problem_sensor.png#thumbnail)

The battery level is systematically calculated. Regarding apiaries that are equipped with a Hub, the signal and connection information are also evaluated. Here is the colour code:

- Grey - everything is normal
- Orange - bad signal or battery to be replaced
- Red - sensor does not emit 

The battery threshold is by default set to 20% but you can modify it in the alert settings. 

The signal and connection information are based on the daily data reading frequency. The quantity and quality of this information is used to determine if there is a disconnection or a bad signal. The first alert is sent 24 hours after the problem started.

#### Coloured stickers

The stickers indicate the health status of each hive with a color code (black, red, orange, green). You can also hover the hive in order to see the message associated with its status. The health status is calculated every day, at the end of the day, by our BFit model. This is why you systematically visualize the day D-1. You can also navigate through the previous days with the date selector in the top right corner of the screen. 

Please note that hives which do not have sensors or those which have no data on day D-1 have a white sticker. 

For more information about our BFit model and how it calculates the hive health status, please refer to the "data interpretation" section. 

![Stickers](./images/pastilles.png#thumbnail)

#### Apiary calendar of events

You have a specific calendar of events for each of your apiaries. This calendar enables you to track the tasks carried out at the level of the apiary as a whole and to display general observations. The calendar also includes alerts and notifications - we will see how to configure them later - at the apiary level. 

![Apiary event](./images/event_rucher.png#thumbnail)

#### Apiary notes

In order to complete the apiary overview, you can write your apiary notes/observations/inspections. This would be placed just below the picture of your apiary. 

![Apiary notes](./images/rucher_note.png#thumbnail)

In order to add a note, just click on the "+" of the insert, it's very simple! 

![New note](./images/new_note.png#thumbnail)

You will directly see the note on the calendar of events with this icon: 

![Icon note](./images/icon_note.png)

### Hive overview

In order to access the hive overview, you should click on its sticker or on its name. The sticker will be surrounded in pink and you will see on the right of the screen three new calendars corresponding to the selected hive.

The displayed data go from the last 5 weeks to the next 3 days - since we can predict 3-day events. 

![Hive overview](./images/calendrier_UX1.png#thumbnail)

![Hive overview](./images/calendrier_UX2.png#thumbnail)

![Hive overview](./images/calendrier_UX3.png#thumbnail)

#### Events

You will see a calendar of events - this time, specific to the selected hive. Apiary and hive events are different. For more precision, please go to the "data interpretation" section. 

#### Brood

You have a global vision of the daily brood evolution with a heatmap calendar. The colours vary from red to green and the percentage from 0 to 100%. For more details about the brood calculation model, please go to the "data interpreration" section. If you have several temperature sensors in your hive, you can check/uncheck the one you want to display. 

#### Productivity 

This calendar offers a global view of the daily weight gain in bubble form. The red color indicates a weight loss and the green color indicates a weight gain. The bubble size is proportional to the weight variation generated by the bees - we remove any possible manipulation of adding/removing material. We will therefore call this "hive productivity". For more details about our model for calculating productivity, please go the "data interpretation" section. You can choose to only display the gains or the losses on the calendar by checking/unchecking the boxes below the calendar. 

#### Notes

It is possible to make annotations on each hive. These notes are separated from your apiary notes and concern only the selected hive. In order to switch back to the apiary mode, just click on the apiary button on the grey navigation bar. 

## Explore

![Explorer](./images/explorer_sidebar.png)

The **apiary** overview gives an insight of the overall situation. In **explorer**, you can navigate through your data in more detail. You will see a new grey navigation bar with three sections: 'Hive', 'Brood' and 'Data'. By default, you will be in the 'Hive' mode. 

Please note that the data for the last month will be displayed by default. You can obviously change the date at the top right of the screen. You can change and customize this data period as you wish or use the arrows to move through the time period. 

![Browsing explorer](./images/navig_explorer.png#thumbnail)

![Modification date](./images/personnaliser_date.png)

### Hive mode

![Hive mode](./images/ruche_explorer.png#thumbnail)

In the hive mode, you can choose among all the hives of all your apiaries, but please note that you can only select one hive at the time. Once you chose the hive, you will see three calendars. 

**The first calendar** summarizes your hive data. You can choose between different options: 
- Brood 
- Productivity
- Internal maximum temperature
- Internal minimum temperature
- Internal maximum humidity
- External maximum temperature
- External minimum temperature

**The second calendar** reports the events of your hive as well as the astronomical calendar. 
- Events, annotations and alerts
- Astronomical calendar - biodynamics

**The third calendar** shows the weather data of your apiary. This calendar is therefore identical for all of your hives that are in this apiary. You will have access to the general 'weather' data:
- External maximum temperature
- External minimum temperature
- External maximum humidity
- External minimum humidity
- Wind
- Precipitation

You also have access to weather forecasts for up to 15 days, depending on the model selected. 
If you do not have any weather data, please refer to the FAQ. For more details about the different models, please refer to the 'Data interpretation' section. 

So you can visualize and switch calendar modes as you wish. Here's an example:

![Calendar](./images/manier_calendrier.png#thumbnail)

### Brood mode

In the brood mode, you can, this time, **select as many hives as you wish**, even if these hives are situated in two different apiaries. This way you can compare apiaries or hives with each other.

![Brood mode](./images/couvain_explorer.png#thumbnail)

By hovering over it, you will see information about your hives. 

It is  an extremely powerful tool for analysing data over long or short periods of time, on hives that are from the same apiary or from different ones because the analysis benefits from a great flexibility.

### Data mode

In the data mode, you will see your hive raw data: the internal temperature will be displayed at the top of the screen, the weight in the center and the humidity at the bottom (just like on mybroodminder). In green, you will have the optimal areas for brood and humidity. You can also select as many hives as you wish, even if these hives are situated in two different apiaries. This allows you to compare apiaries or hives between each other.

![Raw data](./images/raw_data.png#thumbnail)

This tool is very easy to use. The small icons that are on the right side of the graph enable you to zoom in, select areas, move around, view listing data etc. 

## Alerts 

![Alert button](./images/alertes_sidebar.png)

In this section, you will find the functions that enable you to implement a notification and alert service on each of your apiaries. You will also find a new navigation bar which displays the 3 types of alert: 'Hive', 'Weather', 'Sensor' and the 'Settings' button,dedicated to the configuration. 

![Alert bar](./images/barre_alertes.png#thumbnail)

### Hive

In this tab, you can see all the alerts concerning your hives. These alert icons can also be found in your hive event calendar. 

![Hive alert](./images/ruche_alertes.png#thumbnail)

You can turn the alerts on and off. And for many of them, you can change their thresholds by sliding the cursor. By default, everything will be activated with auto-adjusted settings. 

On the interface, you also have an 'i' icon for information. By hovering it, you will have a short description of the alert. 

In more detail, here are the available alerts and their characteristics:


| **Pictogram** | **Alert** | **Frequency** | **Description** | 
|- |-- | -- | -- |
| ![](./images/Pictos/Honeydew.png#picto) | Honeydew | weekly | The honeydew alert is triggered when the net weight added to the hive exceeds the indicated threshold. By default, it is set to 15kg/week.| 
| ![](./images/Pictos/Swarm.png#picto) | Swarming | ??? | The swarm alert operates in **real time** but also indicates **passed** swarms in the case of manual sync. This alert works on hives equipped with temperature sensors. The results will be even more accurate with a scale, but it is not essential. <br> **We can adjust the detected swarms according to your feedback, do not hesitate to report discrepancies or omissions!**
| ![](./images/Pictos/Swarm.png#picto) | Swarming risk | ??? | Based on a range of parameters, we can estimate the risk of swarming 3 days before. <br> This alert is currently in development.| 
| ![](./images/Pictos/Tmax2.png#picto) | Over-Temperature | ??? | Some colonies can't manage their internal temperature. Often these are small population divisions. But sometimes the weather can have a major effect because of a lack of exposure. <br> In this case, the hive brood is challenged as temperatures can reach 40°C.| 
| ![](./images/Pictos/Tmin2.png#picto) | Extreme cold | ??? | During winter, the cluster tightens and maintains the temperature very locally - sometimes far away from the sensor. This is why the "low temperature" indication can only be informative. Depending on the context, action may be required.| 
| ![](./images/Pictos/LowBrood.png#picto) | Low brood | weekly | In the high season, a hive with brood level below 30% is an anomaly or a division/swarm. This alert can identify colonies that are declining. | 
| ![](./images/Pictos/WIneg.png#picto) | Weight loss | daily | An excessive/sudden consumption often means that the hive is being robbed by another colony.| 
| ![](./images/Pictos/WIpos.png#picto) | Weight gain | daily | Daily alert that informs you of weight gains due to bee inputs. To be associated with the weekly honeydew alert.| 
| ![](./images/Pictos/Hmax.png#picto) | High humidity | daily | During winter, humidity in the hive can naturally reach 80%. However, if the threshold is even higher, you should think about taking action. <br> Please note that this alert only works with hives equipped with TH sensors. | 
| ![](./images/Pictos/Hmin.png#picto) | Low humidity | daily | During the season, the optimum humidity zone is between 50 and 75%.| 
| ![](./images/Pictos/Dead.png#picto) | Dead hive | daily | If you see this alert, it's too late. It means that there's no life signs left in the hive.| 
| ![](./images/Pictos/Oxalic.png#picto) | Varroa treatment | daily | This alert is triggered when the average brood in the apiary falls below the fixed threshold (15% by default). This is the ideal time to plan an anti-varroa treatment with Oxalic acid.| 
| ![](./images/Pictos/Super+.png#picto) | Supper addition | daily | For the hives equipped with scales, this action is automatically detected and displayed on the calendar.| 
| ![](./images/Pictos/Super-.png#picto) | Supper removal | daily | For the hives equipped with scales, this action is automatically detected and displayed on the calendar.| 
| ![](./images/Pictos/Stolen.png#picto) | Stolen hive | ??? | The sensors do not have geolocation. However, for the hives eqquiped with a weight sensor, this alert notifies in case of an abnormally low weight, which could be a possible theft...| 


### Weather

In this tab, you will see all weather alerts. These alert icons can also be found in your apiary events calendar. 

Here again, you can adjust, deactivate/activate the different alerts. By default, everything will be activated with auto-adjusted settings. 

![Weather alert](./images/meteo_alertes.png#thumbnail)

All weather alerts are predictive at D+7 maximum. 
They are constantly evolving. For example, if an event is predicted at D+7 and then the next day this event is obsolete, it will no longer be displayed.
The alerts mainly concern strong to extreme events.

| **Pictogram** | **Alert** | **Frequency** | **Description** | 
|- |-- | -- | -- |
| ![](./images/Pictos/Rain.png#picto) | Rain | daily | Heavy rainfall.<br> Default value at 50 mm/d  | 
| ![](./images/Pictos/Snow.png#picto) | Snow | daily | Heavy snowfall.<br> Default value at 15cm/d   | 
| ![](./images/Pictos/Wind.png#picto) | Wind | daily | Strong winds.<br> Default value for 30 km/h gusts. <br> In some regions, we recommend to increase the default value if the alerts become too regular.| 
| ![](./images/Pictos/ColdPeriod.png#picto) | Cold | daily | This alert is triggered in high season when a 'cold' period is expected. This includes days and nights that are considered cooler than the seasonal norm. We set the parameters ourselves.| 

### Sensors

The alerts, associated with our sensors, provide information on any connection or battery anomalies. So you are sure that the system is always working nominally. You can configure them in this tab. 

Please note that **these alert icons won't be displayed on your event calendars**. But you can visualize them in 'My Apiary' section, in the 'Sensor' tab. 

![Capteurs rucher](./images/devices_apiary.png#thumbnail)

Likewise, if the email alerts (next section) are activated, you will be notified of your sensors status. 

Here again, you can adjust, deactivate/activate the different alerts. By default, everything will be activated with auto-adjusted settings. 

![Sensor alert](./images/devices_alertes.png#thumbnail)

Here are the detailed alerts available for each type of sensor:

| **Pictogram** | **Alert** | **Frequency** | **Description** | 
|- |-- | -- | -- |
| ![](./images/Pictos/cell_nowifi.png#picto) | Hub offline | daily | The transmitter did not send any data on the last day | 
| ![](./images/Pictos/W_nowifi.png#picto) | W offline | daily | The sensor did not send any data on the last day | 
| ![](./images/Pictos/T_nowifi.png#picto) | T offline | daily | The sensor did not send any data on the last day | 
| ![](./images/Pictos/W_poorwifi.png#picto) | W low signal | daily | The W-sensor sent incomplete time records on the last day | 
| ![](./images/Pictos/T_poorwifi.png#picto) | T low signal | daily | The T-sensor sent incomplete time records on the last day | 
| ![](./images/Pictos/W_bat.png#picto) | W low signal | daily | The W-sensor has a low battery level | 
| ![](./images/Pictos/T_bat.png#picto) | T low signal | daily | The T-sensor has a low battery level | 

### Email settings

In this section, you can configure the email sendings. We strongly recommend you to activate these emails. If you have a Hub, we suggest you to select the daily sending. Otherwise the weekly sending may be sufficient. 

The sending is deactivated by default and your email address is written in the first box. You can add a second email address. In this case, emails will be sent to both addresses. To make sure that the tool is working, you can click on the 'Test email' button: an email will be instantly sent to the registered addresses. If you don't receive it in the next few minutes, please contact support@mellisphera.com. 

![Alert settings](./images/parametres_alertes.png#thumbnail)

In these emails, you will have access to the following information:
- The received alerts since the last time data was sent
- The upcoming events (up to 3 days)
- Your hive status
- Your sensor status

Please note that deactivating an alert will make it disappear from the emails and calendars as from the deactivation date - this action is not retroactive. Likewise, if you modify the thresholds, this will only be effective for upcoming alerts. 

Here is a preview of the kind of email that you may receive:

![Alert email](./images/email_1.png#thumbnail)

![Alert email](./images/email_2.png#thumbnail)

## MyBroodMinder link

![MBM button](./images/MBM_sidebar.png)

If you click on the MyBroodMinder icon, this will redirect you to the MyBroodMinder.com platform. With a single click, you can switch from one platform to the other: on one side MyBroodMinder to manage your apiary / hive / sensor configurations, and on the other side Mellisphera to accurately analyze your data and to be informed in real time about what is happening on your hives.

Please remember that if you make changes to MyBroodMinder, they will be saved when you log in to mellisphera again. 

## Support

![Support button](./images/support_sidebar.png)

You can contact our support team from this link. Either by direct message, by email at [support@mellisphera.com](mailto:support@mellisphera.com) or by logging in directly on Slack.

![Support message](./images/support_msg.png#thumbnail)

Do not hesitate to send us your questions, feedback, experience, improvement ideas and problems. We love customer feedbacks! The good ones and the ones that help us progressing.

## User guide

![User guide button](./images/doc_sidebar.png)

Click on this link to access the complete user guide: https://doc.mellisphera.com. 

This portal is entirely dedicated to the documentation of our whole system. It is structured in several areas as shown in the image below. 

![User guide portal](./images/user_doc_portal.png#thumbnail)

1. Language choice
2. Documents available
3. Text body
4. Document chapters for quick access
5. Keyword search

Don't hesitate to use the **keyword search**: it is extremely efficient and gives you results on all available documentation.

Here is an example with the 'battery' keyword

![User guide portal](./images/user_doc_portal_srch_example.png#thumbnail)

## Colony environnement 

Weather and seasons are key factors in beekeeping. With Mellisphera, we combine this information with the colony and beekeeper ones in order to provide you the most complete event overview.

### Weather
Two weather sources are available in Mellisphera

- WeatherSource (recommended)
- Open WeatherMaps

The weather is associated with the apiary, as well as with each of the hives. Each hive has its own weather record. In other words, if two hives are in the same apiary at a given time, they will share the same weather forecast for that period. But if one of them goes on transhumance, it is the weather of each apiary visited that will be recorded.

**7-day forecast**
With WeatherSource, you can also visualize the weather forecast. The D-day is always marked with a purple square as in the image below.

![Weather forecast](./images/meteo_forecast.png#thumbnail1)
<div align="center" ><i>Monthly average weather and D+7 forecast</i></div>

### Astronomy
The astronomical calendar clearly shows the moon's phases. It also shows the day length with the sunrise/sunset times, according to your geographical area.

![Weather forecast](./images/calendrier_lunaire.png#thumbnail1)
<div align="center" ><i>By hovering the moon calendar, you will also get information about the sun.</i></div>

## Models & algorithms

In this section, we will discuss the more technical aspects of Mellisphera's way of functioning. We will thus present the different models - BFIT, BFORCE, BWEIGHT - as well as the WEATHER sources and ALERTS.

### Colony Health - BFit
BFIT for _Bee Fitness_ is the algorithm that informs the beekeeper of each hive's condition. We use benchmarks such as the time of the season and the surrounding hive state in order to define a "nominal" state. Then we position each hive in relation to this reference.

The display is very easy to understand, with coloured stickers to indicate their condition. To complete the information, a tooltip (on the flyover) specifies the nature of the situation.

![Stickers](./images/pastilles.png)

The color code is the following:

| color | meaning |
|---|---|
|Green | Healthy |
|Orange | Disturbed (declining or with abnormal events) |
|Red | In trouble |
|Black | Dead |
|White | No data or no weather |

By activating the alerts in Mellisphera, you will receive by e-mail a summary table with all the information:

![BFit email](./images/bfit_email.png)

BFit is based on algorithms that collect events. The 'Learning' algorithm learns from previous events to preserve, or not, future events. Afterwards, it classifies the detected events between those affecting the hive state and the others. 

BFit also takes into account the results from BForce. In this way, it can determine the difference between the current hive dynamics and a theoretical brood dynamics that is constantly changing. These theoretical dynamics are regularly updated. It also takes into account the different regions of the world to provide relevant information according to latitude or climate. 

### Brood level - BForce

Brood development is a key factor for bee colonies. The aim of BForce is to provide an indication of the brood level in the hive on a range of 0 to 100%. 

When the colony is at its full capacity, it reaches a stable state of 35°C. This state is associated with 100% brood. This means that the hive is strong. 

On the contrary, when there is no brood, the bees do not need to regulate the cluster temperature. In this case, the hive internal temperature will roughly follow the ambient temperature. If this is the case, there will be 0% brood.

Between these two extreme points, we can imagine a lot of intermediate situations. 

![BForce report](./images/constat_bforce.png)

In order to illustrate this, here are the hourly measurements on two hives from the same apiary. The first is represented in red and the second in grey. Each hive has a very different condition. The red one has an internal temperature close to 25°C/30°C - following the same fluctuations as the external temperature (dotted lines) - while the grey one is situated in the famous 'Optimal Brood Zone' with a constant temperature of 35°C.

In this example, the grey hive has a high proportion of brood, contrary to the red one. **BForce correlates this colony characteristic and translates the raw temperature measurement into standardized and understandable information**. The model takes a range of parameters into account to optimally estimate the brood level.

- hive internal temperature
- ambient temperature
- evolution of surrounding colonies
- season, latitude & climate
- other events identified in the hive
- hive type

BForce is also a **strengthening tool in swarm detection**. In fact, when a swarm has been detected by one of our Machine Learning tools, the brood is impacted by the queen loss and thus the interruption of egg-laying. With BForce, we can classify the different swarms detected. 