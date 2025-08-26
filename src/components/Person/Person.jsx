export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  let partner = null;
  let omitAge = null;

  if (isMarried) {
    if (sex === 'm') {
      partner = (
        <p className="Person__partner">{`${partnerName} is my wife`}</p>
      );
    } else if (sex === 'f') {
      partner = (
        <p className="Person__partner">{`${partnerName} is my husband`}</p>
      );
    }
  }

  if (!isMarried) {
    partner = <p className="Person__partner">I am not married</p>;
  }

  if (age) {
    omitAge = <p className="Person__age">{`I am ${age}`}</p>;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {omitAge}
      {partner}
    </section>
  );
};
