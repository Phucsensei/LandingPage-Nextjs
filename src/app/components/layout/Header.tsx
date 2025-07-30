import Image from 'next/image'
import Logo from '@/assets/logosaas.png'
import MenuIcon from '@/assets/menu.svg'

export const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-black/5">
            <div className="py-4 px-4 md:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className='flex items-center justify-between'>
                        <div className="flex items-center gap-2">
                            <Image src={Logo} alt="logo" width={32} height={32} className="object-contain" />
                            <span className="font-semibold text-lg">Maxius</span>
                        </div>

                        <button className='h-10 w-10 flex items-center justify-center md:hidden'>
                            <Image src={MenuIcon} alt='menu' className='h-5 w-5' />
                        </button>

                        <nav className='hidden md:flex items-center gap-8'>
                            <div className="flex items-center gap-6">
                                <a href='#features' className='text-sm text-black/60 hover:text-black transition-colors'>Features</a>
                                <a href='#about' className='text-sm text-black/60 hover:text-black transition-colors'>About</a>
                                <a href='#contact' className='text-sm text-black/60 hover:text-black transition-colors'>Contact</a>
                                <a href='#footer' className='text-sm text-black/60 hover:text-black transition-colors'>Footer</a>
                            </div>
                            <button className='bg-black text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-black/90 transition-colors'>
                                Get for free
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}
