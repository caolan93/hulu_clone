import Image from "next/image";
import HeaderItem from "../components/HeaderItem";
import {
	BadgeCheckIcon,
	CollectionIcon,
	HomeIcon,
	LightningBoltIcon,
	SearchIcon,
	UserIcon,
} from "@heroicons/react/outline";

const Header = () => {
	return (
		<header>
			<div className='flex p-2'>
				<HeaderItem title='Home' Icon={HomeIcon} />
				<HeaderItem title='Collection' Icon={CollectionIcon} />
				<HeaderItem title='LightningBolt' Icon={LightningBoltIcon} />
				<HeaderItem title='Search' Icon={SearchIcon} />
				<HeaderItem title='User' Icon={UserIcon} />
				<HeaderItem title='BadgeCheck' Icon={BadgeCheckIcon} />
			</div>
			<Image
				className='object-contain'
				src='https://links.papareact.com/ua6'
				width={200}
				height={100}
			/>
		</header>
	);
};

export default Header;
