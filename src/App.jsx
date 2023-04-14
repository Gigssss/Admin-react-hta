import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterUserPage from './pages/register-user-page/RegisterUserPage'
import WorkOrderPage from './pages/work-order-page/WorkOrderPage'
import SettingsPage from './pages/settings-page/SettingsPage'
import Dashboard from './pages/dashboard-page/Dashboard'
import MainLayout from './layout/MainLayout'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route> */}
                <Route path="/" element={<MainLayout />}>
                     <Route index element={<Dashboard />} />
                    {/* <Route path="/" element={<Login />} /> */}
                    {/* <Route path="/dashboard" element={<Dashboard/>} /> */}
                    <Route path="/work-order" element={<WorkOrderPage />} />
                    <Route path="/register-user" element={<RegisterUserPage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
