import React from 'react'
import { amblemaConstant, backOfficeConstant, casinoConstant, collosusConstant, contrataConstant, covidConstant, frontConstant, fullConstant, innpactiaConstant, mcuConstant, migracionConstant, mobileConstant, portfolioTitleConstant, reintentosConstant, sabeConstant, visitConstant } from '../words.constants'

export const Portfolio = () => {

    const handleGoTo = (url) => {
        window.open(url, '_blank');
    }

    return (
        <section className='pt-24' id="portfoliosection">
            <hr className='border-lightbackgroundgray mx-auto w-9/12' />
            <div className='pt-24 w-full px-4 container mx-auto'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-12 w-full'>
                        <div className='text-center'>
                            <span className='text-secondary tracking-iswidermedium leading-3 font-medium text-xl'>{visitConstant}</span>
                            <h2 className='mt-4 text-6xl font-bold'>{portfolioTitleConstant}</h2>
                        </div>
                    </div>
                </div>
                <div className='grid gap-x-6 grid-cols-3 pt-2.5'>
                        <div className='col-span-3 mt-12 cursor-pointer xl:col-span-1' onClick={() => handleGoTo('https://www.behance.net/gallery/138239147/COVID-19-SPS')}>
                            <div className='cards-portfolio h-full rounded-2xl p-7'>
                                <div>
                                    <div>
                                        <img className="w-full h-auto object-cover rounded-lg" src="http://imgfz.com/i/GmCbehM.png" alt="user photo" />
                                    </div>
                                    <div className='pt-4'>
                                        <span className='font-medium text-secondary text-sm tracking-wider'>{mobileConstant}</span>
                                        <h4 className='font-medium text-xl md:text-2xl lg:text-3xl pt-3'>{covidConstant}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-3 mt-12 cursor-pointer xl:col-span-1' onClick={() => handleGoTo('https://www.behance.net/gallery/138231965/Innpactia')} >
                            <div className='cards-portfolio h-full rounded-2xl p-7'>
                                <div>
                                    <div>
                                        <img className="w-full h-auto object-cover rounded-lg" src="http://imgfz.com/i/SAZKOGz.png" alt="user photo" />
                                    </div>
                                    <div className='pt-4'>
                                        <span className='font-medium text-secondary text-sm tracking-wider'>{fullConstant}</span>
                                        <h4 className='font-medium text-xl md:text-2xl lg:text-3xl pt-3'>{innpactiaConstant}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-3 mt-12 cursor-pointer xl:col-span-1' onClick={() => handleGoTo('https://www.behance.net/gallery/138232623/Innpactia-BackOffice')}>
                            <div className='cards-portfolio h-full rounded-2xl p-7'>
                                <div>
                                    <div>
                                        <img className="w-full h-auto object-cover rounded-lg" src="http://imgfz.com/i/db5fO14.png" alt="user photo" />
                                    </div>
                                    <div className='pt-4'>
                                        <span className='font-medium text-secondary text-sm tracking-wider'>{fullConstant}</span>
                                        <h4 className='font-medium text-xl md:text-2xl lg:text-3xl pt-3'>{backOfficeConstant}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-3 mt-12 cursor-pointer xl:col-span-1' onClick={() => handleGoTo('https://www.behance.net/gallery/119891607/Aplicacion-Movil-Colossus')}>
                            <div className='cards-portfolio h-full rounded-2xl p-7'>
                                <div>
                                    <div>
                                        <img className="w-full h-auto object-cover rounded-lg" src="http://imgfz.com/i/a4ILtsi.png" alt="user photo" />
                                    </div>
                                    <div className='pt-4'>
                                        <span className='font-medium text-secondary text-sm tracking-wider'>{mobileConstant}</span>
                                        <h4 className='font-medium text-xl md:text-2xl lg:text-3xl pt-3'>{collosusConstant}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-3 mt-12 cursor-pointer xl:col-span-1' onClick={() => handleGoTo('https://www.behance.net/gallery/119888951/Aplicacion-web-SABE')}>
                            <div className='cards-portfolio h-full rounded-2xl p-7'>
                                <div>
                                    <div>
                                        <img className="w-full h-auto object-cover rounded-lg" src="http://imgfz.com/i/CvX3Wme.png" alt="user photo" />
                                    </div>
                                    <div className='pt-4'>
                                        <span className='font-medium text-secondary text-sm tracking-wider'>{frontConstant}</span>
                                        <h4 className='font-medium text-xl md:text-2xl lg:text-3xl pt-3'>{sabeConstant}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-3 mt-12 cursor-pointer xl:col-span-1' onClick={() => handleGoTo('https://www.behance.net/gallery/119887571/Aplicacion-web-Reintentos-Manuales')}>
                            <div className='cards-portfolio h-full rounded-2xl p-7'>
                                <div>
                                    <div>
                                        <img className="w-full h-auto object-cover rounded-lg" src="http://imgfz.com/i/exwt4uq.png" alt="user photo" />
                                    </div>
                                    <div className='pt-4'>
                                        <span className='font-medium text-secondary text-sm tracking-wider'>{frontConstant}</span>
                                        <h4 className='font-medium text-xl md:text-2xl lg:text-3xl pt-3'>{reintentosConstant}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-3 mt-12 cursor-pointer xl:col-span-1' onClick={() => handleGoTo('https://www.behance.net/gallery/119888071/Aplicacion-web-Migracion-CEC')}>
                            <div className='cards-portfolio h-full rounded-2xl p-7'>
                                <div>
                                    <div>
                                        <img className="w-full h-auto object-cover rounded-lg" src="http://imgfz.com/i/K7RJxME.png" alt="user photo" />
                                    </div>
                                    <div className='pt-4'>
                                        <span className='font-medium text-secondary text-sm tracking-wider'>{frontConstant}</span>
                                        <h4 className='font-medium text-xl md:text-2xl lg:text-3xl pt-3'>{migracionConstant}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-3 mt-12 cursor-pointer xl:col-span-1' onClick={() => handleGoTo('https://www.behance.net/gallery/119888573/Aplicacion-web-MCU')}>
                            <div className='cards-portfolio h-full rounded-2xl p-7'>
                                <div>
                                    <div>
                                        <img className="w-full h-auto object-cover rounded-lg" src="http://imgfz.com/i/MLbqTWa.png" alt="user photo" />
                                    </div>
                                    <div className='pt-4'>
                                        <span className='font-medium text-secondary text-sm tracking-wider'>{frontConstant}</span>
                                        <h4 className='font-medium text-xl md:text-2xl lg:text-3xl pt-3'>{mcuConstant}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-3 mt-12 cursor-pointer xl:col-span-1' onClick={() => handleGoTo('https://www.behance.net/gallery/119888305/Aplicacion-web-Contrata')}>
                            <div className='cards-portfolio h-full rounded-2xl p-7'>
                                <div>
                                    <div>
                                        <img className="w-full h-auto object-cover rounded-lg" src="http://imgfz.com/i/oGqlcf9.png" alt="user photo" />
                                    </div>
                                    <div className='pt-4'>
                                        <span className='font-medium text-secondary text-sm tracking-wider'>{frontConstant}</span>
                                        <h4 className='font-medium text-xl md:text-2xl lg:text-3xl pt-3'>{contrataConstant}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-3 mt-12 cursor-pointer xl:col-span-1' onClick={() => handleGoTo('https://www.behance.net/gallery/119884995/Aplicacion-web-para-el-proyecto-socio-educativo-AmbLeMa')}>
                            <div className='cards-portfolio h-full rounded-2xl p-7'>
                                <div>
                                    <div>
                                        <img className="w-full h-auto object-cover rounded-lg" src="http://imgfz.com/i/2WCnwaX.png" alt="user photo" />
                                    </div>
                                    <div className='pt-4'>
                                        <span className='font-medium text-secondary text-sm tracking-wider'>{frontConstant}</span>
                                        <h4 className='font-medium text-xl md:text-2xl lg:text-3xl pt-3'>{amblemaConstant}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-3 mt-12 cursor-pointer xl:col-span-1' onClick={() => handleGoTo('https://www.behance.net/gallery/119883989/Back-Office-Casino-Bonus-Center')}>
                            <div className='cards-portfolio h-full rounded-2xl p-7'>
                                <div>
                                    <div>
                                        <img className="w-full h-auto object-cover rounded-lg" src="http://imgfz.com/i/2aKp7U1.png" alt="user photo" />
                                    </div>
                                    <div className='pt-4'>
                                        <span className='font-medium text-secondary text-sm tracking-wider'>{frontConstant}</span>
                                        <h4 className='font-medium text-xl md:text-2xl lg:text-3xl pt-3'>{casinoConstant}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}
