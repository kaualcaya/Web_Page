import Grid from "./Grid"
import Image from "next/image"
import Link from "next/link"

import Insta from '@/app/assets/insta.png'
import Linkedin from '@/app/assets/linkedin.png'
import Hand from '@/app/assets/hand.png'

export function SectionHero() {
    return (
        <section className="w-full h-[704px] bg-img_bg_hero bg-no-repeat bg-center bg-cover">
            <Grid>
                <div className="flex-1 max-w-[500px]">
                    <h1 className="text-white text-6xl font-bold mb-4">INVENTAR É ENCONTAR <br /> O QUE NÃO SE BUSCA!</h1>
                    <p className="text-white text-xl max-w[408px] mb-8">Transformando Visões em Realidade, um Design de Cada Vez. </p>
                    <div className="flex gap-4 w-96 mb-24" >
                        <button>
                            <Link href="https://www.instagram.com/k.alcaya/">
                            <Image 
                                src={Insta}
                                alt="Instagram"
                            />
                            </Link>
                        </button>
                       
                        <button>
                            <Link href="https://www.linkedin.com/in/kau%C3%A3-alcaya-94b67b203/">
                            <Image
                                src={Linkedin}
                                alt="Instagram"
                            />
                            </Link>
                        </button>
                    </div>
                    <div>
                    <button>
                            <span className="text-white text-sm font-bold">Continuar Explorando</span>
                        </button>
                    </div>
                </div>
                <Image className="w-2/4 ml-32  "
                    src={Hand}
                    alt="HAndBackground"
                />
            </Grid>
        </section>
    )
}

export default SectionHero
