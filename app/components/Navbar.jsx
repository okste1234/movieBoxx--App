import Image from "next/image";

const Navbar = () => {
	return (
		<div className="w-full absolute mt-4">
			<div className="mx-2 xl:m-auto xl:w-5/6 flex items-center justify-between">
				<div>
					<Image
						src="/Logo.svg"
						width={124}
						height={33.33}
						alt="Logo"
						className="object-center object-cover sm:w-[186px] sm:h-[50px]"
					/>
				</div>

				<div className="sm:w-[320px] md:w-[420px] lg:w-[525px] xl:w-[700px]">
					<form className="py-[6px] px-[10px] rounded-md border-2 border-gray-300 border-solid flex justify-between">
						<label htmlFor="search" className="sr-only">
							Search
						</label>
						<input
							type="text"
							className="w-full bg-transparent text-base placeholder:font-normal placeholder-white outline-none text-white font-bold"
							placeholder="What do you want to watch?"
							value=""
						/>
						<button type="submit" aria-label="Search" className="">
							<Image
								src="/Search.svg"
								width={16}
								height={16}
								alt="click to search"
							/>
						</button>
					</form>
				</div>

				<button className="flex gap-[27px] text-center items-center">
					<p className="text-white text-lg font-bold hidden lg:block">
						Sign in
					</p>
					<Image
						src="/Menu.svg"
						width={36}
						height={36}
						alt="Menu"
						quality={100}
					/>
				</button>
			</div>
		</div>
	);
};

export default Navbar;
