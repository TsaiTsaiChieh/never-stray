import styled from 'styled-components'

import {MEDIA_TABLET} from '../../constants/Mixin'

interface Props {
  className?: string;
}
const Banner = ({className = 'Banner'}: Props) => {
  return <img className={className} />
}

const StyledBanner = styled(Banner)`
  display: block;
  margin: auto;
  content: url("/images/PetList/banner-mobile.png");
  width: 90%;
  ${MEDIA_TABLET} {
    content: url("/images/PetList/banner-tablet.png");
    width: 720px;
    height: 145.24px;
  }
`
export default StyledBanner
