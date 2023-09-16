import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<div className="mt-1 sm:mt-10 flex flex-col items-center mb-12">
			<div className="flex items-center py-9">
				<Link href="#">
					<Image
						src={"/facebook.svg"}
						width={24}
						height={24}
						alt="facebook"
						className="mx-3 sm:mx-6"
					/>
				</Link>
				<Link href="#">
					<Image
						src={"/instagram.svg"}
						width={24}
						height={24}
						alt="instagram"
						className="mx-3 sm:mx-6"
					/>
				</Link>
				<Link href="#">
					<Image
						src={"/twitter.svg"}
						width={24}
						height={24}
						alt="twitter"
						className="mx-3 sm:mx-6"
					/>
				</Link>
				<Link href="#">
					<Image
						src={"/youtube.svg"}
						width={24}
						height={24}
						alt="youtube"
						className="mx-3 sm:mx-6"
					/>
				</Link>
			</div>

			<div className="flex flex-col sm:flex-row gap-2 items-center text-center text-gray-900 text-lg font-bold">
				<Link href="#">
					<p className="mx-6">Conditions of Use</p>
				</Link>
				<Link href="#">
					<p className="mx-6">Privacy & Policy</p>
				</Link>
				<Link href="#">
					<p className="mx-6">Press Room</p>
				</Link>
			</div>
			<div className="text-gray-500 font-bold text-lg py-9">
				<p>© 2021 MovieBox by Adekunle Stephen Omorotimi</p>
			</div>
		</div>
	);
};

export default Footer;
