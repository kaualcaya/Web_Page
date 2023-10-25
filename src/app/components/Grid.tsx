import { ReactNode } from "react"

type Props = {
    children: ReactNode
}
export function Grid({children}:Props){
    return(
        <div className='flex items-center justify-between w-full max-w-[1246px] px-[100px] mx-auto'>
            {children}
        </div>
    )
}

export default Grid