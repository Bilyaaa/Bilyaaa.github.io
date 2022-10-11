import $ from 'jquery'
import { Link } from 'react-router-dom';







function Burger() {


  
  function Menu() {
      document.querySelector('.nav-small-opened').classList.remove('hidden')
      $('.nav-small').css('display', 'none')
      $('.nav-small-opened div').css('opacity', '1')
  }

  function hideMenu() {
    $('.nav-small-opened').classList.add('hidden')
    $('.nav-small').css('display', 'flex')
  }

  return (
    <>
    <div className="nav-small" onClick={Menu}>
      <div>-</div>
      <div>-</div>
      <div>-</div>
    </div>
    <div className="nav-small-opened hidden">
      <Link to="/shop" onClick={hideMenu}><div>SHOP</div></Link>
      <Link to="/delivery" onClick={hideMenu}><div>DELIVERY</div></Link>
      <Link to="/admin" onClick={hideMenu}><div>ADMIN</div></Link>
    </div>
    </>
  );
}

export default Burger;
