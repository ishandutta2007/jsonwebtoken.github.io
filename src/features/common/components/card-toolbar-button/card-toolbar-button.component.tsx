import React, { PropsWithChildren, useRef } from "react";
import styles from "./card-toolbar-button.module.scss";
import { AriaButtonOptions, useButton } from "@react-aria/button";
import { clsx } from "clsx";
import { MonoFont } from "@/libs/theme/fonts";

export interface CardToolbarButtonComponentProps
  extends AriaButtonOptions<"span"> {
  variant: "standard" | "icon";
}

export const CardToolbarButtonComponent: React.FC<
  PropsWithChildren<CardToolbarButtonComponentProps>
> = (props) => {
  const { variant, children } = props;

  const ref = useRef<HTMLButtonElement | null>(null);

  const { buttonProps } = useButton(
    {
      ...props,
      elementType: "span",
      preventFocusOnPress: true,
    },
    ref,
  );

  return (
    <button
      {...buttonProps}
      type="button"
      className={clsx(
        variant === "icon" ? styles.button__icon : styles.button__standard,
        MonoFont.className,
      )}
      data-style="compact"
    >
      {children}
    </button>
  );
};
