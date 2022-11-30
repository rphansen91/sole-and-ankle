/**
 * We're given this component "for free" since it's really more
 * specific to React and React Feather. Feel free to read if you're
 * interested, but otherwise you can rely on our docs to learn its
 * API / which props it takes.
 */
 import React, { CSSProperties } from 'react';
 import styled from 'styled-components';
 import { Search, AtSign, ChevronDown, ShoppingBag } from 'react-feather';
 
 const icons = {
   search: Search,
   'at-sign': AtSign,
   'chevron-down': ChevronDown,
   'shopping-bag': ShoppingBag,
 };
 
export interface IconProps {
    id: keyof typeof icons
    size: number;
    strokeWidth?: number;
}

 export const Icon = ({ id, size, strokeWidth = 1, ...delegated }: IconProps) => {
   const Component = icons[id];
 
   if (!Component) {
     throw new Error(`No icon found for ID: ${id}`);
   }

   const style = {
    '--size': `${size}px`,
    '--stroke-width': `${strokeWidth}px`,
  } as CSSProperties
 
   return (
     <Wrapper
       style={style}
       {...delegated}
     >
       <Component color="currentColor" size={size} />
     </Wrapper>
   );
 };
 
 const Wrapper = styled.div`
   width: var(--size);
   height: var(--size);

   & > svg {
     display: block;
     stroke-width: var(--stroke-width);
   }
 `;
 
 export default Icon;