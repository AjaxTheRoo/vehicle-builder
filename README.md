# TypeScript Vehicle Builder

## Description
The **TypeScript Vehicle Builder** is a command-line application that enables users to create and interact with various types of vehicles. Initially designed for cars, the application has been extended to support trucks and motorbikes, offering unique attributes and actions for each vehicle type. This project demonstrates the use of Object-Oriented Programming (OOP) principles in TypeScript and showcases effective handling of user inputs through the Inquirer package.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Vehicles](#vehicles)
- [Demo](#demo)
- [Contribute](#contribute)
- [License](#license)


## Features
- Create and manage different types of vehicles: **Car**, **Truck**, and **Motorbike**.
- Enter detailed attributes specific to each vehicle type during creation.
- Perform actions unique to the selected vehicle type.
- Seamlessly navigate between vehicle creation, selection, and action menus.

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd typescript-vehicle-builder
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage
1. Start the application:
   ```bash
   npm start
   ```
2. Follow the prompts to:
   - Create a new vehicle (choose between car, truck, or motorbike).
   - Provide details for the vehicle, such as make, model, and specific attributes.
   - Select an existing vehicle from the list.
   - Perform actions unique to the chosen vehicle.

## Vehicle Classes and Attributes
### Car
- **Attributes:** Make, Model, Year, Color
- **Actions:** Honk, Drive

### Truck
- **Attributes:** Make, Model, Towing Capacity, Bed Length
- **Actions:** Honk, Drive, Tow

### Motorbike
- **Attributes:** Make, Model, Type (e.g., Cruiser, Sport), Engine Capacity
- **Actions:** Honk, Ride

## Technologies Used
- **TypeScript**: For building the application using OOP principles.
- **Inquirer**: For handling user input.
- **Node.js**: For running the command-line application.

## Demo
Watch the [walkthrough video](<insert-video-link-here>) to see the application in action, including:
- How to invoke the application.
- Entering responses to the prompts.
- Demonstrating functionality for cars, trucks, and motorbikes.

## Contribution Guidelines
Contributions are welcome! If you find a bug or have a feature request, please open an issue or submit a pull request.

## License
This project is licensed under the MIT License.

---
&copy; 2024 TypeScript Vehicle Builder Team. All Rights Reserved.

