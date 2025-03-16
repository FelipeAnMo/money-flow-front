import './NavegationHeader.css';

function NavegationHeader() {
    return (
        <nav>
            <div id='box-top-menu'>
                <button type='button' id='btn-hidden-show-nav'>
                    <i class="fa-solid fa-bars"></i>
                </button>
            </div>
            <ul>
                <li>
                    <a href="#">
                        <div>
                            <i class="fa-solid fa-house"></i>
                            Dashboard
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div>
                            <i class="fa-solid fa-calendar"></i>
                            Calendário
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div>
                            <i class="fa-solid fa-filter"></i>
                            CRM
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div>
                            <i class="fa-solid fa-coins"></i>
                            Financeiro
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default NavegationHeader;