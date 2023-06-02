import LinkBtn from './linkBtn'

export default function Card(props) {
  return (
    <div className="flex flex-col w-3/12 items-center text-center solid-drop-shadow-lg    gap-6 p-4 px-3   outline transition ease-in-out duration-300 outline-2 solid">
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-2xl">Meetup Cards</h3>
        <p className="font-light text-sm">
          Simple Text Describing me Simple Text Describing me Simple Simple Text
          Describing me Text Describing me Simple Text Simple Text
        </p>
      </div>
      <LinkBtn />
      <div>
        <p className="opacity-70 text-sm ">NextJS, Chakra UI, Supabase</p>
      </div>
    </div>
  )
}
