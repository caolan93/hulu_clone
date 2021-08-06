import Thumbnail from "../components/Thumbnail";
import { useRouter } from "next/router";

const Results = ({ results }) => {
	const router = useRouter();

	return (
		<div>
			{results.map((result) => (
				<Thumbnail key={result.id} result={result} />
			))}
		</div>
	);
};

export default Results;
