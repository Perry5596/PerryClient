<p align="center">
    <a href="https://github.com/Perry5596/PerryClient" target="_blank">
      <img width="69%" src="assets/PerryClient-title-logo.png" alt="PerryClient Logo">
    </a>
</p>

<p align="center">
    <img src="https://img.shields.io/github/v/release/Perry5596/PerryClient?style=flat-square" alt="GitHub release (latest by date)">
    <img src="https://img.shields.io/github/languages/code-size/Perry5596/PerryClient?style=flat-square" alt="Code Size">
    <img src="https://img.shields.io/github/downloads/Perry5596/PerryClient/total?style=flat-square" alt="Downloads">
    <img src="https://img.shields.io/github/license/Perry5596/PerryClient?style=flat-square" alt="License">
    <img src="https://img.shields.io/github/last-commit/Perry5596/PerryClient?style=flat-square" alt="Last Commit">
</p>

## Table of Contents

- [Introduction](#introduction)
- [Setup](#setup)
- [Commands](#commands)
- [Features](#features)
  </br>

## Introduction

**PerryClient** is a custom [ChatTriggers](https://www.chattriggers.com) module for Hypixel Skyblock, designed to provide innovative new features. With a focus on underdeveloped areas of the game, this module makes playing more efficient and enjoyable.

## Setup

### <u>Before Installation:</u>

1. **Install ChatTriggers:** Make sure you have [ChatTriggers](https://www.chattriggers.com) installed.
2. **Install Forge:** Install [Forge](https://files.minecraftforge.net/net/minecraftforge/forge/index_1.8.9.html) for compatibility with Minecraft 1.8.9.

### <u>Installation:</u>

1. **Download:** Download the latest release of the module from the [Releases page](https://github.com/Perry5596/PerryClient/releases).
2. **Unzip:** Extract the contents of the downloaded file. You should see a folder named "PerryClient".
3. **Accessing ChatTriggers:** Launch Minecraft and enter the command `/ct files` to open the ChatTriggers directory.
4. **Integration:** Move the "PerryClient" folder into the "modules" folder located in the ChatTriggers directory.
5. **Confirmation:** In Minecraft, run `/ct load` to load the module.

Congratulations! PerryClient is now ready to use.

## Commands

### <u>General Commands</u>

- `/pe help`: Displays the help menu in the chat.
- `/pe version`: Displays the current version of the module and checks for updates.
- `/pe reload`: Reloads the module.

### <u>QOL Commands</u>

- `/sb`: Opens the Skyblock menu
- `/bc`: Opens the Booster Cookie menu
- `/ph`: Visits the Portal Hub
- `/col`: Opens the Collections menu
- `/sk`: Opens the Skills menu
- `/ch`: Warps to the Hollows
- `/ku`: Warps to Kuudra
- `/dh`: Warps to the Dungeon Hub
- `/museum`: Warps to the Museum
- `/garden`: Warps to the Garden

### <u>Functional Commands</u>

- `/remind {time in minutes} {message}`: Sends a reminder to the chat in x amount of time. Also has an optional Discord webhook option.
- `/bzdata {item_name}`: Sends the current buy and sell prices of the given item. You can have spaces in the item name, it just has to be the correct name.

## Features

### <u>Current Features</u>

#### General Features

- **Piggy Alert:** A title alert that displays when your piggy bank cracks.
- **Sack of Sacks Alert:** A title alert that displays when a sack in your sack of sacks is full.
- **Cookie Buff Alert:** A chat message alert that displays when your cookie buff expired since last login.
- **AFK Alert:** Sends an alert message through the discord webhook link if it exists.
- **Click-To-Visit:** Click a chat message to visit that person. Only applies when the chat includes the word "visit"

#### Combat Features

- **Ghost ESP:** Renders ESP for the dwarven mines ghosts.

#### Dungeon Features

- **Teammate ESP:** Renders ESP for all of your teammates in dungeons.

#### Fishing Features

- **Trophy Fishing Waypoints:** A waypoint render that displays all of the proper fishing locations for the given trophy fish.

---

Contributions are always welcome! Open an issue for any bugs or problems you may have.
