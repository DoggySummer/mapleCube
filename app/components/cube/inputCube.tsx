import InputCubeEach from './inputCubeEach'
import { cubeDataType } from '@/app/constant'

interface inputCubeBox {
  cubeDataAll: cubeDataType[]
}

const InputCubeBox = ({ cubeDataAll }: inputCubeBox) => {
  return (
    <div className="pt-4">
      <div className="pb-3">* 개당 가격을 입력해 주세요</div>
      {cubeDataAll.map((item) => {
        return <InputCubeEach img={item.img} name={item.name} key={item.id} />
      })}
    </div>
  )
}

export default InputCubeBox
