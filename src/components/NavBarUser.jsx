import { Link } from 'react-router-dom'

export const NavBarUser = () => {

  return (
    <div>
      
      <nav className='bgDark boxShadow'>

            <ul className='navBar' id="navList">
                <li className="whiteLetters"><Link to='/'>Products</Link></li>
                <li className="whiteLetters"><Link to='/smartphones'>Smartphones</Link></li>
                <li className="whiteLetters"><Link to='/laptops'>Laptops</Link></li>
                <li className="whiteLetters"><Link to='/search'>Search</Link></li>
                <li className="whiteLetters"><Link to='/login'>Login</Link></li>
            </ul >

        </nav >

    </div>
  )
}