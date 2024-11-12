import logo from './assets/logo-text-in-orbit-png.png'
import illustration from './assets/lets-start-illustration.png'

export function App() {

  return (
   <div className="h-screen flex flex-col items-center justify-center gap-8">
    <img src={logo} alt="in.orbit" />
    <img className='w-80 h-80' src={illustration} alt="let's start illustration" />
   </div>
  )
}
