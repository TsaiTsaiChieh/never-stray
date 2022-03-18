import Lottie, {LottieOptions} from 'lottie-react-web'

import loadingAnimation from '../assets/lotties/dog-walking.json'
import {StyledDogWalking, Wrap} from '../styled/DogWalking'

const defaultOptions: LottieOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const DogWalking = () => {
  return (
    <Wrap>
      <StyledDogWalking>
        <Lottie options={defaultOptions} />
      </StyledDogWalking>
    </Wrap>
  )
}

export default DogWalking
