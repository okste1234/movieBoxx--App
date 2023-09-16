import Image from "next/image";
import Link from "next/link";

const NavLink = ({ img, text, href }) => {
	return (
		<div className="py-8 hover:bg-[#BE123C]/20 hover:text-[#BE123C] text-[#666] font-semibold transition hover:duration-1800 ease-in-out hover:border-r-4 hover:border-[#BE123C] hover:border-solid">
			<Link href={href} className="mx-11 flex items-center text-center">
				<Image src={img} alt="icon" width={25} height={25} />
				<h3 className="text-xl text-center font-poppins ml-[15px]">{text}</h3>
			</Link>
		</div>
	);
};

export default NavLink;
