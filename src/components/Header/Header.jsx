import './Header.css'

export const Header = () => {

    return(
        <header className="Header">
            <div className="nav">
                <a href='#' className='active'>На главную</a>
                <a href='#'>Услуги</a>
                <a href='#'>Связаться с нами</a>
            </div>
        </header>
    )
}