# Exporting Data

!!! abstract "What you'll learn in this chapter"
    This chapter explains how to export your hive data from MyBroodMinder for analysis, reporting, or research.  
    You’ll learn how to download data from individual devices, extract complete datasets from dashboards, and access full apiary exports for advanced use cases.  
    It also covers data cleanup before export and introduces options for deeper post-processing outside the platform.

MyBroodMinder offers **three main ways** to export your data:

- Device-level CSV export  
- Dashboard data export  
- Researcher data export (full apiary dataset)

---

## Exporting Device Data

Each device includes a **`Download CSV data`** option available from the device detail view.

You can choose to export:

- The **full history**, or  
- Only the **currently displayed time span**

![Export device data](../assets/50_mybroodminder_v5.assets/export/export_device.png)

### Cleaning Data Before Export

Before exporting, you may want to review and clean your data using the **`Data Editor`**.

This is especially useful if:

- You’ve identified outliers  
- A manual sync created duplicate samples  
- Multiple hubs (e.g., WiFi + Cellular) collected the same readings  

Example of duplicate samples collected by two hubs (a WiFi WFC and a cellular H|54):

![Data editor duplicates](../assets/50_mybroodminder_v5.assets/export/data_editor.png#largeImg)

### Removing Duplicates Automatically

At the bottom of the Data Editor page, use **`Remove duplicates`**.  
This removes redundant samples in a single action.

![Remove duplicates](../assets/50_mybroodminder_v5.assets/export/remove_duplicates.png#largeImg)

### Removing Samples Manually

To delete specific readings (for example, a clear outlier):

1. Select the samples  
2. Click **`Remove Selected`**

![Remove selected samples](../assets/50_mybroodminder_v5.assets/export/remove_sample.png#largeImg)

---

## Exporting Dashboard Data

Every custom dashboard includes a **Download mode**.

![Dashboard download](../assets/50_mybroodminder_v5.assets/export/dashboard_dwld.png#largeImg)

From there, you can choose which type of data to export:

- **Apiary notes**  
- **Hourly readings** (e.g., scales, internal hive sensors, BeeDar, and other device measurements)  
- **Daily readings** (e.g., algorithm-based metrics such as productivity, brood level, Nectar Flow Index, and other computed indicators)  
- **Weather data**

![Dashboard export options](../assets/50_mybroodminder_v5.assets/export/dashboard_dwld2.png#smallImg)

### Files Generated

The export generates multiple files:

![Dashboard exported files](../assets/50_mybroodminder_v5.assets/export/dashboard_dwld3.png#largeImg)

**Common files (all hives):**

- Weather  
- Notes  

**Hive-specific sensor files:**

- Temperature & Brood  
- Weight & Productivity  
- Combined Readings (all sensors merged)

This structure makes it easy to:

- Analyze hives individually  
- Merge datasets externally  
- Work in Excel, R, Python, or other analysis tools  

---

## Researcher Data Export

For advanced research needs, we provide a **`Researcher Data Download`** feature at the **apiary level**.

!!! warning "Activation required"
    This feature must be activated on your account before it becomes available.  
    Please contact: **support@broodminder.com**

Once enabled, you can export the **entire dataset** from an apiary.

![Researcher export](../assets/50_mybroodminder_v5.assets/export/researcher_data.png#largeImg)

### Customizing Your Research Export

You can configure:

- Time span  
- Device models  
- Selected hives  

![Researcher export configuration](../assets/50_mybroodminder_v5.assets/export/researcher_data2.png)

This option is ideal for:

- Scientific studies  
- Long-term data modeling  
- Large-scale comparative analysis  
- Institutional or academic projects  

---

## MyBroodMinder API

For automated data access and integration with external applications, MyBroodMinder provides an **API** that allows you to retrieve your hive data programmatically.

The API is useful for:

- Automated data retrieval
- Integration with custom applications or dashboards
- Data processing with Python, R, or other analysis tools
- Research workflows requiring regular access to MyBroodMinder data

Full API documentation, including the available queries, parameters, and examples, is available here: [MyBroodMinder External API Documentation](https://external-api.mybroodminder.com/user/docs)

!!! info "API key required"
    An **API key** is required to access the API.  
    To request API access, contact **support@broodminder.com**.

!!! note "API access"
    API access is granted upon request and is subject to approval by BroodMinder.

---

## Summary

| Export / Access Type | Best For | Scope |
|----------------------|----------|-------|
| Device CSV | Quick analysis of one device | Single device |
| Dashboard Export | Multi-hive operational review | Dashboard-level |
| Researcher Export | Full dataset extraction for research and advanced analysis | Entire apiary |
| MyBroodMinder API | Automated retrieval, integrations, and custom data workflows | Programmatic access to MyBroodMinder data |

With these options, you retain **full ownership and flexibility** over your hive data — whether you need a quick CSV export, a complete research dataset, or automated access for your own applications and analysis workflows.

---

## Advanced Data Analysis Services

If you need analysis that goes beyond MyBroodMinder’s built-in visualization tools, we can handle advanced data processing for you.

Using exported datasets, we perform in-depth analytics and create professional visualizations using advanced graphing libraries. This enables:

- Advanced statistical analysis  
- Custom performance modeling  
- Multi-apiary comparisons  
- Productivity and nectar flow analysis  
- Research-grade reporting  
- Tailored dashboards for presentations or publications  

Whether you are conducting research, preparing a report, supporting a grant application, or optimizing your operations, we can provide structured analysis and clear visual outputs tailored to your objectives.

To discuss your project, contact us at **support@broodminder.com** and let us know your goals, timeframe, and available data. We’ll be happy to propose a solution adapted to your needs.