import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/layout/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Inventory from './pages/Inventory';
import Suppliers from './pages/Suppliers';
import Sales from './pages/Sales';
import Analytics from './pages/Analytics';
import Customers from './pages/Customers';
import Marketing from './pages/Marketing';
import Leads from './pages/Leads';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/leads" element={<Leads />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;