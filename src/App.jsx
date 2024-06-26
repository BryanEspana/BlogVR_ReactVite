import './App.css'
import Layout from './components/layout'
import Home from './pages/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import BlogInfo from './pages/BlogInfo'
import CreateBlog from './pages/admin/createBlog'
import EditBlog from './pages/admin/editBlog'
import withAdminAuth from './pages/admin/AuthenticatedComponent'
const CreateBlogWithAuth = withAdminAuth(CreateBlog);
const EditBlogWithAuth = withAdminAuth(EditBlog);

function App () {
  return (
    <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/blog/:id" element={<BlogInfo/>} />
        <Route path="/admin/createBlog" element={<CreateBlogWithAuth />} />
          <Route path="/admin/editBlog/:id" element={<EditBlogWithAuth />} />
      </Route>
    </Routes>
  </Router>
  )
}

export default App
