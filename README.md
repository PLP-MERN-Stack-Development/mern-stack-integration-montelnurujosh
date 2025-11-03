# MERN Stack Blog Application

A full-stack blog application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that demonstrates seamless integration between front-end and back-end components. This project implements a complete blogging platform with user authentication, post management, categories, and image uploads.

## 🚀 Features

### Core Features
- **User Authentication**: Registration and login with JWT tokens
- **Blog Posts CRUD**: Create, read, update, and delete blog posts
- **Image Uploads**: Featured images for posts using Multer
- **Categories Management**: Create and manage blog categories
- **Protected Routes**: Authentication-based access control
- **Responsive Design**: Mobile-friendly UI with Tailwind CSS

### Technical Features
- **RESTful API**: Complete API with proper HTTP methods and status codes
- **Database Integration**: MongoDB with Mongoose ODM
- **State Management**: React Context for global state
- **Form Validation**: Client and server-side validation
- **Error Handling**: Comprehensive error handling middleware
- **File Uploads**: Image storage and serving

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - JSON Web Tokens for authentication
- **Multer** - Middleware for handling file uploads
- **bcryptjs** - Password hashing
- **express-validator** - Input validation
- **cors** - Cross-origin resource sharing
- **helmet** - Security middleware
- **morgan** - HTTP request logger

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **React Hook Form** - Form handling
- **Tailwind CSS** - Utility-first CSS framework

## 📁 Project Structure

```
mern-stack-integration-montelnurujosh/
├── client/                          # React front-end
│   ├── public/                      # Static assets
│   ├── src/
│   │   ├── components/              # Reusable React components
│   │   │   ├── Layout.jsx          # Main layout component
│   │   │   ├── Navbar.jsx          # Navigation bar
│   │   │   ├── PostCard.jsx        # Post preview card
│   │   │   └── ProtectedRoutes.jsx # Route protection
│   │   ├── context/                # React Context providers
│   │   │   ├── AuthContext.jsx     # Authentication state
│   │   │   ├── PostContext.jsx     # Posts state management
│   │   │   └── CategoryContext.jsx # Categories state
│   │   ├── hooks/                  # Custom React hooks
│   │   │   └── useApi.js           # API call hook
│   │   ├── pages/                  # Page components
│   │   │   ├── Home.jsx            # Posts listing
│   │   │   ├── CreatePost.jsx      # Create new post
│   │   │   ├── EditPost.jsx        # Edit existing post
│   │   │   ├── Post.jsx            # Single post view
│   │   │   ├── Login.jsx           # User login
│   │   │   ├── Register.jsx        # User registration
│   │   │   └── PostForm.jsx        # Reusable post form
│   │   ├── services/               # API service functions
│   │   │   ├── api.js              # Main API configuration
│   │   │   ├── postService.js      # Post-related API calls
│   │   │   └── categoryService.js  # Category API calls
│   │   ├── App.jsx                 # Main app component
│   │   └── main.jsx                # App entry point
│   ├── package.json                # Client dependencies
│   └── vite.config.js              # Vite configuration
├── server/                          # Express.js back-end
│   ├── config/
│   │   └── db.js                   # Database configuration
│   ├── controllers/                # Route controllers
│   │   ├── authController.js       # Authentication logic
│   │   ├── postController.js       # Post CRUD operations
│   │   └── categoryController.js   # Category operations
│   ├── middleware/                 # Custom middleware
│   │   ├── auth.js                 # JWT authentication
│   │   ├── upload.js               # File upload handling
│   │   ├── validatePost.js         # Post validation
│   │   └── errorHandler.js         # Error handling
│   ├── models/                     # Mongoose models
│   │   ├── User.js                 # User schema
│   │   ├── Post.js                 # Post schema
│   │   └── Category.js             # Category schema
│   ├── routes/                     # API routes
│   │   ├── auth.js                 # Authentication routes
│   │   ├── postRoutes.js           # Post CRUD routes
│   │   └── categoryRoutes.js       # Category routes
│   ├── uploads/                    # Uploaded images storage
│   ├── server.js                   # Main server file
│   ├── package.json                # Server dependencies
│   └── .gitignore                  # Git ignore rules
├── Week4-Assignment.md             # Assignment instructions
└── README.md                       # Project documentation
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Backend Setup
1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the server directory with the following variables:
   ```env
   MONGO_URI=mongodb://localhost:27017/mern-blog
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The application will be running at:
- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## 📡 API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Post Endpoints
- `GET /api/posts` - Get all posts
- `GET /api/posts/:id` - Get single post by ID
- `POST /api/posts` - Create new post (requires authentication)
- `PUT /api/posts/:id` - Update post (requires authentication)
- `DELETE /api/posts/:id` - Delete post (requires authentication)

### Category Endpoints
- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create new category (requires authentication)

### Request/Response Examples

#### Create Post
```javascript
POST /api/posts
Content-Type: multipart/form-data
Authorization: Bearer <jwt_token>

{
  title: "Sample Post",
  content: "Post content...",
  category: "Technology",
  featuredImage: <file>
}
```

#### Get Posts Response
```json
{
  "success": true,
  "data": [
    {
      "_id": "post_id",
      "title": "Sample Post",
      "content": "Post content...",
      "excerpt": "Post excerpt...",
      "slug": "sample-post",
      "author": "user_id",
      "category": "Technology",
      "featuredImage": "image_filename.jpg",
      "isPublished": true,
      "viewCount": 0,
      "comments": [],
      "createdAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

## 🎯 Features Implemented

### ✅ Completed Features
- [x] User registration and login with JWT
- [x] Protected routes for authenticated users
- [x] Full CRUD operations for blog posts
- [x] Image upload functionality for posts
- [x] Category creation and management
- [x] Responsive UI with Tailwind CSS
- [x] React Context for state management
- [x] Form validation and error handling
- [x] MongoDB integration with Mongoose
- [x] RESTful API design
- [x] File upload middleware
- [x] Authentication middleware
- [x] Input validation middleware

### 🔄 Advanced Features (Optional)
- [ ] Pagination for posts listing
- [ ] Search and filtering functionality
- [ ] Comments system for posts
- [ ] User roles and permissions
- [ ] Email notifications

## 📸 Screenshots

*Add screenshots of your application here showing:*
- Home page with posts listing
- Login/Register pages
- Create/Edit post form
- Single post view
- Responsive mobile view

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 📚 Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express.js Documentation](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [JWT Documentation](https://jwt.io/)
- [Tailwind CSS](https://tailwindcss.com/)
