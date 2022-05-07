import styled from 'styled-components'

import {MEDIA_DESKTOP} from '../../constants/Mixin'
import {colors, sizes} from '../../constants/Variables'
import {petStatusConverter} from '../../utils/value-converter'

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
  margin: 10px 0 20px;
`
