# BotFarm

> At current moment, package not ready to be reused, that will be fixed soon

> The Library still in an active development, so don't hesitate to propose changes and new features.


# Glossary
 
- **BMS** - Bot Management System
- **Theme** - a factory that produces a basic "skeleton" of the chatbot.  
- **Plugin** - a component that integrates extra features into "skeleton" 
 
# Introduction 
The BotFarm project is an attempt to provide a BMS solution. Major features of this project:

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


