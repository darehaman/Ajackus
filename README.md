# **Ajackus Assignment - User Management App**  
A simple React-based **User Management System** that allows users to **view, add, edit, and delete** user details from a mock backend API (**JSONPlaceholder**).  

## **🚀 Features**  
✅ Fetch and display a list of users from API  
✅ Add a new user  
✅ Edit existing user details  
✅ Delete a user  
✅ Error handling for API failures  
✅ Responsive UI using Bootstrap  
✅ Modular and scalable component structure  
✅ Clean and maintainable code  

## **⚡ Installation & Setup**  
1. **Clone the Repository**  
   ```bash
   git clone https://github.com/darehaman/Ajackus-Assignment.git
   ```
2. **Navigate into the Project**  
   ```bash
   cd Ajackus-Assignment
   ```
3. **Install Dependencies**  
   ```bash
   npm install
   ```
4. **Start the Development Server**  
   ```bash
   npm start
   ```
   The application should now be running at **`http://localhost:3000`** 🎉  

## **📖 Usage Guide**  
- **Viewing Users** → Users are fetched from JSONPlaceholder and displayed in a table.  
- **Adding a New User** → Click "Add User", fill in details, and submit.  
- **Editing a User** → Click "Edit", modify the details, and save.  
- **Deleting a User** → Click "Delete" and remove the user.  

## **📂 Project Structure**  
```
📂 Ajackus-Assignment
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 UserList.js  --> Displays the list of users
 ┃ ┃ ┣ 📜 UserForm.js  --> Handles adding and editing users
 ┃ ┃ ┣ 📜 ErrorBoundary.js  --> Catches and handles UI errors
 ┃ ┃ ┗ 📜 App.js  --> Main component
 ┃ ┣ 📜 index.js  --> Entry point
 ┃ ┗ 📜 App.css  --> Styling
 ┣ 📜 package.json  --> Dependencies
 ┣ 📜 README.md  --> Documentation
 ┗ 📜 .gitignore  --> Ignore unnecessary files
```

## **🌐 API Used**  
This project interacts with **JSONPlaceholder**, a free online REST API for testing.  
- **Base API URL:** `https://jsonplaceholder.typicode.com/users`  
- **Methods Used:**  
  - **GET** `/users` → Fetch users  
  - **POST** `/users` → Add user  
  - **PUT** `/users/:id` → Edit user  
  - **DELETE** `/users/:id` → Delete user  

## **🛠 Technologies Used**  
| Technology      | Purpose            |  
|---------------|-----------------|  
| **React.js** | Frontend UI       |  
| **React Router** | Navigation       |  
| **Axios** | API requests       |  
| **Bootstrap** | UI styling       |  
| **JSONPlaceholder** | Mock backend |  

## **🚀 Challenges & Future Improvements**  
### **Challenges Faced**  
- Handling API request failures and errors  
- Implementing proper form validation  
- Managing state updates efficiently  

### **Future Improvements**  
✔ Implement **authentication** for user management  
✔ Add **pagination** to improve performance  
✔ Improve **form validation** for better user experience  

## **🤝 Contributing**  
Want to contribute? Great! 🚀  
- **Fork the repository**  
- **Create a feature branch** (`git checkout -b feature-name`)  
- **Commit your changes** (`git commit -m "Added new feature"`)  
- **Push to GitHub** (`git push origin feature-name`)  
- **Create a Pull Request**  
