# HelpMeOut

## Overview
HelpMeOut is a job board application created to connect members of the community in a safe, accessible manner. Designed to answer a growing need, HelpMeOut is sure to help bridge those in need of work done around the house to those who have the qualifications to provide such a service.

## Description
HelpMeOut was an idea presented by a client, and implemented by a team of developers aiming to provide a premium product that met proposed criteria.
After account creation, users of HelpMeOut will be able to: post a job as a client needing provided services, or search for jobs as a contractor.   Contractors will be further prompted to select one or many specialties, and be required to provide supporting qualifications.
Jobs will be both searchable and filterable. Once a job has been claimed by a contractor, forms of communication will be established between the contractor and client to further discuss specifications of the job.
Upon completion of a job, the client will be able to review the contractor's work. This will allow subsequent users to pick contractors based on a peer-reviewed system of tranparency.

## Installation
 1) Fork and clone repo from Github via: 'https://github.com/matthewdowell/HelpMeOut.git'
 ```bash
git clone https://github.com/matthewdowell/HelpMeOut.git
 ```
 2) Open project folder in preferred code editor
 3) Install dependencies:
 ```bash
 npm install
 ```
 4) Create .env file with the following variables for postgreSQL database access:
 ```bash
 DB_USER=your psql username here
 DB_PASSWORD=your psql password here
 ```
 5) Load schema file:
 ```bash
 psql -h localhost -d postgres -U [your username] -f ./schema.SQL
 ```
 6) Build application bundle:
 ```bash
 npm run build
 ```
 7) Start server:
 ```bash
 npm start
 ```
 8) Initialize chat server:
 ```bash
 npm run startChat
 ```
 9) Open the web app in your browser at http://localhost:3000/

## Dependencies
  - [React]
  - [Express]
  - [Axios]
  - [Passport]
  - [Socket.io]
  - [MaterialUI]
  - [Babel]
  - [Webpack]


## Contributors
Matthew Dowell <br />
Michael Light<br />
Derek Mason<br />
Evan Mastro<br />
Daniel Pinzon<br />
Nate Schroeder<br />
Max Tarika

## Images
  ![Screen Shot 2021-12-16 at 12 10 01 PM](https://user-images.githubusercontent.com/86025701/146433596-2ece3afa-3b0e-417b-88b3-83af61c0b44f.png)


