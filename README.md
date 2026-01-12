
# HelpLink

## 🔗 Live Link: [HelpLink](https://helplink-frontend.vercel.app)

## Overview
Every year, during winter, floods and cyclones in Bangladesh, underprivileged people suffer. Many donors want to help but do not know who to help. This project is a MERN Stack web platform that connects donors, recipients, volunteers and administrators to ensure timely relief distribution.



## Features

- Donor-Recipient Connection: Recipients can post their issues and donors can easily view these posts and provide assistance by donating. This makes it easy and transparent to help others.

- Real-time Hazard Map: The platform uses the weather API to show the disaster risk for each district. Color-coded map markers help donors, volunteer and admin quickly see which areas need urgent attention.

- AI-assisted emergency detection: When a receiver posts a request, the system analyzes the title to determine the emergency status. Highly urgent requests can be automatically approved to ensure rapid relief distribution.

- **Role-Based Access & Authorization:**  
  Every user is securely authorized using **JWT tokens**. Each role can only access the data and routes they are allowed to.  
  - **Receiver:** Post requests for help; view, update, and delete only their own requests.  
  - **Donor:** View the requests they have donated to.  
  - **Admin:** Access a dedicated dashboard; manage users, campaigns, and donations.  
  - **Volunteer:** Access a separate dashboard; view and manage assigned campaigns.  


## Technologies
[![My Skills](https://skillicons.dev/icons?i=ts,nextjs,tailwind,nodejs,express,mongodb)](https://skillicons.dev)


## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start / dev
```
