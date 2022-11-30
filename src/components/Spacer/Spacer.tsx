import styled from 'styled-components/macro';

type IAxis = 'horizontal' | 'vertical'
type Props = { axis?: IAxis; size: number }

function getHeight({ axis, size }: Props) {
  return axis === 'horizontal' ? 1 : size;
}
function getWidth({ axis, size }: Props) {
  return axis === 'vertical' ? 1 : size;
}

export const Spacer = styled.span<Props>`
  display: block;
  width: ${getWidth}px;
  min-width: ${getWidth}px;
  height: ${getHeight}px;
  min-height: ${getHeight}px;
`;

export default Spacer;
