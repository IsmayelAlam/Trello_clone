export default function Button({ type, ...rest }) {
  const classes = `hover:bg-slate-500 hover:text-white text-start rounded capitalize ${
    type === "card"
      ? "p-1 pl-2 m-2"
      : "p-2 my-5 mx-2 w-72 bg-slate-200/25 text-gray-600"
  }`;

  return (
    <button className={classes} {...rest}>
      + add new {type}
    </button>
  );
}
