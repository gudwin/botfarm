# BotFarm

> At current moment, package not ready to be used in production, but that will be fixed soon

> The Library still in an active development, so don't hesitate to propose changes and new features.


# Glossary
 
- **BMS** - Bot Management System;
- **Theme** - a factory that produces a basic "skeleton" of the chatbot;  
- **Plugin** - a component that integrates extra features into "skeleton";
- **MBF** - Microsoft Bot Framework;
 
# Introduction 

While Microsoft Bot Framework quickly evolves and there are lots of packages for it distributed for free, still, there is a problem with reusability of code that represents business logic. While MBF allows you to compose chat bots from waterfall dialogs and recognizers these components usually are tightly coupled with concrete solution and hardly could be reused.
 
In same moment, development of ready-to-use chatbot requires a lot of efforts from developer for production of components that do not relate to actual business features of the bot. Imagine, you want to produce a chatbot that allows a customer to order a cup of coffee, in that case, you'll probably also have to spend efforts on service components like: user signup, notification of registered users with new updates, handoff-support, help, autodiscoverable dialogs and etc. BotFarm tries to simplify your  life with such components.       
 
The BotFarm project is an attempt to provide a BMS (Bot Management System) solution based on reusable components. The main goal of that project to allow developers to produce reusable components and allow them to quickly compose chat bots. Project features:

 - composer for chatbots, the bot composed from themes and plugins;
 - ability to restore and restart internal state and configured bots after reboot;
 - internal "master" bot that manages and configures chatbots, available only from system console; 
 - pure javascript stack, [LokiJS](http://lokijs.org/) used as an storage 
 


# Usage scenario

**Important!** this diagram describes only a vision on first version of the BMS, not an actual state

- prepare package.json 
- prepare HTTPS certificates (required by Microsoft Bot Connector)
- run `npm install` 
- run `npm start` 
- type next commands in console:
  - `refresh modules` - to discover module;
  - `settings` - you will be asked about HTTPS certificates; 
  - `add hello-world-bot base-skype-theme hello-world`, you will be asked for connector credentials (app_id, app_password);
  - bot ready 
  - type `status`
  - in report you will find information about exposed REST endpoint of the bot, use it for configuration Bot Framework Dashboard
  
# In Details 
 
## Context Diagram

![BotFarm context](https://github.com/gudwin/botfarm/blob/master/documentation/diagrams/context.png?raw=true)

## Build Sequence Diagram

![How BotFarm creates a bot ](https://github.com/gudwin/botfarm/blob/master/documentation/diagrams/sequence.png?raw=true)

**Important!** this diagram describes only a vision on first version of the BMS, not an actual state  

#  Changelog: 

- 0.0.3 - basic version of bot composer prepared


