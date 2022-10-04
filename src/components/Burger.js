import $ from 'jquery'
import { ADMIN_ROUTE, SHOP_ROUTE } from '../utils/consts';






function Burger() {
  
    function Menu() {
        document.querySelector('.nav-small-opened').classList.remove('hidden')
        $('.nav-small').css('display', 'none')
    }
  return (
    <>
    <div className="nav-small" onClick={Menu}>
      <div>-</div>
      <div>-</div>
      <div>-</div>
    </div>
    <div className="nav-small-opened hidden">
        <a href={SHOP_ROUTE}><div>SHOP</div></a>
        <div>DELIVERY</div>
        <a href={ADMIN_ROUTE}><div>ADMIN</div></a>
    </div>
    </>
  );
}

export default Burger;
