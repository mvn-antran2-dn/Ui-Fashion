import { InstagramOutlined , FacebookOutlined , TwitterOutlined, LinkedinOutlined, UserOutlined, SearchOutlined, HeartOutlined, ShoppingOutlined, MenuOutlined, CaretDownOutlined, ShopOutlined, } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import { Drawer, Menu } from 'antd';
import { useState } from 'react';
import { IMAGES } from '../../../asset/images';

function getItem(label, key, children, type) {
  return {
    key,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Home', 'Home', [
    getItem('Home 1', 'g1', null, ),
    getItem('Home 2', 'g2', null,),
    getItem('Home 3', 'g3', null, ),
    getItem('Home 4', 'g4', null,),
    getItem('Home 5', 'g5', null, ),
    getItem('Home 6', 'g6', null,),
  ]),  
  getItem('Shop', 'Shop', [
    getItem('Shop List ', 's1', null, [getItem('Shop Default', '7'), getItem('Shop Right Sidebar', '4'), getItem('Filter Area', '4'), getItem('List Left Sidebar', '4'),getItem('Load More Button', '4'),getItem('Infinite Scroliing', '4')],'group'),
    getItem('Product Detail ', 's2', null,[getItem('Product Variable', '7'), getItem('Product Default', '4'), getItem('Product Grouped', '4'), getItem('Product External', '4'),getItem('Product Downloadeble', '4'),getItem('Product With Video', '4'),getItem('Whitout Recently Viewed', '4')],'group'),
    getItem('Shop Pages', 's3', null,[getItem('Cart', '7'), getItem('Checkout', '4'), getItem('My account', '4'), getItem('WishList', '4'),getItem('Order Tracking', '4'),getItem('Best Selling Product', '4'),getItem('Terms and Conditions', '4')], 'group'),
    getItem('Shop Layouts', 's4', null,[getItem('Two Column', '7'), getItem('Three Column', '4'), getItem('Three Column Wide', '4'), getItem('Four Column', '4'),getItem('Four Column WIde', '4'),],'group'),
  ]), 
  getItem('Women', 'Women'),
  getItem('Men', 'Men'),
  getItem('Outerwear', 'Outerwear'),
  getItem('Blog', 'Blog'),
   getItem('Contact', 'Contact'),
];
const items1 = [
  getItem('Men', 'Men', [
    getItem('Men 1', 'm1', null, ),
    getItem('Men 2', 'm2', null,),
    getItem('Men 3', 'm3', null, ),
    getItem('Men 4', 'm4', null,),
    getItem('Men 5', 'm5', null, ),
    getItem('Men 6', 'm6', null,),
  ]),  
  getItem('Women', 'Women', [
    getItem('Women 1', 'w1', null, ),
    getItem('Women 2', 'w2', null,),
    getItem('Women 3', 'w3', null, ),
    getItem('Women 4', 'w4', null,),
    getItem('Women 5', 'w5', null, ),
    getItem('Women 6', 'w6', null,),
  ]),  
  getItem('Kids', 'Kids'),
  getItem('Baby', 'Baby'),
  getItem('Shoes', 'Shoes'),
  getItem('Bags', 'Bags'),
  getItem('Accessories', 'Accessories'),
  getItem('Watches', 'Watches'),
  getItem('Carou Chouser', 'Carou Chouser'),
  getItem('Outerwear', 'Outerwear'),
  getItem('Wallets', 'Wallets'),
  getItem('Belts', 'Belts'),
  getItem('Best Seller', 'Best Seller'),
  getItem('Fearture Product', 'Fearture Product'),
  getItem('New Aviral', 'New Aviral'),
  getItem('Reading to wear', 'Reading to wear'),
  getItem('All for men', 'All for men'),
];
export default function Headers (){
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
  <header className="page-header">
    <div className=" container-elementor  header-top flex justify-content-between">
        <div className="header-top-left flex ">
        <div className="dropdown-ins flex">
          <a href="/#" className="dropdown-instagram"><span className="dropdown-ins-icon"><InstagramOutlined /></span><strong>3<span>.1M</span> Followers <CaretDownOutlined className="icon-dropdown"/></strong> </a>
          <ul className="menu-top-header-left">
            <li>
              <a href="https://www.facebook.com/" className="facebook">
                <span className="icon-ins"><FacebookOutlined /></span>
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" className="facebook">
                <span className="icon-ins"><TwitterOutlined /></span>
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" className="facebook">
              <span className="icon-ins"><InstagramOutlined /></span>
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/" className="facebook">
              <span className="icon-ins"><LinkedinOutlined /></span>
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <p> Follow us on social media, be the first to know about discounts and innovations.</p>
            </li>
          </ul>
        </div>
        <p className="header-right-title">Free Shipping World wide for all orders over <span>$199</span>.<strong> Click and Shop Now.</strong></p>
      </div>
      <div className="header-top-right">
          <ul className="menu-top-header-right flex">
            <li><a href="/#">Order Tracking</a></li>
            <li className="menu-top-language-currency item-language">
              <a href="/#" className="btn-language">English <span><FontAwesomeIcon icon={faAngleDown} /></span></a>
              <ul className="menu-language-currency language">
                <li>
                  <a href="/#" className="label">English</a>
                </li>
                <li>
                  <a href="/#" className="label">Spanich</a>
                </li>
                <li>
                  <a href="/#" className="label">German</a>
                </li>
              </ul>
            </li>
            <li className="menu-top-language-currency item-currency">
              <a href="/#" className="btn-currency">USD <span><FontAwesomeIcon icon={faAngleDown} /></span></a>
              <ul className="menu-language-currency currency">
                <li>
                  <a href="/#" className="label">USD</a>
                </li>
                <li>
                  <a href="/#" className="label">INR</a>
                </li>
                <li>
                  <a href="/#" className="label">GBP</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
    </div>
    <nav className="header-nav ">
        <div className="container-elementor ">    
          <div className="header-nav-menu flex align-items-center justify-content-between">
            <div className="header-logo flex align-items-center">  
              <button className="btn-icon" type="primary" onClick={showDrawer}>
                <MenuOutlined className="icon-menu"/>
              </button>
              <a href="/#" className="header-logo flex ">
                <img className="header-logo-img" src={IMAGES.logo} alt="logo" />
              </a>
            </div>
            <ul className="header-menu flex justify-content-center align-items-center">
                <li className="menu-header-item  item-home">
                  <a className="header-item" href="/#">HOME <span><FontAwesomeIcon icon={faAngleDown} /></span></a>
                  <ul className="main-menu-home ">
                    <li>
                      <a href="/#" className="menu-main-item">Home 1</a>
                    </li>
                    <li>
                      <a href="/#" className="menu-main-item">Home 2</a>
                    </li>
                    <li>
                      <a href="/#" className="menu-main-item">Home 3</a>
                    </li>
                    <li>
                      <a href="/#" className="menu-main-item">Home 4</a>
                    </li>
                    <li>
                      <a href="/#" className="menu-main-item">Home 5</a>
                    </li>
                    <li>
                      <a href="/#" className="menu-main-item">Home 6</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-header-item  item-shop">
                  <a className="header-item" href="/#">SHOP <span><FontAwesomeIcon icon={faAngleDown} /></span></a>
                  <ul className="main-menu-shop flex container justify-content-around">
                    <li>
                      <a href="/#" className="menu-main-item-shop">Shop List</a>
                      <ul className="sub-menu-list ">
                        <li>
                          <a href="/#" className="sub-menu-item">Shop Default</a>
                        </li>
                        <li>
                          <a href="/#" className="sub-menu-item">Shop Right Sidebar</a>
                        </li>
                        <li>
                          <a href="/#" className="sub-menu-item">Shop Wide</a>
                        </li>
                        <li>
                          <a href="/#" className="sub-menu-item">Shop Area</a>
                        </li>
                        <li>
                          <a href="/#" className="sub-menu-item">List Left Sidebar</a>
                        </li>
                        <li>
                          <a href="/#" className="sub-menu-item">Load More Button</a>
                        </li>
                        <li>
                          <a href="/#" className="sub-menu-item">Infinite Scrolling</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                    <a href="/#" className="menu-main-item-shop">Product Detail</a>
                      <ul className="sub-menu-list">
                        <li>
                          <a href="/#" className="sub-menu-item">Shop Default</a>
                        </li>
                        <li>
                          <a href="/#" className="sub-menu-item">Shop Right Sidebar</a>
                        </li>
                        <li>
                          <a href="/#" className="sub-menu-item">Shop Wide</a>
                        </li>
                        <li>
                          <a href="/#" className="sub-menu-item">Shop Area</a>
                        </li>
                        <li>
                          <a href="/#" className="sub-menu-item">List Left Sidebar</a>
                        </li>
                        <li>
                          <a href="/#" className="sub-menu-item">Load More Button</a>
                        </li>
                        <li>
                          <a href="/#" className="sub-menu-item">Infinite Scrolling</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                    <a href="/#" className="menu-main-item-shop">Shop Pages</a>
                      <ul className="sub-menu-list">
                        <li>
                          <a href="/#" className="sub-menu-item">Shop Default</a>
                        </li>
                        <li>
                          <a href="/#" className="sub-menu-item">Shop Right Sidebar</a>
                        </li>
                        <li>
                          <a href="/#" className="sub-menu-item">Shop Wide</a>
                        </li>
                        <li>
                          <a href="/#" className="sub-menu-item">Shop Area</a>
                        </li>
                        <li>
                          <a href="/#" className="sub-menu-item">List Left Sidebar</a>
                        </li>
                        <li>
                          <a href="/#" className="sub-menu-item">Load More Button</a>
                        </li>
                        <li>
                          <a href="/#" className="sub-menu-item">Infinite Scrolling</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                    <a href="/#" className="menu-main-item-shop">Shop Layouts</a>
                      <ul className="sub-menu-list">
                        <li>
                          <a href="/#" className="sub-menu-item">Shop Default</a>
                        </li>
                        <li>
                          <a href="/#" className="sub-menu-item">Shop Right Sidebar</a>
                        </li>
                        <li>
                          <a href="/#" className="sub-menu-item">Shop Wide</a>
                        </li>
                        <li>
                          <a href="/#" className="sub-menu-item">Shop Area</a>
                        </li>
                        <li>
                          <a href="/#" className="sub-menu-item">List Left Sidebar</a>
                        </li>
                        <li>
                          <a href="/#" className="sub-menu-item">Load More Button</a>
                        </li>
                        <li>
                          <a href="/#" className="sub-menu-item">Infinite Scrolling</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="menu-header-item">
                    <a className="header-item" href="/#">WOMEN</a>
                </li>
                <li className="menu-header-item">
                    <a className="header-item" href="/#">MEN</a>
                </li>
                <li className="menu-header-item">
                    <a className="header-item" href="/#">OUTERWEAR</a>
                </li>
                <li className="menu-header-item">
                    <a className="header-item" href="/#">BLOG</a>
                </li>
                <li className="menu-header-item">
                    <a className="header-item" href="/#">CONTACT</a>
                </li>
            </ul>
            <ul className="social-list flex justify-content-around">
              <li className="social-item">
                  <a href="/#" className="icon-user"><UserOutlined /></a>
              </li>
              <li className="social-item">
                  <a href="/#" className="icon-search"><SearchOutlined /></a>
              </li>
              <li className="social-item">
                  <a href="/#"><HeartOutlined /><span className="add-product heart">0</span></a>
              </li>
              <li className="social-item item-card">
                <span className="item-card-price ">$0.00</span>
                <a href="/#"><ShoppingOutlined /> <span className="add-product shopping ">0</span></a>
                <div className="card-icon  ">
                  <div className="card-item flex">
                    <img src={IMAGES.card_icon} alt="card-icon" />
                    <p>No product in the card.</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>       
        </div>
        <Drawer title="Clotya" placement="left" onClose={onClose} visible={visible} >
          <div className="menu-drawwer-top">
            <h3>Main Menu</h3>
            <Menu
            onClick={onClick}
            style={{
              width: 305,
            }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['home']}
            mode="inline"
            items={items}/>
          </div> 
          <div className="menu-drawwer-top menu-drawwer-top-categories">
            <h3 className="header-menu-drawwer">Categories</h3>
            <Menu
            onClick={onClick}
            style={{
              width: 305,
            }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['men']}
            mode="inline"
            items={items1}/>
          </div>
        <p className="text-drawwer">Copyright 2022 © Clotya WordPress Theme. All right reserved. Powered by KLBTheme.</p>
      </Drawer>
    </nav>
    <div className="header-bottom">
      <h4 >SUMMER SALE FOR ALL SWIM SUITS AND FREE EXPRESS INTERNATIONAL DELIVERY - OFF 50%! <strong>SHOP NOW</strong> </h4>
    </div>
    <nav className="header-menu-icon-hidden top">
      <div className="menu-icon-hidden ">
        <ul className="menu-icon-list flex justify-content-between">
          <li className="menu-icon-item">
              <a href="/#" className="btn-hidden" onClick={showDrawer}><MenuOutlined /></a>
            </li>
          <li className="menu-icon-item ">
              <a href="/#" className="logo-hidden"><img src={IMAGES.logo} alt="logo" /></a>
          </li>
          <li className="social-item item-card flex">
            <div className='item-card-price'>
              <span >$0.00</span>
            </div>
            <div className="item-card-product">
              <a href="/#"><ShoppingOutlined /> <span className="add-product shopping ">0</span></a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <nav className="header-menu-icon-hidden ">
      <div className="menu-icon-hidden">
        <ul className="menu-icon-list flex justify-content-around">
          <li className="menu-icon-item-bottom">
              <a href="/#" className="icon-search"><ShopOutlined /></a>
              <span className="icon-item-text">Store</span>
          </li>
          <li className="menu-icon-item-bottom">
              <a href="/#" className="icon-user"><SearchOutlined /></a>
              <span className="icon-item-text">Search</span>
          </li>
          <li className="menu-icon-item-bottom">
              <a href="/#"><HeartOutlined /></a>
              <span className="icon-item-text">Wishlist</span>
          </li>
          <li className="menu-icon-item-bottom">
            <a href="/#"><UserOutlined /></a>
            <span className="icon-item-text">Account</span>
          </li>
          <li className="menu-icon-item-bottom">
            <a href="/#" onClick={showDrawer}><MenuOutlined /></a>
            <span className="icon-item-text">Categories</span>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  );
}