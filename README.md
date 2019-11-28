## Innovaccer Entry Management App

### Contents
1. [Overview](#overview)
2. [Setup](#setup)
3. [Screens](#screens)
4. [Routes Used](#routes)
5. [Table Schema](#Schema)



### Overview
---
This app was developed as a part of SDE internship assignment at Innnovaccer, using NodeJS,MongoDB, ExpressJS, AWS SES for emails and AWS SNS for Mobile Messages,
according to the [specs](https://summergeeks.in/static/assignments/summergeeks%202020%20-%20SDE%20Assignment.pdf), this assumes the following,
There is a fixed table of Hosts/Employees and they are each mapped with a 3 letter unique String denoting their HostId/EmployeeId.

* Everytime a visitor comes to the center, they enter their details along with the HostID and then,
    * Visitor recieves confirmation and address to the host's office
    * Host recieves information about the Visitor
    * Database is updated with information to reflect changes
    

    
### Setup
---
Before proceeding please download and install ![NodeJS](https://nodejs.org/en/download/) and ![MongoDB](https://www.mongodb.com/download-center/community) because it is required.



1. Download/Clone the Repository
2. Navigate into the Repository folder on your disk using Terminal
3. Make sure that you have the Node and MongoDB installed
4. Run the following command to run the setup,
    `sh setup.sh`
    #### Note: This app uses AWS credentials for sending Email and SMS notifications, please setup the config.json file in the repository with your credentials to avail the same, else sending notifications won't be possible.
    
Now everything required should be installed, go ahead and run the following command whenever you want to run the app,
`node app.js`
##### The App would now be Up and Running on localhost:3000
    
    
### Screens
---
#### Landing Page that a Guest sees when they walk in,
![Landing Screen](https://raw.githubusercontent.com/akhileshPandey16/Innovacer_Entry_Mangement/master/images/Welcome.png)

#### New Guest Entry Page

![Entry Screen](https://raw.githubusercontent.com/akhileshPandey16/Innovacer_Entry_Mangement/master/images/checkIn.png)

#### Check In Email Notification

![CheckIn Email](https://raw.githubusercontent.com/akhileshPandey16/Innovacer_Entry_Mangement/master/images/em-checkIn.png)

#### Check In Message Notification
![CheckIn Message](https://raw.githubusercontent.com/akhileshPandey16/Innovacer_Entry_Mangement/master/images/ms-checkIn.jpeg)

#### New Guest Exit Page

![Exit Screen](https://raw.githubusercontent.com/akhileshPandey16/Innovacer_Entry_Mangement/master/images/checkOutcopy.png)

#### Check In Email Notification

![CheckIn Email](https://raw.githubusercontent.com/akhileshPandey16/Innovacer_Entry_Mangement/master/images/em-checkOut.png)

#### Check In Message Notification
![CheckIn Message](https://raw.githubusercontent.com/akhileshPandey16/Innovacer_Entry_Mangement/master/images/ms-checkOut.jpeg)



### Routes
---

| Route  | Description |
| ------------- | ------------- |
| /checkIn |(post) Creates a new Guest Visit Entry in MongoDB  |
| /checkOut |(post) Deletes the  Guest Visit Entry in MongoDB  |

### Schema
===
#### Host
![Host Schema](https://raw.githubusercontent.com/akhileshPandey16/Innovacer_Entry_Mangement/master/images/host.png)

#### Visitor
![Visitor Schema](https://raw.githubusercontent.com/akhileshPandey16/Innovacer_Entry_Mangement/master/images/guest.png)




