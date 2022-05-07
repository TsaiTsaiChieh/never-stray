import styled from 'styled-components'

import {PetStatus} from '../../constants/EnumType'
import {MEDIA_DESKTOP, MEDIA_TABLET} from '../../constants/Mixin'
import {colors, sizes} from '../../constants/Variables'
import {petStatusConverter} from '../../utils/value-converter'
import {Button} from '../PetList/SearchBoard'

const TextSetting = styled.div`
  font-size: ${sizes.s};
  color: ${colors.gray.i100};
  letter-spacing: 1px;
  margin-top: 12px;
  &::after {
    margin-left: 10px;
    color: ${colors.gray.i400};
  }
  ${MEDIA_DESKTOP} {
    margin-top: 20px;
  }
`
export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: calc(65px + 35px);
  ${MEDIA_DESKTOP} {
    margin-top: 70px;
    margin-left: 40px;
  }
`
export const Title = styled.h1`
  font-size: ${sizes.m};
  font-weight: 700;
  color: ${colors.gray.i400};
  letter-spacing: 1.2px;
  line-height: 1.5;
`
export const UpdateTime = styled(TextSetting) <{updatedAt: string}>`
  &::before {
    content: "更新時間";
  }
  &::after {
    color: ${colors.gray.i100};
    content: ${(props) => `"${props.updatedAt}"`};
  }
`
export const AccessNumber = styled(TextSetting) <{accessNum: string}>`
  font-size: ${sizes.s};
  color: ${colors.gray.i100};
  letter-spacing: 1px;
  &::before {
    content: "編號";
  }
  &::after {
    content: ${(props) => `"${props.accessNum}"`};
    color: ${colors.gray.i400};
  }
`
export const Status = styled(TextSetting) <{status: PetStatusType}>`
  &::before {
    content: "狀態";
  }
  &::after {
    content: ${(props) => `"${petStatusConverter(props.status)}"`};
  }
`
export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const DescriptionTitle = styled(TextSetting)`
  color: ${colors.tiffany.i400};
  font-weight: 700;
  margin-top: 0;
`
export const Description = styled.p`
  color: ${colors.gray.i300};
  line-height: 1.5;
  font-size: 15px;
  margin-top: 10px;
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  ${MEDIA_TABLET} {
    justify-content: flex-start;
  }
`
export const ContactUs = styled.button<{status: PetStatusType}>`
  width: auto;
  height: 40px;
  flex-grow: 1;
  letter-spacing: 1px;
  font-size: ${sizes.xs};
  background: ${(props) =>
    props.status === PetStatus.ADOPTED ?
      colors.gray.i300 :
      colors.tiffany.i300};
  color: ${colors.white.i100};
  border: none;
  border-radius: 5px;
  &:hover {
    background: ${(props) =>
    props.status === PetStatus.ADOPTED ?
      colors.gray.i400 :
      colors.tiffany.i500};
  }
  ${MEDIA_TABLET} {
    flex-grow: 1;
  }
  ${MEDIA_DESKTOP} {
    max-width: 300px;
  }
`
export const AddTracking = styled(Button)`
  width: 10vw;
  margin-left: 10px;
  float: right;
  border: 1px solid ${colors.tiffany.i300};
  color: ${colors.gray.i400};
  &:hover {
    color: ${colors.tiffany.i300};
  }
  ${MEDIA_TABLET} {
    flex-grow: 1;
    margin-left: 20px;
  }
  ${MEDIA_DESKTOP} {
    max-width: 300px;
  }
`
export const TrackingIcon = styled.img<{tracking: boolean}>`
  content: ${(props) =>
    props.tracking ?
      'url(/images/PetProfile/tracking.svg)' :
      'url(/images/PetProfile/untracking.svg)'};
  width: 20px;
  height: 17.5px;
  ${MEDIA_TABLET} {
    margin-right: 14px;
  }
`
