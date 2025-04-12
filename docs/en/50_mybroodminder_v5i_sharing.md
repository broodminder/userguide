

## Sharing
From MyBroodMinder you have many options to share your hives with other beekeepers and friends:

### With another user
- you can share an Apiary (in the Apiary `… > share` ) with another MyBroodMinder user simply enter his/her account email. Acces is granted per apiary, in read only mode. They will see apiary and hives but not devices. 

![Sharing 1](../assets/50_mybroodminder_v5.assets/share_apiary_a.png#mediumImg)
![Sharing 2](../assets/50_mybroodminder_v5.assets/share_apiary_b.png#mediumImg)

### On beecounted

- you can also share an apiary [beecounted.org](https://www.beecounted.org) (in the Apiary `… > share`, see above). By default, all free acounts are sharing on beecounted.

![Beecounted](../assets/50_mybroodminder_v5.assets/beecounted.png#mediumImg)

### With an URL

- you can share a dashboard (in the Dashboards `… > share`): this produces an URL and anyone having it will see your dashboard. You can post it on social networks too.
When creating the url you will notice that you have some choices : which hives to share, what time frame, frozen or continuous etc..

![Shared_URL](../assets/50_mybroodminder_v5.assets/share_dash.png#mediumImg)

### Educational Dashboards

- And Last but not least, there's a fourth and the most classy way to share your hive : **Educational Dashboards**
This is a big screen mode for associations, schools or corporations that are willing to display their bees to colleagues and fellows. 
Send us an email to [support@BroodMinder.com](mailto:support@BroodMinder.com) to know more about this service.

![Educational Board](../assets/50_mybroodminder_v5.assets/edu_dash2.png#largeImg)
<div align="center" ><i>Educational Dashboards are fun!</i></div>


## Models & algorithms

In this section, we will discuss the more technical aspects of Mellisphera's way of functioning. We will thus present the different models - BFIT, BFORCE, BWEIGHT - as well as the WEATHER sources and ALERTS.

### Colony Health - BFit
BFIT for _Bee Fitness_ is the algorithm that informs the beekeeper of each hive's condition. We use benchmarks such as the time of the season and the surrounding hive state in order to define a "nominal" state. Then we position each hive in relation to this reference.

<!--The display is very easy to understand, with coloured stickers to indicate their condition. To complete the information, a tooltip (on the flyover) specifies the nature of the situation.

![Fitness](../assets/50_mybroodminder_v5.assets/alg_fitness.png#largeImg)
-->
The color code is the following:

| color | meaning |
|---|---|
|Green | Healthy |
|Orange | Disturbed (declining or with abnormal events) |
|Red | In trouble |
|Black | Dead |
|White | No data or no weather |


BFit is based on algorithms that collect events. The 'Learning' algorithm learns from previous events to preserve, or not, future events. Afterwards, it classifies the detected events between those affecting the hive state and the others. 

BFit also takes into account the results from BForce. In this way, it can determine the difference between the current hive dynamics and a theoretical brood dynamics that is constantly changing. These theoretical dynamics are regularly updated. It also takes into account the different regions of the world to provide relevant information according to latitude or climate. 







## MyBroodMinder-Free vs MyBroodMinder-Premium

We offer both a free and a [premium service](https://myBroodMinder.com/app/premium-subscription). We have attempted to establish an equitable and economical system for our wide variety of users.

Our team is self funded and  continues to make extraordinary efforts to create and refine the BroodMinder eco-system. That said, we realize the our customers are the ones that will decide if our services are worth the effort. 

If you do not desire the premium features, it is still possible to read and analyze your BroodMinder devices. 

BroodMinder-Free approach

- Create a MyBroodMinder account
- You will be allowed a maximum of 5 hives.
- If you have additional sensors they are still supported, but can not be assigned to additional hives.
  - Devices are read and transferred to MyBroodMinder with the Bees app using the "Devices" tab
  - Data/graphs are viewed in MyBroodMinder by clicking on the link in the "Configure | Devices" tab
- You can name devices to reflect their location if you wish
- Note that this approach will also work if you have a paid account to read additional sensors beyond your subscription level.
