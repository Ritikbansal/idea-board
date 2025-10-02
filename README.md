# The Idea Board

The Idea Board is a modern, real-time web application for sharing, upvoting, and discovering ideas. It empowers users to post ideas anonymously, engage with a community-driven voting system, and watch the best ideas rise to the top.

---

## Table of Contents

* [Overview](#overview)
* [Architecture](#architecture)
* [Getting Started](#getting-started)

  * [Prerequisites](#prerequisites)
  * [Running Locally with Docker Compose](#running-locally-with-docker-compose)
* [API Endpoints](#api-endpoints)
* [Features](#features)
* [Trade-offs & Notes](#trade-offs--notes)

---

## Overview

The Idea Board allows users to:

* Post ideas anonymously (max 280 characters).
* Upvote ideas to push them to the top.
* View real-time updates as new ideas are added.
* Explore an engaging landing page highlighting platform features.

The frontend is built with **Next.js** and **React**, while the backend exposes RESTful API endpoints for CRUD operations on ideas.

---

## Architecture

* **Frontend**: Next.js (React)

  * Components: `LandingPage`, `IdeaBoardApp`, `Card`, `Button`, `Textarea`
  * State management using React hooks (`useState`, `useEffect`)
  * Periodic data fetching to enable real-time updates

* **Backend**: REST API

  * `GET /api/ideas` → Fetch all ideas
  * `POST /api/ideas` → Submit a new idea
  * `PUT /api/ideas/:id` → Upvote an idea

* **Database**: Can be connected via Docker Compose (PostgreSQL, MySQL, or SQLite)

* **Deployment**: Containerized using **Docker** and **Docker Compose** for consistent local and production environments.

---

## Getting Started

### Prerequisites

* [Docker](https://www.docker.com/get-started)
* [Docker Compose](https://docs.docker.com/compose/install/)
* Node.js (v18+ recommended for local dev if needed)

---

### Running Locally with Docker Compose

1. Clone the repository:

```bash
git clone https://github.com/yourusername/the-idea-board.git
cd the-idea-board
```

2. Build and start the containers:

```bash
docker-compose up --build
```

3. The app should now be running at [http://localhost:3000](http://localhost:3000)

4. To stop the containers:

```bash
docker-compose down
```

---

## API Endpoints

| Method | Endpoint         | Description          | Request Body                      |
| ------ | ---------------- | -------------------- | --------------------------------- |
| GET    | `/api/ideas`     | Retrieve all ideas   | None                              |
| POST   | `/api/ideas`     | Submit a new idea    | `{ "content": "Your idea here" }` |
| PUT    | `/api/ideas/:id` | Upvote an idea by ID | None                              |

**Notes:**

* Ideas are returned in JSON format.
* Upvotes are automatically incremented in the backend.

---

## Features

* **Anonymous Posting**: Users can post ideas without revealing their identity.
* **Community Voting**: Upvote ideas to influence ranking.
* **Real-Time Updates**: Ideas automatically refresh every 5 seconds.
* **Responsive Design**: Mobile-first, modern UI using Tailwind CSS.
* **Landing Page**: Highlights the benefits and features of the platform.

---

## Trade-offs & Notes

* **Real-time Updates**: Implemented with polling every 5 seconds instead of WebSockets for simplicity.
* **State Management**: Lightweight React state without external libraries (Redux, Zustand) to keep it simple.
* **Scalability**: Suitable for small to medium user bases; for high traffic, consider caching, database indexing, and WebSocket implementation.
* **Security**: Anonymous posting reduces friction, but lacks authentication and rate-limiting.

---

## License

This project is licensed under the MIT License.
