import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #fff;

  &.active {
    color: #2980b9;
    border-bottom: 2px solid #2980b9;
  }
`;

export default function AuthNav() {
  return (
    <div>
      <Link to="/register">Регистрация</Link>
      <Link to="/login">Логин</Link>
    </div>
  );
}
