import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import fontSize from '../styles/fontSize';
import { color } from '../styles/color';
import koreaLogo from '../images/koreaLogo.jpg';
import { FaSearch } from 'react-icons/fa';
const { primary, dark, light } = color;
const HeadeBox = styled.header`
  .site-top {
    background: #f8f8f8;
    border-bottom: 1px solid #d5d5d5;
    height: 35px;
    div {
      text-align: right;
      a {
        display: inline-block;
        line-height: 34px;
        margin-left: 10px;
        font-size: ${fontSize.normal};

        &.on {
          color: ${primary};
        }
      }
    }
  }
  .logo-search {
    div {
      display: flex;
      justify-content: space-between;
      height: 150px;
      align-items: center;

      form {
        display: flex;
        height: 30px;
        width: 380px;

        button {
          width: 45px;
        }
        input[type='text'] {
          flex-grow: 1;
        }
      }
    }
  }
`;

const Header = () => {
  const { t } = useTranslation();
  return (
    <HeadeBox>
      <section className="site-top">
        <div className="layout-width">
          <NavLink
            to="/member/join"
            className={({ isActive }) => classNames({ on: isActive })}
          >
            {t('회원가입')}
          </NavLink>
          <NavLink
            to="/member/login"
            className={({ isActive }) => classNames({ on: isActive })}
          >
            {t('로그인')}
          </NavLink>
        </div>
      </section>
      <section className="logo-search">
        <div className="layout-width">
          <Link to="/">
            <img src={koreaLogo} alt={t('로고')} />
          </Link>
          <form autoComplete="off">
            <input type="text" />
            <button type="submit">
              <FaSearch />
            </button>
          </form>
        </div>
      </section>
    </HeadeBox>
  );
};

export default React.memo(Header);
