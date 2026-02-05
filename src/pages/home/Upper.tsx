import { RippleButton, Dropdown } from "@custom";
import { FiBell } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import Icons from "@data/Icons";


export default function Upper(){
    return(
        <div className="bg-white py-5">
            <div className="w-[95%] mx-auto flex flex-row justify-between items-center"> 
                <div className="flex flex-row gap-3 items-center bg-[var(--bg-primary)] focus-within:border-[#E0E8ED] rounded-lg py-2 px-5 border border-[var(--card-bd)] w-[30%]">
                    <Icons 
                        name="search"
                        size={16}
                        color="var(--sec)"
                    />
                    <input 
                        placeholder="Search"
                        className="focus:outline-none bg-transparent w-[90%]"
                    />
                </div>
                <div className="flex flex-row gap-5 items-center"> 
                    <RippleButton className="relative" radii={"50%"} onClick={() => {}} yPlus={10} xPlus={10}>
                        <FiBell size={24} color="var(--sec)" />
                        <div className="w-[7px] h-[7px] absolute top-0 right-0 bg-[var(--danger)] rounded-full" />
                    </RippleButton>
                    <Dropdown
                        Trigger={({state, onClick}) => 
                            <RippleButton onClick={onClick} radii={50} className="flex flex-row gap-5 bg-[#F9FAFA] rounded-full items-center p-2">
                                <div className="flex flex-row gap-2 items-center">
                                    <img src="/images/user.png" alt="user image" className="w-[24px] h-[24px]" />
                                    <p className="text-[#23252A] font-medium text-xs">Abdul Ahad</p>
                                </div>
                                <IoIosArrowDown size={12} color="#17181C" className={`flex-shrink-0 transition-transform ${state ? "rotate-180" : "rotate-0"}`} />
                            </RippleButton>
                        }
                        className="bg-white shadow-lg rounded-b-lg w-full"
                    >
                        {["home", "Logout", "Close"].map((link: string) => 
                            <RippleButton onClick={() => {}} className="text-base text-[var(--primary)] py-1 px-3">
                                {link}
                            </RippleButton>
                        )}
                    </Dropdown>
                </div>
            </div>
        </div>
    )
}