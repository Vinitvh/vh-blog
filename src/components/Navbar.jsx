function Navbar() {
  return (
    <div className="bg-white shadow-xl shadow-green-200/20 h-16 flex items-center">
      <div className="text-xl pl-12 mr-10 text-green-500 font-bold basis-1/4">VH-blog</div>
      <input
        type="text"
        className="basis-1/2 h-8 text-black rounded-md"
        placeholder="Search for articles..."
      />
    </div>
  );
}

export default Navbar;
