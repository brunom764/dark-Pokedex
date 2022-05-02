import styled from 'styled-components'

export const Container = styled.section`
  display:flex;
  justify-content:space-evenly;
  flex-wrap:wrap;
`

export const PokemonBloco = styled.div`
  margin:2rem;
  box-sizing:border-box;
  background-color:rgba(0,29,110,0.25);
  border: 3px solid #001D6E;
  border-radius:10px;
  padding:.25rem;
  width:20%;
  max-height:15rem;
  transition:300;
  :hover{
    cursor: pointer;
    background-color:#000;
  }
  @media screen and (max-width:768px) {
      width:45%;
      max-height:20rem;
  }
`

export const PokemonNome = styled.h1 `
  font-size:2rem;
  text-align:center;
  font-family: 'Pokemon Solid', sans-serif;
  letter-spacing: 5px;   
  font-weight:300;
  transition:300;
  color: #FFF;
  :hover{
    font-size:2.25rem;
    cursor: pointer;
  }
`