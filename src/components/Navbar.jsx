
const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-4">
        <li >Home</li>
        <li>
          My List{" "}
          <span className="text-slate-900 inline-block bg-lime-50 border-blue-50 border-solid border-2">
            0
          </span>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar