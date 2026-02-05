import { RippleButton } from "@custom"

export default function NoRoute(){
    return(
        <section className="w-full min-h-screen flex flex-col gap-5 mx-auto">
            <img src="/images/404.svg" alt="404 image"  />
            <RippleButton onClick={() => {}} className="bg-[var(--primar)] rounded-xl px-5 py-3">
                <p className="text-base text-white font-medium">Go Home</p>
            </RippleButton>
        </section>
    )
}