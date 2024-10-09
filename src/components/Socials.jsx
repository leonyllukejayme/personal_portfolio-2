import Image from 'next/image';
import Link from 'next/link';

const Socials = () => {
	return (
		<div className="flex flex-row gap-5">
			<Link href={'https://github.com/leonyllukejayme'} target="_blank" >
				<Image src={'/github.svg'} alt="github" width={30} height={30} />
			</Link>
			<Link href={'https://www.linkedin.com/in/leonyl-luke-jayme-bb1188285'} target="_blank" >
				<Image src={'/linkedin.svg'} alt="linkedin" width={30} height={30} />
			</Link>
		</div>
	);
};

export default Socials;
