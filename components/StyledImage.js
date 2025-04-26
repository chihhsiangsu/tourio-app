import Image from "next/image";
import styled from "styled-components";
import { forwardRef } from "react";

const BaseImage = forwardRef((props, ref) => <Image ref={ref} {...props} />);

export const StyledImage = styled(BaseImage)`
  object-fit: cover;
  border-radius: 10px;
`;
