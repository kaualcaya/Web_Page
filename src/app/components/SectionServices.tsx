import { Container } from "postcss"
import Grid from "./Grid"
import Image from "next/image"

import Code from '@/app/assets/code.png'
import Coffe from '@/app/assets/coffe.png'
import Rocket from '@/app/assets/rocket.png'
import Dolar from '@/app/assets/dolar.png'
import Cell from '@/app/assets/cell.png'


export function SectionServices() {
    return (
        <section className=" relative w-full h-[965px]">
            <Grid>
                <div className="flex-1 max-w-[594px] pt-28 ">
                    <span className="text-gray-dark text-sm font-bold uppercase mb-34 block">Nossa Finalidade</span>
                    <h2 className="text-gray-dark-two text-6xl font-bold leading-tight mb-6">Desenvolver suas capacidades</h2>
                    <p className="text-lg max-w-[554px] mb-16">Te mostrar de forma intuitiva e pratica, como você pode se desenvolver e
                        crescer como Desenvolvedor de forma Rápida, Prática e eficiente
                    </p>
                    <ul className="flex flex-col items-start  gap-12">
                        <li className="flex items-center gap-10 pb-9 border-b-[1px] border-opacity-gray">
                            <Image
                                src={Code}
                                alt=""
                            />
                            <p className="flex-1 text-gray-dark-two pr-2">Te mostrar como se desenvolver e encontrar a melhor área para você!</p>
                        </li>

                        <li className="flex items-center gap-10 pb-9 border-b-[1px] border-opacity-gray">
                            <Image
                                src={Rocket}
                                alt=""
                            />
                            <p className="flex-1 text-gray-dark-two pr-2">Te impulsionar e mostrar o quão longe você pode chegar. </p>
                        </li>

                        <li className="flex items-center gap-10 pb-9 border-b-[1px] border-opacity-gray">
                            <Image
                                src={Dolar}
                                alt=""
                            />
                            <p className="flex-1 text-gray-dark-two pr-2">Ensinar formas de tornar o seu trabalho lucrativo.</p>
                        </li>

                        <li className="flex items-center gap-10 pb-9 ">
                            <Image
                                src={Coffe}
                                alt=""
                            />
                            <p className="flex-1 text-gray-dark-two pr-2">E em consequência te viciar em Cafê haha!</p>
                        </li>

                    </ul>
                </div>
            </Grid>
            <div className="absolute top-0 right-0 h-full  flex items-center w-[32%]">
                <Image className=" translate-x-[-10%]"
                    src={Cell}
                    alt="FundoCell"
                />
            </div>

        </section>
    )
}

export default SectionServices