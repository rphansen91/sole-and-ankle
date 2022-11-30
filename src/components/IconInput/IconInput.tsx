import React, { CSSProperties, DetailedHTMLProps, InputHTMLAttributes } from "react";
import styled from "styled-components";

import { Icon, IconProps } from "../Icon";
import { VisuallyHidden } from "../VisuallyHidden";

const STYLES = {
  small: {
    fontSize: `${14 / 16}rem`,
    lineHeight: `${16 / 16}rem`,
    padding: "3px 0 2px 24px",
    strokeWidth: 1,
    size: 16,
  },
  large: {
    fontSize: `${18 / 16}rem`,
    lineHeight: `${24 / 16}rem`,
    padding: "7px 36px",
    strokeWidth: 2,
    size: 18,
  },
};

export interface IconInputProps {
    label?: string;
    size?: keyof typeof STYLES;
    icon?: IconProps['id'];
    width?: number;
}

export const IconInput = ({ label, icon = 'search', width = 250, size, ref, ...rest }: IconInputProps & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
  const styles = STYLES[size || 'small'];
  return (
    <Wrapper
      style={{
        "--stroke-width": styles["strokeWidth"] + "px",
        width
      } as CSSProperties}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconPlacement>
        <Icon id={icon} size={styles.size} strokeWidth={styles.strokeWidth} />
      </IconPlacement>
      <Input
        {...rest}
        style={{
          "--font-size": styles.fontSize,
          "--line-height": styles.lineHeight,
          "--padding": styles.padding,
        } as CSSProperties}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  position: relative;
  display: inline-block;
  border-bottom: var(--stroke-width) solid;
  color: var(--white);
  line-height: 0;
  &:hover {
    color: var(--white);
  }
`;

const IconPlacement = styled.div`
  position: absolute;
  margin: auto;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;

const Input = styled.input`
  padding: var(--padding);
  font-size: var(--font-size);
  line-height: var(--line-height);
  width: 100%;
  border: 0;
  outline-offset: 4px;
  color: inherit;
  background-color: transparent;
  font-weight: 700;
  &::placeholder {
    color: var(--gray-300);
    font-weight: normal;
  }
`;
