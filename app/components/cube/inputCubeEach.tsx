import Image, { StaticImageData } from 'next/image'

interface inputCubeEach {
  img: StaticImageData
  name: string
}

const InputCubeEach = ({ img, name }: inputCubeEach) => {
  return (
    <div className="flex flex-col items-start pb-4">
      <div className="flex items-center">
        <Image src={img} alt={name} className="mr-3" />
        <div className="mr-3 font-bold">{name}</div>
        <input placeholder="0" className="mr-3 w-32 border border-solid py-1 pl-2 outline-none" />
        <div className="">원</div>
      </div>
    </div>
  )
}

export default InputCubeEach
