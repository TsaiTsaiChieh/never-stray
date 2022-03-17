import styled from 'styled-components'

import {colors, sizes} from '../constants/Variables'

interface Props {
  className?: string;
}
const Footer = ({className}: Props) => {
  return (
    <div id="Footer" className={className}>
      <p className="footer-text">copyright © 2022</p>
    </div>
  )
}

const StyledFooter = styled(Footer)`
  width: 100%;
  height: 50px;
  font-size: ${sizes.m};
  text-align: center;
  color: ${colors.white.i100};
  display: flex;
  background: ${colors.tiffany.i400};
  .footer-text {
    margin: auto;
  }
`
export default StyledFooter
