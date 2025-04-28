# Task Manager App (Java Spring Boot + React)

🚧 **Work In Progress** 🚧

This is a full-stack Task Management application currently being built using:

- **Backend:** Java + Spring Boot
- **Frontend:** React.js
- **Database:** MySQL 

The project is focused on learning and applying full-stack development principles, specifically spring boot.

---

## 📚 Project Description

The Task Manager App allows users to:

- Register an account
- Log in to their personal dashboard
- Create tasks
- View tasks
- Update task statuses (To Do, In Progress, Done)
- Delete tasks

Users will have a secure login system and their tasks will be private to their account.

---

## 🛠️ Technology Stack

| Part | Technology |
|:---|:---|
| Backend | Java, Spring Boot, Spring Data JPA, Spring Security (planned) |
| Frontend | React.js |
| Database | MySQL 
| Build Tools | Maven, npm |
---

## ⚙️ Current Progress

- [x] Backend: User and Task entities
- [x] Backend: Repositories, Services, and Controllers
- [x] Backend: Basic Create and Read APIs for users and tasks
- [x] Frontend: React app scaffolded
- [ ] Frontend: Connect React to Spring Boot API (in progress)
- [ ] Frontend: Build User Registration page
- [ ] Frontend: Build Login and Dashboard pages
- [ ] Backend: Add Spring Security for authentication (planned)

---

## 🚀 How to Run Locally

### Backend (Spring Boot)

1. Clone the repository.
2. Navigate to the backend folder (example: `task-manager-app/`).
3. Set up your `application.properties` to connect to your database (MySQL recommended).
4. Run the backend:
   ```bash
   ./mvnw spring-boot:run
