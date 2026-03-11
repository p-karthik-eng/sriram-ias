"use client";

export default function Hero() {
    return (
        <section className="relative w-full h-screen overflow-hidden">
            <div className="absolute inset-0 z-0 bg-black">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full opacity-90"
                >
                    <source
                        src="/Sriram_IAS_Promotional_Video_Script.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>
        </section>
    );
}
