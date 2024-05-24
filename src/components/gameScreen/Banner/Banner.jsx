import { Button, Tab } from "@headlessui/react";

function Banner() {
    const playerCash = 1700;
    return (
        <div className="flex items-center justify-center p-6 h-[154px] w-[95%] outline-[7px] outline-dashed ring-offset-8 outline-[--grey-dark] rounded-[14px]">
            <div className="grid gap-4 grid-cols-3"
                style={{ gridTemplateColumns: "1fr 2.3fr .7fr" }}
            >
                {/* Bet Max/Bet Buttons */}
                <div className="flex justify-center space-x-1 cursor-pointer">
                    <Button className="w-32 h-32 bg-[--red] text-white font-bold active:font-extrabold cursor-pointer
                                active:transform active:scale-95 transition-transform duration-150 ease-out active:bg-[--fd-blue]"
                    >
                        Bet Max
                    </Button>
                    <Button className="w-32 h-32 bg-[--red] text-white font-bold active:font-extrabold cursor-pointer
                                active:transform active:scale-95 transition-transform duration-150 ease-out active:bg-[--fd-blue]"
                    >
                        Bet
                    </Button>
                </div>
                {/* Output Screen */}
                <div className="flex-initial w-auto">
                    <div className="flex h-32 bg-white border-[10px] border-[--grey-dark] rounded-[6px] grid grid-cols-2 grid-rows-2">
                        {/* WIN SECTION */}
                        <p className="ml-2 mt-2 text-[--grey-dark] font-stretched uppercase lg:text-2xl">
                            win <span className="text-[--red] ml-4">1000</span>
                        </p>
                        <div className="flex justify-end items-center mt-10 mr-2">
                            <div className="text-right text-[--grey-dark] font-stretched uppercase lg:text-2xl">
                                cash
                                <span className="block text-[--red] mt-2 lg:text-xl leading-tight">{playerCash}</span>
                            </div>
                        </div>
                        <p className="ml-2 mt-2 font-bold uppercase text-[--grey-dark]">
                            bet
                            <span> 40</span>
                        </p>
                    </div>
                </div>
                {/* Hit Button */}
                <div className="flex justify-center">
                    <Button className="w-32 h-32 bg-[--red] text-white font-bold active:font-extrabold cursor-pointer
                                active:transform active:scale-95 transition-transform duration-150 ease-out active:bg-[--hit]"
                    >
                        Hit
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Banner;
