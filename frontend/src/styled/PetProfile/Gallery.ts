import styled from 'styled-components'

import {colors} from '../../constants/Variables'
import {AdoptedImg} from '../PetList/Profile'

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`
export const Image = styled.img<{image: string}>`
  width: 50vh;
  height: 50vh;
  content: ${(props) => `url(${props.image})`};
  object-fit: cover;
  border-radius: 13px;
  margin-top: 22px;
  box-shadow: 0px 0px 8px ${colors.gray.t100};
`
export const AdoptedImgInProfile = styled(AdoptedImg)`
  top: 50px;
  left: 0px;
`
