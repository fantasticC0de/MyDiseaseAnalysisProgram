# 🦠 ViruScope: Term 2 Final REACT project
~ Created by Jordan James-Vinales

## ⚒ Overview
This program is an unfinished project, aimed to drastically decrease the research and data gathering time it takes medical students to retriece data on the effcets of diseases across space. This program has updating pre-loaded information from as recent as this year (2025) to 2007. The information medical students are availible to are as following:

* Country: The name of the country where the health data was recorded.
* Year: The year in which the data was collected.
* Disease Name: The name of the disease or health condition tracked.
* Disease Category: The category of the disease (e.g., Infectious, Non-Communicable).
* Prevalence Rate (%): The percentage of the population affected by the disease.
* Incidence Rate (%): The percentage of new or newly diagnosed cases.
* Mortality Rate (%): The percentage of the affected population that dies from the disease.
* Age Group: The age range most affected by the disease.
* Gender: The gender(s) affected by the disease (Male, Female, Both).
* Population Affected: The total number of individuals affected by the disease.
* Healthcare Access (%): The percentage of the population with access to healthcare.
* Doctors per 1000: The number of doctors per 1000 people.
* Hospital Beds per 1000: The number of hospital beds available per 1000 people.
* Treatment Type: The primary treatment method for the disease (e.g., Medication, Surgery).
* Average Treatment Cost (USD): The average cost of treating the disease in USD.
* Availability of Vaccines/Treatment: Whether vaccines or treatments are available.
* Recovery Rate (%): The percentage of people who recover from the disease.
* DALYs: Disability-Adjusted Life Years, a measure of disease burden.
* Improvement in 5 Years (%): The improvement in disease outcomes over the last five years.
* Per Capita Income (USD): The average income per person in the country.
* Education Index: The average level of education in the country.
* Urbanization Rate (%): The percentage of the population living in urban areas.

## 💡Features (Coming soon)
**Front Page** {
- - **Learn Button**-*( This will take you to the main function of the program where 4 drop menus will appear: "Country name", "Disease name", "Effect type", "Year." After information is selected for each menu, users may click the submit button where their information will be fetched and their retrieved information will be displayed onto a displayer bar to thr right)*
- - **Top Bar** {
  - - **Source page**-*( Includes the sources for the information gathered and used in this program )*
    - **Contact page**-*( Includes all my buisness inquiries )*
    - **"About this website page"**-*( Includes a guide on how to use the program )* } }

      
<img width="364" alt="Screen Shot 2025-05-30 at 5 16 49 PM" src="https://github.com/user-attachments/assets/da2a98d2-7afe-4766-9acb-93ed211331e7" />
<img width="314" alt="Screen Shot 2025-05-30 at 5 33 02 PM" src="https://github.com/user-attachments/assets/37a49216-c52d-4c56-9377-e1b1329b4773" />

## 🏠 Program structure
```
Main Folder
|
├──Backend

         └── csvs
         └── db
         └── node_modules

         └── .env
         └── package-lock.json
         └── package.json

         └── server.js
├──Frontend
         └── node_modules
         └── public
         └── src

         └── .gitginore
         └── package-lock.json
         └── package.json
├──PSQL_tables
└── README.md
```
## 📄 Sources
```
https://www.kaggle.com/datasets/malaiarasugraj/global-health-statistics/data
```
```
https://github.com/ahdeah/engineering-practicum-term-02-final-project-guide/blob/main/01-node-server-and-express-endpoints-starter.md
```
