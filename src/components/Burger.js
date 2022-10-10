import $ from 'jquery'
import { Link } from 'react-router-dom';
import { ADMIN_ROUTE, SHOP_ROUTE } from '../utils/consts';






function Burger() {
  
    function Menu() {
        document.querySelector('.nav-small-opened').classList.remove('hidden')
        $('.nav-small').css('display', 'none')
        $('body').css('opacity', '0.3')
        $('.nav-small-opened div').css('opacity', '1')
    }
  return (
    <>
    <div className="nav-small" onClick={Menu}>
      <div>-</div>
      <div>-</div>
      <div>-</div>
    </div>
    <div className="nav-small-opened hidden">
        <Link><div>SHOP</div></Link>
        <div>DELIVERY</div>
        <a href={ADMIN_ROUTE}><div>ADMIN</div></a>
    </div>
    </>
  );
}

export default Burger;
