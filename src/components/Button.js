import className from "classnames";
import { twMerge } from "tailwind-merge";




function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  
  const classes = twMerge(
    className(
    rest.className,
    "flex items-center gap-2 px-3 py-1.5 border",
    {
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-gray-900 bg-gray-900 text-white": secondary,
      "border-green-500 bg-green-500 text-white": success,
      "border-yellow-400 bg-yellow-400 text-white": warning,
      "border-red-500 bg-red-500 text-white": danger,
      "rounded-full": rounded,
      "bg-white border-4 m-2 p-4" : outline,
      "text-white m-2 p-4": !outline,
      "text-blue-900 !important": outline && primary,
      "text-gray-900 !important": outline && secondary,
      "text-green-900 !important": outline && success,
      "text-yellow-900 !important": outline && warning,
      "text-red-500 !important": outline && danger,
    }
  ));

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "Only one of primary, secondary, success, warning, danger can be true"
      );
    }
  },
};

export default Button;
