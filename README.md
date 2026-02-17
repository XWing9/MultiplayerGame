# ⚽ Multiplayer Soccer Game (Custom JS Engine)

A multiplayer soccer game built with a fully self-developed JavaScript game engine.

This project focuses on engine architecture, multiplayer communication, and modular system design.  
It is currently under active development.

---

## 📌 Overview

This project consists of two main parts:

1. A custom-built JavaScript game engine
2. A multiplayer soccer game built on top of that engine

The engine is specifically designed and tailored for this game and simple external acces.

However, one of the core intentions behind this project is:

> To allow friends to build a game easy and quick without having to do all the complicated stuff themselves
> to build a game quickly and easily by using a clean, simplified engine interface.

The engine abstracts complex systems and exposes only the necessary functions through an Engine Manager instance.  
They only need to call the instance and the function they want to use, as soon as that happens the Engine takes care of the rest.

---

## 🧠 Engine Architecture

The engine is:

- Fully self-contained
- Modular
- Designed for easy integration
- Accessed via an imported Engine Manager instance
- Built to abstract technical complexity

Game logic interacts with the engine through clearly exposed functions.

For example:

- Updating player positions
- Handling entity logic
- Managing internal state
- Running the game loop
- Networking logic

All heavy technical lifting is handled internally by the engine.

The goal is to minimize the amount of code required to implement gameplay logic.

---

## 🌐 Multiplayer & Backend

The backend is built using:

- **Node.js**

Server-side code is included in a separate folder.

The multiplayer system (currently in development) will handle:

- Client-server communication
- Real-time state synchronization
- Data transmission between players
- Data validation to ensure no cheating happens

---

## 🚧 Current Development Status

### Under Active Development

### Planned / In Progress Features

- Collision detection inside the engine
- Backend communication layer
- Server implementation for sending and receiving data
- Dynamic entity spawning at defined or generated positions

---

## 🎯 Technical Focus

This project is primarily focused on:

- Game engine architecture
- Developer-friendly API design
- Multiplayer communication
- Separation between engine and game logic
- Scalable code structure

---

## 🛠 Tech Stack

**Frontend / Engine**
- JavaScript
- Html
- css

**Backend**
- Node.js
