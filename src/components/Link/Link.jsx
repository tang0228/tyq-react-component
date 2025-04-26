import React from "react";
import { StyledLink } from "./Link.style";

const Link = ({ className, children }) => (
    <a className={className}>
        {children}
    </a>
);


const TLink = ({ ...args }) => (
    <>
        <Link {...args}>
            {args.children}
        </Link>

        <StyledLink {...args}>
            link
        </StyledLink>
    </>
)

export default TLink;
