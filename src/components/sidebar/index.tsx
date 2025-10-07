import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const navItems = [
    { path: '/', label: 'Incoming' },
    { path: '/cases', label: 'Cases' },
    { path: '/suppliers', label: 'Suppliers' },
    { path: '/client', label: 'Client' },
    { path: '/sbc-entities', label: 'SBC Entities' },
    { path: '/reporting', label: 'Reporting' },
    { path: '/system', label: 'System' },
    { path: '/peppol-invoices', label: 'PEPPOL invoices' },
  ];

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <ul>
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `block text-center py-6 transition-colors duration-200 ${
                    isActive 
                      ? 'bg-white text-gray-900' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
