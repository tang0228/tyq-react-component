import React from "react";
import { KeyframesBox } from "./Keyframes.style";

const TKeyframes = ({ ...args }) => (
    <>
        <KeyframesBox {...args}>
            {args.children}
        </KeyframesBox>
    </>
)

export default TKeyframes;