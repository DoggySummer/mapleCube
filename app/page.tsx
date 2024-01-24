import InputCubeBox from './components/inputCube'
import MUIPractice from './components/muiPractice'

export default function Home() {
  return (
    <main className="flex h-screen w-full flex-col justify-center bg-gray-400">
      <div className="mx-auto w-[600px] bg-white px-4 py-2">
        <MUIPractice />
        <InputCubeBox />
      </div>
    </main>
  )
}
