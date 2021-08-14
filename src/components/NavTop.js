import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import Link from 'next/link';
import Link from "components/Link";
import navTopStyle from 'styles/components/navTopStyle';
import clsx from 'clsx';

const makeComponentStyles = makeStyles(() => ({
  ...navTopStyle,
}));

const NavTop = () => {
  const classes = makeComponentStyles();

  return (
    <div className={classes.magicmenu}>
      <ul className="nav_menu">
        <li className={clsx(classes.level_0, classes.category_item)}>
          <Link className={classes.level_top} href="#">
            Home
          </Link>
        </li>
        <li className={clsx(classes.level_0, classes.category_item, classes.hasChild)}>
          <Link className={classes.level_top} href="#">
            Home
          </Link>
          <div className={classes.level_top_mega}>
            <div className="content_mega">
              <div className="content_mega_horizontal">
                <ul className={clsx("level_0", "category_item")}>
                  <li className="children">
                    <Link className={classes.level_top} href="#">
                      Home Decor
                    </Link>
                    <ul className={clsx("level1", "submenu")}>
                      <li className="level2">
                        <Link className={classes.level_top} href="#">
                          Chairs & Sofas
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="children">
                    <Link className={classes.level_top} href="#">
                      Home Decor
                    </Link>
                    <ul className={clsx("level1", "submenu")}>
                      <li className="level2">
                        <Link className={classes.level_top} href="#">
                          Chairs & Sofas
                        </Link>
                      </li>
                      <li className="level2">
                        <Link className={classes.level_top} href="#">
                          Chairs & Sofas
                        </Link>
                      </li>
                      <li className="level2">
                        <Link className={classes.level_top} href="#">
                          Chairs & Sofas
                        </Link>
                      </li>
                      <li className="level2">
                        <Link className={classes.level_top} href="#">
                          Chairs & Sofas
                        </Link>
                      </li>
                      <li className="level2">
                        <Link className={classes.level_top} href="#">
                          Chairs & Sofas
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="children">
                    <Link className={classes.level_top} href="#">
                      Home Decor
                    </Link>
                    <ul className={clsx("level1", "submenu")}>
                      <li className="level2">
                        <Link className={classes.level_top} href="#">
                          Chairs & Sofas
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li className={clsx(classes.level_0, classes.category_item)}>
          <Link className={classes.level_top} href="#">
            Home
          </Link>
        </li>
        <li className={clsx(classes.level_0, classes.category_item)}>
          <Link className={classes.level_top} href="#">
            Home
          </Link>
        </li>
        <li className={clsx(classes.level_0, classes.category_item)}>
          <Link className={classes.level_top} href="#">
            Home
          </Link>
        </li>
        <li className={clsx(classes.level_0, classes.category_item)}>
          <Link className={classes.level_top} href="#">
            Home
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default React.memo(NavTop);
