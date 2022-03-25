import "./Card.css";

// re-usable card component that expenses are added to
const Card = (props) => {
  const classes = `card ${props.className}`;

  return <div className={classes}>{props.children}</div>;
};

export default Card;
