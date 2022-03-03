import Lottie, {Options} from 'react-lottie'

import loadingAnimation from '../assets/lotties/dog-walking.json'

const defaultOptions: Options = {
  loop: true,
  autoplay: true,
  animationData: loadingAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const DogWalking = () => {
  return (
    <div id="DogWalkingWrapper">
      <div id="DogWalking">
        <Lottie options={defaultOptions} />
      </div>
    </div>
  )
}

export default DogWalking
