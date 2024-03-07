export default function Header() {
  return (
    <header className="header">
      <div className="headerTop _container">
        <section className="header_search">
          <div className="header_logo">
            <img src="" alt="" />
          </div>
          <form action="" method="get">
            <input type="text" />
            <input type="submit" name="" id="" />
          </form>
        </section>
        <section className="header_tools">
          {localStorage.getItem("userConnect") ? <h1>fuck</h1> : <h1>damn</h1>}
        </section>
      </div>
      <div className="headerBottom _container">
        <nav className="header_navigation">
          <ul className="header_list">
            <li className="header_item">
              <a href="" className="header_link">
                Лента
              </a>
            </li>
            <li className="header_item">
              <a href="" className="header_link">
                Треки
              </a>
            </li>
            <li className="header_item">
              <a href="" className="header_link">
                Наборы звуков
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
