import React from 'react';

export function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header / Nav */}
      <header className="bg-militaryGreen text-white font-heading uppercase tracking-widest p-4 flex justify-between items-center">
        <div className="text-2xl">Green Outdoors Co</div>
        <nav className="space-x-6 text-sm">
          <a href="#" className="hover:text-desertTan">Home</a>
          <a href="#" className="hover:text-desertTan">About</a>
          <a href="#" className="hover:text-desertTan">Contact</a>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-charcoal text-slate p-4 text-center text-xs">
        &copy; {new Date().getFullYear()} Green Outdoors Co. All rights reserved.
      </footer>
    </div>
  );
}
