import InputCubeBox from './components/cube/inputCube'
import CubeComponent from '@/app/components/cube/cubeComponent'

export default function Home() {
  return (
    <main className="flex h-screen w-full flex-col justify-center bg-gray-200">
      <div className="mx-auto mb-4 w-[600px] rounded-lg bg-white px-4 py-2">
        <CubeComponent />
      </div>
      <div className="mx-auto mb-4 w-[600px] rounded-lg bg-white px-4 py-2">
        <CubeComponent />
      </div>
    </main>
  )
}
