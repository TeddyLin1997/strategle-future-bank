import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Button } from '@mui/material'

export const HeaderWrapper = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  padding: 10px 24px;
  user-select: none;
  z-index: 100;
  border-bottom: 2px solid #4c4c4c;
  background-color: #1d1e25;
`

export const HeaderContainer = styled.div`
  width: 100%;
  margin: auto;
  max-width: 1440px;
  display: flex;
  align-items: center;
`

export const LogoWrapper = styled(NavLink)`
  margin-right: 16px;
  height: 100%;
  display: flex;
  align-items: center;

  &:hover > .logo-img {
    transform: rotate(360deg);
    transition: all 3s ease-in-out;
  }

  & > .logo-img {
    margin-right: 6px;
    width: 36px;
    height: auto;
  }
`

export const NavItem = styled(NavLink)`
  padding: 0 8px;
  font-size: 14px;
  font-weight: 700;
  color: #FFF;
  transition: all .2s;

  &.active {
    color: #FFC408 !important;
  }
`

export const ConnectWallet = styled(Button)`
  margin-left: auto !important;
`

export const WalletContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const WalletItem = styled.div`
  padding: 6px 12px;
  border-radius: 6px;
  width: 108px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #FFC408;
  cursor: pointer;
  transition: all .1s;
  position: relative;

  & > .MuiChip-root {
    position: absolute;
    top: 4px;
    right: 2px;
  }

  &:hover {
    background-color: #ffc4088a;
  }

  & > .wallet-icon {
    width: 56px;
    height: auto;
  }

  & > .wallet-name {
    font-size: 12px;
    font-weight: bold;
  }
`

export const ChainItem = styled.div`
  padding-left: 12px;
  display: flex;
  align-items: center;
  border-radius: 6px;
  cursor: pointer;

  &.active {
    background-color: #22272e !important;
  }
  &.active > .chain-icon {
    border-color: #FFC408;
  }
  &.active > .chain-text {
    color: #FFC408;
  }

  &:hover {
    background-color: #FFC4088a;
  }

  & > .chain-icon {
    width: 24px;
    height: auto;
    border-radius: 50%;
    border: 1px solid #ccc;
  }
`

export const UserItem = styled(NavLink)`
  margin-bottom: 4px;
  padding-left: 12px;
  display: flex;
  align-items: center;
  border-radius: 6px;
  color: #121214;
  cursor: pointer;

  & > svg {
    width: 20px;
    height: auto;
  }

  &:hover {
    background-color: #FFC40880;
  }
`

export const Protocol = styled.div`
  position: relative;

  &::after {
    content: 'DeFi';
    position: absolute;
    bottom: 50%;
    left: 98%;
    display: block;
    font-size: 12px;
    padding: 2px 8px;
    background-color: #FFC408;
    border-radius: 80px;
    color: #121214;
  }
`
