import image from '@/assets/img.png';

export default function Carousel() {
    return (
        <div className="relative w-full overflow-hidden justify-center items-center flex">
            <div className="flex animate-scroll gap-6">
                {/* 5 slides originais */}
                <div className="h-[280px] w-[550px] bg-white rounded-lg items-center justify-center flex">
                </div>
                <div className="h-[280px] w-[550px] bg-red-500 rounded-lg items-center justify-center flex">
                </div>
                <div className="h-[280px] w-[550px] bg-yellow-500 rounded-lg items-center justify-center flex">
                    <img src={image} alt="Slide 3" className="w-[200px]" />
                </div>
                <div className="h-[280px] w-[550px] bg-amber-600 rounded-lg items-center justify-center flex">
                    <img src={image} alt="Slide 4" className="w-[200px]" />
                </div>
                <div className="h-[280px] w-[550px] bg-purple-500 rounded-lg items-center justify-center flex">
                    <img src={image} alt="Slide 5" className="w-[200px]" />
                </div>

                {/* 5 slides duplicados */}
                <div className="h-[280px] w-[550px] bg-white rounded-lg items-center justify-center flex">
                </div>
                <div className="h-[280px] w-[550px] bg-red-500 rounded-lg items-center justify-center flex">
                </div>
                <div className="h-[280px] w-[550px] bg-yellow-500 rounded-lg items-center justify-center flex">
                    <img src={image} alt="Slide 3" className="w-[200px]" />
                </div>
                <div className="h-[280px] w-[550px] bg-amber-600 rounded-lg items-center justify-center flex">
                    <img src={image} alt="Slide 4" className="w-[200px]" />
                </div>
                <div className="h-[280px] w-[550px] bg-purple-500 rounded-lg items-center justify-center flex">
                    <img src={image} alt="Slide 5" className="w-[200px]" />
                </div>
            </div>
        </div>
    );
}



