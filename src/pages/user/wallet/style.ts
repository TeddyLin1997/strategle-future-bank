import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 1.4rem;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`

export const Title = styled.div`
  margin-bottom: 24px;
  display: flex;
  gap: 1.4rem;
`

export const Account = styled.div`
  width: 65%;
  display: flex;

  & .ensname {
    font-size: 1.4rem;
    font-weight: 500;
  }

  & .account {
  }

  & .bio {
    margin-top: 4px;
    color: #999;
  }
`

export const Balance = styled.div`
  padding: 12px 16px;
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;
  border-radius: 6px;
  box-shadow: 2px 2px 10px -3px rgba(0, 0, 0, 0.2);
  background-image: linear-gradient(to right, #48c6ef 0%, #6f86d6 100%);

  & .balance {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 1.6rem;
    font-weight: 500;

    & > img {
      margin-right: 1rem;
      width: 32px;
    }
  }

  & .netvalue {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`

export const Content = styled.div`
  padding: 12px 16px;
  border-radius: 12px;
  box-shadow: 2px 2px 10px -3px rgba(0, 0, 0, 0.2);
  background-color: #fff;

  @media screen and (max-width: 768px) {
    width: 100% !important;
  }
`


