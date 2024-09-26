import Image from "next/image";

export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none">
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto">
          <div className="border border-white/15 h-10 w-10 aspect-square rounded-lg inline-flex justify-center items-center">
            <div className="h-8 w-8 relative">
              <Image fill src="/assets/logo.svg" alt="Logo" />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className=" flex gap-8 text-sm">
              <a className="text-white/70 hover:text-white transition" href="#">
                Features
              </a>
              <a className="text-white/70 hover:text-white transition" href="#">
                Develoers
              </a>
              <a className="text-white/70 hover:text-white transition" href="#">
                Pricing
              </a>
              <a className="text-white/70 hover:text-white transition" href="#">
                Changelog
              </a>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <button className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190D2E] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]">
              <div className=" absolute inset-0">
                <div className=" rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
                <div className=" rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]" />
                <div className=" absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg" />
              </div>
              <span>Join Waitlist</span>
            </button>
            <div className="h-8 w-8 relative md:hidden">
              <Image fill src="/assets/icon-menu.svg" alt="Logo" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
