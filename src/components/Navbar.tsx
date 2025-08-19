const Navbar = () => {
  return (
    <nav className="bg-gray-800 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white font-medium">Logo</div>
        <button className="border border-gray-500 text-white px-6 py-2 rounded hover:bg-gray-700 transition-colors">
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;