import Image from "next/image";
import Navbar from "./Navbar";
import HeaderDetails from "./HeaderDetails";

const Header = () => {
	return (
		<div className="w-full flex flex-shrink-0 relative bg-cover bg-center bg-no-repeat h-[670px] z-10">
			<Image
				src="/Poster.png"
				layout="fill"
				objectFit="cover"
				quality={100}
				className="-z-10 absolute"
			/>

			<Navbar />

			<HeaderDetails />
		</div>
	);
};

export default Header;
