import { InstagramOutlined , FacebookOutlined , TwitterOutlined, LinkedinOutlined, UserOutlined, SearchOutlined, HeartOutlined, ShoppingOutlined, MenuOutlined, DownOutlined, CaretDownOutlined} from '@ant-design/icons';
import { Drawer } from 'antd';
import { useState } from 'react';
import { IMAGES } from '../../../asset/images';

export default function Headers (){
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
  <header className="page-header">
    <div className="header-top flex">
      <div className="container flex justify-content-between">
        <div className="header-top-left flex ">
          <div className="dropdown-ins flex">
            <a href="/#" ><span className="dropdown-ins-icon"><InstagramOutlined /></span><strong>3.1M Followers <CaretDownOutlined /></strong> </a>
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
          <p className="header-right-title">Free Shipping World wide for all orders over $199.  <span> Click and Shop Now.</span></p>
        </div>
        <div className="header-top-right">
          <ul className="menu-top-header-right flex">
            <li><a href="/#">Order Tracking</a></li>
            <li className="menu-top-language-currency item-language">
              <a href="/#" className="btn-language">English <span><DownOutlined /></span></a>
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
              <a href="/#" className="btn-currency">USD <span><DownOutlined /></span></a>
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
    </div>
    <nav className="header-nav flex ">
        <div className="container flex justify-content-between align-items-center">        
          <a href="/#" className="header-logo flex ">
            <button className="btn-icon" type="primary" onClick={showDrawer}>
              <MenuOutlined />
            </button>
              <img src={IMAGES.logo} alt="logo" />
          </a>
          <ul className="header-menu flex justify-content-center align-items-center">
              <li className="menu-header-item">
                <a className="header-item item-home" href="/#">HOME <span><DownOutlined /></span></a>
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
              <li className="menu-header-item">
              <a className="header-item" href="/#">SHOP <span><DownOutlined /></span></a>
                <ul className="main-menu-shop">
                  <li>
                    <a href="/#" className="menu-main-item">Shop List</a>
                    <ul className="sub-menu-list">
                      <li>
                        <a href="/#" className="sub-menu-item">Shop Default</a>
                      </li>
                      <li>
                        <a href="/#" className="menu-main-item">Shop Right Sidebar</a>
                      </li>
                      <li>
                        <a href="/#" className="menu-main-item">Shop Wide</a>
                      </li>
                      <li>
                        <a href="/#" className="menu-main-item">Shop Area</a>
                      </li>
                      <li>
                        <a href="/#" className="menu-main-item">List Left Sidebar</a>
                      </li>
                      <li>
                        <a href="/#" className="menu-main-item">Load More Button</a>
                      </li>
                      <li>
                        <a href="/#" className="menu-main-item">Infinite Scrolling</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                  <a href="/#" className="menu-main-item">Product Detail</a>
                    <ul className="sub-menu-list">
                      <li>
                        <a href="/#" className="sub-menu-item">Shop Default</a>
                      </li>
                      <li>
                        <a href="/#" className="menu-main-item">Shop Right Sidebar</a>
                      </li>
                      <li>
                        <a href="/#" className="menu-main-item">Shop Wide</a>
                      </li>
                      <li>
                        <a href="/#" className="menu-main-item">Shop Area</a>
                      </li>
                      <li>
                        <a href="/#" className="menu-main-item">List Left Sidebar</a>
                      </li>
                      <li>
                        <a href="/#" className="menu-main-item">Load More Button</a>
                      </li>
                      <li>
                        <a href="/#" className="menu-main-item">Infinite Scrolling</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                  <a href="/#" className="menu-main-item">Shop Pages</a>
                    <ul className="sub-menu-list">
                      <li>
                        <a href="/#" className="sub-menu-item">Shop Default</a>
                      </li>
                      <li>
                        <a href="/#" className="menu-main-item">Shop Right Sidebar</a>
                      </li>
                      <li>
                        <a href="/#" className="menu-main-item">Shop Wide</a>
                      </li>
                      <li>
                        <a href="/#" className="menu-main-item">Shop Area</a>
                      </li>
                      <li>
                        <a href="/#" className="menu-main-item">List Left Sidebar</a>
                      </li>
                      <li>
                        <a href="/#" className="menu-main-item">Load More Button</a>
                      </li>
                      <li>
                        <a href="/#" className="menu-main-item">Infinite Scrolling</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                  <a href="/#" className="menu-main-item">Shop Layouts</a>
                    <ul className="sub-menu-list">
                      <li>
                        <a href="/#" className="sub-menu-item">Shop Default</a>
                      </li>
                      <li>
                        <a href="/#" className="menu-main-item">Shop Right Sidebar</a>
                      </li>
                      <li>
                        <a href="/#" className="menu-main-item">Shop Wide</a>
                      </li>
                      <li>
                        <a href="/#" className="menu-main-item">Shop Area</a>
                      </li>
                      <li>
                        <a href="/#" className="menu-main-item">List Left Sidebar</a>
                      </li>
                      <li>
                        <a href="/#" className="menu-main-item">Load More Button</a>
                      </li>
                      <li>
                        <a href="/#" className="menu-main-item">Infinite Scrolling</a>
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
                  <a className="header-item" href="/#">BLOCK</a>
              </li>
              <li className="menu-header-item">
                  <a className="header-item" href="/#">CONTACT</a>
              </li>
          </ul>
          <ul className="social-list flex justify-content-around">
              <li className="social-item">
                  <a href="/#" className="icon-search"><UserOutlined /></a>
              </li>
              <li className="social-item">
                  <a href="/#" className="icon-user"><SearchOutlined /></a>
              </li>
              <li className="social-item">
                  <a href="/#"><HeartOutlined /><span className="add-product heart">0</span></a>
              </li>
              <li className="social-item">
                <span className="item-card">$0.00</span>
                <a href="/#"><ShoppingOutlined /> <span className="add-product shopping">0</span></a>
              </li>
          </ul>
        </div>
        <Drawer title="Basic Drawer" placement="left" onClose={onClose} visible={visible}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </nav>
    <div className="header-bottom">
      <h4 >SUMMER SALE FOR ALL SWIM SUITS AND FREE EXPRESS INTERNATIONAL DELIVERY - OFF 50%! <strong>SHOP NOW</strong> </h4>
    </div>
  </header>
  );
}
