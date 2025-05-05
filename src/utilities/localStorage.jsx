const employees = [
    {
      "id": 1,
      "name": "Aarav",
      "email": "employee1@example.com",
      "password": "123",
      "taskCount": {
        "accepted": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      },
      "tasks": [
        {
          "taskNumber": 1,
          "accepted": false,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Prepare Sales Report",
          "taskDescription": "Generate the monthly sales report for April.",
          "taskDate": "2025-04-22",
          "category": "Reporting"
        },
        {
          "taskNumber": 2,
          "accepted": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Organize Team Files",
          "taskDescription": "Sort and archive the project documents.",
          "taskDate": "2025-04-19",
          "category": "Documentation"
        },
        {
        "taskNumber": 3,
          "accepted": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Product Upload",
          "taskDescription": "Upload new product listings to the database.",
          "taskDate": "2025-04-22",
          "category": "Reporting"
        },
        {
          "taskNumber": 42,
          "accepted": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Inventory Check",
          "taskDescription": "Verify physical inventory against system records.",
          "taskDate": "2025-04-19",
          "category": "Documentation"
        },
        {
          "taskNumber": 5,
          "accepted": false,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Client Demo Prep",
          "taskDescription": "Set up demo environment for client presentation.",
          "taskDate": "2025-04-22",
          "category": "Reporting"
        },
        {
          "taskNumber": 6,
          "accepted": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Feedback Analysis",
          "taskDescription": "Analyze customer feedback for Q1.",
          "taskDate": "2025-04-19",
          "category": "Documentation"
        }
      ]
    },
    {
      "id": 2,
      "name": "Isha",
      "email": "employee2@example.com",
      "password": "123",
      "taskCount": {
        "accepted": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      },
      "tasks": [
        {
          "taskNumber": 1,
          "accepted": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Client Demo Prep",
          "taskDescription": "Set up demo environment for client presentation.",
          "taskDate": "2025-04-23",
          "category": "Presentation"
        },
        {
          "taskNumber": 2,
          "accepted": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Feedback Analysis",
          "taskDescription": "Analyze customer feedback for Q1.",
          "taskDate": "2025-04-20",
          "category": "Analysis"
        }
      ]
    },
    {
      "id": 3,
      "name": "Rohan",
      "email": "employee3@example.com",
      "password": "123",
      "taskCount": {
        "accepted": 1,
        "newTask": 0,
        "completed": 0,
        "failed": 1
      },
      "tasks": [
        {
          "taskNumber": 1,
          "accepted": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Bug Tracking",
          "taskDescription": "Track and document frontend bugs.",
          "taskDate": "2025-04-21",
          "category": "Development"
        },
        {
          "taskNumber": 2,
          "accepted": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Refactor Code",
          "taskDescription": "Refactor and optimize legacy codebase.",
          "taskDate": "2025-04-18",
          "category": "Development"
        }
      ]
    },
    {
      "id": 4,
      "name": "Meera",
      "email": "employee4@example.com",
      "password": "123",
      "taskCount": {
        "accepted": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      },
      "tasks": [
        {
          "taskNumber": 1,
          "accepted": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Product Upload",
          "taskDescription": "Upload new product listings to the database.",
          "taskDate": "2025-04-22",
          "category": "E-commerce"
        },
        {
          "taskNumber": 2,
          "accepted": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Inventory Check",
          "taskDescription": "Verify physical inventory against system records.",
          "taskDate": "2025-04-17",
          "category": "Inventory"
        }
      ]
    },
    {
      "id": 5,
      "name": "Kabir",
      "email": "employee5@example.com",
      "password": "123",
      "taskCount": {
        "accepted": 1,
        "newTask": 0,
        "completed": 0,
        "failed": 1
      },
      "tasks": [
        {
          "taskNumber": 1,
          "accepted": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Training Session",
          "taskDescription": "Conduct onboarding training for new hires.",
          "taskDate": "2025-04-24",
          "category": "HR"
        },
        {
          "taskNumber": 2,
          "accepted": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Policy Review",
          "taskDescription": "Review and update outdated HR policies.",
          "taskDate": "2025-04-16",
          "category": "HR"
        }
      ]
    }
];  

const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123",
        "role": "admin"
    }      
];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));

    return {employees, admin}
}