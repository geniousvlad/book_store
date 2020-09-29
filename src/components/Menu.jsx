import React from 'react';
import { Menu } from 'semantic-ui-react';

const MenuComponent = () => (
    <Menu>
        <Menu.Item
          name='browse'
        //   onClick={handleItemClick}
        >
          Магазин книг
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item
            name='signup'
            // onClick={handleItemClick}
          >
            Итого: &nbsp; <b>0</b>&nbsp; руб.
          </Menu.Item>

          <Menu.Item
            name='help'
            // onClick={handleItemClick}
          >
            Корзина (<b>0</b>)
          </Menu.Item>
        </Menu.Menu>
      </Menu>
);

export default MenuComponent;

