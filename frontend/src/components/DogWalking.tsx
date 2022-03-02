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
    <Lottie options={defaultOptions} height={400} width={400} />
  )
}

export default DogWalking
