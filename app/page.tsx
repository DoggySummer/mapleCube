import EquipDetail from './components/meso/equipDetail'
import MesoComponent from './components/meso/mesoComponent'

export default function Home() {
  return (
    <main className="flex h-screen w-full flex-col justify-center bg-gray-200">
      <div className="mx-auto mb-4 w-[600px] rounded-lg bg-white px-4 py-2">
        {/* <CubeComponent /> */}
        <MesoComponent />
        <EquipDetail />
      </div>
    </main>
  )
}
