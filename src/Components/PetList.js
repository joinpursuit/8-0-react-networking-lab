import "./PetList.css";

export const PetList = (props) => {
	const { list } = props;
	// let temp;
	// list.length ? temp = list.map((pet)=> {
	//   temp.append(pet.name)
	// })
	let renderedContent = list.length ? (
		list.map((pet) => {
			return <p>{pet.name}</p>;
		})
	) : (
		<p>No pets listed for this employee.</p>
	);
	console.log(renderedContent);
	return (
		<aside className="pets-list">
			<section>{renderedContent}</section>
		</aside>
	);
};

export default PetList;
