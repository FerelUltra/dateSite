import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Profile from "./components/Profile";
import About from "./components/About";
import Search from "./components/Search";
import {Provider} from "react-redux";
import {store} from "./store/rootReducer";
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/profile" element={Profile}/>
                    <Route path="/about" element={About}/>
                    <Route path="/search" element={Search}/>
                    <Route path="*"
                           element={<Navigate to="/about"/>}
                    />
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
)
