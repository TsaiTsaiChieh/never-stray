import styled from 'styled-components'
import {colors, sizes} from '../../constants/Variables'

export const StyledPagination = styled.ul`
  width: 90%;
  display: grid;
  grid-auto-flow: column;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;
  font-size: ${sizes.s};
  margin: 40px auto 40px auto;
  cursor: pointer;
  .current {
    border-radius: 12px;
    background-color: ${colors.blue.i100};
    color: ${colors.white.i100};
  }
`
export const Offset = styled.p`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`
export const Arrow = styled.img`
  display: flex;
  align-items: center;
`
export const Page = styled.li`
   width: 35px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: center;
 
`
