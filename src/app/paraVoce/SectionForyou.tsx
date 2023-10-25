import React from 'react'
import Grid from '../components/Grid'
import Image from 'next/image'
import Icons from '@/app/paraVoce/imgParaVoce/iconsDev.png'


const SectionForyou = () => {
    return (
        
            <header className=" bg-img_bg_hero w-full h-full bg-cover">
                <Grid>
                    <div className='flex-1 max-w-[500px] mt-9'>
                        <h2 className=" text-white  text-4xl font-bold  pt-9 ">Referente aos cursos</h2>
                        <p className="text-white  text-xl max-w[408px] mt-2 ">Oferecemos diversos cursos para você que pretende se desenvolver e se adptar ao mercado! <br /> Com diversas linguagens e frameworks que te ajudarão a se tornar um Dev de excelencia. <br />Além de uma didatica excelente para sua fácil compreenssão</p>
                    </div>
                    <div className=' pt-10  pr-20 mt-9'>
                        <Image src={Icons} alt='IconesDev'/>
                    </div>
                </Grid>
                
                <Grid>
                    <div className=' pt-10  pr-20   mt-16'>
                        <Image src={Icons} alt='IconesDev'/>
                    </div>
                    <div className='flex-1 max-w-[500px] mt-20'>
                        <h2 className=" text-white  text-4xl font-bold  pt-9 ">Referente aos cursos</h2>
                        <p className="text-white  text-xl max-w[408px] mt-2 ">Oferecemos diversos cursos para você que pretende se desenvolver e se adptar ao mercado! <br /> Com diversas linguagens e frameworks que te ajudarão a se tornar um Dev de excelencia.</p>
                    </div>
                </Grid>

                <Grid>
                    
                    <div className='flex-1 pb-12 max-w-[500px] mt-20'>
                        <h2 className=" text-white  text-4xl font-bold  pt-9 ">Referente aos cursos</h2>
                        <p className="text-white  text-xl max-w[408px] mt-2 ">Oferecemos diversos cursos para você que pretende se desenvolver e se adptar ao mercado! <br /> Com diversas linguagens e frameworks que te ajudarão a se tornar um Dev de excelencia.</p>
                    </div>
                    <div className=' pt-10 p-12  pr-20 mt-16'>
                        <Image src={Icons} alt='IconesDev'/>
                    </div>
                </Grid>

            </header>
            
    )
}

export default SectionForyou
