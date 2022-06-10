/** @format */

import clsx from "clsx";
import { ActionButtonStyles } from "./ActionButtonStyles";

interface ActionButtonProps {
  className?: any;
  type?: string;
  content: string;
}

export default function ActionButton({
  className,
  type,
  content,
}: ActionButtonProps) {
  const classes = ActionButtonStyles();

  return (
    <div
      className={clsx(
        className,
        type === "dark" ? classes.darkRoot : classes.lightRoot
      )}>
      <p className={type === "dark" ? classes.lightDes : classes.darkDes}>
        {content}
      </p>
      <i className='fas fa-chevron-right'></i>
    </div>
  );
}
