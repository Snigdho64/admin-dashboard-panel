import Home from './pages/home/Home'
import loadFont from './utils/webFontLoader'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/login/Login'
import New from './pages/new/New'
import List from './pages/list/UsersList'
import Single from './pages/single/Single'
import Sidebar from './components/Sidebar/Sidebar'
import Navbar from './components/Navbar/Navbar'
import { useState } from 'react'
import { StyledPage } from './components/common/StyledCommon'


function App() {
    loadFont()
    const [open, setOpen] = useState(false)
    return (
        <div className="app" id="app">
            <Sidebar open={open} />
            <StyledPage>
                <Navbar open={open} setOpen={setOpen} />
                <Router>
                    <Routes>
                        <Route path="/">
                            <Route index element={<Home />} />
                            <Route path="login" element={<Login />} />
                        </Route>
                        <Route path="/users">
                            <Route index element={<List />} />
                            <Route path=":userId" element={<Single />} />
                            <Route path="new" element={<New />} />
                        </Route>
                        <Route path="/products">
                            <Route index element={<List />} />
                            <Route path=":productId" element={<Single />} />
                            <Route path="new" element={<New />} />
                        </Route>
                    </Routes>
                </Router>
            </StyledPage>
        </div>
    )
}

export default App
