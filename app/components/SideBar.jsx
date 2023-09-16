import Image from "next/image";
import NavLink from "./NavLink";
import Link from "next/link";

const SideBar = () => {
	return (
		<div className="w-1/6 hidden xl:block">
			<div className="h-full rad mr-0 2xl:mr-10">
				<div className="py-6">
					<div className="flex items-center 2xl:mx-6 mx-2 mt-4">
						<img src={"/tv.svg"} alt="tv-logo" quality={100} />
						<h1 className="text-2xl text-[#333333] font-bold ml-8">MovieBox</h1>
					</div>

					<div className="mt-8 mb-9">
						<NavLink img="/Home.png" text="Home" href="/" />
						<NavLink img="/Movie Projector.png" text="Movies" href="#" />
						<NavLink img="/TV Show.png" text="TV Series" href="#" />
						<NavLink img="/Calendar.png" text="Upcoming" href="#" />
					</div>

					<div className="font-poppins bg-[#BE123C]/10 mx-7 border-1 border-[#BE123C]/70 rounded-3xl">
						<h3 className="font-semibold text-[#333333]/80 text-[15px] pl-4 pr-[17px] pt-12">
							Play movie quizes and earn free tickets
						</h3>

						<p className="pl-4 pr-10 py-3 text-[#66666] text-xs font-medium">
							50k people are playing now
						</p>
						<div className="flex items-center justify-center">
							<button className="mb-5 px-5 py-2 text-[#BE123C] bg-[#BE123C]/20 items-center text-center border-2 rounded-3xl">
								Start playing
							</button>
						</div>
					</div>

					<Link href="#" className="m-12 flex items-center">
						<Image src={"/Logout.png"} width={30} height={30} />
						<h3 className="font-semibold font-poppins text-xl text-[#666] ml-2">
							Log out
						</h3>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
