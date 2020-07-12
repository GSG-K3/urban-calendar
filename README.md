# Urban Nature Calendar [![Build Status](https://travis-ci.org/GSG-K3/urban-calendar.svg?branch=master)](https://travis-ci.org/GSG-K3/urban-calendar)

**Urban Natural** is a small furniture company with a showroom located in Bloomfield, New Jersey. They sell products made from the healthiest, safest, most durable materials available- free from harmful chemicals.

## Heroku Link

 - [Heroku Link](https://urbancalendar.herokuapp.com/)

## Figma Link

Checkout the Design
- [Desktop Application](https://www.figma.com/file/YQQSvG5DrJoJWaqlr8qpmd/urban-natural-home?node-id=0%3A1)

- [Mobile Application](https://www.figma.com/file/HoRxhtr24UIomHNurCH6b7/Appointment-app?node-id=0%3A1)

## Problem

As the lockdown and corona-virus begin to subside in New Jersey, [Urban Natural Home Furniture](https://www.urbannatural.com/) is looking to re-open their showroom with half capacity, the main problem comes with controlling the:

- Number of people allowed to be in the showroom at the same time
- Number of hours allowed for each visit

## Solution

build a calendar app where we can establish safe and easy contact with customers.
So they can reserve an appointment with the manager to come to the showroom with some rules:

- Maximum of 3 people for each visit.
- Maximum hours for each visit is 2 hours.
- Comply with the business safety rules.

## User Journey

For Customers:

- As a customer, I want to be able to see available appointment slots and book any available time to visit the showroom or have a virtual meeting and add this time to the calendar to remind me.

## User Story

![user story](https://user-images.githubusercontent.com/54964739/86168141-6a994a80-bb20-11ea-908f-e28facee834b.png)

## Database schema

![db_schema](https://user-images.githubusercontent.com/55299644/87243171-6d5b4000-c43c-11ea-86e1-f55225471f4a.png)


## How to run the project?

- Clone this repo to your local machine using terminal:

```shell
git clone https://github.com/GSG-K3/urban-calendar.git
```

- run these commands in your terminal:

```shell
 $ cd urban-calendar
 $ npm i
 $ cd client
 $ npm i
 $ cd ..

```
- create database locally:

```shell
$ psql
  CREATE DATABASE databasename;
  CREATE USER username;
  GRANT ALL PRIVILEGES ON DATABASE databasename TO username IDENTIFIED BY password;
```
- create config.env file in root and put in it:

```shell
DATABASE_URL= postgres://username:password@localhost:5432/databasename
```
- build database:

```shell
$ node server/database/dbBuild.js
```
- to run website:

```shell
 $ npm run dev
 ```
## Used technologies:

**Front End**:

- [React Framework](https://reactjs.org/)
- [Material UI](https://material-ui.com/)

**Back End**:

- [Node js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)

## Working Group

- **Team members**
  - [Nujood](https://github.com/Jood80)
  - [Rahaf](https://github.com/Rahaf-96)
  - [Tasneem](https://github.com/tasneembhiri)
