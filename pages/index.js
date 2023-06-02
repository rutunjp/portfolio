import Card from '@/components/card'

export default function Home() {
  return (
    <div className="flex  ">
      <div className="w-2/6 flex-col flex items-center  px-20 bg-yellow gap-8 h-screen pt-52 text-center ">
        <h1 className="text-black font-bold tracking-wide text-4xl">
          Rutunj Parikh
        </h1>
        <p className="text-black">
          Simple Text Describing me Simple Text Describing me Simple Text
          Describing me Simple Text Describing me Simple Text Simple Text
          Describing me Simple Text Describing me Simple Text Describing me me
          Simple Text Describing me Simple Text Describing me
        </p>
        <div className="another-drop-shadow w-fit  ">
          <button className="bg-skin     solid-drop-shadow  w-fit p-4 px-12 text-lg text-black">
            Resume
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center bg-skin w-4/6 pt-10 gap-6 ">
        <h2 className="font-bold text-4xl">Projects</h2>
        {/* <div className="flex flex-row gap-8">
          <button className="category-button  bg-lightOrange">
            Development
          </button>
          <button className="category-button">Design</button>
        </div> */}
        <div className="flex flex-row justify-center flex-wrap gap-16 gap-y-12 ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}
