Setup
After downloading, install dependencies and run the project:

Server

cd server
npm install
npm run dev

Client

Open a new terminal:

cd client
npm install
npm start

Running Tests

cd server
npm test

Project Structure & SOLID Principles

I designed the server structure to follow the SOLID principles:

S - Single Responsibility Principle (SRP)
Each file has its own responsibility:

WeatherController.js handles requests.
WeatherService.js contains the business logic.
WeatherRepository.js fetches data.

O - Open/Closed Principle (OCP)
New services (e.g., caching, alternative APIs) can be added without modifying WeatherService.js or WeatherRepository.js because of dependency injection and interface-based design.

L - Liskov Substitution Principle (LSP)
WeatherService.js extends IWeatherService.js, making it easy to swap different implementations.

I - Interface Segregation Principle (ISP)
IWeatherService.js defines only the required method, avoiding unnecessary dependencies.

D - Dependency Inversion Principle (DIP)
WeatherService.js depends on IWeatherService.js (an abstraction) rather than a concrete implementation, improving flexibility.

Logging & Error Handling

I use Winston for logging:

Info logs track API requests.
Warn logs detect bad requests.
Error logs capture failures in WeatherService.js and WeatherController.js for better debugging and monitoring.

Testing

I use Jest for testing:

Unit tests (WeatherService.test.js): Mock WeatherRepository.js to test WeatherService.js independently.
Integration tests (WeatherRoutes.test.js): Use supertest to verify API responses without modifying the actual service.

Object-Oriented Programming (OOP) Principles

I applied OOP principles throughout the project:

Encapsulation: WeatherService.js and WeatherRepository.js contain their own logic.
Abstraction: IWeatherService.js defines a contract.
Inheritance: WeatherService.js extends IWeatherService.js.
Polymorphism: WeatherService.js can use different repository implementations without modification.
