import Link from 'next/link'
import { VscLinkExternal } from 'react-icons/vsc'
import { BiLinkExternal } from 'react-icons/bi'
import { BsGithub } from 'react-icons/bs'
export default function LinkBtn(props) {
  return (
    <div className="flex flex-row gap-4  ">
      <div className="bg-black p-1 ">
        <Link href="https://tailwindcss.com/docs/drop-shadow" target="_blank">
          <BsGithub color="#EFEDE0" size="32" />
        </Link>
      </div>
      <div className="bg-black p-1 ">
        <Link href="https://tailwindcss.com/docs/drop-shadow" target="_blank">
          <BiLinkExternal color="#EFEDE0" size="32" />
        </Link>
      </div>
    </div>
  )
}
