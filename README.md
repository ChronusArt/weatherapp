# 🌤️ Weather App – Clean Architecture with SOLID & OOP Principles

A full-stack weather application designed with clean architecture in mind. The server is structured using **SOLID** principles and **Object-Oriented Programming (OOP)** best practices. Logging and testing are fully integrated.

---

## 📦 Na setup ako aoibhefuobwegiuobwo

### 🖥️ Server

Navigate to the server folder, install dependencies, and start the development server:

```bash
cd server
npm install
npm run dev
```

### 💻 Client

In a new terminal window, navigate to the client folder, install dependencies, and start the React app:

```bash
cd client
npm install
npm start
```

---

## ✅ Running Tests

To run the tests for the server:

```bash
cd server
npm test
```

---

## 🧱 Project Structure & SOLID Principles

This project follows the **SOLID principles** for scalable and maintainable architecture:

### 🔹 S – Single Responsibility Principle (SRP)

Each file has one responsibility:

- `WeatherController.js`: Handles incoming HTTP requests.
- `WeatherService.js`: Contains business logic and orchestrates data flow.
- `WeatherRepository.js`: Handles external API data fetching.

### 🔹 O – Open/Closed Principle (OCP)

- System is **open for extension** (e.g., adding caching, new APIs).
- System is **closed for modification** by leveraging **dependency injection** and **interfaces**.

### 🔹 L – Liskov Substitution Principle (LSP)

- `WeatherService.js` implements `IWeatherService.js`, allowing for different service implementations without breaking the system.

### 🔹 I – Interface Segregation Principle (ISP)

- `IWeatherService.js` defines only the methods needed by consumers.
- Keeps interfaces focused and avoids unnecessary dependencies.

### 🔹 D – Dependency Inversion Principle (DIP)

- High-level modules like `WeatherService.js` depend on **abstractions** (`IWeatherService.js`) rather than concrete classes.

---

## 📝 Logging & Error Handling

The project uses [Winston](https://github.com/winstonjs/winston) for structured logging.

### 🔍 Log Levels

- `info`: Logs API requests.
- `warn`: Logs client-side issues like bad requests.
- `error`: Logs unexpected issues and service failures.

### 📌 Where Logging Happens

- `WeatherService.js`: Captures service-level errors.
- `WeatherController.js`: Logs incoming requests and response status.

---

## 🧪 Testing

Testing is implemented with [Jest](https://jestjs.io) and [Supertest](https://github.com/ladjs/supertest).

### ✅ Unit Tests

- File: `WeatherService.test.js`
- Purpose: Mock `WeatherRepository.js` to test `WeatherService.js` in isolation.

### 🔁 Integration Tests

- File: `WeatherRoutes.test.js`
- Purpose: Uses `supertest` to make real HTTP requests to test route integration and controller behavior.

---

## 💡 Object-Oriented Programming (OOP) Principles

The project applies OOP principles to enhance maintainability and extensibility.

- **Encapsulation**: Classes manage their own data and behavior.
- **Abstraction**: Interfaces like `IWeatherService.js` define contracts.
- **Inheritance**: `WeatherService.js` extends interface definitions.
- **Polymorphism**: Easily switch service or repository implementations without modifying consuming code.

---

## 🧼 Summary

This project is a demonstration of how to build scalable, testable, and maintainable backend architecture using:

- ✅ **SOLID** principles  
- 🧪 **Unit and Integration Testing**  
- 💬 **Structured Logging**  
- 💡 **OOP Best Practices**

---

## 📚 Tech Stack

- **Backend:** Node.js, Express  
- **Frontend:** React  
- **Testing:** Jest, Supertest  
- **Logging:** Winston  
- **Architecture:** Clean Architecture, SOLID  

---

#comment ni veen
#nananksjf

