const nav = 
(
    <nav className="naveBar">
        <h1>Epics Advertising</h1>
        <div className="nav-bar">
            <ul classNAme="nav-list">
                
            <li><a>Pricing</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
            </ul>
        </div>
    </nav>
)

ReactDOM.render(
    nav,
    document.querySelector("#root")
)
