# Financial Tracking App

![Python](https://img.shields.io/badge/Python-3.x-blue.svg)
![Django](https://img.shields.io/badge/Django-3.x-green.svg)
![React](https://img.shields.io/badge/React-17.x-blue.svg)
![MySQL](https://img.shields.io/badge/MySQL-5.x-blue.svg)
![Docker](https://img.shields.io/badge/Docker-19.x-blue.svg)


## Description

**Financial Tracking App** is a web application for personal finance tracking. It allows users to add and categorize their income and expenses, visualize financial data with charts and graphs, and generate reports for various time periods. The application offers an intuitive interface and powerful analytical tools for making informed financial decisions.

## Key Features

- ### User Registration and Authentication
  - **User registration**
  - **User login and logout**
  - **CSRF protection**

- ### Transaction Management
  - **Adding, editing, and deleting transactions**
  - **Categorizing transactions by category**

- ### Data Visualization
  - **Displaying charts and graphs for financial data analysis**

- ### Report Generation
  - **Creating reports for selected time periods**

## Technology Stack

- **Frontend**: React, Axios, Material-UI
- **Backend**: Django, Django REST Framework
- **Database**: MySQL
- **Containerization**: Docker

## Installation and Setup

### Prerequisites

- Docker and Docker Compose
- Node.js
- Python 3.x

### Installation Steps

1. **Clone the repository**:

    ```bash
    git clone https://github.com/levklon/financial_tracking_app.git
    cd financial_tracking_app
    ```

2. **Set up and activate the virtual environment for the backend**:

    ```bash
    cd backend
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. **Install backend dependencies**:

    ```bash
    pip install -r requirements.txt
    ```

4. **Apply migrations and create a superuser**:

    ```bash
    python manage.py makemigrations
    python manage.py migrate
    python manage.py createsuperuser
    ```

5. **Start the Django server**:

    ```bash
    python manage.py runserver
    ```

6. **Set up the frontend**:

    ```bash
    cd ../frontend
    npm install
    npm start
    ```

7. **Start Docker containers**:

    ```bash
    docker-compose up --build
    ```

## API Documentation

For API documentation, it is recommended to use tools like Swagger or ReDoc. This will automatically generate the documentation and make it easy to integrate into the project.

## Testing

To ensure the reliability and stability of the application, it is recommended to add unit tests for both backend and frontend components. This will help catch errors before they reach the production environment.

## Contributing

You can contribute to the project by following these steps:

1. Fork the repository.
2. Create a new branch:

    ```bash
    git checkout -b feature-branch
    ```

3. Make your changes and commit them:

    ```bash
    git commit -m 'Add some feature'
    ```

4. Push the changes to your fork:

    ```bash
    git push origin feature-branch
    ```

5. Create a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or suggestions, you can reach out to me via [Telegram](https://t.me/levklon).

---

This README was created to make it easier for developers to work with this project. Your suggestions and feedback are welcome!
