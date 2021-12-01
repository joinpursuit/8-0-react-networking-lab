export const PetList = (props) => {
  let names = "";
  if (props.name.length > 0) {
    names = props.name.map((item) => {
      return item.name;
    });
    names = names.join(", ");
  } else {
    names = "No pets listed";
  }

  return (
    <aside className="pets-list">
      <p>{props.show ? names : null}</p>
    </aside>
  );
};

export default PetList;
